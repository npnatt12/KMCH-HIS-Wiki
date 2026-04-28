---
title: OR — Operating Room Module
type: module
sources: ["11.MEDHIS Manual_OR V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [module, or, operating-room, surgery]
verified-on-uat: pending
---

# OR — ระบบงานห้องผ่าตัด (Operating Room)

## Purpose

ระบบจัดการห้องผ่าตัดตั้งแต่จองห้อง จัดตาราง บันทึกรายละเอียดผ่าตัด จนดูแลห้องพักฟื้น

## Access

เมนูหลัก: **Operating Room → Surgery Request List / OR Schedule / OR Worklist**

## Key Screens

| Screen | Description |
|--------|-------------|
| **Surgery Request List** | รายชื่อคำขอผ่าตัดจากแผนกต่างๆ → Book / Cancel / Modify Demographic |
| OR Schedule | ตาราง Calendar นัดห้องผ่าตัด — Click ช่องว่างเพื่อจอง |
| **OR Worklist** | รายชื่อผู้ป่วยที่จะมาผ่าตัดวันนี้ พร้อมเมนูย่อย 10 รายการ |
| OR Record | บันทึกรายละเอียดการผ่าตัดจริง (Intra-op) |

## 2 เส้นทางเข้าสู่ OR

### เส้นทางที่ 1: Surgery Request (ผ่านแผนกอื่น)

```
EMR → Referral → Tab Surgery
```

**Fields ที่ต้องระบุ:**

| Field | Description |
|-------|-------------|
| Department | แผนกที่เกี่ยวข้อง |
| Surgeon | ชื่อแพทย์ผู้ผ่าตัด |
| Procedure Details | ชื่อหัตถการ |
| Surgery Date & Time | วันที่และเวลาที่ต้องการ |
| Anesthesia | ชนิดการวางยาสลบ + แพทย์ดมยา |

→ Save → ส่งไปที่ **Surgery Request List**
→ OR Staff เลือก **Book** → เปิด OR Schedule

### เส้นทางที่ 2: OR Schedule (จองตรง)

```
Operating Room → OR Schedule → Click ช่องเวลา → กรอกรายละเอียด → Save
```

## OR Schedule — Fields การจอง

| Field | Options |
|-------|---------|
| Operating Room | ห้องผ่าตัด |
| Appointment Date / From / To | วันที่ + เวลา |
| Priority | Normal / Urgent |
| Status | Booked / Confirmed |
| Planning Type | Elective / Emergency |
| Criticality | Major / Minor |
| Anesthesia | GA / LA / ฯลฯ |
| Anesthesist | วิสัญญีแพทย์ |
| Procedure Details | หัตถการผ่าตัด |
| Surgeon Role + Surgeon | ทีมผ่าตัด (เพิ่มได้หลายคน) |

ดูรายละเอียดทุก Field ที่ entities/OR Schedule Screen

## Schedule Management

| Action | เงื่อนไข | รายละเอียด |
|--------|---------|-----------|
| **Modify** | ทุกสถานะ | แก้ไขรายละเอียดการจอง |
| **Reschedule** | Booked เท่านั้น | เลื่อนนัด → ต้องระบุเหตุผล |
| **Confirm** | Booked → Confirmed | ยืนยันการจอง |
| **Cancel** | ทุกสถานะ | ยกเลิก → ต้องระบุเหตุผล |
| **View Audit Log** | ทุกสถานะ | ดูประวัติการจองทั้งหมด |

## OR Worklist — เมนูย่อย (วันผ่าตัด)

| Menu | Description |
|------|-------------|
| **Charting** | บันทึกสัญญาณชีพ |
| **Order** | ลงคำสั่งการรักษา |
| **View EMR** | ดูแฟ้มประวัติผู้ป่วย |
| **Consent Form** | Upload ใบยินยอมผ่าตัด |
| **Confirm Booking** | ยืนยันผ่าตัด (ปรากฏเฉพาะที่ยังไม่ Confirm) |
| **OR Record** | บันทึกรายละเอียดผ่าตัด |
| **Check list** | แบบฟอร์ม checklists |
| **Anesthesia record** | บันทึกการได้รับยาระงับความรู้สึก |
| **eMAR Record** | บันทึกการให้ยา |
| **Patient Tracking** | บันทึกสถานะผู้ป่วย |

## OR Record — Fields บันทึกผ่าตัด

### Timing

| Field | Description |
|-------|-------------|
| Theatre in Date & Time | เวลาเข้าห้องผ่าตัด |
| Theatre out Date & Time | เวลาออกจากห้องผ่าตัด |
| Anesthesia Start/End | เริ่ม/สิ้นสุดการวางยาสลบ |
| Procedure Start/End | เริ่ม/สิ้นสุดหัตถการ |

### Details

| Field | Description |
|-------|-------------|
| Reason For Procedure | สาเหตุการผ่าตัด |
| Procedure Free Text | รายละเอียดเพิ่มเติม |
| Bodysites | ส่วนของร่างกาย |
| Surgeon Role + Name | ทีมผ่าตัด (เพิ่ม/ลบได้) |
| Anesthesist | ชื่อผู้ให้ยาระงับความรู้สึก |
| Scrub nurse | ชื่อ Scrub Nurse |
| Implants Details | วัสดุ Implants ที่ใช้กับผู้ป่วย |
| Status | Completed / Inprogress / Planned |
| Planning Type | Elective / Emergency |
| Criticality | Major / Minor |
| Surgeon Note | บันทึกรายละเอียด (สร้างได้หลายฟอร์ม) |

**Multi-Procedure:** กด + เพิ่มชุดรายละเอียด Procedure ใหม่ในผ่าตัดครั้งเดียวกัน

ดูรายละเอียดทุก Field ที่ entities/OR Record Screen

## Recovery Room (ห้องพักฟื้น)

- บันทึก **Vital Signs** (Charting)
- บันทึก **Order** (คำสั่งการรักษาในห้องพักฟื้น)
- จำหน่ายผู้ป่วยออกจากห้องพักฟื้น

## Status Flow

```
Surgery Request → Booked → Confirmed → Inprogress → Completed
```

## Integration Points

| Module | Integration |
|--------|-------------|
| modules/EMR Doctor | Surgery Request จาก EMR Referral Tab |
| modules/ER | Emergency → Send to OR |
| modules/IPD | ผู้ป่วยในส่งผ่าตัด |
| modules/Admission | ผู้ป่วย OR อาจต้อง Admit หลังผ่าตัด |
| modules/Billing | OR charges |

## Workflows

- workflows/OR Surgery Request to Record Workflow — กระบวนการครบตั้งแต่ Request ถึง Recovery Room
