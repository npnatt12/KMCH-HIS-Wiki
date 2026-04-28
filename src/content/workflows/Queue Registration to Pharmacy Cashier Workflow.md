---
title: Queue Registration to Pharmacy Cashier Workflow
type: workflow
sources: ["phase-4-uat-documents/1. MEDHIS/4. MEDHIS - เอกสารส่งมอบระบบ Queue.pdf"]
roles: [NurseOPD, Doctor, Pharmacist, AdminSystem]
created: 2026-04-28
updated: 2026-04-28
tags: [workflow, queue, registration, opd, pharmacy, billing]
verified-on-uat: 2026-04-28
---

# Queue Registration to Pharmacy Cashier Workflow

## Overview

กระบวนการคิวผู้ป่วยนอกตั้งแต่ลงทะเบียนใน [Registration](/modules/registration/) จนถึงรับยา/ชำระเงินและออกจากคิว.

## Steps

1. [Registration](/modules/registration/) creates visit in MEDHIS.
2. Queue number is generated from the last 4 digits of VN.
3. Registration forwards patient to OPD screening point.
4. If OPD department has Default Room, patient appears in [Queue Worklist Screen](/entities/queue-worklist-screen/) tab "คิวที่เรียก" with room assigned.
5. Nurse selects room and presses Call; patient appears on [Queue Dashboard](/entities/queue-dashboard/).
6. After screening, nurse forwards patient to doctor queue / OPD examination order.
7. Nurse without room-specific login reports patient; patient moves from "รอรายงานตัว" to "รอเรียก".
8. Doctor with room-specific login sees only patients assigned to that room.
9. Doctor presses Call; patient moves to Calling and appears on [Queue Dashboard](/entities/queue-dashboard/).
10. After consultation, doctor or staff presses forward/complete to after-doctor queue.
11. After-doctor staff calls patient to receive documents.
12. Staff forwards patient to pharmacy/payment.
13. Pharmacy prepares medicine; patient appears in medicine waiting area.
14. Staff moves patient to cashier when medicine/payment is ready.
15. Cashier calls patient, completes payment, and selects "คนไข้ออกจากคิว".
16. Patient disappears from [Queue Dashboard](/entities/queue-dashboard/) and workflow ends.

## Alternate Flows

- If patient is not ready, staff can hold queue and call again later.
- If patient needs multiple departments, staff forwards queue to the next department instead of ending it.
- If no medicine/payment is required, after-doctor service can route directly to completion based on local setup.

## Modules Involved

- [Registration](/modules/registration/)
- [OPD](/modules/opd/)
- [EMR Doctor](/modules/emr-doctor/)
- [Pharmacy](/modules/pharmacy/)
- [Billing](/modules/billing/)
- [Queue Management](/modules/queue-management/)

## Related Concepts

- [Queue Status and Routing](/concepts/queue-status-and-routing/)

