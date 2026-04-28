---
title: Diet Module
type: module
sources: ["15.MEDHIS Manual_Diet V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [module, diet, nutrition, kitchen, meal]
verified-on-uat: pending
---

# Diet — ระบบโภชนาการ (Diet & Nutrition)

## Purpose

จัดการอาหารผู้ป่วย — ครอบคลุมการสั่งอาหาร การจัดเตรียมอาหารในห้องครัว และการให้คำปรึกษาทางโภชนาการ

## Access

เมนูหลัก: **Diet & Nutrition**
- Diet Worklist
- Diet Order Entry
- Kitchen Worklist

---

## 1. Diet Worklist

หน้าจอรายการงานของนักโภชนาการ

เส้นทาง: Diet & Nutrition → Diet Worklist

### Sub-tabs

| Tab | Description |
|-----|-------------|
| New Inpatients | ผู้ป่วยในรายใหม่ทั้งหมด — ค้นหาผู้ป่วยที่เพิ่งรับไว้ยังไม่เคยสั่งอาหาร |
| Inpatients | ผู้ป่วยในทั้งหมด — ดูประวัติการได้อาหาร + ลง Diet Plan + ส่ง Consult |
| Outpatients | ผู้ป่วยนอก — ดูประวัติ + ลง Diet Plan + ส่ง Consult นักโภชนา |
| Search Patients | ค้นหาจากชื่อผู้ป่วย |
| Search All Patients | ค้นหาจากผู้ป่วยทั้งหมด |

### Search Fields

| Field | Description |
|-------|-------------|
| Ward | ค้นหาจากตึกผู้ป่วย |
| Care Provider | ค้นหาจากชื่อแพทย์ |
| Search | เริ่มค้นหา |
| Clear | ล้างข้อมูล |

### Inpatients Tab — ฟังก์ชัน

- ดูประวัติการได้อาหารของผู้ป่วย
- ลง **Diet Plan** — แผนโภชนาการสำหรับผู้ป่วย
- ส่ง **Consult** นักโภชนา
- ศึกษาประวัติผู้ป่วยจาก EMR
- ปรึกษาทีมแพทย์เจ้าของไข้

---

## 2. Diet Order Entry (การสั่งอาหาร)

ใช้สำหรับผู้ป่วย IPD เบิกอาหาร

เส้นทาง: Diet & Nutrition → Diet Order Entry

### หน้าจอ Diet Order Entry

| หมายเลข | ปุ่ม/ฟิลด์ | Description |
|---------|----------|-------------|
| 1 | Ward | ระบุตึกที่ต้องการค้นหา |
| 2 | Search | ค้นหาผู้ป่วย |
| 3 | Patient list | เลือกผู้ป่วยที่ต้องการสั่งอาหาร |
| 4 | Meal Set search | ค้นหาชุดอาหารทั้ง 3 มื้อ |
| 5 | Select meal | เลือกสั่งอาหาร |
| 6 | Confirm | ยืนยัน |
| 7 | Save | บันทึก |

### 3 มื้ออาหาร

| มื้อ | Thai | Description |
|-----|------|-------------|
| Breakfast | มื้อเช้า | เลือก Meal Set |
| Lunch | มื้อกลางวัน | เลือก Meal Set |
| Dinner | มื้อเย็น | เลือก Meal Set |

**ขั้นตอน:**
1. ระบุ Ward → Search
2. เลือกผู้ป่วย
3. กดค้นหา Meal Set → เลือกชุดอาหารทั้ง 3 มื้อ
4. กดเลือกสั่งอาหาร → ยืนยัน → บันทึก
5. ระบบแสดงหน้าจอบันทึกข้อมูล

---

## 3. Kitchen Worklist (รายการงานห้องครัว)

สำหรับเจ้าหน้าที่ห้องครัวดูคำสั่งรายการอาหาร

เส้นทาง: Diet & Nutrition → Kitchen Worklist

### Views

| View | Description |
|------|-------------|
| Summary | สรุปรายการอาหารทั้งหมด — ดูจำนวนรวมแต่ละประเภท |
| Details | รายละเอียดคำสั่งอาหาร — กดรับทราบคำสั่งอาหาร |

### Search/Filter Options

| Filter | Description |
|--------|-------------|
| Meal Group | ค้นหาตามกลุ่มอาหาร (มื้ออาหาร) |
| Patient Name | ค้นหาจากชื่อผู้ป่วย |
| Ward | ค้นหาจากตึกผู้ป่วย |
| Order | ค้นหาจาก Order ที่สั่งเบิก |

---

## Additional Features

- **Diet Plan** — แผนโภชนาการส่วนบุคคล บันทึกผ่าน Inpatients tab
- **Consult** — นักโภชนาค้นหาผู้ป่วยที่ส่ง Consult และศึกษาประวัติจาก EMR
- **Search All Patients** — ค้นหาผู้ป่วยที่ไม่อยู่ใน list ปัจจุบัน

## Workflows

- [Diet Order to Kitchen Workflow](/workflows/diet-order-to-kitchen-workflow/) — สั่งอาหาร → Kitchen Worklist → เตรียม

## Entities

- [Diet Order Entry Screen](/entities/diet-order-entry-screen/) — หน้าจอสั่งอาหาร 3 มื้อ

## Integration Points

| Module | Integration |
|--------|-------------|
| [IPD](/modules/ipd/) | อาหารผู้ป่วยใน (Inpatient meals) — จัด 3 มื้อตาม ward |
| [OPD](/modules/opd/) | ผู้ป่วยนอก consult โภชนาการ |
| [EMR Doctor](/modules/emr-doctor/) | ดูประวัติโภชนาการของผู้ป่วยจาก EMR |
