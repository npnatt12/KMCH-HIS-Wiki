---
title: Telemedicine Visit Workflow
type: workflow
sources: ["phase-4-uat-documents/3. Telemed/4. Telemed - เอกสารการอบรมการใช้งาน และการดูแลระบบ.pdf", "phase-4-uat-documents/3. Telemed/เอกสารแนบงวดที่ 4 - Telemed /เอกสารแนบ 5 เอกสารขั้นตอนการใช้งานระบบแพทย์ทางไกล (Telemedicine).pdf"]
roles: [Patient, NurseOPD, Doctor, Pharmacist, FinanceAccounting, TelemedicineAdmin]
created: 2026-04-28
updated: 2026-04-28
tags: [workflow, telemedicine, opd, appointment, mobile]
verified-on-uat: 2026-04-28
---

# Telemedicine Visit Workflow

## Overview

กระบวนการแพทย์ทางไกลตั้งแต่ลงทะเบียน/ยืนยันตัวตน นัดหมาย ชำระเงิน โทรพบแพทย์ บันทึกการรักษา จ่ายยา และจัดส่งยา.

## Steps

1. Patient contacts hospital staff for new patient registration.
2. Staff registers patient in [Registration](/modules/registration/) / MEDHIS and instructs patient to add LINE OA.
3. Patient sends identity photo with national ID through LINE OA as required by the process.
4. Staff sends download link for [Telemedicine Mobile App](/entities/telemedicine-mobile-app/).
5. Patient verifies account using HN, date of birth, and national ID.
6. Patient sets password, PIN, optional biometrics, and accepts Terms, Privacy Policy, and Consent.
7. Staff creates appointment in HIS and checks treatment rights.
8. If not gold-card/right-covered flow, Finance receives case and creates Deposit/payment QR; patient sends proof back through LINE OA.
9. Staff confirms appointment in OPD/Appointment; mobile status changes Booked → Confirmed.
10. Nurse registers appointment patient on [OPD Worklist Screen](/entities/opd-worklist-screen/); patient moves to Registered and appears in [Doctor Worklist Screen](/entities/doctor-worklist-screen/) OutPatient.
11. At appointment time, Doctor presses call icon from [Doctor Worklist Screen](/entities/doctor-worklist-screen/).
12. Patient receives call notification in app and accepts.
13. Doctor and patient enter consultation session with video/audio/chat controls.
14. Doctor records treatment in [EMR Form Screen](/entities/emr-form-screen/), orders medication if needed, writes medical certificate if needed, and presses Medical Discharge.
15. If medication exists, Pharmacist prepares medication.
16. If additional payment exists, Finance checks OP Cashier Worklist, summarizes charge, and sends QR through staff.
17. Staff sends QR, medical certificate, address confirmation, and follow-up appointment information through LINE OA as applicable.
18. Patient pays and sends proof.
19. Finance issues receipt and confirms back to staff.
20. Pharmacist calls patient from OPD EMR to explain medication use, then dispenses.
21. Staff receives medicine and receipt, calls rider, sends tracking link through LINE OA.
22. If medicine cannot be delivered, staff informs patient to pick it up in person.
23. Patient rates doctor after call ends.

## Appointment Statuses

- Booked
- Confirmed
- Completed
- Miss Call
- Reschedule
- Cancelled
- No Show

## Systems Involved

- [Telemedicine](/modules/telemedicine/)
- [Registration](/modules/registration/)
- [OPD](/modules/opd/)
- [EMR Doctor](/modules/emr-doctor/)
- [Pharmacy](/modules/pharmacy/)
- [Billing](/modules/billing/)
- LINE OA
- Zoom teleconference module

## Edge Cases

- If patient has not logged into app, doctor cannot call patient.
- If patient misses call, mobile app shows missed-call notification and call history.
- If no medication and no extra payment, patient may only receive the medical certificate/follow-up information.

