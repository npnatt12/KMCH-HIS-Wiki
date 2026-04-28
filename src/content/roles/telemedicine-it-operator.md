---
title: Telemedicine IT Operator
type: role
role-id: TelemedicineITOperator
icon: server
accent: '#5A5A57'
verified-on-uat: pending
status: tier-2-pending
sources: ["phase-4-uat-documents/3. Telemed/4. Telemed - เอกสารการอบรมการใช้งาน และการดูแลระบบ.pdf", "phase-4-uat-documents/3. Telemed/3. Telemed - เอกสารส่งมอบซอฟต์แวร์ระบบ บน Production(Android).pdf"]
created: 2026-04-28
updated: 2026-04-28
tags: [role, telemedicine, it, operations]
---

# Telemedicine IT Operator

## Scope

ผู้ดูแลระบบเชิงเทคนิคของ [Telemedicine](/modules/telemedicine/) สำหรับ server, Docker services, logs, resource checks, and restart.

## Daily Pages

- [Telemedicine](/modules/telemedicine/)
- [Telemedicine Operations Support Workflow](/workflows/telemedicine-operations-support-workflow/)
- [Telemedicine IT Service Stack](/entities/telemedicine-it-service-stack/)
- [Telemedicine Admin Portal](/entities/telemedicine-admin-portal/)
- [Telemedicine Consultation Session](/entities/telemedicine-consultation-session/)
- [Phase 4 UAT and Go Live Evidence](/concepts/phase-4-uat-and-go-live-evidence/)
- [Phase 4 UAT Coverage Matrix](/concepts/phase-4-uat-coverage-matrix/)

## Phase 4 Operation Map

See Phase 4 Role Operation Map.

| Question | Start With |
|----------|------------|
| Service status, logs, restart checks | [Telemedicine IT Service Stack](/entities/telemedicine-it-service-stack/), [Telemedicine Operations Support Workflow](/workflows/telemedicine-operations-support-workflow/) |
| Admin reports symptoms from portal | [Telemedicine Admin Portal](/entities/telemedicine-admin-portal/), [Telemedicine IT Service Stack](/entities/telemedicine-it-service-stack/) |
| Patient call issue needs app/session context | [Telemedicine Consultation Session](/entities/telemedicine-consultation-session/), [Telemedicine Appointment Status](/concepts/telemedicine-appointment-status/) |
| Go-live/readiness evidence | [Phase 4 UAT and Go Live Evidence](/concepts/phase-4-uat-and-go-live-evidence/), [Phase 4 UAT Coverage Matrix](/concepts/phase-4-uat-coverage-matrix/) |

## Responsibilities

- Access server through VPN/SSH when required.
- Check Docker container status and logs.
- Monitor CPU/RAM/processes and disk usage.
- Restart unhealthy services and verify recovery.
