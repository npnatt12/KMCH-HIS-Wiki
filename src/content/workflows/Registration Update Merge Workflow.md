---
title: Registration Update Merge Workflow
type: workflow
sources: ["2.MEDHIS Manual_Registration V.2.docx", "1.MEDHIS Manual_MRD_V2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [workflow, registration, mrd, demographics, merge]
roles: [AdminSystem]
verified-on-uat: pending
---

# Registration Update Merge Workflow

## Overview

กระบวนการแก้ไขข้อมูลผู้ป่วย (Modify Demographics) และการรวมประวัติผู้ป่วยที่มี HN ซ้ำ (Patient Merge) โดยครอบคลุม 2 กระบวนการหลัก

---

## Part 1 — Modify Demographics (แก้ไขข้อมูลประวัติผู้ป่วย)

### Access Points

สามารถเข้าถึงได้จาก 3 จุด:
1. [[Registration]] → OP Registration → icon บนกล่องรายชื่อผู้ป่วย → **Modify Demographics**
2. [[OPD]] → OPD Worklist → icon บนกล่องรายชื่อผู้ป่วย → **Modify Demographics**
3. [[IPD]] → Ward Board → icon บนกล่องรายชื่อผู้ป่วย → **Modify Demographics**

### Steps

1. เข้าถึง Modify Demographics จาก module ที่ต้องการ
2. ระบบแสดงหน้า [[Patient Demographics Screen]] พร้อมข้อมูลผู้ป่วย
3. กดปุ่ม **ปลดล็อค** เพื่ออนุญาตให้แก้ไขข้อมูล
4. แก้ไขข้อมูลที่ต้องการใน [[Patient Demographics Screen]]
5. กด **Save** เพื่อบันทึก

> **หมายเหตุ:** การเข้าถึงข้อมูลผู้ป่วยขึ้นอยู่กับสิทธิ์การเข้าถึงของผู้ใช้งาน

### Conditions / Triggers

| Condition | Action |
|-----------|--------|
| ข้อมูลไม่ได้อัปเดทเกิน 6 เดือน | ระบบแสดง Pop-up เตือนให้อัปเดท |
| ต้องการแก้ Basic Details | ต้องกดปลดล็อคก่อน |

### Modules Involved

- [[Registration]] — จุดหลักสำหรับ Modify Demographics
- [[OPD]] — เข้าจาก OPD Worklist
- [[IPD]] — เข้าจาก Ward Board

---

## Part 2 — Patient Merge (การรวมประวัติผู้ป่วย)

### Overview

รวม HN ที่ซ้ำซ้อน — กรณีผู้ป่วยมี 2 HN หรือมีข้อมูล Demographic เหมือนกัน ให้เหลือ 1 HN

**Navigation:** [[MRD]] → Patient Merge

### Steps

1. กดปุ่ม **New Merge** (เลือก icon) เพื่อเริ่มกระบวนการรวมแฟ้ม

2. **ระบุ Primary Patient** — ค้นหาผู้ป่วยหลัก:
   - ใส่ HN หรือชื่อผู้ป่วยที่ต้องการให้เป็น HN หลัก (คงไว้)

3. **ระบุ Secondary Patient** — ค้นหาผู้ป่วยรอง:
   - ใส่ HN หรือชื่อผู้ป่วยที่มีข้อมูลซ้ำซ้อน (จะถูกรวมเข้าหาหลัก)

4. **Merge all visit toggle:**
   - **เปิด:** รวมทุก Visit จาก Secondary ไปที่ Primary
   - **ปิด:** เลือกเฉพาะบาง Visit ที่ต้องการรวม

5. ระบุ **Reason** — เหตุผลในการรวมแฟ้ม

6. กด **Confirm** → ระบบแสดงกล่องยืนยัน

7. กด **Yes** → ระบบทำการรวมประวัติ

### Unmerge (ยกเลิกการรวม)

1. ค้นหารายการที่ทำการรวมแฟ้มไปแล้ว
2. กด **UNMERGE**
3. ระบบยกเลิกการรวม กลับสู่ 2 HN เดิม

### Fields

| Field | Required | Description |
|-------|----------|-------------|
| Primary Patient | Yes | HN / ชื่อผู้ป่วยหลัก — HN ที่จะคงไว้ |
| Secondary Patient | Yes | HN / ชื่อผู้ป่วยรอง — จะถูกรวมเข้าหลัก |
| Merge all visit | | Toggle เปิด/ปิด |
| Reason | Yes | เหตุผลการรวมแฟ้ม |

### Rules

- Primary HN = HN ที่คงไว้หลัง Merge
- Secondary HN = HN ที่จะถูกรวมเข้าหา Primary
- ข้อมูล Visit, Orders, ประวัติต่างๆ จาก Secondary จะย้ายมา Primary
- รองรับ Unmerge หากต้องการยกเลิก

### Modules Involved

- [[MRD]] — Patient Merge menu
- [[Registration]] — ข้อมูล Demographic

---

## Error / Edge Cases

- **ไม่ระบุ Reason:** ไม่สามารถ Confirm ได้
- **ระบุ Primary = Secondary:** ระบบไม่อนุญาต
- **Merge ผิด:** ใช้ UNMERGE เพื่อยกเลิก
