---
title: ER Module
titleTh: ระบบงานผู้ป่วยฉุกเฉิน
type: cheatsheet
sources: ["4.MEDHIS Manual_ER V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, module, er]
---

## Purpose
ระบบจัดการผู้ป่วยฉุกเฉินตั้งแต่ลงทะเบียน คัดกรอง (Triage) จนจำหน่าย ครอบคลุมทั้งรายเดียวและอุบัติภัยหมู่

## Access
**Emergency → Emergency Registration / Mass Casualty / Whiteboard**

## Workflow

| Step | Actor | Action |
|------|-------|--------|
| 1 | จนท. | Emergency Registration → New/Existing → กรอก Basic + Emergency Detail → Save |
| 2 | พยาบาล | Whiteboard → เลือก ผป. → Triage icon → บันทึก Chief Complaints + ESI Level → Save |
| 3 | แพทย์ | เปิด EMR → ตรวจ → สั่ง Orders |
| 4 | แพทย์/พยาบาล | Emergency Discharge → เลือก Discharge Status → Save |
| 5 | ระบบ | Status → Medical Discharge → ส่งการเงิน / Admission / OR |

## Key Screens
- **Whiteboard** — รายชื่อผู้ป่วยทั้งหมด + ESI Level สี + Waiting Time
- **Triage Screen** — Chief Complaints, ESI Level 1–5, Glasgow Coma Scale
- **Emergency Discharge** — เลือก Discharge Status 5 ประเภท

## Key Fields

| Field | หมายเหตุ |
|-------|---------|
| First Name | Required เดียวสำหรับ ผป.ใหม่ |
| Department | Default = Emergency |
| ESI Level | 1(แดง)–5(น้ำเงิน) — คำนวณอัตโนมัติ |
| Discharge Type | Required ก่อน Save |
| Discharge Status | Discharge / Death / Referred to Admission / Referred to Other Hospital / Send to OR |
| Incident Date | Mass Casualty — default วันปัจจุบัน |

## Integration
Registration → **ER** → Triage → EMR Doctor → Admission / OR / **Billing**
