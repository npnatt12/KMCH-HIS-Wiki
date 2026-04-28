import { test } from 'node:test';
import assert from 'node:assert/strict';
import { levenshtein, suggest } from '../did-you-mean';

test('levenshtein: identical strings = 0', () => {
  assert.equal(levenshtein('billing', 'billing'), 0);
});

test('levenshtein: single substitution = 1', () => {
  assert.equal(levenshtein('billing', 'bilking'), 1);
});

test('levenshtein: single deletion = 1', () => {
  assert.equal(levenshtein('billing', 'biling'), 1);
});

test('levenshtein: single insertion = 1', () => {
  assert.equal(levenshtein('billing', 'biillng'), 2);
});

test('levenshtein: completely different = full length', () => {
  assert.equal(levenshtein('abc', 'xyz'), 3);
});

test('suggest: exact match returns null (no suggestion needed)', () => {
  const dict = ['billing', 'pharmacy', 'admission'];
  assert.equal(suggest('billing', dict), null);
});

test('suggest: 1-edit typo returns the corrected word', () => {
  const dict = ['billing', 'pharmacy', 'admission'];
  assert.equal(suggest('biling', dict), 'billing');
});

test('suggest: 2-edit typo returns the corrected word', () => {
  const dict = ['pharmacy', 'admission'];
  assert.equal(suggest('phamracy', dict), 'pharmacy');
});

test('suggest: 3+ edit returns null (too far)', () => {
  const dict = ['pharmacy'];
  assert.equal(suggest('xxxyyyzzz', dict), null);
});

test('suggest: empty query returns null', () => {
  assert.equal(suggest('', ['billing']), null);
});

test('suggest: Thai single-char swap returns suggestion', () => {
  const dict = ['จ่ายยา', 'รับยา', 'สั่งยา'];
  assert.equal(suggest('จายยา', dict), 'จ่ายยา');
});
