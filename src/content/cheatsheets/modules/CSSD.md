---
title: CSSD Module
titleTh: ระบบเวชภัณฑ์ปลอดเชื้อ
type: cheatsheet
sources: ["16.MEDHIS Manual_CSSD V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, module, cssd]
---

## Purpose
จัดการเวชภัณฑ์ปลอดเชื้อ — ขอเบิก จ่าย รับคืน ล้าง บรรจุ และนึ่งฆ่าเชื้อ

## Access
**CSSD** — ทุก step ต้องใช้ **Switch Location** เพื่อเลือกแผนก

## Workflow

| Step | Actor | Action |
|------|-------|--------|
| 1 | แผนก | CSSD → Switch Location (แผนกตน) → Add → กรอก Tray Master + Qty + Priority → Save |
| 2 | จนท.CSSD | Switch Location (CSSD) → เลือก Request ที่รอ → Issue → ค้นหาจาก Store → Save |
| 3 | แผนก | ใช้เวชภัณฑ์เสร็จ → Return → เลือกรายการ → กด Return (เลือก Clean ที่แผนกได้เลย) |
| 4 | จนท.CSSD | In Process → Clean → บันทึก |
| 5 | จนท.CSSD | In Process → Pack → บันทึก |
| 6 | จนท.CSSD | In Process → Sterilize → บันทึก → พร้อมจ่ายอีกครั้ง |

## Key Screens
- **Request Screen** — ฟอร์มขอเบิก: Tray Master, Qty, Priority, Request OR
- **Issue Screen** — รายการรอ Issue + ค้นหาจาก Store
- **In Process** — 3 ขั้นตอน: Clean → Pack → Sterilize

## Key Fields

| Field | หมายเหตุ |
|-------|---------|
| Switch Location | Required ทุก step — เลือกแผนกที่ทำงาน |
| Tray Master | ชุดเครื่องมือปลอดเชื้อสำเร็จรูป |
| Quantity | จำนวนที่ต้องการเบิก |
| Priority | ระดับความเร่งด่วน |
| Request OR | แผนก/ห้องที่ใช้ (เช่น ห้องผ่าตัด) |
| In Process | Clean → Pack → Sterilize ตามลำดับ |
| History icon | ดูประวัติการเบิกจ่ายย้อนหลัง |

## Integration
OR / แผนกทุกแห่ง → **CSSD** (Request → Issue → Return → In Process) ↔ Inventory (Tray Master items)
