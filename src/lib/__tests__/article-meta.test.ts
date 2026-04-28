import { test } from 'node:test';
import assert from 'node:assert/strict';
import { hasImages } from '../article-meta';

test('returns true for markdown image syntax', () => {
  assert.equal(hasImages('Some text\n\n![alt](image.png)\n\nmore'), true);
});

test('returns true for HTML img tag', () => {
  assert.equal(hasImages('<p>x</p><img src="a.png"/>'), true);
});

test('returns true for HTML figure tag', () => {
  assert.equal(hasImages('<figure><img src="a.png"/></figure>'), true);
});

test('returns false for image-less body', () => {
  assert.equal(hasImages('# Heading\n\nThai text แบบทดสอบ.'), false);
});

test('ignores image syntax inside code fences', () => {
  const body = 'Example:\n```\n![alt](a.png)\n```\nDone.';
  assert.equal(hasImages(body), false);
});

test('still detects image after a code fence', () => {
  const body = '```\ncode\n```\n\n![alt](a.png)';
  assert.equal(hasImages(body), true);
});
