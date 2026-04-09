---
title: MRD Module
type: module
sources: ["1.MEDHIS Manual_MRD_V2.docx"]
created: 2026-04-08
updated: 2026-04-09
tags: [module, mrd, medical-records, folder]
---

# MRD — ระบบจัดเก็บเวชระเบียน (Medical Records Department)

## Purpose

จัดเก็บและติดตามแฟ้มเวชระเบียน — ครอบคลุมการสร้างแฟ้ม การจ่าย การยืม-คืน การโอนย้ายระหว่างแผนก และการรวม HN ที่ซ้ำกัน

## Access

เมนูหลัก: **MRD**

---

## Key Screens

### MRD Folders — การสร้างและดูสถานะแฟ้ม

ระบบสร้างแฟ้มอัตโนมัติตาม App Setting:
- **OPD Folder** — สร้างเมื่อ New Register / New HN ([[Registration|ลงทะเบียนผู้ป่วยใหม่]])
- **IPD Folder** — สร้างใหม่ทุกครั้งที่ [[Admission|Admit]] / Visit Number

> ตั้งค่าจาก: Framework > App Setting > Registration > **MRD Auto file request**

เมื่อสร้างแฟ้มผู้ป่วยใหม่ เจ้าหน้าที่เวชระเบียนจะส่งแฟ้มไปยังคลินิกที่ผู้ป่วยลงทะเบียนไว้ โดยไม่ต้องบันทึก Issue File เพิ่มเติม เนื่องจากระบบเปลี่ยนสถานะให้อัตโนมัติ

**การดูสถานะแฟ้ม (View File) — ขั้นตอน:**

| ขั้นตอน | รายละเอียด |
|---------|------------|
| 1. Search Patient | ค้นหาผู้ป่วยจากชื่อ นามสกุล เบอร์โทร หรือรหัสแฟ้ม |
| 2. Select Folder | เลือกแฟ้มที่ต้องการดู |
| 3. MRD Storage + Charting Type | เลือกสถานที่เก็บ + OPD / IPD / All |
| 4. กดค้นหา | |
| 5. Current Department | ระบบแสดงสถานที่ที่แฟ้มอยู่ปัจจุบัน |
| 6. View Audit Log | ดูสถานะความเคลื่อนไหวของแฟ้ม |

---

### [[MRD Worklist Screen]] — รายการเวชระเบียน (4 tabs)

หน้าจอหลักสำหรับเรียกดู ค้นหา และจัดการแฟ้มทั้งหมดในแต่ละวัน

**Navigation:** MRD > MRD Worklist

**Search Fields บน MRD Worklist:**

| Field | คำอธิบาย |
|-------|---------|
| Folder ID | ระบุ HN ผู้ป่วยสำหรับค้นหารายบุคคล (Optional) |
| Search Patient | ค้นหาผู้ป่วยเฉพาะราย (Optional) |
| Requesting Department | ระบุแผนกที่ต้องส่งแฟ้มไปให้ |
| MRD Store | เลือกประเภทแฟ้ม OPD หรือ IPD |
| Status | Select / Cancelled / Issued / Requested / Transferred |
| From / To Date | ช่วงวันที่ต้องการค้นหา |

**4 Tabs ของ MRD Worklist:**

| Tab | ประเภท | รายละเอียด |
|-----|--------|-----------|
| Registration Request | อัตโนมัติ | แสดงคำขอแฟ้มผู้ป่วยเก่าที่ลงทะเบียน Walk-in (ไม่มีการนัดล่วงหน้า) |
| Manual Request | Manual | แสดงคำขอยืมแฟ้มจากการบันทึกผ่าน Folder Request |
| Returns | คืนแฟ้ม | แสดงรายการแฟ้มที่รับคืนกลับมา — สถานะ "Returned" |
| New Folder | แฟ้มใหม่ | แสดงแฟ้มผู้ป่วยใหม่ที่ระบบสร้างอัตโนมัติ |

**การ Issue แฟ้มจาก MRD Worklist:**
1. คลิกเมนู MRD Worklist → ระบบแสดงรายการที่ Request มา
2. คลิกเลือกรายการที่มีสถานะ **Requested**
3. กดปุ่ม **Issue** เพื่อบันทึกส่งแฟ้มไปยังแผนกที่ร้องขอ
4. ระบบเปลี่ยน Status เป็น **"Issued"** (ตัดจ่าย)

**Automated file request for OPD:** ระบบสร้าง Request อัตโนมัติสำหรับผู้ป่วยเก่าที่ลงทะเบียน Walk-in (ไม่ได้นัดล่วงหน้า)

---

### Folder Issue — การส่งแฟ้มผู้ป่วยเก่า

มี 2 วิธี:

#### 3.1 Appointment Issue — ผู้ป่วยนัดหมาย

**Navigation:** MRD > Folder Issue > Appointment Issue

