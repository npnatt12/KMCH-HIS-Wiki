---
title: ER — Emergency Room Module
type: module
sources: ["4.MEDHIS Manual_ER V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [module, er, emergency]
---

# ER — ระบบงานผู้ป่วยฉุกเฉิน (Emergency)

## Purpose

ระบบจัดการผู้ป่วยฉุกเฉินตั้งแต่ลงทะเบียน คัดกรอง (Triage) จนจำหน่าย ครอบคลุมทั้งผู้ป่วยฉุกเฉินรายเดียวและอุบัติภัยหมู่

## Access

เมนูหลัก: **Emergency**

## Key Screens

### [[Whiteboard]]
รายชื่อผู้ป่วยฉุกเฉินทั้งหมด แสดง:
- **[[ESI Level]]** — สีแสดงระดับความรุนแรง
- **Waiting Time** — ระยะเวลารอคอย
- **Status** — สถานะผู้ป่วย
- Click ชื่อ → Visit Detail → เข้าเมนูต่างๆ

### Triage Screen
- **Triaged By** — ชื่อผู้ประเมิน
- **Chief Complaints** — อาการสำคัญเบื้องต้น
- **Present Illness** — การเจ็บป่วยปัจจุบัน
- **[[ESI Level]]** — ระบบแสดงอัตโนมัติเมื่อประเมิน
- **Glasgow Coma Scale** — ระดับความรู้สึกตัว
- Tab **PAST TRIAGE** — ประวัติการคัดกรองเก่า

### Emergency Discharge Screen
- **Date/Time** — default ปัจจุบัน
- **Recommended By** — แพทย์ที่สั่งจำหน่าย
- **Discharge Type** — ประเภทการจำหน่าย
- **Discharge Status** — สถานะจำหน่าย (ดูตารางด้านล่าง)
- **Comments** — หมายเหตุ

## Workflows

### 1. [[Emergency Registration]]
Emergency → Emergency Registration → New/Existing → Basic Details + Emergency Detail + Visit Detail → Save

### 2. [[Mass Casualty Registration]]
Emergency → Mass Casualty → Incident Details + Adult/Child counts → Save

### 3. Triage (คัดกรอง)
Visit → Triage icon → บันทึก Chief Complaints, Present Illness, ESI Level, Glasgow Coma Scale → Save → Status เปลี่ยนเป็น **Triaged**

### 4. Emergency Discharge (จำหน่าย)

| Discharge Status | Action |
|------------------|--------|
| **Discharge** | จำหน่ายปกติ → Medical Discharge → ส่ง[[Billing|การเงิน]] |
| **Death** | บันทึกรายละเอียดการเสียชีวิต |
| **Referred to Admission** | รับเป็นผู้ป่วยใน → ส่ง[[Admission]] |
| **Referred to Other Hospital** | ส่งต่อโรงพยาบาลอื่น |
| **Send to OR** | ส่งผ่าตัด → ส่ง[[OR]] |

Save → Status เปลี่ยนเป็น **Medical Discharge** → เข้าสู่กระบวนการทางการเงิน

## Integration Points

| Module | Integration |
|--------|-------------|
| [[Registration]] | Emergency Registration, Mass Casualty |
| [[Admission]] | Referred to Admission → IPD |
| [[OR]] | Send to OR |
| [[Billing]] | Medical Discharge → billing process |
| [[OPD]] | ผู้ป่วย ER อาจส่งต่อ OPD |
