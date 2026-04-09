---
title: Emergency Registration Workflow
titleTh: ขั้นตอนลงทะเบียนผู้ป่วยฉุกเฉิน
type: workflow
sources: ["2.MEDHIS Manual_Registration V.2.docx", "4.MEDHIS Manual_ER V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, registration]
---

## Overview
ลงทะเบียนผู้ป่วยฉุกเฉินด้วยแบบฟอร์มย่อ ต้องการเพียง First Name จากนั้น Triage และ Discharge ตามสถานะผู้ป่วย

## Steps
1. (เจ้าหน้าที่) Emergency → Emergency Registration → เลือก New Patient หรือค้นหาผู้ป่วยเก่า
2. (เจ้าหน้าที่) กรอก First Name (required) + Emergency Detail + Department (default: Emergency)
3. (เจ้าหน้าที่) กด Save → ระบบสร้าง MRN อัตโนมัติ; ผู้ป่วยปรากฏใน Whiteboard
4. (พยาบาล) Whiteboard → คลิกผู้ป่วย → Icon Triage → กรอก ESI Level + Chief Complaints → Save
5. (แพทย์/พยาบาล) Visit Detail → Icon Emergency Discharge → เลือก Discharge Status → Save
6. (แพทย์) สถานะ Medical Discharge → ชื่อส่งไป Billing อัตโนมัติ

## Decision Points
- New Patient (toggle ON): กรอกข้อมูลใหม่; ผู้ป่วยเก่า: ปิด toggle → Search
- Discharge Status: Discharge / Death / Referred to Admission / Referred to Other Hospital / Send to OR

## Key Rules
- Required field ขั้นต่ำ: First Name + Department เท่านั้น (ต่างจาก New Patient Registration)
- Triage Status แสดงสีบน Whiteboard ตาม ESI Level
- Referred to Admission → ส่งต่อไป Admission Module
- Send to OR → ส่งต่อไป OR Module

## Modules
Registration → ER (Whiteboard → Triage) → Admission / OR / Billing
