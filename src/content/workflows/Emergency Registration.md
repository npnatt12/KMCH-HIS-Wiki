---
title: Emergency Registration Workflow
type: workflow
sources: ["2.MEDHIS Manual_Registration V.2.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [workflow, registration, emergency]
---

# ขั้นตอนลงทะเบียนผู้ป่วยฉุกเฉิน (Emergency Registration)

การลงทะเบียนผู้ป่วยฉุกเฉินผ่านเมนู Emergency — แบบฟอร์มย่อ ต้องการข้อมูลขั้นต่ำ

## ขั้นตอน

### 1. เปิดหน้าจอ
- เลือกเมนู **Emergency → Emergency Registration**

### 2. เลือกประเภทผู้ป่วย
- **New Patient** (default): เปิดสวิตช์ — กรอกข้อมูลใหม่
- **ผู้ป่วยเก่า**: ปิดสวิตช์ New Patient → ค้นหาจาก Search Patients → Click เลือก

### 3. กรอกข้อมูล

**Basic Details** — Required field ขั้นต่ำ: **First Name** เท่านั้น

**Emergency Detail** — รายละเอียดการนำส่งผู้ป่วยฉุกเฉิน

**Visit Detail** — Department (default: **Emergency**), Required field

### 4. บันทึก
- กด **Save**
- ผู้ป่วยใหม่: ระบบแสดง Popup สร้าง **MRN** (Medical Record Number) อัตโนมัติ
- ผู้ป่วยเก่า: ระบบแสดง Popup ยืนยันการสร้าง Visit

## เปรียบเทียบกับ [[New Patient Registration]]

| | Emergency Registration | New Patient Registration |
|---|---|---|
| Required fields | First Name + Department | ทุก mandatory fields |
| Default Department | Emergency | ไม่มี |
| MRN | สร้างอัตโนมัติ | สร้างอัตโนมัติ |
| ข้อมูลเต็ม | ไม่จำเป็น | จำเป็น |

## Related

- [[Registration]] — module page
- [[Mass Casualty Registration]] — สำหรับเหตุอุบัติภัยหมู่
- [[ER]] — Emergency Room module
