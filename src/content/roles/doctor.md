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

- workflows/OPD Doctor EMR Workflow — Doctor Worklist → EMR (11 sections) → Order → Consult/Admit/Refer
- workflows/IPD Doctor EMR Workflow — Ward Board → IPD EMR → Progress Notes → Daily/Continuous Order → 4-Step Discharge
- workflows/Lab Order to Result — Order entry, result review
- workflows/XRAY Order to Report Workflow — Order entry, report review
- workflows/Pharmacy Dispensing Workflow — Order side: drug alerts, DUE, alternatives

## Reference screens

- entities/Doctor Worklist Screen — Dashboard, 10 boxes
- entities/EMR Form Screen — 11 record sections, Vital Signs 3 views
- entities/Order Entry Screen — CPOE, 7 tabs, 11 drug alerts
- entities/Drug Alert Popup — 11 alert types
- entities/Patient Banner — VIP/Anonymous/Interpreter, vitals, allergies

## Permissions

See _role-permission-matrix#Doctor for the full screen × action matrix. Highlights:
- **Read+Write:** Doctor Worklist, EMR Form, Order Entry, Consult, Admit, Refer, Medical Certificate
- **Read-only:** Lab Result, XRAY Report, Pharmacy Dispensing (their orders)
- **Hidden:** OR Schedule book, Inventory, Diet Order, CSSD Request

## Concepts to know

- concepts/Visit Types
- concepts/Order Types
- concepts/Drug Alert Types
- concepts/Lab and Radiology Order Status
