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

- [OPD Patient Flow](/workflows/opd-patient-flow/) — 8 statuses Registered → Financial Discharge
- [Lab Order to Result](/workflows/lab-order-to-result/) — Specimen collection step
- [Appointment Registration](/workflows/appointment-registration/)

## Reference screens

- [OPD Worklist Screen](/entities/opd-worklist-screen/)
- [OPD Screening Screen](/entities/opd-screening-screen/) — Vital Signs entry, status transitions
- [Patient Banner](/entities/patient-banner/)
- [Lab Specimen Collection Screen](/entities/lab-specimen-collection-screen/)

## Permissions

See _role-permission-matrix. Highlights:
- **Read+Write:** OPD Worklist, OPD Screening (vitals), Lab Specimen Collection
- **Read-only:** EMR Form, Order Entry, Appointment list
- **Hidden:** Order Entry write, Pharmacy Dispense

## Concepts to know

- [OPD Patient Status](/concepts/opd-patient-status/)
- [Visit Types](/concepts/visit-types/)
- [Appointment System](/concepts/appointment-system/)
