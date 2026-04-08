---
title: ANC Visit Workflow
type: workflow
sources: ["8.MEDHIS Manual_ANC V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [workflow, anc, antenatal-care]
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

## Modules Involved

- [[ANC]] — หน้าจอหลัก
- [[EMR Doctor]] — จุดเข้าถึง
- [[LAB]] — ผลตรวจเลือด
- [[XRAY]] — ผลรังสีวิทยา
