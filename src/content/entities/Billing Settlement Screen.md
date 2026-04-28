---
title: Billing Settlement Screen
type: entity
sources: ["5.MEDHIS Manual_Billing V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, billing, finance, screen]
roles: [AdminSystem]
verified-on-uat: pending
---

# Billing Settlement Screen — หน้าจอชำระค่ารักษาพยาบาล

## Purpose

หน้าจอสำหรับชำระค่ารักษาพยาบาล รองรับทั้งใบเสร็จรับเงิน (Receipt) และใบแจ้งหนี้ (Invoice) พร้อม 5 รูปแบบการชำระเงิน

## Access Path

**OP Billing** → OP Cashier Worklist → เลือกผู้ป่วย → Lock → Allocate Bill → Generate Bill → **Bills screen**

## Fields

### Invoice (ใบแจ้งหนี้)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Payor | Dropdown | ใช่ | เลือก Payor / Payor Agreement |
| Settle | Button | — | ออกใบแจ้งหนี้ |

### Receipt — Cash

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Payment Mode | Dropdown | ใช่ | เลือก Cash |
| Amount | Number | ใช่ | ยอดชำระ (default = ยอดทั้งหมด) |
| Settle | Button | — | ออกใบเสร็จ |

### Receipt — EDC

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Payment Mode | Dropdown | ใช่ | Cash (EDC mode) |
| Enable EDC | Toggle | ใช่ | เปิดใช้งาน EDC |
| EDC Config | Dropdown | ใช่ | เลือกตามชั้นปฏิบัติงาน |
| Parameter | Dropdown | ใช่ | พารามิเตอร์ EDC |
| Settle | Button | — | ส่งข้อมูลไปเครื่อง EDC |

### Receipt — Credit Card

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Payment Mode | Dropdown | ใช่ | Credit Card |
| Card Type | Dropdown | ใช่ | Visa / Master Card / etc. |
| Amount | Number | ใช่ | ยอดชำระ |
| Card Holder Name | Text | ใช่ | ชื่อผู้ถือบัตรตามหน้าบัตร |
| Card Number | Text | ใช่ | เลข 4 ตัวท้าย |
| Bank Name | Dropdown | ใช่ | ธนาคารของบัตรเครดิต |
| Card Expiry Month | Dropdown | ใช่ | เดือนหมดอายุ |
| Card Expiry Year | Dropdown | ใช่ | ปีหมดอายุ |

### Receipt — Transfer

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Payment Mode | Dropdown | ใช่ | Transfer |
| Amount | Number | ใช่ | ยอดชำระ |
| Bank Name | Text | ใช่ | ธนาคารที่โอน |
| Date | Date | ใช่ | วันที่โอน |
| Transaction Number | Text | ใช่ | เลขอ้างอิงสลิปโอน |

### Receipt — Cheque

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Payment Mode | Dropdown | ใช่ | Cheque |
| Amount | Number | ใช่ | ยอดชำระ |
| Bank Name | Text | ใช่ | ธนาคารตามบัญชีที่รับเช็ค |
| Due Date | Date | ใช่ | วันที่หน้าเช็ค |
| Transaction Number | Text | ใช่ | เลขที่เช็ค |

### Deposit Section (ถ้ามีเงินมัดจำ)

| Field | Type | Description |
|-------|------|-------------|
| Available Deposit Amount | Display | ยอดเงินมัดจำที่สามารถตัดได้ |
| Use Deposit? | Checkbox | เปิดเพื่อตัดใช้เงินมัดจำ |
| Used Amount | Number | ยอดที่ตัดใช้ |
| Apply | Button | ยืนยันการตัดใช้ |

## Buttons

| Button | Action | Conditions | Result |
|--------|--------|------------|--------|
| + (เพิ่ม) | เพิ่มประเภทการจ่าย | — | รองรับ mixed payment |
| - (ลบ) | ลบประเภทการจ่าย | ต้องมีมากกว่า 1 | ลดจำนวน payment mode |
| Settle | ชำระเงิน + ออกเอกสาร | ต้องกรอกครบ | แสดง Print Preview |
| Print | พิมพ์เอกสาร | หลัง Settle | Print ใบเสร็จ/ใบแจ้งหนี้ |
| Export | Export ไฟล์ | หลัง Settle | Excel / CSV |

## Print Options

- ภาษาเอกสาร: **ไทย** / **อังกฤษ**
- รูปแบบ: ใบสรุปค่าใช้จ่าย / รายละเอียดค่าใช้จ่าย
- Export: Excel / CSV

## Related Workflows

- [[OP Billing Workflow]]
- [[Billing IP Settlement Workflow]]
