---
title: XRAY — Radiology Module
type: module
sources: ["10.MEDHIS Manual_XRAY V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [module, xray, radiology]
verified-on-uat: pending
---

# XRAY — ระบบงานรังสีเทคนิค (Radiology)

## Purpose

ระบบจัดการตรวจทางรังสีวินิจฉัยตั้งแต่สั่งตรวจ ลงทะเบียน ถ่ายภาพ จนอ่านผลและรายงาน

## Access

- **EMR** → Order Details / Tick Sheet (Radiology tab) — สั่งตรวจ
- **Radiology → Radiology Worklist** — Register, Execute, Report Entry

## Status Flow

```
Ordered → Registered → Executed → Report Entered → Report Authorized
```

ดูรายละเอียดสถานะใน [[Lab and Radiology Order Status]]

## Key Workflows

### 1. Order (สั่งตรวจ)

**Order Details** (search):
- พิมพ์ช่อง Search Order Item → เลือกรายการ → กด + เพิ่มรายการ → Save
- ระบบแสดง Order No. เมื่อ Save สำเร็จ

**Tick Sheet** (Radiology tab):
- เลือกรายการทีละตัว หรือเลือกทั้งกลุ่ม → กด Order → แสดงใน Order Details → Save
- รองรับการเลือกหลายรายการพร้อมกัน

### 2. Register Order (ลงทะเบียน)

#### หน้าจอ [[XRAY Register Screen]]

- Radiology → Radiology Worklist → Tab **NEW** (Default)
- รายการคำสั่งตรวจจากทุกหน่วยงานแสดงที่ Tab NEW

#### ตัวเลือก Filter และ Group-by

| ตัวเลือก | คำอธิบาย |
|---------|---------|
| Filter | ค้นหาตาม Department, Ward, **Modality**, Careprovider, Patient, Encounter Type, Order No., Date From–To |
| X-Ray No. | จัดกลุ่มตาม Order No. / X-Ray No. |
| Name | จัดกลุ่มตามชื่อผู้ป่วย |
| Order Date | จัดกลุ่มตามวันที่สั่ง |
| Radiology Order | จัดกลุ่มตามรายการตรวจทางรังสีวินิจฉัย |

#### ขั้นตอน

1. เลือกรายการใน Tab NEW
2. กด **Register**
3. Status: Ordered → **Registered** → ย้ายไป Tab **INPROGRESS**

### 3. Execute Order (ถ่ายภาพ)

- Radiology Worklist → Tab **INPROGRESS** → เลือกรายการ Registered
- กด **Execute** → ระบบแสดงหน้า Execute Radiology Order

#### Execute Radiology Order Screen Fields

| Field | Type | Required | คำอธิบาย |
|-------|------|----------|---------|
| Modality | Dropdown | **Yes** | ประเภทเครื่องถ่ายภาพ (CT/MRI/X-Ray ฯลฯ) |
| Radiologist | Dropdown | **Yes** | รังสีแพทย์ที่จะอ่านผล |
| Comments | Text | No | หมายเหตุเพิ่มเติม |

- กด **Save** → Status: **Executed**

### 4. Report Entry (อ่านผล — Radiologist Only)

> **สิทธิ์**: เฉพาะผู้ที่มีสิทธิ์เป็น **Radiologist** ในระบบเท่านั้น

#### การเข้าถึง

- Radiology Worklist → Tab **INPROGRESS** → เลือกรายการ Executed
- กด **Report Entry**

#### หน้าจอ [[XRAY Report Screen]]

| ส่วน | คำอธิบาย |
|-----|---------|
| PACS Viewer | กดเปิดระบบ PACS ดูภาพถ่ายรังสี (ถ้ามีการเชื่อมต่อ) |
| **Result** | ช่องบันทึกผลการอ่านภาพทางรังสี |
| **Impression** | ช่องบันทึกผลการวินิจฉัย |
| Template (ซ้าย) | เลือก Template → ระบบ Auto-fill Result + Impression |
| Recent (Tab) | ดูผลเก่าของผู้ป่วย → Copy ผลได้ |
| **Status** | เลือก Normal / Abnormal / None |

#### การใช้ Template

1. เลือก Template จาก Panel ด้านซ้าย
2. ระบบแสดง Popup ยืนยัน → ตอบ **YES**
3. ระบบ Auto-fill ข้อมูลใน Result และ Impression ตาม Template

#### การ Copy ผลเก่า (Tab Recent)

1. เลือก Tab **Recent** → เลือกรายการผลเก่า
2. ระบบแสดงผลเก่า → เลือก:
   - **Copy Result** — Copy เฉพาะส่วน Result
   - **Copy All** — Copy ทั้ง Result และ Impression
3. ระบบแสดงข้อความยืนยัน → ตอบ **YES**

#### สถานะผลการอ่าน

| Status | ความหมาย |
|--------|---------|
| **Normal** | ผลปกติ |
| **Abnormal** | ผลผิดปกติ |
| **None** | ไม่ต้องการระบุ |

#### ขั้นตอน

1. (optional) เปิด PACS Viewer ดูภาพถ่าย
2. กรอก **Result** + **Impression** (หรือเลือก Template / Copy เก่า)
3. เลือก **Status** (Normal/Abnormal/None)
4. กด **Save** → Status: **Report Entered**
5. แก้ไขได้โดยกด Report Entry อีกครั้ง → Save (ก่อน Approve)

### 5. Approve Result

- กด **Approve Result** → ผลส่งไปยัง **EMR** ของผู้ป่วย
- Status: **Report Authorized**
- แพทย์และพยาบาลเห็นผลใน EMR ทันที

#### หลัง Approve

| Action | วิธีเข้าถึง | คำอธิบาย |
|--------|-----------|---------|
| **Result View** | Radiology Worklist → Result View | ดูผลที่บันทึก |
| **Print Report** | Radiology Worklist → Print Report | พิมพ์รายงานผลทางรังสี |
| **View Audit Log** | เมนู → View Audit Log | ประวัติสถานะทุกขั้นตอน |

### 6. View in EMR

- EMR Summary → **Radiology** → ดูผลการตรวจ
- กด PACS Viewer icon → เปิดระบบภาพถ่ายรังสี (ถ้าเชื่อมต่อ)

## Screen Fields

### Radiology Worklist — Filter

| Field | Type | คำอธิบาย |
|-------|------|---------|
| Department | Dropdown | แผนกที่สั่งตรวจ |
| Ward | Dropdown | Ward ที่สั่งตรวจ |
| Modality | Dropdown | ประเภทเครื่อง (CT/MRI/X-Ray/Ultrasound ฯลฯ) |
| Careprovider | Text | แพทย์ผู้สั่ง |
| Patient | Text | HN หรือชื่อผู้ป่วย |
| Encounter Type | Dropdown | ประเภทการรักษา (OPD/IPD/ER) |
| Order No. | Text | หมายเลข Order |
| Date From – To | Date | ช่วงวันที่สั่งตรวจ |

### Report Entry Screen

| Field | Type | Required | คำอธิบาย |
|-------|------|----------|---------|
| Result | Rich Text | Yes | ผลการอ่านภาพทางรังสี |
| Impression | Rich Text | Yes | ผลการวินิจฉัยทางรังสี |
| Template | Selection (left panel) | No | Template ที่ตั้งค่าไว้ล่วงหน้า |
| Status | Dropdown | Yes | Normal / Abnormal / None |
| PACS Viewer | Button/Link | No | เปิดระบบดูภาพถ่าย (ต้องมีการเชื่อมต่อ) |

## Button Actions

| Button | หน้าจอ | เงื่อนไข | ผลลัพธ์ |
|--------|--------|---------|---------|
| Register | Radiology Worklist (Tab NEW) | Status = Ordered | Status → Registered |
| Execute | Radiology Worklist (Tab INPROGRESS) | Status = Registered | เปิดหน้า Execute; ต้องกรอก Modality + Radiologist |
| Save (Execute) | Execute Screen | Modality + Radiologist ต้องกรอก | Status → Executed |
| Report Entry | Radiology Worklist (Tab INPROGRESS) | Status = Executed; Role = Radiologist | เปิดหน้า Report Entry |
| Template | Report Entry Screen | มี Template ที่ตั้งค่าไว้ | Auto-fill Result + Impression |
| Copy Result | Report Entry → Tab Recent | มีผลเก่า | Copy เฉพาะ Result |
| Copy All | Report Entry → Tab Recent | มีผลเก่า | Copy Result + Impression |
| Save (Report) | Report Entry Screen | Result + Impression + Status กรอกครบ | Status → Report Entered |
| Approve Result | Radiology Worklist | Status = Report Entered; Role = Radiologist | Status → Report Authorized; ผลส่งไป EMR |
| Result View | Radiology Worklist | Status = Report Authorized | แสดงผลที่บันทึก |
| Print Report | Radiology Worklist | Status = Report Authorized | พิมพ์รายงานทางรังสี |
| View Audit Log | เมนู | ทุก Status | แสดง Log ประวัติสถานะ |

## Permissions

| Action | Role | หมายเหตุ |
|--------|------|---------|
| สั่งตรวจ (Order) | แพทย์, พยาบาล (On behalf of) | ผ่าน EMR Order |
| Register Order | เจ้าหน้าที่รังสี | ผ่าน Radiology Worklist |
| Execute Order | เจ้าหน้าที่รังสี | ต้องระบุ Modality + Radiologist |
| Report Entry | **Radiologist เท่านั้น** | Role ต้องถูกกำหนดเป็น Radiologist ในระบบ |
| Approve Result | **Radiologist เท่านั้น** | Role ต้องถูกกำหนดเป็น Radiologist ในระบบ |

## Error / Edge Cases

- **Role restriction**: ผู้ที่ไม่มี Role Radiologist ไม่สามารถเข้า Report Entry หรือ Approve Result ได้
- **Modality required**: Execute Order ไม่สามารถ Save ได้ถ้าไม่ระบุ Modality
- **Radiologist required**: Execute Order ไม่สามารถ Save ได้ถ้าไม่ระบุ Radiologist
- **PACS dependency**: PACS Viewer ใช้ได้เฉพาะเมื่อมีการเชื่อมต่อกับระบบภาพถ่ายทางรังสี
- **Template confirmation**: การใช้ Template ต้องยืนยัน YES ก่อน (เพื่อป้องกันการ overwrite โดยไม่ตั้งใจ)
- **Edit before Approve**: แก้ไขผลได้โดยกด Report Entry อีกครั้ง แต่ต้องก่อน Approve Result เท่านั้น
- **Copy confirmation**: การ Copy ผลเก่าต้องยืนยัน YES ก่อน

## เปรียบเทียบ LAB vs XRAY

| | [[LAB]] | XRAY |
|---|---------|------|
| Specimen | ต้องเก็บ + Accept/Reject | ไม่มี |
| Register | ไม่มี (ไป Specimen Collection เลย) | ต้อง Register ก่อน |
| Execute | ไม่มี (ขั้นตอนนี้ไม่มีใน Lab) | ต้อง Execute (ระบุ Modality + Radiologist) |
| Result Entry | Manual Result (Value + Normal Range) | Report Entry (Result + Impression + Template) |
| Role Restriction | ไม่มี (เจ้าหน้าที่ Lab) | **Radiologist only** สำหรับ Report Entry + Approve |
| External System | LIS | **PACS Viewer** |
| Copy Previous | ไม่มี | Tab Recent → Copy Result / Copy All |
| Result Status | L/H indicators | Normal / Abnormal / None |

## Integration Points

| Module | Integration |
|--------|-------------|
| [[OPD]] / [[IPD]] | สั่ง X-ray จาก EMR |
| [[EMR Doctor]] | สั่งตรวจ, ดูผล |
| [[ANC]] | Radiology tab ใน ANC Chart |
| [[Billing]] | Radiology orders ส่งต่อ Billing |
| PACS | เชื่อมต่อระบบภาพถ่ายรังสี (optional) |
