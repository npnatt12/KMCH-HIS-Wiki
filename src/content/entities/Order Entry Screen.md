---
title: Order Entry Screen
type: entity
sources: ["18.MEDHIS Manual_Order V.2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, order, cpoe, screen, drug-alerts]
roles: [Doctor, Pharmacist]
verified-on-uat: pending
---

# Order Entry Screen — หน้าจอบันทึกคำสั่งการรักษา (CPOE)

## Purpose

หน้าจอกลางสำหรับบันทึกคำสั่งการรักษาทุกประเภท — Lab, Radiology, Procedure, Doctor Fee, ยา, วัสดุ ทั้ง OPD และ IPD

## Access Path

- **EMR Doctor → Order icon** (จากหน้าจอ Worklist)
- **EMR Doctor → View OPD EMR → Order menu**
- **IPD EMR → Daily/Continuous ตาราง → กด +**

---

## Screen Header Fields

| Field | Default | คำอธิบาย |
|-------|---------|---------|
| Type | Daily | ประเภทคำสั่ง: Daily / Continuous / Discharge Medication |
| Order by | Self | Self (แพทย์) หรือ On behalf of (เจ้าหน้าที่) |
| Receive Method | — | Telephonic / Verbal / Written (เฉพาะ On behalf of) |
| Department | — | แผนกที่สั่งคำสั่ง |

---

## Tabs (7 แถบ)

| Tab | คำอธิบาย |
|-----|---------|
| ORDER DETAILS | ค้นหาและสั่งรายการโดยตรง (Default) |
| TICK SHEET | เลือก Checkbox จากรายการสำเร็จรูป |
| FAVORITES | รายการโปรดพร้อม pre-configured dosage |
| ORDER SET | ชุดคำสั่งสำเร็จรูป |
| FUTURE ORDERS | คำสั่งล่วงหน้าจาก Appointment |
| PACKAGE | คำสั่งแบบ Package |
| ORDER PROFILE | ดูรายการคำสั่งทั้งหมด |

---

## ORDER DETAILS Tab — Fields

### Search Area

| Field | คำอธิบาย |
|-------|---------|
| Search Order Item | ค้นหารายการคำสั่ง |
| Search Order Set | ค้นหา Order Set (Toggle On/Off) |

### Medicine Order Fields

| Field | Required | คำอธิบาย |
|-------|----------|---------|
| Drug Name | ✓ | ชื่อยา |
| Dosage | ✓ | ขนาดยา |
| Route | ✓ | ช่องทางการให้ยา |
| Frequency | ✓ | ความถี่ |
| Duration | ○ | ระยะเวลา (auto-calc Quantity) |
| Quantity | ○ | จำนวน |
| Administration Instruction | ○ | วิธีใช้เพิ่มเติม |
| Refill | ○ | จำนวนครั้ง Refill |
| Nursing Instruction | ○ | ข้อความสื่อสารกับพยาบาล |
| Priority | ○ | Stat = ด่วน |
| Alert Column | — | แสดง Drug Alert Icons (11 ประเภท) |

### Lab/Radiology/Procedure Fields

| Field | Required | คำอธิบาย |
|-------|----------|---------|
| Order Item | ✓ | รายการที่สั่ง |
| Nursing Instruction | ○ | ข้อความสื่อสาร |
| Priority | ○ | Stat = ด่วน |

### Doctor Fee Fields

| Field | Required | คำอธิบาย |
|-------|----------|---------|
| Fee Item | ✓ | รายการค่าแพทย์ |
| Unit Price | ✓ | ราคา (แก้ไขได้ภายในขอบเขต) |

---

## Drug Alert Icons (11 ประเภท)

| Icon | Alert Type | เงื่อนไข |
|------|-----------|---------|
| 📋 | Drug History | แสดงประวัติยา (สั่ง/จ่าย/บริหาร) |
| ⚠️ | Allergy Alert | ผู้ป่วยมีประวัติแพ้ยานั้น |
| 🔴 | High Alert Drug | ยา High Alert |
| ⚡ | Drug Interaction | ยามีอันตรกิริยาต่อกัน |
| 🤰 | Pregnancy Alert | ผู้ป่วยตั้งครรภ์ |
| 🍼 | Lactation Alert | ผู้ป่วยให้นมบุตร |
| 🔎 | Drug Use Evaluation | ยาต้องติดตาม/ประเมิน |
| ⚖️ | Drug Dosage Limit | เกินขนาดที่กำหนด |
| 🧪 | Drug Investigation Interaction | ผลแลปมีผลต่อยา |
| 🔁 | Drug Duplicate | สั่งยาซ้ำ (แสดงจำนวนคงเหลือด้วย) |
| 💊🏥 | Drug To Diagnosis | ยามีผลกับโรคประจำตัว |

---

## PACKAGE Tab — Fields

| Field | คำอธิบาย |
|-------|---------|
| Search Package | ค้นหา Package |
| Package Name | ชื่อ Package ที่เลือก |
| Quantity | จำนวนที่ครอบคลุมใน Package |
| Used Qty | จำนวนที่ใช้แล้ว |
| Over/Under | คงเหลือ / เกิน Package |

---

## CONTINUOUS ORDER Tab (IPD)

| Field | คำอธิบาย |
|-------|---------|
| Date selector | เลือกวันที่ดูประวัติ |
| Today Dose | เวลาบริหารยาวันแรก |
| End Date | วันที่หยุดคำสั่ง (ถ้า Discontinue แล้ว) |
| Closed status | ยาที่หยุดแล้ว — แสดงสีเทา + "(Closed)" |

---

## Buttons

| Button | Action | เงื่อนไข |
|--------|--------|---------|
| Save | บันทึกคำสั่ง | ต้องใส่ Password |
| + (Add Row) | เพิ่มรายการ | — |
| ✕ (Delete) | ลบรายการ | — |
| Add Taper Dose | เพิ่ม Taper | เฉพาะยา |
| Add Package | ยืนยัน Package | หลังเลือก Package |
| Select (Future) | นำคำสั่งล่วงหน้ามาใช้ | สถานะ Ordered |
| Cancel Order | ยกเลิก | สถานะ Ordered เท่านั้น |
| Repeat Order | สั่งซ้ำ | จาก ORDER PROFILE |
| Discontinue | หยุดคำสั่ง | Daily: ระบุ Reason; Continuous: ระบุ End Time |

---

## Related Workflows

- Order Entry Module — รายละเอียดครบถ้วน
- EMR Doctor Module — Entry point
- Drug Alert Popup — Popup แจ้งเตือนยา
- [Pharmacy](/modules/pharmacy/) — Dispensing workflow
