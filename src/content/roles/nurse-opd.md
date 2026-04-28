---
title: Nurse — OPD
type: role
role-id: NurseOPD
icon: clipboard-list
accent: '#E87D2C'
created: 2026-04-27
updated: 2026-04-27
verified-on-uat: pending
status: tier-1
tags: [role, clinical, nursing]
---

# Nurse — OPD

> พยาบาลผู้ป่วยนอก — Outpatient screening, vitals, lab specimen collection, queue management.

## Daily flows

- workflows/OPD Patient Flow — 8 statuses Registered → Financial Discharge
- workflows/Lab Order to Result — Specimen collection step
- workflows/Appointment Registration

## Reference screens

- entities/OPD Worklist Screen
- entities/OPD Screening Screen — Vital Signs entry, status transitions
- entities/Patient Banner
- entities/Lab Specimen Collection Screen

## Permissions

See _role-permission-matrix#NurseOPD. Highlights:
- **Read+Write:** OPD Worklist, OPD Screening (vitals), Lab Specimen Collection
- **Read-only:** EMR Form, Order Entry, Appointment list
- **Hidden:** Order Entry write, Pharmacy Dispense

## Concepts to know

- concepts/OPD Patient Status
- concepts/Visit Types
- concepts/Appointment System
