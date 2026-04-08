---
title: Admission Module
type: module
sources: ["6.MEDHIS Manual_Admission V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [module, admission, inpatient]
---

# Admission — ระบบงานรับผู้ป่วยใน

## Purpose

ระบบรับผู้ป่วยเข้าเป็นผู้ป่วยใน (Admit) จัดการเตียง และยกเลิก Admit

## Access

เมนูหลัก: **Inpatient → Admission / Admission List**

## Admission Workflow (2 วิธี)

### วิธี 1: Admit จาก OPD/ER (Request Admission)

1. **แพทย์/พยาบาล OPD/ER**: EMR → Request Admission → Tab Admission
   - ระบุ **Ward** ที่ต้องการ Admit
   - ระบุ **แพทย์** ที่สั่ง Admit
   - **Pre-Admit Daily Orders** — สั่ง orders ล่วงหน้าแบบ Daily (กด Add)
   - **Pre-Admit Continuous Orders** — สั่ง orders ล่วงหน้าแบบ Continuous (กด Add)
   - กด **Save** → ส่งข้อมูลไปแผนก Admission

2. **เจ้าหน้าที่ Admission**: Inpatient → Admission List → Tab **Request List**
   - เลือกผู้ป่วย → กด **Admit** (หรือ Cancel)
   - ระบบแสดง **Admission Detail**

### วิธี 2: Direct Admission (ไม่ผ่าน OPD/ER)

Inpatient → Admission → Search Patient → Select → Admission Detail

### Admission Detail Sections

| Section | Description |
|---------|-------------|
| **Careprovider Detail** | แผนก, แพทย์เจ้าของไข้, Comments จากแพทย์ OPD |
| **[[Payor and Treatment Rights|Payor Detail]]** | สิทธิ์การรักษาสำหรับ Admit |
| **Episode Detail** | การรักษาต่อเนื่อง |
| **Medico Legal Case** | ข้อมูลกรณีเป็นเคสคดี |
| **Referral Details** | กรณีผู้ป่วย refer เข้า |
| **Bed Selection** | เลือกเตียงตามชนิดที่ต้องการ |
| **Visit Detail** | Bed Charges, แยกกักตัว, Transfer Mode, Revisit, ตั้งครรภ์, ให้นมบุตร |

กด **Save** → ผู้ป่วยแสดงใน Admission List

## Cancel Admission

- **เงื่อนไข**: ก่อนเจ้าหน้าที่ Ward กด **Arrive** เท่านั้น
- Inpatient → Admission List → เลือกผู้ป่วย → **Cancel Admission**
- ระบุเหตุผล → Save
- เตียงกลายเป็น **Vacant Bed** (สีเขียว) ทันที
- **จำกัดสิทธิ์**: บางตำแหน่งเท่านั้น

## Integration Points

| Module | Integration |
|--------|-------------|
| [[OPD]] | Request Admission จาก OPD EMR |
| [[ER]] | Emergency Discharge → Referred to Admission |
| [[IPD]] | Admit สำเร็จ → ผู้ป่วยแสดงใน [[Ward Board]] |
| [[Billing]] | Payor Detail ส่งต่อ IP Billing |
