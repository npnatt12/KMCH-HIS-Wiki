---
title: Finance Accounting
type: role
role-id: FinanceAccounting
icon: receipt
accent: '#8E5A3B'
verified-on-uat: pending
status: tier-2-pending
sources: ["phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf", "phase-4-uat-documents/3. Telemed/เอกสารแนบงวดที่ 4 - Telemed /เอกสารแนบ 5 เอกสารขั้นตอนการใช้งานระบบแพทย์ทางไกล (Telemedicine).pdf"]
created: 2026-04-28
updated: 2026-04-28
tags: [role, finance, accounting, odoo, billing]
---

# Finance Accounting

## Scope

ฝ่ายการเงิน/บัญชีสำหรับ [Odoo ERP](/modules/odoo-erp/), [Billing](/modules/billing/), และขั้นตอนการเงินใน [Telemedicine Visit Workflow](/workflows/telemedicine-visit-workflow/).

## Daily Pages

- [Odoo ERP](/modules/odoo-erp/)
- [Odoo Purchase to Pay Workflow](/workflows/odoo-purchase-to-pay-workflow/)
- [Odoo Billing and Receivables Workflow](/workflows/odoo-billing-and-receivables-workflow/)
- [MEDHIS Odoo Revenue Interface Workflow](/workflows/medhis-odoo-revenue-interface-workflow/)
- [HIS ERP Interface](/concepts/his-erp-interface/)
- [HIS ERP Interface Data Dictionary](/concepts/his-erp-interface-data-dictionary/)
- [HIS ERP Interface Log and Error Handling](/entities/his-erp-interface-log-and-error-handling/)
- [HIS ERP Interface Rerun and Error Handling Workflow](/workflows/his-erp-interface-rerun-and-error-handling-workflow/)
- [Odoo Customer Invoice Screen](/entities/odoo-customer-invoice-screen/)
- [Odoo Billing Note Screen](/entities/odoo-billing-note-screen/)
- [Odoo Payment Screen](/entities/odoo-payment-screen/)
- [Odoo Vendor Bill Screen](/entities/odoo-vendor-bill-screen/)
- [Odoo Accounting Forms](/entities/odoo-accounting-forms/)
- [Telemedicine Medication Delivery Workflow](/workflows/telemedicine-medication-delivery-workflow/)

## Phase 4 Operation Map

See Phase 4 Role Operation Map.

| Question | Start With |
|----------|------------|
| Customer invoice, billing note, customer payment | [Odoo Billing and Receivables Workflow](/workflows/odoo-billing-and-receivables-workflow/), [Odoo Customer Invoice Screen](/entities/odoo-customer-invoice-screen/), [Odoo Billing Note Screen](/entities/odoo-billing-note-screen/), [Odoo Payment Screen](/entities/odoo-payment-screen/) |
| Vendor bill and vendor payment | [Odoo Purchase to Pay Workflow](/workflows/odoo-purchase-to-pay-workflow/), [Odoo Vendor Bill Screen](/entities/odoo-vendor-bill-screen/), [Odoo Payment Screen](/entities/odoo-payment-screen/) |
| MEDHIS Receipt/Invoice/Deposit/Onward posting | [MEDHIS Odoo Revenue Interface Workflow](/workflows/medhis-odoo-revenue-interface-workflow/), [HIS ERP Interface Data Dictionary](/concepts/his-erp-interface-data-dictionary/) |
| Interface failure or rerun | [HIS ERP Interface Rerun and Error Handling Workflow](/workflows/his-erp-interface-rerun-and-error-handling-workflow/), [HIS ERP Interface Log and Error Handling](/entities/his-erp-interface-log-and-error-handling/) |
| Telemedicine additional payment or receipt | [Telemedicine Medication Delivery Workflow](/workflows/telemedicine-medication-delivery-workflow/) |

## Responsibilities

- Confirm invoices, vendor bills, receipts, customer/vendor payments, credit/debit notes, and vouchers.
- Review interface-generated Receipt, Invoice, Deposit, and Onward postings.
- Resolve missing accounting mappings that block Odoo interface.
- In Telemedicine flow, issue/confirm QR payment and receipt where patient payment is needed.
