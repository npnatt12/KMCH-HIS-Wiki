---
title: Odoo Inventory Movement Types
type: concept
sources: ["phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf"]
roles: [WarehouseStaff, Pharmacist, ITSupport, AdminSystem]
created: 2026-04-28
updated: 2026-04-28
tags: [concept, odoo, inventory, movement-type, interface]
verified-on-uat: 2026-04-28
---

# Odoo Inventory Movement Types

## Purpose

Movement-code rules used when MEDHIS sends medicine and medical-supply stock movement into [Odoo ERP](/modules/odoo-erp/).

## Movement Codes

| Movement Type | Meaning | Sign Rule | Typical Source |
|---------------|---------|-----------|----------------|
| `Z01` | OPD sale / dispense | Negative | OPD pharmacy dispense |
| `Z02` | OPD sale return | Positive | OPD dispense return |
| `Z03` | IPD sale / dispense | Negative | IPD pharmacy issue/fill |
| `Z04` | IPD sale return | Positive | IPD return |
| `311` | Inter-store transfer | Positive | Transfer across stores/locations |

## Field Rules

| Field | Rule |
|-------|------|
| Posting date | Effective document date, not accounting-entry timestamp; `YYYYMMDD`. |
| Time of entry | HIS transaction time, `hhmmss` in 24-hour format. |
| HIMS item | Line number must be unique within the same document number. |
| Material | ERP product code; non-stock-cut ERP products are excluded from interface. |
| HIS material | HIS material code for traceability. |
| Store / Location | Source store/location where movement was recorded. |
| Batch / Lot | Batch or lot number; can be blank when ERP should determine batch by expiry rule. |
| Quantity | Base-unit quantity; up to 3 decimals supported. |
| Cost center | Required for sale/return movement; blank for transfer movement `311`. |
| HN number | For patient movement, ERP concatenates HN with patient name; transfer `311` sends `0` instead. |
| Expiration date | `YYYYMMDD` when batch expiry is available; if blank with batch usage, ERP may default expiry. |

## Operational Rule

For medicine and medical supplies, operational movement should be recorded in HIS. Odoo receives the movement through interface after the HIS process runs, instead of users manually moving those stock items directly in Odoo.

## Related Pages

- [HIS ERP Interface Data Dictionary](/concepts/his-erp-interface-data-dictionary/)
- [MEDHIS Odoo Inventory Interface Workflow](/workflows/medhis-odoo-inventory-interface-workflow/)
- [Odoo Internal Transfer Workflow](/workflows/odoo-internal-transfer-workflow/)

