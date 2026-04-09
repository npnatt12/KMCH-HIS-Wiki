---
title: OPD Screening Screen
type: entity
sources: ["3.MEDHIS_Manual_OPD V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, screen, opd, screening]
---

# OPD Screening Screen (หน้าจอคัดกรองผู้ป่วยนอก)

หน้าจอที่ใช้สำหรับบันทึก Vital Signs และเปลี่ยนสถานะผู้ป่วยในกระบวนการคัดกรองของ [[OPD]]

## Access Path

OPD → OPD Worklist → Click ผู้ป่วย (Status: Registered) → Visit Detail → Charting

## Purpose

- เปลี่ยนสถานะผู้ป่วยจาก Registered → Arrived → Screening Completed
- บันทึกค่า Vital Signs
- ระบุแพทย์ผู้ตรวจ (Assign Careprovider)
- ส่งชื่อผู้ป่วยเข้าห้องตรวจแพทย์

## ขั้นตอนการใช้งาน

1. Click ผู้ป่วยใน Registered column → Visit Detail เปิดขึ้น
2. กด Status change icon → เลือก **Arrived** → Status เปลี่ยนเป็น Arrived
3. Click **Charting** icon → เลือก **Vital Sign Chart** ใน PANELS
4. กรอกค่า Vital Signs → กด **Save**
5. (ถ้ายังไม่มีแพทย์) Click **Assign Careprovider** → พิมพ์ชื่อแพทย์ → ยืนยัน
6. Click Status change icon → เลือก **Screening Completed** → ชื่อผู้ป่วยปรากฏหน้าแพทย์

## Vital Sign Chart — Fields

| Field | ประเภท | Description |
|-------|--------|-------------|
| ค่า Vital Signs ต่างๆ | Number | BT, PR, RR, BP, SpO2 ฯลฯ (ตามที่ตั้งค่าระบบ) |

**หลังบันทึก:** ข้อมูล Vital Signs แสดงใน:
- EMR → ส่วน **Observation**
- **[[Patient Banner]]** (ตามที่ตั้งค่าให้แสดง)

## Panels (CHARTING)

ใน CHARTING PANELS สามารถเลือก:
- **Vital Sign Chart** — บันทึกสัญญาณชีพ

## Status Transitions (ผ่านหน้านี้)

| จาก | ไป | ผู้กด | ผลลัพธ์ |
|-----|-----|-------|---------|
| Registered | Arrived | พยาบาล/เจ้าหน้าที่ OPD | รับผู้ป่วยเข้าแผนก |
| Arrived | Screening Completed | พยาบาล/เจ้าหน้าที่ OPD | ชื่อส่งไปหน้าแพทย์ |

## Assign Careprovider

| Field | Description |
|-------|-------------|
| ชื่อแพทย์ | Text search — พิมพ์ชื่อแพทย์ที่ต้องการ |

*ต้องระบุแพทย์ก่อนกด Screening Completed — ถ้าไม่มีแพทย์ ชื่อผู้ป่วยจะไม่ไปแสดงในหน้าแพทย์ที่ถูกต้อง*

## Validation / Error Conditions

- **ยังไม่มี Careprovider**: Screening Completed ได้ แต่ชื่อผู้ป่วยจะไม่ปรากฏในหน้าแพทย์ที่ระบุ
- **Vital Signs บน Banner**: ต้องตั้งค่าระบบก่อนว่าให้แสดง field ใดบน Banner

## Related Workflows

- [[OPD Patient Flow]] — ขั้นตอน Registered → Arrived → Screening Completed

## Related

- [[OPD]] — module page
- [[OPD Worklist Screen]] — หน้าจอหลัก OPD
- [[Patient Banner]] — แสดง Vital Signs หลังบันทึก
- [[OPD Patient Status]] — 8 สถานะผู้ป่วยนอก
