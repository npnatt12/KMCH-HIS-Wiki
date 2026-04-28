---
title: EMR Form Screen
type: entity
sources: ["17.MEDHIS Manual_EMR_Doctor V.2.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [entity, emr, doctor, screen, opd, ipd]
roles: [Doctor]
verified-on-uat: pending
---

# EMR Form Screen — หน้าจอบันทึกการตรวจรักษา

## Purpose

หน้าจอหลักสำหรับแพทย์บันทึกประวัติการตรวจรักษา ทั้ง OPD EMR และ IPD EMR — ครอบคลุม 11 sections การบันทึก, Vital Signs, Summary, และ Menu Functions

## Access Path

**OPD EMR:**
- Doctor Worklist → คลิก Patient Name
- OPD Worklist → คลิก Icon "View EMR" → กด START

**IPD EMR:**
- Doctor Worklist → InPatients → เลือกผู้ป่วย
- IPD → Ward Board → คลิกกล่องผู้ป่วย → Icon "View EMR"

---

## Screen Layout (4 ส่วน)

| ส่วน | ชื่อ | คำอธิบาย |
|-----|-----|---------|
| 1 | Patient Banner | แถบข้อมูลผู้ป่วย — HN, ชื่อ, อายุ, สิทธิ, แพ้ยา, Vital Signs ล่าสุด, Links |
| 2 | EMR Record | บันทึกข้อมูลทางคลินิก 11 sections |
| 3 | Summary View | สรุปข้อมูล Visit ปัจจุบัน; ดูประวัติ Visit เก่าได้ |
| 4 | Menu Function | ฟังก์ชันเพิ่มเติม (Appointment, Consult, Refer, Medical Certificate) |

---

## Patient Banner — Fields

| Field | คำอธิบาย |
|-------|---------|
| HN | เลขประจำตัวผู้ป่วย |
| ชื่อ-นามสกุล | ชื่อผู้ป่วย |
| อายุ | อายุผู้ป่วย |
| สิทธิการรักษา | สิทธิ์ปัจจุบัน |
| ประวัติแพ้ | รายการยา/สารที่แพ้ |
| Vital Signs | ค่า V/S ล่าสุด |
| Link Start Exam | เริ่มการตรวจ |
| Link PACS | เปิด PACS Viewer |
| Link เอกสาร | ดูเอกสารที่เกี่ยวข้อง |
| Visit Detail | รายละเอียด Visit |

---

## EMR Record Sections (11 ส่วน)

| # | Section | Input Methods ที่รองรับ |
|---|---------|----------------------|
| 1 | Chief Complaints | Free Text, Previous Data, Search, Ticksheet, Fav Ticksheet, Fav Note, Note, Audit |
| 2 | Present Illness | Free Text, Previous Data, Fav Note, Note, Audit |
| 3 | Past History | Free Text, Previous Data, Ticksheet, Fav Note, Note, Audit |
| 4 | Family History | Free Text, Previous Data, Ticksheet, Fav Note, Note, Audit |
| 5 | Personal History | Free Text, Previous Data, Ticksheet (Alcohol/Drug/Smoking), Fav Note, Note, Audit |
| 6 | Examination | Free Text, Previous Data, Fav Note, Note, Annotation, Form, Audit |
| 7 | Doctor Notes | Free Text, Previous Data, Fav Note, Note |
| 8 | Diagnosis | Free Text, Previous Data, Search, Ticksheet, Fav Ticksheet |
| 9 | ICD-10 | Previous Data, Search, Ticksheet, Fav Ticksheet |
| 10 | Procedure | Free Text, Previous Data, Search, Ticksheet, Fav Ticksheet, Audit |
| 11 | ICD-9 | Previous Data, Search, Ticksheet, Fav Ticksheet, Audit |

---

## Summary View — Icons

| Icon | ชื่อ | คำอธิบาย |
|------|-----|---------|
| Current Visit | เลือก Visit | จำนวน Visit ทั้งหมด; เลือก Visit ที่ต้องการ |
| Time Line | ไทม์ไลน์ | ดูประวัติแบบช่วงเวลา |
| Medicine | Drug Profile | รายการยาทั้งหมดที่เคยสั่ง |
| Vaccines Chart | วัคซีน | ประวัติการรับวัคซีน |
| Laboratory | Lab | ผลตรวจ [LAB](/modules/lab/) |
| Radiology | Radiology | ผลตรวจ [XRAY](/modules/xray/) |
| Pathology | Pathology | ผลตรวจ Pathology |
| Doctor Fee | DF | Doctor Fee ของแพทย์ Login |
| Procedure | หัตถการ | ประวัติหัตถการ |
| OR Schedule | นัดผ่าตัด | ประวัติการจองผ่าตัด |

---

## Vital Signs Views (3 แบบ)

| View | คำอธิบาย |
|------|---------|
| TABULAR CHART | ตารางตัวเลข |
| TPR CHART | กราฟ T/P/R/BP |
| CHARTING | กราฟที่ผู้ใช้เลือกเอง |

---

## IPD EMR — 6 tabs (UAT verified)

The IPD EMR template (`app/emr/ipdemr.tmpl.html` on UAT 2026-04-28) renders **6 tabs**:

1. **Daily Progress** — Progress notes, vitals over time
2. **Summary** — Admission summary, assessments
3. **Laboratory** — Lab results inline
4. **Radiology** — Radiology reports inline
5. **Pathology** — Pathology / specimen results
6. **Discharge Summary** — Final discharge documentation

OPD EMR (the existing 11-section layout documented above) and IPD EMR are distinct templates. The IPD layout is tab-based; the OPD layout is the section-stack already documented.

---

## IPD EMR — เพิ่มเติม

| ส่วน | คำอธิบาย |
|-----|---------|
| DAILY PROGRESS | ตาราง Daily/Continuous/Progress Notes |
| IPD Consult | ส่ง/รับ Consult ผู้ป่วยใน |
| DISCHARGE SUMMARY | บันทึก Discharge Summary (Template) |
| SUMMARY | สรุปข้อมูลการรักษา |
| LABORATORY | ผลตรวจ Lab |
| RADIOLOGY | ผลตรวจ Radiology |
| PATHOLOGY | ผลตรวจ Pathology |

---

## Key Buttons

| Button | Action | เงื่อนไข |
|--------|--------|---------|
| START | เริ่มพบแพทย์ | Popup บังคับเมื่อเข้า EMR |
| END | จบพบแพทย์ | สถานะ → Consultation Completed |
| + (Section) | ขยาย Section | คลิกเพื่อเปิดกล่องบันทึก |
| Save As Favourite | บันทึก Favourite Note | พิมพ์ข้อมูลแล้วกด Save As Favourite |
| Annotation | วาดภาพ | เฉพาะ Examination section |
| Audit | ดูประวัติ | ดูการบันทึกและแก้ไขทุก session |

---

## Related Workflows

- EMR Doctor Module — การใช้งานระบบ EMR แพทย์ครบถ้วน
- OPD Patient Flow — ขั้นตอนผู้ป่วยนอก
- Doctor Worklist Screen — หน้าจอก่อนเข้า EMR
- Order Entry Screen — บันทึกคำสั่งการรักษา
