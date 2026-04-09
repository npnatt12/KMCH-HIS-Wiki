---
title: ANC Visit Workflow
titleTh: ขั้นตอนการฝากครรภ์
type: workflow
sources: ["8.MEDHIS Manual_ANC V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, anc]
---

## Overview
บันทึกข้อมูลฝากครรภ์ใน ANC module ตั้งแต่เปิด ANC Chart จนกด Save และปิด Cycle เมื่อครบกำหนด

## Steps
1. (แพทย์) เปิด EMR → คลิกเมนู ANC → ระบบแสดง ANC Chart
2. (แพทย์) ระบุ EDC Calculation Method: LMP / U/S / Manual → ระบบคำนวณ EDC, GA, Trimester อัตโนมัติ
3. (แพทย์) กด + เพิ่ม Delivery History แต่ละครั้ง (Delivery Date, Type, GA, Outcome)
4. (แพทย์) กรอก Obstetric Summary: Gravida, Para, Abortions, Still Birth ฯลฯ
5. (แพทย์) ระบุน้ำหนัก/ส่วนสูงก่อนตั้งครรภ์ → BMI คำนวณอัตโนมัติ
6. (แพทย์) Slide ปุ่ม Father Details → กรอกข้อมูลบิดา
7. (แพทย์) บันทึก Examination Record, Medical History, Outside Lab Panel (ถ้ามี)
8. (แพทย์) กด SAVE บันทึกทั้งหมด
9. (แพทย์) เมื่อฝากครรภ์ครบ → กด Completed → ข้อมูลย้ายไป PAST ANC CHART

## Decision Points
- EDC Method: LMP → คำนวณ EDC อัตโนมัติ | U/S หรือ Manual → ระบุ EDC เอง
- Cycle Completed: กด Completed เมื่อครบกำหนดฝากครรภ์เท่านั้น

## Key Rules
- EDC/GA/Trimester คำนวณอัตโนมัติเมื่อใช้ LMP; BMI คำนวณอัตโนมัติจาก Weight+Height
- Father Details ต้อง Slide เปิดก่อนจึงจะแสดง fields
- ดูผลตรวจจาก 3 tabs: LABORATORY / RADIOLOGY / PATHOLOGY
- Completed → ANC cycle ย้าย Past; สามารถดูได้จาก tab PAST ANC CHART

## Modules
EMR Doctor → ANC → LAB / XRAY → Labour and Newborn
