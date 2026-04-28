import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { stat, mkdtemp, rm, copyFile, mkdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { optimizeAsset, optimizeDirectory } from '../optimize-phase4-assets.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const FIXTURE = join(HERE, 'fixtures/phase-4-pngs/sample.png');

let workdir;
beforeEach(async () => {
  workdir = await mkdtemp(join(tmpdir(), 'opt-phase4-'));
});

test('optimizeAsset: writes WebP + thumb', async () => {
  const dest = join(workdir, 'sample.webp');
  const thumb = join(workdir, 'sample.thumb.webp');
  await optimizeAsset(FIXTURE, dest, thumb);
  const fullStat = await stat(dest);
  const thumbStat = await stat(thumb);
  assert.ok(fullStat.size > 0, 'webp written');
  assert.ok(thumbStat.size > 0, 'thumb written');
  assert.ok(thumbStat.size < fullStat.size, 'thumb smaller than full');
});

test('optimizeAsset: idempotent — second call skips when destinations newer than source', async () => {
  const dest = join(workdir, 'sample.webp');
  const thumb = join(workdir, 'sample.thumb.webp');
  await optimizeAsset(FIXTURE, dest, thumb);
  const t1 = (await stat(dest)).mtimeMs;
  await new Promise((r) => setTimeout(r, 20));
  const result = await optimizeAsset(FIXTURE, dest, thumb);
  const t2 = (await stat(dest)).mtimeMs;
  assert.equal(result.skipped, true);
  assert.equal(t1, t2, 'mtime unchanged');
});

test('optimizeDirectory: walks subdirs, mirrors structure', async () => {
  const sourceRoot = join(workdir, 'src');
  const destRoot = join(workdir, 'dest');
  await mkdir(join(sourceRoot, 'group-a'), { recursive: true });
  await copyFile(FIXTURE, join(sourceRoot, 'group-a', 'a.png'));
  await mkdir(join(sourceRoot, 'group-b'), { recursive: true });
  await copyFile(FIXTURE, join(sourceRoot, 'group-b', 'b.png'));
  const result = await optimizeDirectory(sourceRoot, destRoot);
  assert.equal(result.processed, 2);
  await stat(join(destRoot, 'group-a', 'a.webp'));
  await stat(join(destRoot, 'group-a', 'a.thumb.webp'));
  await stat(join(destRoot, 'group-b', 'b.webp'));
  await stat(join(destRoot, 'group-b', 'b.thumb.webp'));
});

test('optimizeDirectory: missing source returns processed=0', async () => {
  const result = await optimizeDirectory('/nope', join(workdir, 'dest'));
  assert.equal(result.processed, 0);
});
