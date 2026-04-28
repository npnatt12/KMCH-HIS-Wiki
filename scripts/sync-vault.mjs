#!/usr/bin/env node
import { readFile, writeFile, mkdir, readdir, unlink } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildVaultIndex } from './sync-vault/vault-index.mjs';
import { transformMarkdown } from './sync-vault/transform.mjs';
import { loadOcrMap, applyOcrCaptions } from './sync-vault/ocr-captions.mjs';

const PORTAL_ROOT = dirname(fileURLToPath(import.meta.url)) + '/..';
const VAULT_ROOT = join(PORTAL_ROOT, '..', 'KMCH HIS manual');
const PORTAL_CONTENT = join(PORTAL_ROOT, 'src', 'content');
const OCR_MAP_PATH = join(VAULT_ROOT, 'ocr-captions.json');

const COLLECTIONS = [
  { vault: 'workflows', portal: 'workflows' },
  { vault: 'modules', portal: 'modules' },
  { vault: 'entities', portal: 'entities' },
  { vault: 'concepts', portal: 'concepts' },
  { vault: 'roles', portal: 'roles' },
];

const SPECIAL_FILES = [
  { vaultPath: 'faq.md', portalPath: 'faq/index.md' },
];

const args = process.argv.slice(2);
const flags = {
  watch: args.includes('--watch'),
  prune: args.includes('--prune'),
  dryRun: args.includes('--dry-run'),
  quiet: args.includes('--quiet'),
};

function log(msg) {
  if (!flags.quiet) console.log(`[sync-vault] ${msg}`);
}

function warn(msg) {
  console.warn(`[sync-vault] ⚠ ${msg}`);
}

async function listMarkdown(dir) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    return entries
      .filter((e) => e.isFile() && e.name.endsWith('.md') && !e.name.startsWith('_'))
      .map((e) => e.name);
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
}

async function syncOne(vaultFile, portalFile, index, ocrMap) {
  const raw = await readFile(vaultFile, 'utf-8');
  const { content, warnings } = transformMarkdown(raw, index, { collectWarnings: true });
  const pageId = relative(VAULT_ROOT, vaultFile);
  const enriched = applyOcrCaptions(content, pageId, ocrMap);

  for (const w of warnings) {
    warn(`unresolved [[${w.target}]] in ${relative(PORTAL_ROOT, vaultFile)}`);
  }

  if (flags.dryRun) {
    log(`would write ${relative(PORTAL_ROOT, portalFile)}`);
    return { changed: true };
  }

  let existing = null;
  try {
    existing = await readFile(portalFile, 'utf-8');
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
  }

  if (existing === enriched) return { changed: false };

  await mkdir(dirname(portalFile), { recursive: true });
  await writeFile(portalFile, enriched, 'utf-8');
  log(`wrote ${relative(PORTAL_ROOT, portalFile)}`);
  return { changed: true };
}

async function syncAll() {
  const index = await buildVaultIndex(VAULT_ROOT);
  log(`indexed ${index.size} vault pages`);
  const ocrMap = await loadOcrMap(OCR_MAP_PATH);
  if (ocrMap.size > 0) log(`OCR map: ${ocrMap.size} pages with captions`);

  let changed = 0;
  let total = 0;
  const portalFilesWritten = new Set();

  for (const { vault, portal } of COLLECTIONS) {
    const vaultDir = join(VAULT_ROOT, vault);
    const portalDir = join(PORTAL_CONTENT, portal);
    const files = await listMarkdown(vaultDir);
    for (const file of files) {
      total++;
      const r = await syncOne(join(vaultDir, file), join(portalDir, file), index, ocrMap);
      if (r.changed) changed++;
      portalFilesWritten.add(join(portalDir, file));
    }
  }

  for (const { vaultPath, portalPath } of SPECIAL_FILES) {
    const vaultFile = join(VAULT_ROOT, vaultPath);
    const portalFile = join(PORTAL_CONTENT, portalPath);
    try {
      total++;
      const r = await syncOne(vaultFile, portalFile, index, ocrMap);
      if (r.changed) changed++;
      portalFilesWritten.add(portalFile);
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
    }
  }

  await checkOrphans(portalFilesWritten);

  log(`${total} files scanned, ${changed} changed`);
}

async function checkOrphans(written) {
  const orphans = [];
  for (const { portal } of COLLECTIONS) {
    const dir = join(PORTAL_CONTENT, portal);
    const files = await listMarkdown(dir);
    for (const file of files) {
      const full = join(dir, file);
      if (!written.has(full)) orphans.push(full);
    }
  }

  if (orphans.length === 0) return;

  if (flags.prune) {
    for (const f of orphans) {
      await unlink(f);
      log(`pruned ${relative(PORTAL_ROOT, f)}`);
    }
    return;
  }

  warn(`${orphans.length} portal file(s) have no vault counterpart:`);
  for (const f of orphans) console.warn(`    - ${relative(PORTAL_ROOT, f)}`);
  console.warn(`    Run with --prune to delete, or remove them manually.`);
}

async function watch() {
  const { default: chokidar } = await import('chokidar');
  log(`watching ${VAULT_ROOT}`);
  const watcher = chokidar.watch(
    COLLECTIONS.map((c) => join(VAULT_ROOT, c.vault)).concat([join(VAULT_ROOT, 'faq.md')]),
    {
      ignoreInitial: false,
      awaitWriteFinish: { stabilityThreshold: 200, pollInterval: 50 },
    },
  );

  let timer = null;
  const debounceSync = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      syncAll().catch((err) => console.error(err));
    }, 100);
  };

  watcher.on('add', debounceSync);
  watcher.on('change', debounceSync);
  watcher.on('unlink', debounceSync);
}

async function main() {
  if (flags.watch) {
    await syncAll();
    await watch();
    return;
  }
  await syncAll();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
