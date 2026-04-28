---
title: HIS ERP Interface Log and Error Handling
type: entity
sources: ["phase-4-uat-documents/1. MEDHIS/3. MEDHIS - รายงานผลการทดสอบเชื่อมโยงระบบ MEDHIS กับระบบงาน ODOO ERP.pdf", "phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf"]
roles: [AdminSystem, ITSupport, FinanceAccounting, WarehouseStaff]
created: 2026-04-28
updated: 2026-04-28
tags: [entity, interface, logs, error-handling, medhis, odoo]
verified-on-uat: 2026-04-28
---

# HIS ERP Interface Log and Error Handling

## Purpose

Operational reference for locating and interpreting [HIS ERP Interface](/concepts/his-erp-interface/) logs and rerun/error behavior.

## Log Locations / Naming

| Interface Area | Log / File Pattern |
|----------------|--------------------|
| Item Master | `/exchange_logs/item-master/YYYY/MM/DD` |
| Finance / revenue | `/logs/fi` and JSON names such as `RECEIPTYYYYMMDD##.json`, `INVOICEYYYYMMDD##.json`, `ONWARDYYYYMMDD##.json` |
| Goods Receipt | `/exchange_logs/good-receipt` |
| Stock Adjust | `/exchange_logs/stock-adjust` |
| Inventory movement / material management | `/exchange_logs/mm` |
| HIS → ERP text file flow | `yyyymmdd_1002_nnn.txt` |

## Sequence Rules

| Flow | First Sequence | Rerun Direction |
|------|----------------|-----------------|
| Receipt JSON | `01` | Increment by 1 |
| Invoice JSON | `01` | Increment by 1 |
| Onward JSON | `99` | Decrement by 1 |
| HIS movement text file | `001` | Increment by 1 |

## Error Handling Rules

| Condition | Expected Handling |
|-----------|-------------------|
| Missing ERP mapping value | HIS sends blank; ERP raises error; user fixes mapping; rerun interface. |
| Duplicate or rerun of same business date | HIS regenerates file; ERP checks whether data was already processed. |
| File generation failure | HIS writes error log according to HIS-side design. |
| Drop-folder/write failure | HIS writes error log according to HIS-side design. |
| Business document correction | Do not edit original HIS sales document after export; cancel and send corrected movement according to interface rule. |

## Related Workflow

- [HIS ERP Interface Rerun and Error Handling Workflow](/workflows/his-erp-interface-rerun-and-error-handling-workflow/)

