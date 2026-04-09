---
title: Billing Module
titleTh: ระบบงานการเงิน
type: cheatsheet
sources: ["5.MEDHIS Manual_Billing V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, module, billing]
---

## Purpose
ระบบการเงินออกเอกสารค่ารักษาพยาบาล ชำระเงิน จัดการเงินมัดจำ และติดตามผู้ป่วยค้างชำระ ทั้ง OP และ IP

## Access
- **OP Billing** → OP Cashier Worklist
- **IP Billing** → IP Cashier Worklist / Inpatient Expenses

## Workflow

| Step | Actor | Action |
|------|-------|--------|
| 1 | จนท.การเงิน | OP Cashier Worklist → Tab Medical Discharges → ค้นหา ผป. |
| 2 | จนท.การเงิน | กด Lock (แม่กุญแจ) → Status: Billing In Progress |
| 3 | จนท.การเงิน | Allocate Bill → ระบบแสดงค่ารักษาแยกตามสิทธิ์ Payor |
| 4 | จนท.การเงิน | Modify Payor ถ้าจำเป็น → จัด Rank → Save → Allocate All |
| 5 | จนท.การเงิน | Generate Bill → ออกเอกสาร Invoice / Receipt |
| 6 | จนท.การเงิน | Settle → เลือก Payment Mode → Print |

## Key Screens
- **OP Cashier Worklist** — Tab Medical Discharges / Bills / Deposit
- **Allocate Bill** — ค่ารักษาแยก Payor + Modify Payor + Allocate All
- **Inpatient Expenses** — ดูค่าใช้จ่าย ผป.ใน on ward
- **Deposit** — รับเงินมัดจำ / ตัดใช้ / คืนเงิน

## Key Fields

| Field | หมายเหตุ |
|-------|---------|
| Lock | Billing In Progress — แผนกอื่นสั่งเพิ่ม/ยกเลิกไม่ได้ |
| Payor Rank | Rank 1 คำนวณก่อน — ไม่คุ้มครองตก Rank ถัดไป → SELFPAY |
| Bill Type | Invoice (ประกัน/บริษัท) / Receipt (ผป.ชำระเอง) |
| Payment Mode | Cash / EDC / Credit Card / Transfer / Cheque |
| Drug Order | Status Ordered = แถบแดง — รอ Pharmacy ก่อนออกบิล |
| Cancel Bill | ยกเลิกได้ภายใน 24 ชม. เท่านั้น |
| Interim Bill | แบ่งชำระบางรายการก่อน |

## Integration
OPD/ER/IPD → Medical Discharge → **Billing** → Final Discharge ← Registration (Payor) ← Pharmacy (Drug status)
