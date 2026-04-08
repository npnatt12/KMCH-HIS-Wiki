---
title: Billing — Finance Module
type: module
sources: ["5.MEDHIS Manual_Billing V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [module, billing, finance, payment]
---

# Billing — ระบบงานการเงิน (OP Billing & IP Billing)

## Purpose

ระบบการเงินสำหรับออกเอกสารค่ารักษาพยาบาล ชำระเงิน จัดการเงินมัดจำ และติดตามผู้ป่วยค้างชำระ ทั้งผู้ป่วยนอก (OP) และผู้ป่วยใน (IP)

## Access

- **OP Billing** → OP Cashier Worklist
- **IP Billing** → IP Cashier Worklist

## OP Billing

### OP Cashier Worklist

หน้าจอหลักแสดงผู้ป่วยที่ Medical Discharge แล้ว:
- Tab **Medical Discharges** — 2 สถานะ: Medical Discharge / Billing In Progress
- Tab **Bills** — เอกสารที่ออกแล้ว
- Tab **Deposit** — เงินมัดจำ

ค้นหาด้วย: Discharged From/To, Department, Careprovider, Search Patient, Incl.Financial Dischg.

### [[OP Billing Workflow]] (กระบวนการออกบิล)

1. **Lock** — กดรูปแม่กุญแจ → เปลี่ยน Medical Discharge → **Billing In Progress** (แผนกอื่นสั่ง/ยกเลิกรายการไม่ได้)
2. **Allocate Bill** — ระบบแสดงค่ารักษาแยกตามสิทธิ์
3. **Modify Payor** (ถ้าจำเป็น) — เพิ่ม/แก้ไขสิทธิ์ จัดเรียง Rank → Save
4. **Allocate All** — เลือก Payor → Allocate → ระบบคำนวณใหม่ตาม Rank (รายการไม่คุ้มครองตกไป Rank ถัดไป)
5. **Generate Bill** — ออกเอกสาร
6. **Settle** — ชำระเงิน

### Bill Types

| Type | Use Case | Triggered By |
|------|----------|-------------|
| **Invoice** (ใบแจ้งหนี้) | ประกัน / บริษัทคู่สัญญา | เลือก Payor agreement → Settle |
| **Receipt** (ใบเสร็จ) | ผู้ป่วยชำระเอง | เลือก Payment Mode → Settle |

### Payment Modes

| Mode | Key Fields |
|------|------------|
| **Cash** | Amount |
| **EDC** | Enable EDC → EDC Config → Parameter → Settle (ส่งข้อมูลไปเครื่อง EDC) |
| **Credit Card** | Card Type, Holder Name, Card Number (4 ตัวท้าย), Bank, Expiry |
| **Transfer** | Bank Name, Date, Transaction Number |
| **Cheque** | Bank Name, Due Date, Transaction Number |

- รองรับ **mixed payment** — เพิ่ม/ลบประเภทการจ่ายด้วย +/- ต่อ 1 ใบเสร็จ
- Print: Thai/English, Export Excel/CSV

### Drug Order Status Check

ก่อนออกบิล รายการยาต้องมี status: **Registered**, **Allocated**, หรือ **Dispensed** (ไม่ใช่ Ordered) — แถบสีแดงถ้ายังไม่จัดยา

### Cancel Bill

- ยกเลิกได้ภายใน **24 ชั่วโมง**
- Bills tab → เลือกเอกสาร → Cancel → เลือก Cancel Reason + Comments → Save
- ผู้ป่วยย้ายกลับ Medical Discharge เพื่อออกบิลใหม่

## Deposit (เงินมัดจำ)

### รับเงินมัดจำ
OP Billing → Deposits → Search Patient → ระบุ:
- **Towards**: General / Billing Group / Department / Encounter (OPD/IPD only)
- **Payment Mode**, **Amount**, **Paid By**, **Comments**, **Internal Comments**

### ตัดใช้เงินมัดจำ (Use Deposit)
- ออกบิลปกติ → Available Deposit Amount แสดง → Checkbox "Use Deposit" → เลือกรายการ → Apply → Settle

### คืนเงินมัดจำ (Refund)
- OP Cashier Worklist → Deposit tab → Search → เลือกรายการ → Refund → ระบุ Refund Amount + Payment Mode + Reason → Save

## Interim Bill (แบ่งชำระ)

- OP Cashier Worklist → Lock → Interim Bill icon
- **Split by**: Billing Group / Careprovider / Department
- เลือกรายการ → ดึงข้อมูล → Settle → Print
- Status กลับเป็น Medical Discharge อัตโนมัติหลังออกเอกสาร

## Bill History

OP Billing → Bill History → Search patient:
- **Summary** — Deposit, Credit Note, Bills, Outstanding Payments
- **Bills** — ใบเสร็จ/ใบแจ้งหนี้ทั้งหมด
- **Deposits** — รับ/ตัดใช้/ยกเลิก/คืนเงินมัดจำ

## Unbilled Patients

OP Billing → Unbilled Patients — รายชื่อผู้ป่วยค้างชำระ ค้นหาตาม HN/ชื่อ/แผนก/แพทย์

## IP Billing

เหมือน OP Billing + **Inpatient Expenses**: IP Billing → Inpatient Expenses → ดูค่าใช้จ่ายผู้ป่วยที่ยัง on ward → สั่งพิมพ์แจ้งผู้ป่วย

## Integration Points

| Module | Integration |
|--------|-------------|
| [[OPD]] | Medical Discharge → OP Cashier Worklist |
| [[IPD]] | Medical Discharge → IP Cashier / Final Discharge ต้องรอ billing เสร็จ |
| [[ER]] | Emergency Discharge → billing |
| [[Registration]] | [[Payor and Treatment Rights|Payor Details]] จาก Registration |
| [[Pharmacy]] | Drug order status ต้องพร้อมก่อนออกบิล |
