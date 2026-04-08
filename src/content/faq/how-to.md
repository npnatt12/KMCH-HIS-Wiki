---
title: "วิธีการใช้งาน (How-to)"
type: faq
tags:
  - faq
  - how-to
---

## Registration (ลงทะเบียน)

### ลงทะเบียนผู้ป่วยใหม่ได้อย่างไร?

1. เข้าเมนู **Registration > New Patient**
2. กรอก National ID หรือ Passport Number แล้วกด **Search** ตรวจสอบว่ามีข้อมูลในระบบหรือไม่
3. กรอกข้อมูลผู้ป่วย: ชื่อ-นามสกุล, วันเกิด, ที่อยู่, เบอร์โทร
4. เลือกสิทธิ์การรักษา (Payer) และกด **Verify** ตรวจสอบสิทธิ์
5. กด **SAVE** เพื่อบันทึกข้อมูลผู้ป่วยใหม่

-> [อ่านเพิ่มเติม](/modules/registration/)

### ลงทะเบียนผู้ป่วยฉุกเฉินอย่างไร?

1. เข้าเมนู **Registration > Emergency Registration**
2. กรอกข้อมูลเท่าที่มี (อย่างน้อยชื่อ หรือ Unknown)
3. ระบุ Chief Complaint และระดับ Triage
4. ระบบสร้าง HN และ VN อัตโนมัติ
5. กด **SAVE** แล้วส่งต่อไปยัง ER

-> [อ่านเพิ่มเติม](/workflows/emergency-registration/)

### ตรวจสอบสิทธิ์ผู้ป่วยอย่างไร?

1. เปิดหน้าจอ Registration หรือ Payer Verification
2. กรอก National ID ของผู้ป่วย
3. กดปุ่ม **Verify** เพื่อเชื่อมต่อกับระบบสิทธิ์ (สปสช./ประกันสังคม)
4. ระบบแสดงสิทธิ์ที่ตรวจสอบได้ ให้เลือกสิทธิ์ที่ถูกต้อง
5. กด **Confirm** เพื่อยืนยันสิทธิ์

-> [อ่านเพิ่มเติม](/modules/registration/)

### นัดหมายผู้ป่วยอย่างไร?

1. เข้าเมนู **Registration > Appointment**
2. ค้นหาผู้ป่วยด้วย HN หรือชื่อ
3. เลือกแผนกและแพทย์ที่ต้องการนัด
4. เลือกวันที่และเวลาจาก Slot ที่ว่าง
5. กด **SAVE** ระบบสร้างใบนัดอัตโนมัติ

-> [อ่านเพิ่มเติม](/workflows/appointment-registration/)

## OPD (ผู้ป่วยนอก)

### คัดกรองผู้ป่วยนอก (Screening) อย่างไร?

1. เข้าเมนู **OPD > Worklist** เลือกผู้ป่วยจากรายการ
2. บันทึก Vital Signs: BP, Pulse, Temp, RR, O2Sat, Weight, Height
3. บันทึก Chief Complaint (อาการสำคัญ)
4. ประเมิน Pain Score และ Fall Risk (ถ้ามี)
5. กด **SAVE** เพื่อส่งต่อให้แพทย์

-> [อ่านเพิ่มเติม](/modules/opd/)

### Medical Discharge ผู้ป่วยนอกอย่างไร?

1. แพทย์เปิดหน้าจอ OPD ของผู้ป่วย
2. บันทึก Diagnosis (ICD-10) และ Procedure (ICD-9)
3. สั่งยาและคำสั่งการรักษาที่ต้องการ
4. กดปุ่ม **Medical Discharge** เพื่อจำหน่ายทางการแพทย์
5. ผู้ป่วยจะถูกส่งต่อไปยังแผนกการเงินเพื่อชำระค่าใช้จ่าย

-> [อ่านเพิ่มเติม](/modules/opd/)

### นัดหมายผู้ป่วยกลับมาตรวจซ้ำอย่างไร?

1. ในหน้าจอ OPD กดปุ่ม **Follow-up Appointment**
2. เลือกแผนกและแพทย์
3. เลือกวันที่นัดจาก Calendar
4. ระบุเหตุผลการนัด
5. กด **SAVE** ระบบพิมพ์ใบนัดอัตโนมัติ

-> [อ่านเพิ่มเติม](/workflows/opd-patient-flow/)

## ER (ฉุกเฉิน)

### ทำ Triage ผู้ป่วยฉุกเฉินอย่างไร?

