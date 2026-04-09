---
title: LAB Module
titleTh: ระบบงานห้องปฏิบัติการ
type: cheatsheet
sources: ["9.MEDHIS Manual_LAB V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, module, lab]
---

## Purpose
ระบบจัดการตรวจทางห้องปฏิบัติการตั้งแต่สั่งตรวจ เก็บ specimens รับ/ปฏิเสธ จนลงผลและรายงาน

## Access
- สั่งตรวจ: **EMR → Order Details / Tick Sheet**
- เก็บสิ่งส่งตรวจ: **Laboratory → Specimen Collection**
- ลงผล: **Laboratory → Lab Worklist**

## Workflow

| Step | Actor | Action |
|------|-------|--------|
| 1 | แพทย์ | EMR Order → เลือก Lab รายการ → Save → ได้ Order No. |
| 2 | พยาบาล | Specimen Collection → เลือกรายการ → Print Sticker → Collect Specimen → Confirm |
| 3 | จนท.Lab | Lab Worklist → Accept Specimen → Status: Specimen Accepted |
| 4 | จนท.Lab | Reject Specimen → ระบุเหตุผล → ผป.เก็บใหม่ |
| 5 | จนท.Lab | Manual Result → กรอก Value → Save → Status: Report Entered |
| 6 | จนท.Lab | Report Authorised → ผลส่ง EMR → Status: Report Authorized |

## Key Screens
- **Specimen Collection** — Tab NEW (รอเก็บ) / COLLECTED (เก็บแล้ว) + Batch Mode
- **Lab Worklist** — Tab INPROGRESS (Accepted) / COMPLETE (Authorized)
- **Manual Result** — Value + H/L indicator + Modify Reason (ถ้าแก้ไข)

## Key Fields

| Field | หมายเหตุ |
|-------|---------|
| STAT Priority | แสดงสีแดงทุกหน้าจอ |
| Collect Specimen | Ordered → Specimen Collected |
| Accept Specimen | → Specimen Accepted |
| Reject Reason | Required เมื่อปฏิเสธ |
| Value | Required ใน Manual Result |
| H / L | ค่าเกิน Normal Range แสดงสีแดง |
| Report Authorised | ผลส่ง EMR ทันที |
| Reset Result | ยกเลิก Authorize → Test Executed |

## Integration
EMR Doctor → **LAB** → Lab Worklist → EMR (ผลใน Summary) → Billing / ANC
