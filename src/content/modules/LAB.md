---
title: LAB — Laboratory Module
type: module
sources: ["9.MEDHIS Manual_LAB V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [module, lab, laboratory]
---

# LAB — ระบบงานห้องปฏิบัติการ (Laboratory)

## Purpose

ระบบจัดการตรวจทางห้องปฏิบัติการตั้งแต่สั่งตรวจ เก็บ specimens รับ/ปฏิเสธ specimens จนลงผลและรายงาน

## Access

- **EMR** → Order icon → Order Details / Tick Sheet (Lab tab) — สั่งตรวจ
- **Laboratory → Specimen Collection** — เก็บสิ่งส่งตรวจ
- **Laboratory → Lab Worklist** — Accept/Reject, Manual Result

## [[Lab Order to Result|Status Flow]]

```
Ordered → Specimen Collected → Specimen Accepted → [Test Executed] → Report Entered → Report Authorized
                                    ↓ (reject)
                            Specimen Rejected → (re-collect) → Ordered
```

## Key Workflows

### 1. Order (สั่งตรวจ)

**Order Details** (search):
- พิมพ์ Search Order Item → เลือกรายการ → กด + เพิ่มรายการ → Save
- **Duplicate Order**: ระบบตรวจจับรายการซ้ำ → ต้องระบุ Comments
- **STAT Priority**: เปลี่ยน Priority → แสดง**สีแดง**ทุกหน้าจอ (Order Details / Specimen Collection / Lab Worklist)

**Tick Sheet** (Lab tab):
- เลือกรายการทีละตัว หรือเลือกทั้งกลุ่ม → Order → แสดงใน Order Details → Save

### 2. Specimen Collection (เก็บสิ่งส่งตรวจ)

- Laboratory → Specimen Collection → Tab NEW
- **Filter**: Department, Ward, Careprovider, Patient, Encounter Type, Order No., Date, Status
- **Group by**: Lab No. / Name / Order Date
- **Print Sticker** → **Collect Specimen** → ยืนยัน → Status: Ordered → **Specimen Collected** (Tab COLLECTED)
- **Batch**: เลือก Select All / เลือกหลายรายการ → Print / Collect พร้อมกัน

### 3. Accept/Reject Specimen

**Accept** (Lab Worklist):
- Accept Specimen → YES → Status: **Specimen Accepted** (Tab INPROGRESS)
- Batch accept รองรับ

**Reject**:
- Reject Specimen → เลือก**เหตุผล** → Save → Status: **Specimen Rejected**
- ผู้เก็บสามารถ Collect Specimen อีกครั้ง

### 4. Manual Result (ลงผล)

สำหรับรายการที่ไม่เชื่อมต่อกับ LIS (Laboratory Information System):
- Manual Result → ลงผลในช่อง **Value**
- ค่าผิดปกติ: **สีแดง** + สัญลักษณ์ **L** (ต่ำ) / **H** (สูง) ตาม Normal Range
- Comment ได้ → Save → Status: **Report Entered**
- แก้ไขได้ก่อน Report Authorized (ต้องเลือก **Modify Reason**)

### 5. Report Authorized

- Report Authorised → ผลรายงานไป **EMR** ของผู้ป่วย
- Status: **Report Authorized** (Tab COMPLETE)
- **Reset Result**: หลัง Authorized → ย้อนเป็น **Test Executed** → ลงผลใหม่ได้

### 6. View Results (ดูผล)

- **Result View** — ดูผลที่บันทึก
- **Print Documents** — พิมพ์รายงานผล
- **View Audit Log** — ประวัติสถานะทุกขั้นตอน
- **EMR** → Laboratory → 3 views: Lab Result / **Cumulative View** (เปรียบเทียบ) / **Charting** (กราฟ)

## Integration Points

| Module | Integration |
|--------|-------------|
| [[OPD]] | สั่ง Lab จาก EMR, Specimen Collection |
| [[IPD]] | สั่ง Lab จาก EMR, Specimen Collection |
| [[EMR Doctor]] | สั่งตรวจ, ดูผล |
| [[ANC]] | Lab tab ใน ANC Chart |
| [[Billing]] | Lab orders ส่งต่อ Billing |
| LIS | เชื่อมต่อระบบ Lab อัตโนมัติ (ถ้ามี) |
