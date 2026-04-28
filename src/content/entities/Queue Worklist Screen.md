---
title: Queue Worklist Screen
type: entity
sources: ["phase-4-uat-documents/1. MEDHIS/4. MEDHIS - เอกสารส่งมอบระบบ Queue.pdf"]
roles: [NurseOPD, Doctor, Pharmacist, AdminSystem]
created: 2026-04-28
updated: 2026-04-28
tags: [entity, queue, screen, worklist]
verified-on-uat: 2026-04-28
---

# Queue Worklist Screen

## Purpose

หน้าจอ Worklist สำหรับเจ้าหน้าที่เรียก พัก ส่งต่อ และจบคิวผู้ป่วยใน [Queue Management](/modules/queue-management/).

## Access Path

Queue Web Portal → Login → Select Department / Room → Worklist

## Tabs / States

| Tab / State | Meaning |
|-------------|---------|
| รอรายงานตัว | ผู้ป่วยรอ report ตัวก่อนเข้าคิวรอเรียก |
| รอเรียก | ผู้ป่วยพร้อมให้เรียกเข้าห้อง/ช่องบริการ |
| คิวที่เรียก | ผู้ป่วยถูกเรียกหรือ assign แล้ว |
| พักคอย | ผู้ป่วยรอหลังจุดบริการก่อนส่งต่อ |

## Fields

| Field | Description |
|-------|-------------|
| Queue No. | เลขคิวจาก 4 หลักสุดท้ายของ VN |
| HN / VN | Patient and visit reference |
| Patient Name | ชื่อผู้ป่วย |
| Service Point | แผนก/ห้อง/ช่องบริการปัจจุบัน |
| Time | เวลาเข้าสู่จุดบริการหรือรอคิว |
| Room | ห้องที่เลือกหรือ default room |
| Status | สถานะคิวใน Worklist |

## Button Actions

| Button | Action | Result |
|--------|--------|--------|
| Report | ย้ายผู้ป่วยจากรอรายงานตัวไปยังรอเรียก | พร้อมให้ห้องตรวจ/จุดบริการเรียก |
| Call | เรียกคิว | ชื่อแสดงบน [Queue Dashboard](/entities/queue-dashboard/) |
| Hold | พักคิว | ผู้ป่วยรอเรียกซ้ำ |
| Forward / Complete | ส่งต่อหรือจบจุดบริการ | เลือกปลายทางหรือจบคิว |
| Exit Queue | นำผู้ป่วยออกจากคิว | ชื่อหายจาก Dashboard |

## Related Workflows

- [Queue Registration to Pharmacy Cashier Workflow](/workflows/queue-registration-to-pharmacy-cashier-workflow/)

