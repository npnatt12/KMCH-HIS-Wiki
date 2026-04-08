# KMCH HIS Portal V2 — Design Spec

**Date:** 2026-04-08
**Status:** Approved
**Author:** Claude + User
**Builds on:** `docs/superpowers/specs/2026-04-08-kmch-portal-design.md` (v1)

## Problem

The v1 portal serves wiki content as searchable accordion cards, but lacks:
1. The ~517 MEDHIS UI screenshots embedded in the original docx manuals — staff can't see what the actual screens look like
2. A FAQ/support center for quick answers to common questions
3. Print support for workflow pages (only modules have print routes)
4. A proper navigation bar with menus (current header is just logo + search)

## V2 Enhancements

### 1. MEDHIS UI Screenshot Extraction & Gallery

**Source:** 18 .docx files contain 1,252 embedded images (56MB raw). Of these, ~517 are large UI screenshots (>50KB), ~525 are medium cropped elements, ~210 are tiny icons (<1KB, skipped).

**Extraction pipeline (build-time Node script):**
- Read each .docx as a ZIP archive
- Extract images from `word/media/`
- Skip images <1KB (icons/bullets)
- Convert PNG → WebP at 80% quality via `sharp`
- Generate 200px-wide thumbnails for lazy-loading
- Parse docx XML to associate each image with the nearest preceding heading
- Output: `public/screenshots/{module-slug}/image-NNN.webp` + `image-NNN-thumb.webp`
- Output: `public/screenshots/manifest.json` mapping module → section → ordered image list

**Size estimate:** ~1,042 images × ~30KB avg WebP = ~31MB full + ~5MB thumbs = ~36MB total.

**Gallery UX:**
- Each accordion card gets a **"📷 ดูภาพ (N)"** button when screenshots exist for that section
- Button appears in the summary bar, right-aligned, large tap target (min 48px)
- Tapping opens a **lightbox overlay**:
  - Full-screen dark backdrop, screenshot centered
  - Swipe left/right (mobile) or arrow keys/click arrows (desktop)
  - Pinch-to-zoom (mobile) / scroll-to-zoom (desktop) for reading small UI text
  - Caption below each image (section heading)
  - Close via X button (large, top-right), tap backdrop, or Escape
- **Lazy-loading:** Thumbnails use `loading="lazy"`. Full-size WebP fetched only on lightbox open.
- **Zero framework dependency:** Vanilla JS lightbox, ~3KB
- **Print exclusion:** Screenshots excluded from print cheat sheets

**Elderly-friendly considerations:**
- "📷 ดูภาพ" button is large, clearly labeled, high contrast
- Lightbox arrows are 48px+ touch targets
- Close button is prominent (not a tiny X)
- Zoom is intuitive (pinch on mobile, scroll on desktop)

### 2. FAQ / Support Center

**URL:** `/faq/`

**Two sections on one page:**

#### Section 1: วิธีการใช้งาน (How-to)

Task-based FAQ generated from wiki workflows and module content. Grouped by module:
- Each module has 2-5 "จะ...ได้อย่างไร?" questions
- Each answer: 3-5 numbered steps with key info
- "อ่านเพิ่มเติม →" link to full module/workflow page
- ~40-50 how-to entries total

Example:
```
📋 Registration
  Q: จะลงทะเบียนผู้ป่วยใหม่ได้อย่างไร?
  A: 1. Registration → OP Registration
     2. Patient Search → ค้นหาไม่พบ → กด New
     3. กรอก Patient Demographics (mandatory fields มีเครื่องหมาย *)
     4. กด SAVE (ปุ่มจะเปลี่ยนเป็นสีฟ้าเมื่อกรอกครบ)
     → อ่านเพิ่มเติม: New Patient Registration
```

#### Section 2: แก้ไขปัญหา (Troubleshooting)

Problem → Cause → Solution format. Generated from business rules, warnings, and constraints in the wiki:
- ~20-30 troubleshooting entries
- Grouped by symptom category (ไม่สามารถบันทึกได้, ไม่แสดงข้อมูล, การเงิน, etc.)

Example:
```
⚠️ กดปุ่ม SAVE ไม่ได้
  สาเหตุ: ยังกรอก mandatory fields ไม่ครบ (ช่องที่มีเครื่องหมาย * และแถบสีแดง)
  วิธีแก้: ตรวจสอบทุกช่องที่มี * ให้กรอกครบ → ปุ่ม SAVE จะเปลี่ยนเป็นสีฟ้า
```

**FAQ content storage:** Two markdown files in `src/content/faq/how-to.md` and `src/content/faq/troubleshooting.md`, added to Astro content collections.

**FAQ search:** Same Pagefind indexes FAQ content. FAQ page has a section toggle (How-to / Troubleshooting) using accordion or tab UI.

**FAQ content generation:** Generated during implementation by analyzing the 68 wiki markdown files. Extracting:
- Workflow steps → how-to questions
- Business rules, warnings (⚠️), constraints → troubleshooting entries
- Stored as wiki-format markdown for future maintenance

### 3. Top Navigation Banner

**Desktop (≥640px):**
```
┌──────────────────────────────────────────────────────────────┐
│ 🏥 KMCH HIS Wiki  │ โมดูล ▾ │ Workflows ▾ │ FAQ  │  🔍    │
└──────────────────────────────────────────────────────────────┘
```

