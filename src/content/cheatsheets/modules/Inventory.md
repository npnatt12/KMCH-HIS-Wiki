---
title: Inventory Module
titleTh: ระบบสินค้าคงคลัง
type: cheatsheet
sources: ["14.MEDHIS Manual_Inventory V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, module, inventory]
---

## Purpose
จัดการสินค้าคงคลัง — รับสินค้า เบิก-จ่าย โอนย้าย ปรับปรุงสต็อก ตรวจนับ และรายงาน

## Access
**Inventory Management**

## Workflow

| Step | Actor | Action |
|------|-------|--------|
| 1 | จนท.คลัง | Goods Receive → เลือก Receive Type → กรอก GRN Header + Items → Save |
| 2 | หัวหน้า | GRN: Approval Required → Approve → สต็อกอัปเดต |
| 3 | แผนก | Stock Request → เลือก Type (Transfer/Issue) → ระบุรายการ → Save |
| 4 | จนท.คลัง | Stock Request → Approve → Stock Transfer/Issue icon → โอน/ตัดจ่าย |
| 5 | จนท.คลัง | Stock Adjustment → ระบุ Adjust Quantity → Approve |
| 6 | จนท.คลัง | Stock Count: Snapshot → Enter Count → Finalize → Stock Adjustment |

## Key Screens
- **Goods Receive (GRN)** — 9 Receive Types (RCVPUR, RCVFREE, RCVEXA, RCVBOR ฯลฯ)
- **Stock Request** — Transfer (คลัง↔คลัง) / Issue (คลัง→แผนก)
- **Stock Balance** — ตรวจสอบยอด + สี: แดง(ต่ำ)/ส้ม(เกิน)/ฟ้า(หมด)/เทา(ต่ำ min)
- **Stock Ledger** — การเคลื่อนไหว: DateTime, Transaction, In/Out, Batch, Cost

## Key Fields

| Field | หมายเหตุ |
|-------|---------|
| Receive Type | 9 ประเภท (RCVPUR = จาก PO) |
| Batch ID | Lot No. — Required ใน GRN |
| Expiry Date | Required ใน GRN |
| Stock Request Type | Transfer หรือ Issue |
| Adjust Quantity | ปรับได้เฉพาะจำนวน (ไม่ใช่ Batch/Expiry) |
| Stock Count | Snapshot → Count Quantity → Quantity Difference อัตโนมัติ |

## Integration
Back Office (PO) → **Inventory** (GRN) → Pharmacy (คลังยา) → แผนกทั้งหมด (Stock Request) ↔ CSSD
