import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ZONES, FLOW_MODULES, SYSTEMS, ENTRY_POINTS } from '../hospital-flow-data';

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

test('SYSTEMS export contains exactly medhis, odoo, patient-app', () => {
  const ids = SYSTEMS.map(s => s.id).sort();
  assert.deepEqual(ids, ['medhis', 'odoo', 'patient-app']);
});

test('every zone has a band field', () => {
  for (const zone of ZONES) {
    assert.ok(
      ['top', 'split', 'full'].includes(zone.band),
      `Zone "${zone.id}" has invalid band: ${zone.band}`,
    );
  }
});

test('exactly 8 zones (6 clinical + patient-touchpoints + back-office)', () => {
  assert.equal(ZONES.length, 8);
  const ids = ZONES.map(z => z.id);
  assert.ok(ids.includes('patient-touchpoints'));
  assert.ok(ids.includes('back-office'));
});

test('ENTRY_POINTS contains 3 entries: mophrachom-app, walk-in, phone-booking', () => {
  const slugs = ENTRY_POINTS.map(e => e.slug).sort();
  assert.deepEqual(slugs, ['mophrachom-app', 'phone-booking', 'walk-in']);
});

test('every entry-point externalLink is https://', () => {
  for (const ep of ENTRY_POINTS) {
    if (!ep.externalLinks) continue;
    for (const link of ep.externalLinks) {
      assert.ok(
        link.url.startsWith('https://'),
        `Entry point "${ep.slug}" has non-https link: ${link.url}`,
      );
    }
  }
});
