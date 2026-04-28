---
title: MRD Folder Issue Return Workflow
type: workflow
sources: ["1.MEDHIS Manual_MRD_V2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [workflow, mrd, folder, issue, return]
roles: [AdminSystem]
verified-on-uat: pending
---

# MRD Folder Issue Return Workflow

## Overview

กระบวนการจัดการแฟ้มเวชระเบียนตลอด lifecycle ตั้งแต่การสร้างแฟ้ม การจ่ายออกสู่แผนก การยืม การโอนย้าย และการรับคืนแฟ้มกลับเวชระเบียน

---

## Folder Lifecycle Diagram

```
New Register / New Admit
        ↓
[Auto Create Folder]
        ↓
   [Requested]  ←── Folder Request (Manual) / Auto Request (Walk-in)
        ↓
    [Issued]  ←── Folder Issue (Appointment Issue / Direct Issue / MRD Worklist)
        ↓
 [Transferred]  ←── Folder Transfer (แผนกโอนกันเอง)
        ↓
   [Returned]  ←── Folder Return
        ↓
  (พร้อม Issue ครั้งต่อไป)

   [Cancelled]  ←── Cancel Request
```

---

## Step 1 — Auto Create Folder

| Trigger | Folder Type | Method |
|---------|-------------|--------|
| New Register / New HN | OPD Folder | อัตโนมัติ (ถ้าเปิด Auto File Request) |
| Admit / Visit Number | IPD Folder | อัตโนมัติ (ถ้าเปิด Auto File Request) |

> ตั้งค่า: Framework > App Setting > Registration > **MRD Auto file request**

เมื่อสร้างแฟ้มผู้ป่วยใหม่ ระบบเปลี่ยนสถานะให้อัตโนมัติ เจ้าหน้าที่ส่งแฟ้มไปคลินิกโดยไม่ต้องบันทึก Issue เพิ่มเติม

---

## Step 2 — Folder Request (สร้างคำขอยืมแฟ้ม)

**Navigation:** [[MRD]] > Folder Requests

ใช้เมื่อแผนกต่างๆ ต้องการยืมแฟ้มจากเวชระเบียน

**Steps:**
1. ระบุ HN แฟ้มที่ต้องการ
2. เลือก Visit ของแฟ้ม
3. เลือกห้องเวชระเบียนที่เก็บเอกสาร
4. เลือกเหตุผลการยืม (Reason)
5. ระบุ Comment เพิ่มเติม (ถ้ามี)
6. ระบุ Careprovider (ถ้าแพทย์เป็นผู้ขอ)
7. กดบันทึก → สถานะ **Requested**

> ยกเลิก: กด Icon Cancel → สถานะ **Cancelled**

---

## Step 3 — Folder Issue (จ่ายแฟ้มออก)

มี 3 วิธี:

### วิธีที่ 1 — จาก MRD Worklist (Walk-in / Manual Request)

**Navigation:** [[MRD]] > MRD Worklist → Tab **Registration Request** หรือ **Manual Request**

1. เปิด [[MRD Worklist Screen]]
2. เลือก Tab ที่ต้องการ (Registration Request สำหรับ Walk-in / Manual Request สำหรับคำขอ manual)
3. เลือกรายการสถานะ **Requested**
4. กด **Issue** → สถานะเปลี่ยนเป็น **Issued**

### วิธีที่ 2 — Appointment Issue (ผู้ป่วยนัด)

**Navigation:** [[MRD]] > Folder Issue > Appointment Issue

1. ระบุ Department ที่ต้องการดูนัดหมาย
2. ระบุ Date วันนัด
3. กดค้นหา → ระบบแสดงรายการแฟ้มผู้ป่วยนัด
4. ระบบเลือก Checkbox แฟ้มที่อยู่ในเวชระเบียนให้อัตโนมัติ
   - **หมายเหตุ:** แฟ้มที่ยังไม่คืน ไม่สามารถกด Issue ได้ → ต้องทำ Folder Return ก่อน
5. เลือก Checkbox แฟ้มที่ต้องการส่ง
6. กด **Issue** → แฟ้มส่งออก → สถานะ **Issued**

### วิธีที่ 3 — Direct Issue (Walk-in รายแฟ้ม)

**Navigation:** [[MRD]] > Folder Issue > Direct Issue

1. Search Patient — ค้นหาผู้ป่วย
2. Select Folder — เลือกแฟ้ม
3. ระบุ MRD Storage — สถานที่เก็บแฟ้มปัจจุบัน
4. ระบุ Issued to Department — แผนกปลายทาง
5. กด **Issue** → สถานะ **Issued**

---

## Step 4 — Folder Transfer (โอนย้ายแฟ้มระหว่างแผนก)

**Navigation:** [[MRD]] > Folder Transfer

ใช้เมื่อแผนกหนึ่งส่งแฟ้มต่อให้อีกแผนก **โดยไม่ผ่านเวชระเบียน**

> เงื่อนไข: แฟ้มต้องอยู่นอกเวชระเบียน (สถานะ Issued หรือ Transferred) เท่านั้น

1. ระบุ HN แฟ้มที่ต้องการโอน
2. เลือก Visit
3. เลือกแผนกปลายทาง
4. ระบุ Careprovider (ถ้ามี)
5. ระบุ Comment (ถ้ามี)
6. กดบันทึก → สถานะ **Transferred**

---

## Step 5 — Folder Return (รับแฟ้มคืน)

**Navigation:** [[MRD]] > Folder Return

เมื่อแผนกต่างๆ ส่งแฟ้มกลับหลังรวบรวมเอกสารเสร็จแล้ว

1. ระบุ HN แฟ้มที่ต้องการรับคืน
2. เลือก Visit ของแฟ้ม
3. เลือกห้องเวชระเบียนที่ต้องการเก็บ
4. กดบันทึก → สถานะ **Returned**

---

## Folder Status Summary

| Status | เกิดจาก | ความหมาย |
|--------|---------|---------|
| Requested | Folder Request / Auto Request | คำขอถูกสร้าง รอจ่าย |
| Issued | Folder Issue (3 วิธี) | แฟ้มจ่ายออกแล้ว |
| Transferred | Folder Transfer | แฟ้มถูกโอนระหว่างแผนก |
| Returned | Folder Return | แฟ้มคืนเข้าคลังแล้ว — พร้อม Issue ใหม่ |
| Cancelled | Cancel Request | คำขอถูกยกเลิก |

---

## Edge Cases

| สถานการณ์ | การแก้ไข |
|-----------|---------|
| แฟ้มยังอยู่แผนกอื่น ต้องการ Issue ให้ผู้ป่วยนัด | ติดตามแฟ้มกลับ → ทำ Folder Return ก่อน → จึง Issue ได้ |
| ต้องการโอนแฟ้มแต่แฟ้มอยู่ในเวชระเบียน | ต้อง Issue ออกก่อน → จึง Transfer ได้ |
| ยืมแฟ้มไปแล้วต้องการยกเลิก | ใช้ Cancel icon บน Folder Requests |

---

## Modules Involved

- [[MRD]] — ทุกขั้นตอน
- [[Registration]] — ทริกเกอร์การสร้างแฟ้ม OPD อัตโนมัติ
- [[Admission]] — ทริกเกอร์การสร้างแฟ้ม IPD อัตโนมัติ
- [[OPD]] — Appointment Issue สำหรับผู้ป่วยนัด
- All Departments — Folder Request, Folder Transfer

## Related Entities

- [[MRD Worklist Screen]] — หน้าจอหลักสำหรับจัดการแฟ้ม