เจ้าหน้าที่เวชระเบียนค้นหาผู้ป่วยนัดหมายล่วงหน้าเพื่อเตรียมแฟ้ม

**ขั้นตอน:**
1. ระบุ **Department** ที่ต้องการดูรายชื่อนัดหมาย
2. ระบุ **Date** วันนัดที่ต้องการจ่ายแฟ้ม
3. กด **ค้นหา** — ระบบแสดงรายการแฟ้มผู้ป่วยนัด
4. ระบบเลือก checkbox แฟ้มที่อยู่ในเวชระเบียนให้อัตโนมัติ
   - แฟ้มที่ยังไม่กลับจากแผนก: **ไม่สามารถกด Issue ได้** ต้องทำ Folder Return ก่อน
5. เลือก Checkbox แฟ้มที่ต้องการส่ง
6. กด **Issue** เพื่อส่งแฟ้มไปยังแผนกที่ร้องขอ

#### 3.2 Direct Issue — ผู้ป่วย Walk-in

**Navigation:** MRD > Folder Issue > Direct Issue

สำหรับผู้ป่วยเก่าที่มาพบแพทย์โดยไม่มีการนัด — หลังจากพิมพ์ "OPD/ER Note" ออกไปค้นแฟ้ม

**ขั้นตอน:**
1. **Search Patient:** ค้นหาผู้ป่วยที่ต้องการส่งแฟ้ม
2. **Select Folder:** เลือกแฟ้มที่ต้องการส่ง
3. **MRD Storage:** สถานที่เก็บแฟ้มปัจจุบัน
4. **Issued to Department:** ระบุแผนกที่จะส่งแฟ้มไป
5. กด **Issue** — ระบบแสดงรายการแฟ้มที่ส่งออกในกล่องด้านล่าง

---

### Folder Return — การรับแฟ้มคืน

**Navigation:** MRD > Folder Return

หลังจากแผนกต่างๆ รวบรวมเอกสารเสร็จแล้ว ส่งแฟ้มกลับเวชระเบียน

**ขั้นตอน:**

| ขั้นตอน | รายละเอียด |
|---------|------------|
| 1. ระบุ HN | แฟ้มที่ต้องการรับคืน |
| 2. เลือก Visit | Visit ของแฟ้มนั้น |
| 3. เลือกห้องแฟ้ม | ห้องเวชระเบียนที่ต้องการเก็บ |
| 4. กดบันทึก | ระบบบันทึกรายการแฟ้มกลับสู่เวชระเบียน |

---

### Folder Requests — การสร้างคำขอยืมแฟ้ม

**Navigation:** MRD > Folder Requests

เจ้าหน้าที่หรือแผนกต่างๆ ยืมแฟ้มผู้ป่วย (ทั้งปัจจุบันและแฟ้มเก่า)

**ขั้นตอน:**

| ขั้นตอน | Field | Required | รายละเอียด |
|---------|-------|----------|------------|
| 1 | HN | Yes | ระบุ HN แฟ้มที่ต้องการยืม |
| 2 | Visit | Yes | เลือก Visit ของแฟ้ม |
| 3 | ห้องแฟ้ม | Yes | เลือกห้องเวชระเบียนที่เก็บเอกสาร |
| 4 | Reason | Yes | เลือกเหตุผลในการขอยืม |
| 5 | Comment | | เหตุผลเพิ่มเติม |
| 6 | Careprovider | | ชื่อแพทย์ที่ขอยืมแฟ้ม |
| 7 | บันทึก | | เวชระเบียนจะทำการ Issue File ต่อไป |

> ยกเลิก Request: กด Icon **Cancel** บนรายการที่ต้องการ

---

### Folder Transfer — การส่งต่อแฟ้มระหว่างแผนก

**Navigation:** MRD > Folder Transfer

โอนย้ายแฟ้มจากแผนกหนึ่งไปยังอีกแผนกหนึ่ง **โดยไม่ผ่านห้องเวชระเบียน**

> หมายเหตุ: สามารถ Transfer ได้เฉพาะแฟ้มที่ **ไม่ได้อยู่ในเวชระเบียน** เท่านั้น

**ขั้นตอน:**

| ขั้นตอน | Field | รายละเอียด |
|---------|-------|------------|
| 1 | HN | ระบุ HN แฟ้มที่ต้องการโอน |
| 2 | Visit | เลือก Visit ของแฟ้ม |
| 3 | แผนกปลายทาง | เลือกแผนกที่ต้องการโอน |
| 4 | Careprovider | ชื่อแพทย์ที่ร้องขอ (ถ้ามี) |
| 5 | Comment | หมายเหตุเพิ่มเติม |
| 6 | บันทึก | ยืนยันการ Transfer |

---

### Patient Merge — การรวมประวัติผู้ป่วย

