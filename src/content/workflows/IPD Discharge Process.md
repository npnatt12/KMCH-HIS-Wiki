---
title: IPD Discharge Process
type: workflow
sources: ["7.MEDHIS_Manual_IPD V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [workflow, ipd, discharge, inpatient]
roles: [NurseIPD]
verified-on-uat: pending
---

# ขั้นตอนจำหน่ายผู้ป่วยใน (IPD Discharge Process)

## Overview

การจำหน่ายผู้ป่วยออกจาก [[IPD]] มี **4 ขั้นตอน** แบ่งความรับผิดชอบระหว่างแพทย์ (Step 1–2) และพยาบาล/เจ้าหน้าที่ (Step 3–4)

## ผู้รับผิดชอบแต่ละขั้นตอน

| Step | ผู้รับผิดชอบ | การรอ |
|------|-------------|-------|
| Step 1 | แพทย์ | — |
| Step 2 | แพทย์ | — |
| Step 3 | พยาบาล/เจ้าหน้าที่ | ต้องคืนยา + Close Orders ก่อน |
| Step 4 | พยาบาล/เจ้าหน้าที่ | ต้องรอ Billing ชำระเสร็จ ("$") |

## 4 ขั้นตอน (Steps)

### Step 1: Discharge Advice (แพทย์)

**Access:** [[Ward Board]] → เลือกผู้ป่วย → **Discharge Plan**

1. ระบบแสดงหน้าจอ **Discharge Plan**
2. แพทย์กรอก **วันที่/เวลา** ที่ต้องการให้ผู้ป่วยกลับบ้าน
3. กด **SAVE**

### Step 2: Discharge Order (แพทย์)

1. แพทย์ระบุรายละเอียดคำสั่งกลับบ้าน:
   - **คำสั่งกลับบ้าน** (Discharge orders)
   - **Discharge Summary**
   - **การวินิจฉัยโรคก่อนกลับ** (Discharge diagnosis)
2. เปิดปุ่ม → กด **VIEW** เพื่อตรวจสอบข้อมูลครบถ้วน
3. กด **SAVE**

### Step 3: Medical Discharge (พยาบาล)

**ก่อน SAVE ต้องทำ:**
1. **คืนยา** ([[IPD|Dispense Return]]): เลือกผู้ป่วย → Dispense Return → เลือกรายการยา → ระบุจำนวน (Batches) → SAVE
2. **ตรวจสอบ Close Orders**: ปิด Orders ที่ยังค้างอยู่ให้เสร็จสมบูรณ์
3. บันทึกรายละเอียด **Medical Discharge**
4. กด **SAVE** → ชื่อผู้ป่วยส่งไป[[Billing|ระบบการเงิน]] (IP Billing) เพื่อรอกระบวนการชำระเงิน

### Step 4: Final Discharge (พยาบาล)

1. **รอ Billing**: ระบบแสดงสัญลักษณ์ **"$"** เมื่อผู้ป่วย/ญาติชำระเงินเรียบร้อย และ/หรือรับยากลับบ้านแล้ว
2. **กรณียังไม่ชำระ**: ปุ่ม SAVE ยังกดไม่ได้
3. เมื่อ **"$"** ปรากฏ → กด **SAVE**
4. ชื่อผู้ป่วยออกจาก Ward → เตียงกลายเป็น [[Bed Status|Vacant Bed]]

## REVERT (ยกเลิก/ย้อนกลับ)

- สามารถกด **REVERT** ที่ขั้นตอนใดก็ได้ เพื่อยกเลิกสถานะ Discharge ในขั้นนั้น
- ระบบย้อนกลับไปขั้นตอนก่อนหน้าได้ทุก Step

## Flow Diagram

```
แพทย์: [Step 1] Discharge Advice → [Step 2] Discharge Order
                                                    ↓
พยาบาล: [Step 3] Medical Discharge (คืนยา + Close Orders) → IP Billing
                                                                    ↓ รอ "$"
                    [Step 4] Final Discharge (SAVE) → เตียงว่าง
```

## Modules Involved

- [[IPD]] — [[Ward Board]] (Discharge Plan), Dispense Return
- [[Billing]] — IP Billing (ส่งจาก Step 3, ยืนยันที่ Step 4)
- [[Pharmacy]] — Dispense Return (คืนยาก่อน Step 3)
- [[EMR Doctor]] — แพทย์บันทึก Discharge Summary/Orders (Step 2)
