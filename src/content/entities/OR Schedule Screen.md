---
title: OR Schedule Screen
type: entity
sources: ["11.MEDHIS Manual_OR V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, or, schedule, booking, surgery]
roles: [NurseOR]
verified-on-uat: pending
---

# OR Schedule Screen — หน้าจอตารางนัดห้องผ่าตัด

หน้าจอแสดงตารางนัดห้องผ่าตัดในรูปแบบ Calendar/Grid — ใช้สำหรับจอง แก้ไข เลื่อน และยกเลิกนัดผ่าตัด

**เข้าถึง:**
- Operating Room → **OR Schedule** (จองตรง)
- Operating Room → Surgery Request List → คลิกผู้ป่วย → **Book** (จากคำขอ)

---

## หน้าจอหลัก (Calendar/Grid View)

แสดงช่องเวลาแต่ละห้องผ่าตัด — Click ช่องว่างที่ต้องการเพื่อเริ่มจอง

---

## Booking Form Fields

| Field | Description | Options / หมายเหตุ |
|-------|-------------|-------------------|
| **Search Patient** | พิมพ์ชื่อ หรือเลขที่โรงพยาบาล | |
| **Search all Patient** | checkbox | รวมผู้ป่วยที่ไม่มี Visit ณ วันนั้น |
| **Operating Room** | ห้องผ่าตัด | |
| **Appointment Date** | วันที่ต้องการผ่าตัด | |
| **From** | เวลาเริ่มจองห้องผ่าตัด | |
| **To** | เวลาสิ้นสุดการจอง | |
| **Priority** | ความเร่งด่วน | Normal / Urgent |
| **Status** | สถานะการจอง | Booked / Confirmed |
| **Planning Type** | ชนิดของการจองผ่าตัด | Elective / Emergency |
| **Criticality** | ประเภทการผ่า | Major / Minor |
| **Anesthesia** | ประเภทการระงับความรู้สึก | GA / LA / ฯลฯ |
| **Anesthesist** | ชื่อวิสัญญีแพทย์ | |
| **Procedure Details** | ชื่อหัตถการผ่าตัด | |
| **Surgeon Role** | บทบาทในทีม | Surgeon / Assist Surgeon |
| **Surgeon** | ชื่อสมาชิกทีม | กด **Add** เพื่อเพิ่มสมาชิก |

กด **SAVE** เมื่อระบุรายละเอียดครบถ้วน

---

## Tab Detail — การจัดการ Slot นัด

เมื่อ click ที่ Slot ในตาราง ระบบแสดง Tab **Detail** พร้อมเมนูย่อย:

| Action | เงื่อนไข | รายละเอียด |
|--------|---------|-----------|
| **Modify** | ทุกสถานะ | แก้ไขรายละเอียดการจอง → Save |
| **Reschedule** | Booked เท่านั้น | เลื่อนนัด → ต้องระบุเหตุผล |
| **Confirm** | Booked เท่านั้น | เปลี่ยน Booked → Confirmed |
| **Cancel** | ทุกสถานะ | ยกเลิก → ต้องระบุเหตุผล |

---

## Tab View Audit Log

ตรวจสอบประวัติการจองห้องผ่าตัดทั้งหมดของรายการนั้น

---

## Status ของ Slot

| Status | ความหมาย |
|--------|----------|
| **Booked** | จองแล้ว รอยืนยัน |
| **Confirmed** | ยืนยันแล้ว |
| **Cancelled** | ยกเลิกแล้ว |

---

## Related

- [OR Surgery Request to Record Workflow](/workflows/or-surgery-request-to-record-workflow/) — กระบวนการตั้งแต่ Request ถึง Record
- [OR Record Screen](/entities/or-record-screen/) — บันทึกรายละเอียดผ่าตัด
- [OR](/modules/or/) — ภาพรวม module ห้องผ่าตัด
