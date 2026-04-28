---
title: Odoo Billing and Receivables Workflow
type: workflow
sources: ["phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf", "phase-4-uat-documents/2. Odoo ERP/3. Odoo - รายงานผลการทดสอบระบบ (UAT).pdf"]
roles: [FinanceAccounting]
created: 2026-04-28
updated: 2026-04-28
tags: [workflow, odoo, accounts-receivable, billing, invoice]
verified-on-uat: 2026-04-28
---

# Odoo Billing and Receivables Workflow

## Overview

กระบวนการลูกหนี้/รายได้ใน [Odoo ERP](/modules/odoo-erp/) สำหรับ Customer Invoice, Credit Note, Debit Note, Billing Note, and Customer Payment.

## Customer Invoice Steps

1. Finance opens Accounting → Customers → Invoices.
2. User creates or selects invoice.
3. User enters Customer, invoice date, HN/VN or patient context where applicable, journal, products/services, analytic account, taxes, WHT, and total.
4. User saves draft.
5. User confirms invoice; status becomes Posted.
6. Journal Items are generated based on Product, Tax, and Customer mappings.

## Credit Note / Debit Note

1. User opens posted invoice.
2. User selects Add Credit Note or Add Debit Note.
3. User enters reason, note date, copy-line option, and journal.
4. System creates draft note from original invoice.
5. User checks patient, HN, VN, doctor, type OPD/IPD, products, price, tax, and subtotal.
6. User confirms note; status becomes Posted.

## Billing Note

1. User opens Accounting → Customers → Billing Note.
2. User selects Partner and filters/selects invoices.
3. User enters Billing Date, Credit Term, Payment Date, and invoice detail lines.
4. User validates; state changes Draft → Billing.
5. User prints Billing Note.
6. After customer signs/accepts, user presses Customer Confirm; state becomes Waiting Payment.
7. When paid, user registers payment.

## Customer Payment

1. User opens unpaid or partially paid customer invoice or Payment With Invoice.
2. User registers payment.
3. User adds payment method and amount.
4. User confirms payment; invoice/payment status updates.

## Related Interfaces

- [MEDHIS Odoo Revenue Interface Workflow](/workflows/medhis-odoo-revenue-interface-workflow/) sends HIS Receipt, Invoice, Deposit, and Onward entries into Odoo.

## Entity

- [Odoo Accounting Forms](/entities/odoo-accounting-forms/)
- [Odoo Customer Invoice Screen](/entities/odoo-customer-invoice-screen/)
- [Odoo Billing Note Screen](/entities/odoo-billing-note-screen/)
- [Odoo Payment Screen](/entities/odoo-payment-screen/)
