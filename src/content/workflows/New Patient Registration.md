---
title: New Patient Registration Workflow
type: workflow
sources: ["2.MEDHIS Manual_Registration V.2.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [workflow, registration, new-patient]
roles: [AdminSystem]
verified-on-uat: pending
---

# ขั้นตอนลงทะเบียนผู้ป่วยใหม่ (New Patient Registration)

ขั้นตอนการลงทะเบียนผู้ป่วยที่ไม่เคยมีประวัติในระบบ MEDHIS

## ขั้นตอน

### 1. เปิดหน้าจอลงทะเบียน
- เลือกเมนู **Registration → OP Registration**
- ระบบแสดง [Patient Search Screen](/entities/patient-search-screen/)

### 2. ค้นหาผู้ป่วย
- พิมพ์ข้อมูลค้นหา (HN, ชื่อ, นามสกุล, เบอร์โทร, เลขบัตรประชาชน)
- กด **Search**
- ระบบค้นหาไม่พบ → แสดง Error Box → กด OK

### 3. สร้างผู้ป่วยใหม่
- กดปุ่ม **New** เพื่อลงทะเบียนผู้ป่วยใหม่
- ระบบแสดง [Patient Demographics Screen](/entities/patient-demographics-screen/)

### 4. กรอกข้อมูลผู้ป่วย

**Patient Picture** — ถ่ายจาก Webcam (TAKE PHOTO → SAVE) หรือ Upload ไฟล์

**Basic Details** (ข้อมูลส่วนบุคคล)
- Title, First Name, Middle Name, Last Name
- Blood Group, Gender, Date of Birth (หรือ DOB Unknown + ระบุอายุ)
- Mobile, E-Mail
- National ID (ตรวจสอบ MOD11) + Valid Upto
- Patient Notes, [Patient Type](/concepts/patient-types/), Type Area

**Address Detail** — บ้านเลขที่, ค้นหาจากตำบล (Area) หรือรหัสไปรษณีย์ (Postcode)

**[Visit Detail](/concepts/visit-types/)** — Department, Careprovider, Visit Type, Priority (Normal/Urgent/Emergency), Transfer Mode, REVISIT
- กด + เพื่อเพิ่มแผนกอื่นในวันเดียวกัน

**[Payor Details](/concepts/payor-and-treatment-rights/)** — ระบบเพิ่ม SELFPAY (Rank 2) อัตโนมัติ, เพิ่มสิทธิอื่นได้, จัดเรียง Rank

**Referral Detail** — ระบุ Referred By (ชื่อโรงพยาบาลที่ส่งมา)

**Episode Detail** — สร้าง Episode ใหม่ + เลือก Episode Type

**Additional Detail** — VIP, Anonymous, Interpreter, Nationality, Religion, Race, Preferred Language, Marital Status, Occupation, House Type

**Alias Names / More Address / More Contacts / More IDs** — ข้อมูลเพิ่มเติม

**Next of Kin** — ญาติ/ผู้ติดต่อ (เชื่อมกับผู้ป่วยในระบบ หรือกรอกใหม่)

**Disability** — ข้อมูลความพิการ (ชนิด + วันที่เริ่ม)

**Equipment** — อุปกรณ์ในร่างกาย (ชนิด + วันที่)

### 5. บันทึก
- ปุ่ม SAVE เปลี่ยนเป็น**สีฟ้า**เมื่อกรอก mandatory fields ครบ (มีเครื่องหมาย `*` และแถบสีแดง)
- กด **SAVE** เพื่อบันทึก

## Modules Involved

- [Registration](/modules/registration/) — หน้าจอหลัก
- [Billing](/modules/billing/) — Payor Details ส่งต่อ
- สปสช. (NHSO) — ตรวจสอบสิทธิ (optional)