**Navigation:** MRD > Patient Merge

รวม HN ที่ซ้ำกัน — กรณีผู้ป่วยมี 2 HN ซ้ำซ้อน หรือข้อมูล Demographic เหมือนกัน ให้เหลือ 1 HN

ดูรายละเอียดกระบวนการเต็มที่ [[Registration Update Merge Workflow]]

**ขั้นตอน Patient Merge:**

| ขั้นตอน | Field | รายละเอียด |
|---------|-------|------------|
| 1 | Primary Patient | ค้นหาผู้ป่วยหลัก (HN ที่ต้องการคงไว้) |
| 2 | Secondary Patient | ค้นหาผู้ป่วยรอง (HN ที่จะรวมเข้าหาหลัก) |
| 3 | Merge all visit | Toggle เปิด/ปิด — รวมทุก Visit หรือเลือกบาง Visit |
| 4 | Reason | ระบุเหตุผลในการรวมแฟ้ม |
| 5 | Confirm | กด Confirm → ระบบแสดงกล่องยืนยัน |
| 6 | Yes | กด Yes เพื่อยืนยันการรวมแฟ้ม |

**Unmerge:** ค้นหารายการที่ทำ Merge แล้ว → กด **UNMERGE** เพื่อยกเลิก

---

## Folder Statuses

```
Requested → Issued → Returned
                  → Cancelled
                  → Transferred
```

| Status | Description |
|--------|-------------|
| Requested | คำขอถูกสร้าง รอจ่าย |
| Issued | แฟ้มจ่ายออกแล้ว |
| Returned | แฟ้มคืนเข้าคลังแล้ว |
| Cancelled | คำขอถูกยกเลิก |
| Transferred | แฟ้มถูกโอนย้ายระหว่างแผนก |

---

## Button Actions

| Button | Screen | Action | Conditions | Result |
|--------|--------|--------|------------|--------|
| Issue | MRD Worklist / Appointment Issue / Direct Issue | จ่ายแฟ้มออกจากเวชระเบียน | สถานะ Requested | Status เปลี่ยนเป็น Issued |
| Return | Folder Return | รับแฟ้มคืน | ระบุ HN + Visit + ห้อง | Status เปลี่ยนเป็น Returned |
| Request | Folder Requests | สร้างคำขอยืมแฟ้ม | | Status เป็น Requested |
| Cancel (Icon) | Folder Requests | ยกเลิก Request | | Status เป็น Cancelled |
| Transfer | Folder Transfer | โอนแฟ้มไปแผนกอื่น | แฟ้มอยู่นอกเวชระเบียน | Status เปลี่ยนเป็น Transferred |
| Confirm | Patient Merge | ยืนยันการรวมแฟ้ม | ระบุ Primary/Secondary | แสดง popup ยืนยัน |
| Yes | Merge popup | ยืนยันสุดท้าย | | รวม HN เสร็จสิ้น |
| UNMERGE | Patient Merge (ค้นหา) | ยกเลิกการรวม | รวมแล้ว | กลับเป็น 2 HN |
| View Audit Log | MRD Folders | ดูประวัติความเคลื่อนไหวแฟ้ม | | แสดง Audit Log |

---

## Error / Edge Cases

- **แฟ้มไม่กลับจากแผนก:** ไม่สามารถ Issue Appointment ได้ — ต้องทำ Folder Return ก่อน
- **Folder Transfer:** ทำได้เฉพาะแฟ้มที่ **ไม่อยู่ในเวชระเบียน** เท่านั้น
- **Merge ผิด:** รองรับ UNMERGE เพื่อยกเลิกการรวม
- **Auto File Request ปิด:** แฟ้มจะไม่ถูกสร้างอัตโนมัติ ต้องสร้าง manual

---

## Key Business Rules

- แฟ้ม OPD สร้างครั้งเดียวตอน New Register; แฟ้ม IPD สร้างใหม่ทุก Admit
- **Auto File Request** ตั้งค่าใน Framework > App Setting > Registration > MRD Auto file request
- Folder Transfer ไม่ผ่าน MRD — แผนกโอนกันเองโดยตรง
- เจ้าหน้าที่ต้องพิมพ์ **OPD/ER Note** ก่อนออกไปค้นแฟ้มสำหรับผู้ป่วย Walk-in
- Primary Patient = HN ที่ต้องการคงไว้หลัง Merge

---

## Integration Points

| Module | Integration |
|--------|-------------|
| [[Registration]] | สร้าง OPD Folder อัตโนมัติเมื่อ New Register |
| [[Admission]] | สร้าง IPD Folder อัตโนมัติเมื่อ Admit |
| [[OPD]] | Appointment Issue — จ่ายแฟ้มตามนัดหมาย |
| All Departments | Folder Request — ยืมแฟ้ม, Folder Transfer — โอนย้ายแฟ้ม |
