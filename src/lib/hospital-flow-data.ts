// hospital-flow-data.ts — Zone/connection/module data for Master Hospital Flow visualization

export type SystemId = 'medhis' | 'odoo' | 'patient-app';

export interface FlowSystem {
  id: SystemId;
  label: string;        // "MEDHIS · Phase 4"
  shortLabel: string;
  color: string;
  version: string;
}

export interface FlowZone {
  id: string;
  label: string;
  labelTh: string;
  color: string;
  borderColor: string;
  modules: string[];
  band: 'top' | 'split' | 'full';
  variant?: 'patient' | 'erp';
}

export interface FlowConnection {
  from: string;
  to: string;
  kind?: 'in-system' | 'cross-system';
  interfaceSlug?: string;
}

export interface FlowModule {
  slug: string;
  nameEn: string;
  nameTh: string;
  icon: string;
  zone: string;
  purpose: string;
  keyScreens: string[];
  primaryWorkflow: string[];
  connectedModules: string[];
  wikiUrl: string;
  system: SystemId;
  isNew?: boolean;
  embeddedIn?: SystemId;
}

// ── Systems ─────────────────────────────────────────────────────────

export const SYSTEMS: FlowSystem[] = [
  {
    id: 'medhis',
    label: 'MEDHIS · Phase 4',
    shortLabel: 'MEDHIS',
    color: '#22c55e',
    version: 'Phase 4 · Live 2025-10-20',
  },
  {
    id: 'odoo',
    label: 'Odoo Enterprise V16',
    shortLabel: 'Odoo',
    color: '#facc15',
    version: 'Enterprise V16 · PostgreSQL 12.22',
  },
  {
    id: 'patient-app',
    label: 'หมอพระจอม · Flutter 3.29',
    shortLabel: 'หมอพระจอม',
    color: '#ec4899',
    version: 'Flutter 3.29.2 · Play Store + App Store',
  },
];

// ── Entry Points (patient-side actors) ──────────────────────────────

export interface FlowEntryPoint {
  slug: string;
  nameEn: string;
  nameTh: string;
  icon: string;
  system: SystemId | 'external';
  description: string;
  externalLinks?: { label: string; url: string }[];
}

export const ENTRY_POINTS: FlowEntryPoint[] = [
  {
    slug: 'mophrachom-app',
    nameEn: 'หมอพระจอม Mobile App',
    nameTh: 'แอปหมอพระจอม',
    icon: '📱',
    system: 'patient-app',
    description: 'ผู้ป่วยจองและคุยกับแพทย์ผ่านแอป Flutter — เชื่อมตรงกับ Telemedicine module ใน MEDHIS',
    externalLinks: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=th.kmutnb.kmch.telemed' },
      { label: 'App Store', url: 'https://apps.apple.com/th/app/หมอพระจอม/id6473001234' },
    ],
  },
  {
    slug: 'walk-in',
    nameEn: 'Walk-in',
    nameTh: 'เดินมาเอง',
    icon: '🚶',
    system: 'external',
    description: 'ผู้ป่วยมารับบริการที่โรงพยาบาลโดยตรง',
  },
  {
    slug: 'phone-booking',
    nameEn: 'Phone Booking',
    nameTh: 'จองทางโทรศัพท์',
    icon: '📞',
    system: 'external',
    description: 'ผู้ป่วยโทรศัพท์มาจองคิว เจ้าหน้าที่ลงทะเบียนให้',
  },
];

// ── 8 Zones: Patient touchpoints + 6 clinical + Back-office ─────────

