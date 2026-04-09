---
title: Diet Module
titleTh: ระบบโภชนาการ
type: cheatsheet
sources: ["15.MEDHIS Manual_Diet V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, module, diet]
---

## Purpose
จัดการอาหารผู้ป่วย — สั่งอาหาร 3 มื้อ เตรียมอาหารในห้องครัว และให้คำปรึกษาทางโภชนาการ

## Access
**Diet & Nutrition → Diet Worklist / Diet Order Entry / Kitchen Worklist**

## Workflow

| Step | Actor | Action |
|------|-------|--------|
| 1 | นักโภชนาการ | Diet Worklist → Tab New Inpatients → ดู ผป.ใหม่ยังไม่สั่งอาหาร |
| 2 | นักโภชนาการ | Diet Order Entry → ระบุ Ward → Search → เลือก ผป. |
| 3 | นักโภชนาการ | ค้นหา Meal Set ทั้ง 3 มื้อ (เช้า/กลางวัน/เย็น) → เลือก → ยืนยัน → Save |
| 4 | นักโภชนาการ | Diet Worklist → Inpatients → ลง Diet Plan + ส่ง Consult |
| 5 | เจ้าหน้าที่ครัว | Kitchen Worklist → Tab Summary (ดูจำนวนรวม) / Details (รับทราบคำสั่ง) |

## Key Screens
- **Diet Worklist** — 5 tabs: New Inpatients, Inpatients, Outpatients, Search Patients, Search All
- **Diet Order Entry** — สั่งอาหาร 3 มื้อต่อวันสำหรับ ผป.ใน
- **Kitchen Worklist** — Summary (จำนวนรวม) + Details (รายผู้ป่วย)

## Key Fields

| Field | หมายเหตุ |
|-------|---------|
| Ward | ระบุตึกที่ต้องการ |
| Meal Set | ชุดอาหารสำหรับแต่ละมื้อ |
| Breakfast / Lunch / Dinner | 3 มื้อต่อวัน |
| Diet Plan | แผนโภชนาการส่วนบุคคล |
| Consult | ส่งปรึกษานักโภชนาการ |
| Kitchen: Summary | จำนวนรวมแต่ละประเภทอาหาร |
| Kitchen: Details | รายละเอียดแต่ละ ผป. — กดรับทราบ |

## Integration
Registration (Admit) → IPD (Ward) → **Diet** (Order Entry) → Kitchen Worklist → OPD (Consult โภชนา)
