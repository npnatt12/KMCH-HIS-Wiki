#!/usr/bin/env node
/**
 * Build Phase-4 manifest from codex's phase-4-image-page-map.md.
 * Output: kmch-portal/public/phase-4-manifest.json
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildVaultIndex } from './sync-vault/vault-index.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const PORTAL_ROOT = resolve(HERE, '..');
const VAULT_ROOT = resolve(PORTAL_ROOT, '..', 'KMCH HIS manual');
const PAGE_MAP_PATH = join(VAULT_ROOT, 'phase-4-analysis', 'phase-4-image-page-map.md');
const MANIFEST_OUT = join(PORTAL_ROOT, 'public', 'phase-4-manifest.json');

const GENERIC_CAPTION_RE = /:\s*HIS ERP Interface\.?\s*(?:Suggested target:.*)?$/;

export function parsePageMap(markdown) {
  const sections = [];
  const lines = markdown.split('\n');
  let current = null;
  let inTable = false;

  for (const line of lines) {
    const h2 = /^##\s+(.+)$/.exec(line);
    if (h2) {
      if (current) sections.push(current);
      const heading = h2[1].trim();
      if (heading === 'Target Summary' || heading === 'Mapping Policy') {
        current = null;
        continue;
      }
      current = { displayName: heading, assets: [] };
      inTable = false;
      continue;
    }
    if (!current) continue;
    if (/^\|\s*Asset\s*\|/.test(line)) {
      inTable = true;
      continue;
    }
    if (inTable && /^\|\s*-+\s*\|/.test(line)) continue;
    if (!inTable) continue;
    if (!line.startsWith('|')) {
      inTable = false;
      continue;
    }

    const cells = line
      .split('|')
      .slice(1, -1)
      .map((c) => c.trim());
    if (cells.length < 5) continue;
    const linkMatch = /\[([^\]]+)\]\(([^)]+)\)/.exec(cells[0]);
    if (!linkMatch) continue;
    const filename = linkMatch[1];
    const sourceSlug = cells[1];
    const page = cells[2];
    const caption = cells[3];
    const ocrTerms = cells[4]
      ? cells[4].split(',').map((s) => s.trim()).filter(Boolean)
      : [];
    current.assets.push({ filename, sourceSlug, page, caption, ocrTerms });
  }
  if (current) sections.push(current);
  return sections;
}

export function buildManifest(markdown, slugMap) {
  const sections = parsePageMap(markdown);
  const pages = {};
  for (const section of sections) {
    const slug = slugMap.get(section.displayName);
    if (!slug) continue;
    const totalCount = section.assets.length;
    const displayCount = totalCount > 100 ? '100+' : String(totalCount);
    const assets = section.assets.map((a) => {
      const stem = a.filename.replace(/\.png$/i, '');
      const file = `screenshots/phase-4/${a.sourceSlug}/${stem}.webp`;
      const thumb = `screenshots/phase-4/${a.sourceSlug}/${stem}.thumb.webp`;
      const isGeneric =
        a.ocrTerms.length === 0 && GENERIC_CAPTION_RE.test(a.caption.trim());
      return {
        file,
        thumb,
        caption: a.caption,
        ocrTerms: a.ocrTerms,
        filename: a.filename,
        sourceSlug: a.sourceSlug,
        page: a.page,
        searchable: !isGeneric,
      };
    });
    pages[slug] = {
      displayName: section.displayName,
      totalCount,
      displayCount,
      assets,
    };
  }
  return {
    generatedAt: new Date().toISOString(),
    pages,
  };
}

async function main() {
  let raw;
  try {
    raw = await readFile(PAGE_MAP_PATH, 'utf-8');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.warn(`[build-phase4-manifest] page-map not found at ${PAGE_MAP_PATH}; emitting empty manifest`);
      await mkdir(dirname(MANIFEST_OUT), { recursive: true });
      await writeFile(
        MANIFEST_OUT,
        JSON.stringify({ generatedAt: new Date().toISOString(), pages: {} }, null, 2),
      );
      return;
    }
    throw err;
  }
  const slugMap = await buildVaultIndex(VAULT_ROOT).then((map) => {
    const out = new Map();
    for (const [name, url] of map) {
      const slug = url.replace(/^\/[^/]+\/(.+?)\/$/, '$1');
      out.set(name, slug);
    }
    return out;
  });
  const manifest = buildManifest(raw, slugMap);
  await mkdir(dirname(MANIFEST_OUT), { recursive: true });
  await writeFile(MANIFEST_OUT, JSON.stringify(manifest, null, 2));
  const pageCount = Object.keys(manifest.pages).length;
  const assetCount = Object.values(manifest.pages).reduce((sum, p) => sum + p.totalCount, 0);
  console.log(`[build-phase4-manifest] wrote ${pageCount} pages, ${assetCount} assets total`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
