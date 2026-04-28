---
title: Visit Types
type: concept
sources: ["2.MEDHIS Manual_Registration V.2.docx", "4.MEDHIS Manual_ER V.1.docx", "6.MEDHIS Manual_Admission V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [concept, visit, registration]
roles: [Doctor, NurseIPD, NurseOPD, NurseOR]
verified-on-uat: pending
---

# Visit Types

ประเภทของการเข้ารับการรักษาในระบบ MEDHIS

## NEW VISIT vs REVISIT

เมื่อลงทะเบียนผู้ป่วยเก่า ระบบจะตรวจสอบ visit ล่าสุด:

- **NEW VISIT** — เปิด visit การรักษาใหม่
- **REVISIT** — เปิด visit เชื่อมต่อกับ visit การรักษาเดิม

### Revisit Duration

ระบบตรวจสอบจาก **App Setting → Revisit Duration** ว่า visit ล่าสุดอยู่ในช่วงเวลาที่กำหนดหรือไม่:
- ถ้าอยู่ในช่วง → แสดง Popup Alert ให้เลือก NEW VISIT หรือ REVISIT
- ถ้าเกินช่วง → เปิด NEW VISIT โดยตรง

สามารถเลือก REVISIT ด้วยตนเองได้ที่ Visit Detail checkbox

## Visit Priority

| Priority | Description |
|----------|-------------|
| Normal | การรักษาปกติ |
| Urgent | เร่งด่วน |
| Emergency | ฉุกเฉิน |

## Multi-Department Visit

ผู้ป่วยสามารถเข้ารับการรักษาหลายแผนกในวันเดียวกันได้ — กดปุ่ม + ใน Visit Detail เพื่อเพิ่มแผนก

## Visit Detail Fields

- **Department** — แผนกที่เข้ารับการรักษา (พิมพ์ค้นหา)
- **Careprovider** — ชื่อแพทย์ (พิมพ์ค้นหา)
- **Visit Type** — ชนิดของการเข้ารักษา
- **Priority** — ความเร่งด่วน
- **Comment** — ข้อความเพิ่มเติม
- **Transfer Mode** — ชนิดการเคลื่อนย้าย (รถนอน, รถพยาบาล, รถเข็น)
- **REVISIT** — checkbox เชื่อมต่อ visit เดิม

## Transfer Mode

ระบุใน Visit Detail — ชนิดการเคลื่อนย้ายผู้ป่วยมาโรงพยาบาล:
- รถนอน
- รถพยาบาล
- รถเข็น
- Walk-in (เดินมาเอง)

## Encounter Types

| Type | Module | Description |
|------|--------|-------------|
| **OPD** (Outpatient) | [OPD](/modules/opd/) / [Registration](/modules/registration/) | ผู้ป่วยนอก — เปิด visit และกลับบ้านในวันเดียวกัน |
| **ER** (Emergency) | [ER](/modules/er/) / [Emergency Registration](/workflows/emergency-registration/) | ฉุกเฉิน — Department = Emergency (default) |
| **IPD** (Inpatient) | [Admission](/modules/admission/) / [IPD](/modules/ipd/) | ผู้ป่วยใน — Admit เข้า Ward พักค้างคืน |
| **Pre-Admit** | [Admission](/modules/admission/) | เตรียม Admit ล่วงหน้า — สั่งคำสั่งก่อน Admit จริง |

## ที่ใช้งาน

- [Registration](/modules/registration/) — Visit Detail section ใน [Patient Demographics Screen](/entities/patient-demographics-screen/)
- [Emergency Registration](/workflows/emergency-registration/) — Visit Detail (default Department: Emergency)
- [OPD](/modules/opd/) — OPD Worklist
- [Admission](/modules/admission/) — Admission Detail (IPD/Pre-Admit)
- [ER](/modules/er/) — Whiteboard + Triage (Encounter Type filter)
