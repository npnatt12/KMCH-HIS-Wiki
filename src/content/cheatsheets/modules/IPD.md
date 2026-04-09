---
title: IPD Module
titleTh: ระบบงานผู้ป่วยใน
type: cheatsheet
sources: ["7.MEDHIS_Manual_IPD V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, module, ipd]
---

## Purpose
ระบบบริหารผู้ป่วยในตั้งแต่รับเข้า Ward จนจำหน่าย — Vital Signs รับคำสั่งแพทย์ ย้ายเตียง คืนยา และ 4-step Discharge

## Access
**Inpatient → Ward Board / Nursing Worklist / Admission List**

## Workflow

| Step | Actor | Action |
|------|-------|--------|
| 1 | พยาบาล | Ward Board → ผป. Admit แล้ว → กด Arrive → YES |
| 2 | พยาบาล | Charting → Vital Sign Chart → Save |
| 3 | พยาบาล | Nursing Worklist → เลือก Task → Update → Execute Order → Save |
| 4 | แพทย์ | Discharge Advice (Step 1) + Discharge Order (Step 2) → Save |
| 5 | พยาบาล | Dispense Return คืนยา → Medical Discharge (Step 3) → ส่งการเงิน |
| 6 | พยาบาล | Final Discharge (Step 4) — กด Save เมื่อ billing เสร็จ (สัญลักษณ์ "$") |

## Key Screens
- **Ward Board** — แผนผังเตียงทั้ง Ward + Action Icons (Arrive, Charting, Transfer, Discharge)
- **Nursing Worklist** — คำสั่งแพทย์ทั้งหมด จัดกลุ่มตาม Department/Patient/Date
- **Bed Status** — Vacant (เขียว) / Occupied / Discharge Stage / Under Maintenance

## Key Fields

| Field | หมายเหตุ |
|-------|---------|
| Arrive | ยืนยัน YES — เริ่มดูแล ผป. |
| Cancel Admission | ทำได้ก่อน Arrive เท่านั้น |
| Execute Order | Ordered → Executed |
| Transfer Request | ส่งขอ Admission อนุมัติก่อน |
| Dispense Return | คืนยาก่อน Step 3 |
| Final Discharge | SAVE ได้เมื่อ billing เสร็จเท่านั้น |
| REVERT | ยกเลิกแต่ละ Step Discharge ได้ |

## Integration
Admission → **IPD** (Ward Board) → EMR Doctor → Pharmacy / LAB → Billing → Final Discharge
