---
title: OPD Patient Status
type: concept
sources: ["3.MEDHIS_Manual_OPD V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [concept, opd, status, patient-flow]
---

# OPD Patient Status (สถานะผู้ป่วยนอก)

8 สถานะที่ผู้ป่วยนอกผ่านในระบบ [[OPD]] ตั้งแต่ลงทะเบียนจนกลับบ้าน

## Status Flow

| # | Status | Thai | Color | ผู้เปลี่ยน | ส่งต่อ |
|---|--------|------|-------|-----------|--------|
| 1 | **Registered** | ลงทะเบียนรับการตรวจ | — | [[Registration]] | OPD Worklist |
| 2 | **Arrived** | รับผู้ป่วยเข้าแผนก | — | พยาบาล OPD | — |
| 3 | **Screening Completed** | คัดกรองเสร็จ | — | พยาบาล OPD | หน้าแพทย์ |
| 4 | **Consultation Started** | เริ่มตรวจ | เขียว | แพทย์ | — |
| 5 | **Consultation Completed** | ตรวจเสร็จ | เหลือง | แพทย์ | พยาบาล review orders |
| 6 | **Medical Discharge** | จำหน่ายทางการแพทย์ | — | พยาบาล OPD | [[Billing|การเงิน]] |
| 7 | **Billing In Progress** | อยู่ในขั้นตอนชำระเงิน | — | การเงิน (Lock) | — |
| 8 | **Financial Discharge** | ชำระเงินเสร็จ กลับบ้าน | — | การเงิน | — |

## ที่ใช้งาน

- [[OPD Worklist Screen]] — Group by Status
- [[OPD Patient Flow]] — workflow เต็ม
- Visit Detail → Patient Tracking — ดู timeline ทุกสถานะ
