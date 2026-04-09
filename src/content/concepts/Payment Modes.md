---
title: Payment Modes
type: concept
sources: ["5.MEDHIS Manual_Billing V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [concept, billing, payment, finance]
---

# Payment Modes (รูปแบบการชำระเงิน)

MEDHIS รองรับการชำระเงิน **5 รูปแบบ** ในระบบ [[Billing]] ทั้ง OP และ IP

รองรับ **mixed payment** — สามารถเพิ่มหลายรูปแบบต่อ 1 ใบเสร็จด้วยปุ่ม +/−

---

## 5 รูปแบบการชำระ

### 1. Cash (เงินสด)

| Field | Required | หมายเหตุ |
|-------|----------|---------|
| Amount | Yes | Default = ยอดรวมทั้งหมด (สามารถแก้ไขได้เมื่อ mixed payment) |

### 2. EDC (Electronic Data Capture — เครื่องรูดบัตร)

| Field | Required | หมายเหตุ |
|-------|----------|---------|
| Enable EDC toggle | Yes | เปิดเพื่อเชื่อมต่อเครื่อง EDC |
| EDC Config | Yes | เลือก Terminal ที่ต้องการ |
| Parameter | Yes | ค่า Parameter ของ EDC |

- ระบบส่งข้อมูลไปเครื่อง EDC โดยตรง (Direct integration)

### 3. Credit Card (บัตรเครดิต)

| Field | Required | หมายเหตุ |
|-------|----------|---------|
| Card Type | Yes | Visa / MasterCard / ฯลฯ |
| Card Holder Name | Yes | ชื่อเจ้าของบัตร |
| Card Number (4 ตัวท้าย) | Yes | เลข 4 หลักท้ายบัตร |
| Bank Name | Yes | ธนาคารผู้ออกบัตร |
| Expiry Month | Yes | เดือนหมดอายุ |
| Expiry Year | Yes | ปีหมดอายุ |

### 4. Transfer (โอนเงิน)

| Field | Required | หมายเหตุ |
|-------|----------|---------|
| Bank Name | Yes | ธนาคารที่โอน |
| Date | Yes | วันที่โอน |
| Transaction Number | Yes | เลขที่อ้างอิงสลิปโอน |

### 5. Cheque (เช็ค)

| Field | Required | หมายเหตุ |
|-------|----------|---------|
| Bank Name | Yes | ธนาคารที่ออกเช็ค |
| Due Date | Yes | วันที่ระบุในเช็ค |
| Transaction Number | Yes | เลขที่เช็ค |

---

## Mixed Payment (ชำระหลายรูปแบบ)

- กดปุ่ม **+** เพิ่มรูปแบบการชำระ
- กดปุ่ม **−** ลบรูปแบบที่ไม่ต้องการ
- ยอดรวมทุกรูปแบบต้องครบตามยอดค่ารักษา

ตัวอย่าง: Cash 500 บาท + Credit Card (ส่วนที่เหลือ) ต่อ 1 ใบเสร็จ

---

## การใช้ Deposit (เงินมัดจำ) ร่วมกับการชำระ

- ถ้าผู้ป่วยมียอดมัดจำ ระบบแสดง **Available Deposit Amount**
- Checkbox **"Use Deposit?"** → เปิดหน้า Use Deposit → เลือกรายการตาม Internal Comment → ระบุ Use Amount → Apply → Settle

---

## เอกสารที่ออก

| เอกสาร | เมื่อใช้ |
|--------|---------|
| **Receipt** (ใบเสร็จ) | ผู้ป่วยชำระเอง — เลือก Payment Mode แล้ว Settle |
| **Invoice** (ใบแจ้งหนี้) | ประกัน/บริษัทคู่สัญญา — เลือก Payor Agreement แล้ว Settle |

- Print: ภาษาไทย/อังกฤษ
- Export: Excel/CSV
- รูปแบบเอกสาร: ใบสรุปค่าใช้จ่าย / รายละเอียดค่าใช้จ่าย

---

## ที่ใช้งาน

- [[Billing]] → OP Billing / IP Settlement → Settle step
- [[Billing Settlement Screen]] — หน้าจอชำระเงินแสดงทุก Payment Mode
- [[Billing]] → Deposit — รับ/ตัดใช้/คืนเงินมัดจำ (ใช้ Payment Mode เดียวกัน)
