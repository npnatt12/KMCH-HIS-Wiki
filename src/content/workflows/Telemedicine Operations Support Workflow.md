---
title: Telemedicine Operations Support Workflow
type: workflow
sources: ["phase-4-uat-documents/3. Telemed/4. Telemed - เอกสารการอบรมการใช้งาน และการดูแลระบบ.pdf", "phase-4-uat-documents/3. Telemed/2. Telemed - เอกสารส่งมอบซอฟต์แวร์ที่พัฒนาบน Staging.pdf", "phase-4-uat-documents/3. Telemed/3. Telemed - เอกสารส่งมอบซอฟต์แวร์ระบบ บน Production(Android).pdf"]
roles: [TelemedicineAdmin, TelemedicineITOperator, ITSupport]
created: 2026-04-28
updated: 2026-04-28
tags: [workflow, telemedicine, admin, operations, support]
verified-on-uat: 2026-04-28
---

# Telemedicine Operations Support Workflow

## Overview

Operations workflow for admin and IT teams maintaining [Telemedicine](/modules/telemedicine/) after deployment.

## Admin Portal Steps

1. Admin receives invitation email and sets password.
2. Admin logs into [Telemedicine Admin Portal](/entities/telemedicine-admin-portal/).
3. Admin reviews Transaction Report by date range and exports call report if needed.
4. Admin downloads call detail for selected call; delivery is sent to admin email and may include video, chat transcript, and images.
5. Admin searches Patient Information by HN or name.
6. Admin verifies app state and login status when a patient has call issues.
7. Admin updates editable patient health fields if needed: weight, height, underlying disease, allergies.
8. Admin reviews Doctor Information synced from HIS and edits display fields such as working hours, fee, certificates, and bio.
9. Admin manages administrator users.
10. Admin updates app/portal settings and license information.
11. Admin edits Legal Documents in Markdown and controls display/hide behavior for Terms and Privacy Policy.

## IT Operation Steps

1. IT connects to VPN if outside institutional network.
2. IT SSHes into server.
3. IT checks Docker containers with `docker ps`.
4. IT checks service logs with `docker logs <service>` or `docker logs --tail <n> <service>`.
5. IT checks CPU/RAM/processes with `htop`.
6. IT checks disk with `df -h`.
7. IT checks Docker disk usage with `docker system df`.
8. If a service is unhealthy or stuck, IT restarts it with `docker restart <service>`.
9. IT confirms service health and user-facing access after restart.

## Deployment Components

| Component | Services |
|-----------|----------|
| Application server | Nginx, API, Web, Webhook API, Webhook Worker, Sync-service |
| Database server | PostgreSQL, MongoDB, Redis, RabbitMQ |
| Load balancer | Routes web portal and app traffic |

## Security Notes

- Credentials found in delivery documents should be treated as secrets and not stored in operational wiki pages.
- Admin changes to legal documents can affect patient consent flow.
- Patient core demographics are HIS-sourced and not editable in app.

