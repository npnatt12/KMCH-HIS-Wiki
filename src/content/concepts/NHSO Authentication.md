---
title: NHSO Authentication
type: concept
sources: ["2.MEDHIS Manual_Registration V.2.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [concept, nhso, insurance, rights]
roles: [AdminSystem]
verified-on-uat: pending
---

# NHSO Authentication (ตรวจสอบสิทธิ สปสช.)

การตรวจสอบสิทธิการรักษาพยาบาลผ่านระบบ สปสช. (สำนักงานหลักประกันสุขภาพแห่งชาติ / National Health Security Office)

## ขั้นตอน

1. ระบุเลขบัตรประชาชนใน [Patient Demographics Screen](/entities/patient-demographics-screen/) → Basic Details
2. กดปุ่ม **เช็คสิทธิ**
3. ระบบแสดงรายละเอียดสิทธิการรักษาของผู้ป่วย
4. เลือกสิทธิที่ต้องการ → ระบบระบุใน [Payor Details](/concepts/payor-and-treatment-rights/) อัตโนมัติ

## ที่ใช้งาน

- [Registration](/modules/registration/) → Demographics → Basic Details → กดเช็คสิทธิ
- [Billing](/modules/billing/) → Modify Payor (ตรวจสอบสิทธิ์เพิ่มเติมตอนออกบิล)

## Related

- [Payor and Treatment Rights](/concepts/payor-and-treatment-rights/) — ระบบสิทธิ์การรักษาทั้งหมด
- [Patient Demographics Screen](/entities/patient-demographics-screen/) — หน้าจอที่ใช้เช็คสิทธิ
