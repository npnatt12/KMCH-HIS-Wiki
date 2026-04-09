---
title: OPD Module
titleTh: ระบบงานผู้ป่วยนอก
type: cheatsheet
sources: ["3.MEDHIS_Manual_OPD V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, module, opd]
---

## Purpose
ระบบจัดการผู้ป่วยนอกตั้งแต่ลงทะเบียนจนจำหน่าย — คัดกรอง บันทึก Vital Signs ดูคำสั่งแพทย์ นัดหมาย และพิมพ์เอกสาร

## Access
**OPD → OPD Worklist**

## Workflow

| Step | Actor | Action |
|------|-------|--------|
| 1 | พยาบาล | OPD Worklist → Registered → กด Arrived |
| 2 | พยาบาล | Charting → Vital Sign Chart → Save |
| 3 | พยาบาล | Assign Careprovider → กด Screening Completed |
| 4 | แพทย์ | เปิด EMR → ตรวจ → สั่ง Orders → Consultation Completed |
| 5 | พยาบาล | Execute Tasks → ตรวจสอบ Orders ครบ |
| 6 | พยาบาล | Medical Discharge → ชื่อส่งการเงินทันที |

## Key Screens
- **OPD Worklist** — รายชื่อผู้ป่วย จัดกลุ่มตาม Status / Careprovider
- **Visit Detail Panel** — Order Details, Appointments, Tasks, Consults, Patient Tracking
- **Lab Specimen Collection** — Laboratory → Specimen Collection → Print Sticker → Collect
- **Appointment Screen** — เลือก Department/Careprovider/วันเวลา → Book → Print

## Key Fields

| Field | หมายเหตุ |
|-------|---------|
| Status | Registered → Arrived → Screening Completed → Consultation Started/Completed → Medical Discharge |
| Careprovider | ต้องระบุก่อนกด Screening Completed |
| Tasks | Execute Order: Ordered → Executed |
| Order Details | ยา, Lab, X-ray ทั้งหมดของ visit |
| Consults tab | รายการส่งปรึกษา — รับ via Tab REFERRALS |
| Appointment | นัดล่วงหน้า + Future Orders |

## Integration
Registration → **OPD** → LAB / XRAY / Pharmacy ← EMR Doctor → Admission → Billing
