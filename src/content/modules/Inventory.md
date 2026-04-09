---
title: Inventory Module
type: module
sources: ["14.MEDHIS Manual_Inventory V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [module, inventory, stock, supply-chain]
---

# Inventory — ระบบสินค้าคงคลัง (Inventory & Supply Chain)

## Purpose

จัดการสินค้าคงคลัง — ครอบคลุมการรับสินค้า การเบิก-จ่าย การโอนย้าย การปรับปรุงสต็อก การตรวจนับ และรายงานสินค้า

## Access

เมนูหลัก: **Inventory Management**
- Default store = คลังตามแผนกของผู้ใช้งาน (Department of Store)
- Default date range = วันปัจจุบัน

---

## 1. Goods Receive — การรับสินค้า

### 9 ประเภทการรับสินค้า (Receive Types)

| Code | Thai Name | Description |
|------|-----------|-------------|
| RCVPUR | รับจากใบ PO | รับสินค้าจาก Purchase Order (Interface จาก Back Office อัตโนมัติ) |
| RCVFREE | รับสินค้าแถมนอกบิล | สินค้าแถม ราคาต้องเป็น 0 |
| RCVEXA | รับสินค้าทดลองใช้ | สินค้าทดลอง ราคาต้องเป็น 0 |
| RCVBOR | รับจากการยืมภายนอก | Borrow จากหน่วยงานภายนอก |
| RCVLEND | รับสินค้าคืนจากการให้ยืม | Lend คืน |
| RCVRET | รับคืนจากผู้ป่วย/แผนก | กรณีปิดบิลผู้ป่วยไปแล้ว |
| RCVEXC | รับจากการแลกเปลี่ยน | Exchange สินค้ากับ Vendor |
| RCVDEPT | รับคืนจากแผนกอื่น | แผนกที่ไม่ใช่คลัง |
| RCVRECA | รับสินค้าจากการเรียกคืน | Recall |

### GRN Header Fields

| Field | Description |
|-------|-------------|
| Type | ประเภทการรับสินค้า (9 types) |
| Store | คลังที่รับสินค้า |
| Vendor | ผู้ขายสินค้า |
| Is Invoice | toggle: มี Invoice → แสดง Invoice Number + Invoice Date; ไม่มี → แสดง Delivery Number |
| Invoice Discount | ส่วนลดระดับ Invoice |
| Net Amount | ยอดรวมสุทธิ (คำนวณอัตโนมัติ) |
| Received By | ชื่อผู้รับสินค้า |
| Received Date | วันที่รับ (default: วันนี้) |

### GRN Item Fields

| Field | Description |
|-------|-------------|
| Item Code / Item Name | ค้นหาจาก Search Item Master (ชื่อหรือรหัส) |
| Receive Type | Paid หรือ Free QTY |
| Received Quantity | จำนวนที่รับ |
| Free Quantity | จำนวนแถม |
| UOM | หน่วยย่อย |
| Batch ID | Lot No. |
| Expiry Date | วันหมดอายุ |
| Unit Price | ราคาต้นทุนต่อหน่วย |
| Discount | ส่วนลดระดับ Item |
| Comments | หมายเหตุระดับ Item |

### GRN Status Flow

```
[New] → Save → Approval Required → Approve → Raised (สต็อกอัปเดต)
                                 → Cancel → Cancelled
```

### GRN Actions

| Action | Available When | Result |
|--------|---------------|--------|
| View | ทุกสถานะ | ดูรายละเอียด |
| Print | ทุกสถานะ | Preview report |
| Modify | Approval Required เท่านั้น | แก้ไขข้อมูล |
| Approve | Approval Required เท่านั้น | เปลี่ยนเป็น Raised + รับสต็อก |
| Cancel | Approval Required เท่านั้น | เปลี่ยนเป็น Cancelled |

---

## 2. Stock Request — การสร้างใบขอเบิก

### 2 ประเภทใบขอเบิก

| Type | Thai | Use Case |
|------|------|----------|
| **Transfer** | โอนสินค้า | เบิกระหว่างคลัง (Store ↔ Store) |
| **Issue** | ตัดจ่ายสินค้า | เบิกจากคลังไปยังแผนก (Store → Department) |

### Stock Request Fields — Transfer

| Field | Description |
|-------|-------------|
| Type | Transfer |
| Request from Store | คลังที่ขอเบิก (ต้นทาง) |
| Request to Store | คลังปลายทาง |
| Comments | หมายเหตุ |
| Items | รายการสินค้า (ค้นหาจาก Item Master / Less Than Reorder Level / Stock Moving Items) |

### Stock Request Fields — Issue

| Field | Description |
|-------|-------------|
| Type | Issue |
| From Department | แผนกที่ขอเบิก |
| Request to Store | คลังที่จะจ่ายสินค้า |
| Comments | หมายเหตุ |
| Items | รายการสินค้า |

### Item Selection Methods

1. **Search Item Master** — ค้นหาจาก Item Name / Item Code
2. **Item Less Than Reorder Level** — เลือกรายการที่ต่ำกว่า Reorder Level
3. **Stock Moving Item** — เลือกจากรายการเคลื่อนไหว (Active From–To, Item Type)
   - แสดง Stock in Hand (From/To Store), Stock Out Quantity, Request Quantity

### Item Fields (Stock Request)

| Field | Description |
|-------|-------------|
| Stock in Hand at From Store | ยอดที่คลังที่ขอเบิก |
| Max. Stock Level at From Store | ปริมาณสูงสุดที่กำหนด |
| Stock in Hand at To Store | ยอดที่คลังปลายทาง |
| Quantity | จำนวนที่ขอเบิก |
| UOM | หน่วยย่อย |
| Purchasing UOM | หน่วยใหญ่ (Pack Size) |
| Comments | หมายเหตุระดับ Item |

### Stock Request Status

| Status | Description |
|--------|-------------|
| Approval Required | รอการอนุมัติ |
| Partially Raised | อนุมัติ/โอน/ตัดจ่ายบางส่วน |
| Raised | อนุมัติแล้ว รอโอน/ตัดจ่าย |
| Completed | โอน/ตัดจ่ายเสร็จสิ้น ผู้รับได้สินค้าแล้ว |
| Cancelled | ยกเลิก |

### Stock Request Actions

| Icon | Action | Condition |
|------|--------|-----------|
| View | ดูรายละเอียด | ทุกสถานะ |
| Print | Preview report | ทุกสถานะ |
| Modify | แก้ไข | Approval Required เท่านั้น |
| Approve | อนุมัติ (เลือก item รายการ) | Approval Required |
| Cancel | ยกเลิก (ต้องระบุ Cancel Reason) | Approval Required เท่านั้น |
| Stock Transfer/Issue | โอน/ตัดจ่ายสินค้า | Status = Raised |

---

## 3. Stock Transfer & Issue — การโอนและตัดจ่ายสินค้า

### 6 ประเภทการตัดจ่าย (Issue Types)

| Code | Thai | Description |
|------|------|-------------|
| ISSBOR | ตัดคืนจากการยืม | Return borrowed item to external |
| ISSLEND | ตัดจ่ายให้ยืม | Lend to external |
| ISSEXC | จ่ายคืนแลกเปลี่ยน | Exchange return to vendor |
| ISSDEPT | จ่ายไปแผนกอื่น | Issue to non-store department |
| ISSRECA | คืนสินค้าเรียกคืน | Recall return |
| CONSUMP | ตัดจ่ายยาแตก/เสียหาย | Damage/breakage/adjustments |

### วิธีดำเนินการโอน/ตัดจ่าย

**กรณีมีใบ Stock Request:**
1. Stock Request → กด In icon → เลือก Stock Transfer/Issue icon (Status = Raised)
2. แก้ไข Transfer Qty ได้ (น้อยกว่า Request ได้ แต่ไม่มากกว่า)
3. Save → แสดงเลขที่ Transfer/Issue

**กรณีไม่มีใบ Stock Request (Without Stock Request):**
1. เมนู Stock Transfer/Issue → สร้างใหม่
2. เลือก Type: Transfer หรือ Issue

### Transfer Fields

| Field | Description |
|-------|-------------|
| Type | Transfer |
| From Store | คลังต้นทาง |
| To Store | คลังปลายทาง |
| Item | ค้นหาจาก Item Master |
| QTY at From Store | ยอดคงคลังต้นทาง |
| QTY at To Store | ยอดคงคลังปลายทาง |
| Batch Detail | เลือก Batch ที่ต้องการ |
| UOM | หน่วยสินค้า |
| Transfer QTY | จำนวนที่โอน |
| Weighted Average Cost | ราคาต้นทุนเฉลี่ย (แสดงอัตโนมัติ) |
| Total Value | มูลค่ารวม (แสดงอัตโนมัติ) |

### Issue Fields

| Field | Description |
|-------|-------------|
| Type | Issue |
| From Store | คลังที่จ่ายสินค้า |
| To Department | แผนกที่รับสินค้า |
| Item | ค้นหาจาก Item Master |
| QTY at Store | ยอดคงเหลือที่คลัง |
| Batch Detail | เลือก Batch |
| Transfer QTY | จำนวนที่ตัดจ่าย |

### Transfer Status Flow

```
Transfer: Raised → (Accept ปลายทาง) → Completed
          หรือ    → (ถ้าไม่มี Approval Required Transfer In) → Completed ทันที
Issue: Raised → Completed (ไม่ต้อง Accept)
```

### เอกสารอ้างอิงคู่ (Linked Documents)

| เหตุการณ์ก่อน | เหตุการณ์ถัดมา |
|--------------|--------------|
| RCVBOR | ISSBOR |
| ISSLEND | RCVLEND |
| ISSEXC | RCVEXC |
| ISSRECA | RCVRECA |

---

## 4. Stock Adjustment — การปรับปรุงยอด

- ปรับได้เฉพาะ **จำนวน** เท่านั้น (ไม่สามารถแก้ไข Batch ID หรือ Expiry Date)

### Adjustment Fields

| Field | Description |
|-------|-------------|
| Store | คลังสินค้า |
| Stock Adjust Type | ปรับจากการตรวจนับ |
| Item | ค้นหาจาก Item Master |
| Batch ID | Lot No. |
| Expiry Date | วันหมดอายุ |
| Balance Quantity | ยอดคงเหลือปัจจุบัน |
| Adjust Quantity | จำนวนที่ต้องการปรับ (+/-) |
| New Quantity | ยอดใหม่ = Balance + Adjust Quantity |
| Comments | หมายเหตุ |

Status Flow: `Approval Required → Approve → Completed / Cancel → Cancelled`

---

## 5. Stock Count — การตรวจนับสินค้า

กระบวนการ: **Snapshot** → **Enter Count** → **Finalize** → **Stock Adjustment**

### ขั้นตอน Stock Count

1. สร้างใบนับ → เลือก Store + Stock Audit Group + Include Batch Expired
2. เรียงตาม Name หรือ Store Bins
3. เลือกรายการ → **Snapshot** (บันทึกยอด ณ เวลานั้น)
4. **Enter Count** — ระบุ Count Quantity ที่นับจริง:
   - Quantity at time of taking Snapshot
   - Quantity transaction since Snapshot (รายการที่เกิดหลัง Snapshot)
   - Count Quantity (ผู้ใช้ระบุ)
   - Quantity Difference (แสดงอัตโนมัติ)
5. Save (ต้องครบทุกรายการ)
6. **Finalize** → เปลี่ยน Status เป็น Raised
7. **Stock Adjustment** icon → ปรับปรุงยอดรายการที่มีส่วนต่าง → Approve

---

## 6. Stock Balance — ตรวจสอบยอดคงเหลือ

### Search Filters

| Filter | Description |
|--------|-------------|
| Store | คลังสินค้า |
| Search Item Master | ค้นหา Item |
| Incl. Zero QTY | แสดงรายการที่ยอด = 0 |
| Less than Reorder Level | แสดงเฉพาะที่ต่ำกว่า Reorder Level |
| Less than equal Minimum Level | แสดงที่ต่ำกว่าหรือเท่ากับ Min Level |
| More than Max. Level | แสดงที่มากกว่า Max Level |

### สีแสดงสถานะ

| สี | ความหมาย |
|----|----------|
| แดง | Less Than Reorder Level |
| ส้ม | More Than Max Level |
| ฟ้า | Item with Zero Stock |
| เทา | Less than equal Minimum Level |

### Sub-features

- **Active Stocks tab** — `Expires within X days` (30/60/180 วัน)
- **Expired Stock tab** — รายการหมดอายุ + Batch ID + Expiry Date
- **Stock Summary popup** — ยอดคลังที่เลือก + Other Stores + Total Store Quantity
- **Stock Ledger popup** — การเคลื่อนไหวของ Item นั้น

---

## 7. Stock Ledger — การเคลื่อนไหวสินค้า

### Search Filters

| Filter | Description |
|--------|-------------|
| From – To | ช่วงเวลา |
| Store | คลังสินค้า |
| Search Item Master | รายการสินค้า |

### Ledger Columns

| Column | Description |
|--------|-------------|
| Date Time | วันเวลาที่เกิดการเคลื่อนไหว |
| Transaction | ชนิดของการเคลื่อนไหว |
| Type | In / Out |
| User | ชื่อผู้ทำรายการ |
| Batch ID | Lot No. |
| Ref. In | เลขที่อ้างอิง |
| Weighted Average Cost | ราคาต้นทุนเฉลี่ยถ่วงน้ำหนัก |
| Total Value | มูลค่ารวม |
| QTY | จำนวน |
| Closing Stock | ยอดปิด |

---

## Interface with Back Office

- **PO (Purchase Order)** จาก Back Office → **RCVPUR** (Goods Receive) ใน Inventory
- เมื่อเชื่อมระบบจัดซื้อ ข้อมูลจะ Interface มายัง HIS อัตโนมัติ

## Store Configuration

- **Approval Required for Transfer In** — ถ้าตั้งค่า คลังปลายทางต้อง Accept ก่อนสถานะเป็น Completed
- ถ้าไม่ได้ตั้งค่า Transfer จะ Completed ทันทีหลัง Save

## Workflows

- [[Inventory Receive Workflow]] — ขั้นตอนรับสินค้า GRN ครบวงจร
- [[Inventory Transfer Request Workflow]] — Request → Approve → Transfer/Issue

## Entities

- [[Inventory Receive Screen]] — หน้าจอรับสินค้า
- [[Inventory Transfer Screen]] — หน้าจอโอน/ตัดจ่ายสินค้า

## Integration Points

| Module | Integration |
|--------|-------------|
| [[Pharmacy]] | คลังสินค้ายา — Stock management, GRNRET, Stock Ledger |
| All Departments | ขอเบิกสินค้า (Stock Request — Issue type) |
| Back Office | PO → Goods Receive (RCVPUR) |
| [[CSSD]] | เวชภัณฑ์ปลอดเชื้อ — Tray master items |
