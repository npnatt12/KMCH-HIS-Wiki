---
title: MRD Module
titleTh: ระบบจัดเก็บเวชระเบียน
type: cheatsheet
sources: ["1.MEDHIS Manual_MRD_V2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, module, mrd]
---

## Purpose
จัดเก็บและติดตามแฟ้มเวชระเบียน — สร้างแฟ้ม จ่าย ยืม-คืน โอนย้าย และรวม HN ซ้ำกัน

## Access
**MRD → MRD Worklist / Folder Issue / Folder Return / Folder Requests / Folder Transfer / Patient Merge**

## Workflow

| Step | Actor | Action |
|------|-------|--------|
| 1 | ระบบ | New Register → สร้าง OPD Folder อัตโนมัติ |
| 2 | ระบบ | Admit → สร้าง IPD Folder อัตโนมัติ |
| 3 | จนท.เวชระเบียน | MRD Worklist → Requested → กด Issue → Status: Issued |
| 4 | จนท.เวชระเบียน | Appointment Issue — จ่ายแฟ้มล่วงหน้าตามนัด |
| 5 | จนท.เวชระเบียน | Direct Issue — ผู้ป่วย Walk-in ระบุ HN/Visit/แผนก → Issue |
| 6 | จนท.เวชระเบียน | Folder Return — รับแฟ้มคืน ระบุ HN/Visit/ห้อง → บันทึก |

## Key Screens
- **MRD Worklist** — 4 tabs: Registration Request, Manual Request, Returns, New Folder
- **Folder Issue** — Appointment Issue (ผู้ป่วยนัด) + Direct Issue (Walk-in)
- **Folder Return** — รับแฟ้มคืนจากแผนก
- **Patient Merge** — รวม HN ซ้ำ → ระบุ Primary + Secondary → Confirm

## Key Fields

| Field | หมายเหตุ |
|-------|---------|
| Folder ID / HN | ระบุแฟ้มที่ต้องการ |
| Visit | เลือก Visit ของแฟ้ม |
| Requesting Department | แผนกปลายทาง |
| MRD Store | OPD หรือ IPD |
| Status | Requested → Issued → Returned / Transferred / Cancelled |
| Reason (Folder Request) | Required — เหตุผลยืมแฟ้ม |
| Primary Patient (Merge) | HN ที่ต้องการคงไว้ |

## Integration
Registration → **MRD** (OPD Folder) ← Admission (IPD Folder) ← OPD/แผนกทั้งหมด (Folder Request/Transfer)
