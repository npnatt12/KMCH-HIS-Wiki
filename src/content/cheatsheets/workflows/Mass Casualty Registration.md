---
title: Mass Casualty Registration
titleTh: ขั้นตอนลงทะเบียนผู้ป่วยอุบัติภัยหมู่
type: workflow
sources: ["2.MEDHIS Manual_Registration V.2.docx", "4.MEDHIS Manual_ER V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, registration]
---

## Overview
ลงทะเบียนผู้ป่วยหลายรายพร้อมกันจากเหตุอุบัติภัยหมู่ ระบบสร้าง Visit อัตโนมัติทั้งหมดจากนั้น Triage ทีละราย

## Steps
1. (เจ้าหน้าที่) Emergency → Mass Casualty → กรอก Incident Details (เหตุการณ์/สถานที่)
2. (เจ้าหน้าที่) ระบุจำนวน Adult Male/Female/Unknown และ Child Male/Female/Unknown
3. (เจ้าหน้าที่) ตรวจสอบ Department (default: Emergency) และ Incident Date (default: วันนี้)
4. (เจ้าหน้าที่) ถ้ามีผู้ส่ง: เปิด Brought by Next of Kin → ระบุ Escort Name (required) + Mobile
5. (เจ้าหน้าที่) กด Save → ระบบสร้าง Visit ทั้งหมด + แสดง Popup จำนวนที่ลงทะเบียน
6. (พยาบาล) Whiteboard → Triage ทีละราย → ระบุ ESI Level + Chief Complaints → Save

## Decision Points
- Brought by Next of Kin: เปิด toggle → Escort Name กลายเป็น Required
- ชื่อผู้ป่วยสร้างอัตโนมัติ: "Incident Detail_Adult/Child_เพศ_ลำดับ" → แก้ไขชื่อจริงภายหลัง

## Key Rules
- ระบบสร้าง Visit + MRN สำหรับทุกรายพร้อมกันหลัง Save
- ผู้ป่วยทั้งหมดปรากฏใน Whiteboard พร้อมกัน
- ต้องแก้ไขชื่อจริงหลังจากทราบตัวตนผู้ป่วย
- หลัง Registration ดำเนินการ Triage ตาม Emergency Registration Workflow

## Modules
ER (Mass Casualty) → ER (Whiteboard → Triage) → Billing
