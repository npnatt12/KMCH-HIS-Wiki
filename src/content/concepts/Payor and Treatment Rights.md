---
title: Payor and Treatment Rights
type: concept
sources: ["2.MEDHIS Manual_Registration V.2.docx", "5.MEDHIS Manual_Billing V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [concept, payor, billing, insurance, rights]
roles: [AdminSystem]
verified-on-uat: pending
---

# Payor and Treatment Rights (สิทธิการรักษาพยาบาล)

ระบบจัดการสิทธิการรักษาและการเรียกเก็บค่ารักษาพยาบาลในแต่ละ visit

## Payor Details

ทุก visit จะมี Payor Details ซึ่งกำหนดสิทธิการรักษา:

- **SELFPAY** — ระบบเพิ่มให้อัตโนมัติเป็น **Rank 2** ทุก visit
- สามารถเพิ่มสิทธิการรักษาอื่นๆ ได้ (กดปุ่ม +)
- ระบุ: **Payor**, **Agreement**, **Payor Office**
- ระบบดึงข้อมูลที่เกี่ยวข้องกับ Payor มาแสดงอัตโนมัติ
- สามารถกำหนด **Guarantee Letter** ได้

## Payor Ranking

ลำดับ Rank กำหนดว่าระบบจะพิจารณาเรียกเก็บจากสิทธิใดก่อน:
- Rank 1 — สิทธิหลัก (เช่น ประกันสังคม, สปสช.)
- Rank 2 — SELFPAY (default)
- สามารถจัดเรียง Rank ได้ตามต้องการ

## Copy Payor จาก Visit เก่า

ผู้ป่วยเก่าสามารถ Copy สิทธิการรักษาจาก visit เก่าได้:
- กดปุ่ม Copy → เลือก Checkbox ของ Payor ที่ต้องการ

## [สปสช. (NHSO) Authentication](/concepts/nhso-authentication/)

ตรวจสอบสิทธิการรักษาออนไลน์ผ่านระบบ สปสช.:
1. ระบุเลขบัตรประชาชนใน Basic Details
2. กดปุ่มเช็คสิทธิ
3. ระบบแสดงรายละเอียดสิทธิ
4. เลือกสิทธิ → ระบบระบุให้อัตโนมัติใน Payor Details

## Payment Modes (5 รูปแบบ) ในการชำระ

เมื่อ Settle บิลในระบบ [Billing](/modules/billing/) สามารถเลือกรูปแบบการชำระ:

| Mode | รายละเอียดที่ต้องระบุ |
|------|---------------------|
| **Cash** | Amount (default = ยอดรวม) |
| **EDC** | Enable toggle, EDC Config, Parameter |
| **Credit Card** | Card Type, Card Holder Name, Card Number (4 ตัวท้าย), Bank, Expiry |
| **Transfer** | Bank Name, Date, Transaction Number (สลิป) |
| **Cheque** | Bank Name, Due Date, Transaction Number |

- รองรับ **mixed payment** (หลายรูปแบบใน 1 ใบเสร็จ)
- ดูรายละเอียดครบที่ [Payment Modes](/concepts/payment-modes/)

## Payor ในบริบท Billing

ขั้นตอนการเรียกเก็บใน [Billing](/modules/billing/):
1. **Lock** — เปลี่ยนสถานะเป็น Billing In Progress
2. **Allocate Bill** — ระบบคำนวณค่ารักษาแยกตาม Payor Rank
3. **Modify Payor** — แก้ไข/เพิ่มสิทธิ์ได้ขณะออกบิล + ตรวจสอบสิทธิ สปสช. เพิ่มเติมได้
4. **Auto Allocate** — คำนวณรวมทุก Rank
5. **Settle** — เลือก Payment Mode ชำระ

**กฎการตกสิทธิ์:** รายการที่ Payor ไม่คุ้มครองตกไป Rank ถัดไปอัตโนมัติ — ถ้าไม่มี Rank ถัดไปตกเป็น Self Pay

## ที่ใช้งาน

- [Registration](/modules/registration/) — Payor Details section ใน [Patient Demographics Screen](/entities/patient-demographics-screen/)
- [Billing](/modules/billing/) — ใช้ Payor Details ในการคำนวณค่ารักษา + Modify Payor ขณะออกบิล
- [NHSO Authentication](/concepts/nhso-authentication/) — ตรวจสอบสิทธิ สปสช. ออนไลน์
- [Payment Modes](/concepts/payment-modes/) — รูปแบบการชำระเงิน 5 ประเภท
