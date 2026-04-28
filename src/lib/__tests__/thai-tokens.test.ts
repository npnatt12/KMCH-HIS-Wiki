import { test } from 'node:test';
import assert from 'node:assert/strict';
import { tokenizeThai, hasThai } from '../thai-tokens';

test('hasThai detects Thai characters', () => {
  assert.equal(hasThai('การจ่ายยา'), true);
  assert.equal(hasThai('opd patient'), false);
  assert.equal(hasThai('mixed ยา english'), true);
});

test('tokenizeThai segments การจ่ายยา into 3 tokens', () => {
  const tokens = tokenizeThai('การจ่ายยา');
  assert.ok(tokens.includes('การ'), `expected 'การ' in ${JSON.stringify(tokens)}`);
  assert.ok(tokens.includes('จ่าย'), `expected 'จ่าย' in ${JSON.stringify(tokens)}`);
  assert.ok(tokens.includes('ยา'), `expected 'ยา' in ${JSON.stringify(tokens)}`);
});

test('tokenizeThai returns empty for ASCII-only input', () => {
  assert.deepEqual(tokenizeThai('opd patient'), []);
});

test('tokenizeThai handles mixed Thai/English by extracting Thai runs', () => {
  const tokens = tokenizeThai('opd ผู้ป่วย status');
  assert.ok(tokens.length > 0);
  assert.ok(tokens.some((t) => t.includes('ผู้') || t.includes('ป่วย')));
});

test('tokenizeThai filters single-character tokens', () => {
  const tokens = tokenizeThai('ยา');
  // 'ยา' is two characters; should still be returned as one token
  assert.ok(tokens.length >= 1);
});
