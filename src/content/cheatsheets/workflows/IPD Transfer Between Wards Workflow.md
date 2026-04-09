---
title: IPD Transfer Between Wards Workflow
titleTh: ขั้นตอนการย้ายเตียง/หอผู้ป่วย
type: workflow
sources: ["7.MEDHIS_Manual_IPD V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, ipd]
---

## Overview
ย้ายผู้ป่วย IPD ไปยังเตียงหรือ Ward อื่น โดย Ward ต้นทางส่ง Request และ Admission อนุมัติ Transfer

## Steps
1. (พยาบาล Ward ต้นทาง) Ward Board → เลือกผู้ป่วย → กดสัญลักษณ์ Transfer Request
2. (พยาบาล) ระบบแสดง IPD Transfer Screen → เลือก Ward หรือเตียงปลายทาง → SAVE
3. (พยาบาล) ติดต่อประสานงานแผนก Admission เพื่อขออนุมัติ
4. (เจ้าหน้าที่ Admission) ตรวจสอบข้อมูลผู้ป่วยและเตียงปลายทาง → กด TRANSFER
5. (ระบบ) ผู้ป่วยย้ายสำเร็จ → Ward Board ปลายทางแสดงชื่อผู้ป่วย

## Decision Points
- Ward ไม่สามารถย้ายได้โดยตรง — ต้องผ่านการอนุมัติ Admission ทุกครั้ง
- เตียงปลายทางต้องมีสถานะ Vacant Bed จึงจะเลือกได้

## Key Rules
- Transfer Request ส่งคำขอไปรอ Admission; ยังไม่ย้ายจนกว่า Admission กด TRANSFER
- เตียงต้นทางจะว่างหลัง Transfer อนุมัติสำเร็จ
- ต้องประสานงานด้วยการสื่อสารโดยตรงกับ Admission (ระบบไม่แจ้งอัตโนมัติ)

## Modules
IPD (Ward Board) → Admission (อนุมัติ) → IPD (Ward Board ปลายทาง)
