---
title: Payor and Treatment Rights
type: concept
sources: ["2.MEDHIS Manual_Registration V.2.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [concept, payor, billing, insurance, rights]
---

# Payor and Treatment Rights (สิทธิการรักษาพยาบาล)

ระบบจัดการสิทธิการรักษาและการเรียกเก็บค่ารักษาพยาบาลในแต่ละ visit

## Payor Details

ทุก visit จะมี Payor Details ซึ่งกำหนดสิทธิการรักษา:

- **SELFPAY** — ระบบเพิ่มให้อัตโนมัติเป็น **Rank 2** ทุก visit
- สามารถเพิ่มสิทธิการรักษาอื่นๆ ได้ (กดปุ่ม +)
- ระบุ: **Payor**, **Agreement**, **Payor Office**
- ระบบดึงข้อมูลที่เกี่ยวข้องกับ Payor มาแสดงอัตโนมัติ
- สามารถกำหนด **Guarantee Letter** ได้

## Payor Ranking

ลำดับ Rank กำหนดว่าระบบจะพิจารณาเรียกเก็บจากสิทธิใดก่อน:
- Rank 1 — สิทธิหลัก (เช่น ประกันสังคม, สปสช.)
- Rank 2 — SELFPAY (default)
- สามารถจัดเรียง Rank ได้ตามต้องการ

## Copy Payor จาก Visit เก่า

ผู้ป่วยเก่าสามารถ Copy สิทธิการรักษาจาก visit เก่าได้:
- กดปุ่ม Copy → เลือก Checkbox ของ Payor ที่ต้องการ

## [[NHSO Authentication|สปสช. (NHSO) Authentication]]

ตรวจสอบสิทธิการรักษาออนไลน์ผ่านระบบ สปสช.:
1. ระบุเลขบัตรประชาชนใน Basic Details
2. กดปุ่มเช็คสิทธิ
3. ระบบแสดงรายละเอียดสิทธิ
4. เลือกสิทธิ → ระบบระบุให้อัตโนมัติใน Payor Details

## ที่ใช้งาน

- [[Registration]] — Payor Details section ใน [[Patient Demographics Screen]]
- [[Billing]] — ใช้ Payor Details ในการคำนวณค่ารักษา
