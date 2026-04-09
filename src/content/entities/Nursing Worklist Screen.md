---
title: Nursing Worklist Screen
type: entity
sources: ["7.MEDHIS_Manual_IPD V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [entity, screen, ipd, nursing]
---

# Nursing Worklist Screen

หน้าจอรายการคำสั่งแพทย์สำหรับพยาบาล [[IPD]] — แสดง Orders ทั้งหมดของผู้ป่วยในตามลำดับ

## Purpose

ให้พยาบาลตรวจสอบและรับคำสั่งการรักษา (Execute Order) ที่แพทย์บันทึกในระบบ

## Access Path

Inpatient → **Nursing Worklist**

## Fields (ตัวกรองและค้นหา)

| Field | ประเภท | Description |
|-------|--------|-------------|
| Ward | Dropdown | เลือก Ward ที่ต้องการดู |
| Search Patients | Text | ค้นหาตามชื่อ/HN ผู้ป่วย |
| SEARCH | Button | กดเพื่อแสดงผล |
| Group by | Dropdown | จัดเรียงรายการ (6 แบบ) |

## Group By (6 แบบ)

| Group | Description |
|-------|-------------|
| **Department** | จัดเรียงตามแผนก |
| **Patient** | จัดเรียงตามชื่อผู้ป่วย |
| **Careprovider** | จัดเรียงตามแพทย์ผู้สั่ง |
| **Order Category Type** | จัดเรียงตามประเภทคำสั่ง (ยา/Lab/ฯลฯ) |
| **Status** | จัดเรียงตามสถานะของคำสั่ง |
| **Date** | จัดเรียงตามวันที่สั่ง |

## Buttons (Actions)

| Button | Action | Conditions | Result |
|--------|--------|------------|--------|
| **SEARCH** | ค้นหา/กรองรายการ | — | แสดงรายการ Orders ที่ตรงเงื่อนไข |
| **Update** | ดูรายละเอียด Order | เลือก Task แล้ว | แสดง Order Detail |
| **Execute Order** | รับ/ดำเนินการตาม Order | หลัง Update | สถานะ Order อัปเดต |
| **SAVE** | บันทึกการ Execute | — | บันทึกการดำเนินการ |
| **Modify** (IPD Consults) | กำหนด Careprovider ให้ Consult | Consult ไม่มีแพทย์ที่รับ | ระบุชื่อแพทย์แล้ว SAVE |

## Special Tabs / Sub-sections

| Tab/Section | Description |
|-------------|-------------|
| **IPD Consults** | รายการส่งปรึกษา — ดู/รับ/กำหนดแพทย์รับ Consult |
| **Follow up** | รับ Order Follow up → Execute → ทำนัดหมาย |

## Related Workflows

- [[IPD]] — Execute Order workflow
- [[Admission Workflow]] — ผู้ป่วยมาแสดงใน Nursing Worklist หลัง Arrive

## Related

- [[IPD]] — module page
- [[Ward Board]] — หน้าจอหลัก IPD
