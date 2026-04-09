---
title: Diet Order to Kitchen Workflow
titleTh: ขั้นตอนสั่งอาหารถึงห้องครัว
type: workflow
sources: ["15.MEDHIS Manual_Diet V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, diet]
---

## Overview
นักโภชนาการสั่งอาหาร IPD 3 มื้อผ่าน Diet Order Entry และครัวรับทราบออเดอร์จาก Kitchen Worklist

## Steps
1. (นักโภชนาการ) Diet & Nutrition → Diet Worklist → เลือก Tab New Inpatients / Inpatients
2. (นักโภชนาการ) ดูประวัติโภชนาการ / วาง Diet Plan จาก EMR (ถ้าต้องการ)
3. (นักโภชนาการ) Diet & Nutrition → Diet Order Entry → ระบุ Ward → Search → เลือกผู้ป่วย
4. (นักโภชนาการ) ค้นหา Meal Set → เลือกชุดอาหาร Breakfast / Lunch / Dinner → Confirm → Save
5. (ครัว) Diet & Nutrition → Kitchen Worklist → ดู Summary (จำนวนรวม) หรือ Details (รายคน)
6. (ครัว) กรองด้วย Meal Group / Patient Name / Ward → กดรับทราบคำสั่ง → เตรียมอาหาร

## Decision Points
- Diet Worklist Tab Outpatients: ใช้สำหรับ Consult เท่านั้น ไม่ใช่สั่งมื้ออาหาร
- Kitchen Worklist มี 2 มุมมอง: Summary (ภาพรวมจำนวน) และ Details (รายละเอียดรายคน)

## Key Rules
- Diet Order Entry ใช้สำหรับ IPD เท่านั้น
- คำสั่งอาหารส่งไป Kitchen Worklist อัตโนมัติหลัง Save
- นักโภชนาการควรดูประวัติจาก EMR ก่อนกำหนด Diet Plan
- สั่งได้ครั้งละ 3 มื้อ: Breakfast, Lunch, Dinner

## Modules
IPD → Diet & Nutrition → Kitchen
