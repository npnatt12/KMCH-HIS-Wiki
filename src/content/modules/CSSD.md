---
title: CSSD Module
type: module
sources: ["16.MEDHIS Manual_CSSD V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [module, cssd, sterilization, sterile-supply]
verified-on-uat: pending
---

# CSSD — ระบบเวชภัณฑ์ปลอดเชื้อ (Central Sterile Supply Department)

## Purpose

จัดการเวชภัณฑ์ปลอดเชื้อ — ครอบคลุมการขอเบิก การจ่าย การรับคืน และกระบวนการทำให้ปราศจากเชื้อ

## Access

เมนูหลัก: **CSSD**

> หมายเหตุ: ทุก step ต้องใช้ **Switch Location** เพื่อเลือกแผนกที่ทำงาน

---

## Lifecycle Overview

```
[แผนก] Request → [CSSD] Issue → [แผนก] ใช้งาน → [แผนก] Return → [CSSD] In Process
                                                                      ↓
                                                              1. Clean (ล้าง)
                                                              2. Pack (บรรจุ)
                                                              3. Sterilize (ฆ่าเชื้อ)
                                                                      ↓
                                                              [CSSD] พร้อมจ่ายอีกครั้ง
```

---

## 1. Request — การขอเบิกเวชภัณฑ์ปลอดเชื้อ

**ผู้ดำเนินการ:** แผนกที่ขอเบิก (switch location ไปที่แผนกของตน)

### [CSSD Request Screen](/entities/cssd-request-screen/) — Fields

| Field | Required | Description |
|-------|----------|-------------|
| Tray Master | ใช่ | ชื่อ Set เวชภัณฑ์ที่ต้องการ |
| Quantity | ใช่ | จำนวนที่ต้องการเบิก |
| Request Date | ใช่ | วันที่ทำการเบิก |
| Request Time | ใช่ | เวลาที่ทำการเบิก |
| Priority | ใช่ | สถานะความเร่งด่วน |
| Request Department | ใช่ | แผนกที่ทำการขอเบิก |
| Request OR | ไม่ | แผนก/ห้องที่ต้องการใช้เวชภัณฑ์ (เช่น OR) |
| Save | — | บันทึกคำขอ |

**ขั้นตอน:**
1. Switch Location → เลือกแผนกที่ขอเบิก
2. กด **Add** → กรอก Fields
3. กด **Save** → รายการแสดงในหน้าหลัก

---

## 2. Issue — การจ่ายเวชภัณฑ์ปลอดเชื้อ

**ผู้ดำเนินการ:** เจ้าหน้าที่หน่วย CSSD

1. Switch Location → เลือกแผนก CSSD
2. หน้าจอแสดงคำขอที่รอ Issue
3. กด **Issue** → ระบบแสดงรายการใน Tray Request
4. ค้นหาชุดเวชภัณฑ์จาก **Store**
5. เลือกชุดเวชภัณฑ์ → กด **Save** → ตัดจ่ายไปยังแผนกที่ขอ
6. ดูประวัติการเบิกจ่ายได้จาก History icon

### Issue Actions

| Action | Description |
|--------|-------------|
| Issue | ตัดจ่ายเวชภัณฑ์ตาม Request |
| History | ดูประวัติการเบิกจ่าย |

---

## 3. Return — การรับคืนเวชภัณฑ์

**ผู้ดำเนินการ:** แผนกที่คืนเวชภัณฑ์

1. Switch Location → เลือกแผนกที่คืน
2. เลือกรายการเวชภัณฑ์ที่ใช้แล้ว
3. กด Return → ระบบบันทึกการคืน
4. ถ้าต้องการล้างทำความสะอาดที่แผนก → เลือก Clean ที่หน้า Return ได้เลย
5. เวชภัณฑ์เข้าสู่ขั้นตอน In Process

---

## 4. In Process — กระบวนการทำให้ปลอดเชื้อ

**ผู้ดำเนินการ:** หน่วย CSSD

Switch Location → เลือกแผนก CSSD

### 3 ขั้นตอนตามลำดับ

| ขั้น | Step | Thai | Description |
|------|------|------|-------------|
| 4.1 | Clean | ล้างทำความสะอาด | ล้างเครื่องมือที่ใช้แล้ว |
| 4.2 | Pack | บรรจุหีบห่อ | บรรจุเครื่องมือลงในถุง/ห่อ |
| 4.3 | Sterilize | ทำให้ปราศจากเชื้อ | นึ่งฆ่าเชื้อด้วย Autoclave |

**ขั้นตอน:**
1. In Process → เลือก Clean → บันทึก
2. In Process → เลือก Pack → บันทึก
3. In Process → เลือก Sterilize → บันทึก
4. เวชภัณฑ์พร้อมจ่ายอีกครั้ง

---

## Key Features

| Feature | Description |
|---------|-------------|
| Switch Location | เปลี่ยนแผนกที่ทำงาน — ใช้ทุก step เพื่อดูข้อมูลของแผนกนั้นๆ |
| Tray Master | ชุดเครื่องมือปลอดเชื้อที่กำหนดไว้ล่วงหน้า |
| Request History | ดูประวัติการเบิกจ่ายย้อนหลัง |
| Priority tracking | ระบุความเร่งด่วนตั้งแต่ขั้น Request |

---

## Workflow

- [CSSD Request to Sterilize Workflow](/workflows/cssd-request-to-sterilize-workflow/) — Request → Issue → Return → Clean/Pack/Sterilize

## Entities

- [CSSD Request Screen](/entities/cssd-request-screen/) — หน้าจอขอเบิกเวชภัณฑ์ปลอดเชื้อ

## Permissions

| Action | Role |
|--------|------|
| Request | แผนกต่างๆ ที่ขอเบิก |
| Issue | เจ้าหน้าที่ CSSD |
| Return | แผนกที่คืน |
| In Process (Clean/Pack/Sterilize) | เจ้าหน้าที่ CSSD |

## Integration Points

| Module | Integration |
|--------|-------------|
| [OR](/modules/or/) | เครื่องมือผ่าตัด — Request OR field, surgical instrument sets |
| All Wards | เวชภัณฑ์ปลอดเชื้อทั่วไป (sterile supplies) |
| [Inventory](/modules/inventory/) | Tray master items อาจเชื่อมกับสต็อก |
