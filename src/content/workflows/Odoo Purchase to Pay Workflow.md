---
title: Odoo Purchase to Pay Workflow
type: workflow
sources: ["phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf", "phase-4-uat-documents/2. Odoo ERP/3. Odoo - รายงานผลการทดสอบระบบ (UAT).pdf"]
roles: [Procurement, FinanceAccounting, WarehouseStaff]
created: 2026-04-28
updated: 2026-04-28
tags: [workflow, odoo, purchase, accounts-payable, inventory]
verified-on-uat: 2026-04-28
---

# Odoo Purchase to Pay Workflow

## Overview

กระบวนการจัดซื้อถึงจ่ายเงินใน [Odoo ERP](/modules/odoo-erp/) ตั้งแต่ RFQ / Purchase Order / Goods Receive / Vendor Bill / Payment.

## Steps

1. Procurement opens Purchase → Orders → Request for Quotation.
2. User creates RFQ and selects Vendor, Type (`Regular` or `Borrow`), expected arrival, delivery location, payment terms, source document, products, taxes, WHT, and terms.
3. User saves RFQ.
4. Optional: user sends RFQ by email; state changes from RFQ to RFQ Sent.
5. User confirms order; state changes to Purchase Order.
6. Inventory user sees Receive Products / Receipt smart button.
7. Warehouse receives goods and presses Validate.
8. If product control policy requires received quantities, system shows Create Bill only after goods receipt.
9. Finance creates Vendor Bill from PO, without PO, or via Auto Complete.
10. Finance enters Bill Date, Bill Reference, Accounting Date, Payment Terms, Journal, products, VAT, WHT, and totals.
11. Finance confirms bill; status changes Draft → Posted and journal items are generated.
12. Finance registers payment against posted bill.
13. User adds payment method such as cash, transfer, QR Code, cheque, or other configured method.
14. Finance confirms payment; payment status updates.

## Borrow Medicine Variant

1. RFQ Type = `Borrow`.
2. Unit price may be 0 for borrow flow.
3. Goods are received via Receipt.
4. When returning borrowed medicine, user opens receipt and presses Return.
5. System creates return document; user validates return.

## Cancellation Rules

| Stage | Cancellation |
|-------|--------------|
| Draft / RFQ Sent | Cancel with reason |
| Purchase Order | Cancel with reason if not blocked by received storable product rule |
| Cancelled | Can Set to Draft if user reuses document |

## Entities

- [Odoo Purchase Order Screen](/entities/odoo-purchase-order-screen/)
- [Odoo Vendor Bill Screen](/entities/odoo-vendor-bill-screen/)
- [Odoo Inventory Operation Screen](/entities/odoo-inventory-operation-screen/)

