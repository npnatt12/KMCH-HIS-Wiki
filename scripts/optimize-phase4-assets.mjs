#!/usr/bin/env node
/**
 * Optimize Phase-4 PNGs: WebP + 300px thumbnail. Idempotent.
 */
import { readdir, mkdir, stat } from 'node:fs/promises';
import { dirname, join, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const HERE = dirname(fileURLToPath(import.meta.url));
const PORTAL_ROOT = resolve(HERE, '..');
const VAULT_ASSETS = resolve(PORTAL_ROOT, '..', 'KMCH HIS manual', 'assets', 'phase-4');
const DEST_ROOT = resolve(PORTAL_ROOT, 'public', 'screenshots', 'phase-4');

async function isUpToDate(source, dest) {
  try {
    const [s, d] = await Promise.all([stat(source), stat(dest)]);
    return d.mtimeMs >= s.mtimeMs;
  } catch {
    return false;
  }
}

export async function optimizeAsset(source, fullDest, thumbDest) {
  const [fullOk, thumbOk] = await Promise.all([
    isUpToDate(source, fullDest),
    isUpToDate(source, thumbDest),
  ]);
  if (fullOk && thumbOk) return { skipped: true };
  await mkdir(dirname(fullDest), { recursive: true });
  await sharp(source).webp({ quality: 80 }).toFile(fullDest);
  await sharp(source).resize(300, null, { fit: 'inside' }).webp({ quality: 75 }).toFile(thumbDest);
  return { skipped: false };
}

async function listPngsRecursive(root) {
  let entries;
  try {
    entries = await readdir(root, { withFileTypes: true });
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
  const out = [];
  for (const entry of entries) {
    const full = join(root, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await listPngsRecursive(full)));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.png')) {
      out.push(full);
    }
  }
  return out;
}

export async function optimizeDirectory(sourceRoot, destRoot) {
  const sources = await listPngsRecursive(sourceRoot);
  let processed = 0;
  let skipped = 0;
  for (const source of sources) {
    const rel = relative(sourceRoot, source);
    const stem = rel.replace(/\.png$/i, '');
    const fullDest = join(destRoot, `${stem}.webp`);
    const thumbDest = join(destRoot, `${stem}.thumb.webp`);
    const result = await optimizeAsset(source, fullDest, thumbDest);
    if (result.skipped) skipped += 1;
    else processed += 1;
  }
  return { processed, skipped, total: sources.length };
}

async function main() {
  console.log(`[optimize-phase4-assets] source: ${VAULT_ASSETS}`);
  console.log(`[optimize-phase4-assets] dest: ${DEST_ROOT}`);
  const result = await optimizeDirectory(VAULT_ASSETS, DEST_ROOT);
  console.log(`[optimize-phase4-assets] processed=${result.processed} skipped=${result.skipped} total=${result.total}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
