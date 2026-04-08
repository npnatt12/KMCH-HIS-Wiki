---
title: Patient Search Screen
type: entity
sources: ["2.MEDHIS Manual_Registration V.2.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [entity, screen, registration, search]
---

# Patient Search Screen

หน้าจอค้นหาผู้ป่วย — เป็นหน้าจอแรกเมื่อเข้า [[Registration]] → OP Registration

## Search Fields

สามารถค้นหาผู้ป่วยได้ด้วย:

| Field | Example |
|-------|---------|
| Hospital Number (MRD) | HN ของผู้ป่วย |
| ชื่อ (First Name) | ชื่อจริง |
| นามสกุล (Last Name) | นามสกุล |
| เบอร์โทรศัพท์บ้าน | หมายเลขโทรศัพท์ |
| เบอร์โทรศัพท์มือถือ | หมายเลขมือถือ |
| หมายเลขบัตรประชาชน | National ID |
| ชื่ออื่นๆ (Alias Names) | ชื่อที่เคยบันทึกไว้ |

## Behavior

- ถ้า**พบ** → แสดงรายการผู้ป่วย → กดเลือก → กด **Select**
  - ผู้ป่วยที่มีนัดหมาย: แสดงรายละเอียด Appointments ด้วย
  - ระบบตรวจสอบ Revisit Duration → อาจแสดง Popup [[Visit Types|NEW VISIT / REVISIT]]
- ถ้า**ไม่พบ** → แสดง Error Box → กด OK → กดปุ่ม **New** เพื่อลงทะเบียนใหม่

## Access

- [[Registration]] → OP Registration
- ใช้เป็นจุดเริ่มต้นของทุกรูปแบบการลงทะเบียน (ยกเว้น Emergency / Mass Casualty / Bulk / Pre-Registration)

## Related

- [[Patient Demographics Screen]] — หน้าจอถัดไปหลังค้นหา
- [[New Patient Registration]] — workflow เมื่อไม่พบผู้ป่วย
