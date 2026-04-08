---
title: Pharmacy Module
type: module
sources: ["13.MEDHIS Manual_Pharmacy V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [module, pharmacy, dispensing, drug-alerts, medication]
---

# Pharmacy — ระบบเภสัชกรรม

## Purpose

ตรวจสอบ จ่ายยา เติมยา คืนยา ติดตามสินค้า — ครอบคลุมกระบวนการเภสัชกรรมทั้งผู้ป่วยนอก (OP) และผู้ป่วยใน (IP)

## Access

เมนูหลัก: **Pharmacy Worklist**

## Key Screens

### Dispensing Tab (Pharmacy Worklist)

หน้าจอหลักแสดงใบสั่งยาทั้งหมดที่รอดำเนินการ

### OP Refills

เติมยาผู้ป่วยนอก — แพทย์กำหนดจำนวนครั้งเติมยา (Refill count) ผ่าน [[Order Entry]]

### IP Fill

จัดยาสำหรับผู้ป่วยใน — generate สำหรับ ward/patient ที่ต้องการ:
- **Daily Dose** — ยาสั่งรายวัน
- **Continuous** — ยาต่อเนื่อง (auto-generate ทุกวันจนกว่า discontinue)

### Returns

- **Med Return (OP)** — คืนยาผู้ป่วยนอก (หลัง Financial Discharge)
- **Dispensed Return (IP)** — คืนยาจาก ward กลับ Pharmacy

### Manufacturing & Repacking

- **Manufacturing** — ผลิตยาเตรียม
- **Repacking** — แบ่งบรรจุยาใหม่

## Main Workflow

```
Ordered → Registered → Allocated → Verified → Dispensed
```

Shortcut: **Allocate & Dispense** (รวมขั้นตอน Allocate + Verify + Dispense)

- **Partially Allocated** — เมื่อยาในสต็อกไม่เพียงพอ

## Drug Alerts (11 ประเภท)

| # | Alert Type | Description |
|---|-----------|-------------|
| 1 | Allergy | แพ้ยา |
| 2 | High Alert | ยาความเสี่ยงสูง |
| 3 | Drug Interaction | ยาตีกัน |
| 4 | Pregnancy | อันตรายต่อสตรีมีครรภ์ |
| 5 | Lactation | อันตรายต่อสตรีให้นมบุตร |
| 6 | DUE | Drug Utilization Evaluation |
| 7 | Dosage Limit | ขนาดยาเกินกำหนด |
| 8 | Drug-Investigation | ยาที่มีผลต่อผลตรวจ |
| 9 | Drug Duplicate | สั่งยาซ้ำ |
| 10 | Drug-Diagnosis | ยาไม่สอดคล้องกับการวินิจฉัย |
| 11 | Drug-To-Diagnosis | ยาสำหรับการวินิจฉัยเฉพาะ |

Drug alerts เกิดขึ้นทั้งตอนสั่งยา ([[Order Entry]]) และตอนจ่ายยา (Pharmacy)

## Med Reconciliation

กระบวนการทบทวนยาผู้ป่วย:

| Action | Description |
|--------|-------------|
| Continue | ใช้ยาต่อตามเดิม |
| Change | เปลี่ยนยา (ขนาด/ชนิด) |
| Discontinue | หยุดยา |
| Hold | ระงับยาชั่วคราว |

## Drug Allergy Recording (4 รูปแบบ)

| Type | Description |
|------|-------------|
| Generic Name | ชื่อสามัญ |
| Trade Name | ชื่อทางการค้า |
| Drug Group | กลุ่มยา |
| Free Text | ข้อความอิสระ |

เพิ่มเติม:
- **Severity** — ระดับความรุนแรงของอาการแพ้
- **Naranjo Algorithm** — ประเมินความน่าจะเป็นของ ADR (Adverse Drug Reaction)

## Cancel Restrictions

**ไม่สามารถยกเลิกคำสั่งยา/การจ่ายยาได้เมื่อ:**
- Medical Discharge แล้ว
- [[Billing]] In Progress
- Financial Discharge แล้ว

## Med Reject

เภสัชกรส่งใบสั่งยากลับไปยังแพทย์เพื่อทบทวน → แพทย์ได้รับใน [[EMR Doctor|Medicine Reject]] box บน Doctor Worklist

## Additional Features

- **Pending Medicine (Future Order)** — ยาสั่งล่วงหน้า แสดงเมื่อถึงวันนัด
- **Alternative Items** — แสดงยาทดแทน (Show All / Comply Payor)
- **DUE Forms** — แบบฟอร์ม Drug Utilization Evaluation
- **View Expiring Items** — ดูรายการยาใกล้หมดอายุ
- **Stock Ledger** — ดูประวัติการเคลื่อนไหวสินค้า

## Integration Points

| Module | Integration |
|--------|-------------|
| [[EMR Doctor]] / [[Order Entry]] | รับใบสั่งยาจากแพทย์ |
| [[Billing]] | ตรวจสอบสถานะทางการเงินก่อนยกเลิก |
| [[IPD]] | Dispensed Return, IP Fill |
| [[Inventory]] | จัดการคลังสินค้ายา, Stock Ledger |
| [[EMR Doctor]] | Medicine Reject → ตีกลับใบสั่งยาไปยังแพทย์ |
