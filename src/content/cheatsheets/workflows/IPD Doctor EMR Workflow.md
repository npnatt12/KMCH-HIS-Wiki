---
title: IPD Doctor EMR Workflow
titleTh: กระบวนการดูแลผู้ป่วยในโดยแพทย์
type: workflow
sources: ["17.MEDHIS Manual_EMR_Doctor V.2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, emr]
---

## Overview
แพทย์เปิด IPD EMR จาก Doctor Worklist หรือ Ward Board → บันทึก Progress Notes → สั่ง Daily/Continuous Orders → Consult (ถ้ามี) → ทำ Discharge 4 ขั้นตอน

## Steps
1. (แพทย์) OPD → Doctor Worklist → กล่อง InPatients หรือ IPD → Ward Board → เลือก Ward
2. (แพทย์) คลิกผู้ป่วย → View EMR → เข้า IPD EMR
3. (แพทย์) DAILY PROGRESS → กด + → บันทึก Progress Note ประจำวัน
4. (แพทย์) Daily + → สั่ง Daily Order; Continuous + → สั่งยาต่อเนื่อง ระบุ Dosage/Route/Frequency
5. (แพทย์) ถ้าต้อง Consult → IPD Consult icon → บันทึก Basic + Consult Detail → Close → YES
6. (แพทย์รับ Consult) Doctor Worklist → Consult/Referrals → View EMR → Reply Consult
7. (แพทย์) DISCHARGE SUMMARY → เลือก Template → บันทึก → Save
8. (แพทย์) Ward Board → Discharge Plan → Step 1 Advice → Step 2 Order → Save
9. (พยาบาล) Step 3 Medical Discharge (คืนยา+Close Orders) → Step 4 Final Discharge (รอ "$")

## Decision Points
- Continuous Order: ระบบส่งยาอัตโนมัติทุกวัน; Discontinue โดยคลิก Stop + ระบุ End Time
- IPD Consult: ข้อมูล Consult แสดงใน Progress Notes และ Nursing Worklist อัตโนมัติ

## Key Rules
- Only Inservice filter ใน Doctor Worklist เพื่อดูเฉพาะผู้ป่วยในการดูแล
- Continuous Order: ตรวจสอบ Quantity/day และ Today Dose ก่อน Save
- Step 2 ต้องสั่งยากลับบ้าน + Discontinue ยาที่ต้องหยุด + ตรวจสอบ Discharge Summary

## Modules
IPD (Ward Board) → EMR Doctor → Order Entry → Pharmacy → Billing
