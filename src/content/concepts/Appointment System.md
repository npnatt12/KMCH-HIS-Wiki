---
title: Appointment System
type: concept
sources: ["3.MEDHIS_Manual_OPD V.1.docx", "2.MEDHIS Manual_Registration V.2.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [concept, appointment, scheduling]
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

## การลงทะเบียนจากนัด

- [[Appointment Registration]] — 2 วิธี (Registration menu / OPD Worklist Appointments tab)

## ที่ใช้งาน

- [[OPD]] — นัดหมาย OPD + Appointments tab
- [[IPD]] — นัดหมายจาก Ward Board
- [[Registration]] — ลงทะเบียนจากนัด
- [[EMR Doctor]] — แพทย์ทำนัด
- [[OR]] — OR Schedule สำหรับจองห้องผ่าตัด
