---
title: Emergency Registration Workflow
type: workflow
sources: ["2.MEDHIS Manual_Registration V.2.docx", "4.MEDHIS Manual_ER V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [workflow, registration, emergency]
roles: [NurseOPD, AdminSystem]
verified-on-uat: pending
---

# ขั้นตอนลงทะเบียนผู้ป่วยฉุกเฉิน (Emergency Registration)

การลงทะเบียนผู้ป่วยฉุกเฉินผ่านเมนู Emergency — แบบฟอร์มย่อ ต้องการข้อมูลขั้นต่ำ

## ขั้นตอน

### 1. เปิดหน้าจอ
- เลือกเมนู **Emergency → Emergency Registration**

### 2. เลือกประเภทผู้ป่วย
- **New Patient** (default): เปิดสวิตช์ — กรอกข้อมูลใหม่
- **ผู้ป่วยเก่า**: ปิดสวิตช์ New Patient → ค้นหาจาก Search Patients → Click เลือก

### 3. กรอกข้อมูล

**Basic Details** — Required field ขั้นต่ำ: **First Name** เท่านั้น

**Emergency Detail** — รายละเอียดการนำส่งผู้ป่วยฉุกเฉิน

**Visit Detail** — Department (default: **Emergency**), Required field

### 4. บันทึก
- กด **Save**
- ผู้ป่วยใหม่: ระบบแสดง Popup สร้าง **MRN** (Medical Record Number) อัตโนมัติ
- ผู้ป่วยเก่า: ระบบแสดง Popup ยืนยันการสร้าง Visit

## เปรียบเทียบกับ [New Patient Registration](/workflows/new-patient-registration/)

| | Emergency Registration | New Patient Registration |
|---|---|---|
| Required fields | First Name + Department | ทุก mandatory fields |
| Default Department | Emergency | ไม่มี |
| MRN | สร้างอัตโนมัติ | สร้างอัตโนมัติ |
| ข้อมูลเต็ม | ไม่จำเป็น | จำเป็น |

## หลังลงทะเบียน — ขั้นตอน ER ต่อเนื่อง

เมื่อลงทะเบียนเสร็จแล้ว ผู้ป่วยจะปรากฏใน [Whiteboard](/entities/whiteboard/) → ดำเนินการต่อดังนี้:

### ขั้นตอน Triage
1. [Whiteboard](/entities/whiteboard/) → Click ชื่อผู้ป่วย → Visit Detail → Icon **Triage**
2. กรอก: Triaged By / Chief Complaints / Present Illness / [ESI Level](/concepts/esi-level/) / Glasgow Coma Scale
3. **Save** → Status เปลี่ยนเป็น **Triaged** → สีแสดงที่ Whiteboard

### ขั้นตอน Emergency Discharge
1. Visit Detail → Icon **Emergency Discharge**
2. กรอก: Date / Time / Recommended By / Discharge Type / Discharge Status
3. เลือก Discharge Status:
   - **Discharge** → กลับบ้าน
   - **Death** → บันทึกรายละเอียดการเสียชีวิต
   - **Referred to Admission** → รับ IPD → ส่ง [Admission](/modules/admission/)
   - **Referred to Other Hospital** → เตรียมเอกสาร ส่งตัว
   - **Send to OR** → ส่ง [OR](/modules/or/)
4. **Save** → Status → **Medical Discharge** → เข้า [Billing](/modules/billing/)

## Mass Casualty — ขั้นตอนเพิ่มเติม

1. Emergency → **Mass Casualty**
2. กรอก Incident Details:
   - Incident Date (Default: วันปัจจุบัน)
   - Department (Default: Emergency)
   - Adult/Child: จำนวนแยก Male/Female/Unknown
   - Brought by Next of Kin: ถ้า ON → Escort Name (Required), Mobile, Comment
3. **Save** → Popup แสดงจำนวน → ระบบสร้าง Visit อัตโนมัติ
4. ชื่อผู้ป่วยถูกตั้งอัตโนมัติ: `"Incident Detail Adult/Child_เพศ_ลำดับ"` → แก้ไขชื่อจริงภายหลัง
5. ผู้ป่วยทั้งหมดปรากฏใน [Whiteboard](/entities/whiteboard/) → Triage ทีละราย

## เปรียบเทียบกับ [New Patient Registration](/workflows/new-patient-registration/)

| | Emergency Registration | New Patient Registration |
|---|---|---|
| Required fields | First Name + Department | ทุก mandatory fields |
| Default Department | Emergency | ไม่มี |
| MRN | สร้างอัตโนมัติ | สร้างอัตโนมัติ |
| ข้อมูลเต็ม | ไม่จำเป็น | จำเป็น |

## Related

- [Registration](/modules/registration/) — module page
- [ER](/modules/er/) — Emergency Room module
- [Mass Casualty Registration](/workflows/mass-casualty-registration/) — สำหรับเหตุอุบัติภัยหมู่
- [Whiteboard](/entities/whiteboard/) — รายชื่อผู้ป่วยฉุกเฉินหลังลงทะเบียน
- [ER Triage Screen](/entities/er-triage-screen/) — หน้าจอ Triage
- [ER Discharge Screen](/entities/er-discharge-screen/) — หน้าจอจำหน่าย
