---
title: XRAY Order to Report Workflow
type: workflow
sources: ["10.MEDHIS Manual_XRAY V.1.docx"]
created: 2026-04-09
updated: 2026-04-09
tags: [workflow, xray, radiology]
roles: [Doctor, XRayTech]
verified-on-uat: pending
---

# ขั้นตอนการตรวจทางรังสีวินิจฉัย (XRAY Order to Report)

ขั้นตอนเต็มตั้งแต่แพทย์สั่งตรวจจนผลออกใน [XRAY](/modules/xray/) module

## Flow Diagram

```
แพทย์สั่งตรวจ
     ↓
[1] Order → Status: Ordered (Tab NEW)
     ↓
[2] Register → Status: Registered (Tab INPROGRESS)
     ↓
[3] Execute → Status: Executed (Tab INPROGRESS)
     ↓
[4] Report Entry (Radiologist only) → Status: Report Entered (Tab INPROGRESS)
     ↓
[5] Approve Result (Radiologist only) → Status: Report Authorized
     ↓
[6] View in EMR (แพทย์/พยาบาล)
```

## ขั้นตอน

### 1. แพทย์สั่งตรวจ (Order)

**ผู้ดำเนินการ:** แพทย์ / พยาบาล (On behalf of)

**วิธีที่ 1 — Order Details:**
1. EMR → กดไอคอน Order → หน้า Order Details
2. พิมพ์ชื่อรายการใน Search Order Item
3. เลือกรายการ → กด + เพิ่มรายการถัดไปได้
4. กด **Save** → ได้ **Order No.**

**วิธีที่ 2 — Tick Sheet:**
1. EMR → Order → Tab **Radiology**
2. เลือกรายการทีละตัว หรือเลือกทั้งกลุ่ม
3. กด **Order** → รายการไปแสดงใน Order Details
4. กด **Save** → ได้ **Order No.**

**Status หลังขั้นตอนนี้:** `Ordered`

---

### 2. ลงทะเบียน (Register Order)

**ผู้ดำเนินการ:** เจ้าหน้าที่รังสีเทคนิค

**หน้าจอ:** [XRAY Register Screen](/entities/xray-register-screen/) (Radiology → Radiology Worklist → Tab NEW)

**ขั้นตอน:**
1. ค้นหารายการด้วย Filter (Department / Ward / Modality / Patient / Order No. / Date)
2. เลือก Group by ตามต้องการ (X-Ray No. / Name / Order Date / Radiology Order)
3. เลือกรายการ
4. กด **Register**

**Status หลังขั้นตอนนี้:** `Registered` (ย้ายไป Tab INPROGRESS)

---

### 3. บันทึกการถ่ายภาพ (Execute Order)

**ผู้ดำเนินการ:** เจ้าหน้าที่รังสีเทคนิค

**หน้าจอ:** Radiology Worklist → Tab INPROGRESS → เลือกรายการ Registered

**ขั้นตอน:**
1. เลือกรายการ Status = Registered
2. กด **Execute** → ระบบแสดงหน้า Execute Radiology Order
3. กรอก **Modality** (บังคับ) — ประเภทเครื่องที่ใช้จริง
4. กรอก **Radiologist** (บังคับ) — รังสีแพทย์ผู้อ่านผล
5. (optional) กรอก Comments
6. กด **Save**

> ไม่สามารถ Save ได้ถ้าไม่กรอก Modality และ Radiologist

**Status หลังขั้นตอนนี้:** `Executed`

---

### 4. อ่านผลและบันทึก (Report Entry)

**ผู้ดำเนินการ:** **Radiologist เท่านั้น** (Role ต้องถูกกำหนดเป็น Radiologist ในระบบ)

**หน้าจอ:** [XRAY Report Screen](/entities/xray-report-screen/) (Radiology Worklist → Tab INPROGRESS → เลือกรายการ Executed → Report Entry)

**ขั้นตอน:**
1. เลือกรายการ Status = Executed
2. กด **Report Entry**
3. (optional) กด **PACS Viewer** → ดูภาพถ่ายรังสี (ถ้ามีการเชื่อมต่อ)
4. กรอก **Result** (ผลการอ่านภาพ)
5. กรอก **Impression** (ผลการวินิจฉัย)
6. เลือก **Status**: Normal / Abnormal / None
7. กด **Save**

**ทางเลือกอื่น — ใช้ Template:**
1. เลือก Template จาก Panel ซ้าย → ยืนยัน YES
2. ระบบ Auto-fill Result + Impression → แก้ไขได้ก่อน Save

**ทางเลือกอื่น — Copy ผลเก่า:**
1. กด Tab **Recent** → เลือกผลเก่า
2. กด Copy Result (เฉพาะ Result) หรือ Copy All (Result + Impression) → ยืนยัน YES

**การแก้ไขก่อน Approve:**
- กด Report Entry อีกครั้ง → แก้ไข → Save

**Status หลังขั้นตอนนี้:** `Report Entered`

---

### 5. อนุมัติผล (Approve Result)

**ผู้ดำเนินการ:** **Radiologist เท่านั้น**

1. เลือกรายการ Status = Report Entered
2. กด **Approve Result**
3. ผลส่งไปยัง **EMR** ของผู้ป่วย

**Status หลังขั้นตอนนี้:** `Report Authorized`

**หลัง Approve:**
- **Result View** → ดูผลที่บันทึก
- **Print Report** → พิมพ์รายงานผลทางรังสี
- **View Audit Log** → ประวัติสถานะทุกขั้นตอน

---

### 6. ดูผลใน EMR

**ผู้ดำเนินการ:** แพทย์ / พยาบาล

- EMR Summary → **Radiology** → ดูผลการตรวจ
- กด PACS Viewer → เปิดระบบภาพถ่ายรังสี (ถ้าเชื่อมต่อ)

---

## Status Transition Table

| จาก | ไปยัง | ปุ่ม/Action | ผู้ดำเนินการ | Tab ที่แสดง |
|-----|-------|------------|------------|------------|
| — | **Ordered** | Save Order | แพทย์ | NEW |
| Ordered | **Registered** | Register | เจ้าหน้าที่รังสี | INPROGRESS |
| Registered | **Executed** | Execute → Save (Modality+Radiologist) | เจ้าหน้าที่รังสี | INPROGRESS |
| Executed | **Report Entered** | Report Entry → Save | Radiologist | INPROGRESS |
| Report Entered | **Report Entered** (updated) | Report Entry → แก้ไข → Save | Radiologist | INPROGRESS |
| Report Entered | **Report Authorized** | Approve Result | Radiologist | — |

## เปรียบเทียบกับ LAB

| | [Lab Order to Result](/workflows/lab-order-to-result/) | XRAY Order to Report |
|---|------------------------|---------------------|
| ขั้นตอนพิเศษ | Specimen Collection + Accept/Reject | Register + Execute |
| ขั้นตอนทั้งหมด | 6 | 5 |
| Role Restriction | ไม่มีสำหรับ Manual Result | Radiologist สำหรับ Report Entry + Approve |
| Copy ผลเก่า | ไม่มี | Tab Recent → Copy Result / Copy All |
| Template | ไม่มี | ใช้ Template Auto-fill ได้ |
| External system | LIS | PACS Viewer |

## Modules Involved

[EMR Doctor](/modules/emr-doctor/) (สั่ง) → [XRAY](/modules/xray/) (Register + Execute + Report) → EMR (แสดงผล)
