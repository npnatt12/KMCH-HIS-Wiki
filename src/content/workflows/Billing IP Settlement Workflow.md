---
title: Billing IP Settlement Workflow
type: workflow
sources: ["5.MEDHIS Manual_Billing V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [workflow, billing, ip, inpatient, finance]
roles: [AdminSystem]
verified-on-uat: pending
---

# Billing IP Settlement Workflow — ขั้นตอนการชำระค่ารักษาผู้ป่วยใน

## Overview

กระบวนการชำระค่ารักษาพยาบาลผู้ป่วยใน (IP) ตั้งแต่การตรวจสอบค่าใช้จ่ายระหว่าง on ward จนถึง Final Settlement หลัง Medical Discharge

## Steps

### ขั้นที่ 1 — ตรวจสอบค่าใช้จ่าย On Ward

**เจ้าหน้าที่การเงิน:**
1. IP Billing → **Inpatient Expenses**
2. ค้นหาตาม HN / ชื่อ-นามสกุล / Ward
3. ดูรายละเอียดค่าใช้จ่ายปัจจุบัน
4. สั่งพิมพ์เพื่อแจ้งผู้ป่วย (optional)

### ขั้นที่ 2 — Interim Bill (แบ่งชำระระหว่าง admit)

**กรณีผู้ป่วยต้องชำระบางส่วนก่อน:**
1. IP Cashier Worklist → Lock ผู้ป่วย
2. กด **Interim Bill** icon
3. เลือก Payor / Payor Agreement
4. เลือก Split by: Billing Group / Careprovider / Department
5. ดึงรายการที่ต้องการ → Settle → Print
6. Status กลับเป็น Medical Discharge อัตโนมัติ

### ขั้นที่ 3 — Final Settlement หลัง Medical Discharge

**หลังแพทย์ทำ Medical Discharge:**
1. IP Billing → IP Cashier Worklist
2. ผู้ป่วยปรากฏใน Tab **Medical Discharges**
3. กด **Lock** → เปลี่ยนเป็น Billing In Progress
4. กด **Allocate Bill** → ตรวจสอบค่ารักษา
5. **Modify Payor** (ถ้าจำเป็น) → จัดเรียง Rank → Save
6. **Allocate All** → เลือก Payor → Allocate → Auto Allocate
7. **Generate Bill** → หน้า Bills
8. เลือก Payment Mode → **Settle** → Print

### ขั้นที่ 4 — Deposit Handling (ถ้ามีเงินมัดจำ)

- หน้า Bills แสดง Available Deposit Amount
- Checkbox **Use Deposit?** → Use Deposit screen
- เลือกรายการ → ระบุยอด → Apply → Settle

## Modules Involved

- [[Billing]] — กระบวนการหลัก
- [[IPD]] — Medical Discharge trigger
- [[Registration]] — [[Payor and Treatment Rights|Payor information]]
- [[Pharmacy]] — Drug order status ต้องพร้อม

## Error / Edge Cases

- ยาที่ยังมีสถานะ Ordered จะบล็อกการออกบิล
- Final Discharge ของ IPD ต้องรอ Financial Discharge เสร็จก่อน
- Cancel บิลได้ภายใน 24 ชม. เท่านั้น
