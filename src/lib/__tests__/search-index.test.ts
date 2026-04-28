import { test } from 'node:test';
import assert from 'node:assert/strict';
// We test the buildKeywords function directly. Export it from search-index.ts.
import { buildKeywords } from '../search-index';

test('buildKeywords produces Thai sub-tokens for continuous Thai phrase', () => {
  const keywords = buildKeywords('การจ่ายยา', 'Overview', [], 'การจ่ายยา dispensing flow');
  // After Thai segmentation, expect at least 2 of the 3 sub-tokens
  const present = ['การ', 'จ่าย', 'ยา'].filter((t) => keywords.includes(t));
  assert.ok(present.length >= 2, `expected ≥2 of [การ, จ่าย, ยา] in ${JSON.stringify(keywords)}`);
});

test('buildKeywords still includes ASCII tokens for English title', () => {
  const keywords = buildKeywords('OPD Patient Status', 'Overview', ['workflow'], 'patient status flow');
  assert.ok(keywords.includes('opd'));
  assert.ok(keywords.includes('patient'));
  assert.ok(keywords.includes('status'));
});

test('buildKeywords includes both whole-word and segmented tokens for mixed text', () => {
  const keywords = buildKeywords('การจ่ายยา prescription', 'Overview', [], 'mixed body');
  assert.ok(keywords.includes('prescription'));
  assert.ok(keywords.includes('การ') || keywords.includes('จ่าย') || keywords.includes('ยา'));
});
