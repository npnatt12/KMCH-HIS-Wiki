---
title: Whiteboard
type: entity
sources: ["4.MEDHIS Manual_ER V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [entity, screen, er, emergency]
roles: [Doctor, NurseOPD]
verified-on-uat: pending
---

# Whiteboard (รายชื่อผู้ป่วยฉุกเฉิน)

หน้าจอแสดงรายชื่อผู้ป่วยฉุกเฉินทั้งหมดในระบบ [ER](/modules/er/)

## Access

Emergency → Whiteboard

## แสดงข้อมูล

| Column | Description |
|--------|-------------|
| ชื่อผู้ป่วย | Click เพื่อเปิด Visit Detail |
| **[ESI Level](/concepts/esi-level/)** | แสดงสีตามระดับความรุนแรง |
| **Waiting Time** | ระยะเวลารอคอย (กดสัญลักษณ์เพื่อดู) |
| **Status** | สถานะปัจจุบันของผู้ป่วย |

## Columns ที่แสดง (รายละเอียด)

| Column | Type | Description |
|--------|------|-------------|
| ชื่อผู้ป่วย | Link | Click เปิด Visit Detail |
| [ESI Level](/concepts/esi-level/) | Badge (สี) | แสดงสีระดับความรุนแรง 1–5 หลัง Triage |
| Waiting Time | Icon + Popup | กด icon แสดงระยะเวลารอคอย |
| Status | Text | สถานะปัจจุบัน (เช่น Registered, Triaged, Medical Discharge) |

## ESI Level — รหัสสี

| ESI | ความหมาย | สี |
|-----|----------|---|
| 1 | Resuscitation | แดง |
| 2 | Emergent | ส้ม |
| 3 | Urgent | เหลือง |
| 4 | Less Urgent | เขียว |
| 5 | Non-Urgent | น้ำเงิน |

*สีแสดงเฉพาะผู้ป่วยที่ผ่าน Triage แล้ว — ก่อน Triage ไม่แสดงสี*

## Actions จาก Whiteboard

| Action | วิธี | ปลายทาง |
|--------|------|---------|
| ดู Visit Detail | Click ชื่อผู้ป่วย | หน้า Visit Detail |
| เข้า Triage | Visit Detail → Icon Triage | Triage Screen |
| เข้า Emergency Discharge | Visit Detail → Icon Emergency Discharge | Emergency Discharge Screen |
| ดู Waiting Time | กด icon Waiting Time | Popup แสดงเวลา |

## Related Workflows

- [Emergency Registration](/workflows/emergency-registration/) — ลงทะเบียนผู้ป่วยฉุกเฉิน
- [Mass Casualty Registration](/workflows/mass-casualty-registration/) — ลงทะเบียนอุบัติภัยหมู่

## Related

- [ER](/modules/er/) — module page
- [ESI Level](/concepts/esi-level/) — ระดับความรุนแรง
- [ER Triage Screen](/entities/er-triage-screen/) — หน้าจอ Triage
