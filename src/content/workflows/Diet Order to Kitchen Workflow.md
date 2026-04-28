---
title: Diet Order to Kitchen Workflow
type: workflow
sources: ["15.MEDHIS Manual_Diet V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [workflow, diet, nutrition, kitchen, meal]
roles: [AdminSystem]
verified-on-uat: pending
---

# Diet Order to Kitchen Workflow — ขั้นตอนสั่งอาหารถึงห้องครัว

## Overview

กระบวนการสั่งอาหารผู้ป่วย IPD ตั้งแต่นักโภชนาการเปิด Diet Worklist จนถึงครัวรับทราบและเตรียมอาหาร

## Steps

### ขั้นที่ 1 — ตรวจสอบรายชื่อผู้ป่วย (Diet Worklist)

**นักโภชนาการ:**
1. Diet & Nutrition → **Diet Worklist**
2. เลือก Tab ตามกลุ่ม:
   - **New Inpatients** — ผู้ป่วยใหม่ที่ยังไม่สั่งอาหาร
   - **Inpatients** — ผู้ป่วยในทั้งหมด
   - **Outpatients** — ผู้ป่วยนอก (Consult)
3. ค้นหาตาม Ward / Care Provider / ชื่อ
4. ดูประวัติการได้อาหาร / ลง Diet Plan / ส่ง Consult (ถ้าจำเป็น)

### ขั้นที่ 2 — สั่งอาหาร (Diet Order Entry)

**เจ้าหน้าที่โภชนาการ/นักโภชนาการ:**
1. Diet & Nutrition → **Diet Order Entry**
2. ระบุ Ward → กด Search → เลือกผู้ป่วย
3. กดค้นหา Meal Set → ระบบแสดงชุดอาหาร
4. เลือกชุดอาหารสำหรับ 3 มื้อ:
   - **Breakfast** (มื้อเช้า)
   - **Lunch** (มื้อกลางวัน)
   - **Dinner** (มื้อเย็น)
5. กด Select → Confirm → **Save**
6. คำสั่งอาหารส่งไปยัง Kitchen Worklist อัตโนมัติ

### ขั้นที่ 3 — ห้องครัวรับออเดอร์ (Kitchen Worklist)

**เจ้าหน้าที่ห้องครัว:**
1. Diet & Nutrition → **Kitchen Worklist**
2. ดูรายการด้วย 2 มุมมอง:
   - **Summary** — สรุปจำนวนอาหารแต่ละประเภท
   - **Details** — รายละเอียดรายคน + กดรับทราบคำสั่ง
3. ค้นหา/กรองด้วย:
   - Meal Group (กลุ่มอาหาร/มื้อ)
   - Patient Name
   - Ward
   - Order
4. เตรียมอาหารตามรายการ

## Modules Involved

- [Diet](/modules/diet/) — กระบวนการหลัก
- [IPD](/modules/ipd/) — ผู้ป่วยใน (Ward/Bed context)
- [EMR Doctor](/modules/emr-doctor/) — ประวัติโภชนาการผู้ป่วยจาก EMR

## Entities

- [Diet Order Entry Screen](/entities/diet-order-entry-screen/)

## Notes

- Diet Order Entry ใช้สำหรับ **IPD เท่านั้น**
- Outpatients และ Inpatients ใน Diet Worklist ใช้สำหรับ Consult และ Diet Plan (ไม่ใช่สั่งมื้ออาหาร)
- นักโภชนาการสามารถศึกษาประวัติผู้ป่วยจาก EMR และปรึกษาทีมแพทย์ก่อนกำหนด Diet Plan
