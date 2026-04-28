---
title: Queue Dashboard
type: entity
sources: ["phase-4-uat-documents/1. MEDHIS/4. MEDHIS - เอกสารส่งมอบระบบ Queue.pdf"]
roles: [NurseOPD, Doctor, Pharmacist, AdminSystem]
created: 2026-04-28
updated: 2026-04-28
tags: [entity, queue, dashboard, display]
verified-on-uat: 2026-04-28
---

# Queue Dashboard

## Purpose

จอประชาสัมพันธ์สำหรับแสดงหมายเลขคิว ชื่อ/สถานะ และช่องบริการของผู้ป่วยแบบ Real-time.

## Display Areas

| Area | Description |
|------|-------------|
| Department Display | แสดงคิวตามแผนก เช่น OPD, Pharmacy, Cashier |
| OR Display | แสดงคิวผู้ป่วยนัดผ่าตัด |
| ER Display | แสดงคิวผู้ป่วยฉุกเฉิน |
| Calling Area | แสดงคิวที่ถูกเรียกและห้อง/ช่องบริการ |
| Waiting Area | แสดงคิวรอหรือพักคอยตามจุดบริการ |

## Data Refresh

Dashboard refresh interval: every 1 minute according to Phase 4 Queue delivery source.

## Fields

| Field | Description |
|-------|-------------|
| Queue No. | เลขคิวผู้ป่วย |
| Patient / Masked Name | ชื่อหรือรายการแสดงบนจอ |
| Room / Counter | ห้องตรวจหรือช่องบริการ |
| Department | แผนกปัจจุบัน |
| Status | รอเรียก / ถูกเรียก / พักคอย / จ่ายแล้ว |

## Related Pages

- [Queue Management](/modules/queue-management/)
- [Queue Worklist Screen](/entities/queue-worklist-screen/)
- [Queue Status and Routing](/concepts/queue-status-and-routing/)

