---
title: Telemedicine Admin
type: role
role-id: TelemedicineAdmin
icon: video
accent: '#9C5C2E'
verified-on-uat: pending
status: tier-2-pending
sources: ["phase-4-uat-documents/3. Telemed/4. Telemed - เอกสารการอบรมการใช้งาน และการดูแลระบบ.pdf"]
created: 2026-04-28
updated: 2026-04-28
tags: [role, telemedicine, admin]
---

# Telemedicine Admin

## Scope

ผู้ดูแลระบบ [Telemedicine Admin Portal](/entities/telemedicine-admin-portal/) สำหรับข้อมูล call report, patient/doctor display, users, settings, legal documents, and license.

## Daily Pages

- [Telemedicine](/modules/telemedicine/)
- [Telemedicine Admin Portal](/entities/telemedicine-admin-portal/)
- [Telemedicine Appointment Status](/concepts/telemedicine-appointment-status/)
- [Telemedicine Doctor List and Appointment Screens](/entities/telemedicine-doctor-list-and-appointment-screens/)
- [Telemedicine Consultation Session](/entities/telemedicine-consultation-session/)
- [Telemedicine Patient Onboarding Workflow](/workflows/telemedicine-patient-onboarding-workflow/)
- [Telemedicine Operations Support Workflow](/workflows/telemedicine-operations-support-workflow/)
- [Telemedicine IT Service Stack](/entities/telemedicine-it-service-stack/)
- [Phase 4 UAT and Go Live Evidence](/concepts/phase-4-uat-and-go-live-evidence/)
- [Phase 4 UAT Coverage Matrix](/concepts/phase-4-uat-coverage-matrix/)

## Phase 4 Operation Map

See Phase 4 Role Operation Map.

| Question | Start With |
|----------|------------|
| Call report, patient/doctor admin, legal documents | [Telemedicine Admin Portal](/entities/telemedicine-admin-portal/) |
| Patient app login/call readiness | [Telemedicine Admin Portal](/entities/telemedicine-admin-portal/), [Telemedicine Consultation Session](/entities/telemedicine-consultation-session/) |
| Appointment states and history | [Telemedicine Appointment Status](/concepts/telemedicine-appointment-status/), [Telemedicine Doctor List and Appointment Screens](/entities/telemedicine-doctor-list-and-appointment-screens/) |
| Patient onboarding and appointment confirmation | [Telemedicine Patient Onboarding Workflow](/workflows/telemedicine-patient-onboarding-workflow/) |
| Technical escalation | [Telemedicine IT Service Stack](/entities/telemedicine-it-service-stack/), [Telemedicine Operations Support Workflow](/workflows/telemedicine-operations-support-workflow/) |

## Responsibilities

- Export call reports and download call details.
- Review patient app state and doctor profile display.
- Manage admin users.
- Maintain app settings, legal documents, and license information.
