---
title: OPD Patient Flow
type: workflow
sources: ["3.MEDHIS_Manual_OPD V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [workflow, opd, patient-flow]
---

# ขั้นตอนการรับบริการผู้ป่วยนอก (OPD Patient Flow)

ขั้นตอนเต็มตั้งแต่ผู้ป่วยลงทะเบียนจนชำระเงินกลับบ้าน ผ่าน 8 สถานะใน [[OPD]]

## Flow

```
Registration → Arrived → Screening → Consultation → Medical Discharge → Billing → Financial Discharge
```

### 1. Registered
- ผู้ป่วยผ่านการ[[Registration|ลงทะเบียน]] → ชื่อแสดงใน [[OPD Worklist Screen]]

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
- พยาบาลกด **Medical Discharge** → ชื่อส่งไป[[Billing|แผนกการเงิน]]

### 7. Billing In Progress
- การเงินล็อคผู้ป่วย → ออกบิล → ชำระเงิน (ดู [[OP Billing Workflow]])

### 8. Financial Discharge
- ชำระเงินเสร็จ → จำหน่ายผู้ป่วยกลับบ้าน

## Modules Involved

[[Registration]] → [[OPD]] → [[EMR Doctor]] → [[LAB]] / [[XRAY]] → [[Billing]]

กรณี Admit: [[OPD]] → [[Admission]] → [[IPD]]
