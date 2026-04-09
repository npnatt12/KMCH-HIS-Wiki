---
title: Admission Module
type: module
sources: ["6.MEDHIS Manual_Admission V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
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

## [[Admission Detail Screen]] — รายละเอียดแต่ละ Section

### Section 1: Careprovider Detail

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Department | Dropdown | Yes | แผนกที่รับผู้ป่วย |
| Attending Doctor | Search | Yes | แพทย์เจ้าของไข้ |
| Comment | Text | No | ข้อความที่แพทย์ OPD ส่งมา |

### Section 2: Payor Detail

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| สิทธิ์การรักษา | Dropdown | Yes | สิทธิ์ที่ใช้ Admit ครั้งนี้ (อาจต่างจาก OPD) |
| สิทธิ์เบิก | Dropdown | No | สิทธิ์เบิกเพิ่มเติม |

→ ดูรายละเอียดสิทธิ์ทั้งหมดใน [[Payor and Treatment Rights]]

### Section 3: Episode Detail

| Field | Type | Description |
|-------|------|-------------|
| Continuous Episode | Toggle | เปิดหากเป็นการรักษาต่อเนื่องจาก Visit ก่อนหน้า |

### Section 4: Medico Legal Case

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Is Medico Legal | Toggle | No | เปิดหากเป็นเคสคดี |
| รายละเอียดคดี | Text | Conditional | ระบุรายละเอียดกรณีเป็นเคสคดี |

### Section 5: Referral Details

| Field | Type | Description |
|-------|------|-------------|
| Referred From | Dropdown | โรงพยาบาลต้นทาง |
| Referral Date | Date | วันที่ส่งตัว |
| Referral Note | Text | เหตุผลการส่งตัว |

### Section 6: Bed Selection

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Ward | Dropdown | Yes | หอผู้ป่วยที่ต้องการ |
| Room Type | Dropdown | Yes | ประเภทห้อง (ตามสิทธิ์/ความต้องการ) |
| Bed | Select | Yes | เลือกเตียงจากเตียงว่างที่มี |

- เตียงว่างแสดงเป็น [[Bed Status|Vacant Bed]] (สีเขียว)
- เลือกได้เฉพาะเตียงที่มีสถานะ Vacant เท่านั้น

### Section 7: Visit Detail

| Field | Type | Description |
|-------|------|-------------|
| Bed Charges | Display | ค่าห้อง/เตียงที่จะเรียกเก็บ |
| Isolation | Toggle | เปิดหากผู้ป่วยต้องแยกกักตัว |
| Transfer Mode | Dropdown | วิธีการมาถึง (Walk-in/Wheelchair/Stretcher/Ambulance) |
| Re-visit | Toggle | เปิดหากเป็นการ Admit ซ้ำในช่วงเวลาใกล้กัน |
| Pregnant | Toggle | เปิดหากผู้ป่วยตั้งครรภ์ |
| Breast Feeding | Toggle | เปิดหากผู้ป่วยให้นมบุตร |

## Pre-Admit Orders

| ประเภท | ปุ่ม | คำอธิบาย |
|--------|------|----------|
| **Pre-Admit Daily Orders** | Add | Order แบบ Daily ที่แพทย์สั่งล่วงหน้า ก่อนผู้ป่วยไปถึง Ward |
| **Pre-Admit Continuous Orders** | Add | Order แบบ Continuous ที่แพทย์สั่งล่วงหน้า |

- สั่งจากหน้า OPD EMR → Tab Admission ก่อน Save Request
- Orders จะพร้อมใน Ward เมื่อผู้ป่วย Arrive แล้ว

## Button Actions

| Button | Action | Conditions | Result |
|--------|--------|------------|--------|
| **Admit** | เริ่ม Admit ผู้ป่วยจาก Request List | ผู้ป่วยอยู่ใน Request List | เปิดหน้า Admission Detail |
| **Cancel** (จาก Request List) | ยกเลิก Request Admission | ก่อนกด Admit | Request ถูกยกเลิก |
| **Save** (Admission Detail) | บันทึก Admit | ข้อมูลครบถ้วน | ผู้ป่วยแสดงใน Admission List |
| **Cancel Admission** | ยกเลิกการ Admit | ก่อนเจ้าหน้าที่ Ward กด Arrive | เตียงกลาย Vacant ทันที |

## Permissions

| Action | Roles | Notes |
|--------|-------|-------|
| Request Admission | แพทย์ / พยาบาล OPD/ER | จากหน้า OPD EMR |
| ทำ Admit (Admission Detail) | เจ้าหน้าที่ Admission | จาก Inpatient → Admission List |
| Direct Admission | เจ้าหน้าที่ Admission | ไม่ต้องผ่าน OPD/ER |
| Cancel Admission | **จำกัดสิทธิ์บางตำแหน่งเท่านั้น** | กำหนดในระดับ system configuration |

## Error / Edge Cases

- **ยกเลิกหลัง Arrive ไม่ได้**: Cancel Admission ใช้ได้เฉพาะก่อนกด Arrive เท่านั้น — หากกด Arrive แล้วต้องใช้กระบวนการ Discharge
- **Bed ไม่ว่าง**: หากเตียงที่เลือกถูกจองระหว่างบันทึก ต้องเลือกเตียงใหม่
- **ผู้ป่วยไม่ผ่าน OPD/ER**: ใช้ Direct Admission — Search Patient ก่อน Select
- **Cancel ต้องระบุเหตุผล**: ระบบแสดง dialog ให้ระบุเหตุผลก่อน SAVE จึงจะยกเลิกได้

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
