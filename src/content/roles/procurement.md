---
title: Procurement
type: role
role-id: Procurement
icon: shopping-cart
accent: '#7F6B58'
verified-on-uat: pending
status: tier-2-pending
sources: ["phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf"]
created: 2026-04-28
updated: 2026-04-28
tags: [role, procurement, purchase, odoo]
---

# Procurement

## Scope

จัดซื้อจัดจ้างและเอกสาร RFQ/Purchase Order ใน [Odoo ERP](/modules/odoo-erp/).

## Daily Pages

- [Odoo ERP](/modules/odoo-erp/)
- [Odoo Purchase to Pay Workflow](/workflows/odoo-purchase-to-pay-workflow/)
- [Odoo Purchase Order Screen](/entities/odoo-purchase-order-screen/)
- [Odoo Vendor Bill Screen](/entities/odoo-vendor-bill-screen/)
- [Odoo Product Master Screen](/entities/odoo-product-master-screen/)
- [Odoo Payment Screen](/entities/odoo-payment-screen/)

## Phase 4 Operation Map

See Phase 4 Role Operation Map.

| Question | Start With |
|----------|------------|
| RFQ / Purchase Order fields and actions | [Odoo Purchase Order Screen](/entities/odoo-purchase-order-screen/), [Odoo Purchase to Pay Workflow](/workflows/odoo-purchase-to-pay-workflow/) |
| Borrow medicine purchase variant | [Odoo Purchase to Pay Workflow](/workflows/odoo-purchase-to-pay-workflow/) |
| Product and purchase UOM context | [Odoo Product Master Screen](/entities/odoo-product-master-screen/) |
| Goods receipt handoff to Warehouse | [Odoo Purchase to Pay Workflow](/workflows/odoo-purchase-to-pay-workflow/), [Odoo Inventory Operation Screen](/entities/odoo-inventory-operation-screen/) |
| Vendor bill and payment handoff to Finance | [Odoo Vendor Bill Screen](/entities/odoo-vendor-bill-screen/), [Odoo Payment Screen](/entities/odoo-payment-screen/) |
| UAT evidence for purchase flow | [Phase 4 UAT Coverage Matrix](/concepts/phase-4-uat-coverage-matrix/) |

## Responsibilities

- Create RFQ and Purchase Order.
- Manage Vendor Pricelist and purchase agreement/blanket order where applicable.
- Confirm order and coordinate goods receipt with warehouse/inventory users.
- Coordinate Vendor Bill and payment handoff with Finance Accounting after PO/receipt conditions are met.
- Cancel RFQ/PO with reason when needed.
