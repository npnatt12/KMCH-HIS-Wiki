import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatBE, formatGregorian } from '../format-date';

test('formatBE returns Buddhist year for 2026-04-28', () => {
  const d = new Date('2026-04-28T00:00:00+07:00');
  const out = formatBE(d);
  assert.match(out, /2569/);
  assert.match(out, /เมษายน/);
});

test('formatGregorian returns short English form', () => {
  const d = new Date('2026-04-28T00:00:00+07:00');
  const out = formatGregorian(d);
  assert.match(out, /Apr/);
  assert.match(out, /2026/);
  assert.match(out, /28/);
});

test('formatBE uses Asia/Bangkok timezone for boundary date', () => {
  // 2026-04-28 23:30 UTC = 2026-04-29 06:30 Asia/Bangkok
  const d = new Date('2026-04-28T23:30:00Z');
  const out = formatBE(d);
  assert.match(out, /2569/);
  assert.match(out, /29/);
});
