---
title: EMR Doctor Module
type: module
sources: ["17.MEDHIS Manual_EMR_Doctor V.2.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [module, emr, doctor, clinical, opd, ipd]
---

# EMR Doctor — ระบบบันทึกเวชระเบียนอิเล็กทรอนิกส์ (Doctor Interface)

## Purpose

บันทึกการตรวจรักษาของแพทย์ทั้ง OPD และ IPD — ครอบคลุมการบันทึกประวัติ ตรวจร่างกาย วินิจฉัย สั่งการรักษา consult refer และ discharge

## Access

เมนูหลัก: **OPD → Doctor Worklist**

## Doctor Worklist (Dashboard)

แสดง 10 กล่องข้อมูล:

| # | Box | Description |
|---|-----|-------------|
| 1 | OutPatients | รายชื่อผู้ป่วยนอกที่รอตรวจ |
| 2 | Medicine Reject | ใบสั่งยาที่ถูก [[Pharmacy|เภสัชกร]] ตีกลับ |
| 3 | Appointments | นัดหมายของแพทย์ |
| 4 | InPatients | ผู้ป่วยในที่ดูแล |
| 5 | Consult/Referrals | คำขอ consult/refer ที่ได้รับ |
| 6 | Cosign/Approval | รายการรออนุมัติ/ลงนามร่วม |
| 7 | Statistics | สถิติการตรวจ |
| 8 | Doctor Fee | ค่าตอบแทนแพทย์ |
| 9 | Lab Reports | ผลตรวจ [[LAB|ห้องปฏิบัติการ]] |
| 10 | Radiology Reports | ผลตรวจ [[XRAY|รังสีวิทยา]] |

## OPD EMR Screen

ประกอบด้วย 4 ส่วนหลัก:

| Section | Description |
|---------|-------------|
| Patient Banner | แถบข้อมูลผู้ป่วย (HN, ชื่อ, อายุ, สิทธิ, แพ้ยา) |
| EMR Record | ส่วนบันทึกข้อมูลทางคลินิก |
| Summary View | สรุปข้อมูลการตรวจ |
| Menu Function | เมนูฟังก์ชันเพิ่มเติม |

### EMR Record Sections (11 ส่วน)

| # | Section | Description |
|---|---------|-------------|
| 1 | Chief Complaints | อาการสำคัญ |
| 2 | Present Illness | ประวัติการเจ็บป่วยปัจจุบัน |
| 3 | Past History | ประวัติการเจ็บป่วยในอดีต |
| 4 | Family History | ประวัติครอบครัว |
| 5 | Personal History | ประวัติส่วนตัว |
| 6 | Examination | การตรวจร่างกาย |
| 7 | Doctor Notes | บันทึกแพทย์ |
| 8 | Diagnosis | การวินิจฉัย |
| 9 | ICD-10 | รหัสโรค |
| 10 | Procedure | หัตถการ |
| 11 | ICD-9 | รหัสหัตถการ |

### Input Methods (8+ วิธีป้อนข้อมูล)

แต่ละ section มีไอคอนสำหรับวิธีป้อนข้อมูลต่างๆ:

| Method | Description |
|--------|-------------|
| Free Text | พิมพ์ข้อความอิสระ |
| Previous Data | ดึงข้อมูลจากครั้งก่อน |
| Search | ค้นหาจาก database |
| Ticksheet | เลือกจากรายการ checkbox |
| Favourite (Ticksheet / Note) | รายการที่บันทึกไว้ใช้บ่อย |
| Note | บันทึกเพิ่มเติม |
| Annotation | วาดบน body diagram |
| Form | แบบฟอร์มเฉพาะ |
| Audit | ดูประวัติการแก้ไข |

### Vital Signs (สัญญาณชีพ)

แสดงได้ 3 รูปแบบ:

| View | Description |
|------|-------------|
| Tabular Chart | ตารางตัวเลข |
| TPR Chart | กราฟ Temperature/Pulse/Respiration |
| Charting | กราฟแสดงแนวโน้ม |

## OPD Features

### Medical Certificate

พิมพ์ใบรับรองแพทย์ได้จากหน้าจอ EMR

### Appointment

สร้างนัดหมาย พร้อมค้นหาช่วงเวลาว่าง:
- **Duration** — ระยะเวลา
- **Period** — ช่วงเวลา
- **Time** — เวลาที่ต้องการ

### Follow Up

สร้าง **Task Order** ส่งให้พยาบาลดำเนินการ

### OPD Consult

ส่ง consult ไปยังแพทย์เฉพาะทาง/แผนกอื่น

### Request Admission

ขอ Admit ผู้ป่วยเข้า [[IPD]]:
- สร้าง **Pre-Admit Orders** (คำสั่งการรักษาล่วงหน้า) ได้พร้อมกัน
- เชื่อมกับ [[Admission|ระบบรับผู้ป่วยใน]]

### Referral Out

ส่งต่อผู้ป่วยไปยังโรงพยาบาลอื่น

## IPD EMR

### Daily Progress

บันทึกความก้าวหน้าประจำวันสำหรับผู้ป่วยใน:
- **Daily Order** — คำสั่งรายวัน (ผ่าน [[Order Entry]])
- **Continuous Order** — คำสั่งต่อเนื่อง (ผ่าน [[Order Entry]])
- **Progress Notes** — บันทึกความก้าวหน้า

### IPD Consult

- **ส่ง Consult** — ส่งขอ consult แพทย์เฉพาะทาง
- **รับ Consult** — แพทย์ได้รับคำขอผ่าน **Consult/Referrals** ใน Doctor Worklist

### Discharge Summary

แบบฟอร์ม template สำหรับบันทึกสรุปการรักษาตอนจำหน่าย

### Summary / Lab / Radiology / Pathology

หน้าจอดูผลสรุปต่างๆ:
- **Summary** — สรุปข้อมูลการรักษา
- **Lab** — ผลตรวจ [[LAB|ห้องปฏิบัติการ]]
- **Radiology** — ผลตรวจ [[XRAY|รังสีวิทยา]]
- **Pathology** — ผลตรวจพยาธิวิทยา

### 4-Step Discharge

| Step | Action | ผู้รับผิดชอบ |
|------|--------|-------------|
| 1 | Medical Discharge (สั่ง Discharge) | แพทย์ |
| 2 | Discharge Summary (บันทึกสรุป) | แพทย์ |
| 3 | Billing / Financial Discharge | การเงิน / [[Billing]] |
| 4 | Physical Discharge (ส่งผู้ป่วยกลับ) | พยาบาล / [[IPD]] |

แพทย์รับผิดชอบ **Step 1-2** (Medical Discharge + Discharge Summary)

## Integration Points

| Module | Integration |
|--------|-------------|
| [[OPD]] | รายชื่อผู้ป่วย (OutPatients box) |
| [[IPD]] | Ward Board (InPatients box), Physical Discharge |
| [[LAB]] | ผลตรวจ Lab Reports |
| [[XRAY]] | ผลตรวจ Radiology Reports |
| [[Pharmacy]] | Medicine Reject, Drug Alerts |
| [[Order Entry]] | CPOE — สั่งการรักษาทุกประเภท |
| [[Billing]] | Financial Discharge (Step 3) |
| [[Admission]] | Request Admission, Pre-Admit Orders |
