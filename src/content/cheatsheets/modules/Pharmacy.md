---
title: Pharmacy Module
titleTh: ระบบเภสัชกรรม
type: cheatsheet
sources: ["13.MEDHIS Manual_Pharmacy V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, module, pharmacy]
---

## Purpose
ตรวจสอบ จ่ายยา เติมยา คืนยา ผลิตยา — ครอบคลุมเภสัชกรรมผู้ป่วยนอก (OP) และผู้ป่วยใน (IP)

## Access
**Pharmacy Worklist**

## Workflow

| Step | Actor | Action |
|------|-------|--------|
| 1 | แพทย์ | สั่งยาผ่าน EMR Order Entry |
| 2 | เภสัชกร | Pharmacy Worklist → เลือกใบยา → ตรวจ Drug Alerts |
| 3 | เภสัชกร | Allocate → ระบุเหตุผลถ้ามี Alert → Verify |
| 4 | เภสัชกร | Dispense → จ่ายยาให้ ผป. |
| 5 | เภสัชกร | Shortcut: Allocate & Dispense (รวม 3 ขั้นตอน) |
| 6 | เภสัชกร | Med Reject → ระบุเหตุผล → ตีกลับแพทย์ |

## Key Screens
- **Pharmacy Dispensing** — Tab Dispensing หน้าจอหลัก
- **OP Refills** — เติมยา ผป.นอก ตามจำนวนครั้งที่แพทย์กำหนด
- **IP Fill** — จ่ายยา Continuous Order ผู้ป่วยใน (Daily/Continuous)
- **Returns** — Med Return (OP) + Dispensed Return (IP) + คืนยา

## Key Fields

| Field | หมายเหตุ |
|-------|---------|
| Status flow | Ordered → Registered → Allocated → Verified → Dispensed |
| Partially Allocated | Stock ไม่พอ — จ่ายบางส่วน พิมพ์ใบค้างยาได้ |
| Drug Alerts (11 ประเภท) | Allergy / High Alert / Interaction / Pregnancy / DUE / Duplicate ฯลฯ |
| Alternative Items | ยาทดแทนเมื่อ Out of Stock หรือนอกสิทธิ์ |
| Med Reconciliation | Continue / Change / Discontinue / Hold |
| Cancel Restriction | ยกเลิกไม่ได้เมื่อ ผป. Medical/Financial Discharge |

## Integration
EMR Doctor → Order Entry → **Pharmacy** → Inventory (Stock) → IPD (Dispense Return) → Billing
