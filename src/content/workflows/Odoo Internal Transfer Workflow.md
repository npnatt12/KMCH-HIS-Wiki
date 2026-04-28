---
title: Odoo Internal Transfer Workflow
type: workflow
sources: ["phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf", "phase-4-uat-documents/2. Odoo ERP/3. Odoo - รายงานผลการทดสอบระบบ (UAT).pdf"]
roles: [WarehouseStaff, Pharmacist]
created: 2026-04-28
updated: 2026-04-28
tags: [workflow, odoo, inventory, internal-transfer, stock]
verified-on-uat: 2026-04-28
---

# Odoo Internal Transfer Workflow

## Overview

Internal transfer workflow for moving stock between Odoo locations, with explicit exception for medicine and medical supplies that must be operated in HIS.

## Steps

1. User opens Odoo → Inventory → Internal Transfer.
2. User creates a new internal transfer or opens an existing one.
3. User enters Contact, Operation Type, Source Location, Destination Location, Schedule Date, Source Document, From Supplier, Product, Done quantity, and UOM.
4. System places the transfer in the relevant inventory stage.
5. When stock is ready, user validates the transfer.
6. System moves stock and marks the transfer Done.
7. If the transfer is for medicine or medical supplies, user performs the operational movement in HIS instead; HIS sends movement to Odoo via interface.

## Stages

- Draft
- Waiting
- Waiting Another Operation
- Ready
- Done
- Cancelled

## Related Pages

- [Odoo Internal Transfer Screen](/entities/odoo-internal-transfer-screen/)
- [Odoo Inventory Movement Types](/concepts/odoo-inventory-movement-types/)
- [MEDHIS Odoo Inventory Interface Workflow](/workflows/medhis-odoo-inventory-interface-workflow/)

