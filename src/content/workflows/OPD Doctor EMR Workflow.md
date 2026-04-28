---
title: OPD Doctor EMR Workflow
type: workflow
sources: ["17.MEDHIS Manual_EMR_Doctor V.2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [workflow, emr, doctor, opd, consultation]
roles: [Doctor]
verified-on-uat: pending
---

# OPD Doctor EMR Workflow — กระบวนการตรวจรักษาผู้ป่วยนอก

## Overview

แพทย์เลือกผู้ป่วยจาก [Doctor Worklist](/entities/doctor-worklist-screen/) → เข้า EMR → บันทึกประวัติ → สั่งการรักษา → จบ Consultation หรือส่ง Consult/Admit

---

## Steps

### 1. ตรวจสอบผู้ป่วยรอตรวจ

1. เข้าเมนู **OPD → Doctor Worklist**
2. ดูกล่อง **OutPatients** — รายชื่อผู้ป่วยที่รอตรวจ
3. ตรวจสอบ:
   - Triage Level Icon
   - Lab Icon (มีคำสั่ง Lab หรือไม่)
   - X-ray Icon (มีคำสั่ง X-ray หรือไม่)
4. ค้นหาผู้ป่วยได้จาก Search MRN or Name

### 2. เริ่มพบแพทย์ (Consultation Started)

1. คลิกชื่อผู้ป่วยใน OutPatients box
2. ระบบแสดง Popup เวลาเริ่มพบแพทย์ → กด **START**
3. สถานะผู้ป่วยเปลี่ยนเป็น **Consultation Started**
4. ระบบเข้าสู่หน้าจอ [OPD EMR](/entities/emr-form-screen/)

### 3. ตรวจสอบประวัติผู้ป่วย

จาก **Summary View** บน OPD EMR:
- ดูประวัติ Visit ปัจจุบัน
- คลิกวันที่เพื่อดูประวัติ Visit ก่อนหน้า
- ดู Drug Profile, Lab, Radiology, Vaccines

### 4. ตรวจสอบ Vital Signs

ดูได้ 3 ตำแหน่ง:
- **Patient Banner** — ค่า V/S ล่าสุด
- **Visit Summary** — สรุป V/S ของ Visit
- **Menu Charting** — เปิดดูกราฟ TABULAR CHART / TPR CHART / CHARTING

### 5. บันทึกการตรวจรักษา

เปิด Section ที่ต้องการใน EMR Record (กด + หรือคลิกชื่อ Section):

| Section | วิธีการบันทึกที่แนะนำ |
|---------|---------------------|
| Chief Complaints | Ticksheet หรือ Search + Free Text |
| Present Illness | Free Text หรือ Favourite Note |
| Past History | Ticksheet (โรคประจำตัว) + Free Text |
| Family History | Ticksheet |
| Personal History | Ticksheet (Alcohol/Drug/Smoking) |
| Examination | Free Text + Annotation (ถ้าต้องการภาพ) |
| Doctor Notes | Free Text หรือ Favourite Note |
| Diagnosis | Search หรือ Ticksheet + Free Text |
| ICD-10 | Search ด้วยรหัส/ชื่อโรค |
| Procedure | Search หรือ Ticksheet |
| ICD-9 | Search ด้วยรหัส/ชื่อหัตถการ |

### 6. สั่งการรักษา (Order)

จาก EMR → เปิด [Order Entry Screen](/entities/order-entry-screen/) (คลิก Order icon หรือ Order menu)

ดูรายละเอียดการสั่ง → [Order Entry Module](/modules/order-entry/)

### 7. ออกใบรับรองแพทย์ (ถ้าต้องการ)

1. EMR Menu ด้านขวา → เลือก Medical Certificate
2. เลือก Template ที่ต้องการ
3. บันทึกรายละเอียด
4. กด **Print** (พิมพ์) หรือ **Save** (Draft) หรือ **Finalize** (ถาวร)

### 8. ทำนัดหมาย (ถ้าต้องการ)

**วิธีที่ 1 — แพทย์ทำนัดเอง:**
1. Icon Appointment → ระบุ Duration/Period/Time
2. กด Search → เลือก Time Slot
3. กด **Book Appointment**

**วิธีที่ 2 — Task ให้พยาบาลทำนัด:**
1. Task Order → Follow Up
2. ระบุรายละเอียด Task

### 9. จบการรักษา หรือส่งต่อ

#### A. Consultation Completed (จบปกติ)

1. กด Icon **END** บน Patient Banner
2. ระบบ Popup → กด **END**
3. สถานะ → **Consultation Completed**

#### B. OPD Consult (ส่งปรึกษา)

1. Referrals menu → Tab **Consult**
2. ระบุ Consult to Department + รายละเอียด
3. กด **Save** → ระบบส่งอัตโนมัติ

#### C. Request Admission (ขอ Admit)

1. Referrals menu → Tab **ADMISSION**
2. ระบุ Ward + แพทย์เจ้าของไข้
3. เพิ่ม Pre-Admit Orders (Daily/Continuous) ถ้าต้องการ
4. กด **Save** → ส่งไป Admission List อัตโนมัติ

#### D. Referral Out (ส่งต่อนอก รพ.)

1. Referrals menu → Tab **Referral Out**
2. บันทึกรายละเอียด → กด **Save**
3. ระบบสร้างใบส่งตัวอัตโนมัติ

---

## Status Transitions

```
Registered
  → Arrived (พยาบาล/เจ้าหน้าที่)
  → Screening Completed (พยาบาล)
  → Consultation Started (แพทย์ กด START)
  → Consultation Completed (แพทย์ กด END)
  → Medical Discharge
  → Billing Inprogress
  → Financial Discharge
```

---

## Modules Involved

- [EMR Doctor](/modules/emr-doctor/) — บันทึก EMR
- [OPD](/modules/opd/) — Worklist, Screening
- [Order Entry](/modules/order-entry/) — CPOE
- [Pharmacy](/modules/pharmacy/) — รับใบสั่งยา
- [LAB](/modules/lab/) — รับคำสั่ง Lab
- [XRAY](/modules/xray/) — รับคำสั่ง Radiology
- [Admission](/modules/admission/) — ขอ Admit
- [Billing](/modules/billing/) — Financial Discharge
