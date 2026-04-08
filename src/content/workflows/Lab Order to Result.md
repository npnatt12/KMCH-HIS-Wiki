---
title: Lab Order to Result Workflow
type: workflow
sources: ["9.MEDHIS Manual_LAB V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [workflow, lab, laboratory]
---

# ขั้นตอนการตรวจทางห้องปฏิบัติการ (Lab Order to Result)

ขั้นตอนเต็มตั้งแต่แพทย์สั่งตรวจจนผลออกใน [[LAB]] module

## Flow

```
Order → Specimen Collection → Accept → Manual Result → Report Authorized → EMR
                                  ↓ (reject)
                          Reject → Re-collect
```

## ขั้นตอน

### 1. แพทย์สั่งตรวจ (Order)
- EMR → Order Details (search) หรือ Tick Sheet (Lab tab)
- Priority: Normal / **STAT** (แสดงสีแดง)
- Save → Order No. + Status: **Ordered**

### 2. เก็บสิ่งส่งตรวจ (Specimen Collection)
- เจ้าหน้าที่/พยาบาล: Laboratory → Specimen Collection
- Print Sticker (Lab Label) → Collect Specimen → ยืนยัน
- Status: **Specimen Collected** (Tab COLLECTED)

### 3. รับสิ่งส่งตรวจ (Accept/Reject)
- เจ้าหน้าที่ Lab: Lab Worklist
- **Accept** → Status: **Specimen Accepted** (Tab INPROGRESS)
- **Reject** → ระบุเหตุผล → Status: **Specimen Rejected** → ผู้เก็บ collect ใหม่ได้

### 4. ลงผล (Manual Result)
- สำหรับรายการไม่เชื่อมต่อ LIS
- ลงค่า Value → ผิดปกติแสดงสีแดง L/H
- Save → Status: **Report Entered**
- แก้ไขได้ (ต้องเลือก Modify Reason)

### 5. รายงานผล (Report Authorized)
- Report Authorised → ผลส่งไป EMR ของผู้ป่วย
- Status: **Report Authorized** (Tab COMPLETE)
- **Reset Result** → กลับเป็น Test Executed → ลงผลใหม่ได้

### 6. ดูผลใน EMR
- EMR → Laboratory → Lab Result / Cumulative View / Charting (graph)

## Modules Involved

[[EMR Doctor]] (สั่ง) → [[OPD]]/[[IPD]] (เก็บ specimen) → [[LAB]] (Accept + Result) → EMR (แสดงผล)
