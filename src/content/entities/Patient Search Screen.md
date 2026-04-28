---
title: Patient Search Screen
type: entity
sources: ["2.MEDHIS Manual_Registration V.2.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [entity, screen, registration, search]
roles: [AdminSystem]
verified-on-uat: pending
---

# Patient Search Screen

หน้าจอค้นหาผู้ป่วย — เป็นหน้าจอแรกเมื่อเข้า [[Registration]] → OP Registration

## Purpose

ใช้ค้นหาผู้ป่วยในระบบก่อนเปิด Visit ทุกครั้ง เพื่อตรวจสอบว่าผู้ป่วยมีประวัติในระบบหรือไม่

## Access Path

- [[Registration]] → OP Registration (ใช้ทุกรูปแบบยกเว้น Emergency / Mass Casualty / Bulk / Pre-Registration)

## Fields (Search)

| Field | Type | Description |
|-------|------|-------------|
| Hospital Number (MRD) | Text | HN ของผู้ป่วย |
| ชื่อ (First Name) | Text | ชื่อจริง |
| นามสกุล (Last Name) | Text | นามสกุล |
| เบอร์โทรศัพท์บ้าน | Text | หมายเลขโทรศัพท์บ้าน |
| เบอร์โทรศัพท์มือถือ | Text | หมายเลขมือถือ |
| หมายเลขบัตรประชาชน (National ID) | Text | เลขบัตรประชาชน 13 หลัก |
| ชื่ออื่นๆ (Alias Names) | Text | ชื่อที่เคยบันทึกไว้ในระบบ |

## Result Columns (รายการผู้ป่วยที่พบ)

| Column | Description |
|--------|-------------|
| HN (Hospital Number) | รหัสผู้ป่วย |
| ชื่อ-นามสกุล | ชื่อผู้ป่วย |
| วันเกิด | Date of Birth |
| เพศ | Gender |
| Appointment Details | แสดงนัดหมาย (ถ้ามี) |

## Buttons

| Button | Conditions | Action | Result |
|--------|------------|--------|--------|
| Search | กรอกข้อมูลค้นหาแล้ว | ค้นหาผู้ป่วยในระบบ | แสดงรายการ หรือ Error Box ถ้าไม่พบ |
| OK (Error Box) | ไม่พบผู้ป่วย | ปิด Error Box | กลับสู่หน้า Search |
| New | ไม่พบผู้ป่วย | สร้างผู้ป่วยใหม่ | เปิด [[Patient Demographics Screen]] ว่าง |
| Select | พบผู้ป่วย + เลือกแล้ว | เลือกผู้ป่วย | เปิด [[Patient Demographics Screen]] พร้อมข้อมูล |

## Behavior

- ถ้า **พบ** → แสดงรายการผู้ป่วยที่ตรงกัน
  - กดเลือกกล่องรายชื่อผู้ป่วยที่ต้องการ
  - ผู้ป่วยที่มีนัดหมาย: ระบบแสดงรายละเอียด Appointments ด้วย
  - กด **Select** → ระบบตรวจสอบ Revisit Duration (App Setting)
    - อยู่ในช่วง Revisit Duration → Popup ให้เลือก **NEW VISIT** หรือ **REVISIT**
    - ไม่อยู่ในช่วง → เปิด Visit ใหม่ตรง
  - หากไม่อัปเดทข้อมูลเกิน 6 เดือน → ระบบแสดง Pop-up เตือนให้อัปเดท
- ถ้า **ไม่พบ** → แสดง Error Box → กด **OK** → กดปุ่ม **New** เพื่อลงทะเบียนใหม่

## Validation Rules

- ต้องกรอกข้อมูลค้นหาอย่างน้อย 1 field ก่อนกด Search
- National ID ใช้สำหรับ filter — ไม่ตรวจ MOD11 ณ จุดค้นหา (ตรวจที่ Demographics เท่านั้น)

## Related Workflows

- [[New Patient Registration]] — กรณีไม่พบผู้ป่วย
- [[Appointment Registration]] — กรณีผู้ป่วยมีนัด
- [[Registration Update Merge Workflow]] — กรณีต้องการอัปเดท/แก้ไขข้อมูล

## Related Entities

- [[Patient Demographics Screen]] — หน้าจอถัดไปหลังค้นหา
- [[Patient Banner]] — แสดงข้อมูลสรุปผู้ป่วย
