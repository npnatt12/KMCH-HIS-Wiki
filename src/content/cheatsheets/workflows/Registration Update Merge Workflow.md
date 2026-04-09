---
title: Registration Update Merge Workflow
titleTh: ขั้นตอนแก้ไขข้อมูลและรวมประวัติผู้ป่วย
type: workflow
sources: ["2.MEDHIS Manual_Registration V.2.docx", "1.MEDHIS Manual_MRD_V2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, registration]
---

## Overview
ครอบคลุม 2 กระบวนการ: Modify Demographics (แก้ไขข้อมูลผู้ป่วย) และ Patient Merge (รวม HN ซ้ำ)

## Steps
1. (เจ้าหน้าที่ — Modify) Registration/OPD/IPD → icon บนกล่องผู้ป่วย → Modify Demographics
2. (เจ้าหน้าที่) กดปุ่มปลดล็อค → แก้ไขข้อมูลใน Patient Demographics Screen → Save
3. (เจ้าหน้าที่ — Merge) MRD → Patient Merge → กด New Merge icon
4. (เจ้าหน้าที่) ระบุ Primary Patient (HN ที่คงไว้) → ระบุ Secondary Patient (HN ที่รวมเข้า)
5. (เจ้าหน้าที่) เลือก Merge all visit (ON = รวมทุก Visit) หรือเลือกบาง Visit → ระบุ Reason → Confirm → YES
6. (เจ้าหน้าที่ — Unmerge) ค้นหารายการที่รวมแล้ว → UNMERGE → ระบบยกเลิกกลับสู่ 2 HN

## Decision Points
- Modify Demographics: ถ้าข้อมูลไม่ได้อัปเดตเกิน 6 เดือน → ระบบแสดง Popup เตือน
- Merge all visit toggle: ON = รวมทุก Visit; OFF = เลือกเฉพาะบาง Visit
- Primary ≠ Secondary: ระบบไม่อนุญาต Merge ถ้าใส่ค่าซ้ำกัน

## Key Rules
- ต้องกดปลดล็อคก่อนแก้ Basic Details ใน Modify Demographics
- Primary HN = HN ที่คงไว้; Secondary HN = ถูกรวมเข้าหา Primary
- Visit/Orders/ประวัติจาก Secondary ย้ายมา Primary ทั้งหมด
- Unmerge รองรับการยกเลิกหากรวมผิด

## Modules
Registration / OPD / IPD (Modify) → MRD (Patient Merge)
