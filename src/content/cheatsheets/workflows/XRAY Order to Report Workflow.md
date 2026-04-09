---
title: XRAY Order to Report Workflow
titleTh: ขั้นตอนการตรวจทางรังสีวินิจฉัย
type: workflow
sources: ["10.MEDHIS Manual_XRAY V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [cheatsheet, workflow, xray]
---

## Overview
แพทย์สั่ง X-ray → เจ้าหน้าที่รังสีลงทะเบียนและถ่ายภาพ → Radiologist อ่านผลและ Approve → แสดงผลใน EMR

## Steps
1. (แพทย์) EMR → Order → ค้นหารายการ หรือ Tick Sheet Tab Radiology → Save → ได้ Order No.
2. (เจ้าหน้าที่รังสี) Radiology Worklist → Tab NEW → ค้นหา → เลือกรายการ → Register → Registered
3. (เจ้าหน้าที่รังสี) Tab INPROGRESS → เลือก Registered → Execute → ระบุ Modality (required) + Radiologist (required) → Save → Executed
4. (Radiologist เท่านั้น) เลือก Executed → Report Entry → กรอก Result + Impression → เลือก Normal/Abnormal → Save
5. (Radiologist เท่านั้น) เลือก Report Entered → Approve Result → ผลส่งไป EMR → Report Authorized
6. (แพทย์) EMR Summary → Radiology → ดูผล; กด PACS Viewer เพื่อดูภาพ (ถ้าเชื่อมต่อ)

## Decision Points
- Report Entry: ใช้ Template Auto-fill ได้; หรือ Copy ผลเก่าจาก Tab Recent
- แก้ไขก่อน Approve: กด Report Entry อีกครั้ง → แก้ไข → Save
- หลัง Approve: Print Report, View Audit Log

## Key Rules
- Modality + Radiologist บังคับก่อน Execute; ขาดอย่างใดอย่างหนึ่งไม่สามารถ Save
- Report Entry + Approve Result: เฉพาะ Role Radiologist เท่านั้น
- PACS Viewer ใช้ดูภาพถ่ายรังสี (ถ้ามีระบบเชื่อมต่อ)
- Reset Result หลัง Authorize: กด Reset → Test Executed → ลงผลใหม่ได้

## Modules
EMR Doctor (สั่ง) → XRAY (Register → Execute → Report) → EMR (ดูผล)
