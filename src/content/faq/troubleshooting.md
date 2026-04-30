---
title: "แก้ไขปัญหา (Troubleshooting)"
type: faq
tags:
  - faq
  - troubleshooting
---

## ปัญหาการบันทึกข้อมูล

### กดปุ่ม SAVE ไม่ได้

**สาเหตุ:** มีฟิลด์บังคับ (Required Field) ที่ยังไม่ได้กรอก หรือข้อมูลไม่ถูกรูปแบบ

**วิธีแก้:**
1. ตรวจสอบฟิลด์ที่มีเครื่องหมาย * (สีแดง) ว่ากรอกครบหรือยัง
2. ตรวจสอบรูปแบบข้อมูล เช่น วันที่ต้องเป็น DD/MM/YYYY
3. เลื่อนหน้าจอขึ้น-ลง เพื่อหาฟิลด์ที่มีข้อผิดพลาด (แถบแดง)
4. ถ้ายังไม่ได้ ลอง Refresh หน้าจอแล้วกรอกใหม่

-> [อ่านเพิ่มเติม](/concepts/data-validation-rules/)

### Final Discharge SAVE ไม่ได้

**สาเหตุ:** ยังมีขั้นตอนก่อนหน้าที่ไม่เสร็จ (Medical Discharge, Nurse Discharge, หรือ Financial Discharge)

**วิธีแก้:**
1. ตรวจสอบสถานะ Discharge ทั้ง 4 ขั้นตอนว่าครบหรือไม่
2. ตรวจสอบว่า Medical Discharge มี Diagnosis ครบถ้วน
3. ตรวจสอบว่า Financial Discharge (ออกบิล) เสร็จแล้ว
4. ถ้าทุกขั้นตอนครบแล้วยัง SAVE ไม่ได้ ให้ตรวจสอบว่ามี Order ค้างอยู่หรือไม่

-> [อ่านเพิ่มเติม](/workflows/ipd-discharge-process/)

### สั่งยาแล้วกด Save ไม่ได้

**สาเหตุ:** ข้อมูลยาไม่ครบ หรือมี Drug Alert ที่ยังไม่ได้ Acknowledge

**วิธีแก้:**
1. ตรวจสอบว่ากรอก Dose, Frequency, Route ครบถ้วน
2. ตรวจสอบ Drug Alert popup ว่ามีการแจ้งเตือนหรือไม่
3. ถ้ามี Alert ให้กด **Acknowledge** หรือ **Override** (พร้อมระบุเหตุผล)
4. ตรวจสอบว่ายาไม่ถูก Lock โดยเภสัชกร

-> [อ่านเพิ่มเติม](/modules/order-entry/)

## ปัญหาการเงิน

### ออกบิลไม่ได้ มีรายการยาแถบแดง

**สาเหตุ:** มีรายการยาหรือบริการที่ยังไม่เสร็จสมบูรณ์ (Pending Order)

**วิธีแก้:**
1. ตรวจสอบรายการที่แสดงแถบแดงในหน้า Billing
2. รายการยาแถบแดง = ยังไม่ได้จ่ายยา ให้ติดต่อเภสัชกรรม
3. รายการ Lab แถบแดง = ยังไม่มีผล ให้ติดต่อห้อง Lab
4. เมื่อรายการเสร็จสมบูรณ์แล้ว กลับมาออกบิลอีกครั้ง

-> [อ่านเพิ่มเติม](/workflows/op-billing-workflow/)

### ยกเลิกบิลไม่ได้ (เกิน 24 ชั่วโมง)

**สาเหตุ:** ระบบจำกัดการยกเลิกบิลภายใน 24 ชั่วโมงหลังออกบิล

**วิธีแก้:**
1. ถ้าเกิน 24 ชั่วโมง ต้องใช้สิทธิ์ระดับ Supervisor/Admin
2. ติดต่อหัวหน้าแผนกการเงินเพื่อขออนุมัติ
3. Supervisor เข้าเมนู Billing > Bill Cancel (Admin)
4. ระบุเหตุผลและอนุมัติการยกเลิก

-> [อ่านเพิ่มเติม](/modules/billing/)

### ยกเลิกยาไม่ได้

