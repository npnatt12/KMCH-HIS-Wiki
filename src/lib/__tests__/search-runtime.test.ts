import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import {
  buildSearchRecords,
  SEARCH_COLLECTIONS,
  type SearchCollection,
  type SearchEntryInput,
  type SearchRecord,
} from '../search-index';
import { tokenizeThai, hasThai } from '../thai-tokens';

// Replicate the runtime scoring function from search-ui.js using the same logic
function scoreQuery(records: SearchRecord[], query: string) {
  const normalize = (v: string) => v.toLowerCase().normalize('NFKC').replace(/\s+/g, ' ').trim();
  const phrase = normalize(query);
  const tokens = phrase.split(/[\s,;:()[\]{}\\/|+]+/).filter((t) => t.length > 1);
  if (hasThai(phrase)) tokens.push(...tokenizeThai(phrase).map(normalize));

  return records
    .map((record) => {
      const title = normalize(record.title);
      const section = normalize(record.section);
      const body = normalize(record.body);
      const summary = normalize(record.summary);
      const keywords = normalize((record.keywords || []).join(' '));
      const searchText = `${title} ${section} ${summary} ${body} ${keywords}`;
      let total = record.priority || 0;
      if (phrase && title.includes(phrase)) total += 120;
      if (phrase && keywords.includes(phrase)) total += 80;
      tokens.forEach((token) => {
        if (title.includes(token)) total += 36;
        if (keywords.includes(token)) total += 24;
        if (body.includes(token)) total += 8;
      });
      const matched = tokens.filter((t) => searchText.includes(t)).length;
      if (tokens.length > 1) total += matched * 10;
      if (matched === 0 && !searchText.includes(phrase)) return { record, score: 0 };
      return { record, score: total };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((r) => r.record);
}

// Read content collections from disk. astro:content is a virtual module that
// only resolves inside Astro itself, so we replicate `getCollection()` by
// walking src/content/<collection>/ and parsing frontmatter with gray-matter.
function loadCollection(collection: SearchCollection, contentRoot: string): SearchEntryInput[] {
  const dir = join(contentRoot, collection);
  const entries: SearchEntryInput[] = [];

  const walk = (current: string) => {
    for (const name of readdirSync(current, { withFileTypes: true })) {
      const full = join(current, name.name);
      if (name.isDirectory()) {
        walk(full);
        continue;
      }
      if (!name.isFile() || !name.name.endsWith('.md')) continue;
      const raw = readFileSync(full, 'utf8');
      const { data, content } = matter(raw);
      // entry.id mirrors Astro's id: the path relative to the collection root.
      const id = relative(dir, full);
      entries.push({
        id,
        body: content,
        data: {
          title: typeof data.title === 'string' ? data.title : id,
          tags: Array.isArray(data.tags) ? data.tags : undefined,
        },
      });
    }
  };

  walk(dir);
  return entries;
}

const HERE = fileURLToPath(new URL('.', import.meta.url));
const CONTENT_ROOT = join(HERE, '..', '..', 'content');

let cachedRecords: SearchRecord[] | null = null;
function records() {
  if (!cachedRecords) {
    const buckets = SEARCH_COLLECTIONS.map((collection) => ({
      collection,
      entries: loadCollection(collection, CONTENT_ROOT),
    }));
    cachedRecords = buildSearchRecords(buckets);
  }
  return cachedRecords;
}

const FIXTURES: Array<{ query: string; mustContain: RegExp }> = [
  { query: 'การจ่ายยา', mustContain: /pharmacy|dispens|จ่ายยา/i },
  { query: 'ใบสั่งยา', mustContain: /pharmacy|dispens|prescription|สั่งยา/i },
  { query: 'ออกจากโรงพยาบาล', mustContain: /discharge|จำหน่าย|ออกจาก/i },
  { query: 'รับผู้ป่วยใน', mustContain: /admission|admit|รับผู้ป่วย/i },
  { query: 'prescription', mustContain: /pharmacy|dispens|prescription/i },
  { query: 'สัญญาณชีพ', mustContain: /vital|สัญญาณ/i },
  { query: 'นัดหมาย', mustContain: /appointment|นัด/i },
  { query: 'ฝากครรภ์', mustContain: /anc|ฝากครรภ์|antenatal/i },
  { query: 'ผ่าตัด', mustContain: /\bor\b|surgery|ผ่าตัด/i },
  { query: 'แพ้ยา', mustContain: /allergy|แพ้/i },
];

for (const f of FIXTURES) {
  test(`query "${f.query}" returns relevant top-5 result`, () => {
    const all = records();
    const top = scoreQuery(all, f.query);
    assert.ok(top.length > 0, `no results for "${f.query}"`);
    const haystack = top
      .map((r) => `${r.title} ${r.section} ${(r.keywords || []).join(' ')}`)
      .join(' | ');
    assert.match(
      haystack,
      f.mustContain,
      `top results for "${f.query}" lack a relevant page. Top: ${top
        .slice(0, 3)
        .map((r) => r.title)
        .join(', ')}`,
    );
  });
}
