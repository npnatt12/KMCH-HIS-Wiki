---
title: XRAY — Radiology Module
type: module
sources: ["10.MEDHIS Manual_XRAY V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [module, xray, radiology]
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

## Key Workflows

### 1. Order (สั่งตรวจ)
- เหมือน [[LAB]]: Order Details (search) หรือ Tick Sheet (Radiology tab)
- เลือกรายการ/กลุ่ม → Order → Save → ได้ Order No.

### 2. Register Order (ลงทะเบียน)
- Radiology Worklist → Tab NEW
- **Filter**: Department, Ward, **Modality**, Careprovider, Patient, Encounter Type, Order No., Date
- **Group by**: X-Ray No. / Name / Order Date / Radiology Order
- กด **Register** → Status: Ordered → **Registered** (Tab INPROGRESS)

### 3. Execute Order (ถ่ายภาพ)
- Tab INPROGRESS → เลือกรายการ Registered → **Execute**
- ต้องระบุ: **Modality** + **Radiologist** (+ Comments optional)
- Save → Status: **Executed**

### 4. Report Entry (อ่านผล)
- **เฉพาะ Radiologist** (role-restricted) เท่านั้น
- Tab INPROGRESS → เลือกรายการ Executed → **Report Entry**
- **PACS Viewer**: กดเปิดดูภาพถ่ายรังสี (ถ้าเชื่อมต่อ)
- **Result**: ผลการอ่านภาพ
- **Impression**: ผลวินิจฉัย
- **Template**: เลือก template → auto-fill Result + Impression
- **Copy ผลเก่า**: Tab Recent → เลือกผลเก่า → Copy Result / Copy All (Result + Impression)
- **Status**: Normal / Abnormal / None
- Save → Status: **Report Entered**
- แก้ไขได้ก่อน Approve

### 5. Approve Result
- **Approve Result** → Status: **Report Authorized** → ผลไป EMR ของผู้ป่วย
- **Result View** — ดูผล
- **Print Report** — พิมพ์รายงาน
- **View Audit Log** — ประวัติสถานะ

### 6. View in EMR
- EMR Summary → Radiology → ดูผล + PACS Viewer link

## เปรียบเทียบ LAB vs XRAY

| | [[LAB]] | XRAY |
|---|---------|------|
| Specimen | ต้องเก็บ + Accept/Reject | ไม่มี |
| Register | ไม่มี (ไป Specimen Collection เลย) | ต้อง Register ก่อน |
| Execute | ไม่มี | ต้อง Execute (ระบุ Modality + Radiologist) |
| Result Entry | Manual Result (Value + Normal Range) | Report Entry (Result + Impression + Template) |
| Role Restriction | ไม่มี (เจ้าหน้าที่ Lab) | **Radiologist only** สำหรับ Report Entry |
| External System | LIS | **PACS Viewer** |

## Integration Points

| Module | Integration |
|--------|-------------|
| [[OPD]] / [[IPD]] | สั่ง X-ray จาก EMR |
| [[EMR Doctor]] | สั่งตรวจ, ดูผล |
| [[ANC]] | Radiology tab ใน ANC Chart |
| [[Billing]] | Radiology orders ส่งต่อ Billing |
| PACS | เชื่อมต่อระบบภาพถ่ายรังสี |
