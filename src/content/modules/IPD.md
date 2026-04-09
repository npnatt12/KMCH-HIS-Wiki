---
title: IPD — Inpatient Department Module
type: module
sources: ["7.MEDHIS_Manual_IPD V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
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

**Action Icons บน Ward Board:**

| Icon | Action | คำอธิบาย |
|------|--------|----------|
| **Arrive** | รับผู้ป่วยเข้า Ward | กด YES เพื่อยืนยัน สัญลักษณ์ Arrive หายไปหลังยืนยัน |
| **Charting** | บันทึก Vital Signs | → Charting → OBSERVATION → Vital Sign Chart |
| **Appointment** | ทำนัดหมาย | ระบุ Department/Careprovider/Date/Time + Future Orders |
| **Transfer Request** | ขอย้ายเตียง/Ward | ต้องรอ [[Admission]] อนุมัติ |
| **Dispense Return** | คืนยา | แสดงรายการยา + จำนวนที่ใช้แล้ว |
| **Discharge Plan** | เริ่มกระบวนการจำหน่าย | เปิด Discharge Plan 4 ขั้นตอน |

### [[Nursing Worklist Screen]]
รายการคำสั่งแพทย์ทั้งหมด ค้นหาตาม Ward / Search Patients

**Group by** (6 แบบ):
| Group | Description |
|-------|-------------|
| Department | จัดเรียงตามแผนก |
| Patient | จัดเรียงตามชื่อผู้ป่วย |
| Careprovider | จัดเรียงตามแพทย์ |
| Order Category Type | จัดเรียงตามประเภทคำสั่ง |
| Status | จัดเรียงตามสถานะ |
| Date | จัดเรียงตามวันที่ |

**การรับคำสั่งแพทย์ (Execute Order):**
1. Inpatient → Nursing Worklist
2. เลือก Ward หรือค้นหาจาก Search Patients → SEARCH
3. กดเลือก Task → เลือก Order รายการที่ต้องการ
4. กด **Update** เพื่อดูรายละเอียด
5. กด **Execute Order** → SAVE

**IPD Consults (รับ Order ส่งปรึกษา):**
- Nursing Worklist → เลือก **IPD Consults**
- หากแพทย์ยังไม่ระบุผู้รับ Consult: กด **Modify** → ระบุ Careprovider → SAVE
- ประสานงานติดต่อแพทย์และส่งเวร

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

### 8. [[IPD Transfer Between Wards Workflow|Transfer]] (ย้ายเตียง/Ward)
- [[Ward Board]] → เลือกผู้ป่วย → **Transfer Request** → เลือก Ward/เตียง → SAVE
- ติดต่อแผนก [[Admission]] เพื่ออนุมัติ → Admission กด **TRANSFER**
- ดู [[IPD Transfer Screen]] สำหรับรายละเอียดหน้าจอ

### 9. Dispense Return (คืนยา)
- เลือกผู้ป่วย → **Dispense Return** → แสดงรายการยาทั้งหมด + จำนวนที่ใช้แล้ว
- เลือกรายการ → ระบุจำนวนคืนจาก Batches → SAVE
- ใช้กรณี: กลับบ้าน หรือแพทย์ยกเลิก order

### 10. [[IPD Discharge Process]] (จำหน่าย — 4 ขั้นตอน)

**Dispense Return ก่อน Discharge:**
- เลือกผู้ป่วย → **Dispense Return** → เลือกรายการ → ระบุจำนวนจาก Batches → SAVE

| Step | ผู้รับผิดชอบ | Action |
|------|-------------|--------|
| 1. Discharge Advice | แพทย์ | วางแผนวัน/เวลากลับบ้าน → SAVE |
| 2. Discharge Order | แพทย์ | คำสั่งกลับบ้าน, Discharge Summary, การวินิจฉัย → SAVE |
| 3. Medical Discharge | พยาบาล | คืนยา, Close Orders → บันทึก → ส่ง[[Billing|การเงิน]] |
| 4. Final Discharge | พยาบาล | SAVE ได้เมื่อ billing เสร็จ (สัญลักษณ์ "$") → ผู้ป่วยออกจาก Ward |

- **REVERT**: ยกเลิกสถานะในแต่ละขั้นตอนได้

## Button Actions

| Button | Action | Conditions | Result |
|--------|--------|------------|--------|
| **Arrive** | รับผู้ป่วยเข้า Ward | ผู้ป่วยอยู่ในสถานะรอรับ | สัญลักษณ์ Arrive หายไป เริ่มดูแลได้ |
| **Cancel Admission** | ยกเลิก Admit | ก่อนกด Arrive เท่านั้น | เตียงกลาย Vacant ทันที |
| **Charting → Save** | บันทึก Vital Signs | ระบุค่าครบ | บันทึกลงระบบ |
| **Execute Order → SAVE** | รับ Order แพทย์ | Order ยัง Active | สถานะ Order อัปเดต |
| **Modify** (Consult) | กำหนดแพทย์รับ Consult | Consult ยังไม่ assign แพทย์ | ระบุ Careprovider |
| **Transfer Request → SAVE** | ส่งคำร้องย้าย | — | Admission รอยืนยัน |
| **Dispense Return → SAVE** | คืนยา | ระบุจำนวนยาคืน | บันทึกการคืนยา |
| **Discharge Plan → SAVE** | บันทึกแต่ละขั้น Discharge | ตามเงื่อนไขแต่ละ Step | ส่งต่อ Step ถัดไป |
| **REVERT** | ยกเลิกขั้นตอน Discharge | ทำได้ทุก Step | ย้อนกลับ Step ก่อนหน้า |
| **Print บัตรนัด** | พิมพ์บัตรนัดผู้ป่วย | หลัง Appointment บันทึกแล้ว | พิมพ์บัตรนัด |

## Permissions

| Action | Roles | Notes |
|--------|-------|-------|
| กด Arrive | พยาบาล/เจ้าหน้าที่ Ward | ทำจาก Ward Board |
| Cancel Admission | **จำกัดสิทธิ์บางตำแหน่งเท่านั้น** | config ระดับระบบ |
| บันทึก Vital Signs | พยาบาล/เจ้าหน้าที่ Ward | จาก Charting |
| Execute Order | พยาบาล | จาก Nursing Worklist |
| Transfer Request | พยาบาล/เจ้าหน้าที่ Ward | ส่งขอ Admission อนุมัติ |
| อนุมัติ Transfer (กด TRANSFER) | เจ้าหน้าที่ Admission | ที่แผนก Admission |
| Discharge Advice + Order (Step 1–2) | แพทย์ | จาก EMR / Ward Board |
| Medical Discharge + Final Discharge (Step 3–4) | พยาบาล/เจ้าหน้าที่ Ward | ต้องคืนยาและรอ billing ก่อน |

## Error / Edge Cases

- **Arrive แล้ว Cancel ไม่ได้**: หลังกด Arrive ต้องผ่าน Discharge Process เท่านั้น
- **Final Discharge กด SAVE ไม่ได้**: ต้องรอสัญลักษณ์ "$" (billing ชำระเสร็จ) จาก [[Billing]]
- **Transfer ต้องรอ Admission**: Ward เองย้ายไม่ได้โดยตรง ต้องให้แผนก Admission อนุมัติ
- **Consult ไม่มีแพทย์**: พยาบาลต้อง Assign Careprovider เองจาก Nursing Worklist → Modify
- **Appointment ที่มี Follow-up Order**: ต้องเปิด Add Future Orders ด้วย

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
