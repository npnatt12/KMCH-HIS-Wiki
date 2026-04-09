---
title: Lab and Radiology Order Status
type: concept
sources: ["9.MEDHIS Manual_LAB V.1.docx", "10.MEDHIS Manual_XRAY V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [concept, lab, radiology, status]
---

# Lab and Radiology Order Status

สถานะของรายการตรวจทางห้องปฏิบัติการ ([[LAB]]) และรังสีวินิจฉัย ([[XRAY]])

## Laboratory Status Flow

| # | Status | Thai | Tab ที่แสดง | ผู้เปลี่ยน | ปุ่ม/Action |
|---|--------|------|------------|-----------|------------|
| 1 | **Ordered** | สั่งตรวจแล้ว | NEW | แพทย์ | Save Order |
| 2 | **Specimen Collected** | เก็บสิ่งส่งตรวจแล้ว | COLLECTED | พยาบาล / เจ้าหน้าที่ | Collect Specimen |
| 3 | **Specimen Accepted** | รับสิ่งส่งตรวจแล้ว | INPROGRESS | เจ้าหน้าที่ Lab | Accept Specimen |
| 3a | **Specimen Rejected** | ปฏิเสธสิ่งส่งตรวจ | ALL (Lab Worklist) / NEW (Specimen Collection) | เจ้าหน้าที่ Lab | Reject Specimen |
| 4 | **Test Executed** | ดำเนินการตรวจ | INPROGRESS | LIS / Reset Result | (จาก LIS หรือ Reset) |
| 5 | **Report Entered** | ลงผลแล้ว | INPROGRESS | เจ้าหน้าที่ Lab | Save (Manual Result) |
| 6 | **Report Authorized** | รายงานผลแล้ว | COMPLETE | เจ้าหน้าที่ Lab | Report Authorised |

### Lab Status Diagram

```
Ordered
  ↓ Collect Specimen
Specimen Collected
  ├── Accept Specimen → Specimen Accepted
  │     ↓ Manual Result → Save
  │   Report Entered
  │     ↓ Report Authorised
  │   Report Authorized (COMPLETE)
  │     ↓ Reset Result (ถ้าจำเป็น)
  │   Test Executed
  │     ↓ Manual Result อีกครั้ง
  │   Report Entered ...
  │
  └── Reject Specimen → Specimen Rejected
        ↓ (เก็บใหม่)
      Ordered → Specimen Collected ...
```

## Radiology Status Flow

| # | Status | Thai | Tab ที่แสดง | ผู้เปลี่ยน | ปุ่ม/Action |
|---|--------|------|------------|-----------|------------|
| 1 | **Ordered** | สั่งตรวจแล้ว | NEW | แพทย์ | Save Order |
| 2 | **Registered** | ลงทะเบียนแล้ว | INPROGRESS | เจ้าหน้าที่รังสี | Register |
| 3 | **Executed** | ถ่ายภาพแล้ว | INPROGRESS | เจ้าหน้าที่รังสี | Execute → Save |
| 4 | **Report Entered** | ลงผลแล้ว | INPROGRESS | **Radiologist only** | Report Entry → Save |
| 5 | **Report Authorized** | รายงานผลแล้ว | — | Radiologist | Approve Result |

### Radiology Status Diagram

```
Ordered
  ↓ Register
Registered
  ↓ Execute (Modality + Radiologist required)
Executed
  ↓ Report Entry (Radiologist only)
Report Entered
  ↓ Approve Result (Radiologist only)
Report Authorized
```

## Visual Indicators

| Indicator | Module | ความหมาย |
|-----------|--------|---------|
| สีแดง (รายการ) | LAB | STAT Order (เร่งด่วน) — แสดงทุกหน้าจอ |
| สีแดง (รายการ) | XRAY | ไม่มี STAT ใน XRAY |
| **H** + สีแดง | LAB (Result) | ค่าสูงกว่า Normal Range |
| **L** + สีแดง | LAB (Result) | ค่าต่ำกว่า Normal Range |
| **Normal** | XRAY (Result) | ผลปกติ |
| **Abnormal** | XRAY (Result) | ผลผิดปกติ |
| **None** | XRAY (Result) | ไม่ระบุสถานะผล |

## Specimen Reject Reasons (LAB)

เมื่อ Reject Specimen เจ้าหน้าที่ Lab ต้องเลือกเหตุผลจาก Dropdown:
- ระบบกำหนดรายการเหตุผลไว้ล่วงหน้า (configured ในระบบ)
- บังคับเลือกก่อน Save Reject

## Modality Codes (XRAY)

Modality คือประเภทเครื่องถ่ายภาพทางรังสี ใช้ทั้งใน Filter (Worklist) และ Execute Order:

| Modality | ตัวอย่าง |
|----------|---------|
| X-Ray (plain film) | CR, DR |
| CT Scan | CT |
| MRI | MR |
| Ultrasound | US |
| Fluoroscopy | RF |
| Mammography | MG |
| Nuclear Medicine | NM |

> รายการ Modality จริงขึ้นอยู่กับการ configure ของโรงพยาบาล

## Report Result Status (XRAY)

| Code | ความหมาย | การใช้งาน |
|------|---------|---------|
| **Normal** | ผลปกติ | ผลการอ่านภาพไม่พบความผิดปกติ |
| **Abnormal** | ผลผิดปกติ | ผลการอ่านภาพพบความผิดปกติ |
| **None** | ไม่ระบุ | ไม่ต้องการระบุสถานะผล |

## เปรียบเทียบ LAB vs XRAY

| ประเด็น | LAB | XRAY |
|---------|-----|------|
| จำนวน Status หลัก | 6 (+ 1 Rejected) | 5 |
| สถานะพิเศษ | Specimen Rejected (ปฏิเสธ + เก็บใหม่) | ไม่มี |
| Role สำหรับลงผล | เจ้าหน้าที่ Lab (ไม่ restricted) | Radiologist เท่านั้น |
| Reset หลัง Authorize | มี (Reset Result → Test Executed) | ไม่มี |
| Tab สุดท้าย | COMPLETE | — |

## ที่ใช้งาน

- [[LAB]] → [[Lab Specimen Collection Screen]] / Lab Worklist / [[Lab Result Entry Screen]]
- [[XRAY]] → [[XRAY Register Screen]] / [[XRAY Report Screen]]
- [[Lab Order to Result]] — Workflow LAB
- [[XRAY Order to Report Workflow]] — Workflow XRAY
- [[OPD]] / [[IPD]] → Specimen Collection, View results in EMR
- [[Billing]] → Lab/Radiology order status check ก่อนออกบิล
