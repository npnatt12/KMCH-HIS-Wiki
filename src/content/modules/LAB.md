---
title: LAB — Laboratory Module
type: module
sources: ["9.MEDHIS Manual_LAB V.1.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [module, lab, laboratory]
verified-on-uat: pending
---

# LAB — ระบบงานห้องปฏิบัติการ (Laboratory)

## Purpose

ระบบจัดการตรวจทางห้องปฏิบัติการตั้งแต่สั่งตรวจ เก็บ specimens รับ/ปฏิเสธ specimens จนลงผลและรายงาน

## Access

- **EMR** → Order icon → Order Details / Tick Sheet (Lab tab) — สั่งตรวจ
- **Laboratory → Specimen Collection** — เก็บสิ่งส่งตรวจ
- **Laboratory → Lab Worklist** — Accept/Reject, Manual Result

## [Status Flow](/workflows/lab-order-to-result/)

```
Ordered → Specimen Collected → Specimen Accepted → [Test Executed] → Report Entered → Report Authorized
                                    ↓ (reject)
                            Specimen Rejected → (re-collect) → Ordered
```

## Key Workflows

### 1. Order (สั่งตรวจ)

**Order Details** (search):
- พิมพ์ Search Order Item → เลือกรายการ → กด + เพิ่มรายการ → Save
- **Duplicate Order**: ระบบตรวจจับรายการซ้ำ → ต้องระบุ Comments (บันทึกแล้วแสดงที่ด้านหลัง Detail)
- **STAT Priority**: เปลี่ยน Priority เป็น STAT → แสดง**สีแดง**ทุกหน้าจอ (Order Details / Specimen Collection / Lab Worklist)

**Tick Sheet** (Lab tab):
- เลือกรายการทีละตัว หรือเลือกทั้งกลุ่ม → Order → แสดงใน Order Details → Save
- ระบบแสดง **Duplicate Order** หากสั่งซ้ำกับครั้งก่อน
- เมื่อ Save สำเร็จ ระบบแสดง **Order No.**

### 2. Specimen Collection (เก็บสิ่งส่งตรวจ)

#### หน้าจอ [Lab Specimen Collection Screen](/entities/lab-specimen-collection-screen/)

- Laboratory → Specimen Collection → Tab **NEW** (Default)
- **Filter**: Department, Ward, Careprovider, Patient, Encounter Type, Order No., Date From–To, Status
- **Group by**: Lab No. (Order No. / Lab No.) / Name (ชื่อผู้ป่วย) / Order Date (วันที่สั่ง)
- กด **Clear** เพื่อ Reset การ Group

#### การเก็บตัวอย่างทีละรายการ

1. เลือกรายการที่ต้องการ
2. กด **Print Sticker** → พิมพ์ Lab Label
3. กด **Collect Specimen** → ระบบแสดง Confirmation popup
4. กด Confirm → Status: Ordered → **Specimen Collected** → ย้ายไป Tab **COLLECTED**

#### Batch Mode (หลายรายการพร้อมกัน)

1. กด Select All (checkbox บน) หรือ เลือก checkbox ทีละรายการ
2. ระบบแสดงจำนวนรายการที่เลือกด้านบน
3. กด **Print Sticker** → พิมพ์ Lab Label ทุกรายการที่เลือก
4. กด **Collect Specimen** → ระบบแสดง Confirmation พร้อมรายการทั้งหมด (เลื่อนดูได้)
5. กด Confirm → Status ทุกรายการเปลี่ยนเป็น **Specimen Collected**

### 3. Accept/Reject Specimen

รายการตรวจจะแสดงใน **Lab Worklist** หลังจากมีการ Specimen Collected จากหน่วยงาน

#### Accept Specimen (รับสิ่งส่งตรวจ)

- กด **Accept Specimen** → ระบบแสดงข้อความยืนยัน → ตอบ **Yes**
- Status: **Specimen Accepted** → ย้ายไป Tab **INPROGRESS**
- **Batch Accept**: เลือก Select All หรือ checkbox → กด Accept Specimen → Yes → ยืนยันพร้อมกัน

#### Reject Specimen (ปฏิเสธสิ่งส่งตรวจ)

- กด **Reject Specimen** → ระบบแสดงหน้าจอให้เลือก**เหตุผล**
- กด **Save** → Status: **Specimen Rejected**
  - แสดงใน Lab Worklist Tab **ALL**
  - แสดงใน Specimen Collection Tab **NEW** (เพื่อให้เก็บใหม่)
- ผู้ที่เก็บสิ่งส่งตรวจสามารถกด **Collect Specimen** อีกครั้งได้

### 4. Manual Result (ลงผล)

สำหรับรายการที่**ไม่เชื่อมต่อ**กับ LIS (Laboratory Information System):

#### ขั้นตอน

1. เลือก **Manual Result** ของรายการที่ต้องการลงผล
2. ลงผลในช่อง **Value**
3. (optional) ใส่ **Comment** ในช่อง Comment
4. กด **Save** → Status: **Report Entered**

#### การแสดงผลผิดปกติ

| สัญลักษณ์ | ความหมาย | สี |
|-----------|---------|-----|
| **H** | ค่าสูงกว่า Normal Range | แดง |
| **L** | ค่าต่ำกว่า Normal Range | แดง |

#### การแก้ไขผล (ก่อน Report Authorized)

- เลือก **Manual Result** อีกครั้ง → ระบบแสดงหน้าลงผล
- ต้องเลือก **Modify Reason** ก่อน → แก้ไขค่า → กด Save

### 5. Report Authorized

- กด **Report Authorised** → ผลรายงานส่งไปยัง **EMR** ของผู้ป่วย
- Status: **Report Authorized** → ย้ายไป Tab **COMPLETE**
- แพทย์และพยาบาลเห็นผลใน EMR ทันที

#### Reset Result (ยกเลิกการ Authorize)

- หลัง Report Authorized แล้ว → เลือก **Reset Result**
- Status เปลี่ยนกลับเป็น **Test Executed** → ย้ายไป Tab **INPROGRESS**
- สามารถลงผลใหม่ได้ด้วย Manual Result

### 6. View Results (ดูผล)

| Action | วิธีเข้าถึง | คำอธิบาย |
|--------|-----------|---------|
| **Result View** | Lab Worklist → Result View | ดูผลที่บันทึกไว้ |
| **Print Documents** | Lab Worklist → Print Documents | พิมพ์รายงานผลการทดสอบ |
| **View Audit Log** | เมนู → View Audit Log | ประวัติสถานะทุกขั้นตอน |
| **Lab Result** (EMR) | EMR → Laboratory → Tab Lab Result | ผลปัจจุบัน |
| **Cumulative View** (EMR) | EMR → Laboratory → Tab Cumulative View | เปรียบเทียบผลเก่า |
| **Charting** (EMR) | EMR → Laboratory → Tab Charting | แสดงผลเป็นกราฟ |

## Screen Fields

### Specimen Collection Screen

| Field | Type | คำอธิบาย |
|-------|------|---------|
| Department | Filter/Dropdown | แผนกที่สั่งตรวจ |
| Ward | Filter/Dropdown | Ward ที่สั่งตรวจ |
| Careprovider | Filter/Text | แพทย์/ผู้สั่งตรวจ |
| Patient | Filter/Text | ชื่อหรือ HN ผู้ป่วย |
| Encounter Type | Filter/Dropdown | ประเภทการรักษา |
| Order No. | Filter/Text | หมายเลข Order |
| Date From – To | Filter/Date | ช่วงวันที่สั่งตรวจ |
| Status | Filter/Dropdown | สถานะ Order |
| Lab No. | Group-by toggle | จัดกลุ่มตาม Order No. / Lab No. |
| Name | Group-by toggle | จัดกลุ่มตามชื่อผู้ป่วย |
| Order Date | Group-by toggle | จัดกลุ่มตามวันที่สั่ง |

### Manual Result Screen

| Field | Type | Required | คำอธิบาย |
|-------|------|----------|---------|
| Value | Text/Numeric | Yes | ผลการทดสอบ |
| Normal Range | Display only | — | ค่าอ้างอิงปกติ (ระบบดึงอัตโนมัติ) |
| H/L Indicator | Display only | — | แสดงสีแดงเมื่อค่าผิดปกติ |
| Comment | Text | No | หมายเหตุเพิ่มเติม |
| Modify Reason | Dropdown | Yes (ถ้าแก้ไข) | เหตุผลในการแก้ไขผล |

### Lab Worklist — Reject Specimen Screen

| Field | Type | Required | คำอธิบาย |
|-------|------|----------|---------|
| Reason | Dropdown | Yes | เหตุผลในการปฏิเสธสิ่งส่งตรวจ |

## Button Actions

| Button | หน้าจอ | เงื่อนไข | ผลลัพธ์ |
|--------|--------|---------|---------|
| Print Sticker | Specimen Collection | Status = Ordered | พิมพ์ Lab Label / Sticker |
| Collect Specimen | Specimen Collection | Status = Ordered / Rejected | Status → Specimen Collected |
| Accept Specimen | Lab Worklist | Status = Specimen Collected | Status → Specimen Accepted |
| Reject Specimen | Lab Worklist | Status = Specimen Collected | เปิด Reject Reason screen |
| Manual Result | Lab Worklist | Status = Specimen Accepted / Test Executed | เปิดหน้าลงผล |
| Save (Manual Result) | Manual Result Screen | Value ต้องกรอก | Status → Report Entered |
| Report Authorised | Lab Worklist | Status = Report Entered | Status → Report Authorized; ผลส่งไป EMR |
| Reset Result | Lab Worklist | Status = Report Authorized | Status → Test Executed |
| Result View | Lab Worklist | Status = Report Authorized | แสดงผลที่บันทึก |
| Print Documents | Lab Worklist | Status = Report Authorized | พิมพ์รายงานผล |
| View Audit Log | Lab Worklist (เมนู) | ทุก Status | แสดง Log ประวัติสถานะ |

## Permissions

| Action | Role | หมายเหตุ |
|--------|------|---------|
| สั่งตรวจ (Order) | แพทย์, พยาบาล (On behalf of) | ผ่าน EMR Order |
| Print Sticker | พยาบาล, เจ้าหน้าที่ | ผ่าน Specimen Collection |
| Collect Specimen | พยาบาล, เจ้าหน้าที่ | ผ่าน Specimen Collection |
| Accept/Reject Specimen | เจ้าหน้าที่ Lab | ผ่าน Lab Worklist |
| Manual Result | เจ้าหน้าที่ Lab | ไม่ต้องเป็น Radiologist |
| Report Authorised | เจ้าหน้าที่ Lab | ไม่ต้องเป็น Radiologist |
| Reset Result | เจ้าหน้าที่ Lab | หลัง Authorized แล้ว |

## Error / Edge Cases

- **Duplicate Order**: ระบบแจ้งเตือนถ้าสั่งตรวจรายการซ้ำ → ต้องระบุ Comments ก่อน Save
- **Re-collect after Reject**: Rejected specimen กลับไปหน้า Specimen Collection Tab NEW — ผู้เก็บต้อง Collect ใหม่
- **Modify Reason required**: ถ้าจะแก้ไข Manual Result ก่อน Authorize ต้องเลือก Modify Reason ก่อนทุกครั้ง
- **STAT display**: รายการ STAT แสดงสีแดงทั้งใน Order Details, Specimen Collection, และ Lab Worklist
- **Abnormal Range display**: ค่าเกิน Normal Range แสดงสีแดง + H หรือ L อัตโนมัติ
- **Reset Result**: ถ้าต้องการแก้ไขหลัง Authorize ต้องใช้ Reset Result ก่อน (ไม่สามารถแก้ตรงได้)

## Integration Points

| Module | Integration |
|--------|-------------|
| [OPD](/modules/opd/) | สั่ง Lab จาก EMR, Specimen Collection |
| [IPD](/modules/ipd/) | สั่ง Lab จาก EMR, Specimen Collection |
| [EMR Doctor](/modules/emr-doctor/) | สั่งตรวจ, ดูผล |
| [ANC](/modules/anc/) | Lab tab ใน ANC Chart |
| [Billing](/modules/billing/) | Lab orders ส่งต่อ Billing |
| LIS | เชื่อมต่อระบบ Lab อัตโนมัติ (ถ้ามี) |
