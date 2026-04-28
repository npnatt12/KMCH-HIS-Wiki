---
title: Odoo Inventory Adjustment and Reporting Workflow
type: workflow
sources: ["phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf", "phase-4-uat-documents/2. Odoo ERP/3. Odoo - รายงานผลการทดสอบระบบ (UAT).pdf"]
roles: [WarehouseStaff, Pharmacist, AdminSystem, ITSupport]
created: 2026-04-28
updated: 2026-04-28
tags: [workflow, odoo, inventory, adjustment, reporting]
verified-on-uat: 2026-04-28
---

# Odoo Inventory Adjustment and Reporting Workflow

## Overview

Stock adjustment workflow in [Odoo ERP](/modules/odoo-erp/), including product selection, count entry, stock difference posting, HIS interface behavior, and report review.

## Steps

1. Warehouse user opens Inventory → Operations → Inventory Adjustments.
2. User creates a new adjustment.
3. User selects Product Selection mode: All Product, Manual Selection, Product Category, One Product, or Lot/Serial Number.
4. User enters Location, Date, Assigned To, and Owner.
5. User presses Begin Adjustment; document changes from Draft to In Progress.
6. User opens Adjustment detail.
7. User reviews Location, Product, Lot/Serial Number, UOM, Counted Quantity, Difference, Schedule Date, and Users.
8. User enters counted quantity.
9. User presses Apply All.
10. System prompts for adjustment reason.
11. User confirms Apply; stock difference is posted.
12. If medicine or medical supply is adjusted in Odoo, interface sends Stock Adjust to HIS.
13. User reviews stock reporting such as stock balance, stock moves, forecasted stock, and stock valuation as needed.

## Reporting Surfaces

| Report | Purpose |
|--------|---------|
| Current Stock / Stock Balance | Review current stock on hand by product/location. |
| Forecasted | Review forecasted quantity after expected movements. |
| Stock Moves | Review historical movement lines. |
| Stock Valuation | Review inventory value. |

## Related Pages

- [Odoo Inventory Adjustment Screen](/entities/odoo-inventory-adjustment-screen/)
- [HIS ERP Interface Data Dictionary](/concepts/his-erp-interface-data-dictionary/)
- [Odoo Inventory Movement Types](/concepts/odoo-inventory-movement-types/)

