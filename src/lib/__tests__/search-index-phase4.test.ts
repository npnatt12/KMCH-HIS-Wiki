import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  injectPhase4Records,
  type SearchRecord,
  type Phase4Manifest,
} from '../search-index';

const baseRecord: SearchRecord = {
  id: 'entities:Foo Screen.md:0',
  title: 'Foo Screen',
  section: 'Overview',
  type: 'entity',
  url: '/entities/foo-screen/',
  module: 'odoo',
  summary: 'Foo description',
  body: 'Foo body',
  keywords: ['foo'],
  priority: 8,
};

const manifest: Phase4Manifest = {
  generatedAt: '2026-04-28T00:00:00.000Z',
  pages: {
    'foo-screen': {
      displayName: 'Foo Screen',
      totalCount: 2,
      displayCount: '2',
      assets: [
        {
          file: 'screenshots/phase-4/x/x-1.webp',
          thumb: 'screenshots/phase-4/x/x-1.thumb.webp',
          caption: 'Foo Screen page 1: Vendor Bill, Inventory.',
          ocrTerms: ['Vendor Bill', 'Inventory'],
          filename: 'x-1.png',
          sourceSlug: 'x',
          page: '1',
          searchable: true,
        },
        {
          file: 'screenshots/phase-4/x/x-2.webp',
          thumb: 'screenshots/phase-4/x/x-2.thumb.webp',
          caption: 'Foo: HIS ERP Interface.',
          ocrTerms: [],
          filename: 'x-2.png',
          sourceSlug: 'x',
          page: '',
          searchable: false,
        },
      ],
    },
  },
};

test('injectPhase4Records: appends one record per searchable asset', () => {
  const out = injectPhase4Records([baseRecord], manifest);
  assert.equal(out.length, 2, 'original + 1 searchable phase-4 asset (the non-searchable one is dropped)');
  const phase4 = out.find((r) => r.id.includes('phase-4'));
  assert.ok(phase4);
  assert.equal(phase4!.title, 'Foo Screen');
  assert.match(phase4!.section, /Screenshot: x-1\.png/);
  assert.equal(phase4!.url, '/entities/foo-screen/');
  assert.equal(phase4!.priority, 4);
  assert.match(phase4!.body, /Vendor Bill/);
  assert.deepEqual(phase4!.keywords.sort(), ['inventory', 'vendor bill', 'x-1.png'].sort());
});

test('injectPhase4Records: original records preserved', () => {
  const out = injectPhase4Records([baseRecord], manifest);
  assert.ok(out.find((r) => r.id === baseRecord.id));
});

test('injectPhase4Records: page with no manifest match returns input unchanged', () => {
  const other: SearchRecord = { ...baseRecord, id: 'entities:Other.md:0', url: '/entities/other/' };
  const out = injectPhase4Records([other], manifest);
  assert.equal(out.length, 1);
});

test('injectPhase4Records: empty manifest returns input unchanged', () => {
  const out = injectPhase4Records([baseRecord], { generatedAt: '', pages: {} });
  assert.equal(out.length, 1);
});

test('injectPhase4Records: matches multiple records to same slug correctly (one per asset, not per record)', () => {
  const r2: SearchRecord = { ...baseRecord, id: 'entities:Foo Screen.md:1', section: 'Body' };
  const out = injectPhase4Records([baseRecord, r2], manifest);
  const phase4Records = out.filter((r) => r.id.includes('phase-4'));
  assert.equal(phase4Records.length, 1, 'one phase-4 record per searchable asset, not per native record');
});
