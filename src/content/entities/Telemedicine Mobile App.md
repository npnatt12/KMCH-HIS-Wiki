---
title: Telemedicine Mobile App
type: entity
sources: ["phase-4-uat-documents/3. Telemed/4. Telemed - เอกสารการอบรมการใช้งาน และการดูแลระบบ.pdf", "phase-4-uat-documents/3. Telemed/3. Telemed - เอกสารส่งมอบซอฟต์แวร์ระบบ บน Production(Android).pdf"]
roles: [Patient]
created: 2026-04-28
updated: 2026-04-28
tags: [entity, telemedicine, mobile-app, patient]
verified-on-uat: 2026-04-28
---

# Telemedicine Mobile App — หมอพระจอม

## Purpose

Mobile application for patients to verify identity, view doctors/appointments, receive telemedicine calls, chat, and rate doctors.

## Main Screens

| Screen | Main Data / Actions |
|--------|---------------------|
| Login / Verify Identity | HN, date of birth, national ID, password setup, PIN, biometrics |
| Main Page | Entry point after login |
| Doctor List | Department filter, specialty filter, search by doctor name, online/offline status, fee, working hours, profile |
| Appointments | Upcoming and History tabs, appointment status, appointment detail |
| Consultation Session | Doctor name, progress time, chat, microphone, video, hang up |
| Profile / Settings | Personal info, address, contact info, health info, emergency contact, language, biometric, logout |

## Appointment Status Values

| Status | Meaning |
|--------|---------|
| Booked | Booking / pending confirmation |
| Confirmed | Appointment confirmed |
| Completed | Consultation completed |
| Miss Call | Patient missed doctor call |
| Reschedule | Appointment rescheduled |
| Cancelled | Appointment cancelled |
| No Show | Patient did not attend |

## Validation / Security

| Rule | Description |
|------|-------------|
| First verification | Requires HN, DOB, national ID |
| Password | At least 8 characters with upper/lowercase requirements; forgot-password flow adds special-character requirement |
| PIN | Required for app access after login |
| Biometrics | Optional if device supports it |
| Session | App remains logged in for 180 days after successful registration/login |
| Consent | Terms, Privacy Policy, and consent shown after first login |
| Demographics | Personal data is read-only in app; changes require hospital registration/MRD contact |

## Related Workflow

- [Telemedicine Visit Workflow](/workflows/telemedicine-visit-workflow/)

