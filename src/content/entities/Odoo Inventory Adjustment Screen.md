---
title: Odoo Inventory Adjustment Screen
type: entity
sources: ["phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf"]
roles: [WarehouseStaff, Pharmacist, AdminSystem, ITSupport]
created: 2026-04-28
updated: 2026-04-28
tags: [entity, odoo, inventory, adjustment, stock]
verified-on-uat: 2026-04-28
---

# Odoo Inventory Adjustment Screen

## Purpose

Inventory Adjustment screen for stock count correction and Odoo ↔ HIS stock-adjustment interface.

## Access Path

Odoo → Inventory → Operations → Inventory Adjustments

## Header Fields

| Field | Description |
|-------|-------------|
| Product Selection | All Product, Manual Selection, Product Category, One Product, Lot/Serial Number. |
| Location | Stock location to adjust. |
| Date | Adjustment date. |
| Assigned To | Counter / assigned user. |
| Owner | Responsible owner. |

## Adjustment Line Fields

| Field | Description |
|-------|-------------|
| Location | Location. |
| Product | Product. |
| Lot/Serial Number | Lot or serial number. |
| UOM | Unit of measure. |
| Counted Quantity | Counted stock quantity. |
| Difference | Difference between system quantity and counted quantity. |
| Schedule Date | Scheduled date. |
| Users | Users involved. |

## Actions

| Action | Result |
|--------|--------|
| Begin Adjustment | Draft → In Progress. |
| Adjustment | Opens adjustment detail lines. |
| Apply All | Applies counted quantity values. |
| Apply | Confirms reason and posts the stock difference. |

## HIS / Odoo Rule

- Medicine and medical-supply adjustment can be done in either Odoo or HIS.
- If adjusted in Odoo, interface to HIS is real-time.
- If adjusted in HIS, data is sent back to Odoo on the defined batch cycle from HIS.

## Related Pages

- [Odoo Inventory Adjustment and Reporting Workflow](/workflows/odoo-inventory-adjustment-and-reporting-workflow/)
- [HIS ERP Interface Data Dictionary](/concepts/his-erp-interface-data-dictionary/)
- [Odoo Inventory Movement Types](/concepts/odoo-inventory-movement-types/)

