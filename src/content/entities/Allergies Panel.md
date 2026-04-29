---
title: Allergies Panel
type: entity
sources: [live UAT 2026-04-29, "17.MEDHIS Manual_EMR_Doctor V.2.docx"]
roles: [Doctor, NurseOPD]
verified-on-uat: 2026-04-29
created: 2026-04-29
updated: 2026-04-29
tags: [entity, panel, allergies, emr]
---

# Allergies Panel (แผงข้อมูลแพ้ยา/อาหาร)

EMR panel for recording drug/food/other allergies. Verified during TCK-001 UAT walkthrough (`uat-recon/agent-uat-handoff`) Phase 3g.

## Access Path

- From [OPD EMR Landing](/entities/opd-emr-landing/) right-side menu → Allergies
- Angular state: `triangular.emr.allergies`

## Buttons

| Button | Action | Endpoint |
|---|---|---|
| **NKDA** | One-click "no known drug allergies" | `POST /emr/drugalergy/setnoknownallergies` with `{patientuid, patientvisituid, departmentuid, noknowndrugallergies:true}` |
| New Drug Allergy | Add a drug allergy entry | (drug autocomplete) |
| New Food Allergy | Add a food allergy entry | (food autocomplete) |
| New Other Allergy | Add a non-drug/food allergy | — |

## UAT-verified behavior (2026-04-29)

- Pressing **NKDA** is the canonical fast path for the common case (90%+ of OPD visits).
- Successful save shows toast `Allergies saved successfully`.
- The flag persists at the patient level (cross-visit), not per-visit — verify before clearing.

## Endpoints

| Endpoint | Purpose |
|---|---|
| `POST /emr/drugalergy/setnoknownallergies` | NKDA writer |
| `POST /emr/drugalergy/getallergies` | Allergy list refresh |

## Common pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| NKDA toast appears but list still shows old allergies | Cached scope | Refresh via `getallergies` |
| Wiki implies free-text entry | Wiki out of date | Use the typed buttons; entry uses autocomplete, not free text |

## Related

- [OPD EMR Landing](/entities/opd-emr-landing/)
- [Drug Alert Types](/concepts/drug-alert-types/)
- `uat-recon/agent-uat-handoff` §5 Recipe Phase 3g
