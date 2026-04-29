---
title: OPD Screening Screen
type: entity
sources: ["3.MEDHIS_Manual_OPD V.1.docx"]
created: 2026-04-09
updated: 2026-04-29
tags: [entity, screen, opd, screening]
roles: [NurseOPD]
verified-on-uat: 2026-04-29
---

# OPD Screening Screen (หน้าจอคัดกรองผู้ป่วยนอก)

หน้าจอที่ใช้สำหรับบันทึก Vital Signs และเปลี่ยนสถานะผู้ป่วยในกระบวนการคัดกรองของ [OPD](/modules/opd/)

## Access Path

OPD → OPD Worklist → Click ผู้ป่วย (Status: Registered) → Visit Detail → Charting

## Purpose

- เปลี่ยนสถานะผู้ป่วยจาก Registered → Arrived → Screening Completed
- บันทึกค่า Vital Signs
- ระบุแพทย์ผู้ตรวจ (Assign Careprovider)
- ส่งชื่อผู้ป่วยเข้าห้องตรวจแพทย์

## ขั้นตอนการใช้งาน

1. Click ผู้ป่วยใน Registered column → Visit Detail เปิดขึ้น
2. กด Status change icon → เลือก **Arrived** → Status เปลี่ยนเป็น Arrived
3. Click **Charting** icon → เลือก **Vital Sign Chart** ใน PANELS
4. กรอกค่า Vital Signs → กด **Save**
5. (ถ้ายังไม่มีแพทย์) Click **Assign Careprovider** → พิมพ์ชื่อแพทย์ → ยืนยัน
6. Click Status change icon → เลือก **Screening Completed** → ชื่อผู้ป่วยปรากฏหน้าแพทย์

## Vital Sign Chart — Fields

| Field | ประเภท | Description |
|-------|--------|-------------|
| Ht / Wt / BMI / BSA / MAP | Number (auto-calc) | Height + Weight entered, BMI / BSA / MAP auto-computed and saved |
| BT / PR / RR / BP / SpO2 | Number | Body temp / Pulse / Respiration / Blood pressure / O2 saturation |
| รอบศีรษะ / รอบอก / รอบท้อง / รอบเอว | Number | Anthropometric measurements (cm) |
| LMP | Date | Last menstrual period (when applicable) |
| Pain Score | Number 0–10 | Pain assessment |

**หลังบันทึก:** ข้อมูล Vital Signs แสดงใน:
- EMR → ส่วน **Observation**
- **[Patient Banner](/entities/patient-banner/)** (ตามที่ตั้งค่าให้แสดง)

## Panels (CHARTING)

ใน CHARTING PANELS สามารถเลือก:
- **Vital Sign Chart** — บันทึกสัญญาณชีพ

## Status Transitions (ผ่านหน้านี้)

| จาก | ไป | ผู้กด | ผลลัพธ์ |
|-----|-----|-------|---------|
| Registered | Arrived | พยาบาล/เจ้าหน้าที่ OPD | รับผู้ป่วยเข้าแผนก |
| Arrived | Screening Completed | พยาบาล/เจ้าหน้าที่ OPD | ชื่อส่งไปหน้าแพทย์ |

## Assign Careprovider

| Field | Description |
|-------|-------------|
| ชื่อแพทย์ | Text search — พิมพ์ชื่อแพทย์ที่ต้องการ |

*ต้องระบุแพทย์ก่อนกด Screening Completed — ถ้าไม่มีแพทย์ ชื่อผู้ป่วยจะไม่ไปแสดงในหน้าแพทย์ที่ถูกต้อง*

## Validation / Error Conditions

- **ยังไม่มี Careprovider**: Screening Completed ได้ แต่ชื่อผู้ป่วยจะไม่ปรากฏในหน้าแพทย์ที่ระบุ
- **Vital Signs บน Banner**: ต้องตั้งค่าระบบก่อนว่าให้แสดง field ใดบน Banner

## Related Workflows

- [OPD Patient Flow](/workflows/opd-patient-flow/) — ขั้นตอน Registered → Arrived → Screening Completed

## Related

- [OPD](/modules/opd/) — module page
- [OPD Worklist Screen](/entities/opd-worklist-screen/) — หน้าจอหลัก OPD
- [Patient Banner](/entities/patient-banner/) — แสดง Vital Signs หลังบันทึก
- [OPD Patient Status](/concepts/opd-patient-status/) — 8 สถานะผู้ป่วยนอก

## UAT Verification (Phase 2, 2026-04-29)

Source: TCK-001 walkthrough Phase 2, see `uat-recon/agent-uat-handoff` §5 Recipe Phase 2.

### Other Charting Panels exposed at KMCH

In addition to `Vital Sign Chart`, the CHARTING PANELS list includes 14 cross-cutting charts. None are mandatory for a baseline OPD visit; populate as clinical context dictates.

| Panel | Use |
|---|---|
| NIHSS | Stroke severity |
| MEWS | Modified Early Warning Score |
| PEWS | Pediatric Early Warning Score |
| M-CHAT | Modified Checklist for Autism in Toddlers |
| Modified Barthel Index | ADL assessment |
| Pain Management | Pain follow-up |
| Malnutrition | Nutrition screening |
| Intake-Output | Fluid balance |
| Stroke Assessment | Stroke neuro check |
| Knee Assessment | Orthopedic |
| OSA | Obstructive sleep apnea |
| (additional KMCH-specific) | (per dept SOP) |

### Post-save behavior

After `vm.saveData()` succeeds, the toast `Charting Saved successfully` appears. The Charting screen does **not** auto-navigate to EMR; the operator returns to the [OPD Worklist Screen](/entities/opd-worklist-screen/) via `$state.go('triangular.opdworkbench.patientlist')` to continue the flow.

### Status transition sequence

The full nurse-side sequence verified:

1. `Registered → Arrived` via `vm.patientTracking({_id: VSTSTS2})`
2. Charting save (Vital Signs)
3. Assign Careprovider via dialog scope (cannot be driven by autocomplete UI; see handoff §2.4)
4. `Arrived → Screening Completed` via `vm.patientTracking({_id: VSTSTS3})`
