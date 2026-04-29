---
title: OP Billing Workflow
type: workflow
sources: ["5.MEDHIS Manual_Billing V.1.docx"]
created: 2026-04-08
updated: 2026-04-29
tags: [workflow, billing, finance]
roles: [AdminSystem]
verified-on-uat: 2026-04-29
---

# กระบวนการออกบิลผู้ป่วยนอก (OP Billing Workflow)

ขั้นตอนการออกเอกสารทางการเงินสำหรับผู้ป่วยนอกใน [Billing](/modules/billing/) module

## ขั้นตอน

### 1. ผู้ป่วยมาถึงการเงิน
- ผู้ป่วย Medical Discharge จาก [OPD](/modules/opd/) / [ER](/modules/er/)
- ชื่อแสดงใน **OP Cashier Worklist** → Tab Medical Discharges

### 2. Lock (ล็อคผู้ป่วย)
- กดรูป **แม่กุญแจ** → Status เปลี่ยนเป็น **Billing In Progress**
- แผนกอื่นสั่ง/ยกเลิกรายการไม่ได้

### 3. Allocate Bill
- กด **Allocate Bill** → ระบบแสดงค่ารักษาแยกตาม[สิทธิ์](/concepts/payor-and-treatment-rights/)

### 4. Modify Payor (ถ้าจำเป็น)
- กด **Modify Payor** → เพิ่ม/แก้ไขสิทธิ์ → จัดเรียง **Rank** → Save

### 5. Allocate All (คำนวณใหม่)
- กด **Allocate All** → เลือก Payor → **Allocate**
- ระบบคำนวณตาม Rank 1 ก่อน → รายการไม่คุ้มครองตกไป Rank ถัดไป
- กด **Auto Allocate** อีกครั้งถ้ามีรายการไม่คุ้มครอง

### 6. Generate Bill
- กด **Generate Bill** → ระบบออกเอกสาร

### 7. Settle (ชำระเงิน)
- **Invoice** (ใบแจ้งหนี้): สำหรับประกัน/บริษัท → เลือก Payor → Settle → Print
- **Receipt** (ใบเสร็จ): สำหรับชำระเอง → เลือก Payment Mode (Cash/EDC/Credit Card/Transfer/Cheque) → Settle → Print
- รองรับ **mixed payment** ต่อ 1 ใบเสร็จ
- Print: Thai/English, Export Excel/CSV

### 8. Financial Discharge
- ชำระเสร็จ → ผู้ป่วยจำหน่ายทางการเงิน

## Flow Diagram

```
Medical Discharge → Lock → Allocate → [Modify Payor] → Allocate All → Generate Bill → Settle → Financial Discharge
```

## Modules Involved

- [OPD](/modules/opd/) / [ER](/modules/er/) — ต้นทาง Medical Discharge
- [Registration](/modules/registration/) — Payor Details
- [Pharmacy](/modules/pharmacy/) — Drug order status ต้องพร้อม

## UAT Verification (Phase 5b–5e, 2026-04-29)

Source: TCK-001 walkthrough Phase 5b–5e, see `uat-recon/agent-uat-handoff` §5 Recipe Phase 5b–5e.

### Self-pay collapse — 7 steps → 2 atomic actions

The 7-step flow above (Lock · Allocate Bill · Modify Payor · Allocate All · Generate Bill · Settle · Financial Discharge) is the **Invoice / payor-mix mode**. For OPD self-pay (`ชำระเงินเอง`), the flow collapses to:

1. **Lock** — on [OP Cashier Worklist](/entities/op-cashier-worklist/) → `vm.lockPatientVisit(visit)` → status `Billing Inprogress` (VSTSTS8 / `_id 57c4446aa454a0ba852ce690`)
2. **Settle** — on [Generate Bill Screen](/entities/generate-bill-screen/) → `vm.settleBill()` → `POST /billing/generatebill/settle`

The single `settleBill()` call atomically:
- Creates the bill
- Records the cash payment (default: one cash line equal to total billable)
- Issues the receipt — format `RO<YY><serial>` (e.g. `RO26001901`)
- **Auto-emits the `Financial Discharge` journey row** (VSTSTS7)

Steps 2–5 of the manual flow do not require operator action for self-pay — auto-allocation handles them.

### Auto-attached service charge

Every OPD visit auto-attaches `ค่าบริการผู้ป่วยนอก ในเวลาราชการ`:

| Field | Value |
|---|---|
| Charge code | `55020` |
| Item UID | `6833e0e7c7a8b1000176354a` |
| Amount | 150.00 baht |
| Behavior | Attached at visit creation regardless of orders placed |

See [Generate Bill Screen](/entities/generate-bill-screen/#auto-attached-service-charge).

### Receipt format

`RO<YY><serial>` e.g. `RO26001901` (Receipt Outpatient, year 26 BE → 2026, serial 001901).

### Verified TCK-001 outcome

- Bill total: 150.00 baht (auto-charge only, no orders placed)
- Payment: 1 line, Cash, 150.00 baht
- Receipt: `RO26001901`
- Status journey: …Medical Discharge → Billing Inprogress → Financial Discharge (atomic)
