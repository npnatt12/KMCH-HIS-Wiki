---
title: EDC Calculation
type: concept
sources: ["8.MEDHIS Manual_ANC V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [concept, edc, anc, obstetrics, auto-calculation]
---

# EDC Calculation (Expected Date of Confinement)

การคำนวณวันกำหนดคลอด (EDC) ในระบบ [[ANC]]

## วิธีการคำนวณ

MEDHIS รองรับ 3 วิธี:

| Method | Description |
|--------|-------------|
| **LMP** | คำนวณจาก Last Menstrual Period — ระบุ LMP date แล้วระบบคำนวณ EDC และ GA อัตโนมัติ |
| **U/S** | คำนวณจากผล Ultrasound |
| **Manual** | ระบุ EDC ด้วยตนเอง |

## Auto-Calculations ที่เกี่ยวข้อง

เมื่อระบุ EDC แล้ว ระบบจะคำนวณอัตโนมัติ:
- **Trimester** — ไตรมาสปัจจุบัน
- **GA (Gestational Age)** — อายุครรภ์ (เมื่อใช้ LMP method)

## ที่ใช้งาน

- [[ANC Chart Screen]] → Current Pregnancy Detail section
- [[ANC Visit Workflow]] → ขั้นตอนที่ 2
