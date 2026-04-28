import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { buildVaultIndex } from '../vault-index.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const FIXTURE = join(__dirname, '..', '__fixtures__', 'vault-mini');

test('builds map of all 5 tracked folders', async () => {
  const index = await buildVaultIndex(FIXTURE);
  // 5 fixture files, but modules/Sample.md and roles/Sample.md collide on key
  // 'Sample' — first-wins per COLLECTION_ORDER drops the roles entry, so size
  // is 4. The collision is asserted explicitly in the modules test below.
  assert.equal(index.size, 4);
});

test('maps workflows filename to /workflows/<slug>/', async () => {
  const index = await buildVaultIndex(FIXTURE);
  assert.equal(index.get('Sample Workflow'), '/workflows/sample-workflow/');
});

test('maps entities filename to /entities/<slug>/', async () => {
  const index = await buildVaultIndex(FIXTURE);
  assert.equal(index.get('Sample Screen'), '/entities/sample-screen/');
});

test('maps concepts filename to /concepts/<slug>/', async () => {
  const index = await buildVaultIndex(FIXTURE);
  assert.equal(index.get('Sample Concept'), '/concepts/sample-concept/');
});

test('maps modules filename to /modules/<slug>/', async () => {
  const index = await buildVaultIndex(FIXTURE);
  assert.equal(index.get('Sample'), '/modules/sample/');
  // collision: roles also has 'Sample'. Modules wins per documented order.
});

test('returns empty index for non-existent folder', async () => {
  const index = await buildVaultIndex(join(FIXTURE, 'does-not-exist'));
  assert.equal(index.size, 0);
});
