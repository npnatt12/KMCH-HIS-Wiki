---
title: Inventory Module
type: module
sources: ["14.MEDHIS Manual_Inventory V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [module, inventory, stock, supply-chain]
---

# Inventory — ระบบสินค้าคงคลัง (Inventory & Supply Chain)

## Purpose

จัดการสินค้าคงคลัง — ครอบคลุมการรับสินค้า การเบิก-จ่าย การโอนย้าย การปรับปรุงสต็อก การตรวจนับ และรายงานสินค้า

## Access

เมนูหลัก: **Inventory Management**

## Workflows (7 กระบวนการ)

### 1. Goods Receive (การรับสินค้า)

รองรับ 9 ประเภทการรับสินค้า:

| Code | Type | Description |
|------|------|-------------|
| RCVPUR | Receive from Purchase | รับจากการสั่งซื้อ (เชื่อมกับ PO จาก Back Office) |
| RCVFREE | Receive Free | รับสินค้าฟรี/ตัวอย่าง |
| RCVEXA | Receive from Exam | รับจากการตรวจสอบ |
| RCVBOR | Receive from Borrow | รับคืนจากการยืม |
| RCVLEND | Receive from Lend | รับจากการให้ยืม |
| RCVRET | Receive from Return | รับคืนจากแผนก |
| RCVEXC | Receive from Exchange | รับจากการแลกเปลี่ยน |
| RCVDEPT | Receive from Department | รับจากแผนกอื่น |
| RCVRECA | Receive Recall | รับคืนจากการเรียกคืน |

### 2. Stock Request (การขอเบิกสินค้า)

แผนกต่างๆ สร้างคำขอเบิกสินค้าจากคลัง

### 3. Stock Transfer & Issue (การโอนย้ายและจ่ายสินค้า)

โอนย้ายสินค้าระหว่างคลัง หรือจ่ายสินค้าตามคำขอเบิก

### 4. Stock Adjustment (การปรับปรุงสต็อก)

ปรับปรุงจำนวนสินค้าคงคลัง — เพิ่ม/ลด เนื่องจากความคลาดเคลื่อน สินค้าเสียหาย หรือเหตุผลอื่น

### 5. Stock Count (การตรวจนับสินค้า)

ตรวจนับสินค้าจริงเทียบกับข้อมูลในระบบ

### 6. Stock Balance (ยอดคงเหลือ)

ดูยอดคงเหลือสินค้าคงคลัง:
- **Active Stocks** — สินค้าที่ยังไม่หมดอายุ
- **Expired Stocks** — สินค้าที่หมดอายุแล้ว
- **Expires Within X days** — สินค้าที่จะหมดอายุภายในจำนวนวันที่กำหนด

### 7. Stock Ledger (บัญชีสินค้า)

รายงานการเคลื่อนไหวสินค้าโดยละเอียด:

| Field | Description |
|-------|-------------|
| Date/Time | วันเวลาทำรายการ |
| Transaction type | ประเภทรายการ (Receive, Issue, Transfer, Adjust, etc.) |
| In/Out | รับเข้า / จ่ายออก |
| User | ผู้ดำเนินการ |
| Batch ID | รหัส batch |
| Weighted Average Cost | ต้นทุนเฉลี่ยถ่วงน้ำหนัก |
| Total Value | มูลค่ารวม |
| QTY | จำนวน |
| Closing Stock | ยอมคงเหลือ |

## Interface with Back Office

ระบบเชื่อมต่อกับระบบจัดซื้อ Back Office:
- **PO (Purchase Order)** จาก Back Office → **RCVPUR** (Goods Receive) ใน Inventory
- เมื่อรับสินค้าตาม PO ระบบจะอัปเดตสถานะการจัดซื้ออัตโนมัติ

## Integration Points

| Module | Integration |
|--------|-------------|
| [[Pharmacy]] | คลังสินค้ายา — Stock management, View Expiring Items, Stock Ledger |
| All Departments | ขอเบิกสินค้า (Stock Request) |
| Back Office | PO → Goods Receive (RCVPUR) |
