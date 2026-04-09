---
title: OR Surgery Request to Record Workflow
titleTh: กระบวนการห้องผ่าตัดตั้งแต่ Request ถึง Record
type: workflow
sources: ["11.MEDHIS Manual_OR V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, or]
---

## Overview
ส่ง Surgery Request จาก EMR หรือจอง OR Schedule โดยตรง → Confirm Booking → บันทึก OR Record → Recovery Room

## Steps
1. (แพทย์ — วิธีที่ 1) EMR → Referral → Tab Surgery → ระบุ Surgeon/Procedure/Date/Anesthesia → Save
2. (เจ้าหน้าที่ OR) Operating Room → Surgery Request List → เลือกผู้ป่วย → Book → OR Schedule
3. (เจ้าหน้าที่ OR — วิธีที่ 2) OR Schedule → คลิกช่องเวลา → กรอก ห้อง/วันที่/ทีม → Save → Booked
4. (เจ้าหน้าที่ OR) คลิก Slot → Confirm → สถานะ Confirmed
5. (ทีม OR — วันผ่าตัด) OR Worklist → คลิกผู้ป่วย → Upload Consent Form → Confirm Booking → OR Record
6. (ทีม OR) OR Record: ระบุ Timing (In/Out/Anesthesia Start-End/Procedure) + Team + Implants → Save
7. (พยาบาล Recovery) บันทึก Vital Signs + Order → จำหน่ายออกจาก Recovery Room

## Decision Points
- Surgery Request List: Book (จองตาราง) / Cancel (ยกเลิก) / Modify Demographic
- Reschedule: ทำได้เฉพาะสถานะ Booked; ต้องระบุเหตุผล
- Multi-Procedure: กด + เพิ่มชุด OR Record ได้ในการผ่าตัดเดียว

## Key Rules
- Status Flow: Surgery Request → Booked → Confirmed → Inprogress → Completed
- OR Record ดึงข้อมูลจาก Schedule มาล่วงหน้า; แก้ไขได้ก่อน Save
- Modality และ Radiologist บังคับกรอกก่อน Execute (เฉพาะ XRAY)
- eMAR Record ใช้บันทึกการให้ยาระหว่างผ่าตัด

## Modules
EMR Doctor → OR (Request/Schedule/Worklist/Record) → IPD / ER / Admission / Billing
