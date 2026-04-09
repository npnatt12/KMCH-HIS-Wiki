---
title: MRD Folder Issue Return Workflow
titleTh: ขั้นตอนการจ่าย/คืนแฟ้มเวชระเบียน
type: workflow
sources: ["1.MEDHIS Manual_MRD_V2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, mrd]
---

## Overview
วงจรแฟ้มเวชระเบียนตั้งแต่สร้างอัตโนมัติเมื่อลงทะเบียน/Admit จนจ่ายออก โอน และรับคืน

## Steps
1. (ระบบ) สร้างแฟ้มอัตโนมัติเมื่อ New Register (OPD folder) หรือ Admit (IPD folder) → สถานะ Requested
2. (MRD) MRD Worklist → Tab Registration Request หรือ Manual Request → เลือก Requested → กด Issue → Issued
3. (MRD — นัดหมาย) Folder Issue → Appointment Issue → เลือก Dept + Date → Search → เลือก Checkbox → Issue
4. (MRD — Walk-in) Folder Issue → Direct Issue → Search Patient → เลือกแฟ้ม → ระบุ Dept → Issue
5. (แผนก) Folder Transfer → ระบุ HN + Visit → เลือกแผนกปลายทาง → Save → สถานะ Transferred
6. (MRD) Folder Return → ระบุ HN + Visit → เลือกห้องเก็บแฟ้ม → Save → สถานะ Returned

## Decision Points
- Appointment Issue: แฟ้มที่ยังออกอยู่ต้อง Return ก่อน จึง Issue ได้
- Folder Transfer: ใช้เมื่อแผนกส่งแฟ้มต่อกันเอง; แฟ้มต้องสถานะ Issued/Transferred เท่านั้น
- Auto File Request: เปิดใน App Setting เพื่อสร้าง Request อัตโนมัติ

## Key Rules
- Folder Request สร้างได้ด้วยตนเอง (Manual) หรืออัตโนมัติจาก Registration/Admission
- Cancel Request: กด Icon Cancel → สถานะ Cancelled
- แฟ้ม IPD: 1 แฟ้มต่อ Visit Number; แฟ้ม OPD: 1 แฟ้มต่อ HN

## Modules
Registration → MRD (Issue) → แผนก (Transfer) → MRD (Return)
