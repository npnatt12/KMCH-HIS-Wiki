---
title: Pharmacist
type: role
role-id: Pharmacist
icon: pill
accent: '#A8362F'
created: 2026-04-27
updated: 2026-04-27
verified-on-uat: pending
status: tier-1
tags: [role, clinical, pharmacy]
---

# Pharmacist

> เภสัชกร — Dispensing OP/IP, drug alerts, med reject/return, stock ledger.

## Daily flows

- [Pharmacy Dispensing Workflow](/workflows/pharmacy-dispensing-workflow/) — 5-step dispense (OP), IP Fill, OP Refills
- [Pharmacy Med Reject Return Workflow](/workflows/pharmacy-med-reject-return-workflow/) — Med Reject, Med Return OP, GRNRET, Dispensed Return IP

## Reference screens

- [Pharmacy Dispensing Screen](/entities/pharmacy-dispensing-screen/) — Filter, Alert icons (11), action buttons
- [Drug Alert Popup](/entities/drug-alert-popup/) — 11 alert types
- [Patient Banner](/entities/patient-banner/)
- [Order Entry Screen](/entities/order-entry-screen/) — read for context

## Permissions

Permission matrix wires after Phase 1 UAT recon.
- **Read+Write:** Pharmacy Dispensing, IP Fill, Med Reject/Return, Drug Alert review
- **Read-only:** Order Entry (no create), Stock Ledger
- **Hidden:** EMR Form write, Inventory Receive

## Concepts to know

- [Drug Alert Types](/concepts/drug-alert-types/)
- [Order Types](/concepts/order-types/)
