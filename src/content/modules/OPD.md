---
title: OPD — Outpatient Department Module
type: module
sources: ["3.MEDHIS_Manual_OPD V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [module, opd, outpatient]
---

# OPD — ระบบงานผู้ป่วยนอก (Outpatient Department)

## Purpose

ระบบจัดการผู้ป่วยนอกตั้งแต่ลงทะเบียนจนจำหน่าย ครอบคลุมการคัดกรอง บันทึก Vital Signs ดูคำสั่งแพทย์ นัดหมาย พิมพ์เอกสาร และติดตามสถานะ

## Access

เมนูหลัก: **OPD → OPD Worklist**

## Key Screens

### [[OPD Worklist Screen]]

หน้าจอการทำงานหลัก แสดงรายชื่อผู้ป่วย จัดกลุ่มได้ตาม:
- **None** — เรียงตามเวลาลงทะเบียน (ascending/descending)
- **Status** — จัดตาม [[OPD Patient Status]]
- **Care provider** — จัดตามรายชื่อแพทย์

### Visit Detail Panel

แสดงเมื่อ click ชื่อผู้ป่วย ประกอบด้วย: Order Details, Appointments, Patient Tracking, Tasks, Consults

## [[OPD Patient Status|Patient Status Flow]] (8 สถานะ)

| # | Status | Description | Color |
|---|--------|-------------|-------|
| 1 | Registered | ลงทะเบียนรับการตรวจ | — |
| 2 | Arrived | รับผู้ป่วยเข้าแผนก | — |
| 3 | Screening Completed | คัดกรองเบื้องต้นเสร็จ → ส่งชื่อไปหน้าแพทย์ | — |
| 4 | Consultation Started | เริ่มตรวจ | เขียว |
| 5 | Consultation Completed | ตรวจเสร็จ | เหลือง |
| 6 | Medical Discharge | จำหน่าย → ส่งการเงิน | — |
| 7 | Billing In Progress | อยู่ในขั้นตอนชำระเงิน | — |
| 8 | Financial Discharge | ชำระเงินเสร็จ → กลับบ้าน | — |

## Key Workflows

### 1. Patient Screening (คัดกรอง)
- เลือกผู้ป่วย REGISTERED → เปลี่ยนเป็น **Arrived**
- **Charting** → Vital Sign Chart → Save → แสดงใน EMR Observation + [[Patient Banner]]
- **Assign Careprovider** — กรณียังไม่ระบุแพทย์
- เปลี่ยนเป็น **Screening Completed** → ชื่อไปแสดงที่หน้าแพทย์

### 2. Order Review (ตรวจสอบคำสั่งแพทย์)
- ดูจาก Visit Detail → **Order Details** (ยา, Lab, X-ray ฯลฯ)
- **Tasks** → Execute Order (Ordered → Executed)
- Follow up tasks → ทำนัดหมายให้ผู้ป่วย

### 3. Lab Specimen Collection
- เมนู Laboratory → Specimen Collection → NEW
- Filter: Department, Ward, Careprovider, Patient, Order No., Date, Status
- Sort: Lab No. / Name / Order Date
- **Print Sticker** → **Collect Specimen** → ยืนยัน → Status: Ordered → Specimen Collected
- Batch collection: เลือกหลายรายการพร้อมกัน

### 4. Consults (ส่งปรึกษา)
- ดูจาก Visit Detail → Consults
- แผนกรับ Consult: OPD Worklist → Tab **REFERRALS** → Check-in patient (YES)
- กรณีตรวจไม่ได้วันนั้น → ทำ Appointment

### 5. Referral Out
- แพทย์บันทึก Referral → เอกสารพิมพ์ออกมา
- เจ้าหน้าที่ตรวจสอบจาก Visit Details

### 6. Appointment (นัดหมาย)
- **วิธี 1:** OPD → Appointments → เลือก Department/Careprovider → เลือกวันเวลา → Book → SAVE → Print
- **วิธี 2 (Day View):** ดูตารางหลายคลินิก/แพทย์พร้อมกัน → เลือกช่องเวลา (สีฟ้า = มีนัดแล้ว)
- Future Orders + Tasks สั่งล่วงหน้าได้

### 7. Documents
- **Print Document**: OPD Worklist → เลือกผู้ป่วย → Print Documents → เลือกเอกสาร → Print
- **Form (MEDHIS Centrix)**: ช่องสีเหลืองกรอกข้อมูล → History แสดงเอกสารเก่า → Download PDF / Print

### 8. Medical Discharge
- OPD Worklist → เลือกผู้ป่วย → **Medical Discharge**
- ชื่อผู้ป่วยส่งไป[[Billing|แผนกการเงิน]]ทันที

### 9. Alerts
- EMR → Alerts → NEW → เลือก Type → พิมพ์ข้อความ → SAVE
- แสดงสัญลักษณ์ที่ประวัติผู้ป่วย

### 10. EMR View
Summary, Current Visit, Timeline, Medicine, Vaccines Chart, Laboratory, Radiology, Pathology, Doctor Fee, Procedure

### 11. Reports
Reporting → Standard Reports → เลือกแผนก → เลือกรายงาน → ช่วงวันที่ → พิมพ์

## Screen Fields — OPD Worklist Filter / Visit Detail

### Visit Detail Panel — Tabs
| Tab | Content |
|-----|---------|
| Order Details | รายการ orders ทั้งหมด (ยา, Lab, X-ray, Task ฯลฯ) |
| Appointments | วันนัดที่แพทย์ทำไว้ + พิมพ์ Appointment Slip |
| Tasks | คำสั่งที่ต้องรับ Execute (Status: Ordered → Executed) |
| Consults | ส่งปรึกษาแผนกอื่น |
| Patient Tracking | Timeline สถานะทั้งหมด เรียงตามวัน-เวลา + ผู้บันทึก |

### Patient Tracking — คอลัมน์ที่แสดง
| Column | Description |
|--------|-------------|
| วันที่ / เวลา | เวลาที่เปลี่ยนสถานะ |
| Status | สถานะ ณ เวลานั้น |
| ผู้บันทึก | User ที่กดเปลี่ยน |

## Button Actions

| Button / Icon | หน้าจอ | Action | เงื่อนไข | ผลลัพธ์ |
|---------------|--------|--------|-----------|---------|
| Status change | OPD Worklist | เปลี่ยน Status | เลือกผู้ป่วยก่อน | Status อัปเดทในรายการ |
| Arrived | Visit Detail | Registered → Arrived | ผู้ป่วยต้องอยู่ใน Registered | Status = Arrived |
| Screening Completed | Visit Detail | ส่งชื่อไปหน้าแพทย์ | ต้องระบุ Careprovider ก่อน | Status = Screening Completed, ชื่อแสดงหน้าแพทย์ |
| Charting | Visit Detail | เปิดหน้าบันทึก Vital Signs | — | บันทึก Vital Sign Chart |
| Assign Careprovider | Visit Detail | ระบุแพทย์ผู้ตรวจ | กรณียังไม่มีแพทย์ | แพทย์ถูกผูกกับ Visit |
| Execute Order | Visit Detail → Tasks | รับคำสั่ง Tasks | Status ต้อง Ordered | Status เปลี่ยนเป็น Executed |
| Appointment | Visit Detail | เปิดตารางนัด | — | สร้างนัดหมาย |
| Print Documents | Visit Detail | เปิดรายการเอกสาร Standard | — | เลือกเอกสาร → Print |
| Form | Visit Detail | เปิด MEDHIS Centrix Form | — | กรอกข้อมูล → Download PDF / Print |
| View EMR | Visit Detail | เปิด EMR ผู้ป่วย | — | หน้า EMR 9 หัวข้อ |
| Medical Discharge | Visit Detail | จำหน่ายผู้ป่วย | ทำทุก orders เสร็จแล้ว | ชื่อส่งไปการเงินทันที |
| Collect Specimen | Lab Specimen Screen | บันทึกการเก็บสิ่งส่งตรวจ | เลือกรายการ Lab แล้ว | Status: Ordered → Specimen Collected |
| Print Sticker | Lab Specimen Screen | พิมพ์ Lab Label | — | ออก Lab Label sticker |

## Lab Specimen Collection — Field Details

| Field | Type | Description |
|-------|------|-------------|
| Department | Dropdown | กรองตามแผนก |
| Ward | Dropdown | กรองตาม Ward |
| Careprovider | Text search | กรองตามแพทย์ผู้สั่ง |
| Patient | Text search | ค้นหาผู้ป่วย |
| Encounter Type | Dropdown | OPD / IPD |
| Order No. | Text | ค้นหาตาม Order Number |
| Date From–To | Date range | ช่วงวันที่สั่ง |
| Status | Dropdown | กรองตาม Order status |

**Sort Options:** Lab No. / Name (ชื่อผู้ป่วย) / Order Date

**Tabs:** TO COLLECT (รอเก็บ) / COLLECTED (เก็บแล้ว)

**Batch Mode:** เลือกทีละหลายรายการโดย Checkbox → Print Sticker batch / Collect Specimen batch → ยืนยัน → อัปเดทพร้อมกัน

## Appointment — Field Details

### Book Appointment (วิธี 1 — เมนูหลัก)
| Field | Description |
|-------|-------------|
| Department | แผนกที่ต้องการนัด |
| Care provider | แพทย์ผู้ตรวจ |
| Date | เลือกจากปฏิทิน |
| Time slot | Click เลือกช่องเวลา |
| Patient Name / HN | ค้นหาผู้ป่วย |
| Referral Details | รายละเอียดการส่งปรึกษา (ถ้ามี) |
| Future Order | สั่งคำสั่งล่วงหน้า |
| Task | บันทึก Task ล่วงหน้า |

**หลัง Save:** ระบบแสดง Print Preview → Print บัตรนัด (Appointment Slip)

### Day View (วิธี 2 — หลายคลินิก/แพทย์)
- ระบุ Department หลายแห่ง + Careprovider หลายท่านพร้อมกัน
- ช่องสีฟ้า = มีนัดแล้ว (ไม่สามารถนัดซ้ำในช่องนั้น)
- เลือกช่องเวลาที่ว่าง → เปิด Book Appointment form เหมือน วิธี 1

## Documents — MEDHIS Centrix Form

| Element | Description |
|---------|-------------|
| ช่องสีเหลือง | ช่องกรอกข้อมูลที่ต้องการให้แสดงบนเอกสาร |
| History | จำนวนเอกสารที่เคยบันทึกไว้ก่อนหน้า → Click ดูรายละเอียด / Download / Print |
| Download PDF | ดาวน์โหลดเอกสารเป็น PDF |
| Print | พิมพ์เอกสารออกเครื่องพิมพ์ |

## EMR View — 9 หัวข้อ

| หัวข้อ | รายละเอียด |
|--------|------------|
| Summary | ประวัติการรักษาเรียงตามวัน-เวลา |
| Current Visit | เลือกดู Visit ใดก็ได้ (แสดงจำนวน Visit ทั้งหมด) |
| Time Line | ประวัติการรักษาแบบ timeline |
| Medicine | รายการยา |
| Vaccines Chart | ประวัติการรับวัคซีน |
| Laboratory | ผลตรวจทางห้องปฏิบัติการ |
| Radiology | ผลตรวจทางรังสีวิทยา |
| Pathology | ผลตรวจทาง Pathology |
| Doctor Fee | ค่าตรวจทั่วไปและปรึกษาแพทย์ |
| Procedure | ประวัติการทำหัตถการ |

## Alerts — ขั้นตอนและ Fields

| Field | Type | Description |
|-------|------|-------------|
| Type | Dropdown | ประเภทของการแจ้งเตือน |
| Messages | Text (Required) | ข้อความแจ้งเตือน |

**Access Path:** OPD Worklist → ผู้ป่วย → View EMR → Alerts → NEW → กรอก → SAVE
**ผลลัพธ์:** แสดงสัญลักษณ์แจ้งเตือนที่ประวัติผู้ป่วย

## Reports — ขั้นตอน

1. เมนู **Reporting → Standard Reports**
2. เลือก **แผนก** (Department)
3. เลือก **รายงาน** ที่ต้องการ
4. ระบุ **ช่วงวันที่-เวลา**
5. กด Search → แสดงข้อมูล → Print

## Consults — ขั้นตอนการรับ Consult

1. แพทย์สั่ง Consult → แสดงใน Visit Details → Consults
2. ประสานงาน/ส่งเวรไปยังแผนกรับ Consult
3. แผนกรับ: **OPD → OPD Worklist → Tab REFERRALS**
4. Click ชื่อผู้ป่วย → Click รับเป็นผู้ป่วย → Confirm "YES" (Check-in this patient)
5. กรณีตรวจไม่ได้วันนั้น → Click Appointment → นัดหมาย

## Referral Out — ขั้นตอน

1. แพทย์บันทึก: **Referral → Referral Out** → บันทึก → ระบบพิมพ์เอกสารออกมา
2. เจ้าหน้าที่ตรวจสอบจาก **Visit Details** ว่ามี order ส่งต่อ
3. เตรียมเอกสาร + ผู้ป่วยไปยังโรงพยาบาลปลายทาง

## Permissions

| Action | ผู้ดำเนินการ | หมายเหตุ |
|--------|-------------|---------|
| Arrived / Screening Completed | พยาบาล / เจ้าหน้าที่ OPD | — |
| Charting Vital Signs | พยาบาล / เจ้าหน้าที่ | — |
| Assign Careprovider | พยาบาล / เจ้าหน้าที่ | — |
| Execute Order (Tasks) | ผู้รับผิดชอบงานนั้นๆ | ตามแผนกที่ได้รับ Task |
| Medical Discharge | พยาบาล / เจ้าหน้าที่ OPD | — |
| Collect Specimen | พยาบาล / เจ้าหน้าที่ Lab | จากเมนู Laboratory |
| Book Appointment | พยาบาล / เจ้าหน้าที่ | — |
| Print Documents / Form | พยาบาล / เจ้าหน้าที่ | — |
| Report (ดู/พิมพ์) | เจ้าหน้าที่ / ผู้จัดการ | ผ่าน Reporting menu |

## Error / Edge Cases

- **ยังไม่ระบุแพทย์**: ต้อง Assign Careprovider ก่อนกด Screening Completed มิฉะนั้นชื่อผู้ป่วยจะไม่ปรากฏในหน้าแพทย์ที่ถูกต้อง
- **Tasks ยัง Ordered อยู่**: ควร Execute ให้ครบก่อน Medical Discharge เพื่อความชัดเจนในการสื่อสาร
- **ช่องเวลาสีฟ้า (Day View)**: มีนัดแล้ว ต้องเลือกช่องว่างอื่น
- **Follow-up Tasks**: ต้องทำ Appointment ด้วย ไม่ใช่แค่ Execute Order
- **Batch Specimen Collection**: ยืนยัน (Confirm) ก่อน batch collect — ไม่สามารถยกเลิกย้อนหลังได้
- **Medical Discharge**: เมื่อกดแล้วชื่อผู้ป่วยส่งการเงินทันที — ควรตรวจสอบ orders ให้ครบก่อน

## Integration Points

| Module | Integration |
|--------|-------------|
| [[Registration]] | ผู้ป่วยมาจากการลงทะเบียน, Appointments tab |
| [[ER]] | ผู้ป่วย ER ส่งต่อ |
| [[Billing]] | Medical Discharge → OP Cashier Worklist |
| [[LAB]] | Specimen Collection, Lab results |
| [[XRAY]] | Radiology results |
| [[EMR Doctor]] | แพทย์ใช้ EMR สั่ง orders |
| [[Admission]] | Request Admission จาก OPD |
