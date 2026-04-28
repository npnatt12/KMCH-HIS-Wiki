# KMCH HIS Wiki Portal

A searchable, mobile-friendly, Thailand-context-aware reference portal for the **MEDHIS Hospital Information System** used at KMCH (Krathum Mae Chedi Hospital). Built to replace 18 paper manuals plus the Phase-4 Odoo / Telemedicine extensions with a fast, accessible web interface for medical professionals of all digital literacy levels.

**Live site:** [kmch-wiki.vercel.app](https://kmch-wiki.vercel.app)

**Latest:** v2.3.0 — see [CHANGELOG.md](./CHANGELOG.md).

## Highlights

- **250 static pages** covering 18 MEDHIS modules, the Phase-4 Odoo ERP + Telemedicine surfaces, and 14 role hubs
- **Thai-aware search** — n-gram tokenization (2/3/4-grams) with a 38-group bilingual hint dictionary; works for partial Thai keywords without spaces
- **Vault-backed authoring** — content lives in an Obsidian vault; `npm run dev` runs a watcher that re-syncs into Astro content collections on every save (wikilinks, comments, frontmatter, code fences all handled)
- **Role-first IA** — 14 role hubs (Tier 1: doctor, nurse-IPD, nurse-OPD, pharmacist; Tier 2: nurse-OR, x-ray, admin-system, IT support, finance-accounting, procurement, warehouse-staff, telemedicine-admin, telemedicine-IT-operator, patient)
- **Print + QR handoff** — every article prints clean A4 (`Cmd+P` on the regular page; no separate print URL needed). A scannable QR in the article header lets staff move from a desktop terminal to their phone without retyping the URL
- **PDPA-aware screenshots** — entity pages with screen captures auto-render a bilingual mock-data disclaimer; site-wide `/pdpa/` policy page; PII regex scaffold ready for OCR-based caption linting
- **Self-hosted Thai fonts** (Anuphan + Sarabun) — no Google Fonts CDN dependency, works behind hospital firewalls
- **Lighthouse Mobile ≥90** on Performance / Accessibility / Best Practices (Slow 4G profile)
- **Static-first** — 250 HTML files. Works on Vercel, Apache, Nginx, USB drive, or hospital intranet share. No Node.js or server runtime needed in production.

## Pages (current)

| Type | Count | Description |
|------|------:|-------------|
| Modules | 23 | 18 MEDHIS modules + 5 Phase-4 Odoo ERP surfaces |
| Workflows | 37 | OPD/IPD/ER/Lab/XRay/Pharmacy/Inventory/CSSD/Diet/OR/MRD + Phase-4 (Odoo Purchase-to-Pay, Billing, Inventory, Telemedicine, HIS-ERP interface, etc.) |
| Concepts | 21 | OPD Status, Visit Types, Payor Rights, Bed Status, ESI Level, Lab/Rad Status, EDC, Drug Alerts, NHSO Auth, Telemed Appointment Status, HIS-ERP Interface, Phase-4 UAT Coverage Matrix, etc. |
| Entities | 49 | All key screens: registration / triage / ward board / EMR / order entry / drug alerts / Odoo PO/Invoice/Payment/Inventory / Telemed Mobile App / Admin Portal / IT Service Stack |
| Roles | 14 | Doctor, Nurse-IPD, Nurse-OPD, Nurse-OR, Pharmacist, X-Ray Tech, Admin-System, IT-Support, Finance-Accounting, Procurement, Warehouse-Staff, Telemedicine-Admin, Telemedicine-IT-Operator, Patient |
| Cheat Sheets | 42 | Single-page A4 (`/cheatsheets/...`) with flowchart hero |
| Flowcharts | 42 | Mermaid SVG (`/charts/...`), pre-rendered |
| FAQ | 1 | How-to + Troubleshooting |
| PDPA | 1 | Thai-first PDPA explainer (`/pdpa/`) |
| Master Flow | 1 | Full-screen interactive hospital visualization (`/master-flow/`) |
| Homepage | 1 | Search + role grid + module grid |

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | [Astro](https://astro.build) 4.x (static output) |
| Styling | [Tailwind CSS](https://tailwindcss.com) 4.x with `@theme inline` design tokens |
| Search | Custom static index (`/search.json`) + Thai n-gram tokenizer (`/search-thai-tokens.js`) + bilingual hint dictionary (`/search-dictionary.json`) — all client-side, no server, no WASM |
| QR codes | [`qrcode`](https://www.npmjs.com/package/qrcode) — build-time SVG generation |
| Vault sync | Custom Node script (`scripts/sync-vault.mjs`) + [`chokidar`](https://www.npmjs.com/package/chokidar) watcher |
| Flowcharts | [Mermaid](https://mermaid.js.org) — rendered to static SVG at build time |
| Images | [`sharp`](https://sharp.pixelplumbing.com) — WebP conversion + thumbnails |
| Thai Fonts | [Anuphan](https://fonts.google.com/specimen/Anuphan) (variable, headings) + [Sarabun](https://fonts.google.com/specimen/Sarabun) (body), both self-hosted as woff2 |
| Tests | [`tsx`](https://www.npmjs.com/package/tsx) + `node:test` (no Jest, no Vitest) |
| Performance | Lighthouse CI (`lighthouserc.cjs`) — Mobile Slow 4G profile, ≥90 thresholds |
| Deploy | [Vercel](https://vercel.com) (auto-deploy from GitHub) |

## Getting Started

### Prerequisites

- Node.js 20+
- npm
- (Optional) An Obsidian vault checkout at `../KMCH HIS manual/` if you want to author content. The portal also works against the already-synced markdown in `src/content/`.

### Install + Dev

```bash
git clone https://github.com/npnatt12/KMCH-HIS-Wiki.git
cd KMCH-HIS-Wiki
npm install
npm run dev    # vault watcher + Astro dev server, concurrent
```

Open [http://localhost:4321](http://localhost:4321).

### Other commands

```bash
npm run build           # Sync vault → build static site (250 pages)
npm run preview         # Preview the built site locally
npm test                # Run all tsx + node:test files (67 tests)
npm run sync            # Sync vault once (no Astro)
npm run sync:watch      # Sync vault in watch mode
```

### Updating content

Two paths depending on where the source of truth is:

**A. Edit the Obsidian vault (preferred):**
1. Edit `.md` files in `../KMCH HIS manual/{modules,workflows,concepts,entities,roles}/`
2. The `npm run dev` watcher re-syncs into `src/content/` automatically
3. Commit both vault and portal changes
4. Push to GitHub — Vercel auto-deploys

**B. Edit `src/content/` directly:**
1. Edit `.md` files in `src/content/...`
2. `npm run build` to verify
3. Push — note that the sync script will overwrite these on the next vault sync run, so prefer path A unless the vault is unavailable

### Re-extracting Mermaid flowcharts

If you need to regenerate the flowchart SVGs from `.mmd` source files:

```bash
npm run build:charts
```

## Project Structure

```
kmch-portal/
├── src/
│   ├── components/       # Astro components (TopBar, RoleGrid, MetaStrip, QRCorner, PDPABanner, etc.)
│   ├── content/          # Synced wiki markdown (modules, workflows, concepts, entities, roles, faq, cheatsheets)
│   ├── content/config.ts # Zod schemas for content collections
│   ├── layouts/          # BaseV2.astro, LandingV2.astro, ArticleV2.astro, Print.astro (legacy cheat-sheet layout)
│   ├── lib/              # roles metadata, role-content-map, format-date (BE), article-meta, slug, search-index, thai-tokens
│   ├── pages/            # Route templates: roles/[role]/, workflows/[...slug]/, entities/[...slug]/, concepts/[...slug]/, modules/[...slug]/, cheatsheet/, print/, faq/, pdpa.astro, master-flow.astro
│   └── styles/           # Tailwind 4 design tokens + motion + prose
├── public/
│   ├── charts/           # Pre-rendered Mermaid SVGs
│   ├── fonts/            # Self-hosted Anuphan + Sarabun + JetBrains Mono woff2
│   ├── screenshots/      # 1,042 v1 MEDHIS WebP captures + thumbnails
│   ├── print.css         # A4 portrait @media print stylesheet
│   ├── search.json       # Static search index
│   ├── search-thai-tokens.js  # Runtime Thai n-gram tokenizer (~1 KB IIFE)
│   └── search-dictionary.json # Bilingual hint groups
├── scripts/
│   ├── sync-vault.mjs    # Vault → portal sync entrypoint
│   ├── sync-vault/       # vault-index, transform (wikilinks, comments)
│   └── lint-vault.mjs    # PII regex scaffold (deferred runtime)
├── lighthouserc.cjs      # Lighthouse CI config (Mobile Slow 4G)
├── lighthouse-reports/   # Baseline + iteration reports
└── dist/                 # Built static site (generated)
```

## Design Decisions

- **Static-first.** Pure HTML / CSS / minimal JS works on any server, USB drive, or intranet
- **Thai-primary.** Content authors in Thai; English MEDHIS terms (OPD, IPD, EMR) preserved as-is. `<html lang="th">` sitewide. Self-hosted Thai fonts because hospital networks frequently firewall Google Fonts CDN
- **Role-first IA.** Staff land on a role hub; the cross-cutting wiki sits underneath. Tier 1 (clinical) is verified-on-UAT or pending; Tier 2 (admin / operations) is `tier-2-pending`
- **PDPA discipline.** Screen captures display a bilingual disclaimer where they appear. Frontmatter `mock-data: false` opt-out is provided but defaults assume a screen *is* a mock unless declared otherwise. PII patterns (Thai national ID, HN, phone) live in `scripts/lint-vault.mjs` and will run against codex's incoming OCR captions
- **Hospital-reality print.** `Cmd+P` on any article works without a separate print URL — the layout is the document. A4 portrait, bilingual BE+CE date footer, full URLs inlined for paper-to-screen handoff
- **Terminal-to-phone QR.** Workflow / entity / concept pages render a build-time SVG QR in the header so a nurse at a workstation can scan to her phone before walking to the patient bay
- **Elderly-friendly.** Large tap targets (≥48px), high contrast, clear labels, simple navigation
- **Zero JS framework runtime.** Astro emits HTML; the only client JS is the search UI, the Thai tokenizer, the lightbox, the QR click-to-zoom, and the print button (~25 KB total, all self-hosted)

## Deployment

The site auto-deploys to Vercel on every push to `main`. Output is pure static; no server runtime, no environment variables required.

### Manual deploy

```bash
npx vercel deploy --prod
```

### Self-hosting

Copy `dist/` to any static file server (Apache, Nginx, hospital intranet share, USB drive). No Node.js or server runtime required to serve.

## Content Source

All content originates from:
- **18 MEDHIS `.docx` manuals** (initial v1 extraction)
- **Phase-4 UAT documents** (Odoo ERP user manual, Telemedicine training docs, MEDHIS-Odoo interface spec)
- **UAT walkthrough recon** (planned — populates `verified-on-uat` dates as roles are validated against the live UAT environment)

Source-of-truth is the Obsidian vault at `../KMCH HIS manual/`. The portal is a thin presentation layer over that vault.

## License

Internal use — KMCH hospital staff reference material.

## Credits

Built with [Claude Code](https://claude.ai/code) using the LLM-assisted documentation pattern. Thanks to the Anuphan and Sarabun font teams, the Astro / Tailwind communities, and the KMCH IT and clinical teams.
