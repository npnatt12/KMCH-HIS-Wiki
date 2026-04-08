---
title: OPD — Outpatient Department Module
type: module
sources: ["3.MEDHIS_Manual_OPD V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
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
