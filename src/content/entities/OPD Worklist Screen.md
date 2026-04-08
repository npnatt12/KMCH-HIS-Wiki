---
title: OPD Worklist Screen
type: entity
sources: ["3.MEDHIS_Manual_OPD V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [entity, screen, opd]
---

# OPD Worklist Screen

หน้าจอหลักของระบบ [[OPD]] แสดงรายชื่อผู้ป่วยนอกและเครื่องมือจัดการ

## Access

OPD → OPD Worklist

## Features

### Group By
- **None** — เรียงตามเวลาลงทะเบียน (ascending/descending)
- **Status** — จัดตาม [[OPD Patient Status]] (8 สถานะ)
- **Care provider** — จัดตามรายชื่อแพทย์

### Tabs
- **รายชื่อผู้ป่วย** — ผู้ป่วย OPD ของวัน
- **APPOINTMENTS** — รายชื่อนัดหมาย (ใช้ลงทะเบียนจากนัดได้)
- **REFERRALS** — ผู้ป่วยที่ส่งปรึกษามาจากแผนกอื่น

### Visit Detail Panel (เมื่อ click ผู้ป่วย)
- Order Details — รายการ orders ทั้งหมด
- Appointments — วันนัด + พิมพ์ Appointment Slip
- Tasks — คำสั่ง Execute Order
- Consults — ส่งปรึกษา
- Patient Tracking — timeline สถานะ

### Action Icons
| Icon | Action |
|------|--------|
| Status change | Arrived / Screening Completed / Medical Discharge |
| Charting | บันทึก Vital Signs |
| Assign Careprovider | ระบุแพทย์ |
| Execute Order | รับคำสั่ง |
| Appointment | ทำนัด |
| Print Documents | พิมพ์เอกสาร |
| Form | MEDHIS Centrix Forms |
| View EMR | ดูแฟ้มประวัติ |
| Modify Demographics | แก้ไขข้อมูลผู้ป่วย |

## Related

- [[OPD]] — module page
- [[OPD Patient Flow]] — workflow
- [[OPD Patient Status]] — 8 สถานะ
