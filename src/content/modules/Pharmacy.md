---
title: Pharmacy Module
type: module
sources: ["13.MEDHIS Manual_Pharmacy V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [module, pharmacy, dispensing, drug-alerts, medication]
verified-on-uat: pending
---

# Pharmacy — ระบบเภสัชกรรม

## Purpose

ตรวจสอบ จ่ายยา เติมยา คืนยา ติดตามสินค้า — ครอบคลุมกระบวนการเภสัชกรรมทั้งผู้ป่วยนอก (OP) และผู้ป่วยใน (IP)

## Access

เมนูหลัก: **Pharmacy Worklist**

## Key Screens

| Screen | Description |
|--------|-------------|
| [[entities/Pharmacy Dispensing Screen\|Pharmacy Dispensing Screen]] | Tab Dispensing — หน้าจอหลักจ่ายยา |
| OP Refills | เติมยาผู้ป่วยนอก ตามที่แพทย์กำหนดจำนวนครั้ง |
| IP Fill | จ่ายยา Continuous Order ผู้ป่วยใน (Daily/Continue) |
| Returns | Med Return (OP) + Dispensed Return (IP) |
| Manufacturing | ผลิตยาเตรียม + แบ่งบรรจุ (Repacking) |

## Main Workflow

```
Ordered → Registered → Allocated → Verified → Dispensed
```

Shortcut: **Allocate & Dispense** (รวมขั้นตอน Allocate + Verify + Dispense ทันที)

**สถานะพิเศษ:**
- **Partially Allocated** — Stock ไม่พอ จ่ายบางส่วน (พิมพ์ใบค้างยาได้)
- **Partially Dispensed** — IP Fill จ่ายบางรายการ

ดูกระบวนการครบถ้วนที่ [[workflows/Pharmacy Dispensing Workflow]]

## Drug Alerts (11 ประเภท)

แสดงทั้งตอนสั่งยา ([[modules/Order Entry]]) และตอนจ่ายยา (Pharmacy)

| # | Alert Type | Trigger Condition |
|---|-----------|------------------|
| 1 | Drug to Allergy | ผู้ป่วยมีประวัติแพ้ยา (Generic / Trade Name / Drug Group ที่บันทึกไว้) |
| 2 | High Alert Drug | รายการยาถูกกำหนดเป็น High Alert ตามนโยบายโรงพยาบาล |
| 3 | Drug Interaction | สั่งยาที่มีอันตรกิริยากับยาอื่นที่ผู้ป่วยได้รับ |
| 4 | Pregnancy Alert | สั่งยาในหญิงตั้งครรภ์ |
| 5 | Lactation Alert | สั่งยาในหญิงให้นมบุตร |
| 6 | Drug Use Evaluation (DUE) | ยาที่ต้องมีการติดตามหรือประเมินการใช้ (ต้องกรอก DUE Form) |
| 7 | Drug Dosage Limit | ขนาดยาเกินที่กำหนดไว้ในระบบ |
| 8 | Drug Investigation Interaction | ผลทางห้องปฏิบัติการมีผลต่อการใช้ยานั้น |
| 9 | Drug Duplicate | สั่งยาซ้ำ (รายการเดียวกัน / ชนิดเดียวกัน / กลุ่มเดียวกัน) |
| 10 | Drug-Diagnosis | ยาไม่สอดคล้องกับการวินิจฉัย |
| 11 | Drug-To-Diagnosis | ยาสำหรับการวินิจฉัยเฉพาะ |

เมื่อพบ Alert ระหว่าง Allocate → ต้องระบุ **เหตุผลในการพิจารณาจ่ายยา** ก่อน Save ดู [[entities/Drug Alert Popup]]

## Drug Allergy Recording (4 รูปแบบ)

| Type | การทำงาน |
|------|---------|
| **Generic Name** | แพ้ชื่อสามัญ — เตือนทุกยาที่มี Generic ตรงกัน |
| **Trade Name** | แพ้ชื่อการค้า — เตือนเฉพาะยา Code ตรงกัน |
| **Drug Group** | แพ้กลุ่มยา — เตือนทุกยาในกลุ่มนั้น |
| **Free Text** | บันทึกอิสระ — ไม่ผูกกับการสั่งยา (แสดงบน Banner เท่านั้น) |

เพิ่มเติม:
- **Severity** — ระดับความรุนแรงของอาการแพ้
- **Symptom** — อาการที่แพ้
- **Observed in Visit** — มีอาการแพ้ในวันที่ซักประวัติ
- **Naranjo Algorithm** — ประเมินความน่าจะเป็นของ ADR (ระบบคำนวณคะแนน + สรุป Confirmation อัตโนมัติ)
- **Closure Date** — ยกเลิกประวัติแพ้ยา → Status เปลี่ยนเป็น Inactive อัตโนมัติ
- ข้อมูลแพ้ยาแสดงบน [[entities/Patient Banner]]

## Med Reconciliation

บันทึกประวัติยาเดิมของผู้ป่วย (Tab Med Reconcile)

| Reconcile Status | ความหมาย |
|-----------------|---------|
| **Continue** | สั่งใช้ยาเดิมต่อ |
| **Change** | เปลี่ยนวิธีใช้ยา |
| **Discontinue** | หยุดใช้ยา |
| **Hold** | ระงับยาชั่วคราว |

ขั้นตอน: เพิ่มรายการยาเดิม → ระบุ Last Dosage Date Time → บันทึกด้วยรหัสผ่าน → แพทย์ Review → เลือก Status → Order ไปที่ Order Details

**POM flag:** กรณีอนุญาตให้ใช้ยาของผู้ป่วยเอง (ไม่ตัด Stock โรงพยาบาล)

## Alternative Items (ยาทดแทน)

ระบบแสดงยาทดแทนเมื่อ:
- ยาขาดคลาด (Out of Stock)
- ยาอยู่นอกสิทธิการรักษาของผู้ป่วย

| ตัวเลือก | ความหมาย |
|---------|---------|
| **Yes, Show All Alternative Items** | แสดงรายการทดแทนทั้งหมด |
| **Yes, Show Alternative Item Comply Payor** | แสดงเฉพาะที่ตรงสิทธิผู้ป่วย |
| **No** | ไม่แสดง |
| **Confirm** | ยืนยันสั่งยานอกสิทธิ |

รายการทดแทนมาจาก **Item Master** ของรายการยานั้น

## DUE — Drug Use Evaluation

- ระบุ DUE Form ไว้ที่ Order Item → Link กับ Checklist Form → กำหนดสิทธิ (Payor) ที่จะแสดงได้
- เมื่อแพทย์สั่งยา → ระบบแสดงฟอร์มให้กรอก
- เภสัชกรดูฟอร์มที่กรอกแล้วได้จาก Details ใน Pharmacy Worklist (อ่านอย่างเดียว — ไม่แก้ไขได้)

## Drug Information / Consultation (Information Form)

- ผู้ป่วยที่มา Visit: EMR → เลือกแบบฟอร์ม → บันทึก → บันทึกใน Clinical Note
- ผู้ป่วยที่ไม่มา Visit: OP Registration → Modify Demographics → Patient Form → บันทึก → เก็บใน Patient Form ของ Demographics

## IP Fill — รายละเอียด

- เฉพาะยาประเภท **Continuous Order** ที่ตั้ง Drug Master ว่าอนุญาต IP Fill
- Generate ได้ทั้งรายคนหรือทั้ง Ward
- กรณี Stock = 0 → ระบบ disable ปุ่ม Allocate Dispense → ต้องเติม Stock หรือยกเว้นรายการนั้น

## Manufacturing & Repacking

| ประเภท | Input / Output |
|--------|--------------|
| **Manufacturing** | ระบุ Output Item (ยาที่ต้องการผลิต) |
| **Repacking** | ระบุ Input Item (ยาที่นำมาแบ่งบรรจุ) |

- คำนวณจากสูตรตำรับใน Item Master
- ระบุ Additional Price กรณีมีต้นทุนเพิ่มเติม
- Status flow: Raised → Approve → Completed

## Stock & Inventory Features

| Feature | เข้าถึง |
|---------|--------|
| **View Expiring Items** | Inventory Mgmt → Stock Balance → Tab EXPIRED STOCKS |
| **Near Expiry** | Tab ACTIVE STOCKS → ระบุ "Expires Within X days" |
| **Stock Ledger** | Inventory Mgmt → Stock Ledger → Filter: Date/Store/Item |

Stock Ledger แสดง: DateTime, Transaction type, In/Out, User, Batch ID, Ref No., Weighted Average Cost, Total Value, QTY, Closing Stock

## Med Reject

เภสัชกรส่งใบสั่งยากลับไปยังแพทย์ → ระบุเหตุผล → กด Confirm
→ แพทย์ได้รับใน [[entities/Doctor Worklist Screen|Medicine Reject box]] บน Doctor Worklist

ดูกระบวนการครบที่ [[workflows/Pharmacy Med Reject Return Workflow]]

## Cancel Restrictions

**ไม่สามารถยกเลิกคำสั่งยา/การจ่ายยาได้เมื่อ Patient Status:**
- Medical Discharge
- [[modules/Billing|Billing]] In Progress
- Financial Discharge

→ ต้องให้เจ้าหน้าที่ที่เกี่ยวข้องเปลี่ยนสถานะก่อน

## View Drug History

- Pharmacy Worklist → click ใบยา → View EMR → Expand Summary → Medicine icon
- **Drug Profile**: ค้นหาจาก Drug Name, ดู Active drugs (สัญลักษณ์ active = ยังได้รับอยู่ตาม End date)

## View Lab Results (จาก Pharmacy)

- Pharmacy Worklist → click ใบยา → View EMR → Expand Summary → Laboratory icon
- **Lab Result tab** + **Cumulative View** (แสดงค่าตัวเลขเปรียบเทียบหลายครั้ง)

## Integration Points

| Module | Integration |
|--------|-------------|
| [[modules/EMR Doctor]] / [[modules/Order Entry]] | รับใบสั่งยาจากแพทย์ |
| [[modules/Billing]] | ตรวจสอบสถานะทางการเงินก่อนยกเลิก |
| [[modules/IPD]] | Dispensed Return, IP Fill |
| [[modules/Inventory]] | จัดการคลังสินค้ายา, Stock Ledger, GRNRET |
| [[modules/EMR Doctor]] | Medicine Reject → ตีกลับใบสั่งยาไปยังแพทย์ |
| [[modules/LAB]] | เภสัชกรดูผลตรวจ Lab จาก Pharmacy Worklist |
