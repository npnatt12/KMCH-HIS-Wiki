---
title: Odoo Product Master Screen
type: entity
sources: ["phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf"]
roles: [WarehouseStaff, Procurement, FinanceAccounting, AdminSystem]
created: 2026-04-28
updated: 2026-04-28
tags: [entity, odoo, product, master-data, inventory]
verified-on-uat: 2026-04-28
---

# Odoo Product Master Screen

## Purpose

Odoo Product master for products, medicines, medical supplies, services, purchase/sales behavior, UOM, product category, and HIS product interface trigger.

## Access Path

Odoo → Inventory → Products → Products → New

## Header Fields

| Field | Description |
|-------|-------------|
| Product Name | Product name. |
| Product Condition | Can be Sold, Can be Purchased. |
| Image | Product image. |
| Product Tab | Product detail tabs. |
| Internal Note | Internal note. |

## General Information

| Field | Description |
|-------|-------------|
| Product Category | Category such as medicine or medical supplies. Category can control whether Send API to HIS is available. |
| Product Type | Storable Product, Consumable, or Service; inherited from Product Category rules. |
| Invoicing Policy | Ordered quantities or delivered quantities. |
| Withholding Tax | WHT setting. |
| Unit of Measure | Stock counting unit. |
| Purchase UoM | Purchase unit. |
| Sales Price | Sales price. |
| Customer Taxes | Sales tax. |
| Cost | Product cost. |
| Internal Reference | Internal product code, running by Product Category. |
| Barcode | Barcode for scanning/search. |
| Product Tags | Search/filter grouping tags. |
| Company | Owning company. |

## Purchase Tab

| Field | Description |
|-------|-------------|
| Vendor Taxes | Purchase tax. |
| Control Policy | Vendor bill based on ordered quantities or received quantities. |
| Purchase Description | Description printed or carried to purchase documents. |

## Inventory Tab

| Field | Description |
|-------|-------------|
| Routes | Product route / supply method. |
| Responsible | Responsible person. |
| Weight / Volume | Logistics dimensions. |
| Customer Lead Time | Delivery lead time. |
| Tracking | Unique Serial Number, Lots, or No Tracking. |
| Inventory Location | Location used for stock adjustment. |
| Description for Receipts | Receipt document description. |
| Description for Delivery Order | Delivery document description. |
| Description for Internal Transfers | Internal transfer description. |

## Interface Rules

- Medicine and medical-supply product data must align between Odoo and HIS.
- Product Category controls whether product master can be sent to HIS by API.
- UOM code and Product Category code are part of the Product interface UAT evidence.

## Related Pages

- [HIS ERP Interface Data Dictionary](/concepts/his-erp-interface-data-dictionary/)
- [Odoo ERP](/modules/odoo-erp/)

