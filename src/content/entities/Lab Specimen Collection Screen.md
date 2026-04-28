---
title: Lab Specimen Collection Screen
type: entity
sources: ["9.MEDHIS Manual_LAB V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, lab, screen]
roles: [NurseOPD]
verified-on-uat: pending
---

# Lab Specimen Collection Screen — หน้าจอบันทึกการเก็บสิ่งส่งตรวจ

## Purpose

หน้าจอสำหรับพยาบาล/เจ้าหน้าที่บันทึกการเก็บสิ่งส่งตรวจ (Specimen Collection) และพิมพ์ Lab Label สำหรับรายการตรวจทางห้องปฏิบัติการที่สั่งแล้ว

## Access Path

**Laboratory → Specimen Collection**

ระบบเปิด Tab **NEW** (Default) แสดงรายการที่สถานะ Ordered

## Tabs

| Tab | สถานะที่แสดง | คำอธิบาย |
|-----|-----------|---------|
| **NEW** | Ordered / Specimen Rejected | รายการรอเก็บ (รวมถึงที่ถูก Reject) |
| **COLLECTED** | Specimen Collected | รายการที่เก็บแล้ว รอ Lab รับ |

## Fields (Filter Bar)

| Field | Type | คำอธิบาย |
|-------|------|---------|
| Department | Dropdown | แผนกที่สั่งตรวจ |
| Ward | Dropdown | Ward ที่สั่งตรวจ |
| Careprovider | Text | แพทย์/ผู้สั่งตรวจ |
| Patient | Text | HN หรือชื่อผู้ป่วย |
| Encounter Type | Dropdown | ประเภทการรักษา (OPD/IPD/ER) |
| Order No. | Text | หมายเลข Order |
| Date From – To | Date Range | ช่วงวันที่สั่งตรวจ |
| Status | Dropdown | กรองตามสถานะ Order |

## Fields (Group-by Toggles)

| Toggle | ผล |
|--------|----|
| **Lab No.** | จัดกลุ่มตาม Order No. หรือ Lab No. |
| **Name** | จัดกลุ่มตามชื่อผู้ป่วย |
| **Order Date** | จัดกลุ่มตามวันที่สั่งตรวจ |
| **Clear** | คืนค่าการแสดงผลเป็นค่าเริ่มต้น |

## Buttons

| Button | เงื่อนไข | ผลลัพธ์ |
|--------|---------|---------|
| **Print Sticker** | เลือกรายการแล้ว | พิมพ์ Lab Label / Barcode Sticker |
| **Collect Specimen** | เลือกรายการแล้ว (Status = Ordered / Rejected) | แสดง Confirmation popup → บันทึกการเก็บ → Status: Specimen Collected |
| Select All (checkbox บน) | — | เลือกรายการทั้งหมดในหน้า |
| Checkbox (แต่ละรายการ) | — | เลือกทีละรายการ |

## Visual Indicators

| สี | ความหมาย |
|----|---------|
| **แดง** | STAT Order (เร่งด่วน) |
| ปกติ | Order ทั่วไป |

## Batch Mode

1. เลือก Select All หรือ checkbox หลายรายการ
2. ระบบแสดงจำนวนรายการที่เลือกไว้ด้านบน
3. กด **Print Sticker** → พิมพ์ Label ทุกรายการพร้อมกัน
4. กด **Collect Specimen** → Confirmation แสดงรายการทั้งหมด (เลื่อนดูได้) → Confirm

## Confirmation Popup (Collect Specimen)

- แสดงรายการที่จะเก็บ (ทีละรายการ หรือทั้งหมดในกรณี Batch)
- กด Confirm → Status ทุกรายการเปลี่ยนเป็น **Specimen Collected**
- รายการย้ายจาก Tab NEW → Tab COLLECTED

## Related Workflows

- [Lab Order to Result](/workflows/lab-order-to-result/) — ขั้นตอนที่ 2: เก็บสิ่งส่งตรวจ
- [LAB](/modules/lab/) — ข้อมูลโมดูลห้องปฏิบัติการ
