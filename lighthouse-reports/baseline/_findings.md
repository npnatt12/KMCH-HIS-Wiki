# Baseline Lighthouse findings — 2026-04-28

## Production target
Mobile Lighthouse (slow 4G, mid-tier device emulation), ≥90 on Performance, Accessibility, Best Practices. SEO not measured.

## Tested URLs
1. `https://kmch-wiki.vercel.app/` — home (Hero + RoleGrid + ModuleGridV2 + FooterV2)
2. `https://kmch-wiki.vercel.app/roles/doctor/` — role hub
3. `https://kmch-wiki.vercel.app/workflows/opd-patient-flow/` — article (substituted from spec's non-existent `/workflows/opd-patient-status/`; that path is a *concept* in the vault, not a workflow — at `/concepts/opd-patient-status/` on prod)

## Per-URL scores (3 runs each)

| URL | Perf | A11y | BP |
|---|---|---|---|
| `/` | 90 / 91 / 93 | 100 / 100 / 100 | 100 / 100 / 100 |
| `/roles/doctor/` | 94 / 94 / 96 | 100 / 100 / 100 | 100 / 100 / 100 |
| `/workflows/opd-patient-flow/` | 87 / 94 / 94 | 96 / 96 / 96 | 100 / 100 / 100 |

(All scores out of 100. SEO category not asserted.)

## Assertion result

`npx @lhci/cli assert` → **all results processed, no failures**.

Median scores per URL pass the ≥90 threshold on all three categories. The single 87 on the workflow page is an outlier on one of three runs; median is 94.

## Implication for plan Tasks 3.2 – 3.6

Tasks 3.2 (font preload + hero clamp), 3.3 (touch targets + tables), 3.4 (search modal + a11y), 3.5 (iteration-1 reports), and 3.6 (iterate until ≥90) were defensive fixes contingent on the baseline reporting failures. **The baseline reports no failures**, so all five tasks are no-ops and skipped.

## Unaddressed concerns (intentional)

- **A11y is 96 on the workflow page**, not 100. Lighthouse flagged the 4-point gap as an audit failure that is below the audit's pass threshold but above our 90 minimum. Out of scope for v2.2 since we only target ≥90; can revisit in a future a11y-polish task.
- **Real-device smoke** is still scheduled (Task 3.7) — Lighthouse Mobile is an emulation, not a real phone. Things like touch-target ergonomics, horizontal scroll on narrow viewports, and FAQ accordion behavior are best validated on a real device.
- **Larger-touched content from this session** (243 pages including new Phase 4 entities/workflows) hasn't been re-measured because it isn't on production yet — this branch needs to ship before we can Lighthouse-test it. Revisit after merge.

## Reports
HTML and JSON reports for all 9 runs (3 URLs × 3 runs) are in this directory.
