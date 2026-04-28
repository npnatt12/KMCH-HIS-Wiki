---
title: EMR Doctor Module
type: module
sources: ["17.MEDHIS Manual_EMR_Doctor V.2.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [module, emr, doctor, clinical, opd, ipd]
verified-on-uat: pending
---

# EMR Doctor — ระบบบันทึกเวชระเบียนอิเล็กทรอนิกส์ (Doctor Interface)

## Purpose

บันทึกการตรวจรักษาของแพทย์ทั้ง OPD และ IPD — ครอบคลุมการบันทึกประวัติ ตรวจร่างกาย วินิจฉัย สั่งการรักษา consult refer และ discharge

## Access

เมนูหลัก: **OPD → Doctor Worklist**

---

## Doctor Worklist (Dashboard)

Doctor Worklist Screen แสดง 10 กล่องข้อมูล ทันทีที่ Login:

| # | Box | คำอธิบาย | หมายเหตุ |
|---|-----|----------|---------|
| 1 | OutPatients | รายชื่อผู้ป่วยนอกและจำนวนทั้งหมดที่รอตรวจ | อัปเดทแบบ Real-time |
| 2 | Medicine Reject | รายชื่อผู้ป่วยที่เภสัชกรปฎิเสธการจ่ายยา เพื่อให้แพทย์ Review | เชื่อมกับ [Med Reject](/modules/pharmacy/) |
| 3 | Appointments | จำนวนผู้ป่วยนัดหมายของแพทย์ที่ Login | |
| 4 | InPatients | จำนวนผู้ป่วยในที่แพทย์ Login เป็นเจ้าของไข้ | เชื่อมกับ [Ward Board](/modules/ipd/) |
| 5 | Consult / Referrals | จำนวนผู้ป่วยที่มีการส่ง Consult มาที่แพทย์ Login | |
| 6 | Cosign / Approval | จำนวนรายการรับคำสั่งที่รอ Co-Sign หรือ Approval — ตัวเลขหายเมื่อ Co-Sign แล้ว | |
| 7 | Statistics | สถิติจำนวนผู้ป่วยและค่า DF ที่แพทย์ตรวจ | |
| 8 | Doctor Fee | ข้อมูล DF ของแพทย์ที่ Login | |
| 9 | Lab Reports | ผลตรวจ [Lab](/modules/lab/) ของผู้ป่วยที่แพทย์ Login เป็นผู้สั่ง | |
| 10 | Radiology Reports | ผลตรวจ [Radiology](/modules/xray/) ของผู้ป่วยที่แพทย์ Login เป็นผู้สั่ง | |

### OPD Patient Status (8 สถานะ)

ผู้ป่วยนอกผ่านสถานะตามลำดับ:

| # | Status | คำอธิบาย |
|---|--------|---------|
| 1 | Registered | ลงทะเบียนแล้ว |
| 2 | Arrived | เช็คอินที่แผนกแล้ว |
| 3 | Screening Completed | คัดกรองแล้ว |
| 4 | Consultation Started | เริ่มพบแพทย์ — ระบบบันทึกเวลา START |
| 5 | Consultation Completed | พบแพทย์เสร็จแล้ว |
| 6 | Medical Discharge | แพทย์อนุมัติกลับ |
| 7 | Billing Inprogress | กำลังชำระเงิน |
| 8 | Financial Discharge | ชำระเงินเสร็จแล้ว |

### OutPatients Box — ข้อมูลที่แสดง

| Field | Description |
|-------|-------------|
| Search MRN or Name | ค้นหาผู้ป่วยจาก HN หรือชื่อ |
| Status | กรอง Status ของผู้ป่วยได้ |
| Date | เลือกวันที่ดูข้อมูลผู้ป่วย |
| Triage Level Icon | แสดง Triage Level |
| Lab Icon | แสดงว่าผู้ป่วยมีการสั่ง Lab |
| X-ray Icon | แสดงว่าผู้ป่วยมีการสั่ง X-ray |

### InPatients Box — ข้อมูลที่แสดง

| Field | Description |
|-------|-------------|
| Search Patient | ค้นหาจากชื่อหรือ HN |
| Search Final D/C | ค้นหาผู้ป่วยที่ Financial Discharge แล้ว |
| Only Inservice | แสดงเฉพาะผู้ป่วยที่ยังอยู่ในการดูแล |
| D/C Start date / D/C End date | ค้นหาตามวันที่ทำ Discharge (ย้อนหลังได้ไม่เกิน 31 วัน) |

---

## OPD EMR Screen

EMR Form Screen ประกอบด้วย 4 ส่วนหลัก:

| Section | Description |
|---------|-------------|
| Patient Banner | แถบข้อมูลผู้ป่วย (HN, ชื่อ, อายุ, สิทธิ, แพ้ยา) + link เริ่มตรวจ, PACS, เอกสาร, Vital Signs ล่าสุด |
| EMR Record | ส่วนบันทึกข้อมูลทางคลินิก — 11 sections |
| Summary View | สรุปข้อมูลการตรวจ Visit ปัจจุบัน หรือเลือกดูประวัติเก่าได้ |
| Menu Function | เมนูฟังก์ชันเพิ่มเติม (Appointment, Consult, Refer ฯลฯ) |

### การเข้าสู่ OPD EMR

วิธีที่ 1: จาก Doctor Worklist → คลิก Patient Name ในกล่อง OutPatients
วิธีที่ 2: จาก OPD Worklist → คลิก Icon "View EMR"
- ระบบจะแสดง Popup บันทึกเวลาเริ่มพบแพทย์ 'Consultation' → Click **START**
- สถานะเปลี่ยนเป็น **Consultation Started** อัตโนมัติ

---

## EMR Record Sections (11 ส่วน)

กด **+** หรือคลิกที่แถบชื่อเมนู เพื่อขยายกล่องข้อมูลที่ต้องการบันทึก

### 1. Chief Complaints (อาการแรกรับ)

| Icon | Method | คำอธิบาย |
|------|--------|---------|
| Free Text | พิมพ์ข้อความ | บันทึกข้อมูลโดยการพิมพ์ข้อความที่ต้องการ |
| Previous Data | ดึงข้อมูลเก่า | เลือก copy ข้อมูลจาก Visit เก่าที่ต้องการ |
| Search | ค้นหา | พิมพ์ค้นหา CC จากข้อมูลมาตรฐานของโรงพยาบาล |
| Ticksheet | เลือกรายการ | เลือกตัวเลือกจากข้อมูลมาตรฐานของโรงพยาบาล |
| Favourite Ticksheet | รายการโปรด | บันทึก CC ที่ใช้บ่อยได้เอง (Add ไว้ล่วงหน้า) |
| Favourite Note | Note โปรด | บันทึก Note CC ที่ใช้บ่อย (Save As Favourite) |
| Note | ข้อความสำเร็จรูป | เลือกข้อมูลแบบข้อความสำเร็จรูปที่โรงพยาบาลกำหนด |
| Audit | ดูประวัติ | ดูข้อมูลการบันทึกและการแก้ไขต่างๆ |

### 2. Present Illness (อาการปัจจุบัน)

| Icon | Method | คำอธิบาย |
|------|--------|---------|
| Free Text | พิมพ์ข้อความ | บันทึกอาการปัจจุบัน |
| Previous Data | ดึงข้อมูลเก่า | copy จาก Visit เก่า แล้วกด Repeat |
| Favourite Note | Note โปรด | บันทึก Note ที่ใช้บ่อย |
| Note | ข้อความสำเร็จรูป | เลือกข้อความสำเร็จรูปโรงพยาบาล |
| Audit | ดูประวัติ | ดูประวัติการบันทึกและแก้ไข |

### 3. Past History (ประวัติโรคประจำตัว)

| Icon | Method | คำอธิบาย |
|------|--------|---------|
| Free Text | พิมพ์ข้อความ | บันทึกประวัติโรคประจำตัว |
| Previous Data | ดึงข้อมูลเก่า | copy จาก Visit เก่า แล้วกด Repeat |
| Ticksheet | เลือกรายการ | เลือกจากข้อมูลมาตรฐาน |
| Favourite Note | Note โปรด | บันทึก Note ที่ใช้บ่อย |
| Note | ข้อความสำเร็จรูป | ข้อความสำเร็จรูปโรงพยาบาล |
| Audit | ดูประวัติ | ดูประวัติการบันทึกและแก้ไข |

### 4. Family History (ประวัติครอบครัว)

| Icon | Method | คำอธิบาย |
|------|--------|---------|
| Free Text | พิมพ์ข้อความ | บันทึกประวัติโรคในครอบครัว |
| Previous Data | ดึงข้อมูลเก่า | copy จาก Visit เก่า แล้วกด Repeat |
| Ticksheet | เลือกรายการ | เลือกจากข้อมูลมาตรฐาน |
| Favourite Note | Note โปรด | บันทึก Note ที่ใช้บ่อย |
| Note | ข้อความสำเร็จรูป | ข้อความสำเร็จรูปโรงพยาบาล |
| Audit | ดูประวัติ | ดูประวัติการบันทึกและแก้ไข |

### 5. Personal History (ประวัติส่วนตัว)

บันทึก Alcohol, Drug, Smoking

| Icon | Method | คำอธิบาย |
|------|--------|---------|
| Free Text | พิมพ์ข้อความ | บันทึกประวัติส่วนตัว |
| Previous Data | ดึงข้อมูลเก่า | copy จาก Visit เก่า แล้วกด Repeat |
| Ticksheet | เลือกรายการ | ประกอบด้วย Alcohol, Drug, Smoking |
| Favourite Note | Note โปรด | บันทึก Note ที่ใช้บ่อย |
| Note | ข้อความสำเร็จรูป | ข้อความสำเร็จรูปโรงพยาบาล |
| Audit | ดูประวัติ | ดูประวัติการบันทึกและแก้ไข |

### 6. Examination (การตรวจร่างกาย)

| Icon | Method | คำอธิบาย |
|------|--------|---------|
| Free Text | พิมพ์ข้อความ | บันทึกผลตรวจร่างกาย |
| Previous Data | ดึงข้อมูลเก่า | copy จาก Visit เก่า แล้วกด Repeat |
| Favourite Note | Note โปรด | เลือกจากหัวข้อฝั่งซ้าย หรือบันทึก Note ที่ใช้บ่อยเพิ่มได้เอง |
| Note | ข้อความสำเร็จรูป | ข้อความสำเร็จรูปโรงพยาบาล |
| Annotation | วาดบน Body Diagram | เลือกการบันทึกภาพเพื่ออ้างอิงข้อมูลการตรวจรักษา |
| Form | แบบฟอร์มสำเร็จรูป | เลือกเอกสารสำเร็จรูปของโรงพยาบาลที่ต้องการบันทึก |
| Audit | ดูประวัติ | ดูประวัติการบันทึกและแก้ไข |

### 7. Doctor Notes (บันทึกเพิ่มเติม)

| Icon | Method | คำอธิบาย |
|------|--------|---------|
| Free Text | พิมพ์ข้อความ | บันทึกข้อมูลเพิ่มเติมในการรักษา |
| Previous Data | ดึงข้อมูลเก่า | copy จาก Visit เก่า แล้วกด Repeat |
| Favourite Note | Note โปรด | เลือกจากหัวข้อฝั่งซ้าย หรือบันทึก Note ที่ใช้บ่อยเพิ่มได้เอง |
| Note | ข้อความสำเร็จรูป | ข้อความสำเร็จรูปโรงพยาบาล |

### 8. Diagnosis (การวินิจฉัย)

| Icon | Method | คำอธิบาย |
|------|--------|---------|
| Free Text | พิมพ์ข้อความ | ระบุ Diagnosis เอง |
| Previous Data | ดึงข้อมูลเก่า | copy จาก Visit เก่า แล้วกด Repeat |
| Search | ค้นหา | ค้นหา Diagnosis จากข้อมูลมาตรฐานโรงพยาบาล |
| Ticksheet | เลือกรายการ | เลือกจากข้อมูลมาตรฐาน |
| Favourite Ticksheet | รายการโปรด | บันทึก Diagnosis ที่ใช้บ่อยได้เอง |

### 9. ICD-10 (รหัสโรค ICD-10)

| Icon | Method | คำอธิบาย |
|------|--------|---------|
| Previous Data | ดึงข้อมูลเก่า | copy จาก Visit เก่า แล้วกด Repeat |
| Search | ค้นหา | พิมพ์ค้นหา ICD code — ระบุชื่อหรือ code ก็ได้ |
| Ticksheet | เลือกรายการ | เลือกจากข้อมูลมาตรฐาน |
| Favourite Ticksheet | รายการโปรด | บันทึก ICD-10 ที่ใช้บ่อยได้เอง |

### 10. Procedure (หัตถการ)

| Icon | Method | คำอธิบาย |
|------|--------|---------|
| Free Text | พิมพ์ข้อความ | ระบุ Procedure เอง |
| Previous Data | ดึงข้อมูลเก่า | copy จาก Visit เก่า แล้วกด Repeat |
| Search | ค้นหา | ค้นหา Procedure จากข้อมูลมาตรฐาน |
| Ticksheet | เลือกรายการ | เลือกจากข้อมูลมาตรฐาน |
| Favourite Ticksheet | รายการโปรด | บันทึก Procedure ที่ใช้บ่อยได้เอง |
| Audit | ดูประวัติ | ดูประวัติการบันทึกและแก้ไข |

### 11. ICD-9 (รหัสหัตถการ ICD-9)

| Icon | Method | คำอธิบาย |
|------|--------|---------|
| Previous Data | ดึงข้อมูลเก่า | copy จาก Visit เก่า แล้วกด Repeat |
| Search | ค้นหา | ค้นหา Procedure code จากข้อมูลมาตรฐาน |
| Ticksheet | เลือกรายการ | เลือกจากข้อมูลมาตรฐาน |
| Favourite Ticksheet | รายการโปรด | บันทึก ICD-9 ที่ใช้บ่อยได้เอง |
| Audit | ดูประวัติ | ดูประวัติการบันทึกและแก้ไข |

---

## Input Methods สรุป (8 วิธี)

| Method | Icon | ใช้ได้กับ Section | คำอธิบาย |
|--------|------|-----------------|---------|
| Free Text | ✎ | ส่วนใหญ่ทุก section | พิมพ์ข้อความอิสระ |
| Previous Data | ◁ | ทุก section | ดึงข้อมูลจาก Visit ก่อนหน้า |
| Search | 🔍 | CC, Diagnosis, ICD-10, Procedure, ICD-9 | ค้นหาจาก database มาตรฐาน |
| Ticksheet | ☑ | CC, Past/Family/Personal History, Diagnosis, Procedure | เลือกจาก checkbox list |
| Favourite Ticksheet | ★☑ | CC, Diagnosis, Procedure, ICD-9/10 | รายการ Ticksheet โปรดที่กำหนดเอง |
| Favourite Note | ★✎ | ทุก section | Note text โปรดที่บันทึกไว้ล่วงหน้า |
| Annotation | 🖼 | Examination | วาดหรือ mark บน Body Diagram |
| Form | 📋 | Examination | แบบฟอร์มเฉพาะทางที่โรงพยาบาลกำหนด |
| Note | 📝 | ทุก section | ข้อความสำเร็จรูป (Hospital-defined templates) |
| Audit | 🕐 | ทุก section | ดูประวัติการบันทึกและแก้ไข |

---

## Vital Signs (สัญญาณชีพ)

แสดงได้ 3 ตำแหน่งบนหน้าจอ EMR:
1. **Patient Banner** — ค่า V/S ล่าสุด
2. **Visit Summary** — สรุป V/S ของ Visit
3. **Menu Charting** — ดูประวัติ Chart

| View | คำอธิบาย |
|------|---------|
| TABULAR CHART | แสดงค่าในรูปแบบตาราง |
| TPR CHART | กราฟ Temperature / Pulse / Respiration / BP |
| CHARTING | ผู้ใช้เลือกเองว่าต้องการดูกราฟของค่าใด |

การบันทึก Vital Signs เพิ่มเติม:
- กด Icon เพื่อบันทึก → เลือก Chart → ลงข้อมูล V/S → กด Save
- หรือกด **+** ใน Tab TABULAR CHART เพื่อบันทึกเพิ่มเติม

---

## Summary View — ดูประวัติการรักษา

| Icon | ชื่อ | คำอธิบาย |
|------|-----|---------|
| Current Visit | เลือก Visit | แสดงตัวเลขทั้งหมดของ Visit ที่ผู้ป่วยเคยเข้ารับการรักษา |
| Time Line | ไทม์ไลน์ | ดูประวัติการรักษาแบบช่วงเวลา |
| Medicine | Drug Profile | ดูรายการยาทั้งหมดที่เคยสั่งในระบบ |
| Vaccines Chart | วัคซีน | ดูประวัติการได้รับวัคซีน |
| Laboratory | Lab | ดูผลการตรวจ [ห้องปฏิบัติการ](/modules/lab/) |
| Radiology | Radiology | ดูผลตรวจ [รังสีวิทยา](/modules/xray/) |
| Pathology | Pathology | ดูผลตรวจ Pathology |
| Doctor Fee | DF | ดูข้อมูล Doctor Fee ของแพทย์ Login |
| Procedure | หัตถการ | ดูประวัติการทำหัตถการ |
| OR Schedule | นัดผ่าตัด | ดูประวัติการจองผ่าตัด |

---

## OPD Features

### Medical Certificate (ใบรับรองแพทย์)

1. อยู่ในหน้าจอ OPD EMR
2. EMR Menu ด้านขวา → เลือกเมนูใบรับรองแพทย์
3. เลือกประเภท Template ที่ต้องการ
4. บันทึกรายละเอียด
5. **Print** — พิมพ์ใบรับรองแพทย์
6. **Finalize** — จัดเก็บในระบบ (ไม่สามารถแก้ไขอีก) หรือ **Save** — บันทึก Draft

### Appointment (นัดหมาย)

#### วิธีที่ 1: แพทย์ทำนัดเอง

1. หน้าจอ EMR View → Icon Appointment
2. ระบุ Duration (จำนวนวัน), Period (วัน/เดือน/สัปดาห์), Time (เวลา)
3. กด **Search** เพื่อค้นหาตารางว่าง
4. เลือก Checkbox ตารางที่ต้องการ
5. กด **Book Appointment**

#### วิธีที่ 2: สั่งคำสั่งล่วงหน้าพร้อมนัด (Future Order)

1. เปิดหน้าจอนัดหมาย → แถว Future เลื่อน Toggle เป็น Add
2. เลือก Tab menu "Future Order"
3. ระบุรายการ Order ที่ต้องการสั่งล่วงหน้า
4. กด **Order** → รายการจะรวมในหน้า Order Detail
5. กด **SAVE**

#### วิธีที่ 3: แพทย์สั่ง Task ให้พยาบาลทำนัด

1. บันทึกคำสั่งการรักษา 'Follow Up' ในเมนู Task Order
2. ระบบแสดงหน้า Tasks → กด **+** สร้าง Task
3. Search Task ตามประเภท → ระบุรายละเอียด
4. สามารถแนบรูป/ไฟล์ได้
5. กด Save

### Consultation Completed (จบการรักษา)

1. หน้าจอ EMR View → กด Icon **END** บน Patient Banner
2. ระบบแสดง Popup: "ต้องการบันทึกสิ้นสุดการรักษา?"
3. กด **END** → สถานะเปลี่ยนเป็น **Consultation Completed**
4. ระบบแสดงหน้า OPD Patient List โดยอัตโนมัติ

### OPD Consult (ส่งปรึกษา)

1. หน้าจอ EMR View → เมนู Referrals → Tab **Consult**
2. ระบุ **Consult to Department** (หน่วยงานปลายทาง)
3. ระบุ Consult to Careprovider (ถ้าต้องการ)
4. เพิ่ม Comments ที่เกี่ยวข้อง
5. กด **Add** เพื่อเพิ่มคลินิกหลายแห่ง (ถ้าต้องการ)
6. กด **Save** → ระบบส่งรายชื่อผู้ป่วยไปยังหน่วยงานปลายทางอัตโนมัติ
7. ระบบส่ง OPD Consult รายละเอียดไปยัง Orders Detail (Nursing) อัตโนมัติ

### Request Admission (ขอ Admit)

1. หน้าจอ EMR View → เมนู Referrals → Tab **ADMISSION**
2. ระบุ Ward ที่ต้องการ Admit
3. ระบบแสดงชื่อแพทย์ Login เป็นเจ้าของไข้อัตโนมัติ (เปลี่ยนได้)
4. ระบุ Comment เพิ่มเติม (ถ้าต้องการ)
5. เพิ่ม **Pre-Admit Orders**: กด Add แยกเป็น
   - Pre-Admit Daily Orders
   - Pre-Admit Continuous Orders
6. กด **Save** → ระบบส่งรายชื่อผู้ป่วยไป Admission List อัตโนมัติ
7. แพทย์ยังสามารถ Add Task Order สื่อสารกับ Ward ได้จาก OPD EMR (2 เมนู)

### Referral Out (ส่งต่อนอกโรงพยาบาล)

1. หน้าจอ EMR View → เมนู Referrals → Tab **Referral Out**
2. บันทึกรายละเอียดที่เกี่ยวข้อง
3. กด **Save** → ระบบแสดงเอกสารใบส่งตัวอัตโนมัติ
4. แพทย์ออกเอกสารการส่งตัวจากเมนูรายงาน

---

## IPD EMR

### การเข้าสู่ IPD EMR

วิธีที่ 1: Doctor Worklist → กล่อง InPatients → เลือกผู้ป่วย
วิธีที่ 2: เมนู IPD → Ward Board → คลิกกล่องรายชื่อผู้ป่วย → Icon **View EMR**

### IPD EMR Screen — ส่วนประกอบ

| ส่วน | ชื่อ | คำอธิบาย |
|-----|-----|---------|
| DAILY PROGRESS | ข้อมูลหลัก | คำสั่งการรักษาและ Progress Note |
| Daily | Daily Order | กด + เพื่อเพิ่ม Order รายวัน → เปิดเมนู Order (type = Daily) |
| Continuous | Continuous Order | กด + เพื่อเพิ่ม Order ต่อเนื่อง → เปิดเมนู Order (type = Continuous) |
| Progress Notes | Progress Note | กด + เพื่อเพิ่ม Progress Note → เปิดเมนู Clinical Record |
| IPD Consult | ส่งปรึกษา IP | ส่ง/รับ Consult ผู้ป่วยใน |
| DISCHARGE SUMMARY | สรุปการรักษา | บันทึกข้อมูล Discharge ผ่าน Template |
| SUMMARY | ข้อมูลสรุป | ข้อมูลการตรวจรักษาผู้ป่วย |
| LABORATORY | ผล Lab | ผลตรวจ [ห้องปฏิบัติการ](/modules/lab/) |
| RADIOLOGY | ผล Xray | ผลตรวจ [รังสีวิทยา](/modules/xray/) |
| PATHOLOGY | ผล Pathology | ผลตรวจ Pathology |

### Progress Notes

- บันทึกประจำวันสำหรับผู้ป่วยใน
- ข้อมูลที่บันทึกจากหน้า IPD EMR จะแสดงต่อเนื่องกันในหัวข้อ **Progress Note**
- Continuous Order: สั่งยาได้โดยไม่ต้องระบุ Duration — ระบบส่งยาอัตโนมัติทุกวันจนกว่าแพทย์จะหยุด

### IPD Consult Workflow

**ผู้ส่ง Consult:**
1. กด Icon "IPD Consult"
2. บันทึก Basic Detail → กด Save
3. บันทึกรายละเอียด Consult Detail → กด Close
4. ระบบแสดง Confirm → กด YES
5. ระบบแสดงข้อมูล Consult ในกล่อง Progress Notes
6. ระบบส่งข้อมูลไปยังพยาบาล (Nursing Worklist → IPD Consult) อัตโนมัติ

**ผู้รับ Consult:**
1. เห็นรายชื่อผู้ป่วยใน Doctor Worklist → กล่อง **Consult / Referrals**
2. เลือก Icon "View EMR" เพื่อดูประวัติ
3. เลือก Icon "Reply Consult" เพื่อบันทึกการรับ Consult
4. บันทึกข้อมูล → กด Close

### Discharge Summary

- บันทึกผ่าน **DISCHARGE SUMMARY** section ใน IPD EMR
- ใช้ Template สำหรับบันทึกสรุปการรักษาตอนจำหน่าย

---

## 4-Step Discharge Process

| Step | ชื่อ | ผู้รับผิดชอบ | รายละเอียด |
|------|-----|-------------|---------|
| 1 | Discharge Advice | แพทย์ | วางแผนวันที่/เวลาที่ต้องการให้ผู้ป่วยกลับบ้าน |
| 2 | Discharge Order | แพทย์ | ตรวจสอบคำสั่งกลับบ้าน, Discharge Summary, การวินิจฉัยโรคก่อนกลับ; สั่งยา Discharge Medication; ปิด Order ที่ต้องการหยุด |
| 3 | Medical Discharge | พยาบาล | คืนยา + ตรวจสอบ Close Order; บันทึก Medical Discharge; รายชื่อผู้ป่วยส่งไประบบการเงิน |
| 4 | Final Discharge | พยาบาล | ตรวจสอบความถูกต้องขั้นสุดท้าย; กด SAVE; ชื่อผู้ป่วยออกจากหอผู้ป่วย |

**แพทย์รับผิดชอบ Step 1–2**, **พยาบาลรับผิดชอบ Step 3–4**

หลัง Step 2: รายการที่ทำจบแล้ว → เลือก Checkbox เพื่อแจ้งทีมว่าพร้อม Discharge

---

## Button Actions

| Button | Action | เงื่อนไข | ผลลัพธ์ |
|--------|--------|----------|--------|
| START (Consultation) | เริ่มพบแพทย์ | Popup เมื่อเข้า EMR | สถานะ → Consultation Started |
| END (Consultation) | จบพบแพทย์ | ต้องบันทึกข้อมูลก่อน | สถานะ → Consultation Completed |
| Book Appointment | สร้างนัด | เลือก Time Slot แล้ว | บันทึกนัดหมาย |
| Save (Medical Certificate) | บันทึก Draft | — | บันทึกเป็น Draft |
| Finalize (Medical Certificate) | จัดเก็บถาวร | — | ไม่สามารถแก้ไขอีก |
| Add (OPD Consult) | เพิ่มแผนก | — | เพิ่มคลินิกปลายทาง |
| Save (Consult) | บันทึก Consult | ระบุ Department แล้ว | ส่ง Consult อัตโนมัติ |
| Save (Admission) | บันทึก Admit | ระบุ Ward แล้ว | ส่งไป Admission List |
| Reply Consult | ตอบ Consult | รับ Consult แล้ว | บันทึกการรับปรึกษา |

---

## Permissions

| Action | Role | หมายเหตุ |
|--------|------|---------|
| เข้า Doctor Worklist | แพทย์ (Doctor) | ระบบ Default: แสดงเฉพาะผู้ป่วยของแพทย์ที่ Login |
| บันทึก OPD/IPD EMR | แพทย์ | ต้องเป็นแพทย์เจ้าของไข้หรือแพทย์ผู้รับ Consult |
| Co-Sign / Approval | แพทย์ | แพทย์ที่ได้รับ Cosign Request เท่านั้น |
| View EMR (Consult/Referrals) | แพทย์ผู้รับ Consult | เข้าผ่าน Consult / Referrals box |
| สั่ง Order (On behalf of) | เจ้าหน้าที่/พยาบาล | ต้องระบุวิธีรับคำสั่ง: Telephonic/Verbal/Written |
| Discharge Summary | แพทย์ | Step 2 Discharge |
| Medical Discharge (Step 3) | พยาบาล | หลัง Doctor ทำ Step 2 ครบ |
| Final Discharge (Step 4) | พยาบาล | หลัง Medical Discharge เสร็จ |

---

## Error / Edge Cases

- **ลืมกด START**: ระบบบังคับ Popup เวลาเริ่มพบแพทย์ ต้อง Click START ก่อน
- **ดูข้อมูล Visit เก่า**: กด Current Visit icon เลือกวันที่ใน Summary View
- **Continuous Order IPD**: ต้องระบุ End Time ถึงจะหยุดได้ — ถ้าไม่ระบุ ระบบส่งยาทุกวันอัตโนมัติ
- **Finalize Medical Certificate**: เมื่อ Finalize แล้ว ไม่สามารถแก้ไขได้อีก — ใช้ Save เป็น Draft ก่อนถ้าต้องการแก้
- **IPD Consult**: ต้องรอพยาบาล Assign แพทย์ตามเวรก่อน จึงจะปรากฏใน Consult/Referrals ของแพทย์เป้าหมาย
- **ผู้ป่วยในค้นหาย้อนหลัง**: ดูได้สูงสุด 31 วันย้อนหลัง (D/C date filter)
- **ส่ง OPD Consult**: ระบบส่ง Order Detail ไปยัง Nursing Worklist อัตโนมัติ (แพทย์ไม่ต้องแจ้งเอง)

---

## Integration Points

| Module | Integration |
|--------|-------------|
| [OPD](/modules/opd/) | รายชื่อผู้ป่วย (OutPatients box) |
| [IPD](/modules/ipd/) | Ward Board (InPatients box), Physical Discharge |
| [LAB](/modules/lab/) | ผลตรวจ Lab Reports, สั่ง Lab จาก EMR |
| [XRAY](/modules/xray/) | ผลตรวจ Radiology Reports, สั่ง X-ray จาก EMR |
| [Pharmacy](/modules/pharmacy/) | Medicine Reject, Drug Alerts |
| [Order Entry](/modules/order-entry/) | CPOE — สั่งการรักษาทุกประเภท |
| [Billing](/modules/billing/) | Financial Discharge (Step 3) |
| [Admission](/modules/admission/) | Request Admission, Pre-Admit Orders |
