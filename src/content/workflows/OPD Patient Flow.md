---
title: OPD Patient Flow
type: workflow
sources: ["3.MEDHIS_Manual_OPD V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [workflow, opd, patient-flow]
roles: [NurseOPD]
verified-on-uat: pending
---

# ขั้นตอนการรับบริการผู้ป่วยนอก (OPD Patient Flow)

ขั้นตอนเต็มตั้งแต่ผู้ป่วยลงทะเบียนจนชำระเงินกลับบ้าน ผ่าน 8 สถานะใน [OPD](/modules/opd/)

## Flow

```
Registration → Arrived → Screening → Consultation → Medical Discharge → Billing → Financial Discharge
```

### 1. Registered
- ผู้ป่วยผ่านการ[ลงทะเบียน](/modules/registration/) → ชื่อแสดงใน [OPD Worklist Screen](/entities/opd-worklist-screen/)

### 2. Arrived
- พยาบาลกดรับผู้ป่วยเข้าแผนก → เปลี่ยนสถานะ

### 3. Screening Completed
- บันทึก **Vital Signs** (Charting → Vital Sign Chart)
- **Assign Careprovider** ถ้ายังไม่มี
- กด Screening Completed → ชื่อส่งไปหน้าแพทย์

### 4. Consultation Started (สีเขียว)
- แพทย์ click เริ่มตรวจ

### 5. Consultation Completed (สีเหลือง)
- แพทย์ click สิ้นสุดการตรวจ
- พยาบาลตรวจสอบ **Order Details**: ยา, Lab, X-ray, Tasks, Consults
- **Execute Orders** สำหรับ Tasks ที่ได้รับ
- ดำเนินการตาม orders: เก็บ Lab, ส่ง Consult, นัดหมาย

### 6. Medical Discharge
- พยาบาลกด **Medical Discharge** → ชื่อส่งไป[แผนกการเงิน](/modules/billing/)

### 7. Billing In Progress
- การเงินล็อคผู้ป่วย → ออกบิล → ชำระเงิน (ดู [OP Billing Workflow](/workflows/op-billing-workflow/))

### 8. Financial Discharge
- ชำระเงินเสร็จ → จำหน่ายผู้ป่วยกลับบ้าน

## ขั้นตอนละเอียด — Screening (สถานะ 1–3)

### Registered → Arrived
- พยาบาล/เจ้าหน้าที่ Click ผู้ป่วยใน Registered column → Visit Detail
- กด Status change icon → เลือก **Arrived**
- สถานะเปลี่ยนจาก Registered → **Arrived**

### บันทึก Vital Signs
- Click **Charting** icon → หน้า Charting → เลือก **Vital Sign Chart** ใน PANELS
- กรอกค่า Vital Signs → กด **Save**
- ข้อมูลแสดงใน EMR (Observation) + [Patient Banner](/entities/patient-banner/) (ตามที่ตั้งค่า)

### Assign Careprovider (ถ้ายังไม่มีแพทย์)
- Click **Assign Careprovider** icon → พิมพ์ชื่อแพทย์ → ยืนยัน

### Arrived → Screening Completed
- Click Status change icon → เลือก **Screening Completed**
- ชื่อผู้ป่วยย้ายไปแสดงในหน้าการทำงานของแพทย์

## ขั้นตอนละเอียด — Consultation (สถานะ 4–5)

### Consultation Started (สีเขียว)
- แพทย์ Click เริ่มตรวจ → แถบรายชื่อผู้ป่วยเปลี่ยนเป็นสีเขียว

### Consultation Completed (สีเหลือง)
- แพทย์ Click สิ้นสุดการตรวจ → แถบเปลี่ยนเป็นสีเหลือง
- พยาบาล/เจ้าหน้าที่ตรวจสอบ **Order Details** ใน Visit Detail:
  - ยา → แผนก Pharmacy จ่ายยา
  - Lab → เก็บ Specimen (Laboratory → Specimen Collection)
  - X-ray → ส่งทำ Radiology
  - Tasks → Execute Order (Ordered → Executed)
  - Consults → ส่งปรึกษา (REFERRALS tab)
  - Appointments → ตรวจสอบวันนัด / พิมพ์บัตรนัด

## ขั้นตอนละเอียด — Execute Order (Tasks)

1. Visit Detail → **Tasks** → Status = Ordered
2. Click Execute Order icon ด้านหน้ารายการ
3. ระบบแสดงหน้า Tasks → Checkbox เลือกรายการ → Status = Execute Order → **Save**
4. Status เปลี่ยนเป็น **Executed** อัตโนมัติ

**Follow-up Tasks:** ต้องทำ Appointment ด้วย → Click Appointment icon → เลือก Department/Careprovider/วันเวลา

## ขั้นตอนละเอียด — Lab Specimen Collection

1. เมนู **Laboratory → Specimen Collection → NEW**
2. Filter: Department / Ward / Careprovider / Patient / Order No. / Date / Status → **SEARCH**
3. Sort: Lab No. / Name / Order Date
4. เลือกรายการ → **Print Sticker** (พิมพ์ Label)
5. เลือกรายการ → **Collect Specimen** → Confirm → Status: Ordered → **Specimen Collected** (แสดงใน tab COLLECTED)

**Batch:** Select All Checkbox → Print Sticker batch / Collect Specimen batch → Confirm

## ขั้นตอนละเอียด — Consult Workflow

**ฝั่งส่ง:**
1. แพทย์สั่ง Consult → แสดงใน Visit Details → Consults
2. ประสานงานส่งเวรไปแผนกที่รับ Consult

**ฝั่งรับ:**
1. OPD → OPD Worklist → Tab **REFERRALS**
2. Click ชื่อผู้ป่วย → Click รับเป็นผู้ป่วย → Confirm "YES"
3. กรณีตรวจไม่ได้วันนั้น: Click Appointment → นัดหมาย

## ขั้นตอนละเอียด — Appointment

**วิธี 1 (เมนูหลัก):**
1. OPD → Appointments → เลือก Department / Careprovider / Date / Time slot
2. Book Appointment form: ระบุ Patient, Referral Details, Future Order, Task
3. **SAVE** → Print Preview → Print บัตรนัด

**วิธี 2 (Day View — หลายคลินิก):**
1. Appointments → **Day View** → ระบุ Department หลายแห่ง / Careprovider หลายท่าน
2. เลือก Date → Click ช่องเวลา (สีฟ้า = นัดแล้ว / สีขาว = ว่าง)
3. Book Appointment form → SAVE → Print

## ขั้นตอนละเอียด — Medical Discharge (สถานะ 6)

1. OPD Worklist → Click ผู้ป่วย (Status: Consultation Completed)
2. Click Status change icon → เลือก **Medical Discharge**
3. ชื่อผู้ป่วยส่งไป[แผนกการเงิน](/modules/billing/)ทันที

## ขั้นตอนละเอียด — Billing & Financial Discharge (สถานะ 7–8)

- สถานะ 7 **Billing In Progress**: การเงินล็อคผู้ป่วย → ออกบิล → ชำระเงิน (ดู [OP Billing Workflow](/workflows/op-billing-workflow/))
- สถานะ 8 **Financial Discharge**: ชำระเงินเสร็จ → จำหน่ายกลับบ้าน

## Patient Tracking — ตรวจสอบสถานะ

OPD Worklist → Click ผู้ป่วย → Visit Details → **Patient Tracking**

แสดง: วันที่ / เวลา / Status / ผู้บันทึก (เรียงตาม ascending)

## Modules Involved

[Registration](/modules/registration/) → [OPD](/modules/opd/) → [EMR Doctor](/modules/emr-doctor/) → [LAB](/modules/lab/) / [XRAY](/modules/xray/) → [Billing](/modules/billing/)

กรณี Admit: [OPD](/modules/opd/) → [Admission](/modules/admission/) → [IPD](/modules/ipd/)

กรณี Consult: [OPD](/modules/opd/) → [OPD](/modules/opd/) (REFERRALS tab ของแผนกรับ)