**สาเหตุ:** ยาถูก Dispense (จ่าย) ไปแล้ว หรืออยู่ระหว่างเตรียมยา

**วิธีแก้:**
1. ถ้ายายังไม่ Dispense ให้กด **Cancel Order** ที่หน้า Order Entry
2. ถ้ายา Dispense แล้ว ต้องทำ **Return Drug** ผ่านเมนู Pharmacy
3. ติดต่อเภสัชกรเพื่อดำเนินการคืนยา
4. หลังคืนยาแล้ว ค่ายาจะถูก Reverse อัตโนมัติ

-> [อ่านเพิ่มเติม](/modules/pharmacy/)

## ปัญหา Worklist และข้อมูล

### ผู้ป่วยไม่แสดงใน Worklist

**สาเหตุ:** ผู้ป่วยยังไม่ได้ลงทะเบียน Visit วันนี้ หรือ Filter วันที่ไม่ตรง

**วิธีแก้:**
1. ตรวจสอบ Filter วันที่ใน Worklist ว่าตรงกับวันที่ Visit
2. ตรวจสอบว่าผู้ป่วยลงทะเบียน (Register Visit) แล้ว
3. ตรวจสอบ Filter แผนก/Ward ว่าตรง
4. ลอง Clear Filter แล้วค้นหาใหม่ด้วย HN

-> [อ่านเพิ่มเติม](/modules/opd/)

### แก้ไขข้อมูลผู้ป่วยไม่ได้

**สาเหตุ:** ข้อมูลถูก Lock หลัง Discharge หรือไม่มีสิทธิ์แก้ไข

**วิธีแก้:**
1. ตรวจสอบสถานะผู้ป่วย ถ้า Discharge แล้วข้อมูลจะถูก Lock
2. ติดต่อ MRD (เวชระเบียน) เพื่อขอ Unlock
3. ถ้าเป็นปัญหาสิทธิ์ ติดต่อ IT เพื่อขอเพิ่มสิทธิ์
4. ข้อมูลบางรายการ (เช่น HN, National ID) ต้องแก้ผ่าน MRD เท่านั้น

-> [อ่านเพิ่มเติม](/modules/registration/)

### National ID Error (เลขบัตรประชาชนซ้ำ)

**สาเหตุ:** มี HN อื่นในระบบที่ใช้เลข National ID เดียวกันอยู่แล้ว

**วิธีแก้:**
1. ค้นหาด้วย National ID เพื่อดูว่ามี HN ไหนใช้อยู่
2. ถ้าเป็นผู้ป่วยคนเดียวกัน ให้ใช้ HN เดิม
3. ถ้าเป็นข้อมูลผิดพลาด ติดต่อ MRD เพื่อแก้ไข
4. กรณีต้อง Merge HN ให้ติดต่อ MRD Supervisor

-> [อ่านเพิ่มเติม](/modules/mrd/)

### ระบบแจ้ง "ข้อมูลเกิน 6 เดือน"

**สาเหตุ:** ระบบตรวจสอบสิทธิ์ต้องตรวจสอบใหม่ทุก 6 เดือน

**วิธีแก้:**
1. กดปุ่ม **Verify** เพื่อตรวจสอบสิทธิ์ใหม่
2. รอระบบเชื่อมต่อกับฐานข้อมูลสิทธิ์ (อาจใช้เวลา 5-10 วินาที)
3. ยืนยันสิทธิ์ที่ตรวจสอบได้
4. ถ้าเชื่อมต่อไม่ได้ ให้บันทึกสิทธิ์เดิมไปก่อน แล้วตรวจสอบภายหลัง

-> [อ่านเพิ่มเติม](/modules/registration/)

## ปัญหา Lab / ผลตรวจ

### Specimen ถูก Reject

**สาเหตุ:** Specimen ไม่ผ่านเกณฑ์ เช่น Clot, Hemolysis, ปริมาณไม่พอ, ภาชนะผิด

**วิธีแก้:**
1. ตรวจสอบเหตุผลการ Reject ในระบบ Lab
2. แจ้งพยาบาลที่ดูแลผู้ป่วยเพื่อเก็บ Specimen ใหม่
3. เก็บ Specimen ใหม่ตามข้อกำหนดที่ถูกต้อง
4. สแกน Barcode Specimen ใหม่และส่ง Lab

