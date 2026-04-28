---
title: HIS ERP Interface Data Dictionary
type: concept
sources: ["phase-4-uat-documents/1. MEDHIS/3. MEDHIS - รายงานผลการทดสอบเชื่อมโยงระบบ MEDHIS กับระบบงาน ODOO ERP.pdf", "phase-4-uat-documents/2. Odoo ERP/2. Odoo - รายงานผลการทดสอบเชื่อมต่อ Odoo กับระบบต่างๆ.pdf", "phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf"]
roles: [AdminSystem, ITSupport, FinanceAccounting, WarehouseStaff]
created: 2026-04-28
updated: 2026-04-28
tags: [concept, interface, data-dictionary, medhis, odoo, erp]
verified-on-uat: 2026-04-28
---

# HIS ERP Interface Data Dictionary

## Purpose

Field-level dictionary for the [HIS ERP Interface](/concepts/his-erp-interface/) between MEDHIS and [Odoo ERP](/modules/odoo-erp/). Use this page when mapping payloads, validating reruns, or diagnosing interface errors.

## Master Data

| Interface | Direction | Key Fields | Notes |
|-----------|-----------|------------|-------|
| Customer Master | Odoo → MEDHIS | code, name, customer_type, tax_id, company name, address | Supports billing/payor reference. |
| Vendor Master | Odoo → MEDHIS | code, name, tax_id, address | Supports procurement/accounting reference. |
| Item Master | Odoo → MEDHIS | code, name, description, uom_code, store_codes, type_code | Medicine and medical-supply product master must align with HIS Item Master. |
| Product API trigger | Odoo → MEDHIS | Internal Reference, Product Name, Internal Notes, UOM code, Product Category code | Product category can expose Send API when configured to send to HIS. |

## Revenue Outbound

| Payload | Direction | Timing | Header Fields | Line / Payment Fields |
|---------|-----------|--------|---------------|-----------------------|
| HIS Receipt | MEDHIS → Odoo | Daily 00:01 | id, name, customer, patient_code, patient_name, episode_type, episode_code, doctor_code, ref, invoice_date, journal_code `[1]`, move_type `out_invoice` | lines.display_type, lines.name, lines.account_code, lines.cost_code, lines.profit_code, lines.price_unit, payments.method, payments.bank, payments.ref, payments.ref2, payments.amount |
| HIS Invoice | MEDHIS → Odoo | Daily 00:01 | id, name, customer, patient_code, patient_name, episode_type, episode_code, insurance_code, doctor_code, ref, invoice_date, journal_code `[2]`, move_type `out_invoice` | lines.display_type, lines.name, lines.account_code, lines.cost_code, lines.profit_code, lines.price_unit |
| HIS Onward | MEDHIS → Odoo | Monthly, first day of next month | id, name, ref, date, move_type `entry` | lines.name, lines.account_code, lines.cost_code, lines.profit_code, lines.balance |
| Deposit | MEDHIS → Odoo | Interface test scope | accounting date, number, HN, VN, account, debit/credit, analytic, customer payment fields | Tested in Phase 4 as passed. |

## Inventory Inbound To MEDHIS

| Payload | Direction | Trigger | Header Fields | Item Fields | Quantity Rule |
|---------|-----------|---------|---------------|-------------|---------------|
| Goods Receipt | Odoo → MEDHIS | Odoo save/API | doc_no, doc_year, posting_date, store_code | item_no, item_code, batchid, expiry_date, uom_code, quantity | Quantity must be positive. |
| Stock Adjust | Odoo → MEDHIS | Odoo save/API | doc_no, doc_year, posting_date, store_code | item_no, item_code, batchid, expiry_date, uom_code, quantity | Positive increases stock; negative decreases stock. |

## Inventory Outbound To Odoo

| Payload | Direction | Trigger | Header Fields | Item Fields |
|---------|-----------|---------|---------------|-------------|
| Dispense / Dispense Return | MEDHIS → Odoo | Daily 00:01 | id, name, source, destination, date | product_code, cost_code, profit_code, batch, quantity |
| Transfer / Issue / Expired Goods / HIS Stock Adjust | MEDHIS → Odoo | Daily 00:01 | id, name, source, destination, date | product_code, cost_code, profit_code, batch, quantity |

## Interface Validation Rules

- Medicine and medical-supply product, unit, store/location, cost center, and profit center mapping must be consistent between HIS and ERP.
- HIS-originated sales documents should not be edited after interface export; correction should happen by cancellation and rerun.
- If a field must be mapped in ERP but the mapping is missing, HIS sends blank and ERP raises the visible error.
- Reruns should regenerate the same business-date data; ERP is responsible for duplicate checking.
- Product that does not cut stock in ERP should not be included in stock movement interface.

## Related Pages

- [HIS ERP Interface](/concepts/his-erp-interface/)
- [Odoo Inventory Movement Types](/concepts/odoo-inventory-movement-types/)
- [HIS ERP Interface Log and Error Handling](/entities/his-erp-interface-log-and-error-handling/)
- [MEDHIS Odoo Revenue Interface Workflow](/workflows/medhis-odoo-revenue-interface-workflow/)
- [MEDHIS Odoo Inventory Interface Workflow](/workflows/medhis-odoo-inventory-interface-workflow/)

