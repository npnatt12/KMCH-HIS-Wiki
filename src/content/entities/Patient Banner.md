---
title: Patient Banner
type: entity
sources: ["2.MEDHIS Manual_Registration V.2.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [entity, ui, patient]
roles: [Doctor, NurseIPD, NurseOPD, NurseOR, Pharmacist, XRayTech]
verified-on-uat: pending
---

# Patient Banner

แถบแสดงข้อมูลผู้ป่วยที่ปรากฏในหน้าจอต่างๆ ของ MEDHIS

## Special Indicators

| Flag | Display on Banner |
|------|-------------------|
| **VIP** | สัญลักษณ์พิเศษ (ตาม VIP Type) |
| **Anonymous** | ชื่อแสดงเป็น `****` (สำหรับผู้ใช้ที่ไม่มีสิทธิ์ดู) |
| **Interpreter Required** | แสดงข้อความ "Interpreter Reqd" |

## ที่ใช้งาน

ปรากฏในหน้าจอทุกโมดูลที่เกี่ยวข้องกับผู้ป่วย ข้อมูลมาจาก [Patient Demographics Screen](/entities/patient-demographics-screen/) → Additional Detail

## Related

- [Patient Types](/concepts/patient-types/) — VIP, Anonymous, Interpreter flags
- [Registration](/modules/registration/) — กำหนดค่าใน Additional Detail
