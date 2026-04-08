---
title: Registration Module
type: module
sources: ["2.MEDHIS Manual_Registration V.2.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [module, registration, patient]
---

# Registration — ระบบงานลงทะเบียน

## Purpose

ระบบลงทะเบียนผู้ป่วยเป็นจุดเริ่มต้นของทุก visit ในโรงพยาบาล ครอบคลุมการสร้างประวัติผู้ป่วยใหม่ การเปิด visit ผู้ป่วยเก่า การลงทะเบียนฉุกเฉิน อุบัติภัยหมู่ และการตรวจสอบสิทธิการรักษา

## Access

เมนูหลัก: **Registration → OP Registration**

## Key Screens

### [[Patient Search Screen]]

หน้าจอค้นหาผู้ป่วย — เป็นหน้าจอแรกเมื่อเข้า OP Registration

### [[Patient Demographics Screen]]

หน้าจอหลักสำหรับกรอก/แก้ไขข้อมูลผู้ป่วย ประกอบด้วย:

| Section | Description |
|---------|-------------|
| Patient Picture | ถ่ายจาก Webcam หรือ Upload ไฟล์ |
| Basic Details | ชื่อ, นามสกุล, เพศ, วันเกิด, หมู่เลือด, National ID (MOD11), เบอร์โทร, อีเมล |
| Address Detail | ที่อยู่ — ค้นหาจากตำบล/รหัสไปรษณีย์ |
| Visit Detail | Department, Careprovider, [[Visit Types|Visit Type]], Priority, Transfer Mode, REVISIT |
| [[Payor and Treatment Rights|Payor Details]] | สิทธิการรักษา, Payor ranking, SELFPAY อัตโนมัติ |
| Referral Detail | ข้อมูลการ refer จากโรงพยาบาลอื่น |
| Episode Detail | กลุ่มการรักษาต่อเนื่อง (Episode Type) |
| Additional Detail | VIP, Anonymous, Interpreter, สัญชาติ, ศาสนา, ภาษา, สถานะสมรส, อาชีพ |
| Alias Names | ชื่ออื่นๆ ของผู้ป่วย |
| More Address | ที่อยู่เพิ่มเติม |
| More Contacts | ช่องทางติดต่อเพิ่มเติม |
| More IDs | หมายเลขบัตรอื่นๆ |
| Next of Kin | ญาติ/ผู้ติดต่อ (เชื่อมกับผู้ป่วยในระบบได้) |
| Disability | ข้อมูลความพิการ |
| Equipment | อุปกรณ์ในร่างกาย (กะโหลกปลอม, ตาปลอม ฯลฯ) |

## Registration Workflows (9 รูปแบบ)

### 1. [[New Patient Registration|ผู้ป่วยใหม่]]
Registration → OP Registration → Patient Search (ไม่พบ) → กด New → กรอก Patient Demographics → SAVE

### 2. ผู้ป่วยเก่า
Registration → OP Registration → Patient Search → Select ผู้ป่วย → เลือก NEW VISIT หรือ REVISIT → ตรวจสอบ/แก้ไขข้อมูล → SAVE
- ระบบตรวจสอบ Revisit Duration (App Setting) แสดง popup ให้เลือก
- ไม่อัปเดทเกิน 6 เดือน → ระบบแจ้งเตือน
- สามารถ Copy Payor จาก visit เก่าได้
- มี View Audit Log สำหรับดูประวัติการแก้ไข

### 3. [[Appointment Registration|ผู้ป่วยนัด]]
**วิธี 1:** Registration → OP Registration → Search → Select (ระบบแสดง Appointments) → SAVE
**วิธี 2:** [[OPD]] → OPD Worklist → Tab APPOINTMENTS → เลือกผู้ป่วย → ลงทะเบียน
- ระบบดึง Department และชื่อแพทย์จากนัดหมายอัตโนมัติ
- สามารถ Unlink from Appointment ได้

### 4. [[Emergency Registration|ผู้ป่วยฉุกเฉิน]]
Emergency → Emergency Registration → เลือก New/Existing → กรอก Basic Details + Emergency Detail + Visit Detail → SAVE
- Required field ขั้นต่ำ: First Name + Department (default: Emergency)
- ผู้ป่วยใหม่ได้ MRN อัตโนมัติ

### 5. [[Mass Casualty Registration|อุบัติภัยหมู่]]
Emergency → Mass Casualty → ระบุ Incident Details + จำนวน Adult/Child แยกเพศ → SAVE
- ระบบสร้างชื่อผู้ป่วยอัตโนมัติ: "Incident_Adult/Child_เพศ_ลำดับ"
- Department default: Emergency
- บันทึก Escort (ผู้นำส่ง) ได้

### 6. Modify Demographics
เข้าจาก: Registration / [[OPD]] Worklist / [[IPD]] Ward Board → icon → Modify Demographics → แก้ไข → SAVE
- ต้องกดปุ่มปลดล็อคก่อนแก้ไข
- การเข้าถึงขึ้นอยู่กับสิทธิ์ผู้ใช้งาน

### 7. [[NHSO Authentication|ตรวจสอบสิทธิ สปสช.]]
Demographics → Basic Details → ระบุเลขบัตรประชาชน → กดเช็คสิทธิ → ระบบแสดงสิทธิ → เลือก → ระบบระบุให้อัตโนมัติ

### 8. Bulk Registration
Registration → Bulk Registration → Upload Excel template → Load Excel data → Register (สร้าง HN) → Appointment → Visit Creation → Order

### 9. Pre-Registration
Registration → Pre-Registration → กรอก Basic Detail + upload เอกสาร → SAVE
- สำหรับลงทะเบียนล่วงหน้าก่อนผู้ป่วยมาถึง

## Integration Points

| Module | Integration |
|--------|-------------|
| [[OPD]] | OPD Worklist → Appointments tab, Modify Demographics |
| [[ER]] | Emergency Registration, Mass Casualty |
| [[IPD]] | Ward Board → Modify Demographics |
| [[Billing]] | Payor Details ส่งต่อระบบ Billing |
| สปสช. (NHSO) | ตรวจสอบสิทธิการรักษาออนไลน์ |
| Appointment System | Link/Unlink นัดหมายกับ visit |

## Key Business Rules

- **Mandatory fields** แสดงด้วย `*` และแถบสีแดง
- **SAVE button** เปลี่ยนเป็นสีฟ้าเมื่อกรอก mandatory fields ครบ
- **National ID** ตรวจสอบด้วย MOD11 — แจ้งเตือนถ้าไม่ถูกต้อง
- **SELFPAY** เป็น Payor default (Rank 2) ทุก visit
- **ภาษา** (Thai/English) ที่เลือกส่งผลต่อเอกสารผู้ป่วย
- **DOB Unknown** — สามารถระบุช่วงอายุแทนวันเกิดที่แน่นอนได้
- **Multi-department visit** — เปิดหลายแผนกในวันเดียวกันได้ (กดปุ่ม +)
