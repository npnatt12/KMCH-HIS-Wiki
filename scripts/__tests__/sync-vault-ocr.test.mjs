import { test } from 'node:test';
import assert from 'node:assert/strict';
import { writeFile, mkdir, mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { applyOcrCaptions, loadOcrMap } from '../sync-vault/ocr-captions.mjs';

test('loadOcrMap: missing file returns empty map', async () => {
  const result = await loadOcrMap('/does/not/exist.json');
  assert.equal(result.size, 0);
});

test('loadOcrMap: well-formed file parses', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'ocr-test-'));
  const file = join(dir, 'map.json');
  await writeFile(file, JSON.stringify({
    captions: [
      { filename: 'a.png', ocr_caption_th: 'ทดสอบ', ocr_caption_en: 'test', parent_page_id: 'foo.md', confidence: 0.9 },
      { filename: 'b.png', ocr_caption_th: 'low', ocr_caption_en: 'conf', parent_page_id: 'bar.md', confidence: 0.5 },
    ],
  }));
  const result = await loadOcrMap(file);
  assert.equal(result.size, 1);  // low-confidence dropped
  assert.ok(result.has('foo.md'));
  await rm(dir, { recursive: true, force: true });
});

test('applyOcrCaptions: appends Screenshot section to body', () => {
  const map = new Map([['foo.md', [
    { filename: 'screen-a.png', th: 'หน้าจอ A', en: 'Screen A' },
  ]]]);
  const out = applyOcrCaptions('# Foo\n\nOriginal body.\n', 'foo.md', map);
  assert.match(out, /## Screenshot: screen-a\.png/);
  assert.match(out, /หน้าจอ A/);
  assert.match(out, /Screen A/);
  assert.match(out, /Original body\./);
});

test('applyOcrCaptions: page with no captions in map returns body unchanged', () => {
  const map = new Map([['other.md', [{ filename: 'x.png', th: 't', en: 'e' }]]]);
  const original = '# Foo\n\nOriginal body.\n';
  assert.equal(applyOcrCaptions(original, 'foo.md', map), original);
});

test('applyOcrCaptions: multiple captions all appended', () => {
  const map = new Map([['foo.md', [
    { filename: 'a.png', th: 'ก', en: 'a' },
    { filename: 'b.png', th: 'ข', en: 'b' },
  ]]]);
  const out = applyOcrCaptions('# Foo', 'foo.md', map);
  assert.match(out, /## Screenshot: a\.png/);
  assert.match(out, /## Screenshot: b\.png/);
});

test('applyOcrCaptions: empty map returns body unchanged', () => {
  const original = '# Foo\n';
  assert.equal(applyOcrCaptions(original, 'foo.md', new Map()), original);
});
