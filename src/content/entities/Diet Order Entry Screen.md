---
title: Diet Order Entry Screen
type: entity
sources: ["15.MEDHIS Manual_Diet V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, diet, nutrition, screen]
roles: [AdminSystem]
verified-on-uat: pending
---

# Diet Order Entry Screen — หน้าจอสั่งอาหารผู้ป่วย

## Purpose

หน้าจอสำหรับสั่งอาหารผู้ป่วย IPD โดยกำหนด Meal Set สำหรับ 3 มื้อ (เช้า/กลางวัน/เย็น)

## Access Path

**Diet & Nutrition** → Diet Order Entry

## Fields

| หมายเลข | Field/Button | Type | Description |
|---------|-------------|------|-------------|
| 1 | Ward | Dropdown/Search | ระบุตึกผู้ป่วยที่ต้องการค้นหา |
| 2 | Search | Button | ค้นหาผู้ป่วยตาม Ward |
| 3 | Patient | List selection | เลือกผู้ป่วยที่ต้องการสั่งอาหาร |
| 4 | Meal Set Search | Search | ค้นหาชุดอาหารทั้ง 3 มื้อ |
| 5 | Select Meal | Button | เลือกสั่งอาหาร |
| 6 | Confirm | Button | ยืนยันรายการ |
| 7 | Save | Button | บันทึกคำสั่งอาหาร |

## Meal Types

| มื้อ | Code | Thai |
|-----|------|------|
| Breakfast | B | มื้อเช้า |
| Lunch | L | มื้อกลางวัน |
| Dinner | D | มื้อเย็น |

## Workflow

1. ระบุ Ward → กด Search → เลือกผู้ป่วย
2. กดค้นหา Meal Set → ระบบแสดงชุดอาหารที่กำหนดไว้
3. เลือกชุดอาหารสำหรับแต่ละมื้อ (Breakfast / Lunch / Dinner)
4. กด Select → Confirm → Save
5. ระบบแสดงหน้าจอยืนยันการบันทึก

## Buttons

| Button | Action | Result |
|--------|--------|--------|
| Search | ค้นหาผู้ป่วย | แสดงรายชื่อตาม Ward |
| Select | เลือก Meal Set | เพิ่มรายการในออเดอร์ |
| Confirm | ยืนยัน | เตรียมบันทึก |
| Save | บันทึก | บันทึกคำสั่งอาหารทั้ง 3 มื้อ |

## Related Workflows

- [Diet Order to Kitchen Workflow](/workflows/diet-order-to-kitchen-workflow/)
