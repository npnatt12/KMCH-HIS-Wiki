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

- workflows/IPD Discharge Process — 4-step discharge with REVERT
- workflows/IPD Transfer Between Wards Workflow — Transfer Request → Admission approval → move
- workflows/Pharmacy Dispensing Workflow — Receive side (IP Fill execution)

## Reference screens

- entities/Ward Board — Bed status colors, 7 action icons
- entities/Nursing Worklist Screen — 6 group-by, Execute Order, IPD Consults
- entities/IPD Transfer Screen
- entities/Admission Detail Screen — read view
- entities/Patient Banner

## Permissions

See _role-permission-matrix#NurseIPD. Highlights:
- **Read+Write:** Ward Board, Nursing Worklist, IPD Transfer (request), Vitals entry
- **Read-only:** EMR Form, Order Entry (cannot create orders)
- **Hidden:** Order Entry write, Pharmacy Dispense, OR Schedule

## Concepts to know

- concepts/Bed Status
- concepts/Order Types
- concepts/Visit Types
