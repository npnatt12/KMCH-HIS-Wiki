import { test } from 'node:test';
import assert from 'node:assert/strict';
import { highlight } from '../search-highlight';

test('highlight: wraps single matched token in mark tags', () => {
  assert.equal(
    highlight('Pay the bill at the counter', ['bill']),
    'Pay the <mark>bill</mark> at the counter',
  );
});

test('highlight: case-insensitive match', () => {
  assert.equal(
    highlight('Pay the BILL', ['bill']),
    'Pay the <mark>BILL</mark>',
  );
});

test('highlight: multiple tokens each wrapped', () => {
  const out = highlight('drug allergy alert', ['drug', 'alert']);
  assert.equal(out, '<mark>drug</mark> allergy <mark>alert</mark>');
});

test('highlight: escapes HTML in source', () => {
  assert.equal(
    highlight('<script>x</script>', ['x']),
    '&lt;script&gt;<mark>x</mark>&lt;/script&gt;',
  );
});

test('highlight: empty token list returns escaped source', () => {
  assert.equal(highlight('<b>hi</b>', []), '&lt;b&gt;hi&lt;/b&gt;');
});

test('highlight: empty source returns empty', () => {
  assert.equal(highlight('', ['x']), '');
});

test('highlight: Thai token wrapped', () => {
  assert.equal(
    highlight('การจ่ายยา', ['จ่ายยา']),
    'การ<mark>จ่ายยา</mark>',
  );
});

test('highlight: token with regex special chars treated literally', () => {
  assert.equal(
    highlight('cost 1.5 baht', ['1.5']),
    'cost <mark>1.5</mark> baht',
  );
});
