import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ZONES, FLOW_MODULES } from '../hospital-flow-data';

test('every module slug listed in a zone exists in FLOW_MODULES', () => {
  const moduleSlugs = new Set(FLOW_MODULES.map(m => m.slug));
  for (const zone of ZONES) {
    for (const slug of zone.modules) {
      assert.ok(
        moduleSlugs.has(slug),
        `Zone "${zone.id}" lists module "${slug}" but it is not in FLOW_MODULES`,
      );
    }
  }
});

test('every module references a real zone', () => {
  const zoneIds = new Set(ZONES.map(z => z.id));
  for (const mod of FLOW_MODULES) {
    assert.ok(
      zoneIds.has(mod.zone),
      `Module "${mod.slug}" references zone "${mod.zone}" which does not exist`,
    );
  }
});
