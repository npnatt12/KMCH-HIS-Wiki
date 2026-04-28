---
title: OR Record Screen
type: entity
sources: ["11.MEDHIS Manual_OR V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, or, record, surgery, intraop]
roles: [NurseOR]
verified-on-uat: pending
---

# OR Record Screen — หน้าจอบันทึกรายละเอียดผ่าตัด

หน้าจอสำหรับบันทึกรายละเอียดการผ่าตัดจริง (Intra-operative record) — เข้าถึงจาก OR Worklist

**เข้าถึง:** Operating Room → OR Worklist → Click ชื่อผู้ป่วย → **OR Record**

---

## ข้อมูลที่ดึงมาให้อัตโนมัติ

ระบบดึงข้อมูลจากการจองใน [[entities/OR Schedule Screen]] มาแสดงล่วงหน้า — สามารถแก้ไขได้

---

## Fields ในหน้าจอ OR Record

### Timing (วันที่และเวลา)

| Field | Description |
|-------|-------------|
| **Theatre in Date & Time** | วันที่และเวลาที่เข้าห้องผ่าตัด |
| **Theatre out Date & Time** | วันที่และเวลาที่ออกจากห้องผ่าตัด |
| **Anesthesia Start Date & Time** | เริ่มการวางยาสลบ |
| **Anesthesia End Date & Time** | สิ้นสุดการวางยาสลบ |
| **Procedure Start Date & Time** | เริ่มทำหัตถการ |
| **Procedure End Date & Time** | สิ้นสุดการทำหัตถการ |

### Procedure Details (รายละเอียดหัตถการ)

| Field | Description |
|-------|-------------|
| **Reason For Procedure** | สาเหตุของการผ่าตัดครั้งนี้ |
| **Procedure Free Text** | บรรยายรายละเอียดหัตถการเพิ่มเติม |
| **Bodysites** | ส่วนของร่างกายที่ทำผ่าตัด |

### Team (ทีมผ่าตัด)

| Field | Description |
|-------|-------------|
| **Surgeon Role** | Surgeon / Assist Surgeon |
| **Surgeon** | ชื่อสมาชิกทีม (กด + เพิ่ม / กด − ลบ) |
| **Anesthesist** | ชื่อผู้ให้ยาระงับความรู้สึก |
| **Scrub nurse** | ชื่อ Scrub Nurse |

### Materials & Classification

| Field | Description |
|-------|-------------|
| **Implants Details** | วัสดุอุปกรณ์กลุ่ม Implants ที่ใช้กับผู้ป่วย |
| **Status** | Completed / Inprogress / Planned |
| **Planning Type** | Elective / Emergency |
| **Criticality** | Major / Minor |

### Notes

| Field | Description |
|-------|-------------|
| **Surgeon Note** | บันทึกรายละเอียดการผ่าตัด (สร้างได้มากกว่า 1 ฟอร์ม) |

---

## Multi-Procedure Support

กรณีมีมากกว่า 1 Procedure ในการผ่าตัดครั้งเดียวกัน:
- กดปุ่ม **+** → ระบบแสดงชุดรายละเอียดใหม่ให้บันทึก Procedure ที่สอง/สาม

---

## OR Worklist — เมนูย่อยทั้งหมด

เมื่อ click ที่แถบชื่อผู้ป่วยใน OR Worklist:

| Menu | Description |
|------|-------------|
| **Charting** | บันทึกสัญญาณชีพในระบบ |
| **Order** | ลงบันทึกคำสั่งการรักษา |
| **View EMR** | เข้าสู่แฟ้มประวัติผู้ป่วย |
| **Consent Form** | Upload ใบยินยอมผ่าตัด |
| **Confirm Booking** | ยืนยันผ่าตัด (ปรากฏเฉพาะที่ยังไม่ Confirm) |
| **OR Record** | **บันทึกรายละเอียดในการผ่าตัด** (หน้าจอนี้) |
| **Check list** | เลือกแบบฟอร์ม checklist ที่เกี่ยวข้องบันทึก |
| **Anesthesia record** | บันทึกการได้รับยาระงับความรู้สึก |
| **eMAR Record** | บันทึกการให้ยา |
| **Patient Tracking** | บันทึกสถานะผู้ป่วย |

---

## Related

- [[entities/OR Schedule Screen]] — หน้าจอตารางนัดผ่าตัด
- [[workflows/OR Surgery Request to Record Workflow]] — กระบวนการครบ
- [[modules/OR]] — ภาพรวม module
