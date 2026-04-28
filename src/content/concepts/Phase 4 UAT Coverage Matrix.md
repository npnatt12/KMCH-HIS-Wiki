---
title: Phase 4 UAT Coverage Matrix
type: concept
sources: ["phase-4-uat-documents/1. MEDHIS/2. MEDHIS - รายการเอกสารส่งมอบส่วนงาน IPD และ การสนับสนุนการใช้งานระบบจริง.pdf", "phase-4-uat-documents/1. MEDHIS/4. MEDHIS - เอกสารส่งมอบระบบ Queue.pdf", "phase-4-uat-documents/2. Odoo ERP/3. Odoo - รายงานผลการทดสอบระบบ (UAT).pdf", "phase-4-uat-documents/2. Odoo ERP/2. Odoo - รายงานผลการทดสอบเชื่อมต่อ Odoo กับระบบต่างๆ.pdf", "phase-4-uat-documents/3. Telemed/4. Telemed - เอกสารการอบรมการใช้งาน และการดูแลระบบ.pdf"]
roles: [AdminSystem, ITSupport, FinanceAccounting, WarehouseStaff, TelemedicineAdmin]
created: 2026-04-28
updated: 2026-04-28
tags: [concept, uat, phase-4, coverage, evidence]
verified-on-uat: 2026-04-28
---

# Phase 4 UAT Coverage Matrix

## Purpose

Compact test-coverage map for the Phase 4 package. Use with [Phase 4 UAT and Go Live Evidence](/concepts/phase-4-uat-and-go-live-evidence/) to separate "tested and passed" evidence from field-level operating manuals.

## MEDHIS / Queue

| Area | Tested Coverage | Result |
|------|-----------------|--------|
| Queue Dashboard by department | Dashboard display by department | Passed / successful |
| OR queue | OR queue display | Passed / successful |
| ER queue | Emergency queue display and call queue | Passed / successful |
| Registration queue | Registered queue management | Passed / successful |
| Department queue call | Call queue by department | Passed / successful |
| Queue forwarding | Forward queue to next department | Passed / successful |
| Department / room setup | Department and room configuration | Passed / successful |

## Odoo ERP Functional UAT

| Area | Tested Coverage | Result |
|------|-----------------|--------|
| Financial Management | Accounting forms, billing, payment, reports | Passed |
| Purchase A/P | RFQ, PO, receiving, vendor bill, vendor payment | Passed |
| Inventory | Master data, receipts, internal transfer, return, landed cost, scrap, adjustment, reports | Passed |
| Time Attendance | Kiosk check-in/out, PIN, attendance record, analysis, extra hours | Passed |
| Interfaces | Product, Goods Receipt, Delivery/Transfer/Issue/Adjust, Receipt, Invoice, Deposit, Onward | Passed |
| Budget interface | Budget name, responsible, period, company, budgetary position, analytic account, start/end, planned amount | Passed / ready |
| Payroll interface | Journal entry number, reference, accounting date, journal, account, partner, label | Passed / ready |

## Interface Test IDs

| Test ID | Interface | Direction | Result |
|---------|-----------|-----------|--------|
| IT_001 | Product Master | Odoo → HIS | Passed |
| IT_002 | Goods Receipt | Odoo → HIS | Passed |
| IT_003 | Delivery Order / Transfer / Issue / Adjust | HIS → Odoo | Passed |
| IT_004 | Inventory Adjustment | Odoo → HIS | Passed |
| IT_005 | Self-pay Receipt / Customer Payment | HIS → Odoo | Passed |
| IT_006 | Inventory Adjustment | HIS → Odoo | Passed |
| IT_007 | Invoice | HIS → Odoo | Passed |
| IT_008 | Deposit / Customer Payment | HIS → Odoo | Passed |
| IT_009 | Onward journal | HIS → Odoo | Passed |
| IT_010 | Budget | Budget → Odoo | Passed / ready |
| IT_011 | Payroll journal | Payroll → Odoo | Passed / ready |

## Telemedicine

| Area | Tested Coverage | Result |
|------|-----------------|--------|
| Patient app | Verify/login, doctor list, appointments, call, chat, profile/settings | Passed in training/UAT package |
| Admin portal | Transaction report, patient/doctor info, users, settings, legal docs, license | Passed in training/UAT package |
| Room simulation | Telemedicine operating flow from appointment to consultation | Confirmed by Phase 4 annex |
| Go Live | Production Android deployment and go-live confirmation | Confirmed by Phase 4 annex |

## Evidence Caveat

Signed annexes confirm activity and acceptance. They should be treated as readiness evidence, while field-level manuals and interface reports remain the primary sources for operational and data-dictionary detail.

