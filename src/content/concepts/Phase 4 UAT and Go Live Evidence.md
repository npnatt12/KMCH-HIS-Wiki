---
title: Phase 4 UAT and Go Live Evidence
type: concept
sources: ["phase-4-uat-documents/หนังสือส่งมอบงานงวดที่ 4 - TICC - 03042569.pdf", "phase-4-uat-documents/1. MEDHIS/2. MEDHIS - รายการเอกสารส่งมอบส่วนงาน IPD และ การสนับสนุนการใช้งานระบบจริง.pdf", "phase-4-uat-documents/2. Odoo ERP/3. Odoo - รายงานผลการทดสอบระบบ (UAT).pdf", "phase-4-uat-documents/3. Telemed/5. Telemed - เอกสารข้อตกลงร่วมการใช้ระบบสารสนเทศจริง.pdf"]
roles: [AdminSystem, ITSupport, FinanceAccounting, TelemedicineAdmin]
created: 2026-04-28
updated: 2026-04-28
tags: [concept, phase-4, uat, go-live, readiness]
verified-on-uat: "2026-04-28"
---

# Phase 4 UAT and Go Live Evidence

## Purpose

This page distinguishes source-backed delivery/UAT evidence from functional workflow detail. Phase 4 documents confirm what was delivered, tested, trained, and prepared for go-live across MEDHIS, [Odoo ERP](/modules/odoo-erp/), and [Telemedicine](/modules/telemedicine/).

## Evidence Matrix

| System | Evidence Type | Result |
|--------|---------------|--------|
| MEDHIS IPD scope | Training, UAT, go-live, live support | UAT annexes report `ผ่าน` for 10 IPD-related systems |
| [Queue Management](/modules/queue-management/) | Training, UAT, floor simulation | Functional tests marked `สำเร็จ`; system ready |
| [HIS ERP Interface](/concepts/his-erp-interface/) | MEDHIS↔Odoo interface tests | Master, Revenue, Inventory test groups passed |
| [Odoo ERP](/modules/odoo-erp/) | ERP UAT and key-user manual delivery | Accounting, Purchase, Inventory, Time Attendance, interface groups passed |
| Budget route | Interface route test | Passed and ready, but source system was not yet operational for full live integration |
| Payroll route | Interface route test | Passed and ready, with future HR/payroll source-system dependency |
| [Telemedicine](/modules/telemedicine/) | Staging, Production Android, training, UAT, room simulation, readiness | UAT passed, readiness checklist passed, go-live scheduled/executed |

## Readiness Checklist Pattern

| Readiness Item | Meaning |
|----------------|---------|
| System Testing / UAT | User test across relevant modules passed |
| Data Migration Verification | Data checked before/after migration |
| Infrastructure Readiness | Network, servers, and devices ready |
| User Training | Key user groups trained |
| User Manual & Guide | Current manuals delivered |
| Support Channel | Post-go-live issue channels set |
| System Security | User rights and security policy reviewed |
| Backup & Recovery Plan | Backup and recovery configuration checked |

## How To Interpret This Evidence

- `ผ่าน` / `สำเร็จ` means the delivery package reports successful test or readiness confirmation.
- It does not replace field-by-field manual extraction where a detailed source manual exists.
- When a Phase 4 item only gives UAT scope and no screen detail, create a module overview and mark field-level details as follow-up.
- If later UAT recon contradicts a delivery document, prefer live UAT recon and note the contradiction on both pages.

## Related Workflow

- [Phase 4 UAT to Go Live Workflow](/workflows/phase-4-uat-to-go-live-workflow/)
- [Phase 4 UAT Coverage Matrix](/concepts/phase-4-uat-coverage-matrix/)
- Phase 4 Wiki QA Hardening Report
