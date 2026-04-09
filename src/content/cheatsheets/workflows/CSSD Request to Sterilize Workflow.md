---
title: CSSD Request to Sterilize Workflow
titleTh: ขั้นตอนขอเบิกถึงทำปลอดเชื้อ
type: workflow
sources: ["16.MEDHIS Manual_CSSD V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, cssd]
---

## Overview
วงจรเวชภัณฑ์ปลอดเชื้อตั้งแต่แผนกขอเบิก CSSD จ่าย แผนกใช้และคืน จนถึง CSSD ล้าง/บรรจุ/ฆ่าเชื้อพร้อมจ่ายอีกครั้ง

## Steps
1. (แผนก) CSSD → Switch Location → เลือกแผนกตนเอง → Add → กรอก Tray Master + Qty + Priority → Save
2. (CSSD) Switch Location → เลือก CSSD → ดูรายการ Request → กด Issue → เลือกชุดจาก Store → Save
3. (แผนก) รับเวชภัณฑ์ไปใช้งาน (ขั้นตอนทางคลินิก)
4. (แผนก) Switch Location → เลือกแผนกตนเอง → เลือกรายการที่ใช้แล้ว → กด Return → Save
5. (CSSD) In Process → 4.1 Clean → บันทึก → 4.2 Pack → บันทึก → 4.3 Sterilize → บันทึก
6. (CSSD) เวชภัณฑ์กลับสู่ Store พร้อมจ่ายอีกครั้ง

## Decision Points
- แผนกสามารถ Clean ที่แผนกได้จากหน้า Return ก่อนส่งคืน CSSD
- Priority ใน Request ช่วยให้ CSSD จัดลำดับการจ่าย

## Key Rules
- ทุกขั้นตอนต้องใช้ Switch Location ให้ถูกแผนกก่อนดำเนินการ
- In Process มี 3 ขั้นตอนเรียงลำดับ: Clean → Pack → Sterilize
- ดูประวัติการเบิกจ่ายได้จาก History icon ในหน้า Issue
- OR ใช้ Request OR field ระบุห้องผ่าตัดที่ต้องการ

## Modules
แผนก/OR → CSSD (Issue) → แผนก (ใช้+Return) → CSSD (In Process) → Store
