---
title: Odoo Vendor Bill Screen
type: entity
sources: ["phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf"]
roles: [FinanceAccounting, Procurement]
created: 2026-04-28
updated: 2026-04-28
tags: [entity, odoo, accounting, vendor-bill, accounts-payable]
verified-on-uat: 2026-04-28
---

# Odoo Vendor Bill Screen

## Purpose

Accounts payable screen for creating Vendor Bill from PO, without PO, or through Auto Complete.

## Access Path

Odoo → Accounting → Vendors → Bills  
or Purchase Order → Create Bill

## Fields

| Field | Required | Description |
|-------|----------|-------------|
| Vendor | Yes | Supplier |
| Auto Complete | Conditional | Select PO to default bill lines |
| Source Document | No | Reference source document |
| Origin | No | Original document |
| Bill Date | Yes | Document date |
| Bill Reference | No | Tax invoice reference |
| Accounting Date | No | Accounting posting date |
| Payment Reference | No | Payment reference |
| Receipt Bank | No | Bank account to pay |
| Due Date | No | Payment due date |
| Payment Terms | No | Payment condition |
| Journal | No | Accounting journal |
| Currency | No | Currency |
| Product lines | Yes | Product, analytic, qty, UOM, unit price, VAT, WHT, discount, total |
| Terms & Conditions | No | Additional terms |

## Button Actions

| Button | Result |
|--------|--------|
| Save | Save draft |
| Confirm | Draft → Posted; bill number appears; journal items generated |
| Register Payment | Start vendor payment |
| Add Credit Note | Create vendor refund/credit note |
| Add Debit Note | Create debit note |

## Rules

- For Storable/Consumable products with Control Policy = On received quantities, receipt must be validated before Create Bill appears.
- Journal Items are generated from Product, Tax, and Vendor mappings.

## Related Workflow

- [Odoo Purchase to Pay Workflow](/workflows/odoo-purchase-to-pay-workflow/)