export const ZONES: FlowZone[] = [
  {
    id: 'patient-touchpoints',
    label: 'Patient Touchpoints',
    labelTh: 'จุดเข้าโรงพยาบาล',
    color: '#ec4899',
    borderColor: '#db2777',
    modules: [],
    band: 'top',
    variant: 'patient',
  },
  {
    id: 'registration',
    label: 'Registration',
    labelTh: 'ลงทะเบียน',
    color: '#3b82f6',
    borderColor: '#2563eb',
    modules: ['registration', 'mrd', 'queue-management'],
    band: 'full',
  },
  {
    id: 'outpatient',
    label: 'Outpatient',
    labelTh: 'ผู้ป่วยนอก',
    color: '#22c55e',
    borderColor: '#16a34a',
    modules: ['opd', 'emr-doctor', 'order-entry', 'anc', 'telemedicine'],
    band: 'split',
  },
  {
    id: 'emergency',
    label: 'Emergency',
    labelTh: 'ฉุกเฉิน',
    color: '#ef4444',
    borderColor: '#dc2626',
    modules: ['er'],
    band: 'split',
  },
  {
    id: 'clinical',
    label: 'Clinical Services',
    labelTh: 'บริการทางคลินิก',
    color: '#a855f7',
    borderColor: '#9333ea',
    modules: ['lab', 'xray', 'pharmacy', 'or'],
    band: 'split',
  },
  {
    id: 'inpatient',
    label: 'Inpatient',
    labelTh: 'ผู้ป่วยใน',
    color: '#f97316',
    borderColor: '#ea580c',
    modules: ['admission', 'ipd', 'labour-and-newborn', 'diet', 'cssd'],
    band: 'split',
  },
  {
    id: 'discharge',
    label: 'Discharge & Billing',
    labelTh: 'จำหน่ายและการเงิน',
    color: '#06b6d4',
    borderColor: '#0891b2',
    modules: ['billing', 'inventory'],
    band: 'full',
  },
  {
    id: 'back-office',
    label: 'Back-office · Odoo ERP V16',
    labelTh: 'สำนักงานหลัง · Odoo ERP V16',
    color: '#facc15',
    borderColor: '#ca8a04',
    modules: ['odoo-finance', 'odoo-inventory', 'odoo-procurement'],
    band: 'full',
    variant: 'erp',
  },
];

// ── Module-to-Module Connections ────────────────────────────────────

export const CONNECTIONS: FlowConnection[] = [
  { from: 'registration', to: 'opd' },
  { from: 'registration', to: 'er' },
  { from: 'registration', to: 'mrd' },
  { from: 'registration', to: 'billing' },
  { from: 'opd', to: 'emr-doctor' },
  { from: 'opd', to: 'lab' },
  { from: 'opd', to: 'xray' },
  { from: 'opd', to: 'billing' },
  { from: 'opd', to: 'admission' },
  { from: 'er', to: 'admission' },
  { from: 'er', to: 'or' },
  { from: 'er', to: 'billing' },
  { from: 'emr-doctor', to: 'order-entry' },
  { from: 'emr-doctor', to: 'anc' },
  { from: 'emr-doctor', to: 'admission' },
  { from: 'order-entry', to: 'lab' },
  { from: 'order-entry', to: 'xray' },
  { from: 'order-entry', to: 'pharmacy' },
  { from: 'order-entry', to: 'or' },
  { from: 'admission', to: 'ipd' },
  { from: 'ipd', to: 'labour-and-newborn' },
  { from: 'ipd', to: 'diet' },
  { from: 'ipd', to: 'cssd' },
  { from: 'ipd', to: 'billing' },
  { from: 'ipd', to: 'pharmacy' },
  { from: 'pharmacy', to: 'inventory' },
  { from: 'billing', to: 'inventory' },
  { from: 'lab', to: 'emr-doctor' },
  { from: 'xray', to: 'emr-doctor' },
];

// ── 18 Flow Modules ────────────────────────────────────────────────

