---
title: IPD Transfer Between Wards Workflow
type: workflow
sources: ["7.MEDHIS_Manual_IPD V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [workflow, ipd, transfer, inpatient]
roles: [NurseIPD]
verified-on-uat: pending
---

# ขั้นตอนการย้ายเตียง/หอผู้ป่วย (IPD Transfer Between Wards Workflow)

## Overview

กระบวนการขอย้ายผู้ป่วยไปยังเตียงหรือหอผู้ป่วยอื่น โดยต้องผ่านการอนุมัติจากแผนก [[Admission]]

## Steps

### พยาบาล/เจ้าหน้าที่ Ward (ต้นทาง)

1. [[Ward Board]] → เลือกผู้ป่วยที่ต้องการย้าย
2. กดสัญลักษณ์ **Transfer Request**
3. ระบบแสดง [[IPD Transfer Screen]]
4. เลือก **Ward** หรือ **เตียง** ปลายทางที่ต้องการ
5. กด **SAVE** → คำขอส่งไปรอ Admission อนุมัติ
6. ติดต่อประสานงานแผนก [[Admission]] เพื่อขออนุมัติการย้าย

### เจ้าหน้าที่ Admission

7. ตรวจสอบข้อมูลผู้ป่วยและเตียงปลายทาง
8. กด **TRANSFER** เพื่ออนุมัติ
9. ผู้ป่วยย้ายเตียงสำเร็จ — [[Ward Board]] ปลายทางแสดงชื่อผู้ป่วย

## Flow Diagram

```
Ward Board → Transfer Request → เลือก Ward/เตียง → SAVE
                                                        ↓
                                      ติดต่อ Admission → กด TRANSFER → ย้ายสำเร็จ
```

## เงื่อนไข

- Ward เองไม่สามารถย้ายได้โดยตรง ต้องผ่านการอนุมัติจาก Admission เสมอ
- เตียงปลายทางต้องมีสถานะ [[Bed Status|Vacant Bed]] จึงจะสามารถเลือกได้

## Modules Involved

- [[IPD]] — [[Ward Board]], [[IPD Transfer Screen]]
- [[Admission]] — อนุมัติการย้าย (กด TRANSFER)
