import { test } from 'node:test';
import assert from 'node:assert/strict';
import { transformMarkdown } from '../transform.mjs';

const INDEX = new Map([
  ['Sample Screen', '/entities/sample-screen/'],
  ['Sample Concept', '/concepts/sample-concept/'],
  ['ANC', '/modules/anc/'],
]);

test('passes through frontmatter unchanged', () => {
  const input = `---
title: T
type: workflow
---

Body.`;
  const out = transformMarkdown(input, INDEX);
  assert.match(out, /^---\ntitle: T\ntype: workflow\n---\n\nBody\.\s*$/);
});

test('rewrites simple wikilink to markdown link', () => {
  const out = transformMarkdown('See [[Sample Screen]] for details.', INDEX);
  assert.equal(out, 'See [Sample Screen](/entities/sample-screen/) for details.');
});

test('rewrites aliased wikilink', () => {
  const out = transformMarkdown('See [[Sample Concept|the concept]].', INDEX);
  assert.equal(out, 'See [the concept](/concepts/sample-concept/).');
});

test('keeps unresolved wikilink as plain text', () => {
  const out = transformMarkdown('See [[Unknown Page]].', INDEX);
  assert.equal(out, 'See Unknown Page.');
});

test('keeps unresolved aliased wikilink as alias text', () => {
  const out = transformMarkdown('See [[Unknown|alias]].', INDEX);
  assert.equal(out, 'See alias.');
});

test('handles multiple wikilinks on one line', () => {
  const out = transformMarkdown('From [[ANC]] to [[Sample Screen]].', INDEX);
  assert.equal(out, 'From [ANC](/modules/anc/) to [Sample Screen](/entities/sample-screen/).');
});

test('strips Obsidian %% comments %%', () => {
  const out = transformMarkdown('Visible %% hidden note %% text.', INDEX);
  assert.equal(out, 'Visible  text.');
});

test('strips multi-line %% comments', () => {
  const out = transformMarkdown('Before\n%% block\ncomment %%\nAfter', INDEX);
  assert.equal(out, 'Before\n\nAfter');
});

test('does not touch markdown links', () => {
  const input = 'See [official](https://example.com).';
  assert.equal(transformMarkdown(input, INDEX), input);
});

test('does not touch code-fenced wikilinks', () => {
  const input = 'Example:\n```\n[[Sample Screen]]\n```\nDone.';
  // Code fences should preserve content unchanged
  assert.match(transformMarkdown(input, INDEX), /\[\[Sample Screen\]\]/);
});

test('returns warnings array with unresolved wikilinks', () => {
  const result = transformMarkdown('See [[Unknown Page]].', INDEX, { collectWarnings: true });
  assert.deepEqual(result.warnings, [{ type: 'unresolved-wikilink', target: 'Unknown Page' }]);
});

test('returns content+warnings shape when collectWarnings=true', () => {
  const result = transformMarkdown('See [[ANC]].', INDEX, { collectWarnings: true });
  assert.equal(result.content, 'See [ANC](/modules/anc/).');
  assert.deepEqual(result.warnings, []);
});

test('resolves folder-prefix wikilink against bare filename', () => {
  const out = transformMarkdown('See [[entities/Sample Screen]].', INDEX);
  assert.equal(out, 'See [Sample Screen](/entities/sample-screen/).');
});

test('resolves folder-prefix wikilink with alias', () => {
  const out = transformMarkdown('See [[entities/Sample Screen|that screen]].', INDEX);
  assert.equal(out, 'See [that screen](/entities/sample-screen/).');
});

test('strips trailing backslash on wikilink target', () => {
  const out = transformMarkdown('See [[Sample Screen\\]].', INDEX);
  assert.equal(out, 'See [Sample Screen](/entities/sample-screen/).');
});

test('appends slugified anchor for [[Page#Section]]', () => {
  const out = transformMarkdown('See [[Sample Screen#Validation Rules]].', INDEX);
  assert.equal(out, 'See [Sample Screen](/entities/sample-screen/#validation-rules).');
});

test('handles combined folder prefix + anchor', () => {
  const out = transformMarkdown('See [[entities/Sample Screen#Section]].', INDEX);
  assert.equal(out, 'See [Sample Screen](/entities/sample-screen/#section).');
});

test('keeps Thai anchor characters in fragment slug', () => {
  const out = transformMarkdown('See [[ANC#สถานะ]].', INDEX);
  assert.equal(out, 'See [ANC](/modules/anc/#สถานะ).');
});

test('keeps unresolved folder-prefix wikilink as basename text', () => {
  const out = transformMarkdown('See [[entities/Unknown Screen]].', INDEX);
  assert.equal(out, 'See Unknown Screen.');
});
