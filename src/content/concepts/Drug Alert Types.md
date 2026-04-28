---
title: Drug Alert Types
type: concept
sources: ["13.MEDHIS Manual_Pharmacy V.1.docx", "18.MEDHIS Manual_Order V.2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [concept, pharmacy, drug-alerts, safety, order-entry]
roles: [Doctor, Pharmacist]
verified-on-uat: pending
---

# Drug Alert Types (ประเภทการแจ้งเตือนยา)

ระบบ MEDHIS มีการแจ้งเตือน **11 ประเภท** เมื่อสั่งยาหรือจ่ายยา เพื่อความปลอดภัยของผู้ป่วย

Alert แสดงทั้งสองจุด:
1. **ตอนสั่งยา** ([[Order Entry]] → Order Details หน้าจอ)
2. **ตอนจ่ายยา** ([[Pharmacy]] → Allocate step)

---

## ตารางประเภท Alert ครบ 11 ประเภท

| # | Alert Type | สัญลักษณ์ (Order Entry) | เงื่อนไขที่ trigger | Action ที่ต้องทำ |
|---|-----------|------------------------|-------------------|----------------|
| 1 | **Drug History** | 📋 | ดูประวัติยาตั้งแต่สั่ง/จ่าย/บริหารยา | คลิกดูประวัติ (ข้อมูลเท่านั้น ไม่บังคับ) |
| 2 | **Allergy Alert** (Drug to Allergy) | ⚠️ | ผู้ป่วยมีประวัติแพ้ยา — ตรงกับ Generic Name / Trade Name / Drug Group ที่บันทึกไว้ | คลิกดูระดับความรุนแรงและเหตุผล; ต้องระบุเหตุผลก่อน Save (Pharmacy) |
| 3 | **High Alert Drug** | 🔴 | รายการยาถูกกำหนดเป็น High Alert ตามนโยบายโรงพยาบาล | แสดงสัญลักษณ์เตือน |
| 4 | **Drug Interaction** | ⚡ | ยาที่สั่งมีอันตรกิริยากับยาอื่นที่ผู้ป่วยได้รับอยู่ | คลิกดูระดับความรุนแรงและเหตุผล |
| 5 | **Pregnancy Alert** | 🤰 | สั่งยาในหญิงตั้งครรภ์ | คลิกดูระดับความปลอดภัยและเหตุผล |
| 6 | **Lactation Alert** | 🍼 | สั่งยาในหญิงให้นมบุตร | คลิกดูระดับความปลอดภัยและเหตุผล |
| 7 | **Drug Use Evaluation (DUE)** | 🔎 | ยาที่ต้องมีการติดตามหรือประเมินการใช้ — กำหนดไว้ใน Order Item Master | แสดง DUE Form ให้แพทย์กรอก; เภสัชกรอ่านได้จาก Pharmacy Worklist (read-only) |
| 8 | **Drug Dosage Limit** | ⚖️ | ขนาดยาที่สั่งเกินขีดจำกัดที่กำหนดไว้ในระบบ | คลิกดูรายละเอียดและระบุเหตุผล |
| 9 | **Drug Investigation Interaction** | 🧪 | ผลทางห้องปฏิบัติการมีผลต่อการใช้ยานั้น (Drug-Lab Interaction) | คลิกดูรายละเอียดและระบุเหตุผล |
| 10 | **Drug Duplicate** | 🔁 | สั่งยาซ้ำ — รายการเดียวกัน / ชนิดเดียวกัน / กลุ่มเดียวกัน | คลิกดูรายละเอียด; ระบบแสดงจำนวนคงเหลือจากใบสั่งครั้งก่อนอัตโนมัติ |
| 11 | **Drug-To-Diagnosis** (Drug Interaction ต่อ Diagnosis) | 💊🏥 | ยาไม่สอดคล้อง หรือมีผลกับโรคประจำตัวของผู้ป่วย | คลิกดูรายละเอียดและระบุเหตุผล |

---

## จุดที่แสดง Alert

### Order Entry (ขณะสั่งยา)

- Alert icons แสดงในคอลัมน์ **Alert** ของแต่ละแถวรายการยาบนหน้าจอ [[Order Entry Screen]]
- แพทย์คลิก icon เพื่อดูรายละเอียด
- ระบบไม่บังคับหยุดสั่งยา — แพทย์เห็นและตัดสินใจเองได้

### Pharmacy (ขณะ Allocate)

- ระบบแสดง Alert popup [[Drug Alert Popup]] เมื่อกด Allocate
- เภสัชกรต้องระบุ **เหตุผลในการพิจารณาจ่ายยา** ก่อน Save
- ไม่สามารถ Skip ได้เมื่อมี Alert ประเภทที่บังคับ

---

## Drug Allergy Recording — 4 รูปแบบที่ trigger Alert ประเภทที่ 2

| Allergy Type | วิธีทำงาน |
|-------------|---------|
| **Generic Name** | แพ้ชื่อสามัญ — เตือนทุกยาที่มี Generic Name ตรงกัน |
| **Trade Name** | แพ้ชื่อการค้า — เตือนเฉพาะยา Code ตรงกัน |
| **Drug Group** | แพ้กลุ่มยา — เตือนทุกยาในกลุ่มนั้น |
| **Free Text** | บันทึกอิสระ — ไม่ผูกกับระบบสั่งยา (แสดงบน [[Patient Banner]] เท่านั้น) |

ข้อมูลเพิ่มเติมที่บันทึกกับประวัติแพ้ยา:
- **Severity** — ระดับความรุนแรงของอาการแพ้
- **Symptom** — อาการที่แพ้
- **Observed in Visit** — มีอาการแพ้ในวันที่ซักประวัติ
- **Naranjo Algorithm** — คะแนนประเมินความน่าจะเป็น ADR (ระบบคำนวณ + Confirmation อัตโนมัติ)
- **Closure Date** — ยกเลิกประวัติแพ้ยา → Status เปลี่ยนเป็น Inactive

---

## ที่ใช้งาน

- [[Order Entry]] → [[Order Entry Screen]] — Alert icons คอลัมน์ Alert
- [[Pharmacy]] → [[Pharmacy Dispensing Screen]] → Allocate step — [[Drug Alert Popup]]
- [[Patient Banner]] — แสดงข้อมูลแพ้ยา (Allergy)
