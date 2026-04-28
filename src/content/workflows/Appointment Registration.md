---
title: Appointment Registration
type: workflow
sources: ["2.MEDHIS Manual_Registration V.2.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [workflow, registration, appointment]
roles: [NurseOPD]
verified-on-uat: pending
---

# ขั้นตอนลงทะเบียนผู้ป่วยนัด (Appointment Patient Registration)

การลงทะเบียนผู้ป่วยที่มีนัดหมายล่วงหน้า — 2 วิธี

## วิธีที่ 1: จากเมนูลงทะเบียน

1. **Registration → OP Registration**
2. [Patient Search Screen](/entities/patient-search-screen/) → ค้นหาผู้ป่วย → กด **Search**
3. ระบบแสดงรายชื่อ + **รายละเอียด Appointments**
4. กด **SELECT** → ระบบแสดง [Patient Demographics Screen](/entities/patient-demographics-screen/)
5. ระบบดึง **Department** และ **ชื่อแพทย์** จากนัดหมายอัตโนมัติ (Link to Appt)
6. (Optional) **Unlink from Appointment** — กรณีไม่ต้องการเชื่อมต่อนัด
7. กด **SAVE**

## วิธีที่ 2: จาก OPD Worklist

1. [OPD](/modules/opd/) → **OPD Worklist** → Tab **APPOINTMENTS**
2. เลือกรายชื่อผู้ป่วยที่ต้องการเปิด Visit
3. ระบบแสดง Visit Detail + Payor Detail
4. กด **SAVE**

## Related

- [Registration](/modules/registration/) — module page (workflow #3)
- [OPD Worklist Screen](/entities/opd-worklist-screen/) — Appointments tab
- [Visit Types](/concepts/visit-types/) — Visit Detail
