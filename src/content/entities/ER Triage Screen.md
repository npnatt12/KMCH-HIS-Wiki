---
title: ER Triage Screen
type: entity
sources: ["4.MEDHIS Manual_ER V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, screen, er, triage]
roles: [Doctor, NurseOPD]
verified-on-uat: pending
---

# ER Triage Screen (หน้าจอคัดกรองผู้ป่วยฉุกเฉิน)

หน้าจอสำหรับบันทึกการคัดกรองผู้ป่วยฉุกเฉินในระบบ [ER](/modules/er/) ตาม Emergency Severity Index (ESI)

## Access Path

Emergency → [Whiteboard](/entities/whiteboard/) → Click ชื่อผู้ป่วย → Visit Detail → Icon **Triage**

## Purpose

- บันทึกอาการสำคัญและการเจ็บป่วยปัจจุบัน
- ประเมิน [ESI Level](/concepts/esi-level/) (1–5)
- บันทึก Glasgow Coma Scale
- เปลี่ยนสถานะผู้ป่วยเป็น **Triaged**
- ดูประวัติการคัดกรองเก่า

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Triaged By | Text/Search | Yes | ชื่อผู้ที่ทำการประเมินการคัดกรอง |
| Chief Complaints | Text | Yes | อาการสำคัญเบื้องต้น |
| Present Illness | Text | No | รายละเอียดการเจ็บป่วยปัจจุบัน |
| ESI Level | Dropdown/Auto | Yes | ระดับ 1–5 — แสดงอัตโนมัติเมื่อประเมิน |
| Glasgow Coma Scale | Composite | No | Eye (E) / Verbal (V) / Motor (M) |

## [ESI Level](/concepts/esi-level/) — ระบบประเมินและแสดงสี

| ESI Level | ความหมาย | สี (Whiteboard) |
|-----------|----------|----------------|
| 1 | Resuscitation — วิกฤต ต้องการดูแลทันที | แดง |
| 2 | Emergent — ฉุกเฉิน | ส้ม |
| 3 | Urgent — เร่งด่วน | เหลือง |
| 4 | Less Urgent — ไม่เร่งด่วน | เขียว |
| 5 | Non-Urgent — ไม่ฉุกเฉิน | น้ำเงิน |

*ระบบแสดง ESI Level อัตโนมัติเมื่อทำการเลือกประเมิน*

## Glasgow Coma Scale (GCS)

| Component | คะแนน | ความหมาย |
|-----------|-------|----------|
| Eye (E) | 1–4 | การลืมตาตอบสนอง |
| Verbal (V) | 1–5 | การพูดตอบสนอง |
| Motor (M) | 1–6 | การเคลื่อนไหวตอบสนอง |

*คะแนนรวม E+V+M = GCS Score (3–15)*

## Buttons

| Button | Action | ผลลัพธ์ |
|--------|--------|---------|
| **Save** | บันทึกการคัดกรอง | Status ผู้ป่วยเปลี่ยนเป็น **Triaged**; สีแสดงที่ Whiteboard |
| **PAST TRIAGE** (Tab) | ดูประวัติ Triage เก่า | แสดงรายการ Triage ทั้งหมด → Click เลือกดูรายละเอียด |

## Status Transition

| จาก | ไป | เงื่อนไข |
|-----|-----|---------|
| Registered / ก่อน Triage | **Triaged** | กด Save หลังบันทึก ESI Level |

*สามารถตรวจสอบสถานะได้ใน Visit Details → Patient Tracking*

## Past Triage Tab

- แสดงประวัติการคัดกรองทุกครั้งของผู้ป่วยคนเดิม
- เลือก Triage record ทางซ้าย → ดูรายละเอียดทางขวา
- Read-only (ดูได้ แก้ไขไม่ได้)

## Validation / Error Conditions

- **ESI Level**: ต้องประเมินและเลือก ESI ก่อน Save
- **Triaged By**: Required — ต้องระบุชื่อผู้ประเมิน
- **Past Triage**: ไม่สามารถแก้ไขหรือลบข้อมูลเก่า

## Related Workflows

- [Emergency Registration](/workflows/emergency-registration/) — ลงทะเบียนก่อนมาที่ Triage

## Related

- [ER](/modules/er/) — module page
- [Whiteboard](/entities/whiteboard/) — หน้าจอรายชื่อผู้ป่วย ER
- [ESI Level](/concepts/esi-level/) — ระดับความรุนแรงฉุกเฉิน
