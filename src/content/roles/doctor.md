---
title: Doctor
type: role
role-id: Doctor
icon: stethoscope
accent: '#C2362F'
created: 2026-04-27
updated: 2026-04-27
verified-on-uat: pending
status: tier-1
tags: [role, clinical]
---

# Doctor

> แพทย์ — Clinician role with full EMR write access, order entry, and consult/admit/refer authority.

## Daily flows

- [OPD Doctor EMR Workflow](/workflows/opd-doctor-emr-workflow/) — Doctor Worklist → EMR (11 sections) → Order → Consult/Admit/Refer
- [IPD Doctor EMR Workflow](/workflows/ipd-doctor-emr-workflow/) — Ward Board → IPD EMR → Progress Notes → Daily/Continuous Order → 4-Step Discharge
- [Lab Order to Result](/workflows/lab-order-to-result/) — Order entry, result review
- [XRAY Order to Report Workflow](/workflows/xray-order-to-report-workflow/) — Order entry, report review
- [Pharmacy Dispensing Workflow](/workflows/pharmacy-dispensing-workflow/) — Order side: drug alerts, DUE, alternatives

## Reference screens

- [Doctor Worklist Screen](/entities/doctor-worklist-screen/) — Dashboard, 10 boxes
- [EMR Form Screen](/entities/emr-form-screen/) — 11 record sections, Vital Signs 3 views
- [Order Entry Screen](/entities/order-entry-screen/) — CPOE, 7 tabs, 11 drug alerts
- [Drug Alert Popup](/entities/drug-alert-popup/) — 11 alert types
- [Patient Banner](/entities/patient-banner/) — VIP/Anonymous/Interpreter, vitals, allergies

## Permissions

Permission matrix wires after Phase 1 UAT recon.
- **Read+Write:** Doctor Worklist, EMR Form, Order Entry, Consult, Admit, Refer, Medical Certificate
- **Read-only:** Lab Result, XRAY Report, Pharmacy Dispensing (their orders)
- **Hidden:** OR Schedule book, Inventory, Diet Order, CSSD Request

## Concepts to know

- [Visit Types](/concepts/visit-types/)
- [Order Types](/concepts/order-types/)
- [Drug Alert Types](/concepts/drug-alert-types/)
- [Lab and Radiology Order Status](/concepts/lab-and-radiology-order-status/)
