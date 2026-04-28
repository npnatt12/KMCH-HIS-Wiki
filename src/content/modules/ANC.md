---
title: ANC — Antenatal Care Module
type: module
sources: ["8.MEDHIS Manual_ANC V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [module, anc, antenatal-care, obstetrics]
verified-on-uat: pending
---

# ANC — ระบบงานฝากครรภ์ (Antenatal Care)

## Purpose

ระบบฝากครรภ์ใช้สำหรับบันทึกและติดตามข้อมูลการฝากครรภ์ของผู้ป่วยตั้งแต่เริ่มฝากครรภ์จนถึงก่อนคลอด ครอบคลุมข้อมูลการตั้งครรภ์ ประวัติการคลอดก่อนหน้า สรุปสูติกรรม ข้อมูลบิดา และผลตรวจต่างๆ

## Access

เข้าผ่าน [EMR](/modules/emr-doctor/) menu → เมนู **ANC** ด้านขวามือ

## Key Screens

### 1. [ANC CHART](/entities/anc-chart-screen/)

หน้าจอหลักสำหรับบันทึกข้อมูลฝากครรภ์ ประกอบด้วย:

**Current Pregnancy Detail** — ประวัติการตั้งครรภ์ปัจจุบัน
- **Trimester**: คำนวณอัตโนมัติจาก [EDC](/concepts/edc-calculation/)
- **[EDC Calculation Method](/concepts/edc-calculation/)**: LMP, U/S, หรือ Manual
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

## Screen Fields — ANC Chart (ทุก Section)

### Section 1: Current Pregnancy Detail
| Field | Type | Required | Auto-Calc | Description |
|-------|------|----------|-----------|-------------|
| Trimester | Computed | — | Yes (จาก EDC) | ไตรมาสที่ 1/2/3 |
| EDC Calculation Method | Dropdown | Yes | — | LMP / U/S / Manual |
| LMP Date | Date | เมื่อเลือก LMP | — | วันแรกของรอบเดือนล่าสุด |
| EDC | Date | — | Yes (เมื่อ LMP) | วันกำหนดคลอด |
| GA (Gestational Age) | Computed | — | Yes (เมื่อ LMP) | อายุครรภ์ (สัปดาห์+วัน) |

### Section 2: Delivery History (ต่อ 1 ครั้ง)
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Delivery Date | Date | No | วันที่คลอด |
| Hospital Name | Text | No | ชื่อโรงพยาบาลที่คลอด |
| Type of Delivery | Dropdown | No | ประเภทการคลอด (Normal/Caesarean ฯลฯ) |
| GA | Text/Number | No | อายุครรภ์ขณะคลอด |
| Delivery Outcome | Dropdown | No | ผลจากการคลอด |
| Gender | Dropdown | No | เพศทารก |
| Birth Weight | Number | No | น้ำหนักแรกคลอด (กรัม/กิโลกรัม) |
| Comments | Text | No | หมายเหตุ |
| Complication | Text | No | ภาวะแทรกซ้อนในการคลอดครั้งนั้น |

*รองรับหลายครั้ง ไม่จำกัดจำนวน — กด + เพิ่ม / กดลบ เพื่อลบรายการ*

### Section 3: Obstetric Summary
| Field | Description |
|-------|-------------|
| Gravida | จำนวนการตั้งครรภ์ทั้งหมด |
| Para | จำนวนการคลอดครบกำหนด |
| Full term | คลอดครบกำหนด |
| Premature | คลอดก่อนกำหนด |
| Still Birth | ทารกเกิดมาไม่มีชีพ |
| No of Live Births | จำนวนทารกมีชีวิต |
| Abortion at GA < 12 wks | การแท้งบุตรก่อน 12 สัปดาห์ |
| Abortion at GA > 12 wks | การแท้งบุตรหลัง 12 สัปดาห์ |
| Abortions | รวมจำนวนแท้ง |
| No of Neonatal Deaths | จำนวนทารกเสียชีวิต |
| No of Caesarean | จำนวนการผ่าคลอด |
| No of Birthweight < 2.5 kg | จำนวนทารกน้ำหนักน้อยกว่า 2.5 กก. |
| No of Gestation < 37 weeks | จำนวนครรภ์อายุน้อยกว่า 37 สัปดาห์ |
| Post Delivery Last (Year) | ปีหลังคลอดล่าสุด |
| Labour Type | ประเภทการคลอด |
| Pelvic Assessment | ผลการประเมินอุ้งเชิงกราน |
| Nipple Assessment | ผลการประเมินหัวนม |

### Section 4: General Appearance (Before Pregnant)
| Field | Type | Auto-Calc | Description |
|-------|------|-----------|-------------|
| Weight (before pregnant) | Number | — | น้ำหนักก่อนตั้งครรภ์ |
| Height | Number | — | ส่วนสูง |
| BMI | Computed | Yes | คำนวณจาก Weight/Height² |

### Section 5: Father Details
| การเข้าถึง | ต้อง slide ปุ่มเปิดทางขวาก่อน |
|-----------|-------------------------------|
| ข้อมูลบิดา | ระบุตามหัวข้อในระบบ |
| ใช้ข้อมูลเก่า | ใช้ประวัติบิดาจากการฝากครรภ์ครั้งก่อนได้ |

### Section 6: Examination Record
- สัญญาณชีพ (Vital Signs) ณ วันที่มาฝากครรภ์
- รายละเอียดการตรวจ (ตามหัวข้อในระบบ)

### Section 7: Patient's Medical History
- ประวัติความเจ็บป่วยผู้ป่วย
- สามารถเพิ่มเติมรายละเอียดได้ไม่จำกัด

### Section 8: Father's Medical History
- ประวัติความเจ็บป่วยบิดา
- สามารถเพิ่มเติมรายละเอียดได้ไม่จำกัด

### Section 9: Patient's Outside Lab Panel
- ผลเลือดผู้ป่วยที่นำมาจากภายนอกโรงพยาบาล
- ชนิดผลเลือดสามารถเพิ่มเติมได้

### Section 10: Father's Outside Lab Panel
- ผลเลือดบิดาที่นำมาจากภายนอกโรงพยาบาล
- ชนิดผลเลือดสามารถเพิ่มเติมได้

## [EDC Calculation](/concepts/edc-calculation/) — 3 วิธี

| Method | ขั้นตอน | Auto-calculated |
|--------|---------|----------------|
| **LMP** | ระบุ LMP date → EDC, GA, Trimester คำนวณอัตโนมัติ | EDC, GA, Trimester |
| **U/S** | ระบุผล Ultrasound | EDC (manual) |
| **Manual** | ระบุ EDC โดยตรง | Trimester |

## ANC Tabs — 5 แท็บ

| Tab | ความหมาย |
|-----|----------|
| **ANC CHART** | หน้าจอหลักบันทึกข้อมูลฝากครรภ์ปัจจุบัน |
| **PAST ANC CHART** | ประวัติฝากครรภ์ที่ปิด cycle แล้ว (Completed) |
| **LABORATORY** | ผลเลือด (รายการ / ผลรวมเปรียบเทียบ / กราฟ) |
| **RADIOLOGY** | ผลทางรังสีวิทยาทั้งหมด |
| **PATHOLOGY** | ผลตรวจ Pathology ทั้งหมด |

## Button Actions

| Button | หน้าจอ | Action | เงื่อนไข | ผลลัพธ์ |
|--------|--------|--------|-----------|---------|
| SAVE | ANC Chart | บันทึกข้อมูลทั้งหมด | — | ข้อมูลถูกบันทึก |
| Completed | ANC Chart | ปิด cycle ฝากครรภ์ | ฝากครรภ์ครบมาตรฐาน | ข้อมูลย้ายไป PAST ANC CHART |
| + (Delivery History) | ANC Chart | เพิ่มแถวประวัติการคลอด | — | เพิ่ม row ใหม่ |
| ลบ (Delivery History) | ANC Chart | ลบประวัติการคลอดที่บันทึกผิด | — | ลบ row นั้น |
| Slide toggle (Father) | ANC Chart | เปิด/ปิดส่วน Father Details | — | แสดง/ซ่อน fields บิดา |

## Permissions

| Action | ผู้ดำเนินการ | หมายเหตุ |
|--------|-------------|---------|
| บันทึก ANC Chart | แพทย์ / พยาบาล ANC | เข้าผ่าน EMR |
| Completed (ปิด Cycle) | แพทย์ / พยาบาล ANC | เมื่อฝากครรภ์ครบ |
| ดู PAST ANC CHART | แพทย์ / พยาบาล ANC | Read-only |
| ดู Lab / Radiology / Pathology | แพทย์ / พยาบาล | ผลจากระบบ LAB/XRAY/Pathology |

## Error / Edge Cases

- **LMP method**: เมื่อเลือก LMP ต้องระบุ LMP date — ถ้าไม่ระบุ EDC/GA จะไม่คำนวณ
- **Father Details**: ต้อง slide ปุ่มเปิดก่อน — ถ้าไม่เปิด ข้อมูลบิดาจะไม่แสดง
- **Completed**: กดแล้วข้อมูลย้ายไป PAST — ควรตรวจสอบความครบถ้วนก่อน
- **Outside Lab Panel**: ชนิดผลเลือดที่ไม่มีในระบบต้องเพิ่มผ่าน Admin setting ก่อน
- **หลายการตั้งครรภ์**: แต่ละ cycle เปิด ANC Chart ใหม่ — Previous cycle ดูได้ที่ PAST ANC CHART

## Integration Points

- **[EMR Doctor](/modules/emr-doctor/)**: ANC เข้าถึงผ่าน EMR menu
- **[LAB](/modules/lab/)**: ผลเลือดแสดงใน Laboratory tab
- **[XRAY](/modules/xray/)**: ผลรังสีวิทยาแสดงใน Radiology tab
- Pathology: ผลตรวจ Pathology แสดงใน Pathology tab
- **[Labour and Newborn](/modules/labour-and-newborn/)**: ข้อมูล Obstetric Summary + EDC ส่งต่อห้องคลอด

## Auto-Calculations

| Field | วิธีคำนวณ |
|-------|----------|
| **Trimester** | จาก EDC — คำนวณไตรมาส 1/2/3 อัตโนมัติ |
| **EDC & GA** | จาก LMP date (เมื่อเลือก LMP method) ตาม Naegele's rule |
| **BMI** | น้ำหนัก (kg) / ส่วนสูง (m)² |
