---
title: MRD Worklist Screen
type: entity
sources: ["1.MEDHIS Manual_MRD_V2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, screen, mrd, worklist, folder]
roles: [AdminSystem]
verified-on-uat: pending
---

# MRD Worklist Screen

หน้าจอสำหรับเรียกดู ค้นหา และจัดการแฟ้มเวชระเบียนทั้งหมดในแต่ละวัน — แสดงสถานะและสถานที่ของแฟ้มในปัจจุบัน

## Purpose

ใช้โดยเจ้าหน้าที่เวชระเบียนเพื่อดูรายการคำขอแฟ้ม จัดการการจ่ายแฟ้ม ติดตามสถานะแฟ้มทั้งหมดในวัน

## Access Path

MRD > MRD Worklist

---

## Search Fields

| Field | Required | คำอธิบาย |
|-------|----------|---------|
| Folder ID | Optional | HN ผู้ป่วยสำหรับค้นหารายบุคคล |
| Search Patient | Optional | ค้นหาผู้ป่วยเฉพาะราย |
| Requesting Department | Optional | ระบุแผนกที่ต้องส่งแฟ้มไปให้ |
| MRD Store | Optional | เลือกประเภท OPD หรือ IPD |
| Status | Optional | Select / Cancelled / Issued / Requested / Transferred |
| From Date | Optional | วันที่เริ่มต้นช่วงที่ค้นหา |
| To Date | Optional | วันที่สิ้นสุดช่วงที่ค้นหา |

### Status Filter Values

| Value | Description |
|-------|-------------|
| Select | แสดงทุกสถานะ |
| Cancelled | แสดงเฉพาะที่ยกเลิกแล้ว |
| Issued | แสดงแฟ้มที่ส่งออกจากเวชระเบียนแล้ว |
| Requested | แสดงแฟ้มที่มีแผนกร้องขอมา |
| Transferred | แสดงแฟ้มที่ถูกโอนย้ายระหว่างแผนก |

---

## 4 Tabs

### Tab 1 — Registration Request

แสดงคำขอแฟ้มที่ระบบสร้างอัตโนมัติ สำหรับผู้ป่วยเก่าที่ลงทะเบียน Walk-in (ไม่มีการนัดล่วงหน้า)

**Auto-generated when:** ผู้ป่วยเก่าลงทะเบียน Walk-in → ระบบสร้าง Request อัตโนมัติ

**การ Issue แฟ้มจาก Registration Request:**
1. คลิก MRD Worklist → ระบบแสดงรายการ Request
2. คลิกเลือกรายการที่สถานะ **Requested**
3. กดปุ่ม **Issue** → ระบบเปลี่ยน Status เป็น **"Issued"**

### Tab 2 — Manual Request

แสดงคำขอยืมแฟ้มที่เจ้าหน้าที่หรือแผนกต่างๆ บันทึกผ่านเมนู Folder Requests

**การ Issue แฟ้มจาก Manual Request:**
1. เลือก MRD Storage (สถานที่เก็บแฟ้ม)
2. กด Search ค้นหาข้อมูล
3. เลือกแฟ้มที่ต้องการส่งออก
4. กดปุ่ม **Issue** → Status เปลี่ยนเป็น **"Issued"**

### Tab 3 — Returns

แสดงรายการแฟ้มที่รับคืนกลับมาจากแผนกต่างๆ — สถานะ **"Returned"**

- สามารถค้นหาตามช่วงวันที่ได้
- ใช้สำหรับตรวจสอบและยืนยันการรับแฟ้มคืน

### Tab 4 — New Folder

แสดงรายการแฟ้มผู้ป่วยใหม่ที่ระบบสร้างอัตโนมัติ (New Register / New HN)

- ใช้ Search เพื่อดูข้อมูลแฟ้มใหม่
- ส่งแฟ้มไปคลินิกโดยไม่ต้องบันทึก Issue File (ระบบเปลี่ยนสถานะให้อัตโนมัติ)

---

## Buttons

| Button | Action | Conditions | Result |
|--------|--------|------------|--------|
| ค้นหา (Search) | ค้นหาข้อมูลตามตัวเลือก | กรอก filter แล้ว | แสดงรายการแฟ้ม |
| ยกเลิกการค้นหา (Clear) | ล้างเงื่อนไขการค้นหา | | รีเซ็ต filter |
| Issue | จ่ายแฟ้มออกจากเวชระเบียน | เลือกรายการ Requested | Status → Issued |

---

## Related Workflows

- [MRD Folder Issue Return Workflow](/workflows/mrd-folder-issue-return-workflow/) — กระบวนการจ่ายและรับคืนแฟ้ม

## Related Entities

- MRD — module หลัก

## Related Concepts

- [MRD](/modules/mrd/) — Folder statuses, Auto file request settings
