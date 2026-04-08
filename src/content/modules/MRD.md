---
title: MRD Module
type: module
sources: ["1.MEDHIS Manual_MRD_V2.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [module, mrd, medical-records, folder]
---

# MRD — ระบบจัดเก็บเวชระเบียน (Medical Records Department)

## Purpose

จัดเก็บและติดตามแฟ้มเวชระเบียน — ครอบคลุมการสร้างแฟ้ม การจ่าย การยืม-คืน การโอนย้ายระหว่างแผนก และการรวม HN ที่ซ้ำกัน

## Access

เมนูหลัก: **MRD**

## Key Screens

### MRD Folders

ระบบสร้างแฟ้มอัตโนมัติ:
- **OPD Folder** — สร้างเมื่อ New Register ([[Registration|ลงทะเบียนผู้ป่วยใหม่]])
- **IPD Folder** — สร้างใหม่ทุกครั้งที่ [[Admission|Admit]]

### MRD Worklist (4 tabs)

| Tab | Description |
|-----|-------------|
| Registration Request | คำขอแฟ้มจากการลงทะเบียน (อัตโนมัติ) |
| Manual Request | คำขอยืมแฟ้มจากเจ้าหน้าที่ |
| Returns | แฟ้มที่รอรับคืน |
| New Folder | แฟ้มที่สร้างใหม่ |

### Folder Issue (การจ่ายแฟ้ม)

| Type | Description |
|------|-------------|
| Appointment Issue | จ่ายแฟ้มตามนัดหมาย — เตรียมล่วงหน้าสำหรับผู้ป่วยนัด |
| Direct Issue | จ่ายแฟ้มสำหรับผู้ป่วย Walk-in |

### Folder Return

รับคืนแฟ้มจากแผนกต่างๆ เข้าคลังเวชระเบียน

### Folder Requests (ยืมแฟ้ม)

แผนกต่างๆ ขอยืมแฟ้มจากเวชระเบียน:
- ระบุ **เหตุผลการยืม** (Reason)
- ระบุ **Careprovider** ผู้ขอ

### Folder Transfer

โอนย้ายแฟ้มระหว่างแผนก **โดยไม่ต้องผ่านเวชระเบียน** — ส่งต่อโดยตรง

### Patient Merge

รวม HN ที่ซ้ำกัน:
- กำหนด **Primary HN** (คงอยู่) + **Secondary HN** (รวมเข้า)
- **Merge All Visit** toggle — เลือกรวมทุก visit หรือเฉพาะบาง visit
- รองรับ **Unmerge** — ยกเลิกการรวม HN ได้

## Folder Statuses

```
Requested → Issued → Returned
                  → Cancelled
                  → Transferred
```

| Status | Description |
|--------|-------------|
| Requested | คำขอถูกสร้าง รอจ่าย |
| Issued | แฟ้มจ่ายออกแล้ว |
| Returned | แฟ้มคืนเข้าคลังแล้ว |
| Cancelled | คำขอถูกยกเลิก |
| Transferred | แฟ้มถูกโอนย้ายระหว่างแผนก |

## Key Business Rules

- แฟ้ม OPD สร้างครั้งเดียวตอน New Register; แฟ้ม IPD สร้างใหม่ทุก Admit
- **Auto File Request** ตั้งค่าใน App Setting — ให้ระบบสร้างคำขอแฟ้มอัตโนมัติเมื่อมีการลงทะเบียน
- Folder Transfer ไม่ผ่าน MRD — แผนกโอนกันเองโดยตรง

## Integration Points

| Module | Integration |
|--------|-------------|
| [[Registration]] | สร้าง OPD Folder อัตโนมัติเมื่อ New Register |
| [[Admission]] | สร้าง IPD Folder อัตโนมัติเมื่อ Admit |
| [[OPD]] | Appointment Issue — จ่ายแฟ้มตามนัดหมาย |
| All Departments | Folder Request — ยืมแฟ้ม, Folder Transfer — โอนย้ายแฟ้ม |
