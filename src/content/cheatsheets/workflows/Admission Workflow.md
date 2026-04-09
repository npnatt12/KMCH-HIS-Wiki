---
title: Admission Workflow
titleTh: ขั้นตอนการรับผู้ป่วยเข้าเป็นผู้ป่วยใน
type: workflow
sources: ["6.MEDHIS Manual_Admission V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, admission]
---

## Overview
รับผู้ป่วยเข้า IPD 2 วิธี (ผ่าน OPD/ER หรือ Direct) ตั้งแต่ส่ง Request จนพยาบาล Ward กด Arrive

## Steps
1. (แพทย์ OPD/ER) EMR → กด Request Admission → Tab Admission → ระบุ Ward + แพทย์ → Save
2. (เจ้าหน้าที่ Admission) Inpatient → Admission List → Tab Request List → เลือกผู้ป่วย → กด Admit
3. (เจ้าหน้าที่ Admission) กรอก Admission Detail Screen ครบ 7 Sections
4. (เจ้าหน้าที่ Admission) เลือกเตียงว่าง (Bed Selection) → กด Save
5. (พยาบาล Ward) Ward Board → เลือกผู้ป่วย → กด Arrive → กด YES
6. (Direct Admit) Inpatient → Admission → Search Patient → Select → กรอก Admission Detail → Save → Arrive

## Decision Points
- วิธีที่ 1 (ผ่าน OPD/ER): ต้องรอ Request ก่อน เจ้าหน้าที่ Admission ค่อย Admit
- วิธีที่ 2 (Direct Admit): ค้นหาผู้ป่วยตรงจาก Inpatient Admission
- Cancel Admission: ทำได้เฉพาะก่อนพยาบาลกด Arrive; เตียงกลับเป็น Vacant ทันที

## Key Rules
- Admission Detail มี 7 sections: Careprovider, Payor, Episode, Medico Legal, Referral, Bed Selection, Visit Detail
- Pre-Admit Orders (Daily/Continuous) เพิ่มได้ล่วงหน้าตอน Request
- Cancel Admission จำกัดสิทธิ์เฉพาะบางตำแหน่งเท่านั้น
- เตียงปลายทางต้องเป็น Vacant Bed จึงเลือกได้

## Modules
OPD / ER → Admission → IPD (Ward Board)
