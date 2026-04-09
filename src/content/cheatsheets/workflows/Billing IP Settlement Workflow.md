---
title: Billing IP Settlement Workflow
titleTh: ขั้นตอนการชำระค่ารักษาผู้ป่วยใน
type: workflow
sources: ["5.MEDHIS Manual_Billing V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, billing]
---

## Overview
ชำระค่ารักษา IPD ตั้งแต่ตรวจสอบค่าใช้จ่าย On Ward จนถึง Final Settlement หลัง Medical Discharge

## Steps
1. (การเงิน) IP Billing → Inpatient Expenses → ค้นหา HN/ชื่อ/Ward → ดูค่าใช้จ่ายปัจจุบัน
2. (การเงิน — Interim) IP Cashier Worklist → Lock ผู้ป่วย → กด Interim Bill → เลือก Payor → Settle → Print
3. (การเงิน — Final) หลัง Medical Discharge → IP Cashier Worklist → Tab Medical Discharges → Lock
4. (การเงิน) กด Allocate Bill → ตรวจสอบค่ารักษา → Modify Payor ถ้าจำเป็น
5. (การเงิน) Allocate All → เลือก Payor → Allocate → Auto Allocate
6. (การเงิน) Generate Bill → เลือก Payment Mode → Settle → Print
7. (การเงิน) ถ้ามีเงินมัดจำ: Use Deposit → เลือกรายการ → Apply → Settle

## Decision Points
- Interim Bill: ใช้เมื่อผู้ป่วยต้องชำระบางส่วนระหว่าง Admit ก่อน Discharge
- Final Settlement: รอจน Medical Discharge ก่อน; Lock → Allocate → Generate → Settle
- Use Deposit: ตรวจสอบ Available Deposit Amount ก่อน Apply

## Key Rules
- ยาที่สถานะ Ordered ยังค้างอยู่จะบล็อกการออกบิล
- Final Discharge ของ IPD ต้องรอ Financial Discharge เสร็จก่อน
- Cancel บิลได้ภายใน 24 ชม. เท่านั้น
- Split bill ได้ตาม Billing Group / Careprovider / Department

## Modules
IPD → Billing → Registration (Payor) → Pharmacy
