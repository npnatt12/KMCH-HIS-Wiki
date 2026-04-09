---
title: Admission Module
titleTh: ระบบงานรับผู้ป่วยใน
type: cheatsheet
sources: ["6.MEDHIS Manual_Admission V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, module, admission]
---

## Purpose
ระบบรับผู้ป่วยเข้าเป็นผู้ป่วยใน (Admit) จัดการเตียง ยกเลิก Admit

## Access
**Inpatient → Admission / Admission List**

## Workflow

| Step | Actor | Action |
|------|-------|--------|
| 1 | แพทย์ OPD/ER | EMR → Request Admission → ระบุ Ward + แพทย์ → Save |
| 2 | จนท. Admission | Admission List → Request List → Admit |
| 3 | จนท. Admission | กรอก Admission Detail (7 sections) → Save |
| 4 | พยาบาล Ward | Ward Board → Arrive → เริ่มดูแล |

**Direct Admit:** Inpatient → Admission → Search → Select → Detail → Save

## Admission Detail

| Section | Key Fields |
|---------|-----------|
| Careprovider | แผนก, แพทย์เจ้าของไข้ |
| Payor | สิทธิ์การรักษา |
| Episode | การรักษาต่อเนื่อง |
| Medico Legal | เคสคดี |
| Referral | ผู้ป่วย refer |
| Bed Selection | ชนิดเตียง (Vacant only) |
| Visit Detail | Bed Charges, แยกกักตัว, Transfer |

## Cancel Admission
- เงื่อนไข: ก่อน Arrive เท่านั้น
- Cancel → ระบุเหตุผล → Save → เตียงว่าง (Vacant)

## Integration
OPD/ER → **Admission** → IPD (Ward Board) → Billing
