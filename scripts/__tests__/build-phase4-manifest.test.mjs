import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parsePageMap, buildManifest } from '../build-phase4-manifest.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const FIXTURE = join(HERE, 'fixtures/phase-4-image-page-map.fixture.md');

test('parsePageMap: extracts page sections', async () => {
  const md = await readFile(FIXTURE, 'utf-8');
  const sections = parsePageMap(md);
  const titles = sections.map((s) => s.displayName);
  assert.deepEqual(titles, ['Odoo ERP', 'Odoo Vendor Bill Screen', 'Telemedicine Admin Portal']);
});

test('parsePageMap: parses asset rows', async () => {
  const md = await readFile(FIXTURE, 'utf-8');
  const [odoo] = parsePageMap(md);
  assert.equal(odoo.assets.length, 3);
  assert.equal(odoo.assets[0].filename, 'odoo-user-manual-p164-img0587.png');
  assert.equal(odoo.assets[0].sourceSlug, 'odoo-user-manual');
  assert.equal(odoo.assets[0].page, '164');
  assert.match(odoo.assets[0].caption, /Vendor Payment/);
  assert.deepEqual(odoo.assets[0].ocrTerms, ['Vendor Payment', 'Customer Invoice']);
});

test('parsePageMap: empty page row OK', async () => {
  const md = await readFile(FIXTURE, 'utf-8');
  const [odoo] = parsePageMap(md);
  assert.equal(odoo.assets[1].page, '');
});

test('buildManifest: resolves [[Wiki Page]] to portal slug', async () => {
  const md = await readFile(FIXTURE, 'utf-8');
  const slugMap = new Map([
    ['Odoo ERP', 'odoo-erp'],
    ['Odoo Vendor Bill Screen', 'odoo-vendor-bill-screen'],
    ['Telemedicine Admin Portal', 'telemedicine-admin-portal'],
  ]);
  const manifest = buildManifest(md, slugMap);
  assert.ok(manifest.pages['odoo-erp']);
  assert.ok(manifest.pages['odoo-vendor-bill-screen']);
  assert.ok(manifest.pages['telemedicine-admin-portal']);
});

test('buildManifest: D2 filter — drops generic "X: HIS ERP Interface" with no OCR terms', async () => {
  const md = await readFile(FIXTURE, 'utf-8');
  const slugMap = new Map([['Odoo ERP', 'odoo-erp']]);
  const manifest = buildManifest(md, slugMap);
  const page = manifest.pages['odoo-erp'];
  assert.equal(page.totalCount, 3, 'all 3 assets in display');
  assert.equal(page.assets.filter((a) => a.searchable).length, 2, 'only 2 are searchable (D2)');
});

test('buildManifest: D1 displayCount caps "100+" when totalCount > 100', () => {
  const md = `## Big Page

Mapped images: 200

| Asset | Source Slug | Page | Caption | OCR Terms |
|-------|-------------|------|---------|-----------|
${Array.from({ length: 200 }, (_, i) =>
  `| [a-${i}.png](../a/a-${i}.png) | a | ${i} | A page ${i}: Term A. | Term A |`,
).join('\n')}
`;
  const slugMap = new Map([['Big Page', 'big-page']]);
  const manifest = buildManifest(md, slugMap);
  assert.equal(manifest.pages['big-page'].totalCount, 200);
  assert.equal(manifest.pages['big-page'].displayCount, '100+');
});

test('buildManifest: displayCount equals totalCount when ≤100', () => {
  const md = `## Small

Mapped images: 5

| Asset | Source Slug | Page | Caption | OCR Terms |
|-------|-------------|------|---------|-----------|
| [s-1.png](../a/s-1.png) | a | 1 | S 1: Term. | Term |
`;
  const slugMap = new Map([['Small', 'small']]);
  const manifest = buildManifest(md, slugMap);
  assert.equal(manifest.pages['small'].totalCount, 1);
  assert.equal(manifest.pages['small'].displayCount, '1');
});

test('buildManifest: skips section when [[heading]] has no slug map entry', () => {
  const md = `## Unknown Page

Mapped images: 1

| Asset | Source Slug | Page | Caption | OCR Terms |
|-------|-------------|------|---------|-----------|
| [u.png](../a/u.png) | a | 1 | U: Term. | Term |
`;
  const slugMap = new Map();
  const manifest = buildManifest(md, slugMap);
  assert.deepEqual(manifest.pages, {});
});
