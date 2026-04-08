---
title: Order Entry Module
type: module
sources: ["18.MEDHIS Manual_Order V.2.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [module, order, cpoe, prescription, drug-alerts]
---

# Order Entry — ระบบคำสั่งการรักษา (CPOE)

## Purpose

บันทึกคำสั่งการรักษาทุกประเภท — ครอบคลุม Lab, Radiology, procedures, services, ค่าแพทย์, ยา, วัสดุสิ้นเปลือง ทั้ง OPD และ IPD

## Access

เข้าจาก **[[EMR Doctor]] → Order icon** หรือ **Menu**

## OPD CPOE

### Entry Tabs

| Tab | Description |
|-----|-------------|
| ORDER DETAILS | ค้นหาและสั่งรายการโดยตรง (Search) |
| TICK SHEET | เลือกจากรายการ checkbox สำเร็จรูป |
| FAVORITES | รายการที่แพทย์ใช้บ่อย (pre-configured dosage) |
| ORDER SET | ชุดคำสั่งสำเร็จรูป |
| FUTURE ORDERS | คำสั่งล่วงหน้า (จาก Appointment) |
| PACKAGE | คำสั่งแบบ Package |
| ORDER PROFILE | ดูรายการคำสั่งทั้งหมด |

### Order Categories

#### Lab / Radiology / Procedures / Services
ค้นหาด้วยชื่อหรือรหัส

#### Doctor Fee
ค่าตอบแทนแพทย์ — **Unit Price แก้ไขได้** ภายในขอบเขตที่กำหนด (limits)

#### Medicine Orders (คำสั่งยา)

| Field | Description |
|-------|-------------|
| Dosage | ขนาดยา |
| Route | ช่องทางการให้ยา |
| Frequency | ความถี่ |
| Duration | ระยะเวลา |
| Quantity | จำนวน (auto-calc: Dosage x Frequency x Duration) |
| Refill | จำนวนครั้งเติมยา (เชื่อมกับ [[Pharmacy|OP Refills]]) |
| Taper Dose | ลดขนาดยาเป็นขั้น |

**Drug Alerts (11 ประเภท):** Allergy, High Alert, Drug Interaction, Pregnancy, Lactation, DUE, Dosage Limit, Drug-Investigation, Drug Duplicate, Drug-Diagnosis, Drug-To-Diagnosis

(รายละเอียดเต็ม → [[Pharmacy#Drug Alerts (11 ประเภท)|Pharmacy — Drug Alerts]])

#### Medical Supplies
วัสดุสิ้นเปลือง — default quantity = 1

### Password Requirement

**ทุกการ Save ต้องใส่ Password** เพื่อยืนยันตัวตนแพทย์

### Cancel Orders

- ยกเลิกได้เฉพาะสถานะ **Ordered** เท่านั้น
- ต้องระบุ **เหตุผล** (Reason) ในการยกเลิก

### Repeat Orders

สั่งซ้ำจาก **ORDER PROFILE** — คัดลอกคำสั่งเก่ามาสร้างใหม่

### Future Orders

สั่งล่วงหน้าจากหน้าจอ **Appointment** — คำสั่งจะรอดำเนินการเมื่อถึงวันนัด (เชื่อมกับ [[Pharmacy|Pending Medicine]])

### Package Orders

คำสั่งแบบ Package:
- ติดตาม **Quantity / Used / Over-Under**
- การยกเลิก Package: ต้อง **ยกเลิกทุกรายการใน Package ก่อน** จึงจะยกเลิก Package ได้

## IPD CPOE

### Order Types

| Type | Description |
|------|-------------|
| Daily Order | คำสั่งรายวัน (เหมือน OPD CPOE) |
| Continuous Order | คำสั่งต่อเนื่อง (**เฉพาะยา**) — ระบบสร้าง Daily Order อัตโนมัติทุกวันจนกว่า discontinue; มี **Today Dose** preview |
| Discharge Medication | ยากลับบ้าน |

### Discontinue Order

| Order Type | Method |
|------------|--------|
| Daily Order | ระบุ **Reason** → ยกเลิก |
| Continuous Order | ระบุ **End Time** → แสดงเป็นสีเทา + ข้อความสีแดง + "Closed" |

### CONTINUOUS ORDER Tab

- ดู **Daily Fills** ที่ generate จาก Continuous Order
- ดู **History** ของ Continuous Order

## ORDER PROFILE

ดูรายการคำสั่งทั้งหมด พร้อม 6 วิธีจัดกลุ่ม:

| Group By | Description |
|----------|-------------|
| Department | จัดกลุ่มตามแผนก |
| Careprovider | จัดกลุ่มตามแพทย์ |
| Order Category | จัดกลุ่มตามประเภทคำสั่ง |
| Status | จัดกลุ่มตามสถานะ |
| Date | จัดกลุ่มตามวันที่ |
| Order Number | จัดกลุ่มตามเลขคำสั่ง |

ตัวกรอง:
- กรองตาม **Item** ได้

Action icons บน Order Profile:
- **Audit** — ดูประวัติการแก้ไข
- **Cancel** — ยกเลิกคำสั่ง
- **Attach** — แนบเอกสาร
- **Repeat** — สั่งซ้ำ
- **Discontinue** — หยุดคำสั่ง

## Favorite Setup

ตั้งค่ารายการโปรด พร้อม pre-configured dosage:
- ขนาดยา, ความถี่, ช่องทาง กำหนดไว้ล่วงหน้า
- ลดเวลาการสั่งยาที่ใช้บ่อย

## Integration Points

| Module | Integration |
|--------|-------------|
| [[EMR Doctor]] | Entry point — เข้าสั่งการรักษาจากหน้า EMR |
| [[Pharmacy]] | รับใบสั่งยา → Dispensing workflow |
| [[LAB]] | รับคำสั่ง Lab → Lab workflow |
| [[XRAY]] | รับคำสั่ง Radiology → Radiology workflow |
| [[Billing]] | คำสั่งการรักษา → charges ส่งเข้า Billing |
| [[OPD]] / [[IPD]] | Nursing Worklist — พยาบาลดำเนินการตามคำสั่ง |
