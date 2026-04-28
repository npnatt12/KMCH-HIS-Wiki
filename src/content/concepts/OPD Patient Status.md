---
title: OPD Patient Status
type: concept
sources: ["3.MEDHIS_Manual_OPD V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [concept, opd, status, patient-flow]
roles: [NurseOPD]
verified-on-uat: pending
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
