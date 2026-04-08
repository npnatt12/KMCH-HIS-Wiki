---
title: Lab and Radiology Order Status
type: concept
sources: ["9.MEDHIS Manual_LAB V.1.docx", "10.MEDHIS Manual_XRAY V.1.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [concept, lab, radiology, status]
---

# Lab and Radiology Order Status

สถานะของรายการตรวจทางห้องปฏิบัติการ ([[LAB]]) และรังสีวินิจฉัย ([[XRAY]])

## Laboratory Status Flow

| # | Status | Thai | Tab | ผู้เปลี่ยน |
|---|--------|------|-----|-----------|
| 1 | **Ordered** | สั่งตรวจ | NEW | แพทย์ |
| 2 | **Specimen Collected** | เก็บสิ่งส่งตรวจแล้ว | COLLECTED | พยาบาล/เจ้าหน้าที่ |
| 3 | **Specimen Accepted** | รับสิ่งส่งตรวจแล้ว | INPROGRESS | เจ้าหน้าที่ Lab |
| 3a | **Specimen Rejected** | ปฏิเสธสิ่งส่งตรวจ | ALL | เจ้าหน้าที่ Lab |
| 4 | **Test Executed** | ดำเนินการตรวจ | INPROGRESS | (LIS/Reset) |
| 5 | **Report Entered** | ลงผลแล้ว | INPROGRESS | เจ้าหน้าที่ Lab |
| 6 | **Report Authorized** | รายงานผลแล้ว | COMPLETE | เจ้าหน้าที่ Lab |

## Radiology Status Flow

| # | Status | Thai | Tab | ผู้เปลี่ยน |
|---|--------|------|-----|-----------|
| 1 | **Ordered** | สั่งตรวจ | NEW | แพทย์ |
| 2 | **Registered** | ลงทะเบียนแล้ว | INPROGRESS | เจ้าหน้าที่รังสี |
| 3 | **Executed** | ถ่ายภาพแล้ว | INPROGRESS | เจ้าหน้าที่รังสี |
| 4 | **Report Entered** | ลงผลแล้ว | INPROGRESS | **Radiologist only** |
| 5 | **Report Authorized** | รายงานผลแล้ว | — | Radiologist |

## Visual Indicators

- **STAT Lab orders**: แสดง**สีแดง**ทุกหน้าจอ
- **Abnormal Lab results**: สีแดง + L (ต่ำ) / H (สูง)
- **Radiology Report Status**: Normal / Abnormal / None

## ที่ใช้งาน

- [[LAB]] → Lab Worklist / Specimen Collection
- [[XRAY]] → Radiology Worklist
- [[OPD]] / [[IPD]] → Specimen Collection, View results
- [[Billing]] → Drug/Lab order status check ก่อนออกบิล
