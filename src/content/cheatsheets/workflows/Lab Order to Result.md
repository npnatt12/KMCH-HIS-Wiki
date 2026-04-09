---
title: Lab Order to Result Workflow
titleTh: ขั้นตอนการตรวจทางห้องปฏิบัติการ
type: workflow
sources: ["9.MEDHIS Manual_LAB V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, lab]
---

## Overview
แพทย์สั่ง Lab → พยาบาลเก็บ Specimen → Lab Accept → ลงผล → Authorize → แสดงผลใน EMR

## Steps
1. (แพทย์) EMR → Order → ค้นหารายการ Lab หรือใช้ Tick Sheet tab Laboratory → Save → ได้ Order No.
2. (พยาบาล) Laboratory → Specimen Collection → Tab NEW → ค้นหา → Print Sticker → Collect Specimen → Confirm
3. (Lab) Lab Worklist → เลือก Specimen Collected → Accept Specimen → YES → สถานะ Specimen Accepted
4. (Lab) Tab INPROGRESS → Manual Result → กรอกค่า + Comment → Save → สถานะ Report Entered
5. (Lab) เลือก Report Entered → Report Authorised → ผลส่งไป EMR → สถานะ Report Authorized
6. (แพทย์) EMR Summary → Laboratory → ดู Lab Result / Cumulative View / Charting

## Decision Points
- Reject Specimen: เลือกเหตุผล → Save → รายการกลับไป Tab NEW → เก็บ Specimen ใหม่
- STAT Order: เปลี่ยน Priority → STAT → รายการแสดงสีแดงทุกหน้าจอ
- Duplicate Order: ระบบแจ้งเตือน → ต้องระบุ Comments ก่อน Save

## Key Rules
- Batch Mode: Select All → Print Sticker + Collect Specimen พร้อมกันได้
- แก้ไขผลก่อน Authorize: Manual Result อีกครั้ง → ระบุ Modify Reason
- Reset Result: หลัง Authorize → กด Reset → สถานะ Test Executed → ลงผลใหม่ได้
- H/L สีแดง = ค่าสูง/ต่ำกว่า Normal Range

## Modules
EMR Doctor (สั่ง) → OPD/IPD (เก็บ Specimen) → LAB (Accept+Result) → EMR (ดูผล)
