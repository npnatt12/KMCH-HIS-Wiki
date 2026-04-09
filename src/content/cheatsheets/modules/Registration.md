---
title: Registration Module
titleTh: ระบบงานลงทะเบียน
type: cheatsheet
sources: ["2.MEDHIS Manual_Registration V.2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, module, registration]
---

## Purpose
ระบบลงทะเบียนผู้ป่วยเป็นจุดเริ่มต้นทุก visit — สร้างประวัติใหม่ เปิด visit ผู้ป่วยเก่า ตรวจสอบสิทธิ สปสช.

## Access
**Registration → OP Registration**

## Workflow

| Step | Actor | Action |
|------|-------|--------|
| 1 | จนท. | Registration → OP Registration → Patient Search |
| 2 | จนท. | ไม่พบ → กด New → กรอก Patient Demographics |
| 3 | จนท. | พบ → Select → เลือก NEW VISIT หรือ REVISIT |
| 4 | จนท. | กรอก Visit Detail (Department, Careprovider, Payor) |
| 5 | จนท. | กด SAVE → ระบบสร้าง HN อัตโนมัติ |
| 6 | จนท. | ตรวจสิทธิ สปสช. → กด เช็คสิทธิ → ระบบระบุ Payor อัตโนมัติ |

## Key Screens
- **Patient Search Screen** — หน้าจอแรก ค้นหาจากชื่อ/HN/เลขบัตร
- **Patient Demographics Screen** — กรอกข้อมูล 15 sections
- **Emergency Registration** — ใช้เฉพาะผู้ป่วยฉุกเฉิน (เมนู Emergency)
- **Bulk Registration** — Upload Excel ลงทะเบียนกลุ่ม
- **Pre-Registration** — ลงทะเบียนล่วงหน้าก่อนผู้ป่วยมา

## Key Fields

| Field | หมายเหตุ |
|-------|---------|
| First Name | Required |
| Last Name | Required |
| Gender | Required |
| National ID | ตรวจสอบ MOD11 — 13 หลัก |
| Department | Required — แผนกรับ |
| Careprovider | แพทย์ผู้รักษา |
| Visit Type | OPD / ER / Referred |
| Payor | สิทธิ์รักษา — SELFPAY อัตโนมัติ Rank 2 |
| REVISIT | เลือกถ้ารักษาต่อเนื่องในช่วง Revisit Duration |

## Integration
**Registration** → OPD/ER → MRD (OPD Folder สร้างอัตโนมัติ) → Billing
