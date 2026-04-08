---
title: Diet Module
type: module
sources: ["15.MEDHIS Manual_Diet V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [module, diet, nutrition, kitchen, meal]
---

# Diet — ระบบโภชนาการ (Diet & Nutrition)

## Purpose

จัดการอาหารผู้ป่วย — ครอบคลุมการสั่งอาหาร การจัดเตรียมอาหารในห้องครัว และการให้คำปรึกษาทางโภชนาการ

## Access

เมนูหลัก: **Diet & Nutrition**

## Key Screens (3 หน้าจอ)

### 1. Diet Worklist

หน้าจอรายการงานของนักโภชนาการ แบ่งเป็น 3 กลุ่ม:

| Group | Description |
|-------|-------------|
| New Inpatients | ผู้ป่วยในรายใหม่ที่ยังไม่ได้สั่งอาหาร |
| Inpatients | ผู้ป่วยในทั้งหมดที่มีคำสั่งอาหาร |
| Outpatients | ผู้ป่วยนอก (สำหรับ consult โภชนาการ) |

การค้นหา:
- ค้นหาตาม **Ward** (หอผู้ป่วย)
- ค้นหาตาม **Careprovider** (แพทย์ผู้ดูแล)

### 2. Diet Order Entry (การสั่งอาหาร)

ขั้นตอน: เลือก **Ward** → เลือก **Patient** → กำหนด **Meal Sets** สำหรับ 3 มื้อ:

| Meal | Description |
|------|-------------|
| Breakfast | มื้อเช้า |
| Lunch | มื้อกลางวัน |
| Dinner | มื้อเย็น |

แต่ละมื้อสามารถเลือก Meal Set ที่กำหนดไว้ในระบบ

### 3. Kitchen Worklist (รายการงานห้องครัว)

หน้าจอสำหรับเจ้าหน้าที่ห้องครัว:

| View | Description |
|------|-------------|
| Summary | สรุปจำนวนอาหารแต่ละประเภท |
| Details | รายละเอียดอาหารรายคน |

การค้นหา:
- **Meal Group** — กลุ่มอาหาร
- **Patient Name** — ชื่อผู้ป่วย
- **Ward** — หอผู้ป่วย
- **Order** — คำสั่งอาหาร

## Additional Features

- **Diet Plan** — แผนโภชนาการสำหรับผู้ป่วย
- **Consult** — ให้คำปรึกษาทางโภชนาการโดยนักโภชนาการ

## Integration Points

| Module | Integration |
|--------|-------------|
| [[IPD]] | อาหารผู้ป่วยใน (Inpatient meals) — จัด 3 มื้อตาม ward |
| [[OPD]] | ผู้ป่วยนอก consult โภชนาการ |
| [[EMR Doctor]] | ดูประวัติโภชนาการของผู้ป่วย |
