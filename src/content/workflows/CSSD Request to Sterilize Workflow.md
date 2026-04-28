---
title: CSSD Request to Sterilize Workflow
type: workflow
sources: ["16.MEDHIS Manual_CSSD V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [workflow, cssd, sterilization, sterile-supply]
roles: [AdminSystem]
verified-on-uat: pending
---

# CSSD Request to Sterilize Workflow — ขั้นตอนขอเบิกถึงทำปลอดเชื้อ

## Overview

วงจรการจัดการเวชภัณฑ์ปลอดเชื้อทั้งหมด ตั้งแต่แผนกขอเบิก CSSD จ่าย ใช้งาน คืน จนถึงกระบวนการล้าง/บรรจุ/ฆ่าเชื้อ และพร้อมจ่ายอีกครั้ง

## Steps

### ขั้นที่ 1 — Request (แผนกขอเบิก)

**แผนกที่ต้องการใช้เวชภัณฑ์:**
1. CSSD → **Switch Location** → เลือกแผนกของตน
2. กด **Add** → กรอก [CSSD Request Screen](/entities/cssd-request-screen/):
   - Tray Master (ชื่อ Set)
   - Quantity
   - Request Date / Time
   - Priority
   - Request Department (อัตโนมัติตาม Switch Location)
   - Request OR (กรณีใช้ใน OR)
3. กด **Save** → คำขอปรากฏในหน้าหลัก

### ขั้นที่ 2 — Issue (CSSD จ่าย)

**เจ้าหน้าที่ CSSD:**
1. CSSD → **Switch Location** → เลือกแผนก CSSD
2. หน้าจอแสดงรายการ Request ที่รอ
3. กด **Issue** → ระบบแสดง Tray Request รายละเอียด
4. ค้นหาชุดเวชภัณฑ์จาก **Store** → เลือกชุด
5. กด **Save** → ตัดจ่ายไปยังแผนกที่ขอ
6. ดูประวัติ: กด History icon

### ขั้นที่ 3 — ใช้งาน (ที่แผนก)

แผนกรับเวชภัณฑ์ไปใช้งาน (นอกระบบ MEDHIS — ขั้นตอนทางคลินิก)

### ขั้นที่ 4 — Return (แผนกคืนเวชภัณฑ์)

**แผนกที่ใช้แล้ว:**
1. CSSD → **Switch Location** → เลือกแผนกที่คืน
2. เลือกรายการเวชภัณฑ์ที่ใช้แล้ว
3. กด **Return** → ระบบบันทึกการคืน
4. ถ้าต้องการล้างที่แผนก → เลือก Clean ได้จากหน้า Return

### ขั้นที่ 5 — In Process (CSSD ทำปลอดเชื้อ)

**เจ้าหน้าที่ CSSD:**
1. CSSD → **Switch Location** → เลือกแผนก CSSD
2. In Process → **4.1 Clean** (ล้างทำความสะอาด) → บันทึก
3. In Process → **4.2 Pack** (บรรจุหีบห่อ) → บันทึก
4. In Process → **4.3 Sterilize** (ทำให้ปราศจากเชื้อ) → บันทึก
5. เวชภัณฑ์กลับสู่ Store พร้อมจ่ายอีกครั้ง

## Status Flow

```
[แผนก] Request
       ↓
[CSSD] Issue → จ่าย Tray ไปแผนก
       ↓
[แผนก] ใช้งาน
       ↓
[แผนก] Return → คืน CSSD (อาจ Clean ที่แผนกก่อน)
       ↓
[CSSD] In Process:
       4.1 Clean → 4.2 Pack → 4.3 Sterilize
       ↓
[CSSD] Store — พร้อมจ่ายอีกครั้ง
```

## Modules Involved

- [CSSD](/modules/cssd/) — กระบวนการหลัก
- [OR](/modules/or/) — ใช้งานหลักสำหรับ surgical instruments (Request OR field)
- All Wards — เวชภัณฑ์ปลอดเชื้อทั่วไป

## Entities

- [CSSD Request Screen](/entities/cssd-request-screen/)

## Key Notes

- ทุกขั้นตอนต้องใช้ **Switch Location** ให้ถูกแผนก
- Priority ที่ Request จะช่วยให้ CSSD จัดลำดับการจ่าย
- ประวัติการเบิกจ่ายดูได้จาก History icon ในหน้า Issue
