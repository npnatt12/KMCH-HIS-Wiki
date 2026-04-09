---
title: OR Module
titleTh: ระบบงานห้องผ่าตัด
type: cheatsheet
sources: ["11.MEDHIS Manual_OR V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, module, or]
---

## Purpose
ระบบจัดการห้องผ่าตัดตั้งแต่จองห้อง จัดตาราง บันทึกรายละเอียดผ่าตัด จนดูแลห้องพักฟื้น

## Access
**Operating Room → Surgery Request List / OR Schedule / OR Worklist**

## Workflow

| Step | Actor | Action |
|------|-------|--------|
| 1 | แพทย์ | EMR → Referral → Tab Surgery → ระบุ Surgeon/Procedure/Date/Anesthesia → Save |
| 2 | จนท.OR | Surgery Request List → Book → เปิด OR Schedule → จองห้อง/เวลา |
| 3 | จนท.OR | OR Schedule → Confirm Booking → Status: Confirmed |
| 4 | จนท.OR | OR Worklist (วันผ่าตัด) → Upload Consent Form → ตรวจสอบ Check list |
| 5 | จนท.OR | OR Record → บันทึก Timing (Theatre In/Out) + ทีมผ่าตัด + Implants |
| 6 | พยาบาล | Recovery Room → Charting Vital Signs → จำหน่ายออกห้องพักฟื้น |

## Key Screens
- **Surgery Request List** — รายชื่อคำขอจากแผนกต่างๆ
- **OR Schedule** — Calendar นัดห้อง — Click ช่องว่างเพื่อจอง
- **OR Worklist** — วันผ่าตัด + 10 เมนูย่อย
- **OR Record** — บันทึก Intra-op รายละเอียด

## Key Fields

| Field | หมายเหตุ |
|-------|---------|
| Surgeon | Required ในการจอง |
| Procedure Details | ชื่อหัตถการ |
| Anesthesia / Anesthesist | ชนิดยาสลบ + แพทย์ดมยา |
| Planning Type | Elective / Emergency |
| Criticality | Major / Minor |
| Status | Booked → Confirmed → Inprogress → Completed |
| Reschedule | ทำได้เฉพาะสถานะ Booked — ต้องระบุเหตุผล |
| OR Record Status | Planned / Inprogress / Completed |

## Integration
EMR Doctor (Referral) → **OR** ← ER (Send to OR) ← IPD → Admission (หลังผ่าตัด) → Billing
