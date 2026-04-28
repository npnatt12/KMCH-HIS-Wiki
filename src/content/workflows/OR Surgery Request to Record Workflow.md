---
title: OR Surgery Request to Record Workflow
type: workflow
sources: ["11.MEDHIS Manual_OR V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [workflow, or, surgery-request, schedule, or-record, recovery-room]
roles: [NurseOR]
verified-on-uat: pending
---

# OR Surgery Request to Record Workflow — กระบวนการห้องผ่าตัดตั้งแต่ Request ถึง Record

ครอบคลุมตั้งแต่การส่งคำขอผ่าตัด จองห้อง บันทึก จนถึงห้องพักฟื้น

---

## ภาพรวม 2 เส้นทาง

```
แนวทางที่ 1: Surgery Request (ผ่านแผนกอื่น)
    EMR → Referral → Tab Surgery → Save → Surgery Request List → Book

แนวทางที่ 2: OR Schedule (จองตรง)
    Operating Room → OR Schedule → Click ช่องเวลา → กรอกรายละเอียด → Save
```

---

## 1. Surgery Request (จากแผนกอื่น)

เข้าถึงจาก [[modules/EMR Doctor]]:

```
EMR → Referral → Tab Surgery
```

**Fields ที่ต้องระบุ:**

| Field | Description |
|-------|-------------|
| Department | แผนกที่เกี่ยวข้องกับการผ่าตัด |
| Surgeon | ชื่อแพทย์ผู้ผ่าตัด |
| Procedure Details | ชื่อหัตถการที่จะทำผ่าตัด |
| Surgery Date & Time | วันที่ต้องการจองห้องผ่าตัด |
| Anesthesia | ชนิดการวางยาสลบ + ชื่อแพทย์ดมยา |

```
กด Save → ระบบส่งคำขอไปที่:
Operating Room → Surgery Request List
```

---

## 2. Surgery Request List — จัดการคำขอ

Operating Room → **Surgery Request List**

เมื่อเลือกชื่อผู้ป่วย ระบบแสดงเมนู:

| เมนู | Action |
|-----|--------|
| **Book** | จองลงตารางนัด → เปิดหน้าจอ OR Schedule |
| **Cancel** | ยกเลิกคำขอ |
| **Modify Demographic** | แก้ไขประวัติผู้ป่วย |

---

## 3. OR Schedule — จองห้องผ่าตัด

หน้าจอ [[entities/OR Schedule Screen]] — ข้อมูลจาก Surgery Request ถูกดึงมาล่วงหน้า

```
Click ช่องเวลาที่ต้องการ
    ↓
กรอก/ยืนยัน: ห้องผ่าตัด, วันที่, เวลา From-To, Priority, Planning Type, Criticality
             Anesthesia + Anesthesist, Procedure Details, ทีม Surgeon
    ↓
Save → Status: Booked
```

---

## 4. จัดการ Schedule (หลัง Book)

Click ที่ Slot ในตาราง → Tab Detail:

| Action | เงื่อนไข | ขั้นตอน |
|--------|---------|--------|
| **Modify** | ทุกสถานะ | แก้ไขรายละเอียด → Save |
| **Reschedule** | Booked เท่านั้น | เลื่อนนัด → ระบุเหตุผล |
| **Confirm** | Booked → Confirmed | ยืนยัน |
| **Cancel** | ทุกสถานะ | ยกเลิก → ระบุเหตุผล |

---

## 5. OR Worklist — วันผ่าตัด

Operating Room → **OR Worklist**

```
ระบบแสดงรายชื่อผู้ป่วยที่จะผ่าตัดวันนี้ + รายละเอียดตามที่จอง
    ↓
Click ชื่อผู้ป่วย → ระบบแสดงเมนู
```

เมนูที่มี:

| เมนู | Description |
|-----|-------------|
| **Charting** | บันทึกสัญญาณชีพ |
| **Order** | ลงคำสั่งการรักษา |
| **View EMR** | ดูแฟ้มประวัติผู้ป่วย |
| **Consent Form** | Upload ใบยินยอมผ่าตัด |
| **Confirm Booking** | ยืนยันผ่าตัด (ถ้ายังไม่ Confirm) |
| **OR Record** | บันทึกรายละเอียดผ่าตัด |
| **Check list** | แบบฟอร์ม checklist |
| **Anesthesia record** | บันทึกยาระงับความรู้สึก |
| **eMAR Record** | บันทึกการให้ยา |
| **Patient Tracking** | บันทึกสถานะผู้ป่วย |

---

## 6. OR Record — บันทึกการผ่าตัด

[[entities/OR Record Screen]] — บันทึกรายละเอียดระหว่างและหลังผ่าตัด

```
Click OR Record → ระบบดึงข้อมูลจาก Schedule มาแสดง (แก้ไขได้)
    ↓
ระบุ Timing: Theatre in/out, Anesthesia Start/End, Procedure Start/End
    ↓
ระบุ Procedure Details: Reason, Free Text, Bodysites
    ↓
ระบุ Team: Surgeon Role+Name (เพิ่มได้), Anesthesist, Scrub Nurse
    ↓
ระบุ Implants Details (ถ้ามี)
    ↓
ระบุ Status: Completed / Inprogress / Planned
    ↓
บันทึก Surgeon Note (สร้างได้หลายฟอร์ม)
    ↓
กรณี Multi-Procedure → กด + เพิ่มชุดรายละเอียดใหม่
    ↓
Save
```

---

## 7. Recovery Room — ห้องพักฟื้น

หลังผ่าตัดเสร็จ ก่อนจำหน่ายออกจากห้องพักฟื้น:

```
บันทึก Vital Signs (Charting)
    ↓
บันทึก Order (คำสั่งการรักษาในห้องพักฟื้น)
    ↓
จำหน่ายผู้ป่วยออกจากห้องพักฟื้น
```

---

## Status Flow

```
Surgery Request (Pending)
    ↓ Book
Booked
    ↓ Confirm
Confirmed
    ↓ วันผ่าตัด (OR Worklist)
Inprogress (OR Record)
    ↓
Completed
```

---

## Integration

| Module | เชื่อมต่ออย่างไร |
|--------|----------------|
| [[modules/EMR Doctor]] | Surgery Request จาก EMR Referral Tab |
| [[modules/IPD]] | ผู้ป่วยในส่งผ่าตัด |
| [[modules/ER]] | Emergency → OR |
| [[modules/Admission]] | ผู้ป่วย OR อาจต้อง Admit |
| [[modules/Billing]] | OR charges |

---

## Related

- [[entities/OR Schedule Screen]] — ตารางนัดห้องผ่าตัด (fields, actions)
- [[entities/OR Record Screen]] — OR Worklist menus + Record fields
- [[modules/OR]] — ภาพรวม module
