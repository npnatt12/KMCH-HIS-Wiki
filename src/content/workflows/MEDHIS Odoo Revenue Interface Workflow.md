---
title: MEDHIS Odoo Revenue Interface Workflow
type: workflow
sources: ["phase-4-uat-documents/1. MEDHIS/3. MEDHIS - รายงานผลการทดสอบเชื่อมโยงระบบ MEDHIS กับระบบงาน ODOO ERP.pdf", "phase-4-uat-documents/2. Odoo ERP/2. Odoo - รายงานผลการทดสอบเชื่อมต่อ Odoo กับระบบต่างๆ.pdf"]
roles: [FinanceAccounting, AdminSystem, ITSupport]
created: 2026-04-28
updated: 2026-04-28
tags: [workflow, interface, revenue, billing, odoo, medhis]
verified-on-uat: 2026-04-28
---

# MEDHIS Odoo Revenue Interface Workflow

## Overview

ส่งข้อมูลรายได้จาก [Billing](/modules/billing/) / MEDHIS ไปยัง [Odoo ERP](/modules/odoo-erp/) เพื่อบันทึกบัญชี Receipt, Invoice, Deposit, และ Onward revenue.

## Revenue Streams

| Stream | Direction | Timing | Accounting Target |
|--------|-----------|--------|-------------------|
| HIS Receipt | MEDHIS → Odoo | Daily 00:01 | Receipt/payment posting |
| HIS Invoice | MEDHIS → Odoo | Daily 00:01 | Invoice/debtor posting |
| Deposit | MEDHIS → Odoo | Daily interface group | Customer payment/deposit posting |
| HIS Onward | MEDHIS → Odoo | Monthly, first day of next month | IPD accrued revenue journal entry |

## Steps

1. [Billing](/modules/billing/) generates Receipt, Invoice, Deposit, or unbilled IPD Ward revenue.
2. Interface job selects eligible records:
   - includes valid records for the period
   - excludes same-day cancelled items
   - includes cross-day cancellation correction where applicable
3. MEDHIS creates interface payload or log file using the source-defined naming/running sequence.
4. MEDHIS sends one transaction or visit-level payload to [Odoo ERP](/modules/odoo-erp/) API.
5. Odoo records request and validates required fields.
6. Odoo creates invoice/payment/journal entry and maps account, cost center, profit center, customer/payor, patient, VN/AN, and doctor fields.
7. Odoo returns success or failure response.
8. Interface result is logged for audit and rerun.

## Key Fields

See [HIS ERP Interface Data Dictionary](/concepts/his-erp-interface-data-dictionary/) for full payload-level field mapping.

| Field Group | Examples |
|-------------|----------|
| Patient and encounter | HN, patient_name, episode_type, VN/AN |
| Billing document | receipt/invoice number, invoice_date, journal_code, move_type |
| Accounting | account_code, cost_code, profit_code, price_unit, balance |
| Payment | payment method, bank, reference, amount |
| Payor | customer / TPA code, insurance_code |

## Controls

- HIS should not edit original sales documents after interface; use cancellation/correction.
- Missing ERP mapping should result in ERP error visibility, then user fixes mapping and reruns.
- Logs should be retained for finance and interface support.

## Modules Involved

- [Billing](/modules/billing/)
- [Odoo ERP](/modules/odoo-erp/)
- [HIS ERP Interface](/concepts/his-erp-interface/)
- [HIS ERP Interface Data Dictionary](/concepts/his-erp-interface-data-dictionary/)
- [HIS ERP Interface Log and Error Handling](/entities/his-erp-interface-log-and-error-handling/)
