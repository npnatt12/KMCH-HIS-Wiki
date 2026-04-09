---
title: Pharmacy Dispensing Workflow
titleTh: กระบวนการจ่ายยา
type: workflow
sources: ["13.MEDHIS Manual_Pharmacy V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, pharmacy]
---

## Overview
จ่ายยา OP/IP ตั้งแต่ใบสั่งยาปรากฏใน Pharmacy Worklist จนถึงสถานะ Dispensed ครอบคลุม OP, Refill, IP Fill และ Future Order

## Steps
1. (เภสัชกร — OP) Pharmacy Worklist → เลือกใบสั่งยา → Register → Allocate → Verify → Dispense
2. (เภสัชกร — Shortcut) กด Allocate & Dispense → รวม 3 ขั้นตอนทันที → สถานะ Dispensed
3. (เภสัชกร — OP Refill) Pharmacy Worklist → Tab OP Refills → ระบุวันที่+ชื่อ → Search → Repeat Refill → Dispense
4. (เภสัชกร — IP Fill) Pharmacy Worklist → Tab IP Fill → Generate → เลือก Ward → Generate IP Fill → Allocate Dispense
5. (เภสัชกร — Future Order) เปิด Future Order Filter → เลือก Pending Medicine → Order → Dispense ตามปกติ
6. (เภสัชกร) ถ้ามี Drug Alert popup → อ่านรายละเอียด → ระบุเหตุผล → Save → ดำเนินการต่อ

## Decision Points
- Stock ไม่พอ (Partial): แก้ไขจำนวน → สถานะ Partially Allocated → พิมพ์ใบค้างยา
- IP Fill Stock = 0: "No Stock Available" + ปุ่ม Allocate Dispense ถูก Disable
- OP Refill: ระบุวันที่ตามวันที่แพทย์สั่งครั้งแรก ไม่ใช่วันปัจจุบัน

## Key Rules
- Allocate & Dispense เป็น Shortcut ที่รวม Allocate+Verify+Dispense
- OP Refill: ไม่สามารถเติมยาเกินจำนวนครั้งที่แพทย์กำหนด
- Cancel Order ทำไม่ได้เมื่อ Patient Status = Medical Discharge / Billing In Progress / Financial Discharge
- Drug Alert 11 ประเภท — ต้องระบุเหตุผลทุกรายการก่อน Dispense

## Modules
Order Entry (แพทย์สั่ง) → Pharmacy → IPD (IP Fill) → Inventory (สต็อก)