-> [อ่านเพิ่มเติม](/workflows/lab-order-to-result/)

### ผล Lab / X-ray ไม่แสดง

**สาเหตุ:** ผลยังไม่ได้ Verify หรือเครื่องมือยังไม่ส่งผลเข้าระบบ

**วิธีแก้:**
1. ตรวจสอบสถานะ Order ว่าอยู่ขั้นตอนไหน (Ordered > Collected > Processing > Verified)
2. ถ้าสถานะ Processing อยู่ แสดงว่ากำลังตรวจ ให้รอ
3. ถ้าสถานะ Verified แล้วแต่ไม่แสดง ลอง Refresh หน้าจอ
4. ติดต่อห้อง Lab / X-ray เพื่อสอบถามสถานะ

-> [อ่านเพิ่มเติม](/modules/lab/)

## ปัญหา Admission / IPD

### ยกเลิก Admit ไม่ได้

**สาเหตุ:** มี Order หรือ Charge ที่บันทึกไปแล้วใน IPD

**วิธีแก้:**
1. ตรวจสอบว่ามี Order ค้างอยู่หรือไม่ ถ้ามีให้ Cancel Order ก่อน
2. ตรวจสอบว่ามี Charge/ค่าใช้จ่ายที่บันทึกแล้วหรือไม่
3. ติดต่อ Admission Counter เพื่อดำเนินการยกเลิก
4. กรณีมี Charge แล้ว ต้องให้ Supervisor อนุมัติการยกเลิก

-> [อ่านเพิ่มเติม](/workflows/admission-workflow/)

### Transfer (ย้าย Ward/เตียง) ไม่สำเร็จ

**สาเหตุ:** เตียงปลายทางไม่ว่าง หรือ Ward ปลายทางยังไม่ Accept

**วิธีแก้:**
1. ตรวจสอบสถานะเตียงปลายทางว่าว่างจริง
2. ตรวจสอบว่า Ward ปลายทางกดรับ (Accept Transfer) แล้ว
3. ถ้าเตียงไม่ว่าง ให้เลือกเตียงอื่นหรือรอเตียงว่าง
4. ติดต่อ Ward ปลายทางเพื่อประสานงาน

-> [อ่านเพิ่มเติม](/modules/ipd/)

## ปัญหาเภสัชกรรม

### Drug Alerts สัญลักษณ์ต่างๆ หมายถึงอะไร?

**สาเหตุ:** ระบบแจ้งเตือนอัตโนมัติเมื่อพบปัญหาเรื่องยา

**วิธีแก้:**
1. **สีแดง (High Alert)** - Drug Allergy หรือ Contraindication ห้ามให้ยานี้ ต้อง Cancel
2. **สีส้ม (Warning)** - Drug Interaction มีปฏิกิริยาระหว่างยา ควรปรึกษาเภสัชกร
3. **สีเหลือง (Caution)** - Dose ไม่ตรงตามเกณฑ์ หรือ Duplicate Therapy ให้ตรวจสอบ
4. ทุก Alert ต้อง Acknowledge ก่อนจึงจะ Save Order ได้

-> [อ่านเพิ่มเติม](/modules/pharmacy/)

### คืนยาไม่ได้

**สาเหตุ:** ยาถูก Charge ไปยัง Bill แล้ว หรือยาเป็นประเภท Non-Returnable

**วิธีแก้:**
1. ตรวจสอบว่ายาถูก Charge ไปยัง Bill หรือยัง
2. ถ้ายังไม่ Charge สามารถ Return ได้ที่เมนู **Pharmacy > Return Drug**
3. ถ้า Charge แล้ว ต้องยกเลิกบิลก่อน แล้วจึงคืนยา
4. ยาบางประเภท (เช่น ยาเสพติด, ยาควบคุม) ต้องมี Supervisor อนุมัติ

-> [อ่านเพิ่มเติม](/modules/pharmacy/)

## ปัญหา UAT Phase 1–5 (TCK-001 lifecycle)

### Medical Discharge ทำไม่ได้ — error ICD10ISMANDATORY

