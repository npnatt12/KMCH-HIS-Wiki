---
title: Odoo Customer Invoice Screen
type: entity
sources: ["phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf"]
roles: [FinanceAccounting]
created: 2026-04-28
updated: 2026-04-28
tags: [entity, odoo, accounting, accounts-receivable, invoice]
verified-on-uat: 2026-04-28
---

# Odoo Customer Invoice Screen

## Purpose

Customer Invoice screen for AR billing, patient invoice detail, journal item generation, and customer payment registration in [Odoo ERP](/modules/odoo-erp/).

## Access Path

Odoo → Accounting → Customers → Invoices

## List Columns

| Field | Description |
|-------|-------------|
| Number | Invoice number. |
| Customer | Customer / debtor. |
| Invoice Date | Invoice date. |
| Due Date | Due date / payment term. |
| Activities | Activity tracking. |
| Tax Excluded | Amount excluding tax. |
| Total | Total amount. |
| Total in Currency | Amount in other currency. |
| Payment Status | Not Paid, In Payment, Paid, Partially Paid, Reversed. |
| Status | Draft, Posted, Cancelled. |

## Invoice Fields

| Field | Description |
|-------|-------------|
| Customer | Customer/debtor. |
| Invoice Date | Invoice issue date. |
| HN | Patient HN. |
| Payment Reference | Payment reference document. |
| Patient | Patient name. |
| Due Date | Payment terms / due date. |
| VN | Visit number. |
| Journal | Accounting journal. |
| Policy No. | Insurance/policy number. |
| Type | Encounter type such as IPD or OPD. |
| Doctor | Doctor. |
| Origin | Source document. |
| Product / Label | Product and product label. |
| Analytic | Analytic account. |
| Quantity / UoM | Quantity and unit. |
| Price / Disc / Taxes / Subtotal | Amount fields. |

## Actions

| Action | Result |
|--------|--------|
| Save | Save draft invoice. |
| Confirm | Draft → Posted; invoice number appears; journal items generated from product, tax, and partner/account setup. |
| Register Payment | Opens customer payment flow. |

## Related Pages

- [Odoo Billing and Receivables Workflow](/workflows/odoo-billing-and-receivables-workflow/)
- [Odoo Billing Note Screen](/entities/odoo-billing-note-screen/)
- [Odoo Payment Screen](/entities/odoo-payment-screen/)

