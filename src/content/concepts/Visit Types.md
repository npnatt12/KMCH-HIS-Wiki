---
title: Visit Types
type: concept
sources: ["2.MEDHIS Manual_Registration V.2.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [concept, visit, registration]
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

## ที่ใช้งาน

- [[Registration]] — Visit Detail section ใน [[Patient Demographics Screen]]
- [[Emergency Registration]] — Visit Detail (default Department: Emergency)
- [[OPD]] — OPD Worklist
