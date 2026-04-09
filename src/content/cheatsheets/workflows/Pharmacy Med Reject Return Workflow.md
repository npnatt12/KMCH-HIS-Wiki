---
title: Pharmacy Med Reject Return Workflow
titleTh: กระบวนการปฏิเสธและคืนยา
type: workflow
sources: ["13.MEDHIS Manual_Pharmacy V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, pharmacy]
---

## Overview
ครอบคลุม 3 กระบวนการ: Med Reject (ปฏิเสธใบสั่งยา), Med Return OP (คืนยาผู้ป่วยนอก), Dispensed Return IP (คืนยาผู้ป่วยใน)

## Steps
1. (เภสัชกร — Reject) Pharmacy Worklist → เลือกใบสั่งยา → Med Reject → เลือกรายการ → ระบุเหตุผล → Confirm
2. (แพทย์ — หลัง Reject) Doctor Worklist → Medicine Reject box → ตรวจสอบ → Confirm to Order หรือ Cancel Order
3. (เภสัชกร — Med Return OP) เลือกใบสั่งยา Dispensed + Financial Discharge → Med Return → เลือกรายการ → ระบุ Balance → Save
4. (เภสัชกร) Pharmacy Worklist → Tab Returns → เลือก Raised → Verify Return → Completed; หรือ Cancel Return
5. (พยาบาล — Dispensed Return IP) Visit Details ผู้ป่วย → Dispense Return → เลือก Store → เลือกรายการ → ระบุ Balance → Save
6. (เภสัชกร) Tab Returns → Verify Return → Completed; หรือ Cancel Return → Cancelled

## Decision Points
- Med Return OP: ทำได้เฉพาะ Status = Dispensed AND Patient = Financial Discharge
- Dispensed Return IP: ถ้า Return Store ≠ Dispensing Store → ระบบเตือน → ยืนยัน YES/NO
- Balance > Total: ระบบแสดง "Invalid Quantity" ไม่สามารถบันทึก

## Key Rules
- Med Reject ส่งใบสั่งยาไปยัง Doctor Worklist ของแพทย์ผู้สั่งอัตโนมัติ
- Med Return OP เพิ่มยอดคืนเข้าคลังเท่านั้น — ไม่มีผลต่อประวัติการรักษา/การชำระเงิน
- GRNRET: อีกทางเลือกรับคืนยาผ่าน Inventory Goods Receive (Type GRNRET)
- Verify Return = Completed; Cancel Return = Cancelled

## Modules
Pharmacy (Reject/Return) → EMR Doctor (Medicine Reject review) → Inventory (GRNRET)
