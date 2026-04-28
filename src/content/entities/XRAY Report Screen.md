---
title: XRAY Report Screen
type: entity
sources: ["10.MEDHIS Manual_XRAY V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, xray, radiology, screen]
roles: [Doctor, XRayTech]
verified-on-uat: pending
---

# XRAY Report Screen — หน้าจอลงผลการอ่านทางรังสีวินิจฉัย

## Purpose

หน้าจอสำหรับ **รังสีแพทย์ (Radiologist) เท่านั้น** บันทึกผลการอ่านภาพถ่ายทางรังสี (Result) และผลการวินิจฉัย (Impression) พร้อม Template support และการดูผลเก่าเพื่อ Copy

## Access Path

**Radiology → Radiology Worklist → Tab INPROGRESS → เลือกรายการ (Status = Executed) → Report Entry**

> Role ต้องถูกกำหนดเป็น **Radiologist** ในระบบ — ผู้ที่ไม่มี Role นี้จะไม่เห็นปุ่ม Report Entry

## Fields

| Field | Type | Required | คำอธิบาย |
|-------|------|----------|---------|
| **Result** | Rich Text | Yes | ผลการอ่านภาพถ่ายทางรังสี (Radiology Reading) |
| **Impression** | Rich Text | Yes | ผลการวินิจฉัยทางรังสี |
| Template (panel ซ้าย) | Selection | No | เลือก Template ที่ตั้งค่าไว้ล่วงหน้า → Auto-fill Result + Impression |
| **Status** | Dropdown | Yes | ผลการอ่าน: Normal / Abnormal / None |
| PACS Viewer (button) | Link/Button | No | เปิดระบบดูภาพถ่ายรังสี PACS (ถ้ามีการเชื่อมต่อ) |

## Report Status Values

| Value | ความหมาย |
|-------|---------|
| **Normal** | ผลปกติ |
| **Abnormal** | ผลผิดปกติ |
| **None** | ไม่ต้องการระบุ |

## Layout Sections

```
[PACS Viewer button]   [Template list (ซ้าย)]   [Result field]
                                                  [Impression field]
                                                  [Status dropdown]
[Tab: Recent]
```

## Template Feature

1. เลือก Template จาก Panel ด้านซ้าย
2. ระบบแสดง Confirmation Popup
3. ตอบ **YES** → ระบบ Auto-fill ข้อมูลใน Result และ Impression ตาม Template
4. สามารถแก้ไขข้อความที่ Auto-fill ได้ก่อน Save

## Tab Recent (ผลเก่าของผู้ป่วย)

1. กด Tab **Recent** → แสดงผลการตรวจทางรังสีเก่าของผู้ป่วยรายเดียวกัน
2. เลือกรายการที่ต้องการดู → ระบบแสดงผลเก่า
3. เลือก:
   - กด **Copy Result** → Copy เฉพาะส่วน Result → ระบบแสดง Confirmation → ตอบ **YES**
   - กด **Copy All** → Copy ทั้ง Result และ Impression → ระบบแสดง Confirmation → ตอบ **YES**
4. ข้อมูลถูก Copy ลงในช่อง Result / Impression (แก้ไขได้ก่อน Save)

## Buttons

| Button | เงื่อนไข | ผลลัพธ์ |
|--------|---------|---------|
| **PACS Viewer** | มีการเชื่อมต่อ PACS | เปิดระบบภาพถ่ายรังสี |
| Template (เลือก) | มี Template ที่ตั้งค่าไว้ | แสดง Popup → YES → Auto-fill |
| Copy Result | อยู่ใน Tab Recent + เลือกรายการแล้ว | Copy เฉพาะ Result พร้อม Confirmation |
| Copy All | อยู่ใน Tab Recent + เลือกรายการแล้ว | Copy Result + Impression พร้อม Confirmation |
| **Save** | Result + Impression + Status กรอกครบ | Status → Report Entered |
| **Approve Result** | Status = Report Entered; Role = Radiologist | Status → Report Authorized; ผลส่งไป EMR |
| **Result View** | Status = Report Authorized | แสดงผลที่บันทึก |
| **Print Report** | Status = Report Authorized | พิมพ์รายงานทางรังสี |

## การแก้ไขผลหลังบันทึก

**ก่อน Approve Result:**
- กด **Report Entry** อีกครั้ง → เปิดหน้า Report Entry → แก้ไข → กด Save

**หลัง Approve Result:**
- ไม่มีฟีเจอร์ Reset ใน XRAY (ต่างจาก LAB ที่มี Reset Result)
- ต้องติดต่อ Admin หากต้องการแก้ไขหลัง Approve

## Related Workflows

- [XRAY Order to Report Workflow](/workflows/xray-order-to-report-workflow/) — ขั้นตอนที่ 4 (Report Entry) และ 5 (Approve)
- [XRAY](/modules/xray/) — ข้อมูลโมดูลรังสีวินิจฉัย
- [Lab and Radiology Order Status](/concepts/lab-and-radiology-order-status/) — สถานะ Radiology ทั้งหมด
