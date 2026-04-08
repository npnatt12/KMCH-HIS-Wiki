---
title: ANC Chart Screen
type: entity
sources: ["8.MEDHIS Manual_ANC V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [entity, screen, anc]
---

# ANC Chart Screen

หน้าจอหลักของระบบ [[ANC]] สำหรับบันทึกข้อมูลฝากครรภ์

## Access

[[EMR Doctor|EMR]] menu → ANC → tab **ANC CHART**

## Sections

1. **Current Pregnancy Detail** — Trimester, [[EDC Calculation|EDC]], GA
2. **Delivery History** — ประวัติการคลอดก่อนหน้า (รองรับหลายครั้ง)
3. **Obstetric Summary** — สรุปสูติกรรม (Gravida, Para, Abortions ฯลฯ)
4. **General Appearance** — น้ำหนัก/ส่วนสูงก่อนตั้งครรภ์ + BMI อัตโนมัติ
5. **Father Details** — ข้อมูลบิดา (ต้อง slide เปิด, ใช้ข้อมูลเก่าได้)
6. **Examination Record** — สัญญาณชีพและรายละเอียดการตรวจ
7. **Patient's Medical History** — ประวัติความเจ็บป่วยผู้ป่วย
8. **Father's Medical History** — ประวัติความเจ็บป่วยบิดา
9. **Patient's Outside Lab Panel** — ผลเลือดผู้ป่วยจากภายนอก
10. **Father's Outside Lab Panel** — ผลเลือดบิดาจากภายนอก

## Key Buttons

| Button | Action |
|--------|--------|
| **SAVE** | บันทึกข้อมูลทั้งหมด |
| **Completed** | ปิด cycle ฝากครรภ์ (ย้ายข้อมูลไป Past ANC Chart) |
| **+** (Delivery History) | เพิ่มประวัติการคลอด |
| **ลบ** (Delivery History) | ลบประวัติการคลอดที่บันทึกผิด |

## Related

- [[ANC]] — module page
- [[ANC Visit Workflow]] — step-by-step workflow
- [[EDC Calculation]] — auto-calculation logic
