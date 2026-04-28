---
title: Inventory Transfer Screen
type: entity
sources: ["14.MEDHIS Manual_Inventory V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, inventory, stock, transfer, screen]
roles: [AdminSystem]
verified-on-uat: pending
---

# Inventory Transfer Screen — หน้าจอโอน/ตัดจ่ายสินค้า

## Purpose

หน้าจอสำหรับโอนสินค้าระหว่างคลัง (Transfer) หรือตัดจ่ายสินค้าไปยังแผนก (Issue) โดยตรงโดยไม่ต้องอาศัยใบ Stock Request

## Access Path

**Inventory Management** → Stock Transfer / Issue

## Fields

### Search / Filter (หน้าหลัก)

| Field | Type | Description |
|-------|------|-------------|
| Type | Dropdown | Transfer / Issue |
| From – To | Date Range | ช่วงวันที่ |
| From Store | Dropdown | คลังต้นทาง |
| To Store | Dropdown | คลังปลายทาง |
| Stock Transfer Number | Text | เลขที่การโอน/ตัดจ่าย |
| Search Item Master | Search | ค้นหาจากสินค้า |
| Status | Dropdown | สถานะ |

### Transfer Form Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Type | Dropdown | ใช่ | Transfer |
| From Store | Dropdown | ใช่ | คลังต้นทาง |
| To Store | Dropdown | ใช่ | คลังปลายทาง |
| Search Item Master | Search | ใช่ | ค้นหา Item |
| QTY at From Store | Display | — | ยอดคงคลังต้นทาง |
| QTY at To Store | Display | — | ยอดคงคลังปลายทาง |
| Batch Detail | Dropdown | ใช่ | เลือก Batch |
| UOM | Display | — | หน่วยสินค้า |
| Transfer QTY | Number | ใช่ | จำนวนที่โอน |
| Weighted Average Cost | Display | — | ราคาต้นทุนเฉลี่ย |
| Total Value | Display | — | มูลค่ารวม |
| Comments | Text | ไม่ | หมายเหตุระดับ Item |

### Issue Form Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Type | Dropdown | ใช่ | Issue (พร้อม sub-type: ISSBOR/ISSLEND/ISSEXC/ISSDEPT/ISSRECA/CONSUMP) |
| From Store | Dropdown | ใช่ | คลังที่จ่ายสินค้า |
| To Department | Dropdown | ใช่ | แผนกที่รับสินค้า |
| Vendor | Dropdown | conditional | กรณี ISSBOR/ISSLEND/ISSEXC ต้องระบุ |
| Search Item Master | Search | ใช่ | ค้นหา Item |
| QTY at Store | Display | — | ยอดคงเหลือที่คลัง |
| Batch Detail | Dropdown | ใช่ | เลือก Batch |
| UOM | Display | — | หน่วยสินค้า |
| Transfer QTY | Number | ใช่ | จำนวนที่ตัดจ่าย |
| Weighted Average Cost | Display | — | ราคาต้นทุนเฉลี่ย |
| Total Value | Display | — | มูลค่ารวม |
| Comments | Text | ไม่ | หมายเหตุ |

## Buttons

| Button | Action | Conditions | Result |
|--------|--------|------------|--------|
| Search | ค้นหา | — | แสดงรายการ |
| Clear | ล้างหน้าจอ | — | เริ่มใหม่ |
| New (+) | สร้างรายการใหม่ | — | เปิดฟอร์ม |
| + (Add Item) | เพิ่มสินค้า | — | เพิ่ม Item line |
| - (Delete Item) | ลบสินค้า | — | ลบ Item |
| Save | บันทึก | — | สร้างเลขที่ Transfer/Issue |
| View | ดูรายละเอียด | ทุกสถานะ | อ่านอย่างเดียว |
| Print | Preview report | ทุกสถานะ | สั่งพิมพ์ |
| Accept | รับสินค้า (คลังปลายทาง) | Transfer + Approval Required Transfer In | เปลี่ยนเป็น Completed |
| Cancel | ยกเลิก | ยังไม่ Accept | เปลี่ยนเป็น Cancelled |

## Status Notes

- **Transfer**: Raised → Accept → Completed (หรือ Completed ทันทีถ้าไม่ได้ตั้ง Approval Required Transfer In)
- **Issue**: Completed ทันทีหลัง Save (ไม่ต้อง Accept)
- Issue ที่ Completed แล้ว ไม่สามารถ Cancel ได้

## Related Workflows

- [[Inventory Transfer Request Workflow]]
