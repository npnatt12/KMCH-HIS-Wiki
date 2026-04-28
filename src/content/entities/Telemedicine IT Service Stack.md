---
title: Telemedicine IT Service Stack
type: entity
sources: ["phase-4-uat-documents/3. Telemed/2. Telemed - เอกสารส่งมอบซอฟต์แวร์ที่พัฒนาบน Staging.pdf", "phase-4-uat-documents/3. Telemed/3. Telemed - เอกสารส่งมอบซอฟต์แวร์ระบบ บน Production(Android).pdf", "phase-4-uat-documents/3. Telemed/4. Telemed - เอกสารการอบรมการใช้งาน และการดูแลระบบ.pdf"]
roles: [TelemedicineITOperator, ITSupport, AdminSystem]
created: 2026-04-28
updated: 2026-04-28
tags: [entity, telemedicine, infrastructure, docker, operations]
verified-on-uat: 2026-04-28
---

# Telemedicine IT Service Stack

## Purpose

Operational service stack for the Telemedicine platform. Credentials from source PDFs are intentionally not reproduced.

## Application Services

| Service | Function |
|---------|----------|
| Nginx | Web reverse proxy / HTTP entry. |
| API | Backend API service. |
| Web | Web/admin frontend service. |
| Webhook API | Receives integration/webhook events. |
| Webhook Worker | Processes queued webhook tasks. |
| Sync Service | Synchronizes data with integrated systems. |

## Data / Messaging Services

| Service | Function |
|---------|----------|
| PostgreSQL | Relational database. |
| MongoDB | Document database. |
| Redis | Cache/session or supporting data service. |
| RabbitMQ | Message broker for service communication. |

## Technology Stack

| Layer | Technology |
|-------|------------|
| Backend | Golang 1.24.0 |
| Frontend | Vue.js 4.3.0 |
| Mobile | Flutter 3.29.2 |
| Container runtime | Docker 28.1.1 |
| OS baseline | Ubuntu Linux 20.04.6 LTS |
| Teleconference | Zoom REST / streaming integration |
| HIS integration | MEDHIS webhook/database sync |

## Operations Checks

| Command / Check | Purpose |
|-----------------|---------|
| `docker ps` | Check container status, service names, ports, and health state. |
| `docker logs <service-or-container>` | Review service logs. |
| `docker logs --tail 100 <service-or-container>` | Review latest service logs. |
| `htop` | Check CPU, RAM, and processes. |
| `df -h` | Check disk usage. |
| `docker system df` | Check Docker image/container/volume usage. |
| `docker restart <service-or-container>` | Restart a service after diagnosis. |

## Related Pages

- [Telemedicine Operations Support Workflow](/workflows/telemedicine-operations-support-workflow/)
- [Telemedicine Admin Portal](/entities/telemedicine-admin-portal/)
- [Telemedicine](/modules/telemedicine/)

