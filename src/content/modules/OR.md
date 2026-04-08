---
title: OR — Operating Room Module
type: module
sources: ["11.MEDHIS Manual_OR V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [module, or, operating-room, surgery]
---

# OR — ระบบงานห้องผ่าตัด (Operating Room)

## Purpose

ระบบจัดการห้องผ่าตัดตั้งแต่จองห้อง จัดตาราง บันทึกรายละเอียดผ่าตัด จนดูแลห้องพักฟื้น

## Access

เมนูหลัก: **Operating Room → Surgery Request List / OR Schedule / OR Worklist**

## Key Screens

### Surgery Request List
รายชื่อคำขอผ่าตัดที่ส่งมาจากแผนกต่างๆ → เลือก: Book / Cancel / Modify Demographic

### OR Schedule
ตารางนัดห้องผ่าตัด — ดูตามห้อง + วัน/เวลา → Click ช่องว่างเพื่อจอง

### OR Worklist
รายชื่อผู้ป่วยที่จะมาผ่าตัดวันนี้ พร้อมเมนูย่อย

## Workflows

### 1. Surgery Request (จากแผนกอื่น)
- EMR → Referral → Tab **Surgery**
- ระบุ: Department, **Surgeon**, **Procedure Details**, Surgery Date/Time, **Anesthesia** + Anesthesist
- Save → ส่งไป Surgery Request List

### 2. OR Schedule (จองห้อง)
- จาก Surgery Request List → **Book** (หรือจอง Direct)
- ระบุรายละเอียด:

| Field | Description |
|-------|-------------|
| Operating Room | ห้องผ่าตัด |
| Appointment Date | วันที่ |
| From / To | เวลาเริ่ม-สิ้นสุด |
| Priority | Normal / Urgent |
| Status | Booked / Confirmed |
| Planning Type | Elective / Emergency |
| Criticality | Major / Minor |
| Anesthesia | GA / LA ฯลฯ |
| Anesthesist | วิสัญญีแพทย์ |
| Procedure Details | หัตถการ |
| Surgeon Role + Surgeon | ทีมผ่าตัด (เพิ่มได้) |

### 3. Schedule Management

| Action | Condition | Note |
|--------|-----------|------|
| **Modify** | ทุกสถานะ | แก้ไขรายละเอียด |
| **Reschedule** | Booked เท่านั้น | เลื่อนนัด ต้องระบุเหตุผล |
| **Confirm** | Booked → Confirmed | ยืนยัน |
| **Cancel** | ทุกสถานะ | ยกเลิก ต้องระบุเหตุผล |

### 4. OR Worklist (วันผ่าตัด)

เมนูเมื่อ click ชื่อผู้ป่วย:

| Menu | Description |
|------|-------------|
| **Charting** | บันทึกสัญญาณชีพ |
| **Order** | สั่ง orders |
| **View EMR** | ดูแฟ้มประวัติ |
| **Consent Form** | Upload ใบยินยอมผ่าตัด |
| **Confirm Booking** | ยืนยัน (ถ้ายังไม่ Confirm) |
| **OR Record** | บันทึกรายละเอียดผ่าตัด |
| **Check list** | แบบฟอร์ม checklists |
| **Anesthesia record** | บันทึกยาระงับความรู้สึก |
| **eMAR Record** | บันทึกการให้ยา |
| **Patient Tracking** | สถานะผู้ป่วย |

### 5. OR Record (บันทึกผ่าตัด)

| Field | Description |
|-------|-------------|
| Theatre in/out Date & Time | เข้า/ออกห้องผ่าตัด |
| Anesthesia Start/End | เริ่ม/สิ้นสุดวางยาสลบ |
| Procedure Start/End | เริ่ม/สิ้นสุดหัตถการ |
| Reason For Procedure | สาเหตุการผ่าตัด |
| Procedure Free Text | รายละเอียดเพิ่มเติม |
| Bodysites | ส่วนร่างกาย |
| Surgeon team | ทีม + roles |
| Scrub nurse | ชื่อ |
| Implants Details | วัสดุอุปกรณ์ |
| Status | Completed / Inprogress / Planned |
| Surgeon Note | บันทึกรายละเอียด (multi-form) |

รองรับ **multi-procedure** ในครั้งเดียว (กด + เพิ่ม Procedure)

### 6. Recovery Room (ห้องพักฟื้น)
- บันทึก Vital Signs + Orders ก่อนจำหน่ายออกจากห้อง

## Integration Points

| Module | Integration |
|--------|-------------|
| [[EMR Doctor]] | Surgery Request จาก EMR |
| [[ER]] | Emergency Discharge → Send to OR |
| [[IPD]] | ผู้ป่วยในส่งผ่าตัด |
| [[Admission]] | ผู้ป่วย OR อาจ Admit |
| [[Billing]] | OR charges |
