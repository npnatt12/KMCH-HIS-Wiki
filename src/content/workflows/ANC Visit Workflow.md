---
title: ANC Visit Workflow
type: workflow
sources: ["8.MEDHIS Manual_ANC V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [workflow, anc, antenatal-care]
roles: [Doctor, NurseOPD]
verified-on-uat: pending
---

# ขั้นตอนการฝากครรภ์ (ANC Visit Workflow)

ขั้นตอนการบันทึกข้อมูลฝากครรภ์ในระบบ [[ANC]] ตั้งแต่เปิดหน้าจอจนบันทึกเสร็จ

## ขั้นตอน

### 1. เปิดหน้าจอ ANC

- เข้า [[EMR Doctor|EMR]] menu ของผู้ป่วย
- Click เมนู **ANC** ด้านขวามือ
- ระบบแสดงหน้าจอ [[ANC Chart Screen|ANC CHART]]

### 2. บันทึก Current Pregnancy Detail

- ระบุ [[EDC Calculation|EDC Calculation Method]] (LMP / U/S / Manual)
- ถ้าเลือก LMP → ระบุ LMP date → ระบบคำนวณ EDC, GA, Trimester อัตโนมัติ

### 3. บันทึก Delivery History (ถ้ามี)

- กดปุ่ม + เพื่อเพิ่มประวัติการคลอดแต่ละครั้ง
- ระบุ: Delivery Date, Hospital, Type of Delivery, GA, Outcome, Gender, Birth Weight, Complication

### 4. บันทึก Obstetric Summary

- กรอกข้อมูล Gravida, Para, Abortions, Still Birth ฯลฯ

### 5. บันทึก General Appearance

- ระบุน้ำหนัก ส่วนสูงก่อนตั้งครรภ์ → BMI คำนวณอัตโนมัติ

### 6. บันทึก Father Details

- Slide ปุ่มเปิดเพื่อแสดงรายละเอียด
- กรอกข้อมูลบิดา (หรือใช้ข้อมูลจากครั้งก่อน)

### 7. บันทึก Examination Record

- ระบุสัญญาณชีพและรายละเอียดการตรวจ

### 8. บันทึก Medical History

- Patient's Medical History
- Father's Medical History

### 9. บันทึก Outside Lab Panel (ถ้ามี)

- ผลเลือดผู้ป่วยจากภายนอก
- ผลเลือดบิดาจากภายนอก

### 10. บันทึก (SAVE)

- กดปุ่ม **SAVE** เพื่อบันทึกข้อมูลทั้งหมด

### 11. ปิด Cycle (เมื่อครบ)

- กรณีฝากครรภ์ครบตามมาตรฐาน → กดปุ่ม **Completed**
- ข้อมูลจะย้ายไป **PAST ANC CHART**

## ขั้นตอนละเอียด — Current Pregnancy Detail

| EDC Method | วิธีใช้ |
|------------|--------|
| **LMP** | ระบุ LMP date → ระบบคำนวณ EDC, GA (สัปดาห์+วัน), Trimester อัตโนมัติ |
| **U/S** | ระบุผล Ultrasound → EDC (manual) |
| **Manual** | ระบุ EDC โดยตรง → Trimester คำนวณอัตโนมัติ |

## ขั้นตอนละเอียด — Delivery History

- กดปุ่ม **+** เพื่อเพิ่มแถวใหม่ (รองรับไม่จำกัดจำนวน)
- กรอก fields ต่อไปนี้สำหรับแต่ละครั้ง:
  - Delivery Date, Hospital Name, Type of Delivery, GA
  - Delivery Outcome, Gender, Birth Weight, Comments, Complication
- กดปุ่ม **ลบ** เพื่อลบรายการที่บันทึกผิด

## ขั้นตอนละเอียด — Obstetric Summary

กรอกข้อมูลครบทุก field:
Gravida, Para, Full term, Premature, Still Birth, No of Live Births,
Abortion at GA <12 wks, Abortion at GA >12 wks, Abortions,
No of Neonatal Deaths, No of Caesarean, No of Birthweight <2.5 kg,
No of Gestation <37 weeks, Post Delivery Last (Year), Labour Type,
Pelvic Assessment, Nipple Assessment

## ขั้นตอนละเอียด — Father Details

1. หา toggle ส่วน Father Details ใน [[ANC Chart Screen]]
2. **Slide ปุ่มเปิดทางขวา** เพื่อแสดง fields บิดา
3. กรอกข้อมูลบิดา (หรือเลือกใช้ข้อมูลจากการฝากครรภ์ครั้งก่อน)

## ขั้นตอนละเอียด — ปิด Cycle (Completed)

ใช้เมื่อ: ฝากครรภ์ครบตามมาตรฐาน (ฝากครรภ์ครั้งสุดท้าย)
1. ตรวจสอบข้อมูลทุก Section ครบถ้วน
2. กดปุ่ม **Completed**
3. ข้อมูล ANC Chart cycle นี้ย้ายไปแสดงที่ tab **PAST ANC CHART**
4. สามารถ Click เลือกดูรายละเอียดจาก PAST ANC CHART ได้

## ขั้นตอนละเอียด — ดูผลตรวจ (3 tabs)

| Tab | วิธีดู |
|-----|-------|
| **LABORATORY** | รายการ (list) / ผลรวมเปรียบเทียบ (summary) / กราฟ (graph) |
| **RADIOLOGY** | รายการผลรังสีวิทยาทั้งหมด |
| **PATHOLOGY** | รายการผลตรวจ Pathology ทั้งหมด |

## Auto-Calculations Summary

| Field | วิธีคำนวณ | เงื่อนไข |
|-------|----------|---------|
| Trimester | จาก EDC | ทุก method |
| EDC | Naegele's rule จาก LMP | เมื่อ method = LMP |
| GA (อายุครรภ์) | จาก LMP และวันปัจจุบัน | เมื่อ method = LMP |
| BMI | Weight (kg) / Height (m)² | ระบุน้ำหนัก + ส่วนสูง |

## Modules Involved

- [[ANC]] — หน้าจอหลัก
- [[EMR Doctor]] — จุดเข้าถึง
- [[LAB]] — ผลตรวจเลือด
- [[XRAY]] — ผลรังสีวิทยา
- [[Labour and Newborn]] — ข้อมูล Obstetric Summary + EDC ส่งต่อ
