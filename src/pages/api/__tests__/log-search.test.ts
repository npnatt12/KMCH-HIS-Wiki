import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { handlePayload, _resetRateLimit } from '../log-search';

beforeEach(() => _resetRateLimit());

test('handlePayload: clean query → ok', () => {
  const r = handlePayload({ q: 'admission', results_count: 5, top_score: 80, ms: 30 }, '1.2.3.4');
  assert.equal(r.status, 204);
  assert.equal(r.reason, undefined);
});

test('handlePayload: HN in query → rejected', () => {
  const r = handlePayload({ q: 'find HN 1234567', results_count: 0, top_score: 0, ms: 5 }, '1.2.3.4');
  assert.equal(r.status, 400);
  assert.equal(r.reason, 'pii');
});

test('handlePayload: Thai national ID in query → rejected', () => {
  const r = handlePayload({ q: '1-2345-67890-12-3', results_count: 0, top_score: 0, ms: 5 }, '1.2.3.4');
  assert.equal(r.status, 400);
  assert.equal(r.reason, 'pii');
});

test('handlePayload: phone number in query → rejected', () => {
  const r = handlePayload({ q: '081-234-5678 ติดต่อ', results_count: 0, top_score: 0, ms: 5 }, '1.2.3.4');
  assert.equal(r.status, 400);
  assert.equal(r.reason, 'pii');
});

test('handlePayload: query > 200 chars → rejected', () => {
  const longQ = 'a'.repeat(201);
  const r = handlePayload({ q: longQ, results_count: 0, top_score: 0, ms: 0 }, '1.2.3.4');
  assert.equal(r.status, 400);
  assert.equal(r.reason, 'too_long');
});

test('handlePayload: 60 requests in same minute ok, 61st rate-limited', () => {
  for (let i = 0; i < 60; i++) {
    const r = handlePayload({ q: 'q' + i, results_count: 1, top_score: 50, ms: 5 }, '5.5.5.5');
    assert.equal(r.status, 204, `request ${i + 1} should succeed`);
  }
  const blocked = handlePayload({ q: 'extra', results_count: 1, top_score: 50, ms: 5 }, '5.5.5.5');
  assert.equal(blocked.status, 429);
  assert.equal(blocked.reason, 'rate_limit');
});

test('handlePayload: rate limit is per-IP', () => {
  for (let i = 0; i < 60; i++) {
    handlePayload({ q: 'q', results_count: 1, top_score: 50, ms: 5 }, '6.6.6.6');
  }
  const otherIp = handlePayload({ q: 'q', results_count: 1, top_score: 50, ms: 5 }, '7.7.7.7');
  assert.equal(otherIp.status, 204);
});

test('handlePayload: missing q → rejected', () => {
  // @ts-expect-error testing wrong shape
  const r = handlePayload({ results_count: 1, top_score: 50, ms: 5 }, '8.8.8.8');
  assert.equal(r.status, 400);
  assert.equal(r.reason, 'invalid');
});
