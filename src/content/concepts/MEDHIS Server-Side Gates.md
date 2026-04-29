---
title: MEDHIS Server-Side Gates
type: concept
sources: [live UAT 2026-04-29]
roles: [Doctor, NurseOPD, AdminSystem]
verified-on-uat: 2026-04-29
created: 2026-04-29
updated: 2026-04-29
tags: [concept, validation, errors, gates, search-quality]
---

# MEDHIS Server-Side Gates

Catalog of MEDHIS server-side validation gates that **block flow even when the UI appears willing**. Surfaced during the TCK-001 UAT walkthrough (`uat-recon/agent-uat-handoff`) — these are the points where the wiki + the manual silently disagree with reality.

## Why this matters

Several MEDHIS workflows have business-rule checks that fire only on the **server**, not in the Angular controllers. The UI offers the action; the server says no with an HTTP 500 and a structured error code. Knowing the catalog ahead of time lets agents and trainees recognize the symptom and know exactly which prerequisite is missing.

## Gate catalog

### `ERRORS.ICD10ISMANDATORYFORMEDICALDISCHARGE`

| Field | Value |
|---|---|
| Trigger | `POST /mpi/patientvisit/logvisitjourney` with `statusuid: VSTSTS6 (Medical Discharge)` |
| Pre-flight check | At least one diagnosis row in `emr.diagnosis` for this visit |
| HTTP status | 500 |
| Wire format | `{"errorcode": "ERRORS.ICD10ISMANDATORYFORMEDICALDISCHARGE", ...}` |
| Surface symptom | "Medical Discharge ทำไม่ได้" — status menu accepts the click but visit stays at `Consultation Completed`. Generic error toast may appear. |
| Fix | See [ICD Coding](/concepts/icd-coding/#rule-2-selectproblem-is-not-the-same-as-save). Verify with `POST /emr/diagnosis/getdetails {patientvisituid}` — empty `diagnosis: []` confirms gate. |

### Browser back-navigation security policy popup

| Field | Value |
|---|---|
| Trigger | `history.back()` / `location.hash` mutation / browser back button |
| Surface symptom | Modal: *"As per the security policy, System does not process with back button navigation."* |
| Fix | Dismiss with OK. Use Angular `$state.go('<state-name>')` for all navigation. See `uat-recon/agent-uat-handoff` §2.3. |

### Idle session lock

| Field | Value |
|---|---|
| Trigger | ~5 min idle with no user input from MEDHIS's perspective. Long agent operations also count. |
| Surface symptom | Centered modal: *"Welcome back &lt;user&gt;. Your session is locked. Enter your password to log in again."* with `NO, SIGN ME OUT` / `YES, KEEP ME SIGNED IN` buttons. All page content gone — `document.body.innerText` no longer contains MRNs. |
| Detection | `document.body.innerText.includes('Your session is locked')` |
| Fix | **User re-auths.** Agents must NOT type the password. After re-auth, re-establish state via the §5 Phase 2 Step 0 recipe — server state is durable, only Angular scope is lost. |

### `isopdvisitclosed` pre-flight before Start consultation

| Field | Value |
|---|---|
| Trigger | Doctor Worklist `START` button (`vm.startConsultation`) |
| Pre-flight endpoint | `POST /mpi/patientvisit/isopdvisitclosed` |
| Surface symptom | START fails silently if the visit is already closed; banner shows stale state. |
| Fix | Refresh the worklist; pick a visit at `Screening Completed` status (VSTSTS3). |

### Settle-bill GL coverage check

| Field | Value |
|---|---|
| Trigger | `POST /billing/generatebill/settle` |
| Pre-flight endpoint | `POST /billing/generatebill/verifyGLcoverageexceeds` (per item) |
| Surface symptom | Settle fails if any line item exceeds payor's GL coverage and no override is provided. |
| Fix | For self-pay (payor `ชำระเงินเอง`), no GL — gate is a no-op. For agreement payors, fix coverage allocation in [Generate Bill Screen](/entities/generate-bill-screen/). |

## Anti-patterns observed in UAT

- Treating Medical Discharge as a pure UI status change (it has a server-side ICD-10 gate).
- Using browser back button (it triggers the security policy popup that disrupts flow).
- Letting an agent's long file write idle MEDHIS into session lock (plan refresh + re-establish before resuming UI interaction).

## Related

- [ICD Coding](/concepts/icd-coding/)
- [OPD Patient Flow](/workflows/opd-patient-flow/)
- [OP Billing Workflow](/workflows/op-billing-workflow/)
- `uat-recon/agent-uat-handoff` §7.4 (stop conditions), §7.7 (session lock)
