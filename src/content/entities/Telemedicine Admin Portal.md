---
title: Telemedicine Admin Portal
type: entity
sources: ["phase-4-uat-documents/3. Telemed/4. Telemed - เอกสารการอบรมการใช้งาน และการดูแลระบบ.pdf"]
roles: [TelemedicineAdmin, TelemedicineITOperator]
created: 2026-04-28
updated: 2026-04-28
tags: [entity, telemedicine, admin, portal]
verified-on-uat: 2026-04-28
---

# Telemedicine Admin Portal

## Purpose

Portal for administrators to review call transactions, patient/doctor display data, administrator users, settings, legal documents, and license information.

## Menus

| Menu | Function |
|------|----------|
| Transaction Report | Export call report by date range; download detailed call package |
| Patient Information | Search patient by name/HN, check app online/login state, view identity fields, edit health fields |
| Doctor Information | View HIS-synced doctor data, edit working hours, fee, certificates, bio |
| User Management | Manage administrator users |
| Setting | App/portal name and icons, license information |
| Legal Document | Edit Terms of Service and Privacy Policy in Markdown; show/hide in app consent flow |
| About | Display License Management details |

## Exported Call Report Fields

| Field | Description |
|-------|-------------|
| HIS appointment status | Status from HIS appointment context |
| Code / Visit ID / HN | Patient and encounter references |
| Doctor / Patient | Names in transaction |
| Start / End Time | Call timestamps |
| Duration | Communication duration |
| UUID | Call/session identifier |

## Related Workflow

- [Telemedicine Operations Support Workflow](/workflows/telemedicine-operations-support-workflow/)
- [Telemedicine IT Service Stack](/entities/telemedicine-it-service-stack/)
- [Telemedicine Appointment Status](/concepts/telemedicine-appointment-status/)

## Security Notes

- Admin portal credentials in source PDFs are not reproduced in this wiki.
- Downloaded call detail may include video, chat transcript, and images; treat as sensitive clinical data.
