---
title: OPD Patient Flow
titleTh: ขั้นตอนการรับบริการผู้ป่วยนอก
type: workflow
sources: ["3.MEDHIS_Manual_OPD V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, opd]
---

## Overview
กระบวนการผู้ป่วยนอกตั้งแต่ลงทะเบียนจนชำระเงินกลับบ้าน ผ่าน 8 สถานะใน OPD

## Steps
1. (เจ้าหน้าที่ทะเบียน) ลงทะเบียนผู้ป่วย → ชื่อปรากฏใน OPD Worklist สถานะ Registered
2. (พยาบาล) OPD Worklist → คลิกผู้ป่วย Registered → Status change → Arrived
3. (พยาบาล) Charting → Vital Sign Chart → บันทึก V/S → Assign Careprovider → Screening Completed
4. (แพทย์) Doctor Worklist → คลิกผู้ป่วย → START → Consultation Started (สีเขียว)
5. (แพทย์) ตรวจรักษา + บันทึก EMR + สั่ง Order → กด END → Consultation Completed (สีเหลือง)
6. (พยาบาล) ตรวจสอบ Order Details: ยา/Lab/X-ray/Tasks/Consult → Execute Orders → Medical Discharge
7. (การเงิน) Lock → Allocate Bill → Generate → Settle → Financial Discharge

## Decision Points
- Consultation Completed: พยาบาลตรวจสอบ Order ก่อน Medical Discharge เสมอ
- Tasks: Execute Order icon → Status Ordered → Executed; Follow-up Tasks ต้องทำ Appointment ด้วย
- Consult: รับ Consult จาก OPD Worklist → Tab REFERRALS

## Key Rules
- 8 สถานะตามลำดับ: Registered → Arrived → Screening Completed → Consultation Started → Consultation Completed → Medical Discharge → Billing In Progress → Financial Discharge
- Specimen Collection: Lab → Tab NEW → Print Sticker → Collect Specimen
- Batch Collect: Select All → Collect Specimen → Confirm ทีเดียว
- Appointment: ทำจากเมนู Appointments หรือ Day View (หลายคลินิก)

## Modules
Registration → OPD → EMR Doctor → LAB / XRAY → Billing; กรณี Admit: OPD → Admission → IPD
