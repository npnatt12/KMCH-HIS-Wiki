# KMCH HIS Wiki Portal

A searchable, mobile-friendly reference portal for the **MEDHIS Hospital Information System** used at KMCH (King Mongkut Chaokhun Thahan Hospital). Built to replace 18 paper manuals with a fast, accessible web interface for medical professionals of all digital literacy levels.

**Live site:** [kmch-wiki.vercel.app](https://kmch-wiki.vercel.app)

## Features

- **172 static pages** covering all 18 MEDHIS modules, deeply extracted with field-level details
- **Instant search** (Thai + English) powered by [Pagefind](https://pagefind.app) — fully client-side, no server required
- **1,042 MEDHIS UI screenshots** extracted from original `.docx` manuals, served as WebP with lazy-load thumbnails and a lightbox gallery
- **42 flowcharts** for all modules and workflows, rendered as static SVG via Mermaid with standardized color-coded styling
- **42 single-page A4 cheat sheets** — one per module and workflow, with flowchart hero and condensed reference below
- **Master Hospital Flow** — full-screen interactive visualization of all 18 modules across 6 color-coded department zones, with click-to-explore info panel and A3 poster print
- **FAQ / Support Center** with how-to guides and troubleshooting entries
- **Responsive navigation** — dropdown menus for Modules, Workflows, Cheat Sheets, and Master Flow on desktop; hamburger menu on mobile
- **Thai-primary** with English MEDHIS terminology preserved naturally
- **Zero JavaScript frameworks** — only ~19KB JS total (Pagefind UI + lightbox + navbar toggle)

## Pages

| Type | Count | Description |
|------|-------|-------------|
| Modules | 18 | Registration, OPD, ER, Billing, Admission, IPD, ANC, EMR Doctor, Order Entry, LAB, XRAY, OR, Labour & Newborn, Pharmacy, Inventory, Diet, CSSD, MRD |
| Workflows | 24 | OPD Patient Flow, Registration (4 types), Billing (OP + IP), Admission, IPD Discharge, IPD Transfer, Lab Order, XRAY Order, ANC Visit, Pharmacy (Dispensing + Reject/Return), Inventory (Receive + Transfer), Diet, CSSD, OR Surgery, EMR Doctor (OPD + IPD), Registration Update/Merge |
| Concepts | 13 | OPD Status, Visit Types, Payor/Rights, Patient Types, Bed Status, ESI Level, Lab/Rad Status, EDC, NHSO Auth, Appointments, Drug Alert Types, Order Types, Payment Modes |
| Entities | 30 | All key screens: Patient Search, Demographics, Banner, OPD Worklist, Whiteboard, Ward Board, Nursing Worklist, ANC Chart, Admission Detail, IPD Transfer, Doctor Worklist, EMR Form, Order Entry, Drug Alert Popup, Lab Specimen/Result, XRAY Register/Report, OR Schedule/Record, Pharmacy Dispensing, Billing Settlement, Inventory Receive/Transfer, Diet Order, CSSD Request, ER Triage/Discharge, OPD Screening |
| Cheat Sheets | 42 | Single-page A4 with flowchart hero (18 modules + 24 workflows) |
| Flowcharts | 42 | Mermaid SVG with standardized colors and subgraph phases |
| Master Flow | 1 | Full-screen interactive hospital visualization (`/master-flow`) |
| FAQ | 1 | How-to + Troubleshooting |
| Homepage | 1 | Search + 18-module icon grid |

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | [Astro](https://astro.build) 4.x (static output) |
| Styling | [Tailwind CSS](https://tailwindcss.com) 3.x |
| Search | [Pagefind](https://pagefind.app) — static client-side search |
| Flowcharts | [Mermaid](https://mermaid.js.org) — rendered to static SVG at build time |
| Images | [sharp](https://sharp.pixelplumbing.com) — WebP conversion + thumbnails |
| Thai Font | [Sarabun](https://fonts.google.com/specimen/Sarabun) (self-hosted) |
| Deploy | [Vercel](https://vercel.com) (auto-deploy from GitHub) |

## Getting Started

### Prerequisites

- Node.js 18+ (tested with 20.x)
- npm

### Install & Run

```bash
git clone https://github.com/npnatt12/KMCH-HIS-Wiki.git
cd KMCH-HIS-Wiki
npm install
npm run build
npx serve dist
```

Open `http://localhost:3000` in your browser.

### Development

```bash
npm run dev          # Start Astro dev server (hot reload)
npm run build        # Build static site + Pagefind index
npm run preview      # Preview built site
```

### Rebuild Everything (local only)

If you have the original `.docx` manuals at `../KMCH HIS manual/`:

```bash
npm run build:images   # Extract screenshots from docx → WebP
npm run build:charts   # Render Mermaid flowcharts → SVG
npm run build          # Build Astro + Pagefind
```

Or all at once:

```bash
npm run build:local
```

## Project Structure

```
kmch-portal/
├── src/
│   ├── components/        # Astro components (Navbar, Lightbox, AccordionCard, etc.)
│   ├── content/           # Wiki markdown files (modules, workflows, concepts, entities, faq)
│   ├── layouts/           # Base.astro, Print.astro, PrintCheatSheet.astro (single-page A4)
│   ├── lib/               # Module metadata, wikilink transformer, hospital-flow-data
│   ├── pages/             # Route templates (modules/, workflows/, faq/, print/, cheatsheet/, master-flow)
│   └── styles/            # Tailwind + print CSS
├── public/
│   ├── charts/            # Pre-rendered Mermaid SVGs (42 charts — modules + workflows)
│   ├── fonts/             # Sarabun woff2 files
│   └── screenshots/       # 1,042 extracted WebP images + thumbnails + manifest.json
├── scripts/
│   ├── extract-images.mjs # Docx → WebP extraction pipeline
│   └── render-mermaid.mjs # Mermaid → SVG rendering
└── dist/                  # Built static site (generated)
```

## Content Source

All content originates from 18 MEDHIS system manuals (`.docx` format), deeply extracted into a structured Obsidian wiki (104 markdown pages), then rendered into this static portal. The wiki serves as the single source of truth — every field, button, permission, and edge case from the original manuals has been captured.

### Updating Content

1. Edit the markdown files in `src/content/`
2. Run `npm run build`
3. Push to GitHub — Vercel auto-deploys

### Re-extracting Screenshots

If the original `.docx` manuals are updated:

1. Place updated `.docx` files in `../KMCH HIS manual/`
2. Run `npm run build:images`
3. Commit the new screenshots
4. Push to GitHub

## Deployment

The site auto-deploys to Vercel on every push to `main`. No server configuration needed — the output is pure static HTML/CSS/JS.

### Manual Deploy

```bash
npx vercel deploy --prod
```

### Self-hosting

Copy the `dist/` folder to any static file server (Apache, Nginx, hospital intranet share, etc.). No Node.js or server runtime needed.

## Design Decisions

- **Static-first:** Pure HTML/CSS output works on any server, USB drive, or intranet
- **Thai-primary:** Source manuals are Thai; English MEDHIS terms (OPD, IPD, Billing) preserved as-is
- **Progressive disclosure:** Accordion cards show titles first, expand for details
- **Elderly-friendly:** Large tap targets (48px+), clear labels, high contrast, simple navigation
- **Zero-JS content:** Only JS is for search (Pagefind), lightbox, and mobile menu toggle (~19KB total)
- **Print-optimized:** Single-page A4 cheat sheets with flowchart hero, plus A3 poster for Master Flow

## License

Internal use — KMCH hospital staff reference material.

## Credits

Built with [Claude Code](https://claude.ai/code) using the LLM Wiki pattern for knowledge compilation.