1. เข้าเมนู **ER > Triage**
2. เลือกผู้ป่วยจาก ER Worklist
3. ประเมินและเลือกระดับ Triage (1-5 หรือ Resuscitation/Emergency/Urgent/Less Urgent/Non-Urgent)
4. บันทึก Vital Signs และ Chief Complaint
5. กด **SAVE** ระบบจัดลำดับความเร่งด่วนอัตโนมัติ

-> [อ่านเพิ่มเติม](/modules/er/)

### จำหน่ายผู้ป่วยฉุกเฉินอย่างไร?

1. แพทย์บันทึก Diagnosis และสรุปการรักษา
2. กดปุ่ม **ER Discharge**
3. เลือก Discharge Type: กลับบ้าน / Admit / Refer / Dead
4. บันทึก Discharge Summary
5. กด **SAVE** ระบบส่งต่อไปยังการเงินหรือ Admission ตาม type

-> [อ่านเพิ่มเติม](/modules/er/)

## Billing (การเงิน)

### ออกบิลผู้ป่วยนอกอย่างไร?

1. เข้าเมนู **Billing > OP Billing Worklist**
2. เลือกผู้ป่วยที่ Medical Discharge แล้ว
3. ตรวจสอบรายการค่าใช้จ่าย (ค่ายา, ค่าตรวจ, ค่าหัตถการ)
4. ตรวจสอบว่าไม่มีรายการแถบแดง (รายการที่ยังไม่เสร็จ)
5. กดปุ่ม **Create Bill** แล้ว **Confirm Payment**

-> [อ่านเพิ่มเติม](/workflows/op-billing-workflow/)

### ยกเลิกบิลที่ออกไปแล้วได้อย่างไร?

1. เข้าเมนู **Billing > Bill Cancel**
2. ค้นหาบิลที่ต้องการยกเลิก (ภายใน 24 ชั่วโมง)
3. ระบุเหตุผลการยกเลิก
4. กด **Cancel Bill** (ต้องมีสิทธิ์ Supervisor)
5. ระบบ Reverse รายการทั้งหมดอัตโนมัติ

-> [อ่านเพิ่มเติม](/modules/billing/)

### รับเงินมัดจำ (Deposit) อย่างไร?

1. เข้าเมนู **Billing > Deposit**
2. ค้นหาผู้ป่วยด้วย HN
3. ระบุจำนวนเงินมัดจำ
4. เลือกวิธีชำระ (เงินสด/บัตรเครดิต/โอน)
5. กด **SAVE** ระบบออกใบเสร็จมัดจำอัตโนมัติ

-> [อ่านเพิ่มเติม](/modules/billing/)

## Admission (รับผู้ป่วยใน)

### Admit ผู้ป่วยจาก OPD หรือ ER อย่างไร?

1. แพทย์สั่ง Admit จากหน้าจอ OPD หรือ ER
2. เข้าเมนู **Admission > Admission Request**
3. เลือก Ward และ Room/Bed ที่ว่าง
4. ยืนยัน Diagnosis สำหรับ Admit
5. กด **Confirm Admission** ระบบสร้าง AN (Admission Number) อัตโนมัติ

-> [อ่านเพิ่มเติม](/workflows/admission-workflow/)

## IPD (ผู้ป่วยใน)

### รับผู้ป่วยเข้า Ward อย่างไร?

1. เข้าเมนู **IPD > Ward Worklist**
2. เลือกผู้ป่วยที่มี Admission Request
3. กดปุ่ม **Accept Patient** ยืนยันการรับเข้า Ward
4. ตรวจสอบข้อมูลเตียงและ Diagnosis
5. กด **SAVE** ผู้ป่วยปรากฏใน Ward Census

-> [อ่านเพิ่มเติม](/modules/ipd/)

### จำหน่ายผู้ป่วยใน (Discharge 4 ขั้นตอน) อย่างไร?

1. **Medical Discharge** - แพทย์กด Medical Discharge พร้อมบันทึก Discharge Summary และ Diagnosis
2. **Nurse Discharge** - พยาบาลตรวจสอบ Medication Reconciliation และให้คำแนะนำผู้ป่วย
3. **Financial Discharge** - การเงินตรวจสอบค่าใช้จ่ายและออกบิล
4. **Final Discharge** - เจ้าหน้าที่กด Final Discharge เพื่อปิด Case ผู้ป่วย

-> [อ่านเพิ่มเติม](/workflows/ipd-discharge-process/)

