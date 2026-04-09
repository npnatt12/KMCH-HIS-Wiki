---
title: ANC Module
titleTh: ระบบงานฝากครรภ์
type: cheatsheet
sources: ["8.MEDHIS Manual_ANC V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, module, anc]
---

## Purpose
ระบบฝากครรภ์สำหรับบันทึกและติดตามข้อมูลตั้งแต่เริ่มฝากครรภ์จนก่อนคลอด ครอบคลุมประวัติการคลอด สรุปสูติกรรม และผลตรวจ

## Access
**EMR → ANC** (เมนูด้านขวา)

## Workflow

| Step | Actor | Action |
|------|-------|--------|
| 1 | แพทย์/พยาบาล | OPD visit → เปิด EMR → คลิก ANC |
| 2 | แพทย์/พยาบาล | ANC Chart → เลือก EDC Method (LMP/U/S/Manual) |
| 3 | แพทย์/พยาบาล | กรอก Current Pregnancy Detail — EDC/GA คำนวณอัตโนมัติ |
| 4 | แพทย์/พยาบาล | กรอก Delivery History, Obstetric Summary, Father Details |
| 5 | แพทย์/พยาบาล | บันทึก Examination Record (Vital Signs ครั้งนี้) |
| 6 | แพทย์/พยาบาล | SAVE → กด Completed เมื่อฝากครรภ์ครบ |

## Key Screens
- **ANC Chart** — หน้าจอหลัก 10 sections พับ-ขยายได้
- **PAST ANC CHART** — ประวัติ cycle ที่ปิดแล้ว (Read-only)
- **LABORATORY / RADIOLOGY / PATHOLOGY** — ผลตรวจจากระบบ LAB/XRAY

## Key Fields

| Field | หมายเหตุ |
|-------|---------|
| EDC Method | LMP / U/S / Manual |
| LMP Date | Required เมื่อเลือก LMP — EDC+GA คำนวณอัตโนมัติ |
| Trimester | คำนวณอัตโนมัติจาก EDC |
| GA | สัปดาห์+วัน — อัตโนมัติเมื่อ LMP |
| BMI | คำนวณจากน้ำหนัก/ส่วนสูงก่อนตั้งครรภ์ |
| Gravida / Para | สรุปประวัติการตั้งครรภ์ |
| Father Details | Slide toggle เปิดก่อนกรอก |
| Completed | ปิด cycle → ย้ายไป PAST ANC CHART |

## Integration
EMR Doctor → **ANC** → LAB (ผลเลือด) → XRAY (ผลรังสี) → Labour and Newborn
