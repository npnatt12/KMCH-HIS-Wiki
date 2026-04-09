---
title: Inventory Receive Workflow
titleTh: ขั้นตอนรับสินค้าเข้าคลัง (GRN)
type: workflow
sources: ["14.MEDHIS Manual_Inventory V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, inventory]
---

## Overview
รับสินค้าเข้าคลัง (Goods Receive) ครอบคลุม 9 ประเภท ตั้งแต่สร้างใบรับ กรอก Header + Items จนถึง Approve เพื่ออัปเดตสต็อก

## Steps
1. (เจ้าหน้าที่คลัง) Inventory Management → Goods Receive → New (+) → เลือก Type
2. (เจ้าหน้าที่คลัง) กรอก Header: Store + Vendor + Invoice/Delivery Number + Received By + Date
3. (เจ้าหน้าที่คลัง) ค้นหา Item Master → เลือก Receive Type (Paid/Free) → ระบุ Qty + Batch + Expiry + Price
4. (เจ้าหน้าที่คลัง) กด Save → ระบบสร้างเลข GRN + สถานะ Approval Required
5. (ผู้อนุมัติ) กด Approve icon → ใส่ Comments (optional) → Approve → สถานะ Raised; สต็อกเพิ่มทันที
6. (กรณียกเลิก) Cancel icon → เลือก Cancel Reason → Cancel → สถานะ Cancelled

## Decision Points
- Type เลือกตามกรณี: RCVPUR (จาก PO), RCVFREE (สินค้าแถม), RCVBOR (ยืม), RCVRET (คืนจากผู้ป่วย) ฯลฯ
- Is Invoice toggle: ON → ระบุ Invoice No+Date; OFF → ระบุ Delivery Number
- RCVBOR: ต้องสร้าง ISSBOR เมื่อคืน + Link กลับไปยัง RCVBOR

## Key Rules
- Cancel ทำได้เฉพาะสถานะ Approval Required เท่านั้น
- RCVRECA: ต้อง Issue ISSRECA ก่อน แล้วจึง RCVRECA และ Link
- Approve → สต็อกอัปเดตทันที; ไม่สามารถแก้ไขหลัง Approve

## Modules
Inventory → (Pharmacy สำหรับ GRNRET คืนยาจากผู้ป่วย)
