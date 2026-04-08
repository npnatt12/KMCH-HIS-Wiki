---
title: Patient Types
type: concept
sources: ["2.MEDHIS Manual_Registration V.2.docx"]
created: 2026-04-08
updated: 2026-04-08
tags: [concept, patient, registration]
---

# Patient Types

ประเภทของผู้ป่วยในระบบ MEDHIS

## Patient Type (ชนิดของผู้ป่วย)

เลือกใน [[Patient Demographics Screen]] → Basic Details:

| Type | Description |
|------|-------------|
| **Normal** | ผู้ป่วยทั่วไป |
| **Foreigner** | ผู้ป่วยต่างชาติ |
| **Staff** | บุคลากรโรงพยาบาล |

## Special Flags (Additional Detail)

### VIP
- เปิด VIP → เลือก VIP Type
- ระบบแสดงสัญลักษณ์พิเศษบน [[Patient Banner]]

### Anonymous Patient
- เปิดเพื่อปกปิดชื่อผู้ป่วย
- ระบบแสดงชื่อเป็น `****` บน [[Patient Banner]]
- เฉพาะผู้ใช้ที่ได้รับสิทธิ์เท่านั้นจึงดูข้อมูลได้

### Interpreter Required
- เปิดเมื่อผู้ป่วยต้องการล่าม
- ระบบแสดง "Interpreter Reqd" บน [[Patient Banner]]

## ที่ใช้งาน

- [[Registration]] — Basic Details + Additional Detail
- [[Patient Demographics Screen]] — หน้าจอกรอกข้อมูล
