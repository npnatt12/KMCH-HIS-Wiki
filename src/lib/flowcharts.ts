export const FLOWCHARTS: Record<string, string> = {
  'opd-patient-flow': `graph LR
  A([Registered]) --> B([Arrived])
  B --> C([Screening Completed])
  C --> D([Consultation Started])
  D --> E([Consultation Completed])
  E --> F([Medical Discharge])
  F --> G([Billing In Progress])
  G --> H([Financial Discharge])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#dbeafe,stroke:#1e40af
  style C fill:#dbeafe,stroke:#1e40af
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#fef9c3,stroke:#854d0e
  style H fill:#dcfce7,stroke:#166534`,

  'op-billing-workflow': `graph LR
  A([Medical Discharge]) --> B[Lock Bill]
  B --> C[Allocate Bill]
  C --> D[Modify Payor]
  D --> E[Allocate All]
  E --> F[Generate Bill]
  F --> G([Settle])
  G --> H([Financial Discharge])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#fee2e2,stroke:#b91c1c
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#dcfce7,stroke:#166534
  style H fill:#dcfce7,stroke:#166534`,

  'ipd-discharge-process': `graph TB
  subgraph Doctor[Doctor]
    A([1. Discharge Advice]) --> B[2. Discharge Order]
  end
  subgraph Nurse[Nurse]
    C[3. Medical Discharge] --> D{Billing Complete?}
    D -->|Yes| E([4. Final Discharge])
    D -->|No| F([Wait])
    F --> D
  end
  B --> C
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#fef9c3,stroke:#854d0e
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#f3f4f6,stroke:#6b7280
  style E fill:#dcfce7,stroke:#166534
  style F fill:#fef9c3,stroke:#854d0e`,

  'lab-order-to-result': `graph TB
  A([Ordered]) --> B[Specimen Collected]
  B --> C{Accept?}
  C -->|Yes| D[Specimen Accepted]
  C -->|Reject| E([Specimen Rejected])
  E -->|Re-collect| B
  D --> F[Report Entered]
  F --> G[Report Authorized]
  G --> H([EMR Result])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#f3f4f6,stroke:#6b7280
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fee2e2,stroke:#b91c1c
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#dcfce7,stroke:#166534
  style H fill:#dcfce7,stroke:#166534`,

  'admission-workflow': `graph TB
  subgraph From_OPD_ER[From OPD / ER]
    A1([EMR Request]) --> A2[Admission List]
    A2 --> A3[Admit]
  end
  subgraph Direct[Direct Admission]
    B1([Search Patient]) --> B2[Select]
  end
  A3 --> C[Admission Detail]
  B2 --> C
  C --> D[Save]
  D --> E([Arrive])
  style A1 fill:#dbeafe,stroke:#1e40af
  style B1 fill:#dbeafe,stroke:#1e40af
  style A2 fill:#f3f4f6,stroke:#6b7280
  style A3 fill:#f3f4f6,stroke:#6b7280
  style B2 fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#f3f4f6,stroke:#6b7280
  style E fill:#dcfce7,stroke:#166534`,

  'new-patient-registration': `graph LR
  A([Registration]) --> B[Patient Search]
  B -->|Not Found| C[New Patient Form]
  C --> D[Demographics]
  D --> E([SAVE])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#dcfce7,stroke:#166534`,

  'emergency-registration': `graph LR
  A([Emergency Menu]) --> B[Registration]
  B --> C{New / Existing?}
  C -->|New| D[Basic Info + Visit]
  C -->|Existing| E[Search Patient]
  E --> D
  D --> F([Save])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#f3f4f6,stroke:#6b7280
  style F fill:#dcfce7,stroke:#166534`,

  'mass-casualty-registration': `graph LR
  A([Emergency]) --> B[Mass Casualty]
  B --> C[Incident Details]
  C --> D[Save]
  D --> E[Auto-create Visits]
  E --> F([Whiteboard])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#f3f4f6,stroke:#6b7280
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#dcfce7,stroke:#166534`,

  'appointment-registration': `graph TB
  subgraph Method_1[Registration Menu]
    A1([OP Registration]) --> A2[Search + Select]
    A2 --> A3[Auto-fill Appt]
  end
  subgraph Method_2[OPD Worklist]
    B1([APPOINTMENTS Tab]) --> B2[Select Patient]
  end
  A3 --> C([SAVE])
  B2 --> C
  style A1 fill:#dbeafe,stroke:#1e40af
  style B1 fill:#dbeafe,stroke:#1e40af
  style A2 fill:#f3f4f6,stroke:#6b7280
  style A3 fill:#fef9c3,stroke:#854d0e
  style B2 fill:#f3f4f6,stroke:#6b7280
  style C fill:#dcfce7,stroke:#166534`,

  'anc-visit-workflow': `graph TB
  A([EMR → ANC]) --> B[ANC Chart]
  B --> C[Pregnancy Detail]
  C --> D[Delivery History]
  D --> E[Obstetric Summary]
  E --> F[Examination]
  F --> G[Medical History]
  G --> H[Outside Lab]
  H --> I[SAVE]
  I --> J{Complete?}
  J -->|Yes| K([Completed])
  J -->|No| L([Next Visit])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#f3f4f6,stroke:#6b7280
  style D fill:#f3f4f6,stroke:#6b7280
  style E fill:#f3f4f6,stroke:#6b7280
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#fef9c3,stroke:#854d0e
  style H fill:#fef9c3,stroke:#854d0e
  style I fill:#f3f4f6,stroke:#6b7280
  style K fill:#dcfce7,stroke:#166534
  style L fill:#fef9c3,stroke:#854d0e`,

  // ── Module-level overview charts (18 modules) ────────────────────────────

  'registration': `graph LR
  A([OP Registration]) --> B[ค้นหาผู้ป่วย]
  B -->|ไม่พบ| C[New Patient Form]
  B -->|พบ| D[เลือกผู้ป่วยเก่า]
  C --> E[กรอก Demographics]
  D --> E
  E --> F[เลือกสิทธิ์ Payor]
  F --> G([SAVE — สร้าง Visit])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#dcfce7,stroke:#166534`,

  'mrd': `graph LR
  A([MRD Worklist]) --> B{ประเภทคำขอ}
  B -->|Appointment| C[Appointment Issue]
  B -->|Walk-in| D[Direct Issue]
  C --> E[Issue แฟ้ม]
  D --> E
  E --> F[ส่ง OPD/IPD]
  F --> G[Folder Return — คืนแฟ้ม]
  G --> H([จัดเก็บ])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#f3f4f6,stroke:#6b7280
  style D fill:#f3f4f6,stroke:#6b7280
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#fef9c3,stroke:#854d0e
  style H fill:#dcfce7,stroke:#166534`,

  'opd': `graph LR
  A([ลงทะเบียน]) --> B[Arrived — รับผู้ป่วย]
  B --> C[คัดกรอง Vital Signs]
  C --> D[พบแพทย์ — EMR]
  D --> E[สั่ง Orders]
  E --> F[Medical Discharge]
  F --> G[ชำระเงิน Billing]
  G --> H([Financial Discharge])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#fef9c3,stroke:#854d0e
  style H fill:#dcfce7,stroke:#166534`,

  'er': `graph LR
  A([Emergency]) --> B[ลงทะเบียนฉุกเฉิน]
  B --> C[Triage — ESI Level]
  C --> D[รักษา + Orders]
  D --> E{Discharge Status}
  E -->|Discharge| F([Medical Discharge])
  E -->|Refer Admission| G([ส่ง Admission])
  E -->|Send to OR| H([ส่ง OR])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#f3f4f6,stroke:#6b7280
  style F fill:#dcfce7,stroke:#166534
  style G fill:#dcfce7,stroke:#166534
  style H fill:#dcfce7,stroke:#166534`,

  'admission-module': `graph LR
  A([Request จาก OPD/ER]) --> C[Admission List]
  B([Direct Admission]) --> C
  C --> D[เลือกเตียง Bed Selection]
  D --> E[กรอก Admission Detail]
  E --> F[Save]
  F --> G([Arrive — รับเข้า Ward])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#dbeafe,stroke:#1e40af
  style C fill:#f3f4f6,stroke:#6b7280
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#f3f4f6,stroke:#6b7280
  style G fill:#dcfce7,stroke:#166534`,

  'ipd': `graph LR
  A([Arrive — รับเข้า Ward]) --> B[Ward Board]
  B --> C[Nursing — Vital Signs]
  C --> D[Execute Orders]
  D --> E{Transfer/Discharge?}
  E -->|Transfer| F[ย้าย Ward]
  E -->|Discharge| G[4-Step Discharge]
  G --> H([Final Discharge])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#f3f4f6,stroke:#6b7280
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#fef9c3,stroke:#854d0e
  style H fill:#dcfce7,stroke:#166534`,

  'anc': `graph TB
  A([EMR → ANC]) --> B[ANC Chart — ลงทะเบียนฝากครรภ์]
  B --> C[Pregnancy Detail + EDC]
  C --> D[Delivery History]
  D --> E[Obstetric Summary]
  E --> F[Examination + Medical History]
  F --> G[SAVE]
  G --> H{ครบตามมาตรฐาน?}
  H -->|Yes| I([Completed — ปิด Cycle])
  H -->|No| J([นัดครั้งถัดไป])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#f3f4f6,stroke:#6b7280
  style H fill:#f3f4f6,stroke:#6b7280
  style I fill:#dcfce7,stroke:#166534
  style J fill:#fef9c3,stroke:#854d0e`,

  'emr-doctor': `graph LR
  A([Doctor Worklist]) --> B[เลือกผู้ป่วย]
  B --> C[เปิด EMR — Chief Complaint]
  C --> D[ตรวจร่างกาย + วินิจฉัย]
  D --> E[สั่ง Orders]
  E --> F[SAVE — บันทึก Visit]
  F --> G([Medical Discharge])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#f3f4f6,stroke:#6b7280
  style G fill:#dcfce7,stroke:#166534`,

  'order-entry': `graph LR
  A([EMR → Order]) --> B{วิธีเพิ่มรายการ}
  B -->|Search| C[Order Details]
  B -->|Tick Sheet| D[Tick Sheet]
  B -->|Favorites| E[Favorites/Order Set]
  C --> F[ตรวจสอบ Drug Alerts]
  D --> F
  E --> F
  F --> G[ระบุ Password → Save]
  G --> H([Orders Created])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#f3f4f6,stroke:#6b7280
  style H fill:#dcfce7,stroke:#166534`,

  'lab': `graph LR
  A([สั่งตรวจ — Order]) --> B[เก็บสิ่งส่งตรวจ]
  B --> C{Accept?}
  C -->|Accept| D[Specimen Accepted]
  C -->|Reject| E[เก็บใหม่]
  E --> B
  D --> F[ลงผล Manual/Auto]
  F --> G[Authorize ผล]
  G --> H([ผลแสดงใน EMR])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#f3f4f6,stroke:#6b7280
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fee2e2,stroke:#b91c1c
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#fef9c3,stroke:#854d0e
  style H fill:#dcfce7,stroke:#166534`,

  'xray': `graph LR
  A([สั่งตรวจ — Order]) --> B[Register — ลงทะเบียน]
  B --> C[Execute — ถ่ายภาพ]
  C --> D[Report Entry — อ่านผล]
  D --> E[Authorize ผล]
  E --> F([ผลแสดงใน EMR])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#dcfce7,stroke:#166534`,

  'or': `graph LR
  A([Surgery Request / OR Schedule]) --> B[Book OR — ตาราง]
  B --> C[Confirm Booking]
  C --> D[OR Worklist — วันผ่าตัด]
  D --> E[OR Record — บันทึกผ่าตัด]
  E --> F[Anesthesia Record]
  F --> G([Recovery Room])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#dcfce7,stroke:#166534`,

  'labour-and-newborn': `graph TB
  A([Ward Board — ห้องคลอด]) --> B[Labour Detail]
  B --> C[Pregnancy Detail + EDC]
  C --> D[Delivery Details — บันทึกคลอด]
  D --> E[Newborn Detail]
  E --> F[APGAR Score]
  F --> G([Auto-Admit ทารก — Nursery])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#dcfce7,stroke:#166534`,

  'pharmacy': `graph LR
  A([Order ใบสั่งยา]) --> B[Allocate — จัดยา]
  B --> C{Drug Alerts?}
  C -->|ระบุเหตุผล| D[Verify — ตรวจสอบ]
  C -->|ไม่มี Alert| D
  D --> E[Dispense — จ่ายยา]
  E --> F([ส่งยาผู้ป่วย])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#fef9c3,stroke:#854d0e
  style C fill:#f3f4f6,stroke:#6b7280
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#dcfce7,stroke:#166534`,

  'inventory': `graph LR
  A([รับสินค้า GRN]) --> B[Approve — อนุมัติ GRN]
  B --> C[Stock คลังสินค้า]
  C --> D{เบิก/โอน}
  D -->|Request| E[จ่ายออก Issue]
  D -->|Transfer| F[โอนย้ายคลัง]
  E --> G([Ledger — บัญชีสต็อก])
  F --> G
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#f3f4f6,stroke:#6b7280
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#dcfce7,stroke:#166534`,

  'diet': `graph LR
  A([Diet Worklist — ผู้ป่วยใน]) --> B[Diet Order Entry]
  B --> C[สั่งอาหาร 3 มื้อ]
  C --> D[Kitchen Worklist]
  D --> E[เตรียมอาหาร]
  E --> F([ส่งอาหารผู้ป่วย])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#dcfce7,stroke:#166534`,

  'cssd': `graph LR
  A([แผนก Request]) --> B[CSSD Issue — จ่าย]
  B --> C[แผนกใช้งาน]
  C --> D[แผนก Return — คืน]
  D --> E[Clean ล้าง]
  E --> F[Pack บรรจุ]
  F --> G[Sterilize ฆ่าเชื้อ]
  G --> H([พร้อมจ่ายอีกครั้ง])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#fef9c3,stroke:#854d0e
  style C fill:#f3f4f6,stroke:#6b7280
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#fef9c3,stroke:#854d0e
  style H fill:#dcfce7,stroke:#166534`,

  'billing': `graph LR
  A([Medical Discharge]) --> B[Lock Bill]
  B --> C[Allocate Bill]
  C --> D[Modify Payor สิทธิ์]
  D --> E[Allocate All]
  E --> F[Generate Bill]
  F --> G[Settle ชำระเงิน]
  G --> H([Financial Discharge])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#fee2e2,stroke:#b91c1c
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#fef9c3,stroke:#854d0e
  style H fill:#dcfce7,stroke:#166534`,

  // ── New workflow charts (Phase 1) ────────────────────────────────────────

  'pharmacy-dispensing-workflow': `graph TB
  subgraph OP[OP Dispensing]
    A([Ordered]) --> B[Register]
    B --> C[Allocate]
    C --> D{Drug Alert?}
    D -->|Yes — Add Reason| E[Verify]
    D -->|No| E
    E --> F([Dispensed])
  end
  subgraph IP[IP Fill]
    G([Generate IP Fill]) --> H[Allocate & Dispense]
    H --> I([Dispensed / Partial])
  end
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#f3f4f6,stroke:#6b7280
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#dcfce7,stroke:#166534
  style G fill:#dbeafe,stroke:#1e40af
  style H fill:#fef9c3,stroke:#854d0e
  style I fill:#dcfce7,stroke:#166534`,

  'pharmacy-med-reject-return-workflow': `graph TB
  subgraph Reject[Med Reject]
    A([Pharmacy Worklist]) --> B[Med Reject]
    B --> C[ระบุเหตุผล → Confirm]
    C --> D([Doctor Worklist — Reject Box])
    D --> E{Doctor Decision}
    E -->|Confirm| F([กลับ Pharmacy Worklist])
    E -->|Cancel| G([Order Cancelled])
  end
  subgraph Return[Med Return OP]
    H([Dispensed + Financial Discharge]) --> I[Med Return]
    I --> J[ระบุจำนวนคืน → Save]
    J --> K{Verify?}
    K -->|OK| L([Completed])
    K -->|Error| M([Cancelled])
  end
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#fee2e2,stroke:#b91c1c
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#f3f4f6,stroke:#6b7280
  style F fill:#dcfce7,stroke:#166534
  style G fill:#fee2e2,stroke:#b91c1c
  style H fill:#dbeafe,stroke:#1e40af
  style I fill:#fef9c3,stroke:#854d0e
  style J fill:#fef9c3,stroke:#854d0e
  style K fill:#f3f4f6,stroke:#6b7280
  style L fill:#dcfce7,stroke:#166534
  style M fill:#fee2e2,stroke:#b91c1c`,

  'inventory-receive-workflow': `graph LR
  A([Goods Receive → New]) --> B[เลือก Type GRN]
  B --> C[กรอก Header — Store / Vendor]
  C --> D[เพิ่มรายการ Items]
  D --> E[Batch ID + Expiry + Price]
  E --> F[Save]
  F --> G{Approval Required}
  G -->|Approve| H([Raised — สต็อกเพิ่ม])
  G -->|Cancel| I([Cancelled])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#f3f4f6,stroke:#6b7280
  style G fill:#f3f4f6,stroke:#6b7280
  style H fill:#dcfce7,stroke:#166534
  style I fill:#fee2e2,stroke:#b91c1c`,

  'inventory-transfer-request-workflow': `graph TB
  A([Stock Request → New]) --> B{Type}
  B -->|Transfer| C[From Store → To Store]
  B -->|Issue| D[From Dept → To Store]
  C --> E[Add Items → Save]
  D --> E
  E --> F{Approve?}
  F -->|Approve| G([Raised])
  F -->|Cancel| H([Cancelled])
  G --> I[Stock Transfer / Issue]
  I --> J{Transfer Accept?}
  J -->|Accept| K([Completed])
  J -->|No Accept Reqd| K
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#f3f4f6,stroke:#6b7280
  style F fill:#f3f4f6,stroke:#6b7280
  style G fill:#fef9c3,stroke:#854d0e
  style H fill:#fee2e2,stroke:#b91c1c
  style I fill:#fef9c3,stroke:#854d0e
  style J fill:#f3f4f6,stroke:#6b7280
  style K fill:#dcfce7,stroke:#166534`,

  'xray-order-to-report-workflow': `graph LR
  A([แพทย์สั่งตรวจ]) --> B([Ordered])
  B --> C[Register]
  C --> D([Registered])
  D --> E[Execute — Modality + Radiologist]
  E --> F([Executed])
  F --> G[Report Entry]
  G --> H([Report Entered])
  H --> I[Approve Result]
  I --> J([Report Authorized — EMR])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#fef9c3,stroke:#854d0e
  style C fill:#f3f4f6,stroke:#6b7280
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#fef9c3,stroke:#854d0e
  style H fill:#fef9c3,stroke:#854d0e
  style I fill:#fef9c3,stroke:#854d0e
  style J fill:#dcfce7,stroke:#166534`,

  'or-surgery-request-to-record-workflow': `graph TB
  subgraph Request[Surgery Request]
    A([EMR → Referral → Surgery]) --> B[Surgery Request List]
    B --> C{Book / Cancel}
  end
  subgraph Schedule[OR Schedule]
    C -->|Book| D[เลือกห้อง + เวลา → Save]
    D --> E([Booked])
    E --> F[Confirm]
    F --> G([Confirmed])
  end
  subgraph Day_of_Surgery[Day of Surgery]
    G --> H[OR Worklist]
    H --> I[OR Record]
    I --> J[Anesthesia Record]
    J --> K([Completed → Recovery Room])
  end
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#f3f4f6,stroke:#6b7280
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#fef9c3,stroke:#854d0e
  style H fill:#fef9c3,stroke:#854d0e
  style I fill:#fef9c3,stroke:#854d0e
  style J fill:#fef9c3,stroke:#854d0e
  style K fill:#dcfce7,stroke:#166534`,

  'cssd-request-to-sterilize-workflow': `graph LR
  A([แผนก Request]) --> B[CSSD Issue — เลือก Tray]
  B --> C([Issued — จ่ายแผนก])
  C --> D[ใช้งานที่แผนก]
  D --> E[แผนก Return — คืน CSSD]
  E --> F[In Process: Clean]
  F --> G[In Process: Pack]
  G --> H[In Process: Sterilize]
  H --> I([Store — พร้อมจ่าย])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#fef9c3,stroke:#854d0e
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#f3f4f6,stroke:#6b7280
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#fef9c3,stroke:#854d0e
  style H fill:#fef9c3,stroke:#854d0e
  style I fill:#dcfce7,stroke:#166534`,

  'diet-order-to-kitchen-workflow': `graph LR
  subgraph Nutritionist[นักโภชนาการ]
    A([Diet Worklist — New Inpatients]) --> B[Diet Order Entry]
    B --> C[เลือก Ward + ผู้ป่วย]
    C --> D[เลือก Meal Set 3 มื้อ]
    D --> E[Confirm → Save]
  end
  subgraph Kitchen[ห้องครัว]
    E --> F[Kitchen Worklist]
    F --> G[Summary / Details View]
    G --> H([เตรียมอาหาร])
  end
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#f3f4f6,stroke:#6b7280
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#f3f4f6,stroke:#6b7280
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#fef9c3,stroke:#854d0e
  style H fill:#dcfce7,stroke:#166534`,

  'mrd-folder-issue-return-workflow': `graph LR
  A([New Register / Admit]) --> B([Auto Create Folder])
  B --> C([Requested])
  C --> D{วิธี Issue}
  D -->|Appointment| E[Appointment Issue]
  D -->|Direct| F[Direct Issue]
  D -->|MRD Worklist| G[Worklist Issue]
  E --> H([Issued])
  F --> H
  G --> H
  H --> I{Transfer?}
  I -->|Yes| J([Transferred])
  I -->|No| K[Folder Return]
  J --> K
  K --> L([Returned — พร้อม Issue ใหม่])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#f3f4f6,stroke:#6b7280
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#fef9c3,stroke:#854d0e
  style H fill:#fef9c3,stroke:#854d0e
  style I fill:#f3f4f6,stroke:#6b7280
  style J fill:#fef9c3,stroke:#854d0e
  style K fill:#fef9c3,stroke:#854d0e
  style L fill:#dcfce7,stroke:#166534`,

  'ipd-transfer-between-wards-workflow': `graph LR
  subgraph Ward_Source[Ward ต้นทาง]
    A([Ward Board]) --> B[Transfer Request Icon]
    B --> C[เลือก Ward / เตียงปลายทาง]
    C --> D[SAVE → รอ Admission]
  end
  subgraph Admission_Dept[Admission]
    D --> E[ตรวจสอบข้อมูล + เตียง]
    E --> F{เตียงว่าง?}
    F -->|Yes| G[กด TRANSFER]
    F -->|No| H([รอเตียงว่าง])
  end
  G --> I([ย้ายสำเร็จ — Ward Board ปลายทาง])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#f3f4f6,stroke:#6b7280
  style F fill:#f3f4f6,stroke:#6b7280
  style G fill:#fef9c3,stroke:#854d0e
  style H fill:#fee2e2,stroke:#b91c1c
  style I fill:#dcfce7,stroke:#166534`,

  'billing-ip-settlement-workflow': `graph TB
  A([Medical Discharge]) --> B[IP Cashier Worklist — Lock]
  B --> C[Allocate Bill]
  C --> D[Modify Payor — Rank]
  D --> E[Allocate All]
  E --> F{Deposit?}
  F -->|Yes| G[Use Deposit]
  F -->|No| H[Select Payment Mode]
  G --> H
  H --> I[Generate Bill → Settle]
  I --> J([Financial Discharge])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#fef9c3,stroke:#854d0e
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#f3f4f6,stroke:#6b7280
  style G fill:#fef9c3,stroke:#854d0e
  style H fill:#fef9c3,stroke:#854d0e
  style I fill:#fef9c3,stroke:#854d0e
  style J fill:#dcfce7,stroke:#166534`,

  'registration-update-merge-workflow': `graph TB
  subgraph Modify[Modify Demographics]
    A([Registration / OPD / IPD]) --> B[Modify Demographics]
    B --> C[ปลดล็อค — กดแก้ไข]
    C --> D[แก้ไขข้อมูล → Save]
  end
  subgraph Merge[Patient Merge]
    E([MRD → Patient Merge]) --> F[New Merge]
    F --> G[ระบุ Primary Patient]
    G --> H[ระบุ Secondary Patient]
    H --> I[ระบุ Reason → Confirm]
    I --> J{ถูกต้อง?}
    J -->|Yes| K([Merged — 1 HN])
    J -->|Unmerge| L([คืน 2 HN])
  end
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#dcfce7,stroke:#166534
  style E fill:#dbeafe,stroke:#1e40af
  style F fill:#f3f4f6,stroke:#6b7280
  style G fill:#fef9c3,stroke:#854d0e
  style H fill:#fef9c3,stroke:#854d0e
  style I fill:#fef9c3,stroke:#854d0e
  style J fill:#f3f4f6,stroke:#6b7280
  style K fill:#dcfce7,stroke:#166534
  style L fill:#fee2e2,stroke:#b91c1c`,

  'opd-doctor-emr-workflow': `graph LR
  A([Doctor Worklist — OutPatients]) --> B[START — Consultation Started]
  B --> C[ตรวจประวัติ + Vital Signs]
  C --> D[บันทึก EMR — Chief Complaint / Diagnosis]
  D --> E[สั่ง Orders]
  E --> F{ผลลัพธ์}
  F -->|จบปกติ| G[END — Consultation Completed]
  F -->|ส่งปรึกษา| H[OPD Consult]
  F -->|ขอ Admit| I[Request Admission]
  F -->|ส่งต่อนอก| J[Referral Out]
  G --> K([Medical Discharge → Billing])
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#fef9c3,stroke:#854d0e
  style C fill:#f3f4f6,stroke:#6b7280
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#f3f4f6,stroke:#6b7280
  style G fill:#dcfce7,stroke:#166534
  style H fill:#fef9c3,stroke:#854d0e
  style I fill:#fef9c3,stroke:#854d0e
  style J fill:#fef9c3,stroke:#854d0e
  style K fill:#dcfce7,stroke:#166534`,

  'ipd-doctor-emr-workflow': `graph TB
  A([Ward Board / Doctor Worklist]) --> B[เปิด IPD EMR]
  B --> C[บันทึก Progress Notes]
  C --> D[สั่ง Daily / Continuous Order]
  D --> E{Consult?}
  E -->|Yes| F[IPD Consult — ส่งปรึกษา]
  E -->|No| G[Discharge Summary]
  F --> G
  subgraph Discharge[4-Step Discharge]
    G --> H[Discharge Advice]
    H --> I[Discharge Order + Discharge Med]
    I --> J[Medical Discharge — Nurse]
    J --> K([Final Discharge])
  end
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#f3f4f6,stroke:#6b7280
  style C fill:#fef9c3,stroke:#854d0e
  style D fill:#fef9c3,stroke:#854d0e
  style E fill:#f3f4f6,stroke:#6b7280
  style F fill:#fef9c3,stroke:#854d0e
  style G fill:#fef9c3,stroke:#854d0e
  style H fill:#fef9c3,stroke:#854d0e
  style I fill:#fef9c3,stroke:#854d0e
  style J fill:#fef9c3,stroke:#854d0e
  style K fill:#dcfce7,stroke:#166534`,
};
