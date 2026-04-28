---
title: Odoo Purchase Order Screen
type: entity
sources: ["phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf"]
roles: [Procurement, WarehouseStaff, FinanceAccounting]
created: 2026-04-28
updated: 2026-04-28
tags: [entity, odoo, purchase, rfq, purchase-order]
verified-on-uat: 2026-04-28
---

# Odoo Purchase Order Screen

## Purpose

Odoo RFQ/Purchase Order screen for requesting quotation, confirming purchase, receiving products, and feeding Vendor Bill creation.

## Access Path

Odoo → Purchase → Orders → Request for Quotation / Purchase Orders

## Header Fields

| Field | Description |
|-------|-------------|
| Request for Quotation | Auto-running document number |
| Vendor | Supplier |
| Contact Person | Supplier contact |
| Type | `Regular` or `Borrow` |
| Vendor Reference / Vendor Ref. Date | Supplier quotation/reference document |
| Purchase Agreement | Linked blanket order or agreement |
| Currency | Purchase currency |
| Order Deadline | Deadline to confirm |
| Expected Arrival | Expected delivery date |
| Deliver To | Operation Type / destination receipt location |
| Payment Terms | Payment condition |
| Source Document | Government/internal source document reference |

## Product Line Fields

| Field | Description |
|-------|-------------|
| Product | Product name |
| Description | Item description |
| Quantity | Purchase quantity |
| UOM | Unit of measure |
| Unit Price | Price per unit |
| Taxes | VAT/tax |
| Amount WHT / WHT | Withholding tax value/type |
| Subtotal | Line subtotal |

## Button Actions

| Button | Result |
|--------|--------|
| Save | Save draft RFQ |
| Send By Email | State RFQ → RFQ Sent |
| Confirm Order | State RFQ/RFQ Sent → Purchase Order |
| Receive Products / Receipt | Open receipt for stock receiving |
| Cancel | Cancel document with reason |
| Set to Draft | Reopen cancelled document if permitted |

## Related Workflow

- [Odoo Purchase to Pay Workflow](/workflows/odoo-purchase-to-pay-workflow/)

