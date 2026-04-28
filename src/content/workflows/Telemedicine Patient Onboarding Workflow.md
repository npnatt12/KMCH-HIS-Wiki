---
title: Telemedicine Patient Onboarding Workflow
type: workflow
sources: ["phase-4-uat-documents/3. Telemed/4. Telemed - เอกสารการอบรมการใช้งาน และการดูแลระบบ.pdf", "phase-4-uat-documents/3. Telemed/เอกสารแนบงวดที่ 4 - Telemed /เอกสารแนบ 5 เอกสารขั้นตอนการใช้งานระบบแพทย์ทางไกล (Telemedicine).pdf"]
roles: [Patient, NurseOPD, FinanceAccounting, TelemedicineAdmin]
created: 2026-04-28
updated: 2026-04-28
tags: [workflow, telemedicine, onboarding, patient, appointment]
verified-on-uat: 2026-04-28
---

# Telemedicine Patient Onboarding Workflow

## Overview

Patient onboarding and appointment confirmation flow before a Telemedicine consultation.

## Steps

1. Patient contacts hospital staff.
2. Staff registers new patient in [Registration](/modules/registration/) / MEDHIS if needed.
3. Staff instructs patient to add the hospital LINE OA.
4. Patient sends identity photo with national ID through LINE OA when requesting Telemedicine service.
5. Staff checks identity evidence.
6. Staff sends "หมอพระจอม" app download link through LINE OA.
7. Patient installs app and logs in.
8. Patient verifies account with HN, date of birth, and national ID.
9. Patient sets password, PIN, optional biometrics, and accepts Terms, Privacy Policy, and Consent.
10. Staff creates appointment in HIS.
11. Staff checks treatment rights.
12. If the case is not covered by gold-card/right-covered flow, staff sends case to Finance for deposit.
13. Finance sends QR payment through staff; patient sends proof through LINE OA.
14. Finance records deposit in HIS and confirms back to staff.
15. Staff confirms appointment in OPD/Appointment.
16. Patient sees appointment status change from Booked to Confirmed.

## Preconditions For Doctor Call

- Patient must have installed the app.
- Patient must log in successfully and remain logged in.
- Appointment should be Confirmed.
- Patient receives notification before appointment time.

## Related Pages

- [Telemedicine Appointment Status](/concepts/telemedicine-appointment-status/)
- [Telemedicine Visit Workflow](/workflows/telemedicine-visit-workflow/)
- [Telemedicine Doctor List and Appointment Screens](/entities/telemedicine-doctor-list-and-appointment-screens/)

