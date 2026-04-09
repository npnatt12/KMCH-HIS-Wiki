---
title: XRAY Module
titleTh: ระบบงานรังสีเทคนิค
type: cheatsheet
sources: ["10.MEDHIS Manual_XRAY V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, module, xray]
---

## Purpose
ระบบจัดการตรวจทางรังสีวินิจฉัยตั้งแต่สั่งตรวจ ลงทะเบียน ถ่ายภาพ จนอ่านผลและรายงาน

## Access
- สั่งตรวจ: **EMR → Order Details / Tick Sheet (Radiology tab)**
- ดำเนินการ: **Radiology → Radiology Worklist**

## Workflow

| Step | Actor | Action |
|------|-------|--------|
| 1 | แพทย์ | EMR Order → เลือก Radiology รายการ → Save → ได้ Order No. |
| 2 | จนท.รังสี | Radiology Worklist → Tab NEW → เลือกรายการ → Register → Status: Registered |
| 3 | จนท.รังสี | Tab INPROGRESS → Execute → ระบุ Modality + Radiologist → Save → Status: Executed |
| 4 | รังสีแพทย์ | Report Entry → กรอก Result + Impression → เลือก Status → Save → Status: Report Entered |
| 5 | รังสีแพทย์ | Approve Result → ผลส่ง EMR → Status: Report Authorized |

## Key Screens
- **Radiology Worklist** — Tab NEW (รอ Register) / INPROGRESS (Registered/Executed) / COMPLETE
- **Execute Screen** — ระบุ Modality + Radiologist (Required ทั้งคู่)
- **Report Entry** — Result, Impression, Template (auto-fill), Tab Recent (Copy ผลเก่า)

## Key Fields

| Field | หมายเหตุ |
|-------|---------|
| Modality | Required เมื่อ Execute (CT/MRI/X-Ray ฯลฯ) |
| Radiologist | Required เมื่อ Execute |
| Result | Required ใน Report Entry |
| Impression | Required ใน Report Entry |
| Status (ผล) | Normal / Abnormal / None |
| Template | auto-fill Result+Impression → ยืนยัน YES ก่อน |
| Report Entry | Radiologist เท่านั้น |
| Approve Result | Radiologist เท่านั้น |

## Integration
EMR Doctor → **XRAY** → Radiology Worklist → Report Entry → EMR (ผลใน Radiology tab) → Billing
