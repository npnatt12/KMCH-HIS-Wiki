---
title: IPD Discharge Process
titleTh: ขั้นตอนจำหน่ายผู้ป่วยใน
type: workflow
sources: ["7.MEDHIS_Manual_IPD V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, ipd]
---

## Overview
จำหน่ายผู้ป่วย IPD 4 ขั้นตอน แพทย์ทำ Step 1-2 และพยาบาลทำ Step 3-4 โดย Step 4 รอสัญลักษณ์ "$" จาก Billing

## Steps
1. (แพทย์) Ward Board → เลือกผู้ป่วย → Discharge Plan → ระบุวันที่/เวลากลับบ้าน → Save
2. (แพทย์) บันทึก Discharge Orders + Discharge Summary + Discharge Diagnosis → View → Save
3. (พยาบาล) คืนยา (Dispense Return) + ปิด Close Orders → บันทึก Medical Discharge → Save
4. (พยาบาล) รอสัญลักษณ์ "$" (ผู้ป่วยชำระเงินแล้ว) → กด Save Final Discharge → ผู้ป่วยออกจาก Ward

## Decision Points
- Step 3 ทำได้เมื่อ: คืนยาครบ + Close Orders ครบเรียบร้อยก่อน Save
- Step 4: ปุ่ม SAVE ใช้งานได้เมื่อ "$" ปรากฏเท่านั้น
- REVERT: กด REVERT ที่ขั้นตอนใดก็ได้เพื่อยกเลิกสถานะนั้น

## Key Rules
- Step 3 ส่งชื่อผู้ป่วยไป IP Billing อัตโนมัติ
- "$" แสดงเมื่อผู้ป่วย/ญาติชำระเงินและรับยากลับบ้านแล้ว
- เตียงกลายเป็น Vacant Bed เมื่อ Final Discharge สำเร็จ
- แพทย์ต้องทำ Step 2 ก่อน Step 3 เสมอ

## Modules
IPD (Ward Board) → EMR Doctor (Discharge Summary) → Pharmacy (Return) → Billing → IPD (Final)
