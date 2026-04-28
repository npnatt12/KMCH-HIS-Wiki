---
title: Telemedicine Appointment Status
type: concept
sources: ["phase-4-uat-documents/3. Telemed/4. Telemed - เอกสารการอบรมการใช้งาน และการดูแลระบบ.pdf", "phase-4-uat-documents/3. Telemed/เอกสารแนบงวดที่ 4 - Telemed /เอกสารแนบ 5 เอกสารขั้นตอนการใช้งานระบบแพทย์ทางไกล (Telemedicine).pdf"]
roles: [Patient, NurseOPD, Doctor, TelemedicineAdmin, FinanceAccounting]
created: 2026-04-28
updated: 2026-04-28
tags: [concept, telemedicine, appointment, status]
verified-on-uat: 2026-04-28
---

# Telemedicine Appointment Status

## Purpose

Status model for patient-facing Telemedicine appointments in the "หมอพระจอม" app and the related hospital workflow in MEDHIS.

## Status Values

| Status | Meaning | Operational Notes |
|--------|---------|-------------------|
| Booked | Appointment is booked or waiting for confirmation. | Patient can see the appointment; gray information note appears only in this state. |
| Confirmed | Appointment has been confirmed. | Typically after staff confirmation and, when required, deposit confirmation. |
| Completed | Consultation completed. | Patient can rate the doctor after the call. |
| Miss Call | Doctor called but patient did not answer. | App shows missed-call notification and call history. |
| Reschedule | Appointment was rescheduled. | Visible in history. |
| Cancelled | Appointment was cancelled. | Visible in history. |
| No Show | Patient did not attend as scheduled. | Visible in history. |

## Transition Points

| Trigger | Status Impact |
|---------|---------------|
| Staff creates appointment in HIS | Appointment appears to patient as Booked. |
| Finance confirms deposit when required | Enables staff confirmation path. |
| Staff confirms in OPD/Appointment | Booked → Confirmed. |
| Nurse registers appointment from OPD Worklist | Patient enters REGISTERED state in OPD flow and appears in Doctor Worklist OutPatient. |
| Doctor calls patient at appointment time | Patient receives incoming app call and notification. |
| Doctor completes treatment and Medical Discharge | Completed path after consultation, clinical documentation, and discharge. |

## Related Pages

- [Telemedicine Visit Workflow](/workflows/telemedicine-visit-workflow/)
- [Telemedicine Patient Onboarding Workflow](/workflows/telemedicine-patient-onboarding-workflow/)
- [Telemedicine Doctor List and Appointment Screens](/entities/telemedicine-doctor-list-and-appointment-screens/)
- [Telemedicine Consultation Session](/entities/telemedicine-consultation-session/)

