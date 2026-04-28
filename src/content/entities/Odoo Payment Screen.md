---
title: Odoo Payment Screen
type: entity
sources: ["phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf"]
roles: [FinanceAccounting]
created: 2026-04-28
updated: 2026-04-28
tags: [entity, odoo, accounting, payment, accounts-payable, accounts-receivable]
verified-on-uat: 2026-04-28
---

# Odoo Payment Screen

## Purpose

Payment screen patterns for vendor payment and customer receipt in [Odoo ERP](/modules/odoo-erp/).

## Vendor Payment Entry Rules

| Rule | Description |
|------|-------------|
| Source document | Vendor Bill, vendor credit note, or vendor debit note. |
| Eligible state | Source document must be Posted. |
| Eligible payment status | Not Paid or Partially Paid. |
| Hidden documents | Cancelled and fully paid documents are not shown for payment selection. |

## Vendor Payment Fields

| Field | Description |
|-------|-------------|
| Payment Date | Payment date. |
| Amount | Payment amount. |
| Memo | Payment reference. |

## Vendor Payment Actions

| Action | Result |
|--------|--------|
| Register Payment | Opens payment creation. |
| Create Payment | Creates draft payment document. |
| Choose From Invoices | Select specific posted unpaid/partial documents. |
| Show All | Show all eligible documents for the partner. |
| Add Method | Add cash, transfer, QR Code, cheque, or other payment method. |
| Confirm & Close | Confirm payment method row. |
| Confirm | Draft → Posted. |
| Cancel | Only allowed while payment is Draft. |
| Reset to Draft | Reuse cancelled draft payment document. |

## Payment Method Fields

| Method Type | Fields |
|-------------|--------|
| Cash / Transfer / QR / Other | Method, Amount, Note |
| Cheque | Method, Cheque No., Bank Account, Partner, Amount, Pay, Currency, Reference, Journal, Cheque Date |

## Customer Receipt Fields

| Field | Description |
|-------|-------------|
| Payment Date | Customer receipt date. |
| Amount | Amount received. |
| Currency | Receipt currency. |
| Memo | Receipt memo/reference. |
| Payment Type | Payment type. |
| Customer | Customer. |
| Journal | Journal. |
| Doc No. / Due Date | Document reference and due date. |
| Untaxed Amount / Amount Total / Amount WHT / Balance / Amount Paid | Payment allocation amounts. |
| Remarks | Additional notes. |

## Validation Rule

Customer receipt confirmation requires a payment method. If the user confirms without adding a method, the system warns the user.

## Related Pages

- [Odoo Billing and Receivables Workflow](/workflows/odoo-billing-and-receivables-workflow/)
- [Odoo Purchase to Pay Workflow](/workflows/odoo-purchase-to-pay-workflow/)
- [Odoo Customer Invoice Screen](/entities/odoo-customer-invoice-screen/)
- [Odoo Vendor Bill Screen](/entities/odoo-vendor-bill-screen/)

