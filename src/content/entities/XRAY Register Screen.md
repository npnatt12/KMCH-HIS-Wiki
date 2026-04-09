---
title: XRAY Register Screen
type: entity
sources: ["10.MEDHIS Manual_XRAY V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, xray, radiology, screen]
---

# XRAY Register Screen — หน้าจอ Radiology Worklist (Register + Execute)

## Purpose

หน้าจอหลักของระบบรังสีวินิจฉัย ใช้สำหรับลงทะเบียนคำสั่งตรวจรังสี (Register) และบันทึกเมื่อผู้ป่วยเข้ารับการถ่ายภาพ (Execute) โดยเจ้าหน้าที่รังสีเทคนิค

## Access Path

**Radiology → Radiology Worklist**

ระบบเปิด Tab **NEW** (Default) แสดงรายการคำสั่งตรวจที่เข้ามาใหม่

## Tabs

| Tab | สถานะที่แสดง | คำอธิบาย |
|-----|-----------|---------|
| **NEW** | Ordered | รายการสั่งตรวจที่ยังไม่ได้ลงทะเบียน |
| **INPROGRESS** | Registered / Executed / Report Entered | รายการที่กำลังดำเนินการ |

## Fields (Filter Bar)

| Field | Type | คำอธิบาย |
|-------|------|---------|
| Department | Dropdown | แผนกที่สั่งตรวจ |
| Ward | Dropdown | Ward ที่สั่งตรวจ |
| **Modality** | Dropdown | ประเภทเครื่องถ่ายภาพ (CT/MRI/X-Ray/Ultrasound ฯลฯ) |
| Careprovider | Text | แพทย์ผู้สั่งตรวจ |
| Patient | Text | HN หรือชื่อผู้ป่วย |
| Encounter Type | Dropdown | ประเภทการรักษา (OPD/IPD/ER) |
| Order No. | Text | หมายเลข Order |
| Date From – To | Date Range | ช่วงวันที่สั่งตรวจ |

## Fields (Group-by Toggles)

| Toggle | ผล |
|--------|----|
| **X-Ray No.** | จัดกลุ่มตาม Order No. หรือ X-Ray No. |
| **Name** | จัดกลุ่มตามชื่อผู้ป่วย |
| **Order Date** | จัดกลุ่มตามวันที่สั่งตรวจ |
| **Radiology Order** | จัดกลุ่มตามรายการตรวจทางรังสีวินิจฉัย |

## Buttons (Tab NEW)

| Button | เงื่อนไข | ผลลัพธ์ |
|--------|---------|---------|
| **Register** | เลือกรายการ Status = Ordered | Status → Registered; ย้ายไป Tab INPROGRESS |

## Buttons (Tab INPROGRESS)

| Button | เงื่อนไข | ผลลัพธ์ |
|--------|---------|---------|
| **Execute** | Status = Registered | เปิดหน้า Execute Radiology Order |
| **Report Entry** | Status = Executed; Role = Radiologist | เปิดหน้า [[XRAY Report Screen]] |
| **Approve Result** | Status = Report Entered; Role = Radiologist | Status → Report Authorized |
| **Result View** | Status = Report Authorized | แสดงผลที่บันทึก |
| **Print Report** | Status = Report Authorized | พิมพ์รายงานผล |
| **View Audit Log** | ทุก Status | แสดงประวัติสถานะทุกขั้นตอน |

## Execute Radiology Order Screen (Popup)

เมื่อกด Execute ระบบแสดงหน้าต่าง Execute Order:

| Field | Type | Required | คำอธิบาย |
|-------|------|----------|---------|
| **Modality** | Dropdown | **Yes** | ประเภทเครื่องถ่ายภาพที่ใช้จริง |
| **Radiologist** | Dropdown | **Yes** | รังสีแพทย์ที่จะอ่านผล |
| Comments | Text | No | หมายเหตุเพิ่มเติม |

- กด **Save** → Status: Executed
- ไม่สามารถ Save ได้ถ้าไม่กรอก Modality และ Radiologist

## Related Workflows

- [[XRAY Order to Report Workflow]] — ขั้นตอนที่ 2 (Register) และ 3 (Execute)
- [[XRAY]] — ข้อมูลโมดูลรังสีวินิจฉัย
