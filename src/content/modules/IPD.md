---
title: IPD — Inpatient Department Module
type: module
sources: ["7.MEDHIS_Manual_IPD V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [module, ipd, inpatient]
---

# IPD — ระบบงานผู้ป่วยใน (Inpatient Department)

## Purpose

ระบบบริหารผู้ป่วยในตั้งแต่รับเข้า Ward จนจำหน่ายออก ครอบคลุม Vital Signs, รับคำสั่งแพทย์, นัดหมาย, เก็บ Lab, ส่งปรึกษา, ย้ายเตียง, คืนยา และ 4-step Discharge

## Access

เมนูหลัก: **Inpatient → Ward Board / Nursing Worklist / Admission List**

## Key Screens

### [[Ward Board]]
หน้าจอหลักแสดงเตียงและผู้ป่วยใน Ward — ดู [[Bed Status]] สำหรับสถานะเตียง

### [[Nursing Worklist Screen]]
รายการคำสั่งแพทย์ทั้งหมด ค้นหาตาม Ward / Search Patients

**Group by** (6 แบบ):
| Group | Description |
|-------|-------------|
| Department | แผนก |
| Patient | ชื่อผู้ป่วย |
| Careprovider | แพทย์ |
| Order Category Type | ประเภทคำสั่ง |
| Status | สถานะ |
| Date | วันที่ |

## Key Workflows

### 1. Patient Arrive (รับผู้ป่วยเข้า Ward)
- [[Ward Board]] → เลือกผู้ป่วย → **Arrive** → YES
- สัญลักษณ์ Arrive หายไป → เริ่มบันทึกการรักษาในสถานะผู้ป่วยใน

### 2. Cancel Admission (ยกเลิกก่อน Arrive)
- Inpatient → Admission List → เลือกผู้ป่วย → **Cancel Admission** → ระบุเหตุผล → SAVE
- เตียงกลายเป็น Vacant Bed → จำกัดสิทธิ์บางตำแหน่ง

### 3. Vital Signs (สัญญาณชีพ)
- Visit Detail → **Charting** → OBSERVATION → Vital Sign Chart → บันทึก → Save

### 4. Nursing Worklist (รับคำสั่งแพทย์)
- Inpatient → [[Nursing Worklist Screen]] → เลือก order → Update → **Execute Order** → SAVE

### 5. Appointment (นัดหมาย)
- Ward Board → เลือกผู้ป่วย → **Appointment** → ระบุ Department/Careprovider/Date/Time
- เพิ่ม Future Orders ได้ → SAVE → Print บัตรนัด

### 6. Lab Specimen Collection
- Laboratory → Specimen Collection → Filter → เลือก Specimens → **Print Sticker** → **Collect Specimen** → ยืนยัน
- Status: Ordered → **Specimen Collected** → แสดงใน Tab COLLECTED

### 7. Consult (ส่งปรึกษา)
- ดูจาก Progress Notes
- Nursing Worklist → **IPD Consults** → Assign Careprovider ถ้าแพทย์ยังไม่ระบุ (Modify → ระบุชื่อ → SAVE)
- ประสานงานแผนกที่รับ Consult

### 8. Transfer (ย้ายเตียง/Ward)
- Ward Board → เลือกผู้ป่วย → **Transfer Request** → เลือก Ward/เตียง → SAVE
- ติดต่อแผนก [[Admission]] เพื่ออนุมัติ → Admission กด **TRANSFER**

### 9. Dispense Return (คืนยา)
- เลือกผู้ป่วย → **Dispense Return** → แสดงรายการยาทั้งหมด + จำนวนที่ใช้แล้ว
- เลือกรายการ → ระบุจำนวนคืนจาก Batches → SAVE
- ใช้กรณี: กลับบ้าน หรือแพทย์ยกเลิก order

### 10. [[IPD Discharge Process]] (จำหน่าย — 4 ขั้นตอน)

| Step | ผู้รับผิดชอบ | Action |
|------|-------------|--------|
| 1. Discharge Advice | แพทย์ | วางแผนวัน/เวลากลับบ้าน → SAVE |
| 2. Discharge Order | แพทย์ | คำสั่งกลับบ้าน, Discharge Summary, การวินิจฉัย → SAVE |
| 3. Medical Discharge | พยาบาล | คืนยา, Close Orders → บันทึก → ส่ง[[Billing|การเงิน]] |
| 4. Final Discharge | พยาบาล | SAVE ได้เมื่อ billing เสร็จ (สัญลักษณ์ "$") → ผู้ป่วยออกจาก Ward |

- **REVERT**: ยกเลิกสถานะในแต่ละขั้นตอนได้

## [[Bed Status]]

| Status | Display | Description |
|--------|---------|-------------|
| Vacant Bed | สีเขียว | เตียงว่าง |
| Occupied Bed | — | มีผู้ป่วย |
| Discharge Stage | — | อยู่ในขั้นตอนจำหน่าย |
| Under Maintenance | — | เตียงไม่พร้อมใช้งาน |

## Integration Points

| Module | Integration |
|--------|-------------|
| [[Admission]] | Admit สำเร็จ → แสดงใน Ward Board; Transfer ต้อง Admission อนุมัติ |
| [[OPD]] | Request Admission จาก OPD |
| [[ER]] | Referred to Admission จาก ER |
| [[Billing]] | Medical Discharge → IP Billing; Final Discharge ต้องรอ billing |
| [[LAB]] | Specimen Collection |
| [[Pharmacy]] | Dispense Return, Drug orders |
| [[EMR Doctor]] | แพทย์สั่ง orders ผ่าน EMR |
