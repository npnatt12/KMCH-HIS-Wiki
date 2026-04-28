---
title: OP Billing Workflow
type: workflow
sources: ["5.MEDHIS Manual_Billing V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [workflow, billing, finance]
roles: [AdminSystem]
verified-on-uat: pending
---

# กระบวนการออกบิลผู้ป่วยนอก (OP Billing Workflow)

ขั้นตอนการออกเอกสารทางการเงินสำหรับผู้ป่วยนอกใน [[Billing]] module

## ขั้นตอน

### 1. ผู้ป่วยมาถึงการเงิน
- ผู้ป่วย Medical Discharge จาก [[OPD]] / [[ER]]
- ชื่อแสดงใน **OP Cashier Worklist** → Tab Medical Discharges

### 2. Lock (ล็อคผู้ป่วย)
- กดรูป **แม่กุญแจ** → Status เปลี่ยนเป็น **Billing In Progress**
- แผนกอื่นสั่ง/ยกเลิกรายการไม่ได้

### 3. Allocate Bill
- กด **Allocate Bill** → ระบบแสดงค่ารักษาแยกตาม[[Payor and Treatment Rights|สิทธิ์]]

### 4. Modify Payor (ถ้าจำเป็น)
- กด **Modify Payor** → เพิ่ม/แก้ไขสิทธิ์ → จัดเรียง **Rank** → Save

### 5. Allocate All (คำนวณใหม่)
- กด **Allocate All** → เลือก Payor → **Allocate**
- ระบบคำนวณตาม Rank 1 ก่อน → รายการไม่คุ้มครองตกไป Rank ถัดไป
- กด **Auto Allocate** อีกครั้งถ้ามีรายการไม่คุ้มครอง

### 6. Generate Bill
- กด **Generate Bill** → ระบบออกเอกสาร

### 7. Settle (ชำระเงิน)
- **Invoice** (ใบแจ้งหนี้): สำหรับประกัน/บริษัท → เลือก Payor → Settle → Print
- **Receipt** (ใบเสร็จ): สำหรับชำระเอง → เลือก Payment Mode (Cash/EDC/Credit Card/Transfer/Cheque) → Settle → Print
- รองรับ **mixed payment** ต่อ 1 ใบเสร็จ
- Print: Thai/English, Export Excel/CSV

### 8. Financial Discharge
- ชำระเสร็จ → ผู้ป่วยจำหน่ายทางการเงิน

## Flow Diagram

```
Medical Discharge → Lock → Allocate → [Modify Payor] → Allocate All → Generate Bill → Settle → Financial Discharge
```

## Modules Involved

- [[OPD]] / [[ER]] — ต้นทาง Medical Discharge
- [[Registration]] — Payor Details
- [[Pharmacy]] — Drug order status ต้องพร้อม
