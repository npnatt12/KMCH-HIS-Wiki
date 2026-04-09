---
title: OPD Worklist Screen
type: entity
sources: ["3.MEDHIS_Manual_OPD V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
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

## Patient Tracking — columns ที่แสดง

| Column | Description |
|--------|-------------|
| วันที่ / เวลา | เวลาที่เปลี่ยนสถานะ |
| Status | ชื่อสถานะ ณ เวลานั้น |
| ผู้บันทึก | User ที่กดเปลี่ยนสถานะ |

*เรียงลำดับ: วันที่ → เวลา (ascending)*

## Lab Specimen Collection Screen (ผ่าน OPD)

**Access Path:** OPD → Laboratory → Specimen Collection → NEW

| Field | ประเภท | Description |
|-------|--------|-------------|
| Department | Dropdown filter | กรองตามแผนก |
| Ward | Dropdown filter | กรองตาม Ward |
| Careprovider | Text search | กรองตามแพทย์ผู้สั่ง |
| Patient | Text search | ค้นหาผู้ป่วย |
| Encounter Type | Dropdown | OPD / IPD |
| Order No. | Text | ค้นหาตาม Order Number |
| Date From–To | Date range | ช่วงวันที่สั่ง |
| Status | Dropdown | กรองตาม Order status |

**Sort:** Lab No. / Name / Order Date

**Tabs:** TO COLLECT / COLLECTED

**Batch actions:** Select all (Checkbox) → Print Sticker batch / Collect Specimen batch → Confirm

## Appointment Screen (Book Appointment Form)

| Field | Required | Description |
|-------|----------|-------------|
| Department | Yes | แผนกที่ต้องการนัด |
| Care provider | Yes | แพทย์ผู้ตรวจ |
| Date | Yes | เลือกจากปฏิทิน |
| Time slot | Yes | Click เลือกช่องเวลา (สีฟ้า = นัดแล้ว) |
| Patient Name / HN | Yes | ค้นหาผู้ป่วย |
| Referral Details | No | รายละเอียดการส่งปรึกษา |
| Future Order | No | สั่งคำสั่งล่วงหน้า |
| Task | No | บันทึก Task ล่วงหน้า |

**Day View:** เปิดหลายคลินิก/แพทย์พร้อมกัน — ช่องสีฟ้า = นัดแล้ว

## MEDHIS Centrix Form Elements

| Element | Description |
|---------|-------------|
| ช่องสีเหลือง | กรอกข้อมูลให้แสดงบนเอกสาร |
| History counter | จำนวนเอกสารเก่า → Click ดู / Download / Print |
| Download PDF | ดาวน์โหลดเป็น PDF file |
| Print | สั่งพิมพ์จากเครื่องพิมพ์ |

## Validation / Error Conditions

- **Screening Completed โดยไม่มีแพทย์**: ต้อง Assign Careprovider ก่อน
- **Day View ช่องสีฟ้า**: ไม่สามารถนัดซ้ำ — เลือกช่องสีขาว (ว่าง)
- **Execute Order**: ต้องยืนยัน (Select + Status = Execute Order) ก่อน Save

## Related

- [[OPD]] — module page
- [[OPD Patient Flow]] — workflow
- [[OPD Patient Status]] — 8 สถานะ
- [[OPD Screening Screen]] — หน้าจอ Vital Signs / Charting
