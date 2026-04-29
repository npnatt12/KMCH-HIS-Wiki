---
title: OPD Patient Status
type: concept
sources: ["3.MEDHIS_Manual_OPD V.1.docx"]
created: 2026-04-08
updated: 2026-04-29
tags: [concept, opd, status, patient-flow]
roles: [NurseOPD]
verified-on-uat: 2026-04-29
---

# OPD Patient Status (สถานะผู้ป่วยนอก)

8 สถานะที่ผู้ป่วยนอกผ่านในระบบ [OPD](/modules/opd/) ตั้งแต่ลงทะเบียนจนกลับบ้าน

## ⚠ UAT verification — 12 statuses observed

The MEDHIS reference domain API at `/framework/referencedomain/getrefdomains/[VST_STATUS]` returns **12 visit statuses**, not the 8 originally documented from the manual. Findings as of 2026-04-28 (UAT server `10.128.12.68:8080`).

| Order | Status name | Code | Internal | In manual? |
|---|---|---|---|---|
| 1 | Registered | VSTSTS1 | R | ✓ |
| 2 | Arrived | VSTSTS2 | I | ✓ |
| 3 | Screening Completed | VSTSTS3 | I | ✓ |
| 4 | Consultation Started | VSTSTS4 | I | ✓ |
| 5 | Consultation Completed | VSTSTS5 | I | ✓ |
| 6 | Under Observation | VSTSTS9 | O | **✗ NEW** |
| 7 | Medical Discharge | VSTSTS6 | D | ✓ |
| 8 | Billing Inprogress | VSTSTS8 | B | ✓ |
| 9 | Bill Finalized | VSTSTS10 | BF | **✗ NEW** |
| 10 | Financial Discharge | VSTSTS7 | F | ✓ |
| — | Triaged | VSTSTS11 | T | **✗ NEW (ER context)** |
| — | Urgent | VSTSTS12 | U | **✗ NEW (ER context)** |

## Status `_id` ↔ valuecode mapping (Phase 1–5 UAT-verified)

The MongoDB `_id` per status, captured live from `$rootScope` on the UAT server (2026-04-29):

| Code | `_id` | Display | Lane | Phase 1–5 exercised |
|---|---|---|---|---|
| VSTSTS1 | `5784c4d032f3003ef802ae15` | Registered | REGISTERED | ✅ |
| VSTSTS2 | `5784c4d032f3003ef802ae16` | Arrived | INPROGRESS | ✅ |
| VSTSTS3 | `5784c4d032f3003ef802ae17` | Screening Completed | INPROGRESS | ✅ |
| VSTSTS4 | `5784c4d032f3003ef802ae18` | Consultation Started | INPROGRESS | ✅ |
| VSTSTS5 | `5784c4d032f3003ef802ae19` | Consultation Completed | INPROGRESS | ✅ |
| VSTSTS6 | `5784c4d032f3003ef802ae1b` | Medical Discharge | DISCHARGED | ✅ (server-side ICD gate, see [MEDHIS Server-Side Gates](/concepts/medhis-server-side-gates/)) |
| VSTSTS7 | (in `vm.financialDischargeStatusUid`) | Financial Discharge | DISCHARGED | ✅ |
| VSTSTS8 | `57c4446aa454a0ba852ce690` | Billing Inprogress | DISCHARGED | ✅ |
| VSTSTS9 | `57c6712c4f362d6b9c5ef09e` | Under Observation | INPROGRESS | ⏳ not yet exercised |
| VSTSTS10 | (TBD on UAT) | Bill Finalized | DISCHARGED | ⏳ not yet exercised |
| VSTSTS11 | `5a0ac84700d17a9459beab28` | Triaged | INPROGRESS | 🔵 ER-context |
| VSTSTS12 | `6489a121db4cede700dee2be` | Urgent | INPROGRESS | 🔵 ER-context |

## Phase 1–5 verified flow (TCK-001)

The OP self-pay flow exercised on TCK-001 produced 9 journey rows in this order:

1. Registered (Phase 1)
2. Arrived (Phase 1)
3. Arrived (re-emit on careprovider claim, Phase 2)
4. Screening Completed (Phase 2)
5. Consultation Started (Phase 3)
6. Consultation Completed (Phase 3)
7. Medical Discharge (Phase 5a — gated by ICD-10 server-side check)
8. Billing Inprogress (Phase 5b — from Cashier Worklist Lock)
9. Financial Discharge (Phase 5e — auto-emitted by `vm.settleBill()`)

Bill Finalized (VSTSTS10) and Under Observation (VSTSTS9) were **not** exercised. They remain candidates for future UAT chunks.

For the user-driven flow, see [OPD Patient Flow](/workflows/opd-patient-flow/). For the cashier-side flow, see [OP Billing Workflow](/workflows/op-billing-workflow/).

**Action items for this wiki:**
- Confirm whether `Under Observation` (VSTSTS9) and `Bill Finalized` (VSTSTS10) are part of the standard OPD flow at KMCH or specific to other workflows
- `Triaged` and `Urgent` likely belong in ER documentation — reconcile with `concepts/ESI Level.md` and `entities/ER Triage Screen.md`

Existing 8-status documentation below stands until UAT walkthrough confirms the new statuses' actual triggers.

## Status Flow

| # | Status | Thai | Color | ผู้เปลี่ยน | ส่งต่อ |
|---|--------|------|-------|-----------|--------|
| 1 | **Registered** | ลงทะเบียนรับการตรวจ | — | [Registration](/modules/registration/) | OPD Worklist |
| 2 | **Arrived** | รับผู้ป่วยเข้าแผนก | — | พยาบาล OPD | — |
| 3 | **Screening Completed** | คัดกรองเสร็จ | — | พยาบาล OPD | หน้าแพทย์ |
| 4 | **Consultation Started** | เริ่มตรวจ | เขียว | แพทย์ | — |
| 5 | **Consultation Completed** | ตรวจเสร็จ | เหลือง | แพทย์ | พยาบาล review orders |
| 6 | **Medical Discharge** | จำหน่ายทางการแพทย์ | — | พยาบาล OPD | [การเงิน](/modules/billing/) |
| 7 | **Billing In Progress** | อยู่ในขั้นตอนชำระเงิน | — | การเงิน (Lock) | — |
| 8 | **Financial Discharge** | ชำระเงินเสร็จ กลับบ้าน | — | การเงิน | — |

## ที่ใช้งาน

- [OPD Worklist Screen](/entities/opd-worklist-screen/) — Group by Status
- [OPD Patient Flow](/workflows/opd-patient-flow/) — workflow เต็ม
- Visit Detail → Patient Tracking — ดู timeline ทุกสถานะ
