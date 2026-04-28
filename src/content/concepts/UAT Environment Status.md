---
title: UAT Environment Status
type: concept
sources: [uat-recon/_probe-results.md]
roles: []
verified-on-uat: "2026-04-28"
created: 2026-04-28
updated: 2026-04-28
tags: [uat, environment, configuration]
---

# UAT Environment Status

> ⚠ The UAT instance at `10.128.12.68:8080` is not fully configured. Several core configuration documents are null. Some screens may show empty states or behave differently from production until KMCH IT seeds these.

## Null configuration documents (as of 2026-04-28)

| Endpoint | Status | What it controls |
|---|---|---|
| `/framework/orgsetting/getdetail` | `null` | Organization-wide defaults |
| `/framework/emrsetting/getdetail` | `emrsetting:null` (emrTabs object present) | EMR template settings |
| `/framework/ordersetting/getdetail` | `null` | Order Entry behavior |
| `/framework/inpatientsetting/getdetail` | `null` | IPD-specific settings |

## Implications for walkthroughs

- Order Entry screens may not show order categories / sets defined in production
- EMR templates may render with default tabs only (no custom sections)
- IPD-specific defaults (bed categories, charge templates) absent
- Worklist filters may show empty default sets

## Recommendation

Before completing Phase 1 walkthroughs, confirm with KMCH IT whether:
1. UAT should be initialized with sample configuration to mirror production
2. Or the null state is expected and walkthroughs should account for empty configs

## Authentication notes (recon-derived)

- Auth: `GET /framework/security/authenticate/{loginname}/{shake128(md5(password), 256)}`
- Session token mechanism: `POST /framework/security/loginsession` returns `sessiontoken`
- Subsequent clinical API calls require headers: `incus-token`, `roleuid`, `useruid`, `orguid`, `departmentuid`, `utcoffset`
- Login uses local auth (Active Directory disabled per `loginwithactivedirectory: false`)

## Role landing pages (UAT-confirmed)

| Role code | Default landing |
|---|---|
| ADMINSYSTEM | `triangular.opdworkbench` |
| DOCTORUSER | `triangular.doctorworkbench` |
| NURSEOPDOFFICER | `triangular.opdworkbench` |
| NURSEIPDOFFICER | `triangular.wardview` |
| PHARMACISTOFFICER | `triangular.dispenseworkbench` |
| NURSEOROFFICER | `triangular.orworkbench` |
| XRAYTECH | `triangular.radiologyworkbench` |
| ITSUPPORTOFFICER | `triangular.opdworkbench` |

Source: full role detail responses captured in `uat-recon/_probe-results.md`.
