---
title: OP Billing Workflow
titleTh: กระบวนการออกบิลผู้ป่วยนอก
type: workflow
sources: ["5.MEDHIS Manual_Billing V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, billing]
---

## Overview
ออกบิลผู้ป่วยนอก (OP) ตั้งแต่ Lock ผู้ป่วยใน OP Cashier Worklist จนถึง Financial Discharge

## Steps
1. (การเงิน) ผู้ป่วย Medical Discharge → ชื่อปรากฏใน OP Cashier Worklist → Tab Medical Discharges
2. (การเงิน) กดแม่กุญแจ Lock → สถานะ Billing In Progress; แผนกอื่นสั่งรายการเพิ่มไม่ได้
3. (การเงิน) กด Allocate Bill → ระบบแสดงค่ารักษาแยกตามสิทธิ์
4. (การเงิน) ถ้าต้องแก้สิทธิ์ → Modify Payor → เพิ่ม/แก้ไข Payor → จัดเรียง Rank → Save
5. (การเงิน) Allocate All → เลือก Payor → Allocate → Auto Allocate (ถ้ามีรายการไม่คุ้มครอง)
6. (การเงิน) Generate Bill → เลือก Payment Mode → Settle → Print Invoice/Receipt
7. (ระบบ) Financial Discharge อัตโนมัติหลัง Settle สำเร็จ

## Decision Points
- Invoice (ประกัน/บริษัท): เลือก Payor → Settle; Receipt (ชำระเอง): ระบุ Payment Mode
- Mixed Payment: รองรับหลายวิธีชำระต่อ 1 ใบเสร็จ
- Auto Allocate: ใช้เมื่อมีรายการที่สิทธิ์แรกไม่คุ้มครองให้ตกไปสิทธิ์ถัดไป

## Key Rules
- Lock ป้องกันไม่ให้แผนกอื่นเพิ่ม/ยกเลิกรายการ
- Payor Rank 1 คำนวณก่อน; รายการที่เกินสิทธิ์ตกไป Rank ถัดไปอัตโนมัติ
- ยาที่ยัง Ordered ต้องจ่ายหรือ Cancel ก่อนจึง Generate Bill ได้
- Print รองรับทั้ง Thai/English และ Export Excel/CSV

## Modules
OPD / ER → Registration (Payor) → Billing → Pharmacy
