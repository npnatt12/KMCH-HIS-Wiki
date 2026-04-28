---
title: IPD Transfer Screen
type: entity
sources: ["7.MEDHIS_Manual_IPD V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, screen, ipd, transfer, inpatient]
roles: [NurseIPD]
verified-on-uat: pending
---

# IPD Transfer Screen

หน้าจอสำหรับส่งคำขอย้ายเตียงหรือย้ายหอผู้ป่วย (Transfer Request)

## Purpose

ให้พยาบาล/เจ้าหน้าที่ Ward ส่งคำขอย้ายผู้ป่วยไปยังเตียงหรือหอผู้ป่วยอื่น โดยต้องรอการอนุมัติจากแผนก [[Admission]]

## Access Path

[[Ward Board]] → เลือกผู้ป่วย → Icon **Transfer Request**

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Ward (ปลายทาง) | Dropdown | Yes | หอผู้ป่วยที่ต้องการย้ายไป |
| Bed (ปลายทาง) | Select | Yes | เตียงที่ต้องการย้ายไป (เลือกจากเตียงว่าง) |

## Buttons

| Button | Action | Conditions | Result |
|--------|--------|------------|--------|
| **SAVE** | ส่งคำขอย้าย | เลือก Ward/เตียงปลายทางแล้ว | คำขอส่งไปรอการอนุมัติจาก Admission |

## กระบวนการหลัง Save

1. ติดต่อประสานงานแผนก [[Admission]] เพื่อขออนุมัติ
2. แผนก Admission ตรวจสอบข้อมูลและกด **TRANSFER** เพื่ออนุมัติการย้าย
3. ผู้ป่วยย้ายเตียงสำเร็จ

## Related Workflows

- [[IPD Transfer Between Wards Workflow]] — กระบวนการย้ายเตียงแบบ End-to-End

## Related

- [[Ward Board]] — เข้าผ่าน Transfer Request icon
- [[IPD]] — module page
- [[Admission]] — ต้องอนุมัติก่อน Transfer จะสำเร็จ
