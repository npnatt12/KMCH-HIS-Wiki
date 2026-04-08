---
title: Admission Workflow
type: workflow
sources: ["6.MEDHIS Manual_Admission V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [workflow, admission, inpatient]
---

# ขั้นตอนการรับผู้ป่วยเข้าเป็นผู้ป่วยใน (Admission Workflow)

## วิธี 1: Admit จาก OPD/ER

### แพทย์/พยาบาล (OPD/ER)
1. เปิด EMR → กดปุ่ม Request Admission
2. เลือก Tab **Admission**
3. ระบุ **Ward** + **แพทย์**
4. (Optional) เพิ่ม Pre-Admit Daily Orders / Pre-Admit Continuous Orders
5. กด **Save** → ข้อมูลส่งไปแผนก [[Admission]]

### เจ้าหน้าที่ Admission
6. Inpatient → **Admission List** → Tab **Request List**
7. เลือกผู้ป่วย → กด **Admit**
8. กรอก **Admission Detail**: Careprovider, [[Payor and Treatment Rights|Payor]], Episode, Medico Legal, Referral, **Bed Selection**, Visit Detail
9. กด **Save** → ผู้ป่วยแสดงใน Admission List

### พยาบาล Ward
10. [[Ward Board]] → เลือกผู้ป่วย → กด **Arrive** → YES
11. เริ่มดูแลผู้ป่วยในสถานะผู้ป่วยใน

## วิธี 2: Direct Admission

1. Inpatient → **Admission** → Search Patient → **Select**
2. กรอก Admission Detail (เหมือนขั้นตอน 8)
3. Save → Arrive

## Cancel Admission

- **เงื่อนไข**: ก่อนกด Arrive เท่านั้น
- Admission List → **Cancel Admission** → ระบุเหตุผล → SAVE
- เตียง → [[Bed Status|Vacant Bed]] ทันที

## Modules Involved

[[OPD]] / [[ER]] → [[Admission]] → [[IPD]] ([[Ward Board]])
