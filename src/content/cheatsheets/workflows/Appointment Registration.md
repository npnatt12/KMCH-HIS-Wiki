---
title: Appointment Registration
titleTh: ขั้นตอนลงทะเบียนผู้ป่วยนัด
type: workflow
sources: ["2.MEDHIS Manual_Registration V.2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, registration]
---

## Overview
ลงทะเบียนผู้ป่วยที่มีนัดหมายล่วงหน้า 2 วิธี คือจากเมนู Registration หรือจาก OPD Worklist tab Appointments

## Steps
1. (เจ้าหน้าที่ทะเบียน — วิธีที่ 1) Registration → OP Registration → ค้นหาผู้ป่วย → Search
2. (เจ้าหน้าที่ทะเบียน) เลือกผู้ป่วยจากรายชื่อ → ระบบแสดง Patient Demographics พร้อมดึง Dept/แพทย์จากนัด
3. (เจ้าหน้าที่ทะเบียน) ตรวจสอบ Link to Appointment → กด SAVE
4. (เจ้าหน้าที่ทะเบียน — วิธีที่ 2) OPD → OPD Worklist → Tab APPOINTMENTS → เลือกผู้ป่วย
5. (เจ้าหน้าที่ทะเบียน) ระบบแสดง Visit Detail + Payor Detail → กด SAVE

## Decision Points
- Unlink from Appointment: กรณีไม่ต้องการเชื่อมต่อนัดหมาย สามารถ Unlink ก่อน Save ได้
- วิธีที่ 2 (จาก OPD Worklist) เหมาะสำหรับพยาบาล/เจ้าหน้าที่คลินิกที่จัดการ Worklist โดยตรง

## Key Rules
- ระบบดึง Department + ชื่อแพทย์จากนัดหมายอัตโนมัติ (Link to Appt)
- ทั้ง 2 วิธีต้องกด SAVE เพื่อเปิด Visit
- ผู้ป่วยต้องมีนัดหมายในระบบก่อนจึงจะปรากฏใน tab APPOINTMENTS

## Modules
Registration → OPD
