---
title: Drug Alert Popup
type: entity
sources: ["18.MEDHIS Manual_Order V.2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, order, pharmacy, drug-safety, alert, popup]
roles: [Doctor, Pharmacist]
verified-on-uat: pending
---

# Drug Alert Popup — ป๊อปอัปแจ้งเตือนยา

## Purpose

แสดงคำเตือนอัตโนมัติเมื่อแพทย์สั่งยาที่มีความเสี่ยงหรือข้อบ่งชี้พิเศษ — ระบบแสดง Icon ในคอลัมน์ **Alert** บนหน้าจอ Order และสามารถคลิกดูรายละเอียดได้

## Access Path

**Order Entry Screen** → คอลัมน์ Alert → คลิก Icon → Popup รายละเอียด

---

## Drug Alert Types (11 ประเภท)

| # | Alert Name | สัญลักษณ์ | เงื่อนไขที่ระบบแสดง | ข้อมูลใน Popup |
|---|-----------|----------|-----------------|--------------|
| 1 | Drug History | 📋 | มีประวัติการใช้ยานั้น | ประวัติสั่งยา/จ่ายยา/บริหารยา |
| 2 | Allergy Alert | ⚠️ | ผู้ป่วยมีประวัติแพ้ยานั้น | ระดับความแรงการแพ้ + เหตุผลในการสั่ง |
| 3 | High Alert Drug | 🔴 | รายการยา High Alert | แจ้งเตือนยา High Alert |
| 4 | Drug Interaction | ⚡ | ยามีอันตรกิริยากับยาอื่นที่สั่ง | ระดับความแรงอันตรกิริยา + เหตุผล |
| 5 | Pregnancy Alert | 🤰 | ผู้ป่วยหญิงตั้งครรภ์ | ระดับความปลอดภัยในการใช้ยา + เหตุผล |
| 6 | Lactation Alert | 🍼 | ผู้ป่วยให้นมบุตร | ระดับความปลอดภัยในการใช้ยา + เหตุผล |
| 7 | Drug Use Evaluation (DUE) | 🔎 | ยาต้องมีการติดตาม/ประเมิน | รายละเอียดการประเมิน |
| 8 | Drug Dosage Limit | ⚖️ | สั่งยาเกินขนาดที่กำหนดในระบบ | ข้อความเตือน + เหตุผล |
| 9 | Drug Investigation Interaction | 🧪 | ผลทางห้องปฏิบัติการมีผลต่อยา | รายละเอียดข้อความ + เหตุผล |
| 10 | Drug Duplicate | 🔁 | สั่งยาซ้ำในระดับ: รายการเดียวกัน / ชนิดเดียวกัน / กลุ่มเดียวกัน | รายละเอียด + จำนวนคงเหลือจากครั้งก่อน |
| 11 | Drug To Diagnosis Interaction | 💊🏥 | ยามีผลกับโรคประจำตัวของผู้ป่วย | รายละเอียดข้อความ + เหตุผล |

---

## Popup Content Fields

| Field | คำอธิบาย |
|-------|---------|
| Alert Type | ประเภทการแจ้งเตือน |
| Drug Name | ชื่อยาที่สั่ง |
| Alert Detail | รายละเอียดการแจ้งเตือน |
| Severity Level | ระดับความรุนแรง (Allergy / Interaction) |
| Safety Level | ระดับความปลอดภัย (Pregnancy / Lactation) |
| Reason Override | เหตุผลในการสั่งใช้ยาแม้มีคำเตือน |
| Previous Quantity | จำนวนคงเหลือจากครั้งก่อน (Drug Duplicate เท่านั้น) |

---

## Severity Levels

### Allergy Alert
- ระบบแสดงระดับความแรงของการแพ้ยา
- แพทย์ต้องระบุเหตุผลในการสั่งใช้ยา

### Drug Interaction
- ระบบแสดงระดับความแรงของอันตรกิริยา
- แพทย์ต้องระบุเหตุผลในการสั่งใช้ยา

### Pregnancy / Lactation Alert
- ระบบแสดงระดับความปลอดภัย (FDA Category)
- แพทย์ต้องระบุเหตุผลในการสั่งใช้ยา

### Drug Duplicate
- ระบบแสดงจำนวนคงเหลือจากการสั่งยาครั้งก่อนที่หน้า Order ด้วย

---

## Drug Duplicate — 3 ระดับ

| ระดับ | คำอธิบาย |
|-------|---------|
| รายการยาเดียวกัน | Same drug item |
| ยาชนิดเดียวกัน | Same drug (different brand) |
| ยากลุ่มเดียวกัน | Same drug class/group |

---

## Related Pages

- [[modules/Order Entry|Order Entry Module]] — การบันทึกคำสั่งยา
- [[entities/Order Entry Screen|Order Entry Screen]] — หน้าจอ CPOE
- [[modules/Pharmacy|Pharmacy Module]] — Dispensing + Drug Alert management
