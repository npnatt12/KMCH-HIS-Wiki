---
title: IPD Discharge Process
type: workflow
sources: ["7.MEDHIS_Manual_IPD V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [workflow, ipd, discharge, inpatient]
---

# ขั้นตอนจำหน่ายผู้ป่วยใน (IPD Discharge Process)

การจำหน่ายผู้ป่วยออกจาก [[IPD]] มี **4 ขั้นตอน** แบ่งความรับผิดชอบระหว่างแพทย์และพยาบาล

## 4 ขั้นตอน

### Step 1: Discharge Advice (แพทย์)

- [[Ward Board]] → เลือกผู้ป่วย → **Discharge Plan**
- แพทย์วางแผน **วันที่/เวลา** ที่ต้องการให้ผู้ป่วยกลับบ้าน
- กด **SAVE**

### Step 2: Discharge Order (แพทย์)

- ระบุ:
  - คำสั่งกลับบ้าน (Discharge orders)
  - **Discharge Summary**
  - การวินิจฉัยโรคก่อนกลับ (Discharge diagnosis)
- เปิดปุ่ม → กด **VIEW** เพื่อตรวจสอบ
- กด **SAVE**

### Step 3: Medical Discharge (พยาบาล)

- **คืนยา** ([[IPD|Dispense Return]]) ที่ไม่ได้ใช้
- ตรวจสอบ **Close Orders** ให้เสร็จสมบูรณ์
- บันทึกรายละเอียด Medical Discharge
- กด SAVE → ชื่อผู้ป่วยส่งไป[[Billing|ระบบการเงิน]] (IP Billing)

### Step 4: Final Discharge (พยาบาล)

- **รอ billing เสร็จ**: ระบบแสดงสัญลักษณ์ **"$"** เมื่อชำระเงินเรียบร้อย
- กรณียังไม่ชำระ → ปุ่ม SAVE กดไม่ได้
- เมื่อ "$" ปรากฏ → กด **SAVE** → ผู้ป่วยออกจาก Ward → เตียง [[Bed Status|Vacant]]

## REVERT (ยกเลิก)

สามารถกด **REVERT** เพื่อยกเลิกสถานะในแต่ละขั้นตอนได้ (ย้อนกลับไปขั้นตอนก่อนหน้า)

## Flow Diagram

```
แพทย์: Discharge Advice → Discharge Order
                                    ↓
พยาบาล: Medical Discharge → [รอ Billing "$"] → Final Discharge → เตียงว่าง
```

## Modules Involved

- [[IPD]] — Ward Board, Dispense Return
- [[Billing]] — IP Billing (ระหว่าง Step 3–4)
- [[Pharmacy]] — Dispense Return
- [[EMR Doctor]] — แพทย์บันทึก Discharge Summary/Orders
