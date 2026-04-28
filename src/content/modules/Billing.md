---
title: Billing — Finance Module
type: module
sources: ["5.MEDHIS Manual_Billing V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [module, billing, finance, payment]
verified-on-uat: pending
---

# Billing — ระบบงานการเงิน (OP Billing & IP Billing)

## Purpose

ระบบการเงินสำหรับออกเอกสารค่ารักษาพยาบาล ชำระเงิน จัดการเงินมัดจำ และติดตามผู้ป่วยค้างชำระ ทั้งผู้ป่วยนอก (OP) และผู้ป่วยใน (IP)

## Access

- **OP Billing** → OP Cashier Worklist
- **IP Billing** → IP Cashier Worklist / Inpatient Expenses

## OP Billing

### OP Cashier Worklist

หน้าจอหลักแสดงผู้ป่วยที่ Medical Discharge แล้ว:
- Tab **Medical Discharges** — 2 สถานะ: Medical Discharge / Billing In Progress
- Tab **Bills** — เอกสารที่ออกแล้ว
- Tab **Deposit** — เงินมัดจำ

### Search Fields (OP Cashier Worklist)

| Field | Description |
|-------|-------------|
| Discharged From | วันที่เริ่มต้น (default: วันนี้) |
| Discharged To | วันที่สิ้นสุด |
| Department | กรองตามแผนก |
| Care Provider | กรองตามแพทย์ผู้รักษา |
| Search Patient | ค้นหา HN / ชื่อ-นามสกุล / เบอร์โทร / เลขบัตรประชาชน |
| Incl. Financial Dischg. | เปิดเพื่อแสดงผู้ป่วยที่ Financial Discharge แล้ว |

### [OP Billing Workflow](/workflows/op-billing-workflow/) / [IP Settlement Workflow](/workflows/billing-ip-settlement-workflow/)

ดู [Billing IP Settlement Workflow](/workflows/billing-ip-settlement-workflow/) สำหรับ IP billing

**ขั้นตอน OP Billing:**
1. **Lock** — กดรูปแม่กุญแจ → เปลี่ยน Medical Discharge → **Billing In Progress** (แผนกอื่นสั่ง/ยกเลิกรายการไม่ได้)
2. **Allocate Bill** — ระบบแสดงค่ารักษาแยกตามสิทธิ์ผู้ป่วย
3. **Modify Payor** (ถ้าจำเป็น) — เพิ่ม/แก้ไขสิทธิ์ จัดเรียง Rank → Save
   - ระบุ Payor → ระบบดึง Agreement + Payor Office อัตโนมัติ
   - Rank 1 คำนวณก่อน; รายการไม่คุ้มครองตกไป Rank ถัดไป
4. **Allocate All** → เลือก Payor → **Allocate** → ระบบคำนวณใหม่
5. **Auto Allocate** — กดอีกครั้งหลัง OK เพื่อคำนวณรวมทุก Rank
6. **Generate Bill** — ออกเอกสาร → หน้า Bills
7. **Settle** — ชำระเงิน

### Visit Detail Tabs (หน้า Allocate Bill)

| Tab | Content |
|-----|---------|
| Visit Details | รายละเอียด Visit |
| Payor Details | สิทธิ์การรักษา |
| Order Details | รายการสั่งแพทย์ |
| Patient Tracking | ติดตามผู้ป่วย |

### Bill Types

| Type | Use Case | Triggered By |
|------|----------|-------------|
| **Invoice** (ใบแจ้งหนี้) | ประกัน / บริษัทคู่สัญญา | เลือก Payor agreement → Settle |
| **Receipt** (ใบเสร็จ) | ผู้ป่วยชำระเอง | เลือก Payment Mode → Settle |

### Payment Modes (5 รูปแบบ)

| Mode | Key Fields | Notes |
|------|-----------|-------|
| **Cash** | Amount | Default = ยอดทั้งหมด |
| **EDC** | Enable EDC toggle, EDC Config, Parameter | ส่งข้อมูลไปเครื่อง EDC โดยตรง |
| **Credit Card** | Card Type, Card Holder Name, Card Number (4 ตัวท้าย), Bank Name, Expiry Month/Year | เลือก Visa/Master/etc. |
| **Transfer** | Bank Name, Date, Transaction Number | เลขที่อ้างอิงสลิป |
| **Cheque** | Bank Name, Due Date, Transaction Number | วันที่/เลขที่เช็ค |

- รองรับ **mixed payment** — เพิ่ม/ลบประเภทการจ่ายด้วยปุ่ม +/- ต่อ 1 ใบเสร็จ
- Print: ภาษาไทย/อังกฤษ, Export Excel/CSV
- รูปแบบเอกสาร: ใบสรุปค่าใช้จ่าย, รายละเอียดค่าใช้จ่าย

### Drug Order Status Check (ก่อนออกบิล)

ก่อนออกบิล รายการยาต้องมี status อย่างใดอย่างหนึ่ง:

| Status | ออกบิลได้ |
|--------|----------|
| Ordered | ไม่ได้ — แถบสีแดงที่รายการยา |
| Registered | ได้ |
| Allocated | ได้ |
| Dispensed | ได้ |

### Cancel Bill (ยกเลิกใบเสร็จ/ใบแจ้งหนี้)

- ยกเลิกได้ภายใน **24 ชั่วโมง** (นับจากเวลาออกเอกสาร)
- เส้นทาง: Bills tab → เลือกเอกสาร → Cancel icon → Cancel Bills screen
  - Checkbox เลขที่เอกสาร
  - เลือก **Cancel Reason** (required)
  - ระบุ Cancel Comments (optional)
  - กด **Save**
- ผลลัพธ์: ผู้ป่วยย้ายกลับ Medical Discharge เพื่อออกบิลใหม่

## Deposit (เงินมัดจำ)

### [รับเงินมัดจำ](/entities/billing-settlement-screen/)

OP Billing → Deposits → Search Patient:

| Field | Description |
|-------|-------------|
| Search Patient | ค้นหา HN / ชื่อ-นามสกุล; checkbox "Search All Patients" ถ้าไม่มี visit วันนี้ |
| Date | วันที่รับ (default: วันนี้) |
| Towards | General / Billing Group / Department / Encounter (OPD/IPD only) |
| Payment Mode | รูปแบบการรับเงิน |
| Amount | จำนวนเงินมัดจำ |
| Paid By | ชื่อผู้จ่าย |
| Comments | หมายเหตุ (แสดงในใบรับเงินมัดจำ) |
| Internal Comments | หมายเหตุภายใน (แสดงตอนตัดใช้เงินมัดจำ) |

### ตัดใช้เงินมัดจำ (Use Deposit)

- ออกบิลปกติ → Available Deposit Amount แสดง → Checkbox "Use Deposit?" → หน้า Use Deposit
  - เลือกรายการ (ตาม Internal Comment)
  - ปรับยอด Use Amount ตามต้องการ → กดเครื่องหมาย confirm
  - กด **Apply** → กด **Settle**

### คืนเงินมัดจำ (Refund Deposit)

- OP Cashier Worklist → Deposit tab → Search (ระบุวันที่ + HN/ชื่อ) → เลือกรายการ → Refund icon
  - ระบุ **Refund Amount**
  - เลือก **Payment Mode** (วิธีคืนเงิน)
  - เลือกเหตุผล + Comments
  - กด **Save**
- ระบบแสดงรายการคืนเป็นแถบสีแดง ยอดติดลบ

## Interim Bill (แบ่งชำระ)

กรณีผู้ป่วยต้องชำระบางรายการก่อนรับบริการ:

1. OP Cashier Worklist → Tab Medical Discharge → Search → Lock (Billing In Progress)
2. กด icon **Interim Bill**
3. เลือก Payor / Payor Agreement
4. **Split by**: Billing Group / Careprovider / Department
5. ระบบแสดงรายการ → กด Settle → Print Preview
6. Status กลับเป็น **Medical Discharge** อัตโนมัติหลังออกเอกสาร

## Bill History

OP Billing → Bill History → Search HN/ชื่อ:

| Tab | Content |
|-----|---------|
| Summary | รวม Deposit + Credit Note + Bills + Outstanding Payments |
| Bills | ใบเสร็จ/ใบแจ้งหนี้ทั้งหมด ตามสิทธิ์ |
| Deposits | รับ/ตัดใช้/ยกเลิก/คืนเงินมัดจำ |

## Unbilled Patients

OP Billing → Unbilled Patients — รายชื่อผู้ป่วยค้างชำระ ค้นหาตาม HN/ชื่อ/แผนก/แพทย์

## IP Billing

### Inpatient Expenses (ตรวจสอบค่าใช้จ่าย On Ward)

IP Billing → Inpatient Expenses:
- ค้นหาตาม HN / ชื่อ-นามสกุล / Ward
- สั่งพิมพ์รายละเอียดค่าใช้จ่ายแจ้งผู้ป่วย

### IP Settlement

เหมือน OP Billing แต่มีฟังก์ชันเพิ่ม:
- ดู [Billing IP Settlement Workflow](/workflows/billing-ip-settlement-workflow/) สำหรับขั้นตอนสมบูรณ์
- รองรับ Deposit จาก IP encounter

## Screen Fields (Billing Settlement Screen)

ดูรายละเอียดเต็มที่ [Billing Settlement Screen](/entities/billing-settlement-screen/)

## Button Actions

| Button | Action | Conditions |
|--------|--------|------------|
| Lock (แม่กุญแจ) | เปลี่ยน status เป็น Billing In Progress | เฉพาะ Medical Discharge |
| Allocate Bill | แสดงค่ารักษาแยก Payor | หลัง Lock |
| Modify Payor | เปิดหน้าแก้ไขสิทธิ์ | ขณะ Allocate |
| Allocate All | คำนวณตาม Rank ใหม่ | หลัง Modify Payor |
| Generate Bill | ออกเอกสาร | หลัง Allocate |
| Settle | ชำระ → Print | หลัง Generate Bill |
| Cancel | ยกเลิกบิล | ภายใน 24 ชม. เท่านั้น |
| Interim Bill | แบ่งชำระบางรายการ | ขณะ Billing In Progress |

## Permissions

| Action | Notes |
|--------|-------|
| Lock / Allocate / Settle | เจ้าหน้าที่การเงิน |
| Cancel Bill | ภายใน 24 ชม. เท่านั้น |
| Modify Payor | เจ้าหน้าที่การเงิน / เวชระเบียน |
| Deposit Refund | เจ้าหน้าที่การเงิน |

## Error / Edge Cases

- ยาที่มีสถานะ **Ordered** จะแสดงแถบสีแดง — ต้องรอห้องยาดำเนินการก่อนออกบิล
- การ Cancel ที่เกิน 24 ชม. จะไม่ได้รับอนุญาต
- รายการที่ Payor ไม่คุ้มครองจะตกไป Rank ถัดไปโดยอัตโนมัติ
- ถ้าไม่มี Payor Rank ถัดไป รายการนั้นจะตกเป็น Self Pay
- กรณีผู้ป่วยไม่มี visit วันนี้ต้องเปิด "Search All Patients" เพื่อรับเงินมัดจำ

## Integration Points

| Module | Integration |
|--------|-------------|
| [OPD](/modules/opd/) | Medical Discharge → OP Cashier Worklist |
| [IPD](/modules/ipd/) | Medical Discharge → IP Cashier / Final Discharge ต้องรอ billing เสร็จ |
| [ER](/modules/er/) | Emergency Discharge → billing |
| [Registration](/modules/registration/) | [Payor Details](/concepts/payor-and-treatment-rights/) จาก Registration |
| [Pharmacy](/modules/pharmacy/) | Drug order status ต้องพร้อมก่อนออกบิล |
