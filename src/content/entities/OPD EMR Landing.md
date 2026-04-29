---
title: OPD EMR Landing
type: entity
sources: [live UAT 2026-04-29]
roles: [Doctor, NurseOPD]
verified-on-uat: 2026-04-29
created: 2026-04-29
updated: 2026-04-29
tags: [entity, screen, opd, emr]
---

# OPD EMR Landing

Hub screen that opens when a doctor enters EMR for an OPD visit. Verified during TCK-001 UAT walkthrough (`uat-recon/agent-uat-handoff`) Phase 3.

## Access Path

- Angular state: `triangular.emr.landing`
- Canonical entry: [Doctor Worklist Screen](/entities/doctor-worklist-screen/) row → `vm.openPatientEMRFromWorkbench(patient)`
- **Do not** `$state.go('triangular.emr.<sub>')` from outside EMR — patient context is lost and banner shows blank. Enter via the canonical path first.

## Purpose

- Single entry point for all EMR sub-screens (text panels, orders, alerts, schedules)
- Hosts the `Consultation` md-icon toggle that exposes the doctor's `START` button
- Back-pointer to OPD Worklist via `$state.go('triangular.opdworkbench.patientlist')`

## UAT-verified behavior (2026-04-29)

- Opens with [Patient Banner](/entities/patient-banner/) populated from the visit's saved [charting](/entities/opd-screening-screen/) data.
- Right-side menu has **19 entries**:
  1. OPD EMR
  2. IPD EMR
  3. ANC
  4. Charting
  5. Allergies → [Allergies Panel](/entities/allergies-panel/)
  6. Alerts
  7. Orders
  8. Orders Checklist
  9. Med Reconcile
  10. Form
  11. Medical Document
  12. Referral
  13. Tasks → [Tasks Panel](/entities/tasks-panel/)
  14. Death Record
  15. eMAR
  16. Appointments
  17. Radiology Schedule
  18. OR Schedule
  19. View OR Record
- The `Consultation` md-icon toggle in the action bar must be enabled before `START`/`END` buttons are visible. Without the toggle, the buttons are simply not in the DOM.

## Common pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| "Record Not Found" banner blank | Navigated via `$state.go('triangular.emr.diagnosis')` from outside EMR | Re-enter EMR from [Doctor Worklist Screen](/entities/doctor-worklist-screen/) via `vm.openPatientEMRFromWorkbench` |
| `START` button missing | `Consultation` md-icon toggle not engaged | Click the md-icon to expose; see `onConsultationClick()` |
| Idle for ~5 min then locked | [MEDHIS Server-Side Gates](/concepts/medhis-server-side-gates/#idle-session-lock) | User re-auths; agents must not type password |

## Related

- [Doctor Worklist Screen](/entities/doctor-worklist-screen/)
- [OPD Doctor EMR Workflow](/workflows/opd-doctor-emr-workflow/)
- [ICD Coding](/concepts/icd-coding/)
- [Tasks Panel](/entities/tasks-panel/)
- [Allergies Panel](/entities/allergies-panel/)
- `uat-recon/agent-uat-handoff` §2.6 (selector cheatsheet), §3 (endpoint cheatsheet)
