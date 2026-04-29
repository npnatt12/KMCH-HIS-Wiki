---
title: Generate Bill Screen
type: entity
sources: [live UAT 2026-04-29, "5.MEDHIS Manual_Billing V.1.docx"]
roles: [AdminSystem, FinanceAccounting]
verified-on-uat: 2026-04-29
created: 2026-04-29
updated: 2026-04-29
tags: [entity, screen, billing, opd, cashier]
---

# Generate Bill Screen (หน้าจอออกบิล)

The bill construction + settlement screen. For OPD self-pay this is the **single atomic action point** that emits Bill + Payment + Receipt + Financial Discharge in one call. Verified during TCK-001 UAT walkthrough (`uat-recon/agent-uat-handoff`) Phase 5c–5e.

## Access Path

- Angular state: `triangular.generatebill`
- State params: `{patientuid, patientvisituid, isipd:false, isinterim:false}`
- Upstream: [OP Cashier Worklist](/entities/op-cashier-worklist/) → Generate Bill icon

## Modes

| Mode | When | Atomic? |
|---|---|---|
| **Receipt (self-pay)** | Payor `ชำระเงินเอง` | Yes — Bill + Payment + Receipt + Financial Discharge in one POST |
| **Invoice (payor-mix)** | Agreement payors / TPA / insurance | No — operator manages allocation per-payor |

## Key UI elements

- **Bill Template selector** — chooses which receipt/invoice template to render
- **Total Billable Amount** (`vm.totalBillableAmount`)
- **Payments table** (`vm.payments`) — defaults to one cash line equal to the total
- **Amount To Pay** (`vm.amountToPay`)
- **SETTLE** button (primary) — fires `vm.settleBill()`
- **CLOSE** button (secondary) — back to [OP Cashier Worklist](/entities/op-cashier-worklist/)

## UAT-verified behavior (2026-04-29)

- Auto-allocates payors and items on load — operator does not need to click `Allocate` manually for self-pay.
- Default payment line is one **Cash** entry with `paidamount = totalBillable`.
- `vm.settleBill()` calls `POST /billing/generatebill/settle` which:
  1. Creates the bill
  2. Records the cash payment
  3. Issues the receipt — format `RO<YY><serial>` (e.g. `RO26001901`)
  4. **Auto-advances visit to `Financial Discharge`** (no separate user action needed)
- Print preview opens automatically after settle. Close it to return.
- After settle, `getvisitjourney` shows two new rows: `Billing Inprogress` (from lock on Cashier Worklist) and `Financial Discharge` (from settle).

## Auto-attached service charge

Every OPD visit gets `ค่าบริการผู้ป่วยนอก ในเวลาราชการ` automatically:

| Field | Value |
|---|---|
| Charge code | `55020` |
| Item UID | `6833e0e7c7a8b1000176354a` |
| Amount | 150.00 baht |
| Trigger | Attached at visit creation, regardless of orders placed |

Implication: even a fake patient that walked the OP loop with **zero orders** will have a 150-baht line on the bill.

## Endpoints

| Endpoint | Purpose |
|---|---|
| `GET /billing/generatebillcriterias/<patientuid>/<visituid>/true` | Bill criteria fetch |
| `GET /billing/generatebill/usabledeposits/<patientuid>` | Deposit lookup |
| `POST /billing/generatebill/usablecreditnotes/` | Credit note lookup |
| `POST /billing/generatebill/billablechargecodes` | Allocate bill items per payor |
| `POST /billing/generatebill/verifyGLcoverageexceeds` | GL coverage check (no-op for self-pay) |
| `POST /billing/generatebill/settle` | **Atomic Bill+Payment+Receipt+Financial-Discharge** |

## Common pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| 150 baht "from nowhere" | Auto charge code `55020` | Document with patient; see [OP Billing Workflow](/workflows/op-billing-workflow/#auto-attached-service-charge) |
| Settle fails with GL error | Payor has limited GL coverage | Switch to Invoice mode or adjust allocation |
| Receipt number not generated | Settle endpoint failure | Check network tab; see [MEDHIS Server-Side Gates](/concepts/medhis-server-side-gates/#settle-bill-gl-coverage-check) |

## Related

- [OP Cashier Worklist](/entities/op-cashier-worklist/)
- [OP Billing Workflow](/workflows/op-billing-workflow/)
- [Payor and Treatment Rights](/concepts/payor-and-treatment-rights/)
- [Payment Modes](/concepts/payment-modes/)
- `uat-recon/agent-uat-handoff` §3.8, §5 Recipe Phase 5b–5e
