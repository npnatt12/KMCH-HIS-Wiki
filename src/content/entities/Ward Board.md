---
title: Ward Board
type: entity
sources: ["7.MEDHIS_Manual_IPD V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [entity, screen, ipd, inpatient]
---

# Ward Board

หน้าจอหลักของระบบ [[IPD]] แสดงเตียงและผู้ป่วยใน Ward

## Purpose

แสดงสถานะเตียงทั้งหมดในหอผู้ป่วยที่เลือก พร้อม Action Icons สำหรับดูแลผู้ป่วยใน

## Access Path

Inpatient → **Ward Board** → เลือก Ward ที่ต้องการ

## แสดงข้อมูล (Bed View)

- เตียงทั้งหมดของ Ward พร้อม [[Bed Status]] (Vacant/Occupied/Discharge Stage/Under Maintenance)
- ชื่อผู้ป่วยในแต่ละเตียง
- Click เตียง/ชื่อผู้ป่วย → **Visit Detail**

### [[Bed Status]] Colors

| สถานะ | สี | คำอธิบาย |
|-------|-----|---------|
| **Vacant Bed** | เขียว | เตียงว่าง ไม่มีผู้ป่วย |
| **Occupied Bed** | — | มีผู้ป่วยอยู่ |
| **Discharge Stage** | — | อยู่ในขั้นตอนการจำหน่าย |
| **Under Maintenance** | — | เตียงไม่พร้อมใช้งาน |

## Buttons (Action Icons)

| Button | Action | Conditions | Result |
|--------|--------|------------|--------|
| **Arrive** | รับผู้ป่วยเข้า Ward | ผู้ป่วยยังไม่ได้ Arrive | กล่อง YES/NO → ยืนยัน → สัญลักษณ์ Arrive หายไป |
| **Charting** | บันทึก Vital Signs | — | → OBSERVATION → Vital Sign Chart |
| **Appointment** | ทำนัดหมาย | — | ระบุ Department/Provider/Date/Time |
| **Transfer Request** | ขอย้ายเตียง/Ward | — | เปิด [[IPD Transfer Screen]] |
| **Dispense Return** | คืนยา | — | แสดงรายการยา + จำนวนที่ใช้ |
| **Discharge Plan** | เริ่มกระบวนการจำหน่าย | — | เปิด Discharge Plan 4 ขั้นตอน |
| **Labour Detail** | บันทึกข้อมูลการคลอด | Ward ห้องคลอดเท่านั้น | เปิด [[Labour and Newborn]] Detail |

## Related Workflows

- [[Admission Workflow]] — ผู้ป่วยแสดงที่นี่หลัง Admit สำเร็จ
- [[IPD Discharge Process]] — เริ่มต้นจาก Discharge Plan บน Ward Board
- [[IPD Transfer Between Wards Workflow]] — Transfer Request

## Related

- [[IPD]] — module page
- [[Bed Status]] — สถานะเตียง
- [[Nursing Worklist Screen]] — รายการคำสั่งแพทย์
- [[IPD Discharge Process]] — กระบวนการจำหน่าย
- [[Labour and Newborn]] — เข้าผ่าน Ward Board → Labour Detail