export const FLOW_MODULES: FlowModule[] = [
  {
    slug: 'registration',
    nameEn: 'Registration',
    nameTh: 'ลงทะเบียน',
    icon: '📋',
    zone: 'registration',
    purpose: 'ระบบลงทะเบียนผู้ป่วยเป็นจุดเริ่มต้นของทุก visit ครอบคลุมการสร้างประวัติผู้ป่วยใหม่ เปิด visit ลงทะเบียนฉุกเฉิน และตรวจสอบสิทธิการรักษา',
    keyScreens: ['Patient Search Screen', 'Patient Demographics Screen', 'Bulk Registration', 'Pre-Registration'],
    primaryWorkflow: [
      'ค้นหาผู้ป่วย (Patient Search)',
      'สร้างประวัติใหม่หรือเลือกผู้ป่วยเก่า',
      'กรอกข้อมูล Demographics + สิทธิ์ (Payor)',
      'ตรวจสอบสิทธิ สปสช. (NHSO)',
      'บันทึก → ระบบสร้าง HN + เปิด Visit',
    ],
    connectedModules: ['opd', 'er', 'mrd', 'billing', 'ipd'],
    wikiUrl: '/modules/registration',
  },
  {
    slug: 'mrd',
    nameEn: 'MRD',
    nameTh: 'เวชระเบียน',
    icon: '📁',
    zone: 'registration',
    purpose: 'จัดเก็บและติดตามแฟ้มเวชระเบียน ครอบคลุมการสร้างแฟ้ม การจ่าย ยืม-คืน โอนย้ายระหว่างแผนก และรวม HN ซ้ำ',
    keyScreens: ['MRD Worklist Screen', 'View File', 'Issue File', 'Patient Merge'],
    primaryWorkflow: [
      'ระบบสร้าง OPD/IPD Folder อัตโนมัติ',
      'Worklist แสดงรายการขอแฟ้ม',
      'เจ้าหน้าที่ Issue File ส่งไปแผนก',
      'Return File เมื่อใช้เสร็จ',
      'Patient Merge กรณี HN ซ้ำ',
    ],
    connectedModules: ['registration', 'opd', 'ipd'],
    wikiUrl: '/modules/mrd',
  },
  {
    slug: 'opd',
    nameEn: 'OPD',
    nameTh: 'ผู้ป่วยนอก',
    icon: '🏥',
    zone: 'outpatient',
    purpose: 'ระบบจัดการผู้ป่วยนอกตั้งแต่ลงทะเบียนจนจำหน่าย ครอบคลุมการคัดกรอง บันทึก Vital Signs ดูคำสั่งแพทย์ นัดหมาย และติดตามสถานะ 8 ขั้น',
    keyScreens: ['OPD Worklist Screen', 'OPD Screening Screen', 'Appointment', 'Visit Detail Panel'],
    primaryWorkflow: [
      'Registered → Arrived (รับเข้าแผนก)',
      'คัดกรอง Vital Signs → Screening Completed',
      'แพทย์ตรวจ → Consultation Started/Completed',
      'Medical Discharge → ส่งการเงิน',
      'Financial Discharge → กลับบ้าน',
    ],
    connectedModules: ['registration', 'er', 'emr-doctor', 'lab', 'xray', 'billing', 'admission'],
    wikiUrl: '/modules/opd',
  },
  {
    slug: 'emr-doctor',
    nameEn: 'EMR Doctor',
    nameTh: 'EMR แพทย์',
    icon: '👨‍⚕️',
    zone: 'outpatient',
    purpose: 'บันทึกการตรวจรักษาของแพทย์ทั้ง OPD และ IPD ครอบคลุมการบันทึกประวัติ ตรวจร่างกาย วินิจฉัย สั่งการรักษา consult refer และ discharge',
    keyScreens: ['Doctor Worklist Screen', 'EMR Form Screen', 'Vital Signs 3 Views', 'Consult/Admit/Refer'],
    primaryWorkflow: [
      'Doctor Worklist → เลือกผู้ป่วย',
      'เปิด EMR → บันทึก 11 sections',
      'สั่งการรักษา (Order Entry)',
      'Consult / Admit / Refer / Medical Certificate',
      'บันทึกเสร็จ → Status อัปเดท',
    ],
    connectedModules: ['opd', 'ipd', 'order-entry', 'anc', 'lab', 'xray', 'pharmacy', 'admission'],
    wikiUrl: '/modules/emr-doctor',
  },
  {
    slug: 'order-entry',
    nameEn: 'Order Entry',
    nameTh: 'คำสั่งการรักษา',
    icon: '📝',
    zone: 'outpatient',
    purpose: 'บันทึกคำสั่งการรักษาทุกประเภท ครอบคลุม Lab, Radiology, procedures, ยา, วัสดุสิ้นเปลือง ทั้ง OPD และ IPD พร้อม 11 drug alerts',
    keyScreens: ['Order Entry Screen', 'Drug Alert Popup', 'Tick Sheet', 'Favorites'],
    primaryWorkflow: [
      'เลือก Tab (Order Details/Tick Sheet/Favorites)',
      'ค้นหาและเพิ่มรายการคำสั่ง',
      'ระบบตรวจสอบ Drug Alerts 11 ประเภท',
      'ยืนยันคำสั่ง → Save',
      'ส่งต่อ Lab/Radiology/Pharmacy ตามประเภท',
    ],
    connectedModules: ['emr-doctor', 'lab', 'xray', 'pharmacy', 'or'],
    wikiUrl: '/modules/order-entry',
  },
  {
    slug: 'anc',
    nameEn: 'ANC',
    nameTh: 'ฝากครรภ์',
    icon: '🤰',
    zone: 'outpatient',
    purpose: 'ระบบฝากครรภ์ใช้บันทึกและติดตามข้อมูลการฝากครรภ์ตั้งแต่เริ่มฝากจนก่อนคลอด ครอบคลุมข้อมูลครรภ์ ประวัติคลอด และ EDC',
    keyScreens: ['ANC Chart Screen', 'Current Pregnancy Detail', 'Delivery History', 'Obstetric Summary'],
    primaryWorkflow: [
      'EMR → เมนู ANC',
      'บันทึก Pregnancy Detail + EDC',
      'บันทึก Delivery History (ครั้งก่อน)',
      'อัปเดท Obstetric Summary',
      'นัดฝากครรภ์ครั้งถัดไป',
    ],
    connectedModules: ['emr-doctor', 'labour-and-newborn', 'opd'],
    wikiUrl: '/modules/anc',
  },
  {
    slug: 'er',
    nameEn: 'ER',
    nameTh: 'ฉุกเฉิน',
    icon: '🚑',
    zone: 'emergency',
    purpose: 'ระบบจัดการผู้ป่วยฉุกเฉินตั้งแต่ลงทะเบียน คัดกรอง Triage ESI จนจำหน่าย ครอบคลุมทั้งรายเดียวและอุบัติภัยหมู่',
    keyScreens: ['Whiteboard', 'ER Triage Screen', 'ER Discharge Screen', 'Mass Casualty'],
    primaryWorkflow: [
      'Emergency Registration (New/Existing)',
      'Whiteboard แสดงรายชื่อ + ESI สี',
      'Triage → บันทึก ESI Level + GCS',
      'แพทย์ตรวจ → สั่งการรักษา',
      'Emergency Discharge (5 outcomes)',
    ],
    connectedModules: ['registration', 'admission', 'or', 'billing', 'opd'],
    wikiUrl: '/modules/er',
  },
  {
    slug: 'lab',
    nameEn: 'LAB',
    nameTh: 'ห้องปฏิบัติการ',
    icon: '🔬',
    zone: 'clinical',
    purpose: 'ระบบจัดการตรวจทางห้องปฏิบัติการ 6 ขั้นตอน ตั้งแต่สั่งตรวจ เก็บ specimens รับ/ปฏิเสธ จนลงผลและรายงาน',
    keyScreens: ['Lab Specimen Collection Screen', 'Lab Result Entry Screen', 'Lab Worklist', 'Audit Log'],
    primaryWorkflow: [
      'Ordered → Specimen Collection (Batch)',
      'Specimen Accepted / Rejected',
      'Manual Result Entry (L/H indicators)',
      'Report Entered → Report Authorized',
      'ผลส่งกลับ EMR อัตโนมัติ',
    ],
    connectedModules: ['order-entry', 'emr-doctor', 'opd', 'ipd'],
    wikiUrl: '/modules/lab',
  },
  {
    slug: 'xray',
    nameEn: 'XRAY',
    nameTh: 'รังสีวินิจฉัย',
    icon: '📡',
    zone: 'clinical',
    purpose: 'ระบบจัดการตรวจทางรังสีวินิจฉัย 5 ขั้นตอน ตั้งแต่สั่งตรวจ ลงทะเบียน ถ่ายภาพ จนอ่านผลและรายงาน',
    keyScreens: ['XRAY Register Screen', 'XRAY Report Screen', 'Radiology Worklist', 'PACS'],
    primaryWorkflow: [
      'Ordered → Registered (Modality)',
      'Executed (ถ่ายภาพ)',
      'Report Entry (Result + Impression)',
      'Report Authorized (Radiologist)',
      'ผลส่งกลับ EMR + PACS',
    ],
    connectedModules: ['order-entry', 'emr-doctor', 'opd', 'ipd'],
    wikiUrl: '/modules/xray',
  },
  {
    slug: 'pharmacy',
    nameEn: 'Pharmacy',
    nameTh: 'เภสัชกรรม',
    icon: '💊',
    zone: 'clinical',
    purpose: 'ตรวจสอบและจ่ายยาทั้ง OP และ IP ครอบคลุม 5-step Dispense, 11 drug alerts, IP Fill, Med Reconcile, คืนยา, และจัดการ stock',
    keyScreens: ['Pharmacy Dispensing Screen', 'OP Refills', 'IP Fill', 'Med Return'],
    primaryWorkflow: [
      'Ordered → Registered',
      'Allocated (ตรวจ stock + alerts)',
      'Verified (เภสัชกรตรวจสอบ)',
      'Dispensed (จ่ายยา)',
      'หรือ Allocate & Dispense (shortcut)',
    ],
    connectedModules: ['order-entry', 'emr-doctor', 'ipd', 'inventory', 'billing'],
    wikiUrl: '/modules/pharmacy',
  },
  {
    slug: 'or',
    nameEn: 'OR',
    nameTh: 'ห้องผ่าตัด',
    icon: '🔪',
    zone: 'clinical',
    purpose: 'ระบบจัดการห้องผ่าตัดตั้งแต่จองห้อง จัดตาราง บันทึกรายละเอียดผ่าตัด จนดูแลห้องพักฟื้น',
    keyScreens: ['OR Schedule Screen', 'OR Record Screen', 'Surgery Request List', 'OR Worklist'],
    primaryWorkflow: [
      'Surgery Request จาก EMR/ER',
      'OR Schedule จองห้อง+เวลา',
      'OR Worklist วันผ่าตัด',
      'OR Record บันทึก 6 timing fields',
      'Recovery Room ดูแลพักฟื้น',
    ],
    connectedModules: ['emr-doctor', 'er', 'order-entry', 'admission', 'ipd'],
    wikiUrl: '/modules/or',
  },
  {
    slug: 'admission',
    nameEn: 'Admission',
    nameTh: 'รับผู้ป่วยใน',
    icon: '🛎️',
    zone: 'inpatient',
    purpose: 'ระบบรับผู้ป่วยเข้าเป็นผู้ป่วยใน (Admit) จัดการเตียง Pre-Admit Orders และยกเลิก Admit',
    keyScreens: ['Admission Detail Screen', 'Admission List', 'Request List', 'Bed Selection'],
    primaryWorkflow: [
      'Request Admission จาก OPD/ER',
      'Admission List → เลือก Admit',
      'กรอก Admission Detail 7 sections',
      'เลือก Ward + Bed',
      'ยืนยัน → ผู้ป่วยเข้า Ward Board',
    ],
    connectedModules: ['opd', 'er', 'emr-doctor', 'ipd', 'or'],
    wikiUrl: '/modules/admission',
  },
  {
    slug: 'ipd',
    nameEn: 'IPD',
    nameTh: 'ผู้ป่วยใน',
    icon: '🛏️',
    zone: 'inpatient',
    purpose: 'ระบบบริหารผู้ป่วยในตั้งแต่รับเข้า Ward จนจำหน่าย ครอบคลุม Vital Signs, รับคำสั่งแพทย์, ย้ายเตียง, คืนยา และ 4-step Discharge',
    keyScreens: ['Ward Board', 'Nursing Worklist Screen', 'IPD Transfer Screen', 'Discharge Plan'],
    primaryWorkflow: [
      'Arrive → รับเข้า Ward',
      'Charting Vital Signs + รับคำสั่งแพทย์',
      'Nursing Worklist → Execute Orders',
      'Transfer Request (ย้ายเตียง/Ward)',
      '4-Step Discharge (Advice→Order→Medical→Final)',
    ],
    connectedModules: ['admission', 'emr-doctor', 'pharmacy', 'lab', 'xray', 'diet', 'cssd', 'billing', 'labour-and-newborn'],
    wikiUrl: '/modules/ipd',
  },
  {
    slug: 'labour-and-newborn',
    nameEn: 'Labour & Newborn',
    nameTh: 'ห้องคลอด/ทารก',
    icon: '👶',
    zone: 'inpatient',
    purpose: 'ระบบบันทึกข้อมูลการคลอดและทารกแรกคลอด ตั้งแต่แรกรับที่ห้องคลอดจนรับทารกเข้า Nursery',
    keyScreens: ['Labour Detail', 'Newborn Detail', 'APGAR Score', 'Father Detail'],
    primaryWorkflow: [
      'Ward Board → เลือก Ward ห้องคลอด',
      'Labour Detail บันทึก 8 sections',
      'Labour Stage คำนวณ 5 durations',
      'Newborn Detail + APGAR 3-minute',
      'Nursery auto-admit ทารก',
    ],
    connectedModules: ['ipd', 'anc', 'admission'],
    wikiUrl: '/modules/labour-and-newborn',
  },
  {
    slug: 'diet',
    nameEn: 'Diet',
    nameTh: 'โภชนาการ',
    icon: '🍽️',
    zone: 'inpatient',
    purpose: 'จัดการอาหารผู้ป่วย ครอบคลุมการสั่งอาหาร 3 มื้อ การจัดเตรียมอาหารในห้องครัว และการให้คำปรึกษาทางโภชนาการ',
    keyScreens: ['Diet Worklist', 'Diet Order Entry Screen', 'Kitchen Worklist', 'Diet Plan'],
    primaryWorkflow: [
      'Diet Worklist → เลือกผู้ป่วย',
      'Diet Order Entry 3 มื้อ (เช้า/กลางวัน/เย็น)',
      'Kitchen Worklist (Summary/Details)',
      'Diet Plan สำหรับแผนโภชนาการ',
      'Consult นักโภชนาการ',
    ],
    connectedModules: ['ipd', 'order-entry'],
    wikiUrl: '/modules/diet',
  },
  {
    slug: 'cssd',
    nameEn: 'CSSD',
    nameTh: 'เวชภัณฑ์ปลอดเชื้อ',
    icon: '🧼',
    zone: 'inpatient',
    purpose: 'จัดการเวชภัณฑ์ปลอดเชื้อ ครอบคลุมการขอเบิก จ่าย รับคืน และกระบวนการทำให้ปราศจากเชื้อ (Clean→Pack→Sterilize)',
    keyScreens: ['CSSD Request Screen', 'Issue Screen', 'Return Screen', 'In Process Screen'],
    primaryWorkflow: [
      'แผนก Request (Tray Master + Priority)',
      'CSSD Issue (จ่ายเวชภัณฑ์)',
      'แผนก Return (Clean option)',
      'In Process: Clean → Pack → Sterilize',
      'พร้อมจ่ายอีกครั้ง',
    ],
    connectedModules: ['ipd', 'or', 'inventory'],
    wikiUrl: '/modules/cssd',
  },
  {
    slug: 'billing',
    nameEn: 'Billing',
    nameTh: 'การเงิน',
    icon: '💰',
    zone: 'discharge',
    purpose: 'ระบบการเงินสำหรับออกเอกสารค่ารักษา ชำระเงิน 5 รูปแบบ จัดการเงินมัดจำ ติดตามค้างชำระ ทั้ง OP และ IP',
    keyScreens: ['Billing Settlement Screen', 'OP Cashier Worklist', 'IP Cashier Worklist', 'Deposit'],
    primaryWorkflow: [
      'Lock (Billing In Progress)',
      'Allocate Bill ตาม Payor Rank',
      'Generate Bill (Invoice/Receipt)',
      'Settle → เลือก Payment Mode',
      'Print เอกสาร → Financial Discharge',
    ],
    connectedModules: ['opd', 'er', 'ipd', 'registration', 'pharmacy', 'inventory'],
    wikiUrl: '/modules/billing',
  },
  {
    slug: 'inventory',
    nameEn: 'Inventory',
    nameTh: 'สินค้าคงคลัง',
    icon: '📦',
    zone: 'discharge',
    purpose: 'จัดการสินค้าคงคลัง ครอบคลุม 9 ประเภทรับ 6 ประเภทจ่าย โอนย้าย ปรับปรุงสต็อก ตรวจนับ และรายงานสินค้า',
    keyScreens: ['Inventory Receive Screen', 'Inventory Transfer Screen', 'Stock Balance', 'Ledger'],
    primaryWorkflow: [
      'Goods Receive (GRN 9 types)',
      'Issue (6 types)',
      'Stock Request → Transfer/Issue → Accept',
      'Stock Adjustment + Count',
      'Balance Report (4 ระดับสี)',
    ],
    connectedModules: ['pharmacy', 'billing', 'cssd'],
    wikiUrl: '/modules/inventory',
  },
];
