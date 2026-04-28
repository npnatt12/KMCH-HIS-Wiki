import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

// Order matters: when same filename exists in multiple folders, FIRST wins.
const COLLECTION_ORDER = ['modules', 'workflows', 'entities', 'concepts', 'roles'];

function slugify(value) {
  return value.replace(/\.md$/, '').toLowerCase().trim().replace(/\s+/g, '-');
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

export async function buildVaultIndex(vaultRoot) {
  const map = new Map();
  for (const collection of COLLECTION_ORDER) {
    const folder = join(vaultRoot, collection);
    const files = await listMarkdown(folder);
    for (const file of files) {
      const key = file.replace(/\.md$/, '');
      if (map.has(key)) continue; // first-wins per COLLECTION_ORDER
      const url = `/${collection}/${slugify(file)}/`;
      map.set(key, url);
    }
  }
  return map;
}
