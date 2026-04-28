---
title: Mass Casualty Registration
type: workflow
sources: ["2.MEDHIS Manual_Registration V.2.docx", "4.MEDHIS Manual_ER V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [workflow, registration, emergency, mass-casualty]
roles: [NurseOPD, AdminSystem]
verified-on-uat: pending
---

# ขั้นตอนลงทะเบียนผู้ป่วยอุบัติภัยหมู่ (Mass Casualty Registration)

การลงทะเบียนผู้ป่วยหลายรายพร้อมกันจากเหตุอุบัติภัยหมู่ในระบบ [ER](/modules/er/)

## ขั้นตอน

1. เลือกเมนู **Emergency → Mass Casualty**
2. ระบุ **Incident Details** — รายละเอียดเหตุการณ์
3. ระบุจำนวนผู้ป่วย:
   - **Adult**: Male / Female / Unknown
   - **Child**: Male / Female / Unknown
4. **Department**: default **Emergency**
5. **Incident Date**: default วันที่ปัจจุบัน
6. (Optional) **Brought by Next of Kin**: เปิด → ระบุ Escort Name (Required), Mobile, Comment
7. กด **Save** → ระบบสร้าง Visit ทั้งหมด + แสดงจำนวนที่ลงทะเบียน

## Auto-Generated Names

ระบบสร้างชื่อผู้ป่วยอัตโนมัติ: `"Incident Detail_Adult/Child_เพศ_ลำดับตามจำนวน"`

## After Registration

- ผู้ป่วยแสดงใน [Whiteboard](/entities/whiteboard/)
- ดำเนินการ Triage ([ESI Level](/concepts/esi-level/)) ต่อทีละราย

## Related

- [Emergency Registration](/workflows/emergency-registration/) — ลงทะเบียนฉุกเฉินรายเดียว
- [ER](/modules/er/) — module page
- [Registration](/modules/registration/) — Registration module (Mass Casualty section)