**สาเหตุ:** ระบบเช็คฝั่ง server ว่ามี Diagnosis (ICD-10) บันทึกไว้กับการตรวจครั้งนี้หรือยัง ถ้าไม่มี จะ return HTTP 500 พร้อมรหัส `ERRORS.ICD10ISMANDATORYFORMEDICALDISCHARGE`

**วิธีแก้:**
1. กลับเข้า EMR ผ่าน Doctor Worklist (vm.openPatientEMRFromWorkbench) — อย่าใช้ back button
2. เปิดแผง Diagnosis → กด **ICD 10 Browser**
3. ค้นหาชื่อโรค (ภาษาอังกฤษหรือไทย) **ไม่ใช่รหัส**
4. เลือกแล้ว **ต้องกด Add/Save อีกครั้ง** เพื่อให้บันทึกจริง (ดูปัญหาถัดไป)
5. ลอง Medical Discharge อีกครั้ง

-> [อ่านเพิ่มเติม](/concepts/medhis-server-side-gates/)

### เลือก ICD ใน ICD 10 Browser แล้วไม่บันทึก

**สาเหตุ:** การเลือกใน dialog (`vm.selectProblem`) แค่ resolve dialog promise ไม่ได้ persist ตัว diagnosis ไป server. ต้องเรียก `vm.addDiagnosisData(prob)` ของหน้าหลักเพื่อยิง `POST /emr/diagnosis/create`

**วิธีแก้:**
1. หลังเลือก ICD ใน dialog แล้ว ตรวจ list บนหน้า EMR Diagnosis ว่ามีรายการเพิ่มขึ้นหรือไม่
2. ถ้าไม่มี กด Save / Add บนหน้าหลักอีกครั้ง
3. Verify โดย `POST /emr/diagnosis/getdetails {patientvisituid}` — ต้องมี item ใน array

-> [อ่านเพิ่มเติม](/concepts/icd-coding/)

### หน้าจอล็อค Session locked — ทำไงต่อ

**สาเหตุ:** ไม่ใช้งานนาน (~5 นาที) ระบบล็อค session อัตโนมัติ ข้อความ "Welcome back &lt;user&gt;. Your session is locked"

**วิธีแก้:**
1. **กรอก password ของผู้ใช้จริงเท่านั้น** — agent/ระบบอัตโนมัติห้ามพิมพ์ password
2. หลัง re-auth สำเร็จ ข้อมูลฝั่ง server ยังอยู่ครบ (visit / EMR / orders ไม่หาย)
3. โหลด worklist ใหม่ (vm.searchVisits + clickPatientAndSelect) เพื่อเริ่มต่อจากเดิม

-> [อ่านเพิ่มเติม](/concepts/medhis-server-side-gates/)

### ค่า 150 บาทมาจากไหน — ทั้งที่ไม่ได้สั่งอะไร

**สาเหตุ:** ทุก visit OPD จะแนบรายการ `ค่าบริการผู้ป่วยนอก ในเวลาราชการ` (chargecode `55020`, item uid `6833e0e7c7a8b1000176354a`, 150 บาท) อัตโนมัติตอน visit creation **ไม่ว่าจะสั่ง order อะไรหรือไม่**

**วิธีแก้:**
1. ถ้าเจตนาคือบิลปกติ — ปล่อยไว้ ระบบคำนวณถูกแล้ว
2. ถ้าเจตนาคือ free visit / ทดสอบ — ต้อง void / waive จาก [[OP Cashier Worklist]] หรือปรับ allocation
3. รายการนี้บันทึกลง [[Generate Bill Screen]] เป็นบรรทัดที่อ่านได้

-> [อ่านเพิ่มเติม](/entities/generate-bill-screen/)

### Receipt RO26... คืออะไร — ออกที่ไหน

**สาเหตุ:** เลขใบเสร็จ format `RO<YY><serial>` (Receipt OP, ปี พ.ศ. 2 หลักท้าย, serial 6 หลัก) ออกโดยอัตโนมัติเมื่อ `vm.settleBill()` สำเร็จบน [[Generate Bill Screen]]

