---
title: Tasks Panel
type: entity
sources: [live UAT 2026-04-29, "18.MEDHIS Manual_Order V.2.docx"]
roles: [Doctor, NurseOPD, NurseIPD]
verified-on-uat: 2026-04-29
created: 2026-04-29
updated: 2026-04-29
tags: [entity, panel, tasks, orders, opd]
---

# Tasks Panel (แผงการสั่งงาน Tasks)

EMR sub-panel where doctors create non-billable nursing/care tasks and nurses execute them. Verified during TCK-001 UAT walkthrough (`uat-recon/agent-uat-handoff`) Phase 3 + Phase 4a.

## Access Path

- From [OPD EMR Landing](/entities/opd-emr-landing/) right-side menu → Tasks
- From Visit Details (NurseOPD side) → Tasks tab

## Doctor side — order a task

1. Open Tasks tab in EMR Landing
2. Pick a task from the **task master autocomplete** (`POST /clinicaldatamaster/taskmaster/search`)
   - For task **groups**, set `istaskgroup:true` → calls `/taskmasterset/search` instead
3. Set priority (Routine, STAT, etc.), continuous flag, comments
4. Save → `POST /enterprise/task/create`

Example exercised in UAT: TASK004 **Bed rest** (`_id 5ac2ee213a8a366efa903e64`), Routine, Continuous Task.

## Nurse side — execute or update tasks (bulk modal)

1. Open Tasks tab on Visit Details
2. Select one or many tasks
3. Click **UPDATE** → opens bulk update modal
4. The modal scope `vm.updateTasks()` pre-populates:
   - `vm.executedstatusuid` = `579b0bcbf3fd3fa90b83e32e` (ORDSTS3 — Executed)
   - `vm.cancelledstatusuid` = (cancelled status ref)
5. Pick status, write `replycomments`, Save → `POST /enterprise/task/updatetasks`
   - Payload: `{selectedtaskuids[], statusuid, replycomments}`

This **bulk update** pattern differs from the wiki's older click-execute-per-row description.

## UAT-verified behavior (2026-04-29)

- The bulk modal works on both single and multi-select.
- Executed status updates immediately; OPD Worklist refresh shows the change.
- No billable side-effect — Tasks are safe for fake-patient walkthroughs (unlike Drug / Lab / X-ray orders).

## Endpoints

| Endpoint | Purpose |
|---|---|
| `POST /clinicaldatamaster/taskmaster/search` | Task master autocomplete (set `istaskgroup:true` for groups) |
| `POST /enterprise/task/create` | Save patient task |
| `POST /enterprise/task/search` | Task list refresh |
| `POST /enterprise/task/updatetasks` | Bulk task status update |

## Common pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| Task master returns empty | Searched for group instead of leaf | Toggle `istaskgroup:true` |
| `replycomments` mandatory but blank | Some statuses require a comment | Fill the field before Save |
| Task disappears from list | Status moved to Executed/Cancelled and filter excludes those | Toggle filter to include closed statuses |

## Related

- [OPD EMR Landing](/entities/opd-emr-landing/)
- [Order Entry Screen](/entities/order-entry-screen/)
- [Order Types](/concepts/order-types/)
- `uat-recon/agent-uat-handoff` §3.6, §5 Recipe Phase 4
