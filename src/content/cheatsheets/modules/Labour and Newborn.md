---
title: Labour and Newborn Module
titleTh: ระบบงานห้องคลอดและทารกแรกคลอด
type: cheatsheet
sources: ["12.MEDHIS Manual_Laboor and Newborn V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, module, labour-and-newborn]
---

## Purpose
ระบบบันทึกข้อมูลการคลอดและทารกแรกคลอด ตั้งแต่แรกรับที่ห้องคลอดจนรับทารกเข้า Nursery

## Access
**Inpatient → Ward Board → Ward ห้องคลอด → Visit Detail → Labour Detail / Newborn Detail**

## Workflow

| Step | Actor | Action |
|------|-------|--------|
| 1 | พยาบาล | Ward Board → เลือกเตียงมารดา → Visit Detail → Labour Detail |
| 2 | พยาบาล | กรอก Pregnancy Detail (LMP/EDC Method → GA คำนวณอัตโนมัติ) |
| 3 | พยาบาล | กรอก Labour Onset Timeline (ถุงน้ำ → Full Dilatation → Child Birth → Placenta) |
| 4 | พยาบาล | กรอก Delivery Details, Placenta Record, Care Team → Save |
| 5 | พยาบาล | Newborn Detail → กรอก Measurements + APGAR Score (1/5/10 นาที) → Save |
| 6 | ระบบ | Save Newborn → สร้าง HN ทารก → ส่ง Admission List อัตโนมัติ |
| 7 | พยาบาล | Ward Board → หอ Nursery → เลือกเตียงทารก → Arrive |

## Key Screens
- **Labour Detail** — 8 sections: Pregnancy Detail, Delivery Details, Placenta, Care Team, Obstetric Summary, Labour Onset, Labour Stage, Outside Lab
- **Newborn Detail** — Measurements, Assessments, APGAR Score, Father's Detail

## Key Fields

| Field | หมายเหตุ |
|-------|---------|
| EDC Method | LMP / U/S / Manual |
| GA | คำนวณอัตโนมัติจาก LMP |
| Labour Stage 1/2/3 | คำนวณอัตโนมัติจาก Timeline |
| APGAR Score | ต้องครบทุกหัวข้อ ระบบถึงคำนวณ |
| Delivery Mode | Normal / C-Section |
| Birth Outcome | Alive / Stillbirth |
| TWIN toggle | เปิดสำหรับทารกคนที่ 2+ |
| Newborn HN | สร้างอัตโนมัติพร้อมชื่อมารดากำกับ |

## Integration
IPD (Ward Board) → **Labour and Newborn** → ANC (Obstetric Summary) → Admission (Nursery) → IPD
