---
title: Queue Department Room Configuration
type: entity
sources: ["phase-4-uat-documents/1. MEDHIS/4. MEDHIS - เอกสารส่งมอบระบบ Queue.pdf"]
roles: [AdminSystem, ITSupport, NurseOPD]
created: 2026-04-28
updated: 2026-04-28
tags: [entity, queue, department, room, configuration]
verified-on-uat: 2026-04-28
---

# Queue Department Room Configuration

## Purpose

Configuration object that controls how [Queue Management](/modules/queue-management/) assigns rooms, limits worklist visibility, and forwards patients between service points.

## Configuration Rules

| Rule | Description |
|------|-------------|
| Department Type OPD | Can define Default Room. |
| Default Room | When patient is forwarded to a department, the system can assign the configured room automatically. |
| Login without room | User sees all patients in that department. |
| Login with room | User sees only patients assigned to the selected room. |
| Call with room selected | Patient appears on [Queue Dashboard](/entities/queue-dashboard/) immediately for that room/counter. |
| Forward point | User can forward patient to allowed next department/room based on configuration. |

## Operational Effects

| Scenario | Result |
|----------|--------|
| Registration sends patient to OPD screening | Patient enters default screening room if configured. |
| Nurse calls patient from screening room | Dashboard shows room/call information immediately. |
| Doctor room login is selected | Doctor or nurse sees only queue assigned to that room. |
| Patient needs next service | Queue is forwarded rather than completed. |
| Patient completes final pharmacy/cashier flow | Queue exits dashboard/worklist. |

## Refresh Rules

| Surface | Refresh Interval |
|---------|------------------|
| Queue Worklist | Every 2 minutes |
| Queue Dashboard | Every 1 minute |

## Related Pages

- [Queue Management](/modules/queue-management/)
- [Queue Status and Routing](/concepts/queue-status-and-routing/)
- [Queue Worklist Screen](/entities/queue-worklist-screen/)
- [Queue Dashboard](/entities/queue-dashboard/)

