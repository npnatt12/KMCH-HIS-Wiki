---
title: CSSD Module
type: module
sources: ["16.MEDHIS Manual_CSSD V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [module, cssd, sterilization, sterile-supply]
---

# CSSD — ระบบเวชภัณฑ์ปลอดเชื้อ (Central Sterile Supply Department)

## Purpose

จัดการเวชภัณฑ์ปลอดเชื้อ — ครอบคลุมการขอเบิก การจ่าย การรับคืน และกระบวนการทำให้ปราศจากเชื้อ

## Access

เมนูหลัก: **CSSD**

## Workflows (4 กระบวนการ)

### Workflow Overview

```
Request → Issue → (ใช้งาน) → Return → In Process (Clean → Pack → Sterilize) → พร้อมจ่ายอีกครั้ง
```

### 1. Request (การขอเบิกเวชภัณฑ์ปลอดเชื้อ)

แผนกต่างๆ สร้างคำขอเบิก โดยระบุ:

| Field | Description |
|-------|-------------|
| Tray Master | ชุดเครื่องมือที่ต้องการ |
| Quantity | จำนวน |
| Request Date/Time | วันเวลาที่ต้องการ |
| Priority | ลำดับความเร่งด่วน |
| Request Department | แผนกที่ขอ |
| Request OR | ห้องผ่าตัดที่ขอ (กรณีผ่าตัด) |

### 2. Issue (การจ่ายเวชภัณฑ์ปลอดเชื้อ)

เจ้าหน้าที่ CSSD ดำเนินการ:
1. เลือกชุดเวชภัณฑ์จาก **Store**
2. **ตัดจ่าย** (Issue) ไปยังแผนกที่ขอ
3. สามารถดู **History** (ประวัติการจ่าย) ได้

### 3. Return (การรับคืนเวชภัณฑ์)

รับคืนเวชภัณฑ์ที่ใช้แล้วจากแผนกต่างๆ กลับเข้า CSSD เพื่อเข้าสู่กระบวนการทำให้ปลอดเชื้อ

### 4. In Process (กระบวนการทำให้ปลอดเชื้อ)

3 ขั้นตอนตามลำดับ:

| Step | Thai | Description |
|------|------|-------------|
| 1. Cleaning | ล้างทำความสะอาด | ล้างเครื่องมือที่ใช้แล้ว |
| 2. Packing | บรรจุหีบห่อ | บรรจุเครื่องมือลงในถุง/ห่อ |
| 3. Sterilization | ทำให้ปราศจากเชื้อ | นึ่งฆ่าเชื้อด้วยเครื่อง Autoclave |

## Key Features

- **Switch Location** — เปลี่ยนแผนกที่ทำงาน (เปลี่ยน department context) เพื่อดูข้อมูล/จัดการเวชภัณฑ์ของแผนกอื่น
- ระบบติดตามสถานะเวชภัณฑ์ตลอดวงจรการใช้งาน

## Integration Points

| Module | Integration |
|--------|-------------|
| [[OR]] | เครื่องมือผ่าตัด — Request OR, surgical instrument sets |
| All Wards | เวชภัณฑ์ปลอดเชื้อทั่วไป (sterile supplies) |
