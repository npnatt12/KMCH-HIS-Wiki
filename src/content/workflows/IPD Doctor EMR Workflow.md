---
title: IPD Doctor EMR Workflow
type: workflow
sources: ["17.MEDHIS Manual_EMR_Doctor V.2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [workflow, emr, doctor, ipd, progress-notes, discharge]
roles: [Doctor]
verified-on-uat: pending
---

# IPD Doctor EMR Workflow — กระบวนการดูแลผู้ป่วยใน

## Overview

แพทย์เข้าดูผู้ป่วยในจาก [Doctor Worklist](/entities/doctor-worklist-screen/) หรือ [Ward Board](/entities/ward-board/) → เปิด IPD EMR → บันทึก Progress Notes → สั่งคำสั่ง Daily/Continuous → ส่ง Consult (ถ้าต้องการ) → ทำ Discharge เมื่อพร้อม

---

## Steps

### 1. ตรวจสอบรายการผู้ป่วยใน

**วิธีที่ 1 — Doctor Worklist:**
1. OPD → Doctor Worklist → กล่อง **InPatients**
2. ค้นหาจาก Search Patient (ชื่อ/HN)
3. กรอง Only Inservice เพื่อดูเฉพาะผู้ป่วยที่ยังอยู่ในการดูแล

**วิธีที่ 2 — Ward Board:**
1. เมนู IPD → Ward Board → เลือก Ward
2. ดูรายชื่อผู้ป่วยในทั้งหมด

### 2. เข้า IPD EMR

1. จาก Ward Board → คลิกกล่องรายชื่อผู้ป่วย → ระบบแสดง Visit Details
2. กด Icon **View EMR** → เข้าหน้าจอ IPD EMR

### 3. บันทึก Progress Note ประจำวัน

1. หน้าจอ IPD EMR → ส่วน **DAILY PROGRESS** → ช่อง **Progress Notes**
2. กด **+** → ระบบเปิดเมนู Clinical Record
3. บันทึกข้อมูลการตรวจรักษาประจำวัน
4. ข้อมูลแสดงต่อเนื่องกันในหัวข้อ Progress Note

### 4. สั่ง Daily Order

1. ช่อง **Daily** → กด **+**
2. ระบบเปิดเมนู Order (type = Daily)
3. ทำขั้นตอนเหมือน OPD → ดู [Order Entry Module](/modules/order-entry/)
4. ระบุ Password → กด Save

### 5. สั่ง Continuous Order (ยาต่อเนื่อง)

1. ช่อง **Continuous** → กด **+**
2. ระบบเปิดเมนู Order (type = Continuous)
3. เลือกยา → ระบุ Dosage, Route, Frequency
4. ตรวจสอบ **Quantity** (จำนวนจ่ายต่อวัน) และ **Today Dose** (เวลาบริหารยาวันแรก)
5. ระบุ Administration Instruction (ถ้าต้องการ)
6. ระบุ Password → กด Save
7. ระบบส่งยาอัตโนมัติทุกวันจนกว่าจะ Discontinue

### 6. IPD Consult (ส่งปรึกษา — ถ้าต้องการ)

**ผู้ส่ง Consult:**
1. กด Icon **IPD Consult** ใน IPD EMR
2. บันทึก Basic Detail → กด Save
3. บันทึก Consult Detail → กด Close
4. ระบบ Confirm → กด **YES**
5. ระบบส่งข้อมูลไปยัง Nursing Worklist → IPD Consult อัตโนมัติ
6. ข้อมูล Consult แสดงในกล่อง Progress Notes

**ผู้รับ Consult:**
1. Doctor Worklist → กล่อง **Consult / Referrals**
2. คลิก Icon **View EMR** — ดูประวัติผู้ป่วย
3. คลิก Icon **Reply Consult** — บันทึกการรับปรึกษา
4. บันทึกรายละเอียด → กด Close

### 7. บันทึก Discharge Summary

1. IPD EMR → ส่วน **DISCHARGE SUMMARY**
2. เลือก Template ที่ต้องการ
3. บันทึกรายละเอียดสรุปการรักษา
4. กด Save

### 8. กระบวนการ Discharge (4 ขั้นตอน)

#### Step 1 — Discharge Advice (แพทย์)

1. Ward Board → เลือกเตียงผู้ป่วย → Icon **Discharge Plan**
2. บันทึกวันที่/เวลาที่ต้องการให้กลับบ้าน
3. กด Save

#### Step 2 — Discharge Order (แพทย์)

1. กด **View** เพื่อดูรายการที่ต้อง Complete ก่อน Discharge
2. เลือก Icon **Order** หรือ **View EMR** เพื่อดำเนินการ:
   - สั่งยากลับบ้าน (Discharge Medication)
   - ปิด Continuous Order ที่ต้องการหยุด (Discontinue)
   - ตรวจสอบ Discharge Summary
   - ตรวจสอบ Diagnosis ก่อนกลับ
3. รายการที่ทำจบแล้ว → เลือก Checkbox เพื่อแจ้งทีม
4. กด Save

#### Step 3 — Medical Discharge (พยาบาล)

1. พยาบาลคืนยา
2. ตรวจสอบรายการ Close Order ให้แล้วเสร็จ
3. บันทึกข้อมูล Medical Discharge
4. รายชื่อผู้ป่วยส่งไปยังระบบการเงิน ([Billing](/modules/billing/))

#### Step 4 — Final Discharge (พยาบาล)

1. หลังผู้ป่วยชำระเงินและรับยากลับบ้านแล้ว
2. พยาบาลตรวจสอบความถูกต้องขั้นสุดท้าย
3. กด **SAVE**
4. ชื่อผู้ป่วยออกจากหอผู้ป่วย

---

## Discharge Flow Diagram

```
Doctor:
  [Discharge Advice] → [Discharge Order]
                           ↓ (Discharge Medication + Close Orders)
Nurse:
  [Medical Discharge] → [Financial Check] → [Final Discharge]
                              ↓
                        ผู้ป่วยออกจาก Ward
```

---

## Discontinue Continuous Order

เมื่อต้องการหยุดยาต่อเนื่อง:
1. IPD EMR → Tab **CONTINUOUS ORDER**
2. คลิก Stop ที่รายการยาที่ต้องการหยุด
3. ระบุ **End Time** (Default = เวลาปัจจุบัน)
4. กด Confirm
5. ยาแสดง "(Closed)" + สีเทา + ชื่อผู้ที่ Close

---

## Modules Involved

- [EMR Doctor](/modules/emr-doctor/) — IPD EMR, Progress Notes, Discharge Summary
- [IPD](/modules/ipd/) — Ward Board, Nursing Worklist
- [Order Entry](/modules/order-entry/) — Daily/Continuous/Discharge Medication
- [Pharmacy](/modules/pharmacy/) — IP Fill, Med Return
- [Billing](/modules/billing/) — Financial Discharge (Step 3–4)
- [IPD Discharge Process](/workflows/ipd-discharge-process/) — รายละเอียด 4-Step Discharge
