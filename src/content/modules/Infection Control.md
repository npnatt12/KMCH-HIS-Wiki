---
title: Infection Control Module
type: module
sources: ["phase-4-uat-documents/1. MEDHIS/2. MEDHIS - รายการเอกสารส่งมอบส่วนงาน IPD และ การสนับสนุนการใช้งานระบบจริง.pdf"]
created: 2026-04-28
updated: 2026-04-28
tags: [module, medhis, ipd, infection-control, phase-4]
verified-on-uat: "2026-04-28"
---

# Infection Control — ระบบแผนกควบคุมการติดเชื้อในโรงพยาบาล

## Purpose

ระบบ [Infection Control](/modules/infection-control/) เป็นขอบเขต MEDHIS Phase 4 สำหรับรวบรวมและบันทึกข้อมูลที่เกี่ยวข้องกับการติดเชื้อในโรงพยาบาล การเฝ้าระวัง ป้องกัน และควบคุมการแพร่กระจายของเชื้อในพื้นที่ผู้ป่วยใน.

## Scope From Phase 4

| Area | Description |
|------|-------------|
| Surveillance | รวบรวมข้อมูลการติดเชื้อในโรงพยาบาล |
| Control records | บันทึกข้อมูลเพื่อการป้องกันและควบคุมการแพร่กระจายของเชื้อ |
| IPD context | ใช้งานร่วมกับข้อมูลผู้ป่วยในและการดูแลใน Ward |
| UAT case | `BP-IC-001` กระบวนการบันทึกควบคุมการติดเชื้อในโรงพยาบาล |

## Related Modules

- [IPD](/modules/ipd/) — แหล่งบริบทผู้ป่วยใน
- [Admission](/modules/admission/) — การรับผู้ป่วยและข้อมูลหอผู้ป่วย
- [EMR Doctor](/modules/emr-doctor/) — ประวัติและข้อมูลการรักษา
- [Nursing Worklist Screen](/entities/nursing-worklist-screen/) — งานพยาบาลและการติดตามผู้ป่วย

## Evidence

เอกสารยืนยันกิจกรรมการฝึกอบรมและ UAT ของ MEDHIS Phase 4 ระบุผลของระบบงานแผนกควบคุมการติดเชื้อในโรงพยาบาลเป็น `ผ่าน`.

## Gaps / Follow-up

- เอกสาร Phase 4 ให้ขอบเขตและ UAT confirmation แต่ยังไม่มี field-level manual ของหน้าจอนี้.
- ควรเก็บหน้าจอจริงหรือคู่มือเพิ่มเติมในรอบ recon เพื่อสร้าง entity page เฉพาะหน้าจอ Infection Control.

