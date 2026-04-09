---
title: Inventory Transfer Request Workflow
titleTh: ขั้นตอนขอเบิกและโอน/ตัดจ่ายสินค้า
type: workflow
sources: ["14.MEDHIS Manual_Inventory V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, inventory]
---

## Overview
เบิกสินค้าจากคลัง 2 ประเภท: Transfer (โอนระหว่างคลัง) และ Issue (ตัดจ่ายไปแผนก) ตั้งแต่สร้างใบขอเบิกจนสถานะ Completed

## Steps
1. (เจ้าหน้าที่) Inventory → Stock Request → New (+) → เลือก Type: Transfer หรือ Issue
2. (เจ้าหน้าที่) ระบุ From Store + To Store (Transfer) หรือ From Dept + To Store (Issue) → เพิ่ม Items → Save
3. (ผู้อนุมัติ) Approve icon → เลือก Items → Approve → สถานะ Raised (หรือ Partially Raised)
4. (เจ้าหน้าที่) Stock Request → In → เลือก Raised → กด Transfer/Issue icon → ปรับ Qty → Save
5. (Transfer — คลังปลายทาง) Stock Transfer → เลือก Raised → Accept → เลือก Items → Accept → Completed
6. (Issue) Completed ทันทีหลัง Save; ไม่ต้อง Accept

## Decision Points
- Transfer ที่คลังปลายทางตั้งค่า Approval Required: ต้อง Accept → Completed
- Transfer ที่ไม่มีการตั้งค่า Approval: Raised → Completed ทันที
- โอนตรง (ไม่มีใบเบิก): Stock Transfer/Issue → New → กรอกข้อมูล → Save

## Key Rules
- Transfer Qty ต้องไม่เกิน Requested Qty
- Cancel ได้เฉพาะ Approval Required; Transfer ที่ Completed แล้วยกเลิกไม่ได้
- Issue Completed ทันที; Transfer อาจต้องรอ Accept จากคลังปลายทาง

## Modules
Inventory → (Pharmacy: Stock Transfer ระหว่าง Main Pharmacy และ Sub-stores)
