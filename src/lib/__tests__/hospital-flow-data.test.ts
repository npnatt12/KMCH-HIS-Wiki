import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ZONES, FLOW_MODULES, SYSTEMS, ENTRY_POINTS, CONNECTIONS, INTERFACES } from '../hospital-flow-data';
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

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

test('every module has a system that exists in SYSTEMS', () => {
  const systemIds = new Set(SYSTEMS.map(s => s.id));
  for (const mod of FLOW_MODULES) {
    assert.ok(
      systemIds.has(mod.system),
      `Module "${mod.slug}" has unknown system "${mod.system}"`,
    );
  }
});

test('FLOW_MODULES contains the 5 new modules', () => {
  const slugs = new Set(FLOW_MODULES.map(m => m.slug));
  for (const expected of ['telemedicine', 'queue-management', 'odoo-finance', 'odoo-inventory', 'odoo-procurement']) {
    assert.ok(slugs.has(expected), `Missing module: ${expected}`);
  }
});

test('FLOW_MODULES has 23 entries (18 existing + 5 new)', () => {
  assert.equal(FLOW_MODULES.length, 23);
});

test('every connection from/to resolves to a module or entry point', () => {
  const moduleSlugs = new Set(FLOW_MODULES.map(m => m.slug));
  const entrySlugs = new Set(ENTRY_POINTS.map(e => e.slug));
  const validIds = new Set([...moduleSlugs, ...entrySlugs]);
  for (const conn of CONNECTIONS) {
    assert.ok(
      validIds.has(conn.from),
      `Connection from "${conn.from}" → "${conn.to}": "from" is not a known module or entry point`,
    );
    assert.ok(
      validIds.has(conn.to),
      `Connection from "${conn.from}" → "${conn.to}": "to" is not a known module or entry point`,
    );
  }
});

test('every cross-system connection has interfaceSlug', () => {
  for (const conn of CONNECTIONS) {
    if (conn.kind === 'cross-system') {
      assert.ok(
        conn.interfaceSlug && conn.interfaceSlug.length > 0,
        `Cross-system connection ${conn.from} → ${conn.to} is missing interfaceSlug`,
      );
    }
  }
});

test('INTERFACES contains 4 entries: booking, revenue, inventory, procurement', () => {
  const slugs = INTERFACES.map(i => i.slug).sort();
  assert.deepEqual(slugs, ['booking', 'inventory', 'procurement', 'revenue']);
});

test('every interface workflowUrl resolves to an existing workflows/*.md file', () => {
  // Resolve __dirname for ESM
  const here = dirname(fileURLToPath(import.meta.url));
  const workflowsDir = resolve(here, '..', '..', 'content', 'workflows');
  const files = readdirSync(workflowsDir);

  // Build a set of expected URL slugs from filenames.
  // Filename "MEDHIS Odoo Revenue Interface Workflow.md" → "medhis-odoo-revenue-interface-workflow"
  const slugify = (name: string) =>
    name.replace(/\.md$/i, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const validSlugs = new Set(files.filter(f => f.endsWith('.md')).map(slugify));

  for (const iface of INTERFACES) {
    if (!iface.workflowUrl) continue;  // booking has no workflow page
    const m = /^\/workflows\/([^/]+)\/?$/.exec(iface.workflowUrl);
    assert.ok(m, `Interface "${iface.slug}" has malformed workflowUrl: ${iface.workflowUrl}`);
    assert.ok(
      validSlugs.has(m[1]),
      `Interface "${iface.slug}" workflowUrl ${iface.workflowUrl} does not match any file in content/workflows/`,
    );
  }
});

test('every cross-system connection interfaceSlug exists in INTERFACES', () => {
  const ifSlugs = new Set(INTERFACES.map(i => i.slug));
  for (const conn of CONNECTIONS) {
    if (conn.kind === 'cross-system' && conn.interfaceSlug) {
      assert.ok(
        ifSlugs.has(conn.interfaceSlug),
        `Connection ${conn.from} → ${conn.to} references unknown interfaceSlug: ${conn.interfaceSlug}`,
      );
    }
  }
});
