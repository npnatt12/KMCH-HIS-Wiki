---
title: Telemedicine Doctor List and Appointment Screens
type: entity
sources: ["phase-4-uat-documents/3. Telemed/4. Telemed - เอกสารการอบรมการใช้งาน และการดูแลระบบ.pdf"]
roles: [Patient, TelemedicineAdmin]
created: 2026-04-28
updated: 2026-04-28
tags: [entity, telemedicine, mobile, doctor-list, appointment]
verified-on-uat: 2026-04-28
---

# Telemedicine Doctor List and Appointment Screens

## Purpose

Patient app screens for finding doctors, viewing appointment lists, and checking appointment details.

## Doctor List

| Field / Control | Description |
|-----------------|-------------|
| Department filter | Filter doctors by department. |
| Specialty filter | Filter doctors by specialty. |
| Search | Search doctor by first name or surname. |
| Online status | Green for online/available, gray for offline. |
| Doctor card | Shows profile image, name, department, specialty, review score, bio, schedule, fee, and certificates where available. |

## Appointment List

| Tab | Description |
|-----|-------------|
| Upcoming | Future appointments, including Booked and Confirmed. |
| History | Past appointments, sorted from most recent to oldest in the selected year. |

## History Statuses

- Completed
- Miss Call
- Reschedule
- Cancelled
- No Show

## Appointment Detail Fields

| Field | Description |
|-------|-------------|
| Doctor profile / status | Doctor profile and online/offline status. |
| Doctor name | Doctor first name and surname. |
| Department / specialty | Clinical service and specialty. |
| Review score | Doctor review score. |
| Appointment Time | Date and time of appointment. |
| Appointment Status | Current appointment status. |
| Comment | Comment or symptom note for appointment. |
| Gray info note | Shown only when status is Booked. |

## Related Pages

- [Telemedicine Appointment Status](/concepts/telemedicine-appointment-status/)
- [Telemedicine Mobile App](/entities/telemedicine-mobile-app/)
- [Telemedicine Visit Workflow](/workflows/telemedicine-visit-workflow/)