- Background: `#1e40af` (blue), white text
- Sticky top, z-index on top
- Logo: links to `/` homepage
- **โมดูล ▾**: Dropdown showing all 18 modules as colored icon chips with Thai names. Click navigates to module page.
- **Workflows ▾**: Dropdown showing all 10 workflows as a list.
- **FAQ**: Direct link to `/faq/`
- **🔍**: Search icon, expands to Pagefind search bar on click. Overlays the nav items while active.
- Active page: lighter blue background highlight on current section

**Mobile (<640px):**
```
┌────────────────────────────────┐
│ 🏥 KMCH HIS    🔍    ☰       │
└────────────────────────────────┘
```

- Blue bar with logo, search icon, hamburger icon
- **☰ Hamburger**: Opens full-width slide-down menu:
  - **หน้าหลัก** — link to homepage
  - **โมดูล** — expandable section, shows all 18 modules
  - **Workflows** — expandable section, shows all 10 workflows
  - **FAQ** — direct link
  - **✕ ปิดเมนู** — close button, large and obvious at bottom
- All menu items: minimum 48px height, large text (16px+)
- No nested dropdowns — just expand/collapse sections
- Backdrop overlay behind menu

**Implementation:** Pure CSS + minimal vanilla JS for toggle/expand. No framework.

### 4. Printable Workflow Pages

**New route:** `/print/workflow/{slug}/` for all 10 workflows.

Uses the existing `Print.astro` layout (A4 2-column dense format) with additions:
- **Flowchart SVG** rendered at the top of the page, scaled to fit the full page width (spanning both columns)
- Step-by-step content below in 2-column layout
- Same footer/header format as module cheat sheets

**Print button** added to workflow page template (same "🖨️ พิมพ์" component as modules).

**Concept/Entity pages:** Get a quick-print button that triggers `window.print()` with `@media print` CSS cleanup (hide nav, optimize typography). No dedicated print route needed for these lighter pages.

### 5. Responsive Polish

- Navbar: described above (desktop dropdown → mobile hamburger)
- Module icon grid: already 3→4→6 columns (unchanged)
- Accordion cards: full-width, works on all sizes (unchanged)
- Lightbox: full-screen on all devices, touch gestures on mobile
- Print pages: `@media print` CSS handles A4 formatting regardless of screen size
- FAQ: single-column layout, large text, generous spacing

## Architecture Changes

### New Files

```
scripts/extract-images.mjs           # Docx → WebP + thumbnails + manifest
src/components/Navbar.astro          # Blue bar, dropdowns, hamburger
src/components/ImageGallery.astro    # "📷 ดูภาพ" button + lightbox
src/pages/faq/index.astro            # FAQ page
src/pages/print/workflow/[...slug].astro  # Printable workflow pages
src/content/faq/how-to.md            # FAQ how-to content
src/content/faq/troubleshooting.md   # FAQ troubleshooting content
public/screenshots/                  # Extracted WebP images
public/screenshots/manifest.json     # Image-to-section mapping
```

### Modified Files

```
src/layouts/Base.astro               # Replace header with Navbar component
src/components/AccordionCard.astro   # Add "📷 ดูภาพ" button slot
src/pages/workflows/[...slug].astro  # Add PrintButton
src/pages/concepts/[...slug].astro   # Add window.print() button
src/pages/entities/[...slug].astro   # Add window.print() button
src/styles/global.css                # Lightbox CSS, navbar styles, print improvements
src/content/config.ts                # Add faq collection
package.json                         # Add sharp, build:images script
```

### Updated Build Pipeline

```json
{
  "scripts": {
    "build:images": "node scripts/extract-images.mjs",
    "build:charts": "node scripts/render-mermaid.mjs",
    "build": "astro build && npx pagefind --site dist",
    "build:full": "npm run build:images && npm run build:charts && npm run build",
    "build:local": "npm run build:full"
  }
}
```

`build:images` only needs to run once (or when manuals are updated). The extracted images are committed to git so Vercel doesn't need to re-extract.

### JS Budget

| Component | Size |
|-----------|------|
| Pagefind UI | ~15KB (existing) |
| Lightbox (vanilla JS) | ~3KB (new) |
| Navbar mobile menu | ~1KB (new) |
| **Total** | **~19KB** |

### Page Count

| Type | V1 | V2 |
|------|----|----|
| Homepage | 1 | 1 |
| Modules | 18 | 18 |
| Workflows | 10 | 10 |
| Concepts | 10 | 10 |
| Entities | 8 | 8 |
| Print (modules) | 18 | 18 |
| Print (workflows) | 0 | **10** |
| FAQ | 0 | **1** |
| **Total** | **65** | **76** |

## Out of Scope (V2)

- AI chatbot / Q&A
- User authentication
- Dark mode
- Image annotation or editing
- Video content
- Offline PWA

## Dependencies

| Package | Purpose | New? |
|---------|---------|------|
| `sharp` | Image conversion (PNG → WebP, thumbnail generation) | **New** |
| `jszip` or `adm-zip` | Read docx as ZIP to extract images | **New** |
| `xml2js` or manual XML parsing | Parse docx XML for image-heading association | **New** |
