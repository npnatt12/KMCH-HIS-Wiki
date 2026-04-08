---
title: Patient Demographics Screen
type: entity
sources: ["2.MEDHIS Manual_Registration V.2.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [entity, screen, registration, demographics]
---

# Patient Demographics Screen

หน้าจอหลักสำหรับกรอกและแก้ไขข้อมูลผู้ป่วย ใช้ทั้งการลงทะเบียนใหม่และ Modify Demographics

## Access

- [[Registration]] → OP Registration → [[Patient Search Screen]] → New / Select
- [[OPD]] → OPD Worklist → Modify Demographics
- [[IPD]] → Ward Board → Modify Demographics

## Sections (15)

1. **Patient Picture** — Webcam (TAKE PHOTO → SAVE) หรือ Upload ไฟล์
2. **Basic Details** — Title, Name, Gender, DOB, Blood Group, Mobile, Email, National ID (MOD11), Patient Notes, [[Patient Types|Patient Type]], Type Area
3. **Address Detail** — ที่อยู่, ค้นหาจากตำบล/รหัสไปรษณีย์
4. **[[Visit Types|Visit Detail]]** — Department, Careprovider, Visit Type, Priority, Transfer Mode, REVISIT
5. **[[Payor and Treatment Rights|Payor Details]]** — สิทธิการรักษา, Ranking, SELFPAY auto
6. **Referral Detail** — Referred By (ชื่อโรงพยาบาลที่ส่งมา)
7. **Episode Detail** — Episode Type (New/Select existing)
8. **Additional Detail** — VIP, Anonymous, Interpreter, Nationality, Religion, Race, Language, Marital Status, Occupation, House Type
9. **Alias Names** — ชื่ออื่นๆ (Type + Name)
10. **More Address** — ที่อยู่เพิ่มเติม (Type + Address)
11. **More Contacts** — Phone, Mobile, Email เพิ่มเติม
12. **More IDs** — บัตรอื่นๆ (Type + Number)
13. **Next of Kin** — ญาติ/ผู้ติดต่อ (เชื่อมกับผู้ป่วยในระบบได้)
14. **Disability** — ชนิดความพิการ + วันที่เริ่ม
15. **Equipment** — อุปกรณ์ในร่างกาย (กะโหลกปลอม, ตาปลอม ฯลฯ)

## Key Behaviors

| Feature | Detail |
|---------|--------|
| Mandatory fields | เครื่องหมาย `*` + แถบสีแดง |
| SAVE button | เปลี่ยนเป็นสีฟ้าเมื่อ mandatory ครบ |
| National ID validation | MOD11 — แจ้งเตือนถ้าไม่ถูกต้อง + แสดงผู้ป่วยที่ใช้เลขเดียวกัน |
| DOB Unknown | เลือก checkbox + ระบุช่วงอายุ |
| Language | Thai / English — ส่งผลต่อเอกสารผู้ป่วย |
| Edit lock | ผู้ป่วยเก่าต้องกดปุ่มปลดล็อคก่อนแก้ไข |
| Audit Log | ดูประวัติการแก้ไขข้อมูลทุก visit |
| Stale data alert | ไม่อัปเดทเกิน 6 เดือน → ระบบแจ้งเตือน |
| Appointment link | แสดง Link to Appt + Unlink from Appointment |

## Related

- [[Registration]] — module page
- [[Patient Search Screen]] — หน้าจอก่อนหน้า
- [[New Patient Registration]] — workflow ผู้ป่วยใหม่
- [[Patient Banner]] — แสดง VIP / Anonymous / Interpreter flags
