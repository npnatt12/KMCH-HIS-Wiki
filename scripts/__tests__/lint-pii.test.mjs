import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PII_PATTERNS } from '../lint-vault.mjs';

test('matches Thai national ID with hyphens', () => {
  assert.ok(PII_PATTERNS.thaiNationalId.test('1-2345-67890-12-3'));
});

test('matches Thai national ID without hyphens', () => {
  assert.ok(PII_PATTERNS.thaiNationalId.test('1234567890123'));
});

test('matches HN with various separators', () => {
  assert.ok(PII_PATTERNS.hn.test('HN: 12345678'));
  assert.ok(PII_PATTERNS.hn.test('HN-99887766'));
  assert.ok(PII_PATTERNS.hn.test('hn 1234567890'));
});

test('matches Thai mobile phone format', () => {
  assert.ok(PII_PATTERNS.phone.test('081-234-5678'));
  assert.ok(PII_PATTERNS.phone.test('02 222 3333'));
  assert.ok(PII_PATTERNS.phone.test('0812345678'));
});

test('does NOT match common medical terms or English words', () => {
  assert.ok(!PII_PATTERNS.thaiNationalId.test('Patient name'));
  assert.ok(!PII_PATTERNS.hn.test('header'));
  assert.ok(!PII_PATTERNS.phone.test('OPD-12'));
});

test('does NOT match short numeric strings', () => {
  assert.ok(!PII_PATTERNS.thaiNationalId.test('12345'));
  assert.ok(!PII_PATTERNS.phone.test('123'));
});
