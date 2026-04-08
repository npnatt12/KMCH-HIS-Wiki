---
title: Bed Status
type: concept
sources: ["7.MEDHIS_Manual_IPD V.1.docx", "6.MEDHIS Manual_Admission V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [concept, bed, ipd, admission]
---

# Bed Status (สถานะเตียง)

สถานะเตียงผู้ป่วยในระบบ [[IPD]] / [[Admission]]

## สถานะ

| Status | Display | Description |
|--------|---------|-------------|
| **Vacant Bed** | สีเขียว | เตียงว่าง พร้อมรับผู้ป่วยใหม่ |
| **Occupied Bed** | — | มีผู้ป่วยอยู่ |
| **Discharge Stage** | — | ผู้ป่วยอยู่ในขั้นตอนจำหน่าย ([[IPD Discharge Process]]) |
| **Under Maintenance** | — | เตียงไม่พร้อมใช้งาน |

## การเปลี่ยนสถานะ

- **Vacant → Occupied**: เมื่อ [[Admission]] สำเร็จ + พยาบาลกด Arrive
- **Occupied → Discharge Stage**: เมื่อเริ่ม [[IPD Discharge Process]]
- **Discharge Stage → Vacant**: เมื่อ Final Discharge เสร็จ
- **Occupied → Vacant**: เมื่อ Cancel Admission (ก่อน Arrive)

## ที่ใช้งาน

- [[Ward Board]] — แสดงสถานะเตียงทั้ง Ward
- [[Admission]] — Bed Selection ตอน Admit
