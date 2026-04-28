---
title: Odoo Inventory Operation Screen
type: entity
sources: ["phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf"]
roles: [WarehouseStaff, Procurement, ITSupport]
created: 2026-04-28
updated: 2026-04-28
tags: [entity, odoo, inventory, stock, warehouse]
verified-on-uat: 2026-04-28
---

# Odoo Inventory Operation Screen

## Purpose

Odoo inventory operation surfaces for receipts, locations, internal transfer, adjustment, scrap, return, reordering, lots, and stock reports.

## Access Paths

| Operation | Access |
|-----------|--------|
| Receipts | Inventory → Overview → Receipts |
| Locations | Inventory → Configuration → Locations |
| Internal Transfer | Inventory → Internal Transfer card |
| Inventory Adjustment | Inventory → Operations → Inventory Adjustments |
| Scrap | Inventory → Operations → Scrap |
| Reports | Inventory → Reporting |

## Inventory Stages

| Stage | Meaning |
|-------|---------|
| Draft | New operation |
| Waiting | Waiting for product availability |
| Waiting Another Operation | Waiting for prior operation |
| Ready | Ready to process |
| Done | Completed; cannot create retroactive PO from it |
| Cancelled | Cancelled operation |

## Location Fields

| Field | Description |
|-------|-------------|
| Location Name | Name |
| Parent Location | Parent node |
| Location Type | Vendor, View, Internal, Customer, Inventory Loss, Production, Transit |
| Storage Category | Storage category |
| Is Scrap / Return Location | Special location flags |
| Removal Strategy | FIFO/LIFO strategy |
| Inventory Frequency | Count interval |

## Adjustment Selection Options

- All Product
- Manual Selection
- Product Category
- One Product
- Lot/Serial Number

## HIS Interface Rule

For medicine and medical supplies, internal movement should be performed in MEDHIS and sent to Odoo through [MEDHIS Odoo Inventory Interface Workflow](/workflows/medhis-odoo-inventory-interface-workflow/) at end-of-day.

## Related Pages

- [Odoo ERP](/modules/odoo-erp/)
- [HIS ERP Interface](/concepts/his-erp-interface/)
- [Odoo Product Master Screen](/entities/odoo-product-master-screen/)
- [Odoo Internal Transfer Screen](/entities/odoo-internal-transfer-screen/)
- [Odoo Inventory Adjustment Screen](/entities/odoo-inventory-adjustment-screen/)
- [Odoo Inventory Movement Types](/concepts/odoo-inventory-movement-types/)
