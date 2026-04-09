---
title: OPD Doctor EMR Workflow
titleTh: กระบวนการตรวจรักษาผู้ป่วยนอกโดยแพทย์
type: workflow
sources: ["17.MEDHIS Manual_EMR_Doctor V.2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, emr]
---

## Overview
แพทย์เลือกผู้ป่วยจาก Doctor Worklist → เปิด OPD EMR → บันทึกประวัติ → สั่งการรักษา → จบ Consultation หรือส่งต่อ

## Steps
1. (แพทย์) OPD → Doctor Worklist → ดูกล่อง OutPatients → คลิกชื่อผู้ป่วย → กด START
2. (แพทย์) ระบบเข้า OPD EMR → ดู Summary View ประวัติ + Drug Profile + Lab + Radiology
3. (แพทย์) ตรวจสอบ Vital Signs จาก Patient Banner หรือ Menu Charting
4. (แพทย์) บันทึก EMR: Chief Complaints → Present Illness → Past History → Examination → Diagnosis + ICD-10
5. (แพทย์) สั่ง Order: ยา / Lab / X-ray / Tasks จาก Order Entry
6. (แพทย์) ถ้าต้องการ: ออกใบรับรองแพทย์ → Medical Certificate → เลือก Template → Print/Finalize
7. (แพทย์) ทำนัดหมาย: Icon Appointment หรือ Task Order Follow Up
8. (แพทย์) กด END → สถานะ Consultation Completed; หรือส่ง OPD Consult / Request Admission / Referral Out

## Decision Points
- END (Consultation Completed): จบปกติ → พยาบาล Medical Discharge → Billing
- Request Admission: Referrals → Tab Admission → ระบุ Ward → Save → ส่งไป Admission List
- OPD Consult: Referrals → Tab Consult → ส่งไปแผนกรับ Consult

## Key Rules
- START บันทึกเวลาเริ่มพบแพทย์; END = Consultation Completed
- Triage/Lab/X-ray icons บน Worklist แสดงสถานะรายการค้าง
- Medical Certificate: Finalize = ถาวร แก้ไขไม่ได้; Save = Draft
- Pre-Admit Orders เพิ่มได้ใน Request Admission Tab

## Modules
OPD (Worklist) → EMR Doctor → Order Entry → LAB / XRAY / Pharmacy → Admission / Billing
