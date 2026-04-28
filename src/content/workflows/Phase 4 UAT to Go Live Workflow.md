---
title: Phase 4 UAT to Go Live Workflow
type: workflow
sources: ["phase-4-uat-documents/หนังสือส่งมอบงานงวดที่ 4 - TICC - 03042569.pdf", "phase-4-uat-documents/3. Telemed/5. Telemed - เอกสารข้อตกลงร่วมการใช้ระบบสารสนเทศจริง.pdf"]
roles: [AdminSystem, ITSupport, FinanceAccounting, TelemedicineAdmin]
created: 2026-04-28
updated: 2026-04-28
tags: [workflow, phase-4, uat, go-live, readiness]
verified-on-uat: 2026-04-28
---

# Phase 4 UAT to Go Live Workflow

## Overview

Generic evidence workflow used by Phase 4 delivery documents to move a system from testing and training into go-live readiness.

## Steps

1. Define delivery scope by system: MEDHIS, [Odoo ERP](/modules/odoo-erp/), or [Telemedicine](/modules/telemedicine/).
2. Install or prepare target environment such as Staging/UAT or Production.
3. Perform internal smoke/pre-UAT tests.
4. Train user groups and administrators.
5. Conduct UAT with real users or key users.
6. Record UAT result as `ผ่าน` / `สำเร็จ` or capture issue.
7. Run simulation if required, such as Queue floor simulation or Telemedicine room simulation.
8. Verify data migration or sync readiness.
9. Verify infrastructure, network, server, device, and support-channel readiness.
10. Verify security, user rights, backup, and recovery plan.
11. Hold go-live readiness meeting with responsible parties.
12. Confirm go-live date/time.
13. Execute go-live.
14. Provide post-go-live support and issue tracking.
15. Include signed annexes or delivery confirmations in package.

## Readiness Checklist

| Item | Required Evidence |
|------|-------------------|
| UAT | Test result with user/key-user confirmation |
| Training | Training schedule and attendance evidence |
| Infrastructure | Server/network/device readiness |
| Data | Migration or sync verification |
| Manual | User/admin/IT manuals delivered |
| Support | Helpdesk or support channel prepared |
| Security | User rights and access control reviewed |
| Backup | Backup and recovery plan checked |

## Related Concept

- [Phase 4 UAT and Go Live Evidence](/concepts/phase-4-uat-and-go-live-evidence/)

