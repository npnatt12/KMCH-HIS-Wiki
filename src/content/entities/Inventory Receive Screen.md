---
title: Inventory Receive Screen
type: entity
sources: ["14.MEDHIS Manual_Inventory V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, inventory, stock, screen]
roles: [AdminSystem]
verified-on-uat: pending
---

# Inventory Receive Screen — หน้าจอรับสินค้า (Goods Receive)

## Purpose

หน้าจอสำหรับรับสินค้าเข้าคลัง รองรับ 9 ประเภทการรับสินค้า ตั้งแต่การรับจาก PO จนถึงการรับคืนจากการเรียกคืน

## Access Path

**Inventory Management** → Goods Receive (เมนูหลัก)

## Fields

### Search / Filter (หน้าหลัก)

| Field | Type | Description |
|-------|------|-------------|
| From – To | Date Range | ช่วงวันที่ (default: วันนี้) |
| Store | Dropdown | คลังสินค้า (default: คลังของแผนกผู้ใช้) |
| GRN Number | Text | เลขที่การรับสินค้า |
| PO Number | Text | เลขที่ใบสั่งซื้อ |
| Vendor | Dropdown/Search | ผู้ขายสินค้า |
| Item | Search | สินค้า |
| Status | Dropdown | สถานะใบรับสินค้า |
| Invoice Number | Text | เลขที่ใบแจ้งหนี้ |

### GRN Header (สร้างใหม่)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Type | Dropdown | ใช่ | ประเภทการรับ (9 types: RCVPUR/RCVFREE/RCVEXA/RCVBOR/RCVLEND/RCVRET/RCVEXC/RCVDEPT/RCVRECA) |
| Store | Dropdown | ใช่ | คลังที่รับสินค้า |
| Vendor | Dropdown | ใช่ | ผู้ขายสินค้า |
| Is Invoice | Toggle | ใช่ | มี Invoice → Invoice Number + Invoice Date; ไม่มี → Delivery Number |
| Invoice Number | Text | conditional | เมื่อ Is Invoice = ON |
| Invoice Date | Date | conditional | เมื่อ Is Invoice = ON |
| Delivery Number | Text | conditional | เมื่อ Is Invoice = OFF |
| Invoice Discount | Number | ไม่ | ส่วนลดระดับ Invoice |
| Net Amount | Display | — | ยอดรวมสุทธิ (คำนวณอัตโนมัติ) |
| Received By | Dropdown | ใช่ | ชื่อผู้รับสินค้า |
| Received Date | Date | ใช่ | วันที่รับ (default: วันนี้) |

### GRN Item Line

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Search Item Master | Search | ใช่ | ค้นหาจาก Item Name / Item Code |
| Item Code | Display | — | รหัสสินค้า |
| Item Name | Display | — | ชื่อสินค้า |
| Receive Type | Dropdown | ใช่ | Paid / Free QTY |
| Received Quantity | Number | ใช่ | จำนวนที่รับ |
| Free Quantity | Number | ไม่ | จำนวนสินค้าแถม |
| UOM | Display | — | หน่วยย่อย |
| Batch ID | Text | ใช่ | Lot No. |
| Expiry Date | Date | ใช่ | วันหมดอายุ |
| Unit Price | Number | ใช่ | ราคาต้นทุนต่อหน่วย |
| Discount | Number | ไม่ | ส่วนลดระดับ Item |
| Comments | Text | ไม่ | หมายเหตุระดับ Item |

### GRN Footer

| Field | Type | Description |
|-------|------|-------------|
| Net Amount | Display | ยอดรวมสุทธิทุก Item |
| Comments | Text | หมายเหตุระดับใบรับสินค้า |

## Buttons

| Button | Action | Conditions | Result |
|--------|--------|------------|--------|
| Search | ค้นหา | — | แสดงรายการ GRN ตามเงื่อนไข |
| Clear | ล้างหน้าจอ | — | เริ่มค้นหาใหม่ |
| New (+) | สร้างใหม่ | — | เปิดฟอร์ม GRN ใหม่ |
| + (Add Item) | เพิ่มรายการสินค้า | — | เพิ่ม Item ใหม่ |
| - (Delete Item) | ลบรายการสินค้า | — | ลบ Item ออก |
| Save | บันทึก | — | สร้าง GRN, status = Approval Required |
| View | ดูรายละเอียด | ทุกสถานะ | อ่านอย่างเดียว |
| Print | Preview report | ทุกสถานะ | สั่งพิมพ์ |
| Modify | แก้ไข | Approval Required เท่านั้น | แก้ไขข้อมูล |
| Approve | อนุมัติ | Approval Required เท่านั้น | เปลี่ยนเป็น Raised + รับสต็อก |
| Cancel | ยกเลิก | Approval Required เท่านั้น | เปลี่ยนเป็น Cancelled |

## Status Flow

```
New → Save → [Approval Required] → Approve → [Raised] (สต็อกอัปเดต)
                                 → Cancel → [Cancelled]
```

## Related Workflows

- [[Inventory Receive Workflow]]
