---
title: ICD Coding
type: concept
sources: [live UAT 2026-04-29]
roles: [Doctor, NurseOPD]
verified-on-uat: 2026-04-29
created: 2026-04-29
updated: 2026-04-29
tags: [concept, icd, diagnosis, emr, search-quality]
---

# ICD Coding (รหัสการวินิจฉัย ICD-10 ใน MEDHIS)

How ICD-10 codes are stored, searched, and persisted inside MEDHIS at KMCH. Behavior verified during the TCK-001 UAT walkthrough (`uat-recon/agent-uat-handoff`) (Phase 3f / Phase 5a).

## Why this matters

ICD-10 is a **server-side mandatory gate for Medical Discharge** — see [MEDHIS Server-Side Gates](/concepts/medhis-server-side-gates/). Two non-obvious rules govern how diagnosis codes work in this system, and getting either wrong silently blocks discharge with an HTTP 500 error.

## Rule 1 — Codes are stored without periods

The `clinicaldatamaster.problem` collection stores ICD-10 codes **with no separator**. Period-form searches return zero rows.

| Source code | Stored as | Display name |
|---|---|---|
| `Z00.0` | `Z000` | General medical examination |
| `A00.1` | `A001` | Cholera due to Vibrio cholerae 01, biovar eltor |
| `J18.9` | `J189` | Pneumonia, unspecified |

Practical consequence: if a user types `Z00.0` into the ICD 10 Browser the search returns empty. **Search by clinical phrase** (Thai or English `name`) instead — the endpoint `POST /clinicaldatamaster/problem/search` matches on `name`, not on `code`.

## Rule 2 — `selectProblem` is not the same as save

Inside the ICD 10 Browser dialog (`vm.queryProblem` / `vm.selectProblem`), selecting a problem **only resolves the dialog promise**. The parent EMR Diagnosis controller's `mdSelectedItemChange()` handler runs but does **not** call the persistence endpoint.

To persist a diagnosis server-side the parent controller must explicitly call `vm.addDiagnosisData(prob)` which fires `POST /emr/diagnosis/create`. Without that call, the diagnosis row is never created, and Medical Discharge will fail with `ERRORS.ICD10ISMANDATORYFORMEDICALDISCHARGE`.

This is the **silent no-op pitfall**. See [MEDHIS Server-Side Gates](/concepts/medhis-server-side-gates/#icd10ismandatoryformedicaldischarge).

## Rule 3 — `EMR_CHRONIC_DISEASE_DIALOG` feature flag

The `diagnosisPopup` flow (chronic-disease dialog) is gated by feature flag `EMR_CHRONIC_DISEASE_DIALOG`. KMCH UAT has this flag **disabled**. The working alternative is the in-panel button:

```html
<button aria-label="ICD 10 Browser" ng-click="showIcd10Browser()">
```

If wiki/manual references `diagnosisPopup`, treat it as conditionally available; the ICD 10 Browser is the always-on path at KMCH.

## Endpoints

| Endpoint | Purpose |
|---|---|
| `POST /clinicaldatamaster/problem/search` | Autocomplete; payload `{name, limit, page}`; matches by `name` only. |
| `POST /emr/diagnosis/getdetails` | List existing diagnoses on a visit; payload `{patientvisituid}`. Empty array means discharge will be blocked. |
| `POST /emr/diagnosis/create` | Persist new diagnosis; payload includes `{patientuid, patientvisituid, diagnosis: {...}}`. Triggered by `vm.addDiagnosisData(prob)`. |
| `POST /emr/diagnosis/update` | Update existing diagnosis. |

## Anti-patterns observed in UAT

- Selecting a problem in the ICD 10 Browser dialog and assuming it persisted (it didn't).
- Searching by code `Z00.0` and concluding the system "doesn't have Z00.0" (it does, as `Z000`).
- Calling `$state.go('triangular.emr.diagnosis')` from outside EMR — patient context is lost, banner is blank, save fails. Always enter EMR via `vm.openPatientEMRFromWorkbench(row)` from the [Doctor Worklist Screen](/entities/doctor-worklist-screen/) first.

## Related

- [MEDHIS Server-Side Gates](/concepts/medhis-server-side-gates/)
- [OPD Doctor EMR Workflow](/workflows/opd-doctor-emr-workflow/)
- [OPD EMR Landing](/entities/opd-emr-landing/)
- `uat-recon/agent-uat-handoff` §3.6, §5 Recipe Phase 5a
