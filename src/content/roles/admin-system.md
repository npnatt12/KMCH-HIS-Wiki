---
title: Admin System
type: role
role-id: AdminSystem
icon: settings
accent: '#6E665C'
created: 2026-04-27
updated: 2026-04-29
verified-on-uat: pending
status: tier-2-pending
tags: [role, admin]
---

# Admin System

> ผู้ดูแลระบบ — Cross-functional admin: Registration support, MRD, Billing, Inventory, Diet, CSSD configurations and worklist supervision.

> **Status:** Tier 2 — UAT recon pending (Phase 5). Likely covers many sub-departments — recon will determine sub-role distinctions.

## Daily flows

- [New Patient Registration](/workflows/new-patient-registration/)
- [MRD Folder Issue Return Workflow](/workflows/mrd-folder-issue-return-workflow/)
- [OP Billing Workflow](/workflows/op-billing-workflow/)
- [Billing IP Settlement Workflow](/workflows/billing-ip-settlement-workflow/)
- [Inventory Receive Workflow](/workflows/inventory-receive-workflow/)
- [Inventory Transfer Request Workflow](/workflows/inventory-transfer-request-workflow/)
- [Diet Order to Kitchen Workflow](/workflows/diet-order-to-kitchen-workflow/)
- [CSSD Request to Sterilize Workflow](/workflows/cssd-request-to-sterilize-workflow/)

## Reference screens

- [Patient Search Screen](/entities/patient-search-screen/)
- [Patient Demographics Screen](/entities/patient-demographics-screen/)
- [MRD Worklist Screen](/entities/mrd-worklist-screen/)
- [Billing Settlement Screen](/entities/billing-settlement-screen/)
- [OP Cashier Worklist](/entities/op-cashier-worklist/) — billing intake screen (`triangular.cashierworklist`)
- [Generate Bill Screen](/entities/generate-bill-screen/) — atomic settle action for self-pay (`vm.settleBill()`)
- [Inventory Receive Screen](/entities/inventory-receive-screen/)
- [Inventory Transfer Screen](/entities/inventory-transfer-screen/)
- [Diet Order Entry Screen](/entities/diet-order-entry-screen/)
- [CSSD Request Screen](/entities/cssd-request-screen/)

## Permissions

See the role-permission matrix (populated in Phase 5).

## Concepts to know

- [Payor and Treatment Rights](/concepts/payor-and-treatment-rights/)
- [Patient Types](/concepts/patient-types/)
- [Payment Modes](/concepts/payment-modes/)
- [MEDHIS Server-Side Gates](/concepts/medhis-server-side-gates/) — non-obvious server-side blockers (GL coverage, idle session lock, isopdvisitclosed)
