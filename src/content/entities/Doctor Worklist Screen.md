---
title: Doctor Worklist Screen
type: entity
sources: ["17.MEDHIS Manual_EMR_Doctor V.2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, emr, doctor, screen, dashboard]
---

# Doctor Worklist Screen — หน้าจอทำงานของแพทย์

## Purpose

Dashboard หลักสำหรับแพทย์ — แสดงสถานะผู้ป่วย งานรอดำเนินการ และการแจ้งเตือนต่างๆ ทั้ง OPD และ IPD

## Access Path

เมนู **OPD → Doctor Worklist**

---

## 10 Information Boxes

| # | Box Name | คำอธิบาย | หมายเหตุ |
|---|----------|---------|---------|
| 1 | OutPatients | รายชื่อ/จำนวนผู้ป่วยนอกที่รอตรวจ | Real-time |
| 2 | Medicine Reject | รายชื่อผู้ป่วยที่เภสัชกรปฎิเสธการจ่ายยา | เชื่อมกับ [[Pharmacy]] |
| 3 | Appointments | จำนวนผู้ป่วยที่นัดหมาย | |
| 4 | InPatients | จำนวนผู้ป่วยในที่แพทย์ Login เป็นเจ้าของไข้ | เชื่อมกับ [[IPD]] |
| 5 | Consult / Referrals | จำนวนผู้ป่วยที่ส่ง Consult มาที่แพทย์ Login | |
| 6 | Cosign / Approval | รายการรอ Co-Sign หรือ Approval — ตัวเลขหายเมื่อ Co-Sign แล้ว | |
| 7 | Statistics | สถิติจำนวนผู้ป่วยและค่า DF ที่แพทย์ตรวจ | |
| 8 | Doctor Fee | ข้อมูล DF ของแพทย์ที่ Login | |
| 9 | Lab Reports | ผลตรวจ [[LAB|Lab]] ที่แพทย์ Login เป็นผู้สั่ง | |
| 10 | Radiology Reports | ผลตรวจ [[XRAY|Radiology]] ที่แพทย์ Login เป็นผู้สั่ง | |

---

## OutPatients Box — Fields

| Field | คำอธิบาย |
|-------|---------|
| Search MRN or Name | ค้นหาผู้ป่วยจาก HN หรือชื่อ |
| Status | กรอง Status ผู้ป่วย |
| Date | เลือกวันที่ดูข้อมูล |
| Triage Level | Icon แสดงระดับ Triage |
| Lab Icon | ผู้ป่วยมีการสั่ง Lab |
| X-ray Icon | ผู้ป่วยมีการสั่ง X-ray |

## InPatients Box — Fields

| Field | คำอธิบาย |
|-------|---------|
| Search Patient | ค้นหาจากชื่อหรือ HN |
| Search Final D/C | ค้นหาผู้ป่วยที่ Financial Discharge แล้ว |
| Only Inservice | แสดงเฉพาะผู้ป่วยที่ยังอยู่ในการดูแล |
| D/C Start date | วันที่เริ่มต้นค้นหาตาม Discharge date |
| D/C End date | วันที่สิ้นสุดค้นหา (ย้อนหลังได้ไม่เกิน 31 วัน) |

---

## OPD Patient Status (8 สถานะ)

| # | Status | ผู้เปลี่ยนสถานะ |
|---|--------|--------------|
| 1 | Registered | Registration |
| 2 | Arrived | OPD / พยาบาล |
| 3 | Screening Completed | พยาบาล (Screening) |
| 4 | Consultation Started | แพทย์ (กด START) |
| 5 | Consultation Completed | แพทย์ (กด END) |
| 6 | Medical Discharge | แพทย์ |
| 7 | Billing Inprogress | Billing |
| 8 | Financial Discharge | Billing |

---

## Buttons

| Button | Action | เงื่อนไข |
|--------|--------|---------|
| Patient Name (OutPatients) | เข้า OPD EMR | คลิกชื่อผู้ป่วย |
| View EMR (Worklist) | เข้า OPD EMR | จาก OPD Worklist |
| View EMR (Consult) | ดูประวัติผู้ป่วย | จาก Consult/Referrals box |
| Reply Consult | ตอบ Consult | จาก Consult/Referrals box |

---

## Related Workflows

- [[workflows/OPD Patient Flow|OPD Patient Flow]] — สถานะผู้ป่วยนอก 8 ขั้นตอน
- [[modules/EMR Doctor|EMR Doctor Module]] — การใช้งานระบบ EMR แพทย์
