---
title: New Patient Registration Workflow
titleTh: ขั้นตอนลงทะเบียนผู้ป่วยใหม่
type: workflow
sources: ["2.MEDHIS Manual_Registration V.2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, registration]
---

## Overview
ลงทะเบียนผู้ป่วยที่ไม่เคยมีประวัติในระบบ MEDHIS ตั้งแต่ค้นหาจนสร้าง HN และเปิด Visit

## Steps
1. (เจ้าหน้าที่) Registration → OP Registration → กรอก HN/ชื่อ/เลขบัตร → Search
2. (เจ้าหน้าที่) ระบบไม่พบ → Error Box → กด OK → กด New → Patient Demographics Screen
3. (เจ้าหน้าที่) กรอก Basic Details: Title + First/Last Name + Gender + DOB + National ID
4. (เจ้าหน้าที่) กรอก Address Detail → ค้นหาจากตำบล (Area) หรือรหัสไปรษณีย์
5. (เจ้าหน้าที่) Visit Detail: Department + Careprovider + Visit Type + Priority
6. (เจ้าหน้าที่) Payor Details: ระบบเพิ่ม SELFPAY อัตโนมัติ → เพิ่มสิทธิอื่น + จัดเรียง Rank
7. (เจ้าหน้าที่) กรอก Next of Kin + Additional Detail ตามต้องการ → กด SAVE → ระบบสร้าง HN

## Decision Points
- DOB Unknown: เปิด toggle DOB Unknown → ระบุอายุแทน
- National ID: ระบบตรวจสอบ MOD11; ถ้าไม่มีบัตร → ข้ามได้
- Payor Rank: Rank 1 = ผู้จ่ายหลัก; ระบบคำนวณตาม Rank ก่อน

## Key Rules
- ปุ่ม SAVE เปลี่ยนเป็นสีฟ้าเมื่อกรอก mandatory fields (*) ครบ
- SELFPAY (Rank 2) ถูกเพิ่มอัตโนมัติ; เพิ่มสิทธิอื่นด้วยปุ่ม Add Payor
- Visit Detail: กด + เพิ่มแผนกอื่นในวันเดียวกันได้
- รูปผู้ป่วย: ถ่ายจาก Webcam หรือ Upload ไฟล์

## Modules
Registration → Billing (Payor) → สปสช./NHSO (ตรวจสิทธิ optional)
