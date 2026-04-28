# Changelog

All notable changes to the KMCH HIS Wiki Portal are listed here. Versions follow [Semantic Versioning](https://semver.org/) and dates use ISO 8601 (`YYYY-MM-DD`).

## [v2.4.0] — 2026-04-28

Search optimization: per-collection index, did-you-mean, telemetry, OCR-caption sync hook.

### Added
- **Per-collection search index.** `/search.json` (4.4 MB) split into five files (`/search-modules.json`, `/search-workflows.json`, `/search-entities.json`, `/search-concepts.json`, `/search-faq.json`) plus `/search-manifest.json` (counts + hint terms). Both clients (`public/search-ui.js`, `src/lib/cmd-k.ts`) fetch all five in parallel.
- **Did-you-mean.** Levenshtein-based suggestion shown when top result score < 50 or 0 results. Click chip → re-runs search. Dictionary built from titles + section headings + module names + dictionary hints.
- **Match highlighting.** `<mark>` wraps matched tokens in result titles and summaries. HTML-escaped first, regex-escaped tokens, longest-first sort to avoid double-wrap.
- **Telemetry endpoint** (`/api/log-search`). POST. Validates `q` against `PII_PATTERNS` (Thai national ID, HN, phone). Caps `q` at 200 chars. Rate-limits 60/min per IP. Logs structured JSON via `console.log` for Vercel runtime logs — no DB.
- **OCR-caption sync hook** (`scripts/sync-vault/ocr-captions.mjs`). Loads `KMCH HIS manual/ocr-captions.json` (codex's output target), filters to confidence ≥ 0.85, appends `## Screenshot: <file>` sections to parent page bodies before chunking. Missing file = no-op.
- **Vercel adapter** (`@astrojs/vercel`) + `output: 'hybrid'`. All 250 wiki pages stay prerendered; only `/api/*` runs as a Function.

### Changed
- `/search.json` becomes a **deprecation shim** for one release. Sets `X-Deprecated` and `X-Deprecation-Removal: v2.5` headers. Will be removed in v2.5.
- `package.json` `"test"` glob now includes `src/pages/api/__tests__`.

### Stats
- 250 pages (unchanged)
- 103 tests passing (was 67) — 36 new across did-you-mean (11), highlight (8), log-search (8), search-collections (3), OCR sync hook (6)
- 1 new dependency (`@astrojs/vercel`)

---

## [v2.3.0] — 2026-04-28

Thailand-context polish: print, terminal-to-phone QR handoff, and PDPA discipline.

### Added
- **A4 portrait `@media print` stylesheet** (`public/print.css`) linked sitewide via `BaseV2`. Hides nav, footer, motion, QR, and toolbar in print preview. Bilingual print footer with Buddhist-Era date stamp (e.g. `พิมพ์เมื่อ 28 เมษายน 2569 / 28 Apr 2026`). Tables and numbered steps don't split mid-block.
- **QR code in article header** (`QRCorner.astro`). Build-time SVG via [`qrcode`](https://www.npmjs.com/package/qrcode). Encodes the canonical page URL. Click-to-zoom for cross-room scanning. Hidden on mobile. Workflow / entity / concept routes only.
- **Print button** (`PrintButton.astro`) calls `window.print()`. Sits next to the QR in the article toolbar.
- **PDPA bilingual disclaimer banner** (`PDPABanner.astro`) auto-injects on entity pages whose body contains image syntax. Frontmatter opt-out: `mock-data: false`.
- **`/pdpa/` explainer page** — Thai-first content (Scope / Screenshots / Reporting / PDPA basis). Linked from sitewide footer.
- **`formatBE` / `formatGregorian` date helpers** (`src/lib/format-date.ts`) — Buddhist calendar via `Intl.DateTimeFormat`, anchored to Asia/Bangkok TZ.
- **`hasImages` build-time detector** (`src/lib/article-meta.ts`) — scans markdown bodies for `![](path)` or `<img>`/`<figure>` tags, ignoring content inside code fences.
- **PII regex scaffold** (`scripts/lint-vault.mjs`) — Thai national ID, HN, phone patterns. Exported with tests; runtime activation deferred until codex's OCR map lands.
- **`mock-data: boolean` field** on `wikiSchema` (PDPA opt-out).
- **6 Phase-4 role hubs wired** (PR #2): `finance-accounting`, `procurement`, `warehouse-staff`, `telemedicine-admin`, `telemedicine-it-operator`, `patient`. Closes 6 production 404s.

### Changed
- **`BaseV2.astro`** now renders a minimal sitewide footer with PDPA / FAQ / Master Flow links by default. `LandingV2.astro` opts out (`hideFooter`) so home + role pages keep their full `FooterV2`.
- **`ArticleV2.astro`** accepts a `route` prop (`workflow | entity | concept | module | hub`) and renders the article toolbar conditionally. Sets a `--print-footer` CSS variable on `<main>` consumed by `print.css`.

### Stats
- 250 pages (was 243 after PR #1 + PR #2)
- 67 tests passing (was 52)
- 1 new dependency (`qrcode@^1.5.4`)

---

## [v2.2.0] — 2026-04-28

Mobile polish, vault automation, and Thai search.

### Added
- **Vault sync automation** (`scripts/sync-vault.mjs`) — converts the Obsidian source vault into Astro content collections automatically. Resolves `[[wikilinks]]` (bare, alias, folder-prefix, anchor, trailing-backslash forms), strips `%% comments %%`, preserves frontmatter and code fences. Watch mode via [`chokidar`](https://www.npmjs.com/package/chokidar). Wired into `npm run dev` (concurrent with Astro) and `npm run build`.
- **Thai-aware search** with Unicode-correct slugify, n-gram tokenization (2/3/4-grams), and a 38-group bilingual hint dictionary served at `/search-dictionary.json`. Runtime tokens via `public/search-thai-tokens.js` (~1 KB IIFE). Tested with 10 query fixtures across Thai/English.
- **Lighthouse CI config** (`lighthouserc.cjs`) targeting Mobile Slow 4G, ≥90 Performance / Accessibility / Best Practices on home + role hub + workflow article. Baseline reports stored at `lighthouse-reports/baseline/`.
- **Schema coercion** for `created`, `updated`, `verified-on-uat` (now accept unquoted YAML date scalars).
- **25 new Phase-4 pages** materialized via sync (5 modules, 8 entities, 8 workflows, 4 concepts).

### Fixed
- Slugify previously decomposed Thai vowels via `NFKD`. Removed; restored 286 anchor links across the wiki.
- Slugify regex now preserves `\p{Mark}` (Thai vowels and tone marks U+0E30–0E3A, U+0E47–0E4E are Marks, not Letters).

### Stats
- 243 pages (was 218)
- 52 tests across slug, vault-index, transform, thai-tokens, search-index, search-runtime
- Production Lighthouse: median 94 / 100 / 100 on home, 95 / 100 / 100 on role hub, 94 / 96 / 100 on workflow

---

## [v2.0.0] — 2026-04-27

Role-first redesign with KMCH branding.

### Added
- **Role-first information architecture.** Wiki content (modules / workflows / concepts / entities) sits underneath role hubs. Each hub lists Daily Flows, Reference Screens, and Concepts curated for that role. 8 initial roles: doctor, nurse-IPD, nurse-OPD, nurse-OR, pharmacist, x-ray tech, admin-system, IT support.
- **Visual redesign** — claude.ai-shell typography, KMCH coral/orange/charcoal palette, NexusAI-derived motion grammar. New `BaseV2` / `LandingV2` / `ArticleV2` layouts.
- **Role-permission matrix scaffold** (`verified-on-uat: pending` on every page).
- **Self-hosted Anuphan** (variable Thai sans for headings) alongside Sarabun (body).
- **Master Hospital Flow** interactive visualization at `/master-flow/`.

### Changed
- **Search backend** swapped from Pagefind to a custom static index (`/search.json`) with handwritten search UI. Smaller bundle, no Pagefind WASM.
- **Tailwind** upgraded to v4 with `@theme inline` design tokens.
- **All content** migrated from inline edits to vault-backed Markdown with Zod schemas.

### Stats
- 218 pages on first cut

---

## [v1.0.0] — earlier 2026

Initial public release.

### Added
- 172 static pages compiled from 18 MEDHIS `.docx` manuals.
- Pagefind client-side search.
- 1,042 MEDHIS UI screenshots extracted to WebP with thumbnails and lightbox.
- 42 Mermaid flowcharts pre-rendered to SVG (one per module + workflow).
- 42 single-page A4 cheat sheets at `/cheatsheet/...`.
- Self-hosted Sarabun, mobile-first responsive layout, Thai-primary content with English MEDHIS terminology preserved.