**วิธีแก้:**
1. การ settle เป็น atomic action — ออกบิล + บันทึก payment + ออกใบเสร็จ + ส่ง Financial Discharge ในครั้งเดียว
2. ถ้าต้องค้น receipt ภายหลัง: ใช้ `POST /billing/billsearch` ด้วย patientvisituid
3. รูปแบบ Print preview เปิดอัตโนมัติ — ปิดเพื่อกลับไป Cashier Worklist

-> [อ่านเพิ่มเติม](/workflows/op-billing-workflow/)

### ค้นหา ICD ด้วยรหัส Z00.0 ไม่เจอ

**สาเหตุ:** ระบบเก็บรหัส ICD-10 **ไม่มีจุด** — Z00.0 ถูกเก็บเป็น `Z000`. นอกจากนี้ endpoint `POST /clinicaldatamaster/problem/search` ค้นด้วย field `name` (ชื่อโรค) เท่านั้น ไม่ค้นด้วย `code`

**วิธีแก้:**
1. ค้นด้วยชื่อโรค ภาษาอังกฤษหรือไทย (เช่น "general medical examination" → Z000)
2. ห้ามค้นด้วยรหัสในรูปแบบ `Z00.0` — ใช้ `Z000` หรือชื่อโรค

-> [อ่านเพิ่มเติม](/concepts/icd-coding/)

---

### สั่ง Lab แล้วไม่เห็นรายการในหน้า Specimen Collection

**สาเหตุ:** Filter บนหน้า Specimen Collection อาจยังจำกัด Department, Ward, Careprovider, Patient, Encounter Type, Order No., Date หรือ Status ทำให้รายการที่สั่งแล้วไม่แสดงใน Tab NEW

**วิธีแก้:**
1. เปิด Laboratory > Specimen Collection และตรวจว่าอยู่ Tab **NEW**
2. ตรวจ Department / Ward / Date From-To ให้ตรงกับแผนกและวันที่สั่ง
3. ล้าง Patient, Careprovider, Order No. หรือ Status ที่อาจกรองแคบเกินไป
4. ถ้ายังไม่พบ ให้กลับไปยืนยันใน EMR Order Details ว่า Save แล้วและมี Order No.

-> อ่านเพิ่มเติม: [[Lab Specimen Collection Screen]] — Fields (Filter Bar)

---

### Specimen ถูก Reject เก็บใหม่ยังไง

**สาเหตุ:** เจ้าหน้าที่ Lab กด Reject Specimen และเลือกเหตุผลการ Reject แล้ว ระบบจึงเปลี่ยนสถานะเป็น **Specimen Rejected**

**วิธีแก้:**
1. ตรวจเหตุผล Reject จาก Lab Worklist หรือ Audit Log ถ้ามี
2. แจ้งผู้เก็บสิ่งส่งตรวจเพื่อเก็บตัวอย่างใหม่ตามเหตุผลที่ระบบบันทึก
3. กลับไปหน้า Specimen Collection Tab **NEW** รายการที่ถูก Reject จะแสดงอีกครั้ง
4. เลือกรายการเดิม กด **Collect Specimen** แล้วยืนยันเพื่อส่งกลับไปให้ Lab รับใหม่

-> อ่านเพิ่มเติม: [[Lab Order to Result]] — ขั้นตอน 3b Reject Specimen

---

### ลงผลผิดต้องแก้ยังไง

**สาเหตุ:** วิธีแก้ขึ้นกับว่าผลยังอยู่ก่อนหรือหลัง **Report Authorised**

**วิธีแก้:**
1. ถ้ายังไม่ Report Authorised: เปิด **Manual Result** อีกครั้ง เลือก **Modify Reason** แก้ค่า แล้วกด Save
2. ถ้า Report Authorised แล้ว: กด **Reset Result** เพื่อให้สถานะกลับเป็น Test Executed
3. หลัง Reset Result ให้เปิด Manual Result ลงผลใหม่ แล้ว Save อีกครั้ง
4. ตรวจสถานะให้กลับไป Report Entered และค่อย Report Authorised เมื่อผลถูกต้อง

-> อ่านเพิ่มเติม: [[Lab Result Entry Screen]] — Modify Reason / Reset Result