### ย้ายเตียงผู้ป่วยอย่างไร?

1. เข้าเมนู **IPD > Bed Transfer**
2. เลือกผู้ป่วยที่ต้องการย้าย
3. เลือก Ward และเตียงปลายทาง
4. ระบุเหตุผลการย้าย
5. กด **Confirm Transfer** ระบบอัปเดต Ward Census อัตโนมัติ

-> [อ่านเพิ่มเติม](/modules/ipd/)

## LAB (ห้องปฏิบัติการ)

### เก็บ Specimen อย่างไร?

1. เข้าเมนู **LAB > Specimen Collection Worklist**
2. เลือกผู้ป่วยจากรายการที่แพทย์สั่ง Lab
3. สแกน Barcode หรือเลือก Specimen ที่ต้องเก็บ
4. ยืนยันการเก็บ Specimen และบันทึกเวลา
5. กด **Collected** แล้วส่ง Specimen ไปยังห้อง Lab

-> [อ่านเพิ่มเติม](/workflows/lab-order-to-result/)

## Pharmacy (เภสัชกรรม)

### จ่ายยาผู้ป่วยอย่างไร?

1. เข้าเมนู **Pharmacy > Dispensing Worklist**
2. เลือกผู้ป่วยจากรายการที่มีคำสั่งยา
3. ตรวจสอบรายการยา, ขนาด, วิธีใช้
4. ตรวจสอบ Drug Interaction / Allergy Alert
5. กด **Dispense** เพื่อจ่ายยาและพิมพ์ฉลากยา

-> [อ่านเพิ่มเติม](/modules/pharmacy/)

### Med Reject คืออะไร และทำอย่างไร?

1. เภสัชกรพบปัญหาในคำสั่งยา (เช่น Dose ไม่เหมาะสม, Drug Interaction)
2. กดปุ่ม **Reject** ที่รายการยาที่มีปัญหา
3. ระบุเหตุผลการ Reject
4. ระบบแจ้งกลับไปยังแพทย์ผู้สั่ง
5. แพทย์แก้ไขคำสั่งยาและส่งกลับมาใหม่

-> [อ่านเพิ่มเติม](/modules/pharmacy/)

## Order Entry (คำสั่งการรักษา)

### สั่งยาผู้ป่วยอย่างไร?

1. เข้าหน้าจอ **Order Entry** ของผู้ป่วย
2. พิมพ์ชื่อยาในช่อง Search แล้วเลือกจากรายการ
3. ระบุ Dose, Frequency, Route, Duration
4. ตรวจสอบ Drug Alert ที่ระบบแจ้งเตือน (ถ้ามี)
5. กด **SAVE Order** เพื่อส่งคำสั่งไปยังเภสัชกรรม

-> [อ่านเพิ่มเติม](/modules/order-entry/)

## OR (ห้องผ่าตัด)

### จองห้องผ่าตัดอย่างไร?

1. เข้าเมนู **OR > OR Scheduling**
2. เลือกวันที่และห้องผ่าตัดที่ว่าง
3. กรอกข้อมูลผู้ป่วย, Surgeon, Anesthesiologist
4. ระบุ Procedure และ Estimated Duration
5. กด **SAVE** ระบบจองห้องผ่าตัดและแจ้งทีมที่เกี่ยวข้อง

-> [อ่านเพิ่มเติม](/modules/or/)

## MRD (เวชระเบียน)

### ส่งแฟ้มเวชระเบียนอย่างไร?

1. เข้าเมนู **MRD > MRD Worklist**
2. ค้นหาแฟ้มด้วย HN หรือชื่อผู้ป่วย
3. กดปุ่ม **Request** เพื่อขอแฟ้ม
4. เจ้าหน้าที่เวชระเบียนหยิบแฟ้มและสแกน Barcode
5. กด **Deliver** เพื่อยืนยันการส่งแฟ้ม

-> [อ่านเพิ่มเติม](/modules/mrd/)

### Patient Merge ทำอย่างไร?

1. เข้าเมนู **MRD > Patient Merge** (ต้องมีสิทธิ์ Supervisor)
2. ค้นหาและเลือก HN ที่ต้องการรวม (Source HN)
3. ค้นหาและเลือก HN ปลายทาง (Target HN)
4. ตรวจสอบข้อมูลทั้ง 2 HN อย่างละเอียด
5. กด **Merge** ระบบรวมข้อมูลทั้งหมดไปยัง Target HN

-> [อ่านเพิ่มเติม](/modules/mrd/)
