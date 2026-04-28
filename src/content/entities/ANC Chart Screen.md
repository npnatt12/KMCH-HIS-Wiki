---
title: ANC Chart Screen
type: entity
sources: ["8.MEDHIS Manual_ANC V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [entity, screen, anc]
roles: [Doctor, NurseOPD]
verified-on-uat: pending
---

# ANC Chart Screen

หน้าจอหลักของระบบ [[ANC]] สำหรับบันทึกข้อมูลฝากครรภ์

## Access

[[EMR Doctor|EMR]] menu → ANC → tab **ANC CHART**

## Sections

1. **Current Pregnancy Detail** — Trimester, [[EDC Calculation|EDC]], GA
2. **Delivery History** — ประวัติการคลอดก่อนหน้า (รองรับหลายครั้ง)
3. **Obstetric Summary** — สรุปสูติกรรม (Gravida, Para, Abortions ฯลฯ)
4. **General Appearance** — น้ำหนัก/ส่วนสูงก่อนตั้งครรภ์ + BMI อัตโนมัติ
5. **Father Details** — ข้อมูลบิดา (ต้อง slide เปิด, ใช้ข้อมูลเก่าได้)
6. **Examination Record** — สัญญาณชีพและรายละเอียดการตรวจ
7. **Patient's Medical History** — ประวัติความเจ็บป่วยผู้ป่วย
8. **Father's Medical History** — ประวัติความเจ็บป่วยบิดา
9. **Patient's Outside Lab Panel** — ผลเลือดผู้ป่วยจากภายนอก
10. **Father's Outside Lab Panel** — ผลเลือดบิดาจากภายนอก

## Field Details — Section 1: Current Pregnancy Detail

| Field | Type | Auto-Calc | Description |
|-------|------|-----------|-------------|
| Trimester | Computed | Yes (จาก EDC) | ไตรมาส 1/2/3 |
| EDC Calculation Method | Dropdown | — | LMP / U/S / Manual |
| LMP Date | Date | — | วันแรกรอบเดือนล่าสุด (Required เมื่อ method = LMP) |
| EDC | Date | Yes (LMP method) | วันกำหนดคลอด |
| GA | Computed | Yes (LMP method) | อายุครรภ์ (สัปดาห์ + วัน) |

## Field Details — Section 2: Delivery History (1 ครั้ง)

| Field | Type | Description |
|-------|------|-------------|
| Delivery Date | Date | วันที่คลอด |
| Hospital Name | Text | ชื่อโรงพยาบาล |
| Type of Delivery | Dropdown | ประเภทการคลอด |
| GA | Number | อายุครรภ์ขณะคลอด |
| Delivery Outcome | Dropdown | ผลจากการคลอด |
| Gender | Dropdown | เพศทารก |
| Birth Weight | Number | น้ำหนักแรกคลอด |
| Comments | Text | หมายเหตุ |
| Complication | Text | ภาวะแทรกซ้อน |

## Field Details — Section 3: Obstetric Summary

Gravida, Para, Full term, Premature, Still Birth, No of Live Births, Abortion at GA <12 wks, Abortion at GA >12 wks, Abortions, No of Neonatal Deaths, No of Caesarean, No of Birthweight <2.5 kg, No of Gestation <37 weeks, Post Delivery Last (Year), Labour Type, Pelvic Assessment, Nipple Assessment

## Field Details — Section 4: General Appearance

| Field | Auto-Calc |
|-------|-----------|
| Weight (before pregnant) | — |
| Height | — |
| BMI | Yes — weight/height² |

## Key Buttons

| Button | Action | เงื่อนไข |
|--------|--------|---------|
| **SAVE** | บันทึกข้อมูลทั้งหมด | — |
| **Completed** | ปิด cycle ฝากครรภ์ (ย้ายข้อมูลไป Past ANC Chart) | ฝากครรภ์ครบมาตรฐาน |
| **+** (Delivery History) | เพิ่มแถวประวัติการคลอด | ไม่จำกัดจำนวน |
| **ลบ** (Delivery History) | ลบประวัติการคลอดที่บันทึกผิด | — |
| **Slide toggle** (Father) | เปิด/ซ่อน Father Details | ต้อง slide ก่อนกรอก |

## Validation / Error Conditions

- LMP method: ต้องระบุ LMP date ก่อน — ถ้าไม่ระบุ EDC/GA ไม่คำนวณ
- Father Details: ต้อง slide เปิดก่อนกรอกข้อมูล
- Completed: ไม่สามารถยกเลิกได้หลังกด — ข้อมูลย้ายไป PAST ANC CHART

## Related

- [[ANC]] — module page
- [[ANC Visit Workflow]] — step-by-step workflow
- [[EDC Calculation]] — auto-calculation logic
- [[Labour and Newborn]] — ใช้ข้อมูล Obstetric Summary + EDC
