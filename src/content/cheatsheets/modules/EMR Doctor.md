---
title: EMR Doctor Module
titleTh: ระบบบันทึกเวชระเบียนแพทย์
type: cheatsheet
sources: ["17.MEDHIS Manual_EMR_Doctor V.2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, module, emr-doctor]
---

## Purpose
ระบบบันทึกการตรวจรักษาของแพทย์ทั้ง OPD และ IPD — ครอบคลุมประวัติ ตรวจร่างกาย วินิจฉัย สั่งการรักษา consult และ discharge

## Access
**OPD → Doctor Worklist**

## Workflow

| Step | Actor | Action |
|------|-------|--------|
| 1 | แพทย์ | Doctor Worklist → คลิกชื่อ ผป. ใน OutPatients box |
| 2 | ระบบ | Popup START → คลิก START → Status: Consultation Started |
| 3 | แพทย์ | EMR Record → กรอก Chief Complaints, Present Illness, Examination |
| 4 | แพทย์ | Diagnosis + ICD-10 → บันทึก |
| 5 | แพทย์ | Order icon → สั่ง Lab / Radiology / ยา |
| 6 | แพทย์ | Consultation Completed → (ถ้า Admit: Request Admission) |

## Key Screens
- **Doctor Worklist** — Dashboard 10 กล่อง: OutPatients, InPatients, Medicine Reject, Consults, Lab/Radiology Reports
- **EMR Form** — 4 ส่วน: Patient Banner, EMR Record (11 sections), Summary View, Menu Function
- **EMR Record** — 11 sections: CC, PI, Past History, Family Hx, Personal Hx, Examination, Doctor Notes, Diagnosis, ICD-10, Procedure, ICD-9

## Key Fields

| Field | หมายเหตุ |
|-------|---------|
| Chief Complaints | Free Text / Ticksheet / Search / Favourite |
| Examination | Free Text + Annotation (Body Diagram) |
| Diagnosis | Free Text / Search / Ticksheet |
| ICD-10 | ค้นหาจากชื่อหรือ code |
| Order | สั่งผ่าน Order icon (Lab/Radiology/ยา/Doctor Fee) |
| Consult/Refer | เมนู Menu Function — ส่งปรึกษาแผนกอื่น |
| Medicine Reject | เภสัชกรตีกลับ — ต้อง Review ใน box Medicine Reject |

## Integration
OPD/ER → **EMR Doctor** → Order Entry → LAB / XRAY / Pharmacy → Admission / OR / Billing
