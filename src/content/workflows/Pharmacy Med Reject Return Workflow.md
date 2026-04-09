---
title: Pharmacy Med Reject Return Workflow
type: workflow
sources: ["13.MEDHIS Manual_Pharmacy V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [workflow, pharmacy, med-reject, med-return, dispensed-return, cancel]
---

# Pharmacy Med Reject Return Workflow — กระบวนการปฏิเสธและคืนยา

ครอบคลุม: Med Reject (ปฏิเสธ), Med Return OP, Dispensed Return IP

---

## 1. Med Reject — ปฏิเสธการจ่ายยา

เภสัชกรส่งใบสั่งยากลับไปยังแพทย์เพื่อทบทวน

```
เภสัชกรตรวจสอบใบสั่งยาใน Pharmacy Worklist
    ↓
พบปัญหา → เลือก Med Reject
    ↓
ระบบแสดงหน้า Med Rejected
    ↓
เลือกรายการยาที่ต้องการ Reject
    ↓
เลือก "เหตุผลที่ Reject"
    ↓
กด Confirm
    ↓
Order ถูกส่งไปที่ Doctor Worklist (Medicine Reject box) ของแพทย์ผู้สั่ง
```

### แพทย์ Review หลัง Reject

| การตัดสินใจ | ขั้นตอน |
|------------|--------|
| ยืนยันสั่งยาต่อ | Confirm to Order → ใบสั่งยากลับเข้า Pharmacy Worklist |
| ยกเลิก | Cancel Order |

ดู [[entities/Doctor Worklist Screen]] → Medicine Reject box

---

## 2. Med Return — รับคืนยาผู้ป่วยนอก (OP)

ใช้เมื่อผู้ป่วยคืนยาที่รับไปแล้ว (แพ้ยา / แพทย์อนุมัติ / ตามนโยบายโรงพยาบาล)

**เงื่อนไข:** Status = **Dispensed** AND Patient Status = **Financial Discharge** เท่านั้น

```
เภสัชกรเลือกใบสั่งยาที่ต้องการคืน
    ↓
กดสัญลักษณ์ Med Return (หรือปุ่ม Med Return บนรายละเอียดใบสั่งยา)
    ↓
เลือกรายการยา/เวชภัณฑ์ที่ต้องการรับคืน
    ↓
ระบบแสดง Batch ID + Expiry Date ให้ตรวจสอบ
```

**คอลัมน์ในหน้าจอ Med Return:**

| คอลัมน์ | ความหมาย |
|---------|----------|
| Total | จำนวนที่จ่ายให้ผู้ป่วย |
| Quantity Returned | จำนวนที่ได้รับคืนมาแล้ว |
| Balance | จำนวนที่ต้องการรับคืนครั้งนี้ (≤ Total) |

```
ระบุจำนวนใน Balance → Save
    ↓
Pharmacy Worklist → Tab Returns → Search
    ↓
รายการแสดง Status: Raised (รอตรวจสอบ)
    ↓
ตรวจสอบถูกต้อง → Verify Return → Status: Completed (รับเข้าคลัง)
ตรวจสอบไม่ถูกต้อง → Cancel Return → Status: Cancelled
```

**หมายเหตุ:** Med Return เพิ่มยอดคืนเข้าคลังเท่านั้น — ไม่มีประวัติยกเลิกในประวัติการรักษาหรือประวัติการชำระเงิน

---

## 3. Good Received (GRNRET) — รับคืนยาหลังปิดบิล

อีกวิธีสำหรับรับคืนยาในรูปแบบการรับสินค้าเข้าคลัง

```
Inventory Mgmt → Goods Receive → สร้างเอกสารใหม่
    ↓
เลือก Type: GRNRET (รับของคืนจากผู้ป่วย/แผนก หลังปิดบิล)
    ↓
ระบุคลัง + Vendor = Dummy
    ↓
ปิด Disable is Invoice
    ↓
Delivery Number = HN ผู้ป่วย + วันที่คืน (ตามนโยบายโรงพยาบาล)
    ↓
ระบุชื่อผู้รับ (Received By — default ตาม user login)
    ↓
Search Item Master → ระบุรายการ + Qty + Batch ID + Expiry Date
    ↓
Unit Price = Weighted Average Cost
    ↓
ตรวจสอบ Net Amount + Comments "รับคืนยาจากผู้ป่วย" → Save
    ↓
Status: Approval Required → Approve → Status: Raised (สต็อกคืนเข้าระบบ)
```

---

## 4. Dispensed Return — คืนยาผู้ป่วยใน (IP)

พยาบาล/เจ้าหน้าที่ Ward คืนยาที่ยังเหลือกลับ Pharmacy

```
Visit Details ของผู้ป่วย → เลือก Dispense Return
    ↓
เลือก Store (คลังที่ต้องการคืน)
```

**กรณี Return Store ≠ Dispensing Store:**
- ระบบเตือน "คลังไม่ตรงกัน" → ยืนยัน YES/NO

```
เลือกรายการที่ต้องคืน → ระบุจำนวนใน Balance
```

**คอลัมน์ Dispensed Return:**

| คอลัมน์ | ความหมาย |
|---------|----------|
| Total | จำนวนที่จ่ายสินค้าไป |
| Quantity Returned | จำนวนที่คืนแล้ว |
| Balance | จำนวนที่ต้องการคืนครั้งนี้ (ต้องไม่ > Total) |

กรณีระบุ Balance > Total → ระบบแสดง **"Invalid Quantity"** ไม่สามารถบันทึก

```
เภสัชกรตรวจสอบจาก Tab Returns ใน Pharmacy Worklist
    ↓
ถูกต้อง → Verify Return → Status: Completed
ไม่ถูกต้อง → Cancel Return → Status: Cancelled
```

---

## 5. Cancel Order & Cancel Dispense

ยกเลิกทั้งใบสั่งยา หรือบางรายการในใบสั่งยา

**เงื่อนไข:** ทำได้ทุกสถานะใบยา ยกเว้น Patient Status:
- Medical Discharge
- Billing In Progress
- Financial Discharge

```
Pharmacy Worklist → Dispensing → เลือกใบสั่งยา
    ↓
Cancel Order → เลือกรายการที่ต้องการยกเลิก
    ↓
ระบุ Cancel Reason (จำเป็น) + Comments (ถ้ามี)
    ↓
Save → สถานะรายการ → Cancelled
    ↓
ใบสั่งยาที่มีรายการถูกยกเลิก → ตัวอักษรเปลี่ยนเป็น "สีส้ม"
```

---

## Related

- [[entities/Pharmacy Dispensing Screen]] — หน้าจอจ่ายยา
- [[workflows/Pharmacy Dispensing Workflow]] — กระบวนการจ่ายยาหลัก
- [[entities/Doctor Worklist Screen]] — Medicine Reject box แพทย์
- [[modules/Pharmacy]] — ภาพรวม module
- [[modules/Inventory]] — GRNRET รับสินค้าเข้าคลัง
