---
title: Telemedicine Consultation Session
type: entity
sources: ["phase-4-uat-documents/3. Telemed/4. Telemed - เอกสารการอบรมการใช้งาน และการดูแลระบบ.pdf", "phase-4-uat-documents/3. Telemed/เอกสารแนบงวดที่ 4 - Telemed /เอกสารแนบ 5 เอกสารขั้นตอนการใช้งานระบบแพทย์ทางไกล (Telemedicine).pdf"]
roles: [Patient, Doctor, Pharmacist, TelemedicineAdmin]
created: 2026-04-28
updated: 2026-04-28
tags: [entity, telemedicine, consultation, video-call]
verified-on-uat: 2026-04-28
---

# Telemedicine Consultation Session

## Purpose

Patient-facing call session in the Telemedicine app, initiated by doctor or pharmacist from the MEDHIS clinical workflow.

## Preconditions

| Precondition | Description |
|--------------|-------------|
| Appointment exists | Patient must have a Telemedicine appointment. |
| Patient logged in | If patient is not logged into the app, doctor cannot call. |
| Appointment confirmed | Normal visit flow confirms appointment before call time. |
| Doctor action | Doctor starts call from [Doctor Worklist Screen](/entities/doctor-worklist-screen/). |

## Session Controls

| Control / Element | Description |
|-------------------|-------------|
| Incoming call | Patient can accept or decline. |
| Doctor name | Shows doctor identity during session. |
| Progress time | Shows consultation duration/progress time. |
| Chat | Text communication during session. |
| Microphone toggle | Patient audio on/off. |
| Video toggle | Patient video on/off. |
| Hang up | End call. |
| Rating | After call ends, patient rates doctor with star rating. |

## Clinical Completion

After the call, doctor records treatment in [EMR Form Screen](/entities/emr-form-screen/), orders medication if needed, writes medical certificate if needed, and presses Medical Discharge.

## Related Pages

- [Telemedicine Visit Workflow](/workflows/telemedicine-visit-workflow/)
- [Telemedicine Medication Delivery Workflow](/workflows/telemedicine-medication-delivery-workflow/)
- [Telemedicine Appointment Status](/concepts/telemedicine-appointment-status/)

