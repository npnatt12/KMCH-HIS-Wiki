---
title: Queue Management Module
type: module
sources: ["phase-4-uat-documents/1. MEDHIS/4. MEDHIS - เอกสารส่งมอบระบบ Queue.pdf"]
created: 2026-04-28
updated: 2026-04-28
tags: [module, queue, medhis, phase-4]
verified-on-uat: "2026-04-28"
---

# Queue Management — ระบบบริหารจัดการคิว

## Purpose

ระบบ [Queue Management](/modules/queue-management/) จัดลำดับและส่งต่อคิวผู้ป่วยตั้งแต่ลงทะเบียนจนสิ้นสุดการรับบริการ เพื่อลดเวลารอคอยและทำให้หน่วยงานบริการเห็นสถานะคิวแบบ Real-time.

## Scope

| Queue Area | Function |
|------------|----------|
| Registration Queue | สร้าง/ส่งต่อคิวจากการลงทะเบียนใน [Registration](/modules/registration/) |
| OPD Queue | ซักประวัติ, รอพบแพทย์, เรียกคิวเข้าห้องตรวจ, ส่งต่อหลังพบแพทย์ |
| ER Queue | จัดคิวผู้ป่วยฉุกเฉินตามความเร่งด่วน/triage |
| Pharmacy Queue | รอจัดยา, กำลังจ่าย, จ่ายแล้ว |
| Cashier Queue | รอชำระเงิน, เรียกคิวตามช่องบริการ |
| OR Queue | แสดงคิวผู้ป่วยนัดผ่าตัด |
| Queue Display | [Queue Dashboard](/entities/queue-dashboard/) สำหรับประชาสัมพันธ์หมายเลขคิวและช่องบริการ |
| Integration Module | เชื่อม Queue กับ MEDHIS โดยใช้ข้อมูลผู้ป่วย/VN |

## System Rules

| Rule | Description |
|------|-------------|
| Queue number | สร้างจากเลข 4 หลักสุดท้ายของ Visit Number (VN) |
| Department type OPD | ตั้งค่า Default Room ได้ เมื่อส่งคนไข้เข้าจุดบริการ ระบบ assign ห้องให้อัตโนมัติ |
| Login without room | เห็นคนไข้ทั้งหมดในแผนกนั้น |
| Login with room | เห็นเฉพาะคนไข้ในห้องที่เลือก |
| Call action | เมื่อเลือกห้องและกด Call ชื่อผู้ป่วยแสดงบน [Queue Dashboard](/entities/queue-dashboard/) ทันที |
| Forward point | สามารถกำหนดแผนกปลายทางที่ผู้ใช้แบบระบุห้องเห็นเมื่อกดส่งต่อ/เสร็จสิ้น |
| Worklist refresh | Worklist อัปเดตอัตโนมัติทุก 2 นาที |
| Dashboard refresh | Dashboard อัปเดตอัตโนมัติทุก 1 นาที |

## Core Screens

- [Queue Worklist Screen](/entities/queue-worklist-screen/) — เจ้าหน้าที่ดูรายการคิว เรียก พัก ส่งต่อ และจบคิว
- [Queue Dashboard](/entities/queue-dashboard/) — จอแสดงผลหมายเลขคิว สถานะ และช่องบริการแบบ Real-time

## Key Workflow

- [Queue Registration to Pharmacy Cashier Workflow](/workflows/queue-registration-to-pharmacy-cashier-workflow/)

## UAT Status

| Tested Function | Status |
|-----------------|--------|
| Dashboard by department | สำเร็จ |
| OR queue display | สำเร็จ |
| Emergency queue display | สำเร็จ |
| Registered queue management | สำเร็จ |
| Department call queue | สำเร็จ |
| Emergency call queue | สำเร็จ |
| Forward queue to next department | สำเร็จ |
| Department and room configuration | สำเร็จ |

## Integration Points

- [Registration](/modules/registration/) sends successful registrations to Queue.
- [OPD](/modules/opd/) and [EMR Doctor](/modules/emr-doctor/) use queue state for screening, report, doctor call, and after-doctor routing.
- [Pharmacy](/modules/pharmacy/) and [Billing](/modules/billing/) use queue state for medicine preparation/payment completion.
- [OR](/modules/or/) queue display supports scheduled surgery visibility.

## Error / Edge Cases

- ถ้าผู้ป่วยยังไม่พร้อมเข้ารับบริการ ให้พักคิวแล้วเรียกซ้ำภายหลัง
- ถ้าผู้ป่วยต้องรับบริการหลายแผนก ระบบต้องส่งต่อไปยังหน่วยงานถัดไปแทนการจบคิว
- ถ้า login แบบระบุห้องผิด ห้องที่เห็นบน Worklist และ Dashboard จะถูกจำกัดตามห้องนั้น

