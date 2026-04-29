---
title: OP Cashier Worklist
type: entity
sources: [live UAT 2026-04-29, "5.MEDHIS Manual_Billing V.1.docx"]
roles: [AdminSystem, FinanceAccounting]
verified-on-uat: 2026-04-29
created: 2026-04-29
updated: 2026-04-29
tags: [entity, screen, billing, opd, cashier]
---

# OP Cashier Worklist (หน้าจอแคชเชียร์ OPD)

The OPD billing intake surface. Verified during TCK-001 UAT walkthrough (`uat-recon/agent-uat-handoff`) Phase 5b.

## Access Path

- Angular state: `triangular.cashierworklist`
- From: side menu Billing → OP Cashier Worklist
- Upstream: visits arrive on this screen when status moves to `Medical Discharge` (VSTSTS6) — see [OPD Patient Flow](/workflows/opd-patient-flow/).

## Tabs

| Tab | Content |
|---|---|
| **MEDICAL DISCHARGES** | Visits at `Medical Discharge` ready to be locked + billed |
| **BILLS** | Visits already at `Billing Inprogress` |
| **DEPOSITS** | Deposit transactions |
| **CREDIT NOTES** | Credit-note transactions |

## Action icons (Visit Details panel — right side)

| Icon | Action | Result |
|---|---|---|
| Lock | `vm.lockPatientVisit(visit)` | `POST /mpi/patientvisit/logvisitjourney` with `islock:true, statusuid:57c4446aa454a0ba852ce690` → status moves to `Billing Inprogress` |
| Unlock | (reverse) | Releases the lock |
| Allocate Bill | (manual mode) | Used in payor-mix / Invoice scenarios — see [OP Billing Workflow](/workflows/op-billing-workflow/) |
| Generate Bill | `vm.generateBill(visit)` | `$state.go('triangular.generatebill', {patientuid, patientvisituid, isipd:false, isinterim:false})` → opens [Generate Bill Screen](/entities/generate-bill-screen/) |
| Discharge | (financial discharge for already-settled visits) | — |

## UAT-verified behavior (2026-04-29)

- Visit must be at `Medical Discharge` (VSTSTS6) to appear in MEDICAL DISCHARGES tab.
- Locking is reversible until the bill is settled.
- For self-pay, the operator only needs to: (1) Lock, (2) Generate Bill — `vm.settleBill()` on the next screen does Bill+Payment+Receipt+Financial-Discharge atomically.
- For payor-mix / Invoice mode, the historical 7-step manual flow applies — see [OP Billing Workflow](/workflows/op-billing-workflow/).

## Endpoints

| Endpoint | Purpose |
|---|---|
| `GET /billing/cashierworklistcounts?isipd=false` | Tab counters |
| `GET /mpi/patientvisit/getdetail/<visitId>?getisbillsettled=true` | Visit detail + settlement status |
| `GET /billing/hasoutstandings/<patientuid>` | Outstanding balance check |
| `POST /mpi/patientvisit/logvisitjourney` (with `islock:true`) | Lock writer |

## Common pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| Visit not in MEDICAL DISCHARGES tab | Status not yet `Medical Discharge` | Verify [ICD Coding](/concepts/icd-coding/) persisted; see [MEDHIS Server-Side Gates](/concepts/medhis-server-side-gates/#errorsicd10ismandatoryformedicaldischarge) |
| Lock button greyed | Visit already locked or settled | Refresh worklist |
| Refresh shows wrong counts | Angular scope stale after long agent ops | Re-establish via `vm.refresh()` or scope re-poke |

## Related

- [Generate Bill Screen](/entities/generate-bill-screen/)
- [OP Billing Workflow](/workflows/op-billing-workflow/)
- [OPD Patient Flow](/workflows/opd-patient-flow/)
- [OPD Patient Status](/concepts/opd-patient-status/)
- `uat-recon/agent-uat-handoff` §3.8, §5 Recipe Phase 5b–5e
