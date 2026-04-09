---
title: Inventory Transfer Request Workflow
type: workflow
sources: ["14.MEDHIS Manual_Inventory V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [workflow, inventory, transfer, stock-request]
---

# Inventory Transfer Request Workflow — ขั้นตอนขอเบิกและโอน/ตัดจ่ายสินค้า

## Overview

กระบวนการเบิกสินค้าจากคลัง ครอบคลุม 2 ประเภท: Transfer (โอนระหว่างคลัง) และ Issue (ตัดจ่ายไปแผนก) ตั้งแต่การสร้างใบขอเบิกจนถึง Completed

## Steps

### ขั้นที่ 1 — สร้างใบขอเบิก (Stock Request)

Inventory Management → Stock Request → กด **New (+)**

**กรณี Transfer:**
- Type = Transfer
- Request from Store = คลังต้นทาง
- Request to Store = คลังปลายทาง
- เพิ่ม Items (ค้นหาจาก Item Master / Reorder Level / Stock Moving Items)

**กรณี Issue:**
- Type = Issue
- From Department = แผนกที่ขอ
- Request to Store = คลังที่จ่าย
- เพิ่ม Items

→ กด **Save** → สถานะ **Approval Required**

### ขั้นที่ 2 — Approve ใบขอเบิก

- เลือก Approve icon → เลือกรายการ Item → ใส่ Approve Comments
- กด **Approve** → สถานะ Item เปลี่ยนเป็น **Raised**
- ผู้อนุมัติสามารถ Approve บางส่วน → สถานะเป็น **Partially Raised**

### ขั้นที่ 3 — โอน/ตัดจ่ายสินค้า

**จาก Stock Request (มีใบเบิก):**
1. Stock Request → กด **In** → เลือกรายการ Status = Raised
2. กด **Stock Transfer/Issue** icon
3. ปรับ Transfer Qty (น้อยกว่า Request ได้ แต่ไม่มากกว่า)
4. กด **Save** → แสดงเลขที่ Transfer/Issue

**โดยตรง (ไม่มีใบเบิก):**
1. Stock Transfer/Issue → กด **New (+)**
2. กรอก From Store + To Store (Transfer) หรือ From Store + To Department (Issue)
3. เพิ่ม Items + Transfer QTY
4. กด **Save**

### ขั้นที่ 4 — Accept (Transfer เท่านั้น)

**กรณีคลังปลายทางตั้งค่า Approval Required Transfer In:**
1. Stock Transfer/Issue → เลือกรายการ Status = Raised
2. กด **Accept** → เลือก Items → ใส่ Approve Comment
3. กด **Accept** → สถานะเปลี่ยนเป็น **Completed**

**ถ้าไม่ตั้งค่า Approval Required Transfer In:**
- สถานะเป็น Completed ทันทีหลัง Save

> หมายเหตุ: Issue ไม่ต้อง Accept — Completed ทันที

### ขั้นที่ 5 — ยกเลิก (ถ้าจำเป็น)

- Cancel ได้เฉพาะ Approval Required (ยังไม่ Approve)
- Transfer ที่ยังไม่ Accept สามารถ Cancel ได้
- Transfer/Issue ที่ Completed แล้ว ไม่สามารถ Cancel ได้

## Status Flow

```
Stock Request:
  Approval Required → Raise (Approve) → Raised
  Raised → Transfer/Issue → Partially Raised (บางส่วน) / Completed (ครบ)
  Approval Required → Cancel → Cancelled

Stock Transfer:
  [New] → Save → Raised → Accept → Completed
  (ถ้าไม่มี Approval Required Transfer In: Raised → Completed ทันที)

Stock Issue:
  [New] → Save → Completed
```

## Modules Involved

- [[Inventory]] — กระบวนการหลัก
- [[Pharmacy]] — คลังยา — Stock Transfer ระหว่าง Main Pharmacy และ Sub-stores

## Entities

- [[Inventory Transfer Screen]]
