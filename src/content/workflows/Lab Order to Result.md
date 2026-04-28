---
title: Lab Order to Result Workflow
type: workflow
sources: ["9.MEDHIS Manual_LAB V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [workflow, lab, laboratory]
roles: [Doctor, NurseOPD]
verified-on-uat: pending
---

# ขั้นตอนการตรวจทางห้องปฏิบัติการ (Lab Order to Result)

ขั้นตอนเต็มตั้งแต่แพทย์สั่งตรวจจนผลออกใน [LAB](/modules/lab/) module

## Flow Diagram

```
แพทย์สั่งตรวจ
     ↓
[1] Order → Status: Ordered (Tab NEW)
     ↓
[2] Specimen Collection → Status: Specimen Collected (Tab COLLECTED)
     ↓
[3] Accept/Reject
     ├── Accept → Status: Specimen Accepted (Tab INPROGRESS)
     │         ↓
     │   [4] Manual Result → Status: Report Entered
     │         ↓
     │   [5] Report Authorised → Status: Report Authorized (Tab COMPLETE)
     │         ↓
     │   [6] View in EMR
     │
     └── Reject → Status: Specimen Rejected (Tab ALL / Tab NEW)
               ↓
         (เก็บสิ่งส่งตรวจใหม่) → กลับขั้นตอน [2]
```

## ขั้นตอน

### 1. แพทย์สั่งตรวจ (Order)

**ผู้ดำเนินการ:** แพทย์ / พยาบาล (On behalf of)

**วิธีที่ 1 — Order Details:**
1. EMR → กดไอคอน Order → หน้า Order Details
2. พิมพ์ชื่อรายการใน Search Order Item
3. เลือกรายการ → กด + เพิ่มรายการถัดไปได้
4. เปลี่ยน Priority เป็น **STAT** ถ้าเร่งด่วน
5. กด Save → ได้ **Order No.**

**วิธีที่ 2 — Tick Sheet:**
1. EMR → Order → Tab **Laboratory**
2. เลือกรายการทีละตัว หรือเลือกทั้งกลุ่ม
3. กด **Order** → รายการไปแสดงใน Order Details
4. กด **Save** → ได้ **Order No.**

**กรณีพิเศษ:**
- **Duplicate Order**: ระบบแจ้งเตือน → ต้องระบุ Comments ก่อน Save (Comments แสดงที่ Order Detail)
- **STAT**: รายการแสดง**สีแดง**ทุกหน้าจอ (Order Details / [Lab Specimen Collection Screen](/entities/lab-specimen-collection-screen/) / Lab Worklist)

**Status หลังขั้นตอนนี้:** `Ordered`

---

### 2. เก็บสิ่งส่งตรวจ (Specimen Collection)

**ผู้ดำเนินการ:** พยาบาล / เจ้าหน้าที่

**หน้าจอ:** [Lab Specimen Collection Screen](/entities/lab-specimen-collection-screen/) (Laboratory → Specimen Collection → Tab NEW)

**ทีละรายการ:**
1. ค้นหารายการด้วย Filter (Department / Ward / Patient / Order No. / Date / Status)
2. เลือก Group by ตามต้องการ (Lab No. / Name / Order Date)
3. กด **Print Sticker** → พิมพ์ Lab Label
4. กด **Collect Specimen** → ยืนยัน → บันทึกสำเร็จ

**Batch Mode (หลายรายการ):**
1. กด Select All หรือเลือก checkbox แต่ละรายการ
2. ระบบแสดงจำนวนที่เลือก
3. กด **Print Sticker** → พิมพ์ทุก Label พร้อมกัน
4. กด **Collect Specimen** → ระบบแสดง Confirmation พร้อมรายการทั้งหมด (เลื่อนดูได้)
5. กด Confirm → บันทึกทุกรายการพร้อมกัน

**Status หลังขั้นตอนนี้:** `Specimen Collected` (Tab COLLECTED)

---

### 3. รับ/ปฏิเสธสิ่งส่งตรวจ (Accept / Reject)

**ผู้ดำเนินการ:** เจ้าหน้าที่ Lab

**หน้าจอ:** Lab Worklist

#### 3a. Accept Specimen

1. เลือกรายการ Specimen Collected
2. กด **Accept Specimen** → ระบบยืนยัน → ตอบ **Yes**
3. **(Batch)** เลือก Select All / checkbox → Accept Specimen → Yes

**Status หลัง Accept:** `Specimen Accepted` (Tab INPROGRESS)

#### 3b. Reject Specimen

1. เลือกรายการ
2. กด **Reject Specimen** → ระบบแสดงหน้าเลือกเหตุผล
3. เลือกเหตุผล → กด **Save**

**ผล:**
- Status: `Specimen Rejected` (แสดงใน Tab ALL ของ Lab Worklist)
- รายการกลับไปแสดงใน Specimen Collection Tab NEW
- ผู้เก็บสามารถ Collect Specimen อีกครั้ง (กลับขั้นตอน 2)

---

### 4. ลงผลการทดสอบ (Manual Result)

**ผู้ดำเนินการ:** เจ้าหน้าที่ Lab

**ใช้สำหรับ:** รายการที่**ไม่เชื่อมต่อ**กับ LIS (Laboratory Information System)

**หน้าจอ:** [Lab Result Entry Screen](/entities/lab-result-entry-screen/) (Lab Worklist → Manual Result)

**ขั้นตอน:**
1. เลือกรายการใน Tab INPROGRESS (Status = Specimen Accepted)
2. กด **Manual Result**
3. กรอกค่าใน **Value** (ระบบแสดง Normal Range อ้างอิง)
   - ค่าสูงกว่า Normal Range → **H** สีแดง
   - ค่าต่ำกว่า Normal Range → **L** สีแดง
4. (optional) กรอก Comment
5. กด **Save** → Status: `Report Entered`

**การแก้ไขผล (ก่อน Authorize):**
1. กด **Manual Result** อีกครั้ง
2. เลือก **Modify Reason** (บังคับ)
3. แก้ไขค่า → กด Save

---

### 5. รายงานผล (Report Authorized)

**ผู้ดำเนินการ:** เจ้าหน้าที่ Lab

1. เลือกรายการ Status = Report Entered
2. กด **Report Authorised**
3. ผลรายงานส่งไปยัง **EMR** ของผู้ป่วย

**Status หลังขั้นตอนนี้:** `Report Authorized` (Tab COMPLETE)

**ย้อนกลับหลัง Authorize:**
- กด **Reset Result** → Status กลับเป็น `Test Executed` (Tab INPROGRESS)
- ลงผลใหม่ได้ด้วย Manual Result

---

### 6. ดูผลใน EMR

**ผู้ดำเนินการ:** แพทย์ / พยาบาล

| Tab | คำอธิบาย |
|-----|---------|
| **Lab Result** | ผลปัจจุบัน |
| **Cumulative View** | เปรียบเทียบผลเก่า |
| **Charting** | แสดงผลเป็นกราฟ |

เข้าผ่าน: EMR → EMR Summary → **Laboratory** → เลือก Tab

---

## Status Transition Table

| จาก | ไปยัง | ปุ่ม/Action | ผู้ดำเนินการ | Tab ที่แสดง |
|-----|-------|------------|------------|------------|
| — | **Ordered** | Save Order | แพทย์ | NEW |
| Ordered | **Specimen Collected** | Collect Specimen | พยาบาล/เจ้าหน้าที่ | COLLECTED |
| Specimen Collected | **Specimen Accepted** | Accept Specimen | เจ้าหน้าที่ Lab | INPROGRESS |
| Specimen Collected | **Specimen Rejected** | Reject Specimen | เจ้าหน้าที่ Lab | ALL |
| Specimen Rejected | **Specimen Collected** | Collect Specimen (ใหม่) | พยาบาล/เจ้าหน้าที่ | COLLECTED |
| Specimen Accepted | **Report Entered** | Save (Manual Result) | เจ้าหน้าที่ Lab | INPROGRESS |
| Report Entered | **Report Authorized** | Report Authorised | เจ้าหน้าที่ Lab | COMPLETE |
| Report Authorized | **Test Executed** | Reset Result | เจ้าหน้าที่ Lab | INPROGRESS |
| Test Executed | **Report Entered** | Save (Manual Result) | เจ้าหน้าที่ Lab | INPROGRESS |

## Modules Involved

[EMR Doctor](/modules/emr-doctor/) (สั่ง) → [OPD](/modules/opd/)/[IPD](/modules/ipd/) (เก็บ specimen) → [LAB](/modules/lab/) (Accept + Result) → EMR (แสดงผล)
