---
title: Registration Module
type: module
sources: ["2.MEDHIS Manual_Registration V.2.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [module, registration, patient]
verified-on-uat: pending
---

# Registration — ระบบงานลงทะเบียน

## Purpose

ระบบลงทะเบียนผู้ป่วยเป็นจุดเริ่มต้นของทุก visit ในโรงพยาบาล ครอบคลุมการสร้างประวัติผู้ป่วยใหม่ การเปิด visit ผู้ป่วยเก่า การลงทะเบียนฉุกเฉิน อุบัติภัยหมู่ และการตรวจสอบสิทธิการรักษา

## Access

เมนูหลัก: **Registration → OP Registration**

## Key Screens

### [Patient Search Screen](/entities/patient-search-screen/)

หน้าจอค้นหาผู้ป่วย — เป็นหน้าจอแรกเมื่อเข้า OP Registration

### [Patient Demographics Screen](/entities/patient-demographics-screen/)

หน้าจอหลักสำหรับกรอก/แก้ไขข้อมูลผู้ป่วย ประกอบด้วย:

| Section | Description |
|---------|-------------|
| Patient Picture | ถ่ายจาก Webcam หรือ Upload ไฟล์ |
| Basic Details | ชื่อ, นามสกุล, เพศ, วันเกิด, หมู่เลือด, National ID (MOD11), เบอร์โทร, อีเมล |
| Address Detail | ที่อยู่ — ค้นหาจากตำบล/รหัสไปรษณีย์ |
| Visit Detail | Department, Careprovider, Visit Type, Priority, Transfer Mode, REVISIT |
| Payor Details | สิทธิการรักษา, Payor ranking, SELFPAY อัตโนมัติ |
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

### 1. [ผู้ป่วยใหม่](/workflows/new-patient-registration/)

Registration → OP Registration → Patient Search (ไม่พบ) → กด New → กรอก Patient Demographics → SAVE

**ขั้นตอนละเอียด:**
1. เลือกเมนู Registration → OP Registration
2. ระบบแสดง [Patient Search Screen](/entities/patient-search-screen/) — กรอกข้อมูลค้นหา แล้วกด Search
3. หากไม่พบผู้ป่วย ระบบแสดง Error Box → กด OK
4. กดปุ่ม **New** เพื่อสร้างผู้ป่วยใหม่
5. กรอกข้อมูลใน [Patient Demographics Screen](/entities/patient-demographics-screen/) ครบทุก Mandatory Fields
6. กด **SAVE** (ปุ่มเปลี่ยนเป็นสีฟ้าเมื่อ mandatory ครบ)
7. ระบบสร้าง HN (Hospital Number / MRN) อัตโนมัติ

### 2. ผู้ป่วยเก่า

Registration → OP Registration → Patient Search → Select ผู้ป่วย → เลือก NEW VISIT หรือ REVISIT → ตรวจสอบ/แก้ไขข้อมูล → SAVE

**รายละเอียดเพิ่มเติม:**
- ระบบตรวจสอบ Revisit Duration (App Setting) → แสดง Popup ให้เลือก NEW VISIT หรือ REVISIT
- หากผู้ป่วยไม่ได้อัปเดทข้อมูลเกิน 6 เดือน → ระบบแสดง Pop-up แจ้งเตือน
- สามารถ Copy Payor จาก visit เก่าได้โดยกดปุ่ม Copy Payor → เลือก Checkbox ที่ต้องการ
- มี **View Audit Log** สำหรับดูประวัติการแก้ไขของแต่ละ visit
- ต้องกดปุ่มปลดล็อคก่อนแก้ไขข้อมูล Basic Details

### 3. [ผู้ป่วยนัด (Appointment Patient Registration)](/workflows/appointment-registration/)

**วิธีที่ 1:** Registration → OP Registration → Patient Search → Select (ระบบแสดง Appointments) → Patient Demographics (Link to Appt) → SAVE
- ระบบดึง Department และชื่อแพทย์จากข้อมูลนัดหมายโดยอัตโนมัติ
- สามารถ **Unlink from Appointment** ได้ถ้าไม่ต้องการเชื่อมต่อ

**วิธีที่ 2:** [OPD](/modules/opd/) → OPD Worklist → Tab APPOINTMENTS → เลือกรายชื่อผู้ป่วย → กดลงทะเบียน → SAVE

### 4. [ผู้ป่วยฉุกเฉิน (Emergency Patient Registration)](/workflows/emergency-registration/)

Emergency → Emergency Registration → เลือก New Patient / Existing Patient → กรอก Basic Details + Emergency Detail + Visit Detail → SAVE

**รายละเอียด:**
- **New Patient toggle:** เปิดสำหรับผู้ป่วยใหม่ (default), ปิดสำหรับผู้ป่วยเก่า (ค้นหาจาก Search Patients)
- Required Fields ขั้นต่ำ: **First Name** + **Department** (default: Emergency)
- ผู้ป่วยใหม่: ระบบสร้าง MRN (Medical Record Number) อัตโนมัติพร้อม Popup แจ้ง
- ผู้ป่วยเก่า: ระบบสร้าง Visit พร้อม Popup แจ้ง

**Emergency Detail fields:**
- รายละเอียดของการนำส่งผู้ป่วยฉุกเฉิน (ข้อมูลนำส่ง, สภาพผู้ป่วย)

### 5. [อุบัติภัยหมู่ (Mass Casualty)](/workflows/mass-casualty-registration/)

Emergency → Mass Casualty → ระบุ Incident Details + จำนวน Adult/Child แยกเพศ → SAVE

**Fields ของ Mass Casualty:**

| Field | Required | Description |
|-------|----------|-------------|
| Incident Details | | รายละเอียดของอุบัติภัย |
| Adult — Male/Female/Unknown | | จำนวนผู้ป่วยผู้ใหญ่แยกเพศ |
| Child — Male/Female/Unknown | | จำนวนผู้ป่วยเด็กแยกเพศ |
| Department | Yes | default: Emergency |
| Incident Date | | default: วันปัจจุบัน |
| Brought by Next of Kin | | Toggle — เปิดเมื่อนำส่งโดยญาติ |
| Escort Name | Yes (ถ้าเปิด Next of Kin) | ชื่อผู้นำส่ง |
| Escort Mobile Number | | เบอร์ติดต่อผู้นำส่ง |
| Escort Comment | | หมายเหตุจากผู้นำส่ง |

- ระบบสร้างชื่อผู้ป่วยอัตโนมัติ: `"Incident Detail_Adult/Child_เพศ_ลำดับตามจำนวน"`
- รายชื่อผู้ป่วยจำแนกตามเพศตามจำนวนที่ลงทะเบียน

### 6. [Modify Demographics — แก้ไขข้อมูลประวัติผู้ป่วย](/workflows/registration-update-merge-workflow/)

**เข้าถึงได้จาก:**
- Registration → OP Registration → icon บนกล่องรายชื่อผู้ป่วย → Modify Demographics
- [OPD](/modules/opd/) → OPD Worklist → icon → Modify Demographics
- [IPD](/modules/ipd/) → Ward Board → icon → Modify Demographics

**ขั้นตอน:**
1. เลือก icon บนกล่องรายชื่อผู้ป่วย → กด Modify Demographics
2. ระบบแสดงหน้า Modify Demographics
3. กดปุ่มปลดล็อค เพื่ออนุญาตให้แก้ไขข้อมูล
4. แก้ไขข้อมูลตามต้องการ
5. กด Save

> การเข้าถึงข้อมูลผู้ป่วยขึ้นอยู่กับสิทธิ์การเข้าถึงของผู้ใช้งาน

### 7. [ตรวจสอบสิทธิ สปสช. (NSHO Authentication)](/concepts/nhso-authentication/)

Demographics → Basic Details → ระบุเลขบัตรประชาชน → กด **เช็คสิทธิ** → ระบบแสดงรายละเอียดสิทธิ → เลือกสิทธิ → ระบบระบุให้อัตโนมัติ

**ขั้นตอน:**
1. ระบุเลขที่บัตรประชาชนในเมนู Demographics → Basic Details
2. กดปุ่ม **เช็คสิทธิ** (NHSO Authentication)
3. ระบบแสดงรายละเอียดสิทธิการรักษาของผู้ป่วยจาก สปสช.
4. เลือกสิทธิการรักษา → ระบบระบุให้อัตโนมัติ

### 8. Bulk Registration — ลงทะเบียนแบบกลุ่ม

Registration → Bulk Registration → Upload Excel template → Load Excel data → Register → (Appointment / Visit Creation / Order)

**ขั้นตอนละเอียด:**
1. เลือก Registration → Bulk Registration
2. กด **Choose File** เพื่อเลือกไฟล์ Excel Template ของระบบที่กรอกข้อมูลผู้ป่วยเรียบร้อยแล้ว
3. กด **Load Excel data** — ระบบดึงข้อมูลจาก Excel แสดงในระบบ
4. เลือกผู้ป่วยที่ต้องการ → กด **Register** เพื่อ Generate HN
5. ตัวเลือกเพิ่มเติม:
   - **Appointment** — กำหนดนัดหมายสำหรับผู้ป่วย
   - **Visit Creation** — ส่งชื่อเข้ารับบริการตามแผนก
   - **Order** — สร้าง Order ตามที่ระบุในไฟล์ Excel

### 9. Pre-Registration — ลงทะเบียนล่วงหน้า

Registration → Pre-Registration → กรอก Basic Detail + Upload เอกสาร → SAVE

**รายละเอียด:**
- สำหรับลงทะเบียนผู้ป่วยล่วงหน้าก่อนผู้ป่วยมาถึงจริง
- กรอกข้อมูล: ชื่อ, นามสกุล, เพศ, วันเดือนปีเกิด + ข้อมูลอื่นๆ
- รองรับการ Upload เอกสารประกอบได้
- เมื่อบันทึกสำเร็จ ระบบแสดง Popup ยืนยัน

---

## Screen Fields — Patient Demographics Screen

### Basic Details Fields

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|
| Title | Dropdown/Search | | | คำนำหน้าชื่อ — พิมพ์เพื่อค้นหา |
| First Name | Text | Yes | | ชื่อจริงผู้ป่วย |
| Middle Name | Text | | | ชื่อกลาง |
| Last Name | Text | Yes | | นามสกุล |
| Blood Group | Dropdown | | | หมู่เลือด |
| Gender | Dropdown | Yes | | เพศ |
| Date of Birth | Date Picker | | DOB Unknown toggle | วันเดือนปีเกิด / ระบุช่วงอายุหากไม่ทราบ |
| Mobile | Text | | | หมายเลขโทรศัพท์มือถือ |
| E-Mail | Text | | | อีเมล |
| National ID | Text | | MOD11 algorithm | เลขบัตรประชาชน 13 หลัก — ตรวจสอบ MOD11 |
| Valid Upto | Date | | | วันหมดอายุบัตรประชาชน |
| Patient Notes | Text | | | ข้อความพิเศษแสดงในขั้นตอนลงทะเบียน |
| Patient Type | Dropdown | | | Normal / Foreigner / Staff |
| Type Area | Dropdown | | | รูปแบบการพักอาศัย |

### Address Detail Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Address | Text | | บ้านเลขที่ ชื่อหมู่บ้าน อาคาร |
| Area (ตำบล) | Search | | ค้นหาตำบล — ระบบแสดงรายการให้เลือก |
| Postcode | Text | | รหัสไปรษณีย์ — ค้นหาที่อยู่ได้ |

### Visit Detail Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Department | Search | Yes | แผนกที่เข้ารับการรักษา |
| Careprovider | Search | | ชื่อแพทย์ที่รักษา |
| Visit Type | Dropdown | | ชนิดของการเข้ารับการรักษา |
| Priority | Dropdown | | Normal / Urgent / Emergency |
| Comment | Text | | ข้อความเพิ่มเติม |
| Transfer Mode | Dropdown | | รถนอน / รถพยาบาล / รถเข็น ฯลฯ |
| REVISIT | Checkbox | | เลือกถ้าเป็นการรักษาต่อเนื่อง |
| Multi-dept (+) | Button | | เพิ่มแผนกอื่นในวันเดียวกัน |

### Additional Detail Fields

| Field | Type | Description |
|-------|------|-------------|
| VIP | Toggle + Dropdown | เปิด VIP → เลือก VIP Type — แสดงสัญลักษณ์บน [Patient Banner](/entities/patient-banner/) |
| Anonymous Patient | Checkbox | ปกปิดชื่อ — แสดงเป็น **** สำหรับผู้ไม่มีสิทธิ์ |
| Interpreter Reqd | Checkbox | ต้องการล่าม — แสดง "Interpreter Reqd" บน [Patient Banner](/entities/patient-banner/) |
| Nationality | Text/Search | สัญชาติ |
| Religion | Dropdown | ศาสนา |
| Race | Dropdown | เชื้อชาติ |
| Preferred Language | Dropdown | Thai / English — ส่งผลต่อภาษาในเอกสาร |
| Marital Status | Dropdown | สถานะการแต่งงาน |
| Occupation | Text | อาชีพ |
| House Type | Dropdown | รูปแบบที่พักอาศัย |

---

## Button Actions

| Button | Location | Action | Conditions | Result |
|--------|----------|--------|------------|--------|
| Search | Patient Search | ค้นหาผู้ป่วย | มีข้อมูลค้นหา | แสดงรายการผู้ป่วยที่ตรงกัน |
| New | Patient Search | สร้างผู้ป่วยใหม่ | ไม่พบผู้ป่วย | เปิด Patient Demographics ว่าง |
| Select | Patient Search | เลือกผู้ป่วย | พบผู้ป่วย | เปิด Patient Demographics พร้อมข้อมูล |
| NEW VISIT | Popup | เปิด Visit ใหม่ | อยู่ใน Revisit Duration | Visit ใหม่ |
| REVISIT | Popup | เปิด Visit ต่อเนื่อง | อยู่ใน Revisit Duration | Visit เชื่อมต่อกับ Visit เดิม |
| SAVE | Demographics | บันทึกข้อมูล | Mandatory fields ครบ | สร้าง/อัปเดทผู้ป่วย + เปิด Visit |
| Unlock (ปลดล็อค) | Demographics | อนุญาตแก้ไข | ผู้ป่วยเก่า | เปิดให้แก้ Basic Details |
| Add (+) Payor | Payor Details | เพิ่มสิทธิ | | เปิดฟอร์มเพิ่มสิทธิ |
| Copy Payor | Payor Details | Copy สิทธิจาก Visit เก่า | มี Visit เก่า | แสดง Checkbox สิทธิที่เคยมี |
| เช็คสิทธิ | Basic Details | ตรวจสอบสิทธิ สปสช. | มีเลขบัตรประชาชน | แสดงสิทธิจาก NHSO |
| View Audit Log | Demographics | ดูประวัติการแก้ไข | | แสดง Audit log ทุก Visit |
| Add Dept (+) | Visit Detail | เพิ่มแผนก | | เพิ่มแผนกที่ 2 ในวันเดียวกัน |
| Unlink from Appointment | Demographics | ยกเลิกการเชื่อมนัด | ผู้ป่วยนัด | ยกเลิก Link to Appt |
| Register | Bulk Registration | สร้าง HN | เลือกผู้ป่วยแล้ว | Generate HN |
| Load Excel data | Bulk Registration | ดึงข้อมูล Excel | เลือกไฟล์แล้ว | แสดงข้อมูลในระบบ |

---

## Error / Edge Cases

- **ไม่พบผู้ป่วย:** ระบบแสดง Error Box → กด OK → กด New เพื่อลงทะเบียนใหม่
- **National ID ไม่ถูกต้อง (MOD11 fail):** ระบบแสดงข้อความแจ้งเตือน
- **Duplicate National ID:** ระบบแสดงรายการผู้ป่วยที่เคยลงทะเบียนด้วยเลขบัตรเดียวกัน
- **SAVE ไม่ได้:** ปุ่มยังเป็นสีปกติ — ยังกรอก Mandatory Fields ไม่ครบ
- **Stale Data (>6 เดือน):** Popup เตือนให้อัปเดทข้อมูลผู้ป่วยก่อนดำเนินการต่อ
- **Revisit Duration:** ระบบ Popup ถามให้เลือก NEW VISIT / REVISIT หากเข้าเกณฑ์
- **Anonymous Patient:** ผู้ไม่มีสิทธิ์ดูข้อมูลปกปิดจะเห็นชื่อเป็น ****
- **SELFPAY อัตโนมัติ:** ทุก Visit มี SELFPAY เป็น Payor ที่ Rank 2 โดยอัตโนมัติ
- **DOB Unknown:** เลือก checkbox + ระบุช่วงอายุ หากไม่ทราบวันเกิดแน่นอน

---

## Permissions / Role Restrictions

| Action | Restriction | Notes |
|--------|-------------|-------|
| Modify Demographics | ขึ้นอยู่กับสิทธิ์ผู้ใช้งาน | ต้องกดปลดล็อคก่อน |
| Anonymous Patient — ดูชื่อจริง | เฉพาะผู้ใช้ที่มีสิทธิ์ | ผู้ไม่มีสิทธิ์เห็น **** |
| NHSO Authentication | ต้องมีเลขบัตรประชาชน | |
| Bulk Registration | เฉพาะเจ้าหน้าที่ที่มีสิทธิ์ Bulk | |
| Pre-Registration | | สำหรับลงทะเบียนล่วงหน้า |

---

## Integration Points

| Module | Integration |
|--------|-------------|
| [OPD](/modules/opd/) | OPD Worklist → Appointments tab, Modify Demographics |
| [ER](/modules/er/) | Emergency Registration, Mass Casualty |
| [IPD](/modules/ipd/) | Ward Board → Modify Demographics |
| [Billing](/modules/billing/) | Payor Details ส่งต่อระบบ Billing |
| [MRD](/modules/mrd/) | สร้าง OPD Folder อัตโนมัติเมื่อ New Register |
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
- **Revisit Duration** — กำหนดใน App Setting; ระบบ Popup ถามเมื่อ visit ล่าสุดอยู่ในช่วง
- **MRD Auto file request** — กำหนดใน Framework > App Setting > Registration > MRD Auto file request
