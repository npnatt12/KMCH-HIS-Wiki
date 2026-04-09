---
title: Pharmacy Dispensing Workflow
type: workflow
sources: ["13.MEDHIS Manual_Pharmacy V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [workflow, pharmacy, dispensing, op, ip, dispensed]
---

# Pharmacy Dispensing Workflow — กระบวนการจ่ายยา

ครอบคลุมทั้ง OP Dispensing, OP Refills, IP Fill, Pending Medicine (Future Order)

---

## 1. OP Dispensing (Allocate & Dispense Daily Order)

กระบวนการหลักสำหรับผู้ป่วยนอก — ใบสั่งยามาจากแพทย์ผ่าน [[modules/Order Entry]]

```
Doctor สั่งยาใน MEDHIS
    ↓
ใบยาแสดงใน Pharmacy Worklist (Status: Ordered)
    ↓
[1] Register — ลงทะเบียนรับใบสั่งยา
    ↓
[2] Allocate — ตรวจสอบ + ตัดสต็อก + เลือก Batch ID
    ↓ (ระบบแสดง Alert popup → ใส่เหตุผล → Save)
[3] Verify — ตรวจสอบความถูกต้องอีกครั้ง
    ↓
[4] Dispense — จ่ายยาให้ผู้ป่วย (พิมพ์ฉลาก + ใบสั่งยา)
    ↓
Status: Dispensed
```

**Shortcut:** กด **Allocate & Dispense** — รวมขั้นตอน 2+3+4 ทันที

### กรณีสต็อกไม่พอ (Partial)
- เลือก Stock to Allocate → แก้ไขจำนวนที่ต้องการตัด
- สถานะ → **Partially Allocated**
- พิมพ์ **ใบค้างยา/เวชภัณฑ์** ได้

---

## 2. OP Refills — เติมยาผู้ป่วยนอก

ผู้ป่วยรับยาซ้ำโดยไม่ต้องพบแพทย์ (แพทย์กำหนดจำนวนครั้งล่วงหน้า)

```
แพทย์ระบุ Refills จำนวนครั้ง ใน Medicine Orders
    ↓
รายการยาแสดงสัญลักษณ์ Refill ใน Order / Order Profile / ใบสั่งยา
    ↓
ผู้ป่วยมาตามนัด → ลงทะเบียนผู้ป่วยก่อน
    ↓
เภสัชกร → Pharmacy Worklist → Tab OP Refills
    ↓
ระบุวันที่ (วันที่แพทย์สั่งครั้งแรก) + สถานะ All + ชื่อผู้ป่วย → Search
    ↓
เลือกรายการยา → กด Repeat Refill → ยืนยัน Yes
    ↓
รายการยาแสดงใน Pharmacy Worklist → Dispense ตามปกติ
```

**ข้อจำกัด:** ไม่สามารถเติมยาเกินจำนวนครั้งที่แพทย์ระบุได้

---

## 3. IP Fill — จ่ายยาผู้ป่วยใน (Daily Dose / Continuous)

สำหรับยาประเภท **Continuous Order** ของผู้ป่วยใน

```
Pharmacy Worklist → Tab IP Fill → กด Generate
    ↓
เลือก Ward (หรือ Search Patient รายคน)
    ↓
ระบบแสดงยา Continuous Order ที่อนุญาต IP Fill ใน Drug Master
    ↓
เลือก Generate IP Fill (รายคน หรือทั้งหมด Ward)
    ↓
แก้ไขจำนวนที่ต้องการจ่าย → Save
    ↓
ใบสั่งยาแสดงใน IP Fill (Status: Ordered)
    ↓
Allocate Dispense → ตัด Stock
```

**กรณี Stock = 0:**
- ระบบแสดง "No Stock Available" + ปุ่ม Allocate Dispense ถูก Disable
- แก้ไขโดย: (1) โอน/รับสินค้าเข้าระบบ หรือ (2) ยกเว้นรายการ Stock = 0 ออก

**สถานะหลัง IP Fill:**

| สถานะ | ความหมาย |
|-------|----------|
| **Dispensed** | ตัดจ่ายทุกรายการสมบูรณ์ |
| **Partially Dispensed** | ตัดจ่ายบางรายการ |
| **Cancelled** | มีการยกเลิกรายการในเอกสาร IP Fill |

**IP Fill Actions:**

| Icon/Button | Action |
|------------|--------|
| ดูข้อมูล | ตรวจสอบเอกสารที่บันทึกแล้ว |
| Allocate & Dispense | ตัดจ่ายยา |
| ยกเลิก | ยกเลิกทั้งเอกสาร / รายผู้ป่วย / แต่ละรายการ |
| พิมพ์ใบสั่งยา | พิมพ์เอกสาร |
| พิมพ์ฉลากยา | พิมพ์ฉลาก |
| Audit Log | ดูประวัติบันทึก/ยกเลิก/ตัดจ่าย |

---

## 4. Pending Medicine (Future Order)

ยาที่สั่งล่วงหน้า ยังไม่คิดค่าใช้จ่าย (Future Order Type)

```
แพทย์สั่งยา → เลือก Tab Future Order → บันทึก → Status: Ordered
    ↓
(รอจนถึงวันนัด / ต้องการใช้)
    ↓
เปิดปุ่ม Future Order Filter → เลือกรายการ Pending Medicine → กด Order
    ↓
รายการแสดงใน Orders → ตรวจสอบ → บันทึก → จ่ายยาตามปกติ
    ↓
Status ใน Future Order: Executed
```

**Actions บน Pending Medicine:**

| Action | ผล |
|--------|-----|
| แก้ไข | แก้ไขรายละเอียดยา |
| ยกเลิก | Status → Cancelled |
| ดู Audit Log | ดูประวัติ |
| พิมพ์ใบค้างยา | พิมพ์เอกสาร |

---

## Drug Alert Flow (ระหว่างจ่ายยา)

เมื่อพบ Alert ในขั้นตอน Allocate:
1. ระบบแสดง popup alert ทุกรายการ
2. เภสัชกรอ่านรายละเอียด + ระบุเหตุผลในการพิจารณาจ่ายยา
3. กด Save → ดำเนินการต่อได้

ดู [[entities/Drug Alert Popup]] สำหรับ 11 ประเภท alert

---

## Cancel Restrictions

ไม่สามารถยกเลิกได้เมื่อ Patient Status:
- Medical Discharge
- Billing In Progress
- Financial Discharge

ดู [[entities/Pharmacy Dispensing Screen#Cancel Restrictions]]

---

## Related

- [[entities/Pharmacy Dispensing Screen]] — หน้าจอรายละเอียด
- [[workflows/Pharmacy Med Reject Return Workflow]] — Med Reject + Med Return
- [[modules/Pharmacy]] — ภาพรวม module
- [[modules/Order Entry]] — ต้นทาง order
- [[modules/IPD]] — ผู้ป่วยในที่ใช้ IP Fill
