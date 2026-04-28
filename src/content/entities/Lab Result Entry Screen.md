---
title: Lab Result Entry Screen
type: entity
sources: ["9.MEDHIS Manual_LAB V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, lab, screen]
roles: [Doctor]
verified-on-uat: pending
---

# Lab Result Entry Screen — หน้าจอลงผลการทดสอบทางห้องปฏิบัติการ

## Purpose

หน้าจอสำหรับเจ้าหน้าที่ Lab บันทึกผลการทดสอบด้วยตนเอง (Manual Result) สำหรับรายการที่ไม่เชื่อมต่อกับ LIS (Laboratory Information System) รวมถึงการ Authorize ผลเพื่อส่งไปยัง EMR ของผู้ป่วย

## Access Path

**Laboratory → Lab Worklist → เลือกรายการ (Status = Specimen Accepted) → Manual Result**

## Fields

| Field | Type | Required | Validation | คำอธิบาย |
|-------|------|----------|------------|---------|
| **Value** | Text / Numeric | Yes | — | ผลการทดสอบที่ลงบันทึก |
| Normal Range | Display only | — | — | ค่าอ้างอิงปกติที่ระบบดึงอัตโนมัติ |
| **H Indicator** | Display only | — | ค่า > Normal Range | แสดงสีแดง + สัญลักษณ์ H |
| **L Indicator** | Display only | — | ค่า < Normal Range | แสดงสีแดง + สัญลักษณ์ L |
| **Comment** | Text | No | — | หมายเหตุเพิ่มเติมสำหรับผลการทดสอบ |
| **Modify Reason** | Dropdown | Yes (ถ้าแก้ไข) | — | เหตุผลในการแก้ไขผลที่บันทึกไปแล้ว |

## Abnormal Value Display

| สัญลักษณ์ | เงื่อนไข | การแสดงผล |
|-----------|---------|---------|
| **H** | ค่าสูงกว่า Normal Range บน | สีแดง + H |
| **L** | ค่าต่ำกว่า Normal Range ล่าง | สีแดง + L |
| (ว่าง) | ค่าอยู่ใน Normal Range | แสดงปกติ |

## Buttons

| Button | เงื่อนไข | ผลลัพธ์ |
|--------|---------|---------|
| **Save** | Value ต้องกรอก | Status → Report Entered |
| **Save** (กรณีแก้ไข) | Modify Reason ต้องเลือกก่อน | บันทึกค่าใหม่ (Status คงเป็น Report Entered) |

## Status Transitions ที่เกี่ยวข้อง

| จาก | ปุ่ม | ไปยัง |
|-----|-----|-------|
| Specimen Accepted | Manual Result → Save | **Report Entered** |
| Report Entered | Manual Result → Modify Reason → Save | Report Entered (updated) |
| Report Entered | Report Authorised | **Report Authorized** |
| Report Authorized | Reset Result | **Test Executed** |
| Test Executed | Manual Result → Save | **Report Entered** |

## การแก้ไขผลหลังบันทึก

**ก่อน Report Authorized:**
1. กด Manual Result → เปิดหน้าลงผลอีกครั้ง
2. เลือก **Modify Reason** (บังคับ)
3. แก้ไขค่าใน Value
4. กด Save

**หลัง Report Authorized:**
1. กด **Reset Result** → Status กลับเป็น Test Executed
2. กด Manual Result → ลงผลใหม่

## Related Workflows

- [Lab Order to Result](/workflows/lab-order-to-result/) — ขั้นตอนที่ 4: ลงผล และขั้นตอนที่ 5: รายงานผล
- [LAB](/modules/lab/) — ข้อมูลโมดูลห้องปฏิบัติการ
