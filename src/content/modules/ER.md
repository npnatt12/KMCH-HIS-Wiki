---
title: ER — Emergency Room Module
type: module
sources: ["4.MEDHIS Manual_ER V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [module, er, emergency]
---

# ER — ระบบงานผู้ป่วยฉุกเฉิน (Emergency)

## Purpose

ระบบจัดการผู้ป่วยฉุกเฉินตั้งแต่ลงทะเบียน คัดกรอง (Triage) จนจำหน่าย ครอบคลุมทั้งผู้ป่วยฉุกเฉินรายเดียวและอุบัติภัยหมู่

## Access

เมนูหลัก: **Emergency**

## Key Screens

### [[Whiteboard]]
รายชื่อผู้ป่วยฉุกเฉินทั้งหมด แสดง:
- **[[ESI Level]]** — สีแสดงระดับความรุนแรง
- **Waiting Time** — ระยะเวลารอคอย
- **Status** — สถานะผู้ป่วย
- Click ชื่อ → Visit Detail → เข้าเมนูต่างๆ

### Triage Screen
- **Triaged By** — ชื่อผู้ประเมิน
- **Chief Complaints** — อาการสำคัญเบื้องต้น
- **Present Illness** — การเจ็บป่วยปัจจุบัน
- **[[ESI Level]]** — ระบบแสดงอัตโนมัติเมื่อประเมิน
- **Glasgow Coma Scale** — ระดับความรู้สึกตัว
- Tab **PAST TRIAGE** — ประวัติการคัดกรองเก่า

### Emergency Discharge Screen
- **Date/Time** — default ปัจจุบัน
- **Recommended By** — แพทย์ที่สั่งจำหน่าย
- **Discharge Type** — ประเภทการจำหน่าย
- **Discharge Status** — สถานะจำหน่าย (ดูตารางด้านล่าง)
- **Comments** — หมายเหตุ

## Workflows

### 1. [[Emergency Registration]]
Emergency → Emergency Registration → New/Existing → Basic Details + Emergency Detail + Visit Detail → Save

### 2. [[Mass Casualty Registration]]
Emergency → Mass Casualty → Incident Details + Adult/Child counts → Save

### 3. Triage (คัดกรอง)
Visit → Triage icon → บันทึก Chief Complaints, Present Illness, ESI Level, Glasgow Coma Scale → Save → Status เปลี่ยนเป็น **Triaged**

### 4. Emergency Discharge (จำหน่าย)

| Discharge Status | Action |
|------------------|--------|
| **Discharge** | จำหน่ายปกติ → Medical Discharge → ส่ง[[Billing|การเงิน]] |
| **Death** | บันทึกรายละเอียดการเสียชีวิต |
| **Referred to Admission** | รับเป็นผู้ป่วยใน → ส่ง[[Admission]] |
| **Referred to Other Hospital** | ส่งต่อโรงพยาบาลอื่น |
| **Send to OR** | ส่งผ่าตัด → ส่ง[[OR]] |

Save → Status เปลี่ยนเป็น **Medical Discharge** → เข้าสู่กระบวนการทางการเงิน

## Screen Fields — Emergency Registration

### Basic Details
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| First Name | Text | **Yes** | ข้อมูลขั้นต่ำที่ต้องการ |
| Last Name | Text | No | — |
| อื่นๆ | Text | No | ข้อมูลพื้นฐานผู้ป่วย |

### Emergency Detail
| Field | Type | Description |
|-------|------|-------------|
| รายละเอียดการนำส่ง | Text | วิธีนำส่งและสถานการณ์ฉุกเฉิน |

### Visit Detail
| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| Department | Dropdown | **Yes** | Emergency | แผนกรับผู้ป่วย |

## Screen Fields — Mass Casualty Registration

### Incident Details
| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| Incident Date | Date | Yes | วันปัจจุบัน | วันที่เกิดเหตุ |
| Department | Dropdown | Yes | Emergency | แผนกรับผู้ป่วย |
| Brought by Next of Kin | Toggle | No | Disabled | เปิดเมื่อญาตินำส่ง — บังคับ Escort Name |
| Escort Name | Text | Conditional | — | ชื่อผู้นำส่ง (Required เมื่อ Brought by Next of Kin = ON) |
| Escort Mobile Number | Text | No | — | เบอร์โทรศัพท์ผู้นำส่ง |
| Escort Comment | Text | No | — | หมายเหตุจากผู้นำส่ง |

### จำนวนผู้ป่วย
| กลุ่ม | ช่อง | Description |
|-------|------|-------------|
| Adult | Male / Female / Unknown | จำนวนผู้ใหญ่แยกเพศ |
| Child | Male / Female / Unknown | จำนวนเด็กแยกเพศ |

**หลัง Save:**
- ระบบสร้าง Visit และแสดง Popup จำนวนผู้ป่วยที่ลงทะเบียน
- ชื่อผู้ป่วยถูกสร้างอัตโนมัติ: `"Incident Detail Adult/Child_เพศ_ลำดับ"` เช่น `Incident Detail Adult_Male_1`

## Screen Fields — Triage Screen

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Triaged By | Text/Search | Yes | ชื่อผู้ประเมินการคัดกรอง |
| Chief Complaints | Text | Yes | อาการสำคัญเบื้องต้น |
| Present Illness | Text | No | รายละเอียดการเจ็บป่วยปัจจุบัน |
| ESI Level | Dropdown/Auto | Yes | ระดับความรุนแรง 1–5 คำนวณอัตโนมัติจากการประเมิน |
| Glasgow Coma Scale | Composite | No | ประเมินระดับความรู้สึกตัว (Eye/Verbal/Motor) |

**Access:** Visit Detail → Icon Triage

**Tab PAST TRIAGE:** แสดงรายการ Triage เก่าทั้งหมด → เลือกรายการทางซ้ายเพื่อดูรายละเอียด

## Screen Fields — Emergency Discharge Screen

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| Date | Date | Yes | วันปัจจุบัน | วันที่จำหน่าย |
| Time | Time | Yes | เวลาปัจจุบัน | เวลาที่จำหน่าย |
| Recommended By | Text/Search | Yes | — | แพทย์ที่สั่งจำหน่าย |
| Discharge Type | Dropdown | Yes | — | ประเภทการจำหน่าย |
| Discharge Status | Dropdown | Yes | — | ดูตาราง Discharge Status ด้านล่าง |
| Comments | Text | No | — | หมายเหตุเพิ่มเติม |

**Access:** Visit Detail → Icon Emergency Discharge

## Discharge Status — 5 ประเภทและ Fields เพิ่มเติม

| Discharge Status | ความหมาย | Fields เพิ่มเติม | ผลลัพธ์ |
|-----------------|----------|----------------|---------|
| **Discharge** | จำหน่ายปกติ | — (บันทึก วัน+เวลา+แพทย์+ประเภท+สถานะ) | Status → Medical Discharge → [[Billing]] |
| **Death** | ผู้ป่วยเสียชีวิต | ระบุรายละเอียดการเสียชีวิตเพิ่มเติม | Status → Medical Discharge (บันทึกเสียชีวิต) |
| **Referred to Admission** | รับเป็นผู้ป่วยใน | ระบุรายละเอียดการรับผู้ป่วยใน | ส่ง [[Admission]] |
| **Referred to Other Hospital** | ส่งตัวโรงพยาบาลอื่น | ระบุรายละเอียดการส่งตัว + ปลายทาง | เตรียมเอกสารส่งตัว |
| **Send to OR** | ส่งผ่าตัด | ระบุรายละเอียดการผ่าตัด | ส่ง [[OR]] |

**หลัง Save (ทุก status):** สถานะผู้ป่วยเปลี่ยนเป็น **Medical Discharge** → เข้าสู่กระบวนการทางการเงิน

## [[ESI Level]] — สีแสดงบน Whiteboard

| ESI Level | ความรุนแรง | สี (ตามมาตรฐาน ESI) |
|-----------|-----------|---------------------|
| 1 | Resuscitation — วิกฤต | แดง |
| 2 | Emergent — ฉุกเฉิน | ส้ม |
| 3 | Urgent — เร่งด่วน | เหลือง |
| 4 | Less Urgent — ไม่เร่งด่วน | เขียว |
| 5 | Non-Urgent — ไม่ฉุกเฉิน | น้ำเงิน |

*ระบบแสดงสีที่ ESI Level column ใน [[Whiteboard]] อัตโนมัติหลัง Triage*

## Button Actions

| Button / Icon | หน้าจอ | Action | ผลลัพธ์ |
|---------------|--------|--------|---------|
| Emergency Registration | เมนู Emergency | เปิดหน้าลงทะเบียนฉุกเฉิน | — |
| New Patient toggle | Emergency Registration | เปิด = ผู้ป่วยใหม่, ปิด = ค้นหาผู้ป่วยเก่า | สลับ mode |
| Search Patients | Emergency Registration | ค้นหาผู้ป่วยเก่า | แสดงรายชื่อ → Click เลือก |
| Save (Registration) | Emergency Registration | บันทึกการลงทะเบียน | ผู้ป่วยใหม่: Popup สร้าง MRN; ผู้ป่วยเก่า: Popup สร้าง Visit |
| Mass Casualty | เมนู Emergency | เปิดหน้าลงทะเบียนอุบัติภัยหมู่ | — |
| Save (Mass Casualty) | Mass Casualty | บันทึกข้อมูลอุบัติภัยหมู่ | สร้าง Visit หลายรายการ + Popup แสดงจำนวน |
| Triage icon | Visit Detail (Whiteboard) | เปิดหน้า Triage | — |
| Save (Triage) | Triage Screen | บันทึกการคัดกรอง | Status → Triaged |
| Emergency Discharge icon | Visit Detail | เปิดหน้า Emergency Discharge | — |
| Save (Discharge) | Emergency Discharge | บันทึกการจำหน่าย | Status → Medical Discharge |
| Waiting Time icon | Whiteboard | ดูระยะเวลารอคอย | แสดง Waiting Time popup |

## Permissions

| Action | ผู้ดำเนินการ | หมายเหตุ |
|--------|-------------|---------|
| Emergency Registration | พยาบาล / เจ้าหน้าที่ ER | — |
| Mass Casualty Registration | พยาบาล / เจ้าหน้าที่ ER | — |
| Triage | พยาบาล ER | บันทึก Triaged By |
| Emergency Discharge | แพทย์ / พยาบาล ER | ระบุ Recommended By (แพทย์) |
| ดู Whiteboard | ทุก User ER | — |

## Error / Edge Cases

- **Brought by Next of Kin = ON**: ต้องระบุ Escort Name (Required) มิฉะนั้น Save ไม่ได้
- **ผู้ป่วยใหม่**: MRN สร้างอัตโนมัติ — First Name เป็น Required field เดียว
- **Mass Casualty ชื่อผู้ป่วย**: ถูกสร้างอัตโนมัติ ต้องแก้ไขภายหลัง
- **Discharge Type vs Discharge Status**: ต้องเลือกทั้งสองฟิลด์ก่อน Save
- **Referred to Admission**: หลัง Save ระบบส่งข้อมูลไป [[Admission]] — ต้องมีข้อมูล ward/bed ที่แผนก Admission ดำเนินการต่อ
- **Past Triage**: ดูได้แต่แก้ไขไม่ได้ (Read-only)

## Integration Points

| Module | Integration |
|--------|-------------|
| [[Registration]] | Emergency Registration, Mass Casualty |
| [[Admission]] | Referred to Admission → IPD |
| [[OR]] | Send to OR |
| [[Billing]] | Medical Discharge → billing process |
| [[OPD]] | ผู้ป่วย ER อาจส่งต่อ OPD |
