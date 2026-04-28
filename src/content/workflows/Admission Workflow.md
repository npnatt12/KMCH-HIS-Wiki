---
title: Admission Workflow
type: workflow
sources: ["6.MEDHIS Manual_Admission V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [workflow, admission, inpatient]
roles: [NurseIPD, AdminSystem]
verified-on-uat: pending
---

# ขั้นตอนการรับผู้ป่วยเข้าเป็นผู้ป่วยใน (Admission Workflow)

## Overview

กระบวนการรับผู้ป่วยเข้าเป็นผู้ป่วยใน 2 วิธี ตั้งแต่ส่งคำร้อง Admit จนผู้ป่วยมาถึง Ward และกด Arrive

## วิธี 1: Admit จาก OPD/ER (Request Admission)

### แพทย์/พยาบาล (OPD/ER)
1. เปิด OPD EMR → กดปุ่ม **Request Admission**
2. เลือก Tab **Admission**
3. ระบุ **Ward** ที่ต้องการ Admit
4. ระบุ **แพทย์** ที่สั่ง Admit
5. (Optional) กด **Add** ใต้ **Pre-Admit Daily Orders** → เพิ่ม Daily Orders ล่วงหน้า
6. (Optional) กด **Add** ใต้ **Pre-Admit Continuous Orders** → เพิ่ม Continuous Orders ล่วงหน้า
7. กด **Save** → ข้อมูลส่งไปแผนก [[Admission]]

### เจ้าหน้าที่ Admission
8. Inpatient → **Admission List** → Tab **Request List**
9. เลือกผู้ป่วย → กด **Admit** (หรือกด **Cancel** หากต้องการยกเลิก)
10. กรอก **[[Admission Detail Screen]]**: ครบ 7 Sections:
    - **Careprovider Detail**: แผนก + แพทย์เจ้าของไข้ + Comment จาก OPD
    - **[[Payor and Treatment Rights|Payor Detail]]**: สิทธิ์ Admit
    - **Episode Detail**: การรักษาต่อเนื่อง
    - **Medico Legal Case**: กรณีเคสคดี
    - **Referral Details**: กรณีผู้ป่วย Refer เข้า
    - **Bed Selection**: เลือกเตียงว่างตามชนิด
    - **Visit Detail**: Isolation/Transfer Mode/Revisit/Pregnant/Breast Feeding
11. กด **Save** → ผู้ป่วยแสดงใน Admission List

### พยาบาล Ward
12. [[Ward Board]] → เลือกผู้ป่วย → กด **Arrive**
13. ระบบแสดงกล่อง Confirm → กด **YES**
14. สัญลักษณ์ Arrive หายไป → เริ่มดูแลผู้ป่วยในสถานะผู้ป่วยใน

## วิธี 2: Direct Admission (ไม่ผ่าน OPD/ER)

สำหรับผู้ป่วยนัดเข้า Admit หรือ Admit โดยตรงโดยไม่ผ่านการลงทะเบียน OPD/ER

1. Inpatient → **Admission**
2. ค้นหาผู้ป่วยในช่อง **Search Patient**
3. กดเลือกกล่องผู้ป่วย → กด **SELECT**
4. กรอก **[[Admission Detail Screen]]** (เหมือนขั้นตอน 10)
5. กด **Save** → กด **Arrive** ที่ Ward Board

## Cancel Admission

- **เงื่อนไข**: ใช้ได้เฉพาะก่อนเจ้าหน้าที่ Ward กด **Arrive** เท่านั้น
- Inpatient → **Admission List** → เลือกผู้ป่วย → กด Icon **Cancel Admission**
- ระบบแสดง dialog "Cancel IPD Admission" → ระบุเหตุผล → กด **SAVE**
- เตียงกลายเป็น [[Bed Status|Vacant Bed]] (สีเขียว) ทันที
- **สิทธิ์**: จำกัดเฉพาะบางตำแหน่งเท่านั้น

## Flow Diagram

```
OPD/ER EMR → Request Admission → Admission List (Request List) → Admit → Admission Detail → Save
                                                                                                 ↓
Direct: Search Patient → Select → Admission Detail → Save
                                                      ↓
                                              Ward Board → Arrive → YES → ผู้ป่วยใน
```

## Modules Involved

[[OPD]] / [[ER]] → [[Admission]] → [[IPD]] ([[Ward Board]])
