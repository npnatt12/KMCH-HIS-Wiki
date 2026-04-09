---
title: Labour and Newborn Module
type: module
sources: ["12.MEDHIS Manual_Laboor and Newborn V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [module, labour, newborn, obstetrics]
---

# Labour and Newborn — ระบบงานห้องคลอดและทารกแรกคลอด

## Purpose

ระบบบันทึกข้อมูลการคลอดและทารกแรกคลอด ตั้งแต่แรกรับที่ห้องคลอดจนรับทารกเข้า Nursery

## Access

- Inpatient → [[Ward Board]] → เลือก Ward ห้องคลอด → Click เตียงผู้ป่วย → Visit Detail → **Labour Detail** (สำหรับมารดา)
- Visit Detail ของมารดา → **Newborn Detail** (สำหรับทารก)

## Labour Detail (ข้อมูลการคลอด)

หน้าจอ Labour Detail แบ่งเป็น Section พับ-ขยายได้ สามารถเลื่อน เปิด/ปิด แต่ละหัวข้อย่อย

### Section 1: Pregnancy Detail

| Field | ประเภท | Description |
|-------|--------|-------------|
| LMP Date | Date | วันประจำเดือนครั้งสุดท้าย |
| EDC Date | Date/Auto | วันกำหนดคลอด (คำนวณ 3 วิธี) |
| GA | Auto | อายุครรภ์ (สัปดาห์) — คำนวณอัตโนมัติ |
| **EDC Method** | Select | LMP / U/S / Manual — ดู [[EDC Calculation]] |
| Gravida | Number | จำนวนครั้งที่ตั้งครรภ์ทั้งหมด |
| Full term | Number | จำนวนครรภ์ครบกำหนด |
| Premature | Number | จำนวนครรภ์ก่อนกำหนด |
| Abortion | Number | จำนวนการแท้ง |
| Living | Number | จำนวนบุตรที่มีชีวิต |
| Still birth | Number | จำนวนบุตรที่เสียชีวิตในครรภ์ |
| Para | Number | จำนวนการคลอดทั้งหมด |
| Past delivery last (year) | Number | ปีที่คลอดครั้งล่าสุด |
| Past and Present History | Text | ประวัติการตั้งครรภ์ในอดีตและปัจจุบัน |
| Type of onset of labour | Dropdown | ประเภทการเจ็บครรภ์ |

### Section 2: Delivery Details

| Field | ประเภท | Description |
|-------|--------|-------------|
| TR | Toggle | ทำหมัน — เปิดหากทำหมันระหว่างคลอด |
| Other Procedure | Text | หัตถการอื่นๆ |
| Anesthesia | Dropdown | ชนิดยาระงับความรู้สึก |
| Anesthesia Complication | Text | ภาวะแทรกซ้อนจากยาชา |
| Episiotomy & Laceration | Toggle | เปิดหากมีการตัด/ฉีกขาด |
| Duration of Stitches | Number | ระยะเวลาเย็บแผล |
| Tear | Dropdown | ระดับการฉีกขาด |
| Maternal Complication | Text/Dropdown | ภาวะแทรกซ้อนของมารดา |
| Delivery Complication | Text/Dropdown | ภาวะแทรกซ้อนระหว่างคลอด |
| Gross Appearance | Text | ลักษณะทั่วไปหลังคลอด |
| Post-partum Condition | Dropdown | สภาพหลังคลอด |
| EBL (ml) | Number | Estimated Blood Loss — ปริมาณเลือดที่เสีย |
| Triband | Toggle/Text | การผูกสายรัด |
| ยาระหว่างคลอด | Order Entry | บันทึกยาที่ได้รับระหว่างคลอด (ตั้งค่าได้) |

### Section 3: Placenta Record

| Field | Description |
|-------|-------------|
| Mode of placenta delivery | วิธีส่งรก |
| Type of placenta | ชนิดของรก |
| Placenta (pcs) | จำนวนรก |
| Cord length | ความยาวสายสะดือ |
| Placenta weight | น้ำหนักรก |

- **รองรับรกหลายชิ้น**: กด **Add** เพื่อเพิ่มระเบียนรกชิ้นถัดไปได้ไม่จำกัด

### Section 4: Care Team

| Field | Description |
|-------|-------------|
| Role | ประเภทของเจ้าหน้าที่ (แพทย์/กุมารแพทย์/พยาบาล/วิสัญญี — ตั้งค่าได้) |
| Name | ชื่อเจ้าหน้าที่ |

- กด **ADD** เพิ่มทีละคน จนครบทีมทำคลอด

### Section 5: Obstetric Summary

| Field | Description |
|-------|-------------|
| Gravida | จำนวนครั้งตั้งครรภ์ทั้งหมด |
| No of Live Births | จำนวนบุตรเกิดมีชีวิต |
| Abortion at GA < 12 wks | จำนวนแท้งก่อน 12 สัปดาห์ |
| Abortion at GA > 12 wks | จำนวนแท้งหลัง 12 สัปดาห์ |
| No of Still Born | จำนวนทารกเกิดไม่มีชีวิต |
| Abortions | รวมการแท้ง |
| No of Neonatal Deaths | จำนวนทารกเสียชีวิตหลังคลอด |
| No of Caesarean | จำนวนผ่าคลอด |
| Birth Weight | น้ำหนักแรกเกิด |
| No of Gestation < 37 weeks | จำนวนครรภ์ก่อนกำหนด |

→ ข้อมูลนี้ใช้ร่วมกับ [[ANC]] (Obstetric Summary section)

### Section 6: Labour Onset (Timeline)

| Event | Field | Description |
|-------|-------|-------------|
| Labour Onset | Date & Time | เวลาเจ็บครรภ์ |
| Membrane Rupture | Date & Time | เวลาถุงน้ำแตก |
| Membrane Method | Dropdown | วิธีการ (Spontaneous/AROM) |
| Amniotic Fluid | Dropdown | ลักษณะน้ำคร่ำ |
| Full Dilatation | Date & Time | เวลาปากมดลูกเปิดเต็มที่ |
| Child Birth | Date & Time | เวลาทารกคลอด |
| Placenta Birth | Date & Time | เวลารกคลอด |

### Section 7: Labour Stage (Auto-calculated)

| Stage | สูตรคำนวณ | คำอธิบาย |
|-------|-----------|---------|
| **Stage 1** | Full Dilatation − Membrane Rupture | ระยะที่ 1 ของการคลอด |
| **Stage 2** | Child Birth − Full Dilatation | ระยะที่ 2 ของการคลอด |
| **Stage 3** | Placenta Birth − Child Birth | ระยะที่ 3 (รกคลอด) |
| **Duration of Membrane Rupture** | Child Birth − Membrane Rupture | ระยะเวลาถุงน้ำแตกถึงคลอด |
| **Total Labour Duration** | Placenta Birth − Membrane Rupture | ระยะเวลารวมทั้งหมด |

**ข้อมูลเพิ่มเติมในหัวข้อนี้:**

| Field | Description |
|-------|-------------|
| Delivery Mode | วิธีการคลอด (Normal/C-Section ฯลฯ) |
| Presentation | ท่าของทารก (Vertex/Breech ฯลฯ) |
| Indication | ข้อบ่งชี้สำหรับวิธีการคลอด |
| Complication | ภาวะแทรกซ้อน |

- **TWIN toggle**: เลื่อนเปิดเพื่อบันทึกทารกคนที่ 2 ขึ้นไป

### Section 8: Outside Lab
- บันทึกผลเลือดมารดา (ผู้ป่วย) ที่นำมาจากโรงพยาบาลอื่น

## Newborn Detail (ข้อมูลทารก)

ระบบ **สร้างชื่อ + เลขประจำตัว** ทารกอัตโนมัติ (มีชื่อมารดากำกับไว้ก่อน)

### Measurements (ข้อมูลพื้นฐานทารก)

| Field | ประเภท | Description |
|-------|--------|-------------|
| Delivery Date & Time | DateTime | วันเวลาคลอด |
| Delivery Mode | Dropdown | วิธีคลอด |
| Gender | Select | เพศทารก |
| Weight | Number (g) | น้ำหนักแรกเกิด |
| Length | Number (cm) | ความยาวแรกเกิด |
| Shoulder Width | Number (cm) | ความกว้างไหล่ |
| BT LR | Number (°C) | อุณหภูมิร่างกายที่ห้องคลอด |
| BT NSY | Number (°C) | อุณหภูมิร่างกายที่ห้อง Nursery |
| Head Circumference | Number (cm) | เส้นรอบวงศีรษะ |
| Chest Circumference | Number (cm) | เส้นรอบวงทรวงอก |
| Birth Outcome | Dropdown | ผลลัพธ์การคลอด (Alive/Stillbirth) |
| Patency of Anus | Select | การเปิดของรูทวาร |
| Umbilical Cut at | Number (cm) | ตำแหน่งตัดสายสะดือ |
| Birth Trauma | Text | การบาดเจ็บระหว่างคลอด |

### Assessments (ข้อมูลเลือก Toggle/Select)

| Field | Description |
|-------|-------------|
| Congenital Anomalies | ความผิดปกติแต่กำเนิด |
| Bonding | การผูกสัมพันธ์มารดา-ทารก |
| Tracheal Suction | การดูดเสมหะทางหลอดลม |
| OG Tube | การใส่สายอาหาร |
| Oxygen | การให้ออกซิเจน |
| PPV/NCPAP | การช่วยหายใจ |
| Retained ET Tube | การคาท่อหลอดลม |
| Chest Compression | การกดหน้าอก CPR |

### APGAR Score

| นาที | หัวข้อประเมิน | ผลรวม |
|------|-------------|-------|
| 1 นาที | ทุกหัวข้อ APGAR | **ระบบคำนวณอัตโนมัติ** |
| 5 นาที | ทุกหัวข้อ APGAR | **ระบบคำนวณอัตโนมัติ** |
| 10 นาที | ทุกหัวข้อ APGAR | **ระบบคำนวณอัตโนมัติ** |

- ต้องระบุทุกหัวข้อในแต่ละนาที ระบบจึงคำนวณผลรวมให้

### Father's Detail (ข้อมูลบิดา)

| Field | Description |
|-------|-------------|
| Title | คำนำหน้าชื่อ |
| Name | ชื่อ-นามสกุล |
| Age | อายุ |
| National ID | เลขบัตรประชาชน |
| Mobile | โทรศัพท์มือถือ |
| Occupation | อาชีพ |
| Consanguinity | ความสัมพันธ์กับมารดา |
| Qualification | วุฒิการศึกษา |
| Blood Group | หมู่เลือด |
| RH Factor | Rh Factor |

### Multiple Newborns
- กดปุ่ม **NEWBORN DETAIL** เพื่อเพิ่มหน้าจอบันทึกทารกคนถัดไป (กรณีแฝด)

## Nursery Admission

ทารกที่บันทึกแล้ว → **ส่ง [[Admission]] List อัตโนมัติ** → เจ้าหน้าที่:
1. [[Ward Board]] → เลือกหอผู้ป่วยทารก
2. เลือกเตียงที่มีชื่อทารก → กด **Arrive**
3. ดูแลในระบบ [[IPD]] ตามปกติ

## Button Actions

| Button | Action | Conditions | Result |
|--------|--------|------------|--------|
| **SAVE** (Labour Detail) | บันทึกข้อมูลการคลอด | กรอกข้อมูลครบ | บันทึกลงระบบ |
| **SAVE** (Newborn Detail) | บันทึกข้อมูลทารก | กรอกข้อมูลครบ | สร้างเลข HN ทารก + ส่ง Admission List |
| **Add** (Placenta Record) | เพิ่มระเบียนรก | — | เพิ่ม row ใหม่สำหรับรกชิ้นถัดไป |
| **ADD** (Care Team) | เพิ่มสมาชิกทีม | ระบุ Role + ชื่อ | บันทึกชื่อเจ้าหน้าที่เข้าทีม |
| **TWIN** (toggle) | เปิด/ปิดการบันทึกทารกคู่ | กรณีแฝด | แสดงฟอร์มบันทึกทารกคนถัดไป |
| **NEWBORN DETAIL** | เพิ่มหน้าจอบันทึกทารกใหม่ | กรณีทารก > 1 คน | เพิ่มฟอร์ม Newborn Detail ใหม่ |

## Error / Edge Cases

- **ทารกต้องมีข้อมูลก่อน Nursery Admit**: ต้องบันทึก Newborn Detail และ SAVE ก่อน ระบบจึงส่งชื่อทารกไป Admission List
- **APGAR Score ไม่ครบ**: ต้องระบุทุกหัวข้อในนาที 1, 5, 10 ระบบถึงจะคำนวณผลรวมให้
- **เลขประจำตัวทารก**: ระบบสร้างอัตโนมัติ ไม่ต้องป้อนเอง (มีชื่อมารดากำกับ)
- **Nursery Arrive**: ต้องทำแยกต่างหากที่ Ward Board ของหอ Nursery

## Integration Points

| Module | Integration |
|--------|-------------|
| [[IPD]] | เข้าผ่าน Ward Board → Labour Detail; ทารกเข้าระบบ IPD หลัง Arrive |
| [[ANC]] | EDC/Obstetric Summary shared concepts; ข้อมูลส่งต่อจาก ANC Visit |
| [[Admission]] | ทารกส่ง Admission List อัตโนมัติหลัง Save Newborn Detail |
| [[EMR Doctor]] | สั่ง orders ระหว่างคลอดผ่าน EMR |
