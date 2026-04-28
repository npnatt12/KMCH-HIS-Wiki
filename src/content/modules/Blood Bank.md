---
title: Blood Bank Module
type: module
sources: ["phase-4-uat-documents/1. MEDHIS/2. MEDHIS - รายการเอกสารส่งมอบส่วนงาน IPD และ การสนับสนุนการใช้งานระบบจริง.pdf"]
created: 2026-04-28
updated: 2026-04-28
tags: [module, medhis, ipd, blood-bank, phase-4]
verified-on-uat: "2026-04-28"
---

# Blood Bank — ระบบแผนกคลังเลือด

## Purpose

ระบบ [Blood Bank](/modules/blood-bank/) เป็นขอบเขต MEDHIS Phase 4 สำหรับบริหารจัดการเลือดและผลิตภัณฑ์เลือดในโรงพยาบาล ตั้งแต่รับเลือด ขอใช้เลือด ให้เลือด ยกเลิกการจอง และคืนเลือด.

## UAT Use Cases

| Use Case ID | Topic | Main User |
|-------------|-------|-----------|
| BP-BB-001 | กระบวนการรับเลือดเข้าธนาคารเลือด | NurseIPD |
| BP-BB-002 | กระบวนการขอใช้เลือด | NurseIPD |
| BP-BB-003 | กระบวนการให้เลือด | NurseIPD |
| BP-BB-004 | กระบวนการยกเลิกการจองเลือด | NurseIPD |
| BP-BB-005 | กระบวนการคืนเลือด | NurseIPD |

## Related Modules

- [IPD](/modules/ipd/) — บริบทผู้ป่วยในและ Ward
- [EMR Doctor](/modules/emr-doctor/) — คำสั่งและข้อมูลทางคลินิก
- [Order Entry](/modules/order-entry/) — คำสั่งการรักษาที่เกี่ยวข้อง
- [Billing](/modules/billing/) — ค่าใช้จ่ายและเอกสารการเงินถ้ามี

## Evidence

เอกสารยืนยันกิจกรรมการฝึกอบรมและ UAT ของ MEDHIS Phase 4 ระบุผลของระบบงานแผนกคลังเลือดเป็น `ผ่าน`.

## Gaps / Follow-up

- เอกสาร Phase 4 ยังไม่ให้รายละเอียด field/button/status ของหน้าจอ Blood Bank.
- ควรเพิ่ม source manual หรือ UAT screen capture ก่อนสร้าง workflow แบบ field-level.

