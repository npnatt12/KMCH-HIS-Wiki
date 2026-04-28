---
title: Odoo Internal Transfer Screen
type: entity
sources: ["phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf"]
roles: [WarehouseStaff, Pharmacist]
created: 2026-04-28
updated: 2026-04-28
tags: [entity, odoo, inventory, internal-transfer, stock]
verified-on-uat: 2026-04-28
---

# Odoo Internal Transfer Screen

## Purpose

Internal Transfer screen for moving non-medicine stock inside Odoo and understanding when medicine/medical-supply movement must be performed in HIS.

## Access Path

Odoo → Inventory → Internal Transfer

## Fields

| Field | Description |
|-------|-------------|
| Contact | Contact. |
| Operation Type | Movement operation type. |
| Source Location | Source location. |
| Destination Location | Destination location. |
| Schedule Date | Scheduled movement date. |
| Source Document | Reference document. |
| From Supplier | Whether movement is from supplier. |
| Product | Product. |
| Done | Quantity moved. |
| UOM | Unit of measure. |

## Inventory Stages

| Stage | Meaning |
|-------|---------|
| Draft | Newly created transfer. |
| Waiting | Waiting for stock or readiness. |
| Waiting Another Operation | Waiting for another operation first. |
| Ready | Stock is ready for operation. |
| Done | Transfer completed. |
| Cancelled | Transfer cancelled. |

## Rule For Medicine / Medical Supplies

Medicine and medical-supply movement should be performed in HIS. HIS sends movement to Odoo at the scheduled interface cycle, so Odoo remains the accounting/inventory consolidation target rather than the point of operational stock movement for these items.

## Related Pages

- [Odoo Internal Transfer Workflow](/workflows/odoo-internal-transfer-workflow/)
- [Odoo Inventory Movement Types](/concepts/odoo-inventory-movement-types/)
- [MEDHIS Odoo Inventory Interface Workflow](/workflows/medhis-odoo-inventory-interface-workflow/)

