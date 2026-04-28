---
title: Order Entry Module
type: module
sources: ["18.MEDHIS Manual_Order V.2.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [module, order, cpoe, prescription, drug-alerts]
verified-on-uat: pending
---

# Order Entry — ระบบคำสั่งการรักษา (CPOE)

## Purpose

บันทึกคำสั่งการรักษาทุกประเภท — ครอบคลุม Lab, Radiology, procedures, services, ค่าแพทย์, ยา, วัสดุสิ้นเปลือง ทั้ง OPD และ IPD

## Access

เข้าจาก:
- **[[EMR Doctor]] → Order icon** จากหน้าจอ Worklist
- **[[EMR Doctor]] → View OPD EMR** → เมนู Order

---

## OPD CPOE — การบันทึกคำสั่งผู้ป่วยนอก

### ข้อมูลเริ่มต้นที่ต้องตรวจสอบ

| Field | Default | คำอธิบาย |
|-------|---------|---------|
| Type | Daily | ประเภทคำสั่ง |
| Order by | Self (แพทย์) | แพทย์ = Self; เจ้าหน้าที่ = On behalf of → เลือกวิธีรับคำสั่ง (Telephonic/Verbal/Written) |
| Department | — | แผนกที่สั่งรายการคำสั่ง |

### Entry Tabs (7 แถบ)

| Tab | ชื่อไทย | คำอธิบาย |
|-----|---------|---------|
| ORDER DETAILS | รายละเอียดคำสั่ง | ค้นหาและสั่งรายการโดยตรง (Search Order Item) — **Default tab** |
| TICK SHEET | เลือกรายการ | เลือกจาก checkbox สำเร็จรูป แยกตามประเภทคำสั่ง |
| FAVORITES | รายการโปรด | รายการที่แพทย์ตั้งค่าไว้ใช้บ่อย พร้อม pre-configured dosage |
| ORDER SET | ชุดคำสั่ง | ชุดคำสั่งสำเร็จรูป หลายรายการพร้อมกัน |
| FUTURE ORDERS | คำสั่งล่วงหน้า | ดึงคำสั่งจากหน้า Appointment ที่สั่งล่วงหน้าไว้ |
| PACKAGE | แพ็คเกจ | คำสั่งแบบ Package พร้อมติดตาม Qty/Used/Over-Under |
| ORDER PROFILE | ประวัติคำสั่ง | ดูรายการคำสั่งทั้งหมด พร้อม Cancel/Repeat/Discontinue |

---

## Order Categories (ประเภทคำสั่ง)

### 1. Lab / Radiology / Procedures / Services

ขั้นตอน:
1. ค้นหาจากช่อง **Search Order Item** → คลิกเลือก
2. รายการแสดงในแถวที่ค้นหา
3. คลิก Icon Edit เพื่อแก้ไขหรือเพิ่มข้อความสื่อสาร
4. ระบุ **Nursing Instruction** (ถ้าต้องการ)
5. เลือก **Priority = Stat** ถ้าต้องการผลด่วน
6. คลิก + เพิ่มรายการ หรือ ✕ ลบรายการ
7. ระบุ Password → กด **Save**

### 2. Doctor Fee (ค่าแพทย์)

| Field | Description |
|-------|-------------|
| Unit Price | ค่าแพทย์ — **แก้ไขได้ภายในขอบเขตที่กำหนด** (มี Icon แก้ไข) |
| หมายเหตุ | ไม่สามารถแก้ไขน้อยกว่าหรือมากกว่าค่าที่กำหนดในระบบ |

ขั้นตอน:
1. ค้นหาค่าแพทย์จาก Search Order Item → คลิกเลือก
2. คลิก Icon แก้ไข → ระบุราคาใหม่ใน Unit Price (ถ้าต้องการ)
3. ระบุ Password → กด Save

### 3. Medicine Orders (คำสั่งยา)

| Field | Required | คำอธิบาย |
|-------|----------|---------|
| ยา (Drug) | ✓ | ค้นหาจาก Search Order Item |
| Dosage | ✓ | ขนาดยา |
| Route | ✓ | ช่องทางการให้ยา |
| Frequency | ✓ | ความถี่การให้ยา |
| Duration | ○ | ระยะเวลา (เฉพาะยาที่มี Frequency ไม่ใช่ PRN) |
| Quantity | ○ | จำนวน (auto-calc: Duration × Frequency) |
| Administration Instruction | ○ | วิธีใช้เพิ่มเติม |
| Refill | ○ | จำนวนครั้งเติมยา → แสดง Icon ที่หน้ารายการยา |
| Taper Dose | ○ | ลดขนาดยาเป็นขั้น (กด Add Taper Dose เพื่อเพิ่ม Dose ที่ 2, 3...) |

**Taper Dose:** ระบุวิธีใช้แรก → กด Add Taper Dose → ระบุ Dose ที่ 2 → กด + เพิ่ม Dose ถัดไปได้เรื่อยๆ

### 4. Medical Supplies (เวชภัณฑ์/วัสดุสิ้นเปลือง)

- ค้นหาจาก Search Order Item
- ระบบ Default จำนวน = 1
- คลิก Icon แก้ไขจำนวน → ระบุจำนวนใหม่ → กด ✓

---

## Drug Alerts (11 ประเภท)

| # | Alert Type | สัญลักษณ์ | เงื่อนไขที่แสดง | Action |
|---|-----------|----------|---------------|--------|
| 1 | Drug History | 📋 | ดูประวัติยาตั้งแต่สั่ง/จ่าย/บริหารยา | คลิกดูประวัติ |
| 2 | Allergy Alert | ⚠️ | สั่งยาที่ผู้ป่วยมีประวัติแพ้ | คลิกดูระดับความแรงและเหตุผล |
| 3 | High Alert Drug | 🔴 | สั่งยา High Alert | แสดงสัญลักษณ์ |
| 4 | Drug Interaction | ⚡ | สั่งยาที่มีอันตรกิริยาต่อกัน | คลิกดูระดับความแรงและเหตุผล |
| 5 | Pregnancy Alert | 🤰 | สั่งยาในหญิงตั้งครรภ์ | คลิกดูระดับความปลอดภัยและเหตุผล |
| 6 | Lactation Alert | 🍼 | สั่งยาในหญิงให้นมบุตร | คลิกดูระดับความปลอดภัยและเหตุผล |
| 7 | Drug Use Evaluation (DUE) | 🔎 | สั่งยาที่ต้องติดตาม/ประเมินการใช้ | แสดงสัญลักษณ์ |
| 8 | Drug Dosage Limit | ⚖️ | สั่งยาเกินขนาดที่กำหนดในระบบ | คลิกดูรายละเอียดและเหตุผล |
| 9 | Drug Investigation Interaction | 🧪 | ผลทางห้องปฏิบัติการมีผลต่อการใช้ยานั้น | คลิกดูรายละเอียดและเหตุผล |
| 10 | Drug Duplicate | 🔁 | สั่งยาซ้ำ (รายการเดียวกัน/ชนิดเดียวกัน/กลุ่มเดียวกัน) | คลิกดูรายละเอียด; แสดงจำนวนคงเหลือจากครั้งก่อน |
| 11 | Drug To Diagnosis Interaction | 💊🏥 | สั่งยาที่มีผลกับโรคประจำตัว | คลิกดูรายละเอียดและเหตุผล |

*Alert icons แสดงในคอลัมน์ **Alert** บนหน้าจอ Order*

---

## Entry Methods (วิธีการบันทึกคำสั่ง)

### วิธีที่ 1: ORDER DETAILS (Search)

1. ค้นหาจาก Search Order Item
2. คลิกเลือกรายการ
3. ระบุรายละเอียด
4. ระบุ Password → กด Save

### วิธีที่ 2: TICK SHEET

1. คลิกแถบ **TICK SHEET**
2. รายการแสดงแยกตามประเภทแต่ละแถบย่อย
3. คลิก Checkbox หน้าคำสั่งที่ต้องการ (คลิกตัวอักษรสีฟ้า = เลือกทั้งกลุ่ม)
4. กด **Add** → คำสั่งย้ายไปหน้า ORDER DETAILS
5. ตรวจสอบ → ระบุ Password → กด Save

### วิธีที่ 3: FAVORITES (คำสั่งที่ใช้บ่อย)

1. คลิกแถบ **FAVORITES**
2. คลิกเลือกรายการที่ต้องการ → กด Add
3. รายการปรากฏในแถบ ORDER DETAILS
4. ตรวจสอบ → ระบุ Password → กด Save

### วิธีที่ 4: ORDER SET

1. คลิก Search Order Set → ค้นหาและเลือก Order Set
2. รายการใน Order Set แสดงด้านล่าง
3. ตรวจสอบ — คลิก ✕ ถ้าไม่ต้องการบางรายการ
4. ระบุ Password → กด Save

### Password Requirement

**ทุกการ Save ต้องใส่ Password** เพื่อยืนยันตัวตนแพทย์

---

## Cancel Orders (ยกเลิกคำสั่ง)

- ยกเลิกได้เฉพาะคำสั่งที่มีสถานะ **Ordered** เท่านั้น

ขั้นตอน:
1. จากหน้าจอบันทึกคำสั่ง → คลิกแถบ **ORDER PROFILE**
2. คลิกเลือก Checkbox หน้าคำสั่งที่ต้องการ
3. คลิก Icon **Cancel Order**
4. ระบุเหตุผลในการยกเลิก + Comments (เพิ่มเติม)
5. กด Confirm → สถานะเปลี่ยนเป็น **Cancelled**

---

## Repeat Orders (สั่งซ้ำจากประวัติ)

ขั้นตอน:
1. แถบ **ORDER PROFILE** → คลิกเลือก Checkbox หน้าคำสั่งที่ต้องการ
2. คลิก Icon **Repeat Order**
3. รายการย้ายไปแถบ ORDER DETAILS
4. ตรวจสอบ → ระบุ Password → กด Save

---

## Future Orders (คำสั่งล่วงหน้า)

### การสร้างคำสั่งล่วงหน้า (จากหน้าจอนัดหมาย)

1. หน้าจอนัดหมายผู้ป่วย → แถว Future → เลื่อน Toggle เป็น **Add**
2. ค้นหาและเลือกคำสั่งจาก Search Order Item
3. ถ้าต้องการ Order Set → เลื่อน Toggle ที่ Search Order Set เป็น ON
4. รายการแสดงด้านล่าง → กด **Order**

### การนำคำสั่งล่วงหน้ามาใช้

1. จากหน้าจอบันทึกคำสั่ง → คลิกแถบ **FUTURE ORDERS**
2. คลิกเลือก Checkbox คำสั่งที่ต้องการ (เลือกได้เฉพาะสถานะ **Ordered**)
   - สถานะ **Executed** = คำสั่งนั้นถูกนำไปสั่งแล้ว
3. กด **Select** → ระบบแจ้งว่าเลือกคำสั่งล่วงหน้าแล้ว
4. ไปที่แถบ ORDER DETAILS ตรวจสอบ → ระบุ Password → กด Save

### การแก้ไขคำสั่งล่วงหน้า

จากแถบ FUTURE ORDERS → คลิก Edit → แก้ไข → กด Save

### การยกเลิกคำสั่งล่วงหน้า

จากแถบ FUTURE ORDERS → คลิก Cancel → คลิก Confirm ยืนยัน

---

## Package Orders (คำสั่งแบบแพ็คเกจ)

ขั้นตอน:
1. จากหน้าจอบันทึกคำสั่ง → คลิกแถบ **PACKAGE**
2. ค้นหาและเลือก Package จาก Search Package → รายการใน Package แสดงด้านล่าง
3. กด **Add Package** → คลิก Yes เพื่อยืนยัน
4. Package ที่สั่งแสดงในแถบ **ACTIVE PACKAGES**

### ข้อมูลใน ACTIVE PACKAGES

| Column | คำอธิบาย |
|--------|---------|
| Quantity | จำนวนที่ครอบคลุมใน Package |
| Used Qty | จำนวนที่สั่งใช้จาก Package แล้ว |
| Over/Under | จำนวนคงเหลือ / จำนวนที่สั่งเกิน Package |

5. เลือก Checkbox หน้ารายการ (เลือกทั้งหมด = คลิกกล่องแถวเดียวกับ S.No)
6. กด **Order** → ระบบแจ้งให้ไปยืนยันในแถบ ORDER DETAILS
7. ตรวจสอบ → ระบุ Password → กด Save
8. คำสั่งที่สั่งจาก Package จะแสดง Icon 📦 ข้างหน้าคำสั่งในแถบ ORDER PROFILE

### การยกเลิก Package

1. ต้อง **ยกเลิกทุกรายการคำสั่งใน Package ก่อน**
2. จากแถบ ACTIVE PACKAGES → คลิก Delete
3. คลิก Yes ยืนยัน

---

## IPD CPOE — การบันทึกคำสั่งผู้ป่วยใน

จากเมนู IPD EMR ในแฟ้มประวัติผู้ป่วย — หน้าจอแสดงตาราง 3 ช่อง: **DAILY**, **CONTINUOUS**, **PROGRESS NOTES**

### Order Types (ประเภทคำสั่ง IPD)

| Type | ใช้สำหรับ | คำอธิบาย |
|------|----------|---------|
| Daily Order | ทุกประเภท | คำสั่งรายวัน (เหมือน OPD CPOE) |
| Continuous Order | **เฉพาะยา** | ระบบส่งยาอัตโนมัติทุกวันจนกว่า Discontinue; มี Today Dose preview |
| Discharge Medication | ยากลับบ้าน | ยาสำหรับให้ผู้ป่วยพากลับบ้านเมื่อ Discharge |

### Daily Order (IPD)

1. คลิก **+** จากตาราง Daily → เปิดหน้าจอบันทึกคำสั่ง (type = Daily)
2. ทำขั้นตอนเหมือน OPD CPOE

### Continuous Order (ยาต่อเนื่อง)

1. คลิก **+** จากตาราง Continuous → หน้าจอบันทึก (type = Continuous)
   - ถ้าเข้าจากเมนู Orders: ระบบ Default เป็น Daily → ต้องเปลี่ยน Type เป็น **Continuous**
2. ค้นหาและเลือกยา
3. ระบุ Dosage, Route, Frequency
4. ตรวจสอบ **Quantity** = จำนวนที่จ่ายให้ผู้ป่วยในแต่ละวัน
5. ตรวจสอบ **Today Dose** = เวลาบริหารยาวันแรก
6. ระบุ Administration Instruction (สื่อสารกับเภสัชกร/พยาบาล)
7. ระบุ Password → กด Save

### Discharge Medication (ยากลับบ้าน)

1. คลิก **+** จากตาราง Daily หรือเมนู Orders → เปิดหน้าจอบันทึก
2. Type เลือก **Discharge Medication**
3. ค้นหาและเลือกยา → ระบุ Route, Frequency, Quantity
4. ระบุ Administration Instruction (ถ้าต้องการ)
5. ระบุ Password → กด Save

---

## Cancel / Discontinue (IPD)

### Cancel Order (IPD)

ยกเลิกได้เฉพาะ:
- Daily Order สถานะ **Ordered**
- Continuous Order **ที่ยังไม่มีการ Fill ยา**

| กรณี | แถบที่ใช้ |
|------|---------|
| Daily Order | ORDER PROFILE |
| Continuous Order | CONTINUOUS ORDER |

ขั้นตอน:
1. เลือก Checkbox หน้าคำสั่ง → คลิก Icon Cancel Order
2. ระบุเหตุผล + Comments
3. กด Confirm → สถานะ → **Cancelled**

### Discontinue Order (หยุดคำสั่ง)

ใช้เมื่อสถานะคำสั่งเปลี่ยนจาก Order เป็นสถานะตามประเภทแล้ว (ไม่สามารถ Cancel ได้อีก)

| Order Type | วิธี Discontinue |
|------------|----------------|
| Daily Order | คลิก Discontinue → ระบุ **Discontinue Reason** + Comments → กด Confirm |
| Continuous Order | คลิก Stop → ระบุ **End Time** (Default = ปัจจุบัน) → กด Confirm |

หลัง Discontinue:
- Daily Order: แสดงเป็น **สีเทา**
- Continuous Order: แสดง "(Closed)" ที่ชื่อยา + ตัวอักษรสีแดง + เวลาหยุด + ชื่อผู้ที่ Close

---

## CONTINUOUS ORDER Tab

| Feature | คำอธิบาย |
|---------|---------|
| ดูคำสั่งปัจจุบัน | Default แสดงคำสั่ง ณ ปัจจุบัน |
| เลือกวันที่ | คลิกวันที่ → เลือกวันที่ต้องการดูประวัติ |
| Daily Fills | คลิก "+" เพื่อดูรายการยา Continuous ที่จ่ายให้ผู้ป่วยในแต่ละวัน |
| ดูประวัติ | คลิกเลือกคำสั่ง → คลิก Icon ดูประวัติ |

- คำสั่งที่ถูกยกเลิก: แสดงสีเทา
- คำสั่งที่หยุดใช้: แสดง End Date ในคอลัมน์
- คำสั่งที่ไม่มี End Date: เภสัชกรส่งยา Continuous ให้ทุกวัน

---

## ORDER PROFILE

ดูรายการคำสั่งทั้งหมด พร้อม 6 วิธีจัดกลุ่ม:

| Group By | คำอธิบาย |
|----------|---------|
| Department | จัดกลุ่มตามแผนกที่สั่ง |
| Careprovider | จัดกลุ่มตามแพทย์ที่สั่ง |
| Order Category | จัดกลุ่มตามประเภทคำสั่ง |
| Status | จัดกลุ่มตามสถานะ |
| Date | จัดกลุ่มตามวันที่ |
| Order Number | จัดกลุ่มตามเลขที่คำสั่ง |

Filter: ค้นหาคำสั่งตาม Order Item ได้

### Action Icons บน ORDER PROFILE

| Icon | Action | เงื่อนไข |
|------|--------|---------|
| Audit | ดูประวัติการแก้ไข | — |
| Cancel | ยกเลิกคำสั่ง | สถานะ Ordered เท่านั้น |
| Attach | แนบเอกสาร | — |
| Repeat | สั่งซ้ำ | — |
| Discontinue | หยุดใช้คำสั่ง | หลังจากสถานะเปลี่ยนจาก Ordered แล้ว |

---

## Favorite Setup (ตั้งค่าคำสั่งที่ใช้บ่อย)

1. จากหน้าจอบันทึกคำสั่ง → คลิกแถบ **FAVORITES**
2. ค้นหาคำสั่งจาก Search Order Item → คลิกเลือก
3. ระบบแสดงรายการที่เลือก จัดตามประเภทคำสั่ง (Order Category)
4. กรณียา: ระบบแสดงหน้าจอรายละเอียดสั่งยา → ระบุ Route, Frequency, Duration, Quantity ที่ใช้บ่อย → กด Save
5. ออกจากหน้าจอได้โดยคลิกที่เมนูอื่น

### การลบ Favorite

- ลบรายการเดียว: คลิก Checkbox หน้ารายการ → กด Delete
- ลบทั้งประเภทคำสั่ง: คลิก Checkbox ที่หน้าประเภทคำสั่ง → กด Delete

---

## Button Actions

| Button | Action | เงื่อนไข | ผลลัพธ์ |
|--------|--------|----------|--------|
| Save (Orders) | บันทึกคำสั่ง | ต้องใส่ Password | คำสั่งถูกสร้าง สถานะ = Ordered |
| Cancel Order | ยกเลิก | สถานะ Ordered เท่านั้น | สถานะ → Cancelled |
| Repeat | สั่งซ้ำ | — | copy รายการไป ORDER DETAILS |
| Discontinue (Daily) | หยุดคำสั่ง | ต้องระบุ Reason | สถานะ → Discontinued |
| Discontinue (Continuous) | หยุดยา | ต้องระบุ End Time | แสดง Closed + สีเทา |
| Add Package | เพิ่ม Package | เลือก Package แล้ว | เปิด ACTIVE PACKAGES |
| Cancel Package | ยกเลิก Package | ยกเลิกทุกรายการใน Package ก่อน | Package ถูกลบ |
| Select (Future) | นำคำสั่งล่วงหน้ามาใช้ | สถานะ Ordered เท่านั้น | ย้ายไป ORDER DETAILS |

---

## Permissions

| Action | Role | หมายเหตุ |
|--------|------|---------|
| บันทึก Order (Self) | แพทย์ | Default |
| บันทึก Order (On behalf of) | เจ้าหน้าที่/พยาบาล | ต้องระบุวิธีรับคำสั่ง |
| แก้ไข Unit Price (Doctor Fee) | แพทย์ | ภายในขอบเขตที่กำหนด |
| Cancel Order | ผู้สั่งหรือผู้มีสิทธิ์ | สถานะ Ordered เท่านั้น |
| Discontinue Order | แพทย์ | — |
| ตั้งค่า Favorite | แพทย์แต่ละคน | Favorite เป็นรายบุคคล |

---

## Error / Edge Cases

- **Continuous Order ไม่มี End Date**: เภสัชกรจ่ายยาทุกวันอัตโนมัติ — ต้องระบุ Discontinue เมื่อต้องการหยุด
- **Cancel หลัง Fill**: Continuous Order ที่มีการ Fill ยาแล้ว ไม่สามารถ Cancel ได้ — ต้อง Discontinue
- **Package Cancel**: ต้องยกเลิกทุกรายการใน Package ก่อนจึงจะ Cancel Package ได้
- **Future Order Executed**: คำสั่งล่วงหน้าสถานะ Executed = ถูกนำไปสั่งใช้แล้ว เลือกซ้ำไม่ได้
- **Drug Duplicate**: ระบบแสดงจำนวนคงเหลือจากการสั่งครั้งก่อนที่หน้า Order อัตโนมัติ
- **Taper Dose**: ต้องระบุ Dose ที่ 1 ก่อนเสมอ แล้วจึงกด Add Taper Dose
- **Order Set**: ถ้าไม่ต้องการบางรายการใน Set → คลิก ✕ ออกก่อน Save
- **Password**: ถ้าไม่ระบุ Password จะ Save ไม่ได้ทุกกรณี

---

## Integration Points

| Module | Integration |
|--------|-------------|
| [[EMR Doctor]] | Entry point — เข้าสั่งการรักษาจากหน้า EMR |
| [[Pharmacy]] | รับใบสั่งยา → Dispensing workflow; Drug Alerts |
| [[LAB]] | รับคำสั่ง Lab → Lab workflow |
| [[XRAY]] | รับคำสั่ง Radiology → Radiology workflow |
| [[Billing]] | คำสั่งการรักษา → charges ส่งเข้า Billing |
| [[OPD]] / [[IPD]] | Nursing Worklist — พยาบาลดำเนินการตามคำสั่ง |
| [[Admission]] | Pre-Admit Daily/Continuous Orders |
