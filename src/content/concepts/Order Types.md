---
title: Order Types
type: concept
sources: ["18.MEDHIS Manual_Order V.2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [concept, order-entry, cpoe, ipd, opd]
roles: [Doctor, NurseIPD, NurseOR, Pharmacist]
verified-on-uat: pending
---

# Order Types (ประเภทคำสั่งการรักษา)

ประเภทคำสั่งในระบบ [[Order Entry]] (CPOE) กำหนดพฤติกรรมการจ่ายยาและวงจรชีวิตของคำสั่ง

---

## OPD Order Types

| Type | ใช้กับ | ลักษณะ |
|------|--------|--------|
| **Daily** | ทุกประเภทรายการ | Default type สำหรับ OPD; คำสั่งรายวัน — สั่งครั้งเดียวสำหรับ visit นั้น |

ใน OPD ทุกรายการเป็น **Daily** เป็นหลัก ความแตกต่างอยู่ที่ **Priority** และ **Refill count**

---

## IPD Order Types (4 ประเภทหลัก)

ระบบ IPD CPOE แสดงตาราง 3 ช่อง: **DAILY**, **CONTINUOUS**, **PROGRESS NOTES**

### 1. Daily Order

| ลักษณะ | รายละเอียด |
|--------|-----------|
| ใช้กับ | ทุกประเภทรายการ (Lab, Radiology, ยา, Doctor Fee, เวชภัณฑ์) |
| วงจรชีวิต | สั่งครั้งเดียว → จ่าย → สิ้นสุด |
| ยกเลิก | Cancel ได้เฉพาะสถานะ **Ordered**; ถ้าสถานะเปลี่ยนแล้วต้องใช้ **Discontinue** |
| Discontinue | ระบุ **Discontinue Reason** + Comments → Confirm → แสดงสีเทา |
| เข้าถึง | คลิก + จากตาราง DAILY หรือ เมนู Orders (Default type = Daily) |

### 2. Continuous Order

| ลักษณะ | รายละเอียด |
|--------|-----------|
| ใช้กับ | **เฉพาะยา** ที่ตั้ง Drug Master ว่าอนุญาต IP Fill |
| วงจรชีวิต | สั่งครั้งเดียว → ระบบส่งยาอัตโนมัติ **ทุกวัน** จนกว่า Discontinue |
| Today Dose | ระบุ/ดูเวลาบริหารยาวันแรก |
| End Date | ถ้าไม่มี End Date = เภสัชกรส่งยาต่อเนื่องทุกวัน |
| ยกเลิก | Cancel ได้เฉพาะ **ก่อน Fill ยา**; หลัง Fill ต้องใช้ Stop (ระบุ End Time) |
| Discontinue | คลิก Stop → ระบุ **End Time** (default = ปัจจุบัน) → แสดง "(Closed)" + สีแดง + เวลาหยุด |
| IP Fill | [[Pharmacy]] Generate IP Fill รายคนหรือทั้ง Ward |
| เข้าถึง | คลิก + จากตาราง CONTINUOUS หรือ เมนู Orders → เปลี่ยน Type เป็น Continuous |

### 3. Discharge Medication (ยากลับบ้าน)

| ลักษณะ | รายละเอียด |
|--------|-----------|
| ใช้กับ | ยาสำหรับให้ผู้ป่วยพากลับบ้านเมื่อ Discharge |
| วงจรชีวิต | สั่งช่วงก่อน/ระหว่าง Discharge Process |
| Field | Route, Frequency, Quantity, Administration Instruction |
| เข้าถึง | เมนู Orders → Type = **Discharge Medication** |

---

## Special Order Entry Modes

### 4. Future Orders (คำสั่งล่วงหน้า)

| ลักษณะ | รายละเอียด |
|--------|-----------|
| ใช้กับ | ทุกประเภท — สำหรับ visit ครั้งถัดไป (นัดหมาย) |
| สร้าง | หน้าจอนัดหมาย → แถว Future → Toggle เป็น Add → เลือกรายการ → Order |
| ใช้งาน | แถบ **FUTURE ORDERS** → เลือก Checkbox (เฉพาะสถานะ Ordered) → Select → ไปที่ ORDER DETAILS → Save |
| สถานะ | **Ordered** = พร้อมนำมาใช้; **Executed** = ถูกนำไปสั่งแล้ว |
| แก้ไข/ยกเลิก | จาก FUTURE ORDERS → Edit / Cancel + Confirm |

### 5. Package Orders (คำสั่งแบบแพ็คเกจ)

| ลักษณะ | รายละเอียด |
|--------|-----------|
| ใช้กับ | ชุดรายการที่กำหนดจำนวน Quota ไว้ล่วงหน้า |
| tracking | Quantity (โควต้า), Used Qty (ใช้แล้ว), Over/Under (คงเหลือ/เกิน) |
| สร้าง | แถบ PACKAGE → Search Package → Add Package → Order |
| ยกเลิก Package | ต้องยกเลิกทุกรายการคำสั่งใน Package ก่อน → Delete Package |
| สัญลักษณ์ | Icon 📦 แสดงที่หน้ารายการใน ORDER PROFILE |

---

## Order Status Flow (ทุกประเภท)

```
[Save + Password] → Ordered
  ↓ (ประมวลผลโดยแผนกที่เกี่ยวข้อง)
สถานะถัดไปตามประเภทรายการ (Dispensed / Specimen Collected / Registered ฯลฯ)
  ↓ (ถ้าต้องการหยุดหลังสถานะเปลี่ยน)
Discontinued / Closed
```

ยกเลิก Cancel ได้เฉพาะสถานะ **Ordered** เท่านั้น

---

## สรุปเปรียบเทียบ

| Type | บริบท | Auto-repeat | ยกเลิก (Cancel) | หยุด (Discontinue) |
|------|-------|-------------|----------------|--------------------|
| Daily | OPD + IPD | ไม่ | Ordered เท่านั้น | ได้ (Reason required) |
| Continuous | IPD เฉพาะยา | ทุกวัน | ก่อน Fill เท่านั้น | Stop → End Time |
| Discharge Medication | IPD ตอน Discharge | ไม่ | Ordered เท่านั้น | ได้ |
| Future Orders | OPD/IPD ล่วงหน้า | ไม่ | Ordered เท่านั้น | — |
| Package | OPD/IPD | ไม่ | ยกเลิกทุกรายการก่อน | — |

---

## ที่ใช้งาน

- [[Order Entry]] → [[Order Entry Screen]] — ทุกประเภท
- [[Pharmacy]] → IP Fill รองรับเฉพาะ Continuous Order
- [[EMR Doctor]] → Doctor Worklist → เข้า Order Entry
- [[Appointment System]] — สร้าง Future Orders จากหน้านัดหมาย
