---
title: Odoo ERP Module
type: module
sources: ["phase-4-uat-documents/2. Odoo ERP/2. Odoo - รายงานผลการทดสอบเชื่อมต่อ Odoo กับระบบต่างๆ.pdf", "phase-4-uat-documents/2. Odoo ERP/3. Odoo - รายงานผลการทดสอบระบบ (UAT).pdf", "phase-4-uat-documents/2. Odoo ERP/4. Odoo - คู่มือสำหรับการฝึกอบรมผู้ใช้งานหลักระบบ ERP (User Manual).pdf"]
created: 2026-04-28
updated: 2026-04-28
tags: [module, odoo, erp, finance, inventory, procurement]
verified-on-uat: "2026-04-28"
---

# Odoo ERP — ระบบบริหารจัดการทรัพยากรองค์กร

## Purpose

[Odoo ERP](/modules/odoo-erp/) เป็นระบบบริหารทรัพยากรองค์กรของ KMCH ใช้สำหรับบัญชี การเงิน จัดซื้อ สินค้าคงคลัง พัสดุ คลังยา เวชภัณฑ์ ข้อมูลคู่ค้า การขาย/รับรู้รายได้ Time Attendance และการเชื่อมข้อมูลกับ MEDHIS, payroll, และ budget.

## Technical Environment

| Component | Value |
|-----------|-------|
| Application | Odoo Enterprise V16 |
| Database | PostgreSQL 12.22 |
| OS | Ubuntu Linux 20.04.6 LTS |
| Test tool | Google Chrome |

## Functional Domains

| Domain | Main Functions | Related Pages |
|--------|----------------|---------------|
| Master Data | Company, user, role/authorization, fiscal year, journal, chart of accounts, analytic account, taxes, payment terms, vendor, customer, product | [Odoo Accounting Forms](/entities/odoo-accounting-forms/) |
| Inventory | Product/UOM, warehouse/location, routes/rules, lots, receipts, internal transfer, adjustments, scrap, returns, reordering, landed cost, stock reports | [Odoo Inventory Operation Screen](/entities/odoo-inventory-operation-screen/) |
| Purchase A/P | RFQ, Purchase Order, borrow medicine purchase, PO cancellation, vendor bills, vendor payment | [Odoo Purchase Order Screen](/entities/odoo-purchase-order-screen/), [Odoo Vendor Bill Screen](/entities/odoo-vendor-bill-screen/), [Odoo Purchase to Pay Workflow](/workflows/odoo-purchase-to-pay-workflow/) |
| Sales A/R | Customer invoice, credit note, debit note, billing note, customer payment | [Odoo Billing and Receivables Workflow](/workflows/odoo-billing-and-receivables-workflow/) |
| Accounting | Journal entry, tax reports, withholding tax, GL, trial balance, P&L, balance sheet, cash flow, vouchers, receipt/invoice printouts | [Odoo Accounting Forms](/entities/odoo-accounting-forms/) |
| Interface | Product, Goods Receipt, Inventory Adjustment, Delivery/stock movement, Receipt, Invoice, Deposit, Onward, Budget, Payroll | [HIS ERP Interface](/concepts/his-erp-interface/) |

## UAT Summary

| Area | Status |
|------|--------|
| Financial Management + Payment & Billing + accounting forms | ผ่าน |
| Purchase A/P | ผ่าน |
| Inventory | ผ่าน |
| Time Attendance | ผ่าน |
| [HIS ERP Interface](/concepts/his-erp-interface/) | ผ่าน |
| Budget interface route | ผ่าน / พร้อม |
| Payroll interface route | ผ่าน / พร้อม |

## Important Rules

- Master Data Location ใน Odoo ต้องตรงกับ Store ใน HIS สำหรับยาและเวชภัณฑ์ เพื่อให้ interface การรับ เบิก เคลื่อนย้าย และปรับปรุงสต็อกทำงานได้.
- การเคลื่อนย้ายยาและเวชภัณฑ์ควรทำใน HIS แล้วส่งข้อมูลไปยัง Odoo ทุกสิ้นวัน.
- HIS ไม่ควรแก้ไขเอกสารขายเดิมหลังส่ง interface แล้ว; ทำได้โดยการยกเลิกและส่งรายการแก้ไขตามรอบ.
- Payroll และ Budget interface ถูกเตรียมไว้สำหรับระบบต้นทางในอนาคต โดยต้องส่ง field ตามโครงสร้างที่ Odoo กำหนด.

## Key Workflows

- [Odoo Purchase to Pay Workflow](/workflows/odoo-purchase-to-pay-workflow/)
- [Odoo Billing and Receivables Workflow](/workflows/odoo-billing-and-receivables-workflow/)
- [MEDHIS Odoo Revenue Interface Workflow](/workflows/medhis-odoo-revenue-interface-workflow/)
- [MEDHIS Odoo Inventory Interface Workflow](/workflows/medhis-odoo-inventory-interface-workflow/)

## Screens / Entities

- [Odoo Purchase Order Screen](/entities/odoo-purchase-order-screen/)
- [Odoo Vendor Bill Screen](/entities/odoo-vendor-bill-screen/)
- [Odoo Inventory Operation Screen](/entities/odoo-inventory-operation-screen/)
- [Odoo Accounting Forms](/entities/odoo-accounting-forms/)

