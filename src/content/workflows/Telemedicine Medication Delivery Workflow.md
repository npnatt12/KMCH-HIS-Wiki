---
title: Telemedicine Medication Delivery Workflow
type: workflow
sources: ["phase-4-uat-documents/3. Telemed/เอกสารแนบงวดที่ 4 - Telemed /เอกสารแนบ 5 เอกสารขั้นตอนการใช้งานระบบแพทย์ทางไกล (Telemedicine).pdf"]
roles: [Patient, Pharmacist, FinanceAccounting, NurseOPD]
created: 2026-04-28
updated: 2026-04-28
tags: [workflow, telemedicine, pharmacy, payment, medication-delivery]
verified-on-uat: 2026-04-28
---

# Telemedicine Medication Delivery Workflow

## Overview

Medication, additional payment, pharmacist call, and rider delivery flow after Telemedicine consultation.

## Steps

1. Doctor completes Telemedicine consultation and orders medication if needed.
2. Pharmacist prepares medication from MEDHIS order.
3. If additional payment is required, Finance reviews patient in OP Cashier Worklist.
4. Finance summarizes additional charge and sends QR Code through staff.
5. Staff sends QR Code, medical certificate, delivery-address confirmation, and follow-up appointment information through LINE OA as applicable.
6. Patient pays and sends proof through LINE OA.
7. Staff sends payment proof to Finance.
8. Finance issues receipt and confirms back to staff.
9. Staff informs Pharmacy to proceed with dispensing.
10. Pharmacist opens OPD EMR and calls patient through the app to explain medication use.
11. Patient answers pharmacist call and receives medication instructions.
12. Pharmacist presses Dispense after the call ends.
13. Staff receives medication and receipt from Pharmacy/Finance.
14. Staff calls rider to deliver medication and receipt.
15. Staff sends tracking link to patient through LINE OA.
16. If medicine cannot be delivered, staff informs patient to pick it up in person.

## Skip Rules

| Condition | Skip / Alternate Path |
|-----------|-----------------------|
| No medication | Skip pharmacy preparation, pharmacist call, and delivery. |
| No additional payment | Skip finance QR/payment proof flow. |
| Medicine cannot be delivered | Patient pickup path replaces rider delivery. |

## Related Pages

- [Telemedicine Visit Workflow](/workflows/telemedicine-visit-workflow/)
- [Telemedicine Consultation Session](/entities/telemedicine-consultation-session/)
- [Pharmacy Dispensing Workflow](/workflows/pharmacy-dispensing-workflow/)
- [OP Billing Workflow](/workflows/op-billing-workflow/)

