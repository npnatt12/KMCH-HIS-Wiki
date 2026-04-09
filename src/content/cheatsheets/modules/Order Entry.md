---
title: Order Entry Module
titleTh: ระบบคำสั่งการรักษา (CPOE)
type: cheatsheet
sources: ["18.MEDHIS Manual_Order V.2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, module, order-entry]
---

## Purpose
บันทึกคำสั่งการรักษาทุกประเภท — Lab, Radiology, ยา, เวชภัณฑ์, Doctor Fee ทั้ง OPD และ IPD

## Access
**EMR Doctor → Order icon** หรือ **EMR → View OPD/IPD EMR → เมนู Order**

## Workflow

| Step | Actor | Action |
|------|-------|--------|
| 1 | แพทย์ | เปิด EMR → กด Order icon |
| 2 | แพทย์ | เลือก Tab: ORDER DETAILS / TICK SHEET / FAVORITES / ORDER SET |
| 3 | แพทย์ | ค้นหา Order Item → เลือก → ระบุรายละเอียด (ยา: Dosage/Route/Freq/Duration) |
| 4 | ระบบ | ตรวจ Drug Alerts (11 ประเภท) — แสดงสัญลักษณ์ใน Alert column |
| 5 | แพทย์ | ระบุ Password → กด Save |
| 6 | แพทย์ | ORDER PROFILE → Cancel / Repeat / Discontinue คำสั่งเก่า |

## Key Screens
- **ORDER DETAILS** — ค้นหาและสั่งรายการโดยตรง (Default tab)
- **TICK SHEET** — เลือก Checkbox รายการสำเร็จรูป → Add → Save
- **FAVORITES** — รายการที่ใช้บ่อย พร้อม pre-configured dosage
- **ORDER PROFILE** — ดูคำสั่งทั้งหมด + Cancel / Repeat / Discontinue

## Key Fields

| Field | หมายเหตุ |
|-------|---------|
| Type | Daily / Continuous (IPD เท่านั้น) / Discharge Medication |
| Order by | Self (แพทย์) / On behalf of (จนท./พยาบาล) |
| Dosage / Route / Frequency | Required สำหรับยา |
| Duration / Quantity | auto-calc: Duration × Frequency |
| Priority | STAT = แสดงสีแดงทุกหน้าจอ |
| Password | Required ทุกการ Save |
| Taper Dose | ลดยาเป็นขั้น — Add Taper Dose |

## Integration
**EMR Doctor** → **Order Entry** → Pharmacy / LAB / XRAY / Billing ← OPD/IPD (Nursing Worklist)
