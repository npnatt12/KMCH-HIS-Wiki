---
title: ER Discharge Screen
type: entity
sources: ["4.MEDHIS Manual_ER V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, screen, er, discharge]
roles: [Doctor, NurseOPD]
verified-on-uat: pending
---

# ER Discharge Screen (หน้าจอจำหน่ายผู้ป่วยฉุกเฉิน)

หน้าจอสำหรับจำหน่ายผู้ป่วยฉุกเฉินในระบบ [[ER]] โดยรองรับ 5 ผลลัพธ์ของการจำหน่าย

## Access Path

Emergency → [[Whiteboard]] → Click ชื่อผู้ป่วย → Visit Detail → Icon **Emergency Discharge**

## Purpose

- บันทึกการจำหน่ายผู้ป่วยฉุกเฉิน
- ระบุประเภทและสถานะการจำหน่าย
- เปลี่ยน Status ผู้ป่วยเป็น Medical Discharge → ส่งต่อการเงิน

## Fields (Core)

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| Date | Date | Yes | วันปัจจุบัน | วันที่จำหน่าย |
| Time | Time | Yes | เวลาปัจจุบัน | เวลาที่จำหน่าย |
| Recommended By | Text/Search | Yes | — | แพทย์ที่สั่งจำหน่าย |
| Discharge Type | Dropdown | Yes | — | ประเภทการจำหน่าย |
| Discharge Status | Dropdown | Yes | — | สถานะการจำหน่าย (ดูตาราง 5 ประเภทด้านล่าง) |
| Comments | Text | No | — | หมายเหตุเพิ่มเติม |

## Discharge Status — 5 ประเภท

| Status | ความหมาย | Fields เพิ่มเติมที่แสดง | ส่งต่อ |
|--------|----------|----------------------|--------|
| **Discharge** | จำหน่ายปกติกลับบ้าน | ไม่มีเพิ่มเติม | [[Billing]] |
| **Death** | ผู้ป่วยเสียชีวิต | รายละเอียดการเสียชีวิต | [[Billing]] (บันทึกเสียชีวิต) |
| **Referred to Admission** | รับเป็นผู้ป่วยใน | รายละเอียดการรับผู้ป่วยใน | [[Admission]] |
| **Referred to Other Hospital** | ส่งตัวโรงพยาบาลอื่น | รายละเอียดการส่งตัว + ปลายทาง | (เตรียมเอกสาร) |
| **Send to OR** | ส่งเข้าห้องผ่าตัด | รายละเอียดการผ่าตัด | [[OR]] |

## Status Transition

| จาก (Status ก่อน) | ไป | เงื่อนไข |
|-----------------|-----|---------|
| ทุก Status ฉุกเฉิน | **Medical Discharge** | กด Save |

**หลัง Save:** สถานะผู้ป่วยเปลี่ยนเป็น **Medical Discharge** และ **Discharge Status** = Discharged → เข้าสู่กระบวนการทางการเงิน

## Buttons

| Button | Action |
|--------|--------|
| **Save** | บันทึกการจำหน่าย → Status = Medical Discharge |

## Validation / Error Conditions

- **Discharge Type และ Discharge Status**: ต้องเลือกทั้งสองก่อน Save
- **Recommended By**: Required — ต้องระบุแพทย์ผู้สั่ง
- **Referred to Admission**: ต้องมีข้อมูลรายละเอียดการรับผู้ป่วยใน — แผนก Admission ดำเนินการต่อ

## Related Workflows

- [[Emergency Registration]] — ขั้นตอนก่อน Discharge

## Related

- [[ER]] — module page
- [[Whiteboard]] — หน้าจอรายชื่อผู้ป่วย ER
- [[ER Triage Screen]] — หน้าจอ Triage
- [[Admission]] — กรณี Referred to Admission
- [[OR]] — กรณี Send to OR
- [[Billing]] — กระบวนการหลัง Medical Discharge
