---
title: Labour and Newborn Module
type: module
sources: ["12.MEDHIS Manual_Laboor and Newborn V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [module, labour, newborn, obstetrics]
---

# Labour and Newborn — ระบบงานห้องคลอดและทารกแรกคลอด

## Purpose

ระบบบันทึกข้อมูลการคลอดและทารกแรกคลอด ตั้งแต่แรกรับที่ห้องคลอดจนรับทารกเข้า Nursery

## Access

- [[Ward Board]] (Inpatient) → เลือกเตียงผู้ป่วย → **Labour Detail** (สำหรับมารดา)
- Visit Detail → **Newborn Detail** (สำหรับทารก)

## Labour Detail (ข้อมูลการคลอด)

### Pregnancy Detail
- [[EDC Calculation|EDC]]: 3 วิธี (LMP / U/S / Manual) — เหมือน [[ANC]]
- ประวัติการตั้งครรภ์: Gravida, Full term, Premature, Abortion, Living, Still birth, Para

### Delivery Details
- **TR** (ทำหมัน): toggle เปิด/ปิด
- Other Procedure, **Anesthesia** + Complication
- **Episiotomy & Laceration**: toggle เปิด/ปิด, Duration of Stitches, Tear
- Delivery Complication, Maternal Complication
- Gross Appearance, Post-partum Condition
- **EBL (ml)** — ปริมาณเลือดที่เสีย
- Triband, ยาที่ได้รับระหว่างคลอด

### Placenta Record
- Mode of Delivery, Type, Pieces, Cord Length, Weight
- **รองรับรกหลายชิ้น** (กด Add เพิ่ม)

### Care Team
- ระบุ Role (แพทย์/กุมารแพทย์/พยาบาล/วิสัญญี) + ชื่อ → ADD ทีละคน

### Obstetric Summary
- Gravida, No of Live Births, Abortions (< 12 wks / > 12 wks), Still Born, Neonatal Deaths, Caesarean, Birth Weight, Gestation < 37 weeks
- เหมือน [[ANC]] (Obstetric Summary section)

### Labour Onset (Timeline)

| Event | Field |
|-------|-------|
| Labour Onset | Date & Time |
| Membrane Rupture | Date & Time + Method + Amniotic Fluid |
| Full Dilatation | Date & Time |
| Child Birth | Date & Time |
| Placenta Birth | Date & Time |

### Labour Stage (Auto-calculated)

| Stage | Calculation |
|-------|------------|
| **Stage 1** | Full Dilatation − Membrane Rupture |
| **Stage 2** | Child Birth − Full Dilatation |
| **Stage 3** | Placenta Birth − Child Birth |
| **Duration of Membrane Rupture** | Child Birth − Membrane Rupture |
| **Total Labour Duration** | Placenta Birth − Membrane Rupture |

- Delivery Mode, Presentation, Indication, Complication
- **TWIN** toggle: เปิดเพื่อบันทึกทารกเพิ่ม

### Outside Lab
- ผลเลือดมารดาจากโรงพยาบาลอื่น

## Newborn Detail (ข้อมูลทารก)

ระบบ **สร้างชื่อ + เลขประจำตัว** ทารกอัตโนมัติ (มีชื่อมารดากำกับ)

### Measurements
- Delivery Date/Time, Mode, Gender, **Weight**, **Length**
- Shoulder Width, Head Circumference, Chest Circumference
- BT LR (อุณหภูมิห้องคลอด), BT NSY (อุณหภูมิ Nursery)
- Birth Outcome, Patency of Anus, Umbilical Cut, Birth Trauma

### Assessments (เลือกข้อมูล)
- Congenital Anomalies, Bonding, Tracheal Suction, OG Tube, Oxygen, PPV/NCPAP, Retained ET Tube, Chest Compression

### APGAR Score
- บันทึกทุกหัวข้อที่นาที **1, 5, 10** → ระบบ **คำนวณผลรวมอัตโนมัติ**

### Father's Detail
- Title, Name, Age, National ID, Mobile, Occupation, Consanguinity, Qualification, Blood Group, RH Factor

### Multiple Newborns
- กดปุ่ม **NEWBORN DETAIL** เพื่อเพิ่มหน้าจอบันทึกทารกคนถัดไป

## Nursery Admission

ทารกที่บันทึกแล้ว → **ส่ง [[Admission]] List อัตโนมัติ** → เจ้าหน้าที่:
1. [[Ward Board]] → เลือกหอผู้ป่วยทารก
2. เลือกเตียงที่มีชื่อทารก → กด **Arrive**
3. ดูแลในระบบ [[IPD]] ตามปกติ

## Integration Points

| Module | Integration |
|--------|-------------|
| [[IPD]] | เข้าผ่าน Ward Board → Labour Detail |
| [[ANC]] | EDC/Obstetric Summary shared concepts |
| [[Admission]] | ทารกส่ง Admission List อัตโนมัติ |
| [[EMR Doctor]] | สั่ง orders ระหว่างคลอด |
