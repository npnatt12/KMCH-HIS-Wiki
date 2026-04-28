---
title: Patient
type: role
role-id: Patient
icon: user-circle
accent: '#A0726E'
verified-on-uat: pending
status: tier-2-pending
sources: ["phase-4-uat-documents/3. Telemed/4. Telemed - เอกสารการอบรมการใช้งาน และการดูแลระบบ.pdf", "phase-4-uat-documents/3. Telemed/เอกสารแนบงวดที่ 4 - Telemed /เอกสารแนบ 5 เอกสารขั้นตอนการใช้งานระบบแพทย์ทางไกล (Telemedicine).pdf"]
created: 2026-04-28
updated: 2026-04-28
tags: [role, patient, telemedicine, mobile-app]
---

# Patient

## Scope

ผู้ป่วยที่ใช้ [Telemedicine Mobile App](/entities/telemedicine-mobile-app/) สำหรับยืนยันตัวตน ดูนัดหมาย รับสายแพทย์ แชท ให้คะแนน และรับข้อมูลจัดส่งยา/เอกสารผ่านช่องทางที่โรงพยาบาลกำหนด.

## Daily Pages

- [Telemedicine Mobile App](/entities/telemedicine-mobile-app/)
- [Telemedicine Patient Onboarding Workflow](/workflows/telemedicine-patient-onboarding-workflow/)
- [Telemedicine Visit Workflow](/workflows/telemedicine-visit-workflow/)
- [Telemedicine Appointment Status](/concepts/telemedicine-appointment-status/)
- [Telemedicine Doctor List and Appointment Screens](/entities/telemedicine-doctor-list-and-appointment-screens/)
- [Telemedicine Consultation Session](/entities/telemedicine-consultation-session/)
- [Telemedicine Medication Delivery Workflow](/workflows/telemedicine-medication-delivery-workflow/)

## Phase 4 Operation Map

See Phase 4 Role Operation Map.

| Question | Start With |
|----------|------------|
| First-time app setup and appointment confirmation | [Telemedicine Patient Onboarding Workflow](/workflows/telemedicine-patient-onboarding-workflow/), [Telemedicine Mobile App](/entities/telemedicine-mobile-app/) |
| Find doctor or review appointment | [Telemedicine Doctor List and Appointment Screens](/entities/telemedicine-doctor-list-and-appointment-screens/), [Telemedicine Appointment Status](/concepts/telemedicine-appointment-status/) |
| Receive doctor call | [Telemedicine Consultation Session](/entities/telemedicine-consultation-session/), [Telemedicine Visit Workflow](/workflows/telemedicine-visit-workflow/) |
| Medicine delivery or pickup after visit | [Telemedicine Medication Delivery Workflow](/workflows/telemedicine-medication-delivery-workflow/) |

## Responsibilities / Actions

- Verify account using HN, date of birth, and national ID.
- Keep app logged in so doctor can call at appointment time.
- Accept or decline doctor call.
- Provide payment proof and delivery address through LINE OA when required.
- Rate doctor after consultation.
