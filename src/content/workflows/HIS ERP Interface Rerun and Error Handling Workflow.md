---
title: HIS ERP Interface Rerun and Error Handling Workflow
type: workflow
sources: ["phase-4-uat-documents/1. MEDHIS/3. MEDHIS - รายงานผลการทดสอบเชื่อมโยงระบบ MEDHIS กับระบบงาน ODOO ERP.pdf", "phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf"]
roles: [AdminSystem, ITSupport, FinanceAccounting, WarehouseStaff]
created: 2026-04-28
updated: 2026-04-28
tags: [workflow, interface, rerun, error-handling, medhis, odoo]
verified-on-uat: 2026-04-28
---

# HIS ERP Interface Rerun and Error Handling Workflow

## Overview

Operational rerun pattern for [HIS ERP Interface](/concepts/his-erp-interface/) failures where mapped fields, generated files, or posting results need review.

## Steps

1. User or IT identifies failed interface posting in ERP, HIS log, or missing downstream document.
2. IT checks the relevant log path in [HIS ERP Interface Log and Error Handling](/entities/his-erp-interface-log-and-error-handling/).
3. If ERP shows missing mapping, Finance/Warehouse/Admin fixes the missing master data or mapping in Odoo.
4. If HIS cannot generate or place a file, IT checks HIS-side error log and output folder access.
5. HIS rerun regenerates the same business-date data according to the original selection rule.
6. HIS writes a new sequence file or JSON name according to interface sequence rules.
7. ERP receives the rerun and checks duplicates/previously processed records.
8. User confirms downstream document or stock movement was created correctly.
9. If the original HIS sales document was wrong, user cancels/corrects by allowed cancellation path instead of editing exported document.

## Decision Table

| Symptom | Likely Owner | Action |
|---------|--------------|--------|
| ERP error due to blank mapped field | Finance / Warehouse / Admin | Fix ERP mapping or master data, then rerun. |
| No output file generated | ITSupport | Check HIS generation error log. |
| Output file generated but not delivered | ITSupport | Check folder/path/write permission and rerun. |
| Duplicate concern after rerun | ERP / Finance | ERP duplicate logic decides whether record is already processed. |
| Wrong original HIS sale item/quantity | HIS operating team | Cancel original document and send corrected/cancel movement. |

## Related Pages

- [HIS ERP Interface Data Dictionary](/concepts/his-erp-interface-data-dictionary/)
- [HIS ERP Interface Log and Error Handling](/entities/his-erp-interface-log-and-error-handling/)
- [MEDHIS Odoo Revenue Interface Workflow](/workflows/medhis-odoo-revenue-interface-workflow/)
- [MEDHIS Odoo Inventory Interface Workflow](/workflows/medhis-odoo-inventory-interface-workflow/)

