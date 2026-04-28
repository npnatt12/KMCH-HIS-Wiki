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

- workflows/Pharmacy Dispensing Workflow — 5-step dispense (OP), IP Fill, OP Refills
- workflows/Pharmacy Med Reject Return Workflow — Med Reject, Med Return OP, GRNRET, Dispensed Return IP

## Reference screens

- entities/Pharmacy Dispensing Screen — Filter, Alert icons (11), action buttons
- entities/Drug Alert Popup — 11 alert types
- entities/Patient Banner
- entities/Order Entry Screen — read for context

## Permissions

See _role-permission-matrix#Pharmacist. Highlights:
- **Read+Write:** Pharmacy Dispensing, IP Fill, Med Reject/Return, Drug Alert review
- **Read-only:** Order Entry (no create), Stock Ledger
- **Hidden:** EMR Form write, Inventory Receive

## Concepts to know

- concepts/Drug Alert Types
- concepts/Order Types
