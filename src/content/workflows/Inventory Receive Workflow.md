---
title: Inventory Receive Workflow
type: workflow
sources: ["14.MEDHIS Manual_Inventory V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [workflow, inventory, goods-receive, grn]
---

# Inventory Receive Workflow — ขั้นตอนรับสินค้าเข้าคลัง (GRN)

## Overview

กระบวนการรับสินค้าเข้าคลัง (Goods Receive) ครอบคลุมทั้ง 9 ประเภทการรับ ตั้งแต่สร้างใบรับจนถึง Approve เพื่ออัปเดตสต็อก

## Steps

### ขั้นที่ 1 — เลือกประเภทการรับสินค้า

Inventory Management → Goods Receive → กด **New (+)**

เลือก **Type** ตามกรณี:

| กรณี | Type |
|------|------|
| รับจากใบสั่งซื้อ | RCVPUR |
| รับสินค้าแถม | RCVFREE |
| รับสินค้าทดลอง | RCVEXA |
| รับยืมจากภายนอก | RCVBOR |
| รับคืนจากการให้ยืม | RCVLEND |
| รับคืนจากผู้ป่วย/แผนก (ปิดบิลแล้ว) | RCVRET |
| รับจากการแลกเปลี่ยน | RCVEXC |
| รับคืนจากแผนกอื่น | RCVDEPT |
| รับจากการเรียกคืน | RCVRECA |

### ขั้นที่ 2 — กรอก Header

- เลือก **Store** (คลังที่รับสินค้า)
- เลือก **Vendor**
- กำหนด **Is Invoice** toggle → กรอก Invoice Number + Date หรือ Delivery Number
- ระบุ **Received By** + **Received Date**

### ขั้นที่ 3 — เพิ่มรายการสินค้า (Items)

สำหรับแต่ละ Item:
1. ค้นหาจาก **Search Item Master** (Item Name หรือ Item Code)
2. เลือก **Receive Type**: Paid หรือ Free QTY
3. ระบุ **Received Quantity** + Free Quantity (ถ้ามี)
4. ระบุ **Batch ID** + **Expiry Date**
5. ระบุ **Unit Price** + Discount
6. เพิ่ม Item ถัดไปด้วยปุ่ม +

### ขั้นที่ 4 — บันทึก

- กด **Save** → ระบบสร้างเลขที่ GRN + สถานะ **Approval Required**
- ระบบแสดงรายงานสามารถพิมพ์ได้

### ขั้นที่ 5 — Approve

- เลือก Approve icon → ใส่ Approve Comments (optional)
- กด **Approve** → สถานะเปลี่ยนเป็น **Raised**
- ยอดสินค้าถูกรับเข้าระบบทันที

### ขั้นที่ 6 — กรณีต้องยกเลิก

- เลือก Cancel icon → เลือก **Cancel Reason** (required) + Comments
- กด Cancel → สถานะเปลี่ยนเป็น **Cancelled**
- สามารถยกเลิกได้เฉพาะ Approval Required เท่านั้น

## กรณีพิเศษ — Linked Documents (RCVBOR ↔ ISSBOR)

**รับยืมจากภายนอก (RCVBOR):**
1. สร้าง RCVBOR → เลือก Vendor ที่ยืม → Approve
2. เมื่อจะคืน: Issue → ISSBOR → Link ไปยัง Good Receive → ค้นหา RCVBOR → Add → Save

**รับสินค้าเรียกคืน (RCVRECA):**
1. Issue → ISSRECA ก่อน
2. สร้าง RCVRECA → เลือก Vendor → Link ไปยัง Stock Issue → ค้นหา ISSRECA → Add → Approve

> หมายเหตุ: ระบบไม่อนุญาตให้รับ Quantity มากกว่าที่จ่ายไป

## Modules Involved

- [[Inventory]] — กระบวนการหลัก
- [[Pharmacy]] — GRNRET รับคืนยาจากผู้ป่วย

## Entities

- [[Inventory Receive Screen]]
