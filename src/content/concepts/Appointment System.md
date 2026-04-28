---
title: Appointment System
type: concept
sources: ["3.MEDHIS_Manual_OPD V.1.docx", "2.MEDHIS Manual_Registration V.2.docx", "17.MEDHIS Manual_EMR_Doctor V.2.docx", "18.MEDHIS Manual_Order V.2.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [concept, appointment, scheduling]
roles: [NurseOPD]
verified-on-uat: pending
---

# Appointment System (ระบบนัดหมาย)

ระบบจัดการนัดหมายผู้ป่วยใน MEDHIS ใช้ร่วมกันหลายโมดูล

## การทำนัด

### วิธี 1: เมนูหลัก
- [[OPD]] → **Appointments** → เลือก Department/Careprovider → เลือกวัน/เวลา → Book → SAVE → Print บัตรนัด

### วิธี 2: Day View (หลายคลินิก/แพทย์)
- Appointments → **Day View** → ดูตารางหลายคลินิก/แพทย์พร้อมกัน
- ช่องสีฟ้า = มีนัดแล้ว

### วิธี 3: จาก EMR (แพทย์)
- [[EMR Doctor]] → Appointment icon → ระบุ Duration/Period/Time → Search → Book

### วิธี 4: จาก Ward Board (IPD)
- [[Ward Board]] → เลือกผู้ป่วย → Appointment → ระบุ Department/Careprovider/Date/Time

## Features

- **Future Orders**: สั่ง orders ล่วงหน้าสำหรับวันนัด
- **Tasks**: แพทย์สร้าง Follow Up → พยาบาลทำนัดให้
- **Appointment Slip**: พิมพ์บัตรนัดได้

## การลงทะเบียนจากนัด (2 วิธี)

ดูกระบวนการครบที่ [[Appointment Registration]]

**วิธีที่ 1:** Registration → OP Registration → Patient Search → Select (ระบบแสดง Appointments list) → เลือกนัด → Patient Demographics (Link to Appt) → SAVE
- ระบบดึง Department + Careprovider จากนัดหมายอัตโนมัติ
- สามารถ **Unlink from Appointment** ได้ถ้าไม่ต้องการเชื่อมต่อ

**วิธีที่ 2:** OPD → OPD Worklist → Tab **APPOINTMENTS** → เลือกชื่อผู้ป่วย → กดลงทะเบียน → SAVE

## Future Orders (คำสั่งล่วงหน้าสำหรับนัด)

แพทย์สามารถสั่ง [[Order Types|Future Orders]] ล่วงหน้าจากหน้าจอนัดหมาย:
- หน้าจอนัดหมาย → แถว Future → Toggle เป็น Add → เลือกรายการ → Order
- เมื่อผู้ป่วยมาตามนัด → [[Order Entry]] → แถบ FUTURE ORDERS → Select นำมาสั่งใช้

## Appointment Slip

พิมพ์บัตรนัดได้จาก:
- Appointments → Book → SAVE → **Print** บัตรนัด
- ระบบ Generate ใบนัดพร้อม Department/Careprovider/Date/Time

## ที่ใช้งาน

- [[OPD]] — นัดหมาย OPD + Appointments tab ใน OPD Worklist
- [[IPD]] — นัดหมายจาก Ward Board
- [[Registration]] — ลงทะเบียนจากนัด
- [[EMR Doctor]] — แพทย์ทำนัดจาก Appointment icon; Tasks → Follow Up
- [[OR]] — OR Schedule สำหรับจองห้องผ่าตัด
- [[Order Entry]] — Future Orders เชื่อมกับนัดหมาย
