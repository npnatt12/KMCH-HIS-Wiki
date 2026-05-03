# KMCH Wiki Improvement Plan

Date: 2026-05-03
Owner: KMCH Wiki maintainers
Hospital identity: King Mongkut Chaokhunthahan Hospital / โรงพยาบาลพระจอมเกล้าเจ้าคุณทหาร
Official sources: https://kmch.kmitl.ac.th and https://www.facebook.com/KMCHbyKMITL

## Goal

Turn KMCH Wiki from a static manual portal into a Thai-first, room-ready operating reference for real hospital staff at King Mongkut Chaokhunthahan Hospital. The wiki should answer three questions fast:

1. ฉันอยู่ห้องไหน ต้องกดอะไรต่อ
2. ผู้ป่วยสถานะนี้ติดตรงไหน ต้องแก้อย่างไร
3. ใครต้องรับช่วงต่อ และต้องส่งข้อมูลอะไรให้เขา

## Priority 0 — Identity And Trust

Status: in progress

- Keep KMCH naming consistent everywhere: King Mongkut Chaokhunthahan Hospital / โรงพยาบาลพระจอมเกล้าเจ้าคุณทหาร.
- Add official-site and Facebook links to footer, README, and PDPA page.
- Add a short "About KMCH Wiki" section on the homepage or `/about/` explaining that this is an internal MEDHIS operating wiki, not the public hospital website.
- Add source labels to room pages:
  - `UAT verified`
  - `Manual extracted`
  - `Needs on-site confirmation`
- Add a visible "last verified" date on every room card.

## Priority 1 — Room Mode Expansion

Status: next

Add Thai-first room pages for high-volume service points:

| Room | Why It Matters | First Output |
| --- | --- | --- |
| Registration / เวชระเบียนหน้าเคาน์เตอร์ | Highest patient-entry volume | New patient, old patient, appointment, emergency branch |
| Pharmacy Dispensing / ห้องจ่ายยา | Common handoff after billing | Pick, verify, dispense, reject/return |
| X-Ray Register / ห้องเอกซเรย์ | Frequent OPD handoff | Accept order, register, send report status |
| IPD Ward / หอผู้ป่วย | Complex multi-role workflow | Admission, transfer, doctor order, discharge |
| ER Triage / ห้องฉุกเฉิน | High-risk workflow | Triage, emergency register, ER discharge/refer |

Each room page should include:

- เริ่มที่นี่: 5-8 action steps
- อย่าลืม: must-check items before Save/Print/Send
- ถ้าติด: common error and recovery table
- ส่งต่อให้ใคร: handoff targets and required data
- คำค้น: Thai search aliases staff actually type
- QR/print ready layout

## Priority 2 — Thai Search Quality

Status: next

- Add synonym groups for real spoken hospital terms:
  - เวชระเบียน, ลงทะเบียน, เปิด visit, visit ใหม่
  - เจาะเลือด, เก็บสิ่งส่งตรวจ, print sticker, barcode
  - คิดเงิน, ปิดบิล, generate bill, cashier
  - ส่งตรวจ, order lab, order xray
  - admit, รับนอน, จำหน่าย, discharge
- Add a search feedback fixture file with 50 Thai queries and expected top results.
- Track zero-result queries from manual QA sessions in a local markdown log.
- Add tests that protect Room Mode search ranking.

## Priority 3 — On-Site UAT Evidence

Status: planned

Create a repeatable evidence pack for every on-site testing run:

- Date, location, role, room, environment
- Task attempted
- Expected result
- Actual result
- Screenshot or note
- Severity
- Owner
- Fix status

Recommended files:

- `docs/uat/YYYY-MM-DD-onsite-run.md`
- `docs/uat/YYYY-MM-DD-bug-log.md`
- `docs/uat/YYYY-MM-DD-content-gaps.md`

## Priority 4 — Content Model Upgrade

Status: planned

Move reusable operating knowledge into structured metadata where possible:

- Room cards live in `src/lib/rooms.ts`.
- Add `verificationStatus`, `verifiedDate`, `sourceRefs`, and `ownerRole` fields.
- Add `riskLevel` for rooms where mistakes affect patient safety, billing, or clinical orders.
- Add `handoffChecklist` as structured data so it can render consistently across pages.

## Priority 5 — Performance And Smoothness

Status: planned

- Keep search indexes split by collection and lazy-load room search first on homepage.
- Audit image payloads on article pages; confirm thumbnails load before full-size screenshots.
- Add a production smoke script for:
  - `/`
  - `/rooms/`
  - one role page
  - one module page
  - one entity page with screenshots
  - `/search-rooms.json`
- Run Lighthouse mobile after major UI changes and keep Performance, Accessibility, and Best Practices above 90.

## Priority 6 — Governance

Status: planned

- Define a release checklist:
  - `npm test`
  - `npm run build`
  - route smoke test
  - changelog update
  - README latest version update
  - Vercel deployment check
- Add a "content freeze before clinic run" rule: no broad sync or generated content rewrite within 24 hours of a real hospital test.
- Keep direct `src/content/` edits minimal unless the vault is unavailable.

## Recommended Next Sprint

1. Add Registration Room and Pharmacy Room.
2. Add `verificationStatus` and `verifiedDate` to all room records.
3. Add 50-query Thai search regression tests.
4. Create the first on-site UAT evidence template.
5. Add an `/about/` page that clearly separates KMCH Wiki from the official KMCH hospital website.
