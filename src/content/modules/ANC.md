---
title: ANC — Antenatal Care Module
type: module
sources: ["8.MEDHIS Manual_ANC V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [module, anc, antenatal-care, obstetrics]
---

# ANC — ระบบงานฝากครรภ์ (Antenatal Care)

## Purpose

ระบบฝากครรภ์ใช้สำหรับบันทึกและติดตามข้อมูลการฝากครรภ์ของผู้ป่วยตั้งแต่เริ่มฝากครรภ์จนถึงก่อนคลอด ครอบคลุมข้อมูลการตั้งครรภ์ ประวัติการคลอดก่อนหน้า สรุปสูติกรรม ข้อมูลบิดา และผลตรวจต่างๆ

## Access

เข้าผ่าน [[EMR Doctor|EMR]] menu → เมนู **ANC** ด้านขวามือ

## Key Screens

### 1. [[ANC Chart Screen|ANC CHART]]

หน้าจอหลักสำหรับบันทึกข้อมูลฝากครรภ์ ประกอบด้วย:

**Current Pregnancy Detail** — ประวัติการตั้งครรภ์ปัจจุบัน
- **Trimester**: คำนวณอัตโนมัติจาก [[EDC Calculation|EDC]]
- **[[EDC Calculation|EDC Calculation Method]]**: LMP, U/S, หรือ Manual
  - เมื่อระบุ LMP date → EDC และ GA คำนวณอัตโนมัติ

**Delivery History** — ประวัติการคลอดครั้งก่อน
- Delivery Date, Hospital Name, Type of Delivery, GA
- Delivery Outcome, Gender, Birth Weight
- Comments, Complication
- รองรับหลายครั้ง ไม่จำกัดจำนวน (กดปุ่ม + เพื่อเพิ่ม)

**Obstetric Summary** — สรุปประวัติการตั้งครรภ์
- Gravida, Para, Full term, Premature, Still Birth
- No of Live Births, Abortions (< 12 wks / > 12 wks)
- No of Neonatal Deaths, No of Caesarean
- No of Birthweight < 2.5 kg, No of Gestation < 37 weeks
- Post Delivery Last (Year), Labour Type
- Pelvic Assessment, Nipple Assessment

**General Appearance (Before Pregnant)**
- น้ำหนัก, ส่วนสูงก่อนตั้งครรภ์ → BMI คำนวณอัตโนมัติ

**Father Details** — ข้อมูลบิดา
- ต้อง slide ปุ่มเปิดเพื่อแสดงรายละเอียด
- สามารถใช้ประวัติบิดาจากการฝากครรภ์ครั้งก่อนได้

**Examination Record** — สัญญาณชีพและรายละเอียดการมาฝากครรภ์ครั้งนี้

**Medical History**
- Patient's Medical History — ประวัติความเจ็บป่วยผู้ป่วย (เพิ่มเติมได้)
- Father's Medical History — ประวัติความเจ็บป่วยบิดา (เพิ่มเติมได้)

**Outside Lab Panel**
- Patient's Outside Lab Panel — ผลเลือดจากภายนอก
- Father's Outside Lab Panel — ผลเลือดบิดาจากภายนอก
- ชนิดผลเลือดเพิ่มเติมได้

### 2. PAST ANC CHART

แสดงประวัติฝากครรภ์ที่ปิด cycle แล้ว สามารถเลือกดูรายละเอียดแต่ละครั้งได้

### 3. LABORATORY

แสดงผลเลือดของผู้ป่วยในรูปแบบ:
- รายการ (list)
- ผลรวมและค่าเปรียบเทียบ (summary/comparison)
- กราฟ (graph)

### 4. RADIOLOGY

แสดงผลทางรังสีวิทยาทั้งหมดของผู้ป่วย

### 5. PATHOLOGY

แสดงผลที่ส่งตรวจทาง Pathology ทั้งหมดของผู้ป่วย

## Key Operations

| Operation | How |
|-----------|-----|
| บันทึกข้อมูล | กรอกข้อมูลใน ANC Chart → กด **SAVE** |
| เพิ่มประวัติคลอด | กดปุ่ม + ใน Delivery History |
| ลบประวัติคลอด | กดปุ่ม ลบ ใน Delivery History |
| ปิด cycle ฝากครรภ์ | กดปุ่ม **Completed** (เมื่อฝากครรภ์ครบตามมาตรฐาน) |
| ดูประวัติเก่า | ไปที่ tab PAST ANC CHART → เลือกรายการ |

## Integration Points

- **[[EMR Doctor]]**: ANC เข้าถึงผ่าน EMR menu
- **[[LAB]]**: ผลเลือดแสดงใน Laboratory tab
- **[[XRAY]]**: ผลรังสีวิทยาแสดงใน Radiology tab
- Pathology: ผลตรวจ Pathology แสดงใน Pathology tab

## Auto-Calculations

- **Trimester** — จาก EDC
- **EDC & GA** — จาก LMP date (เมื่อเลือก LMP method)
- **BMI** — จากน้ำหนักและส่วนสูงก่อนตั้งครรภ์
