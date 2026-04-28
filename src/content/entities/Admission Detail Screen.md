---
title: Admission Detail Screen
type: entity
sources: ["6.MEDHIS Manual_Admission V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, screen, admission, inpatient]
roles: [NurseIPD]
verified-on-uat: pending
---

# Admission Detail Screen

หน้าจอกรอกรายละเอียดการ Admit ผู้ป่วยเข้าเป็นผู้ป่วยใน แบ่งเป็น 7 Section

## Purpose

รวบรวมข้อมูลที่จำเป็นสำหรับการ Admit ทั้งหมด ได้แก่ แพทย์เจ้าของไข้, สิทธิ์รักษา, ข้อมูลทางกฎหมาย, การ Refer, เลือกเตียง และรายละเอียดการเข้า Visit

## Access Path

- **วิธี 1 (Request Admit):** Inpatient → Admission List → Tab Request List → เลือกผู้ป่วย → **Admit**
- **วิธี 2 (Direct Admit):** Inpatient → Admission → Search Patient → **SELECT**

## Fields — 7 Sections

### Section 1: Careprovider Detail

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Department | Dropdown | Yes | แผนกที่รับผู้ป่วย |
| Attending Doctor | Search/Dropdown | Yes | แพทย์เจ้าของไข้ |
| Comment | Text | No | ข้อความจากแพทย์ OPD ที่ส่งมาพร้อม Request |

### Section 2: Payor Detail

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| สิทธิ์การรักษา | Dropdown | Yes | สิทธิ์ที่ใช้สำหรับ Admit ครั้งนี้ |
| สิทธิ์เบิก | Dropdown | No | สิทธิ์เบิกเพิ่มเติม |

→ รายละเอียดสิทธิ์: [[Payor and Treatment Rights]]

### Section 3: Episode Detail

| Field | Type | Description |
|-------|------|-------------|
| Continuous Episode | Toggle | เปิดหากเป็นการรักษาต่อเนื่องจาก Visit ก่อนหน้า |

### Section 4: Medico Legal Case

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Is Medico Legal | Toggle | No | เปิดหากเป็นเคสคดี |
| รายละเอียดคดี | Text | Conditional | บังคับระบุเมื่อ Toggle เปิด |

### Section 5: Referral Details

| Field | Type | Description |
|-------|------|-------------|
| Referred From | Dropdown | โรงพยาบาลต้นทางที่ส่งตัวผู้ป่วยมา |
| Referral Date | Date | วันที่ส่งตัว |
| Referral Note | Text | เหตุผลการส่งตัว |

### Section 6: Bed Selection

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Ward | Dropdown | Yes | หอผู้ป่วยที่ต้องการ Admit |
| Room Type | Dropdown | Yes | ประเภทห้อง (ตามสิทธิ์/ความต้องการของผู้ป่วย) |
| Bed | Select | Yes | เลือกเตียงจากรายการเตียงว่าง ([[Bed Status|Vacant Bed]] เท่านั้น) |

- เตียงที่ถูกเลือกได้ต้องมีสถานะ [[Bed Status|Vacant]] (สีเขียว)

### Section 7: Visit Detail

| Field | Type | Description |
|-------|------|-------------|
| Bed Charges | Display | ค่าห้อง/เตียงที่จะเรียกเก็บ (แสดงตามเตียงที่เลือก) |
| Isolation | Toggle | เปิดหากผู้ป่วยต้องแยกกักตัว |
| Transfer Mode | Dropdown | วิธีการมาถึง Ward (Walk-in/Wheelchair/Stretcher/Ambulance) |
| Re-visit | Toggle | เปิดหากเป็นการ Admit ซ้ำในช่วงเวลาใกล้กัน |
| Pregnant | Toggle | เปิดหากผู้ป่วยตั้งครรภ์ |
| Breast Feeding | Toggle | เปิดหากผู้ป่วยให้นมบุตรอยู่ |

## Buttons

| Button | Action | Conditions | Result |
|--------|--------|------------|--------|
| **Save** | บันทึก Admission | ข้อมูลครบถ้วนทุก Required field | ผู้ป่วยแสดงใน Admission List |

## Related Workflows

- [[Admission Workflow]] — กระบวนการ Admit ทั้ง 2 วิธี
- [[Bed Status]] — สถานะเตียงสำหรับ Bed Selection
- [[Payor and Treatment Rights]] — ข้อมูลสิทธิ์การรักษา
