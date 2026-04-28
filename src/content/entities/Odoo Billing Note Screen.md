---
title: Odoo Billing Note Screen
type: entity
sources: ["phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf"]
roles: [FinanceAccounting]
created: 2026-04-28
updated: 2026-04-28
tags: [entity, odoo, accounting, billing-note, accounts-receivable]
verified-on-uat: 2026-04-28
---

# Odoo Billing Note Screen

## Purpose

Billing Note screen for grouping customer invoices, validating the billing note, printing it, confirming customer receipt, and registering payment.

## Access Path

Odoo → Accounting → Customers → Billing Note

## Header Fields

| Field | Description |
|-------|-------------|
| Partner | Customer/partner for billing note. |
| Filter / Select All | Filter invoice list or select all filtered invoices. |
| Billing Date | Billing note date; defaults to current date and can be edited. |
| Credit Term | Customer credit term. |
| Payment Date | Payment date used for billing/payment status calculation. |

## Invoice Detail Fields

| Field | Description |
|-------|-------------|
| Invoice | Invoice number; multiple invoices can be included. |
| Note | Note about invoice or billing note. |
| Term | Invoice payment term. |
| Date Invoice | Original invoice date. |
| Due Date | Invoice due date. |
| Amount | Invoice total. |
| Balance | Remaining unpaid amount. |
| WHT Total | Withholding tax total, if applicable. |
| Billing Amount | Amount to collect under this billing note. |

## State Actions

| Action | Result |
|--------|--------|
| Validate | Draft → Billing. |
| Print | Print Billing Note document. |
| Customer Confirm | Billing → Waiting Payment after customer signs/accepts billing note. |
| Register Payment | Record customer payment after payment is received. |

## Related Pages

- [Odoo Billing and Receivables Workflow](/workflows/odoo-billing-and-receivables-workflow/)
- [Odoo Customer Invoice Screen](/entities/odoo-customer-invoice-screen/)
- [Odoo Payment Screen](/entities/odoo-payment-screen/)

