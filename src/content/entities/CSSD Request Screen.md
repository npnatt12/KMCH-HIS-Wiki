---
title: CSSD Request Screen
type: entity
sources: ["16.MEDHIS Manual_CSSD V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, cssd, sterilization, screen]
---

# CSSD Request Screen — หน้าจอขอเบิกเวชภัณฑ์ปลอดเชื้อ

## Purpose

หน้าจอสำหรับแผนกต่างๆ ขอเบิกเวชภัณฑ์ปลอดเชื้อ (Sterile Supply) จากหน่วย CSSD

## Access Path

**CSSD** → (Switch Location → เลือกแผนกที่ขอเบิก) → หน้าหลัก CSSD → Add

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Tray Master | Search/Dropdown | ใช่ | ชื่อ Set เวชภัณฑ์ปลอดเชื้อที่ต้องการ |
| Quantity | Number | ใช่ | จำนวน Set ที่ต้องการเบิก |
| Request Date | Date | ใช่ | วันที่ทำการขอเบิก |
| Request Time | Time | ใช่ | เวลาที่ทำการขอเบิก |
| Priority | Dropdown | ใช่ | ระดับความเร่งด่วน |
| Request Department | Display/Dropdown | ใช่ | แผนกที่ทำการขอเบิก (ตาม Switch Location) |
| Request OR | Dropdown | ไม่ | ห้องผ่าตัด/แผนกที่ต้องการใช้งาน |
| Save | Button | — | บันทึกคำขอ |

## Buttons

| Button | Action | Conditions | Result |
|--------|--------|------------|--------|
| Switch Location | เปลี่ยนแผนกที่ทำงาน | ก่อนทุก action | เปลี่ยน context แผนก |
| Add | เพิ่มรายการขอเบิก | หน้าหลัก | เปิดฟอร์มกรอกข้อมูล |
| Save | บันทึก | กรอกครบ | สร้างคำขอในระบบ |

## Post-Save

หลัง Save รายการแสดงในหน้าหลัก CSSD พร้อมสถานะรอ Issue จาก CSSD

## Related Workflows

- [[CSSD Request to Sterilize Workflow]]
