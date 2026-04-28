import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSearchRecords, type SearchEntryInput, type SearchCollection } from '../search-index';

function fixture(): Array<{ collection: SearchCollection; entries: SearchEntryInput[] }> {
  return [
    {
      collection: 'modules',
      entries: [{ id: 'mod-a.md', body: '## Overview\nLorem ipsum module body content here for matching.', data: { title: 'Module A' } }],
    },
    {
      collection: 'workflows',
      entries: [{ id: 'wf-1.md', body: '## Steps\nThis workflow describes how staff should proceed.', data: { title: 'Workflow One' } }],
    },
    {
      collection: 'entities',
      entries: [{ id: 'ent-x.md', body: '## Detail\nEntity X has fields and tabs and a save action behavior.', data: { title: 'Entity X' } }],
    },
    {
      collection: 'concepts',
      entries: [{ id: 'concept-q.md', body: '## Background\nConcept Q explains why a status changes meaningfully.', data: { title: 'Concept Q' } }],
    },
    {
      collection: 'faq',
      entries: [{ id: 'how-to-foo.md', body: '## Steps\nClick foo then bar to complete the workflow path.', data: { title: 'How to Foo' } }],
    },
  ];
}

test('buildSearchRecords includes records from every collection', () => {
  const records = buildSearchRecords(fixture());
  const types = new Set(records.map((r) => r.type));
  assert.ok(types.has('module'));
  assert.ok(types.has('workflow'));
  assert.ok(types.has('entity'));
  assert.ok(types.has('concept'));
  assert.ok(types.has('how-to'));
});

test('buildSearchRecords from a single bucket only emits that collection', () => {
  const buckets = fixture();
  const onlyEntities = buckets.filter((b) => b.collection === 'entities');
  const records = buildSearchRecords(onlyEntities);
  assert.ok(records.length > 0);
  assert.ok(records.every((r) => r.type === 'entity'));
});

test('split records merged equal full-bucket records (same total)', () => {
  const all = buildSearchRecords(fixture());
  const split = fixture().flatMap((b) => buildSearchRecords([b]));
  assert.equal(split.length, all.length);
});
