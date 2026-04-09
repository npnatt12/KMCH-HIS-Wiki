---
title: Patient Demographics Screen
type: entity
sources: ["2.MEDHIS Manual_Registration V.2.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [entity, screen, registration, demographics]
---

# Patient Demographics Screen

หน้าจอหลักสำหรับกรอกและแก้ไขข้อมูลผู้ป่วย ใช้ทั้งการลงทะเบียนใหม่และ Modify Demographics

## Purpose

บันทึกและแก้ไขข้อมูล Demographic ของผู้ป่วย รวมถึงข้อมูล Visit, Payor, ญาติ, ความพิการ และอุปกรณ์ในร่างกาย

## Access Path

- [[Registration]] → OP Registration → [[Patient Search Screen]] → New (ผู้ป่วยใหม่)
- [[Registration]] → OP Registration → [[Patient Search Screen]] → Select (ผู้ป่วยเก่า)
- [[OPD]] → OPD Worklist → icon → Modify Demographics
- [[IPD]] → Ward Board → icon → Modify Demographics

---

## Sections (15)

### 1. Patient Picture

| Action | Description |
|--------|-------------|
| Webcam (Camera icon) | กด TAKE PHOTO → ถ่ายภาพ → กด SAVE |
| Upload (Upload icon) | เลือกไฟล์ภาพ → Open → ระบบแสดงรูป |

### 2. Basic Details

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|
| Title | Dropdown/Search | | | คำนำหน้าชื่อ — พิมพ์เพื่อดู List |
| First Name | Text | Yes | | ชื่อจริง |
| Middle Name | Text | | | ชื่อกลาง |
| Last Name | Text | Yes | | นามสกุล |
| Blood Group | Dropdown | | | หมู่เลือด |
| Gender | Dropdown | Yes | | เพศ |
| Date of Birth | Date Picker | | DOB Unknown toggle | วันเดือนปีเกิด |
| DOB Unknown | Checkbox | | | เปิดเมื่อไม่ทราบวันเกิด → ระบุช่วงอายุแทน |
| Mobile | Text | | | หมายเลขโทรศัพท์มือถือ |
| E-Mail | Text | | | อีเมล |
| National ID | Text | | MOD11 — 13 หลัก | เลขบัตรประชาชน; ระบบตรวจสอบ MOD11 |
| Valid Upto | Date | | | วันหมดอายุบัตรประชาชน |
| Patient Notes | Text | | | ข้อความพิเศษแสดงเมื่อลงทะเบียน |
| Patient Type | Dropdown | | | Normal / Foreigner / Staff |
| Type Area | Dropdown | | | รูปแบบการพักอาศัย |

> **National ID Duplicate:** หากใส่เลขบัตรที่มีผู้ป่วยอื่นใช้อยู่ — ระบบแสดงรายการผู้ป่วยที่ใช้เลขเดียวกัน
> **NHSO Check:** กดปุ่มเช็คสิทธิเพื่อตรวจสอบสิทธิ สปสช. → ระบบดึงสิทธิมาให้อัตโนมัติ

### 3. Address Detail

| Field | Type | Description |
|-------|------|-------------|
| Address | Text | บ้านเลขที่ ชื่อหมู่บ้าน อาคาร |
| Area (ตำบล) | Search | พิมพ์ชื่อตำบล → ระบบแสดง list ที่อยู่ให้เลือก |
| Postcode | Text | รหัสไปรษณีย์ → ค้นหาที่อยู่ในไทยได้ |

### 4. Visit Detail

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Department | Search | Yes | แผนกที่เข้ารับการรักษา |
| Careprovider | Search | | ชื่อแพทย์ที่รักษา |
| Visit Type | Dropdown | | ชนิดของการเข้ารับการรักษา |
| Priority | Dropdown | | Normal / Urgent / Emergency |
| Comment | Text | | ข้อความเพิ่มเติม |
| Transfer Mode | Dropdown | | รถนอน / รถพยาบาล / รถเข็น ฯลฯ |
| REVISIT | Checkbox | | เลือกถ้าต้องการระบุว่าเป็นการรักษาต่อเนื่อง |
| Add Dept (+) | Button | | เพิ่มแผนกที่ 2 ขึ้นไปในวันเดียวกัน |

### 5. Payor Details

| Element | Description |
|---------|-------------|
| SELFPAY (Rank 2) | ระบบใส่ SELFPAY เป็น Payor default ทุก Visit อัตโนมัติ |
| Add (+) | เพิ่มสิทธิการรักษาอื่น — ระบุ Payor, Agreement, Payor Office |
| Rank | เรียงลำดับสิทธิที่ระบบพิจารณาก่อน |
| Guarantee Letter | สามารถกำหนด GL ได้ |
| Copy Payor | Copy สิทธิจาก Visit เก่า (เลือก Checkbox) |

### 6. Referral Detail

| Field | Description |
|-------|-------------|
| Referred By | พิมพ์ชื่อโรงพยาบาลที่ส่งผู้ป่วยมา → ระบบแสดงรายการ |

### 7. Episode Detail

| Element | Description |
|---------|-------------|
| New Episode | กรณีเป็นการรักษาครั้งแรก |
| Episode Type | เลือกชนิดของ Episode |
| Select Episode | เลือก Episode เดิม (ผู้ป่วยเก่า) |

### 8. Additional Detail

| Field | Type | Description |
|-------|------|-------------|
| VIP | Toggle + Dropdown | เปิด VIP → เลือก VIP Type → ระบบแสดงสัญลักษณ์บน [[Patient Banner]] |
| Anonymous Patient | Checkbox | ปกปิดชื่อผู้ป่วย → แสดงเป็น **** สำหรับผู้ไม่มีสิทธิ์ |
| Interpreter Reqd | Checkbox | ต้องการล่าม → แสดง "Interpreter Reqd" บน [[Patient Banner]] |
| Nationality | Text/Search | สัญชาติ |
| Religion | Dropdown | ศาสนา |
| Race | Dropdown | เชื้อชาติ |
| Preferred Language | Dropdown | Thai / English — ส่งผลต่อภาษาในเอกสารผู้ป่วย |
| Marital Status | Dropdown | สถานะการแต่งงาน |
| Occupation | Text | อาชีพ |
| House Type | Dropdown | รูปแบบที่พักอาศัย |

### 9. Alias Names

- กด **Add (+)** เพื่อเพิ่ม
- ระบุ **Type** และพิมพ์ชื่ออื่นๆ ของผู้ป่วย

### 10. More Address

- กด **Add (+)** เพื่อเพิ่ม
- เลือก **Type** และบันทึกที่อยู่เพิ่มเติม

### 11. More Contacts

- กด **Add (+)** เพื่อเพิ่ม
- บันทึก Phone, Mobile, E-Mail เพิ่มเติม

### 12. More IDs

- กด **Add (+)** เพื่อเพิ่ม
- เลือก **Type** และพิมพ์หมายเลขบัตรอื่นๆ

### 13. Next of Kin

| Option | Process |
|--------|---------|
| Next of Kin is a Patient | เลือก Type → พิมพ์ HN หรือชื่อ → ค้นหาในระบบ |
| Next of Kin ไม่ใช่ผู้ป่วย | เลือก Type → บันทึกข้อมูลผู้ติดต่อใหม่ |

### 14. Disability

- กด **Add (+)** → เลือกวันที่เริ่ม + ชนิดของความพิการ
- ระบบแสดง Icon ความพิการบน Patient record

### 15. Equipment

- กด **Add (+)** → เลือกชนิดอุปกรณ์ + วันที่
- เช่น กะโหลกปลอม, ตาปลอม ฯลฯ

---

## Key Behaviors

| Feature | Detail |
|---------|--------|
| Mandatory fields | เครื่องหมาย `*` + แถบสีแดง |
| SAVE button | เปลี่ยนเป็นสีฟ้าเมื่อ mandatory ครบ |
| National ID validation | MOD11 — แจ้งเตือนถ้าไม่ถูกต้อง + แสดงผู้ป่วยที่ใช้เลขเดียวกัน |
| DOB Unknown | เลือก checkbox + ระบุช่วงอายุ |
| Language | Thai / English — ส่งผลต่อเอกสารผู้ป่วย |
| Edit lock | ผู้ป่วยเก่าต้องกดปุ่มปลดล็อคก่อนแก้ไข Basic Details |
| Audit Log | ดูประวัติการแก้ไขข้อมูลทุก Visit |
| Stale data alert | ไม่อัปเดทเกิน 6 เดือน → ระบบแสดง Pop-up เตือน |
| Appointment link | ผู้ป่วยนัด — แสดง Link to Appt + สามารถ Unlink from Appointment ได้ |
| SELFPAY auto | ทุก Visit มี SELFPAY เป็น Rank 2 อัตโนมัติ |

---

## Button Actions

| Button | Location | Action | Result |
|--------|----------|--------|--------|
| Unlock (ปลดล็อค) | Basic Details | เปิดการแก้ไข | สามารถแก้ Basic Details ได้ |
| TAKE PHOTO | Patient Picture | ถ่ายจาก Webcam | บันทึกภาพเมื่อกด SAVE |
| SAVE (Photo) | Patient Picture popup | บันทึกภาพ | |
| Add (+) Payor | Payor Details | เพิ่มสิทธิ | เปิดฟอร์มเพิ่มสิทธิ |
| Copy Payor | Payor Details | Copy สิทธิจาก Visit เก่า | แสดง Checkbox สิทธิ |
| เช็คสิทธิ | Basic Details | NHSO Authentication | ดึงสิทธิ สปสช. อัตโนมัติ |
| View Audit Log | Demographics | ดูประวัติแก้ไข | แสดง log ทุก Visit |
| Add Dept (+) | Visit Detail | เพิ่มแผนก | เพิ่มแผนกที่ 2 ในวันเดียวกัน |
| Unlink from Appt | Demographics | ยกเลิก Link นัด | ยกเลิกการเชื่อมต่อกับ Appointment |
| SAVE | Demographics (bottom) | บันทึกทุกข้อมูล | สร้าง/อัปเดทผู้ป่วย + เปิด Visit |

---

## Validation Rules

- National ID: MOD11 algorithm — 13 หลัก ตัวสุดท้ายเป็น check digit
- Duplicate National ID: แสดง warning + list ผู้ป่วยที่ใช้เลขเดียวกัน
- DOB Unknown: ต้องระบุช่วงอายุเมื่อเลือก checkbox
- Preferred Language Thai/English: มีผลต่อภาษาในเอกสาร (ใบนัด, ใบสรุปการรักษา)

---

## Related Workflows

- [[New Patient Registration]] — workflow ผู้ป่วยใหม่
- [[Appointment Registration]] — ผู้ป่วยนัด
- [[Emergency Registration]] — ผู้ป่วยฉุกเฉิน
- [[Registration Update Merge Workflow]] — อัปเดท / แก้ไข Demographics

## Related Entities

- [[Patient Search Screen]] — หน้าจอก่อนหน้า
- [[Patient Banner]] — แสดง VIP / Anonymous / Interpreter flags
