---
title: Warehouse Staff
type: role
role-id: WarehouseStaff
icon: package
accent: '#6E665C'
verified-on-uat: pending
status: tier-2-pending
sources: ["phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf", "phase-4-uat-documents/2. Odoo ERP/2. Odoo - รายงานผลการทดสอบเชื่อมต่อ Odoo กับระบบต่างๆ.pdf"]
created: 2026-04-28
updated: 2026-04-28
tags: [role, warehouse, inventory, odoo]
---

# Warehouse Staff

## Scope

ผู้ใช้งานคลังสินค้า/พัสดุใน [Odoo ERP](/modules/odoo-erp/) และผู้เกี่ยวข้องกับ stock interface กับ MEDHIS.

## Daily Pages

- [Odoo ERP](/modules/odoo-erp/)
- [Odoo Inventory Operation Screen](/entities/odoo-inventory-operation-screen/)
- [Odoo Product Master Screen](/entities/odoo-product-master-screen/)
- [Odoo Internal Transfer Screen](/entities/odoo-internal-transfer-screen/)
- [Odoo Inventory Adjustment Screen](/entities/odoo-inventory-adjustment-screen/)
- [Odoo Internal Transfer Workflow](/workflows/odoo-internal-transfer-workflow/)
- [Odoo Inventory Adjustment and Reporting Workflow](/workflows/odoo-inventory-adjustment-and-reporting-workflow/)
- [MEDHIS Odoo Inventory Interface Workflow](/workflows/medhis-odoo-inventory-interface-workflow/)
- [HIS ERP Interface](/concepts/his-erp-interface/)
- [HIS ERP Interface Data Dictionary](/concepts/his-erp-interface-data-dictionary/)
- [Odoo Inventory Movement Types](/concepts/odoo-inventory-movement-types/)
- [HIS ERP Interface Log and Error Handling](/entities/his-erp-interface-log-and-error-handling/)

## Phase 4 Operation Map

See Phase 4 Role Operation Map.

| Question | Start With |
|----------|------------|
| Product master or Send API to HIS | [Odoo Product Master Screen](/entities/odoo-product-master-screen/), [HIS ERP Interface Data Dictionary](/concepts/his-erp-interface-data-dictionary/) |
| Internal transfer | [Odoo Internal Transfer Workflow](/workflows/odoo-internal-transfer-workflow/), [Odoo Internal Transfer Screen](/entities/odoo-internal-transfer-screen/) |
| Inventory adjustment and count difference | [Odoo Inventory Adjustment and Reporting Workflow](/workflows/odoo-inventory-adjustment-and-reporting-workflow/), [Odoo Inventory Adjustment Screen](/entities/odoo-inventory-adjustment-screen/) |
| Medicine/medical-supply movement | [MEDHIS Odoo Inventory Interface Workflow](/workflows/medhis-odoo-inventory-interface-workflow/), [Odoo Inventory Movement Types](/concepts/odoo-inventory-movement-types/) |
| Interface error or rerun | [HIS ERP Interface Rerun and Error Handling Workflow](/workflows/his-erp-interface-rerun-and-error-handling-workflow/), [HIS ERP Interface Log and Error Handling](/entities/his-erp-interface-log-and-error-handling/) |

## Responsibilities

- Validate goods receipt and inventory operations.
- Maintain Odoo location data aligned with HIS Store data for medicines and medical supplies.
- Review stock adjustments, returns, scrap, reordering, and stock reports.
- Coordinate with HIS/Pharmacy when medicine or medical-supply movement must originate from HIS.
