---
title: Pharmacy Dispensing Screen
type: entity
sources: ["13.MEDHIS Manual_Pharmacy V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, pharmacy, dispensing, worklist, screen]
---

# Pharmacy Dispensing Screen — หน้าจอจ่ายยา

หน้าจอหลักของ [[modules/Pharmacy|Pharmacy]] สำหรับตรวจสอบและจ่ายยา/เวชภัณฑ์ผู้ป่วยนอกและผู้ป่วยใน

**เข้าถึง:** Pharmacy Worklist → Tab **Dispensing**

---

## Filter / Search Fields

| Field | Description |
|-------|-------------|
| From / To | ช่วงวันที่ค้นหา |
| Store | คลังห้องยา (default ตาม Login) |
| Order Department | แผนกที่สั่งยา |
| Search Order Item | ค้นหาจากชื่อยา |
| Search Patient | ค้นหาจากชื่อผู้ป่วย |
| Search All Patients | checkbox — ค้นหาผู้ป่วยที่ไม่มี Visit วันนี้ |
| Order Number | ค้นหาจากเลขที่ใบสั่งยา |

---

## Order List Display

ผลลัพธ์แสดงแยกตาม **รายชื่อผู้ป่วย** และ **Order Number**
- ผู้ป่วยรายเดียวกัน สั่งยาต่างเวลา → Order Number แตกต่างกัน

เมื่อ click ที่ใบสั่งยา ระบบแสดง **Details** ประกอบด้วย:

| Tab/Section | รายละเอียด |
|-------------|-----------|
| **Order Details** | รายการยา/เวชภัณฑ์ใบสั่งยานี้ |
| **Other Orders** | รายการยาใบอื่นของผู้ป่วยรายเดียวกัน |
| **Patient Tracking** | Timeline อัพเดทสถานะผู้ป่วย |

---

## Alert Icons (คอลัมน์ Alerts)

| Icon | ชื่อ Alert | ความหมาย |
|------|-----------|----------|
| History Audit Log | ประวัติใบสั่งยาแต่ละรายการ | |
| Drug to Allergy | แพ้ยา | คลิกดูระดับความแรง + เหตุผลสั่งยา |
| High Alert Drug | ยาความเสี่ยงสูง | ตามนโยบายโรงพยาบาล |
| Pregnancy Alert | อันตรายต่อสตรีมีครรภ์ | คลิกดูระดับความปลอดภัย + เหตุผล |
| Lactation Alert | อันตรายต่อสตรีให้นมบุตร | คลิกดูระดับความปลอดภัย + เหตุผล |
| Drug Interaction | ยาตีกัน | คลิกดูระดับความแรง + เหตุผล |
| Order Instructions | Comment / Administration Instruction | ตรวจสอบ/แก้ไข/เพิ่มเติม |
| Drug Use Evaluation (DUE) | ยาต้องมีการติดตาม/ประเมินการใช้ | |
| Drug Dosage Limit | ขนาดยาเกินกำหนด | คลิกดูรายละเอียด + เหตุผล |
| Drug Investigation Interaction | ยามีผลต่อผลตรวจห้องปฏิบัติการ | คลิกดูรายละเอียด + เหตุผล |
| เอกสารแนบ | ฟอร์มที่แนบกับรายการยา | คลิกดูเอกสาร |
| Drug Duplicate | สั่งยาซ้ำ (รายการ/ชนิด/กลุ่ม) | คลิกดูรายละเอียด + เหตุผล |

ดู [[entities/Drug Alert Popup]] สำหรับรายละเอียดครบถ้วน 11 ประเภท

---

## Action Buttons (สถานะใบสั่งยา)

| Button | Action | หมายเหตุ |
|--------|--------|----------|
| **Register** | ลงทะเบียนรับใบสั่งยา | Ordered → Registered |
| **Allocate** | ตรวจสอบ + ตัดสต็อก | Stock ถูกตัดที่สถานะนี้ |
| **Verify** | ตรวจสอบความถูกต้องอีกครั้ง | |
| **Dispense** | จ่ายยาให้ผู้ป่วย | |
| **Allocate & Dispense** | รวม Allocate + Verify + Dispense ทันที | Shortcut สำหรับงานเร็ว |
| **Cancel Order** | ยกเลิกยา (ทั้งใบ หรือบางรายการ) | ต้องระบุ Cancel Reason + Comments |
| **Med Return** | รับคืนยาจาก OP | เฉพาะ Status = Dispensed + Financial Discharge |
| **Med Reject** | ส่งใบกลับแพทย์ | ต้องเลือกรายการ + ระบุเหตุผล |

---

## Allocate — รายละเอียดขั้นตอน

เมื่อกด **Allocate** ระบบแสดง:

| คอลัมน์ | ความหมาย |
|---------|----------|
| Order Item | รายการยาที่แพทย์สั่ง |
| Order Details | วิธีการใช้ยา |
| Order Quantity | จำนวนที่สั่ง |
| Quantity to Allocate | จำนวนที่ต้องการจ่าย |
| Stock Available | จำนวนคงเหลือใน Stock ก่อนตัด |
| Stock to Allocate | จำนวน + Batch ID ที่จะตัด (เลือก Batch ได้) |

**หลัง Allocate:**
- ระบบแสดง Alert popup → ใส่เหตุผล → Save
- พิมพ์ฉลากยา + ใบสั่งยาอัตโนมัติ
- สถานะ → **Dispensed**

**Partially Allocated:** เมื่อ Stock ไม่พอ → จ่ายบางส่วนได้ → สถานะ → **Partially Allocated** + พิมพ์ใบค้างยาได้

---

## IP Fill Tab

สำหรับผู้ป่วยใน — ดู [[entities/Pharmacy Dispensing Screen#IP Fill]] หรือ [[workflows/Pharmacy Dispensing Workflow]]

สถานะ IP Fill:
- **Dispensed** — ตัดจ่ายทุกรายการสมบูรณ์
- **Partially Dispensed** — ตัดจ่ายบางรายการ
- **Cancelled** — มีการยกเลิกรายการ

---

## Returns Tab

| Action | Trigger | สถานะหลัง |
|--------|---------|-----------|
| **Verify Return** | ตรวจสอบถูกต้อง | Completed (รับคืนเข้าคลัง) |
| **Cancel Return** | ตรวจสอบไม่ถูกต้อง | Cancelled |

---

## Cancel Restrictions

ไม่สามารถยกเลิกได้เมื่อ Patient Status เป็น:
- **Medical Discharge**
- **Billing In Progress**
- **Financial Discharge**

→ ต้องให้เจ้าหน้าที่ที่เกี่ยวข้องเปลี่ยนสถานะก่อน

---

## Related

- [[workflows/Pharmacy Dispensing Workflow]] — ขั้นตอนครบ
- [[workflows/Pharmacy Med Reject Return Workflow]] — Med Reject + Med Return
- [[modules/Pharmacy]] — ภาพรวม module
- [[entities/Drug Alert Popup]] — 11 ประเภท alert icons
- [[modules/Order Entry]] — ต้นทาง order จากแพทย์
