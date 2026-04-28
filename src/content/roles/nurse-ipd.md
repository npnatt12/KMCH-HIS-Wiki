---
title: Nurse — IPD
type: role
role-id: NurseIPD
icon: hospital
accent: '#D9492C'
created: 2026-04-27
updated: 2026-04-27
verified-on-uat: pending
status: tier-1
tags: [role, clinical, nursing]
---

# Nurse — IPD

> พยาบาลผู้ป่วยใน — Ward-based nursing role: bed management, vitals entry, order execution, discharge coordination.

## Daily flows

- [IPD Discharge Process](/workflows/ipd-discharge-process/) — 4-step discharge with REVERT
- [IPD Transfer Between Wards Workflow](/workflows/ipd-transfer-between-wards-workflow/) — Transfer Request → Admission approval → move
- [Pharmacy Dispensing Workflow](/workflows/pharmacy-dispensing-workflow/) — Receive side (IP Fill execution)

## Reference screens

- [Ward Board](/entities/ward-board/) — Bed status colors, 7 action icons
- [Nursing Worklist Screen](/entities/nursing-worklist-screen/) — 6 group-by, Execute Order, IPD Consults
- [IPD Transfer Screen](/entities/ipd-transfer-screen/)
- [Admission Detail Screen](/entities/admission-detail-screen/) — read view
- [Patient Banner](/entities/patient-banner/)

## Permissions

See _role-permission-matrix. Highlights:
- **Read+Write:** Ward Board, Nursing Worklist, IPD Transfer (request), Vitals entry
- **Read-only:** EMR Form, Order Entry (cannot create orders)
- **Hidden:** Order Entry write, Pharmacy Dispense, OR Schedule

## Concepts to know

- [Bed Status](/concepts/bed-status/)
- [Order Types](/concepts/order-types/)
- [Visit Types](/concepts/visit-types/)
