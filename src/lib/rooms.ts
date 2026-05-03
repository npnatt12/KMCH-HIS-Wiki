export interface RoomLink {
  label: string;
  href: string;
  note?: string;
}

export interface RoomMode {
  slug: string;
  title: string;
  titleTh: string;
  department: string;
  accent: string;
  status: 'uat-verified' | 'source-backed' | 'pending';
  verifiedOn?: string;
  summary: string;
  staff: string[];
  startHere: string[];
  screens: RoomLink[];
  workflows: RoomLink[];
  concepts: RoomLink[];
  commonMistakes: Array<{ symptom: string; fix: string; href?: string }>;
  handoffs: Array<{ to: string; when: string; href?: string }>;
  searchTerms: string[];
}

export const ROOMS: RoomMode[] = [
  {
    slug: 'opd-screening',
    title: 'OPD Screening Room',
    titleTh: 'ห้องคัดกรองผู้ป่วยนอก',
    department: 'OPD',
    accent: '#E87D2C',
    status: 'uat-verified',
    verifiedOn: '2026-04-29',
    summary:
      'การ์ดปฏิบัติงานสำหรับพยาบาล OPD: ค้นหาผู้ป่วย บันทึกสัญญาณชีพ ส่งชื่อเข้าห้องตรวจ และตรวจว่า queue ไปถึงแพทย์แล้ว.',
    staff: ['พยาบาล OPD', 'รับต่อจาก Registration'],
    startHere: [
      'เปิด OPD Worklist และยืนยันผู้ป่วย/visit ให้ถูกต้องก่อนเริ่มบันทึก.',
      'เข้า OPD Screening Screen เพื่อบันทึก vital signs และข้อมูลคัดกรอง.',
      'ตรวจค่า BMI, BSA และ MAP ที่ระบบคำนวณอัตโนมัติก่อน Save.',
      'Assign careprovider หรือเลือกห้องตาม queue setup ของแผนก.',
      'ตรวจว่าผู้ป่วยออกจากคัดกรองและไปปรากฏใน doctor queue แล้ว.',
    ],
    screens: [
      { label: 'OPD Worklist Screen', href: '/entities/opd-worklist-screen/' },
      { label: 'OPD Screening Screen', href: '/entities/opd-screening-screen/' },
      { label: 'Patient Banner', href: '/entities/patient-banner/' },
      { label: 'Queue Worklist Screen', href: '/entities/queue-worklist-screen/' },
    ],
    workflows: [
      { label: 'OPD Patient Flow', href: '/workflows/opd-patient-flow/' },
      { label: 'Queue Registration to Pharmacy Cashier Workflow', href: '/workflows/queue-registration-to-pharmacy-cashier-workflow/' },
    ],
    concepts: [
      { label: 'OPD Patient Status', href: '/concepts/opd-patient-status/' },
      { label: 'Queue Status and Routing', href: '/concepts/queue-status-and-routing/' },
    ],
    commonMistakes: [
      {
        symptom: 'คัดกรองแล้วแต่ผู้ป่วยไม่ขึ้นหน้าหมอ.',
        fix: 'ตรวจว่า Save screening แล้ว และ assign careprovider/room ครบ จากนั้นตรวจ queue routing.',
        href: '/concepts/queue-status-and-routing/',
      },
      {
        symptom: 'บันทึก vital signs แล้ว แต่ patient banner ปลายทางยังดูว่าง.',
        fix: 'เปิด patient banner ใหม่หลัง Save; UAT ยืนยันว่า vitals แสดงบน banner หลัง charting save.',
        href: '/entities/patient-banner/',
      },
      {
        symptom: 'เจ้าหน้าที่เห็นผู้ป่วยน้อยกว่าที่คาด.',
        fix: 'ถ้า login แบบเลือกห้อง จะเห็นเฉพาะผู้ป่วยห้องนั้น; ถ้าไม่เลือกห้องจะเห็นทั้งแผนก.',
        href: '/entities/queue-department-room-configuration/',
      },
    ],
    handoffs: [
      { to: 'ห้องตรวจแพทย์', when: 'คัดกรองเสร็จและผู้ป่วยพร้อมพบแพทย์.', href: '/rooms/doctor-room/' },
      { to: 'เก็บสิ่งส่งตรวจ Lab', when: 'แพทย์สั่ง Lab และต้องเก็บ specimen.', href: '/rooms/lab-specimen-collection/' },
    ],
    searchTerms: [
      'opd screening',
      'ห้องคัดกรอง',
      'vital signs',
      'assign careprovider',
      'BMI BSA MAP',
      'patient not in doctor queue',
    ],
  },
  {
    slug: 'doctor-room',
    title: 'Doctor Room',
    titleTh: 'ห้องตรวจแพทย์',
    department: 'OPD / EMR',
    accent: '#C2362F',
    status: 'uat-verified',
    verifiedOn: '2026-04-29',
    summary:
      'การ์ดปฏิบัติงานสำหรับแพทย์: เรียก/เริ่มตรวจ บันทึก CC/PI ใส่ diagnosis ให้ถูก flow สั่ง order/task และทำ medical discharge.',
    staff: ['แพทย์', 'พยาบาล OPD สนับสนุน'],
    startHere: [
      'เปิด Doctor Worklist และเลือกผู้ป่วยที่ต้องตรวจ.',
      'ใช้ consultation toggle เพื่อให้ปุ่ม START แสดง แล้วเริ่ม consultation.',
      'เข้า OPD EMR Landing และบันทึก CC/PI; UAT พบว่า flow นี้ auto-save แบบ debounce.',
      'เพิ่ม ICD-10 ผ่าน in-panel diagnosis flow ที่ทำงานจริง หลีกเลี่ยง path ที่เลือกแล้วไม่ persist.',
      'Complete consultation แล้วทำ Medical Discharge หลัง diagnosis requirement ครบ.',
    ],
    screens: [
      { label: 'Doctor Worklist Screen', href: '/entities/doctor-worklist-screen/' },
      { label: 'OPD EMR Landing', href: '/entities/opd-emr-landing/' },
      { label: 'Order Entry Screen', href: '/entities/order-entry-screen/' },
      { label: 'Tasks Panel', href: '/entities/tasks-panel/' },
      { label: 'Allergies Panel', href: '/entities/allergies-panel/' },
    ],
    workflows: [
      { label: 'OPD Doctor EMR Workflow', href: '/workflows/opd-doctor-emr-workflow/' },
      { label: 'OPD Patient Flow', href: '/workflows/opd-patient-flow/' },
    ],
    concepts: [
      { label: 'ICD Coding', href: '/concepts/icd-coding/' },
      { label: 'MEDHIS Server-Side Gates', href: '/concepts/medhis-server-side-gates/' },
      { label: 'OPD Patient Status', href: '/concepts/opd-patient-status/' },
    ],
    commonMistakes: [
      {
        symptom: 'ไม่เห็นปุ่ม START.',
        fix: 'กด consultation md-icon toggle ตาม Doctor Worklist; ปุ่ม START จะซ่อนจนกว่าจะ expand action.',
        href: '/entities/doctor-worklist-screen/',
      },
      {
        symptom: 'เลือก ICD แล้วเหมือนสำเร็จ แต่ diagnosis ไม่บันทึก.',
        fix: 'ใช้ in-panel diagnosis add flow; UAT พบว่า ICD browser บาง path เป็น silent-no-op ถ้าไม่ได้เรียก add-diagnosis function.',
        href: '/concepts/icd-coding/',
      },
      {
        symptom: 'Medical Discharge fail ด้วย ICD10ISMANDATORY.',
        fix: 'ใส่ ICD-10 diagnosis ที่ valid ก่อน discharge; นี่เป็น server-side gate ไม่ใช่แค่ UI warning.',
        href: '/concepts/medhis-server-side-gates/',
      },
    ],
    handoffs: [
      { to: 'การเงินผู้ป่วยนอก', when: 'Medical Discharge เสร็จ และเป็น OP self-pay หรือ visit ที่ต้อง bill.', href: '/rooms/cashier-billing/' },
      { to: 'Lab / X-ray / Pharmacy', when: 'มี order และผู้ป่วยต้องไปจุดบริการปลายทาง.', href: '/workflows/opd-doctor-emr-workflow/' },
      { to: 'พยาบาล execute task', when: 'แพทย์สร้าง non-billable care task.', href: '/entities/tasks-panel/' },
    ],
    searchTerms: [
      'doctor room',
      'ห้องตรวจแพทย์',
      'START consultation',
      'ICD10 mandatory',
      'medical discharge',
      'OPD EMR Landing',
    ],
  },
  {
    slug: 'cashier-billing',
    title: 'Cashier / Billing',
    titleTh: 'การเงินผู้ป่วยนอก',
    department: 'Billing',
    accent: '#8E5A3B',
    status: 'uat-verified',
    verifiedOn: '2026-04-29',
    summary:
      'การ์ดปฏิบัติงานสำหรับการเงิน OPD: รับผู้ป่วยที่ medical discharge แล้ว lock visit, generate/settle bill และยืนยัน financial discharge.',
    staff: ['การเงิน/บัญชี', 'Cashier'],
    startHere: [
      'เปิด OP Cashier Worklist และใช้ tab Medical Discharges.',
      'เลือก visit ให้ถูกต้อง แล้วกด lock patient visit.',
      'เปิด Generate Bill และตรวจบริบท self-pay หรือ payor-mix.',
      'สำหรับ OP self-pay path ที่ UAT ยืนยันแล้ว Settle Bill จะออก bill, payment, receipt และ financial discharge.',
      'ตรวจ receipt number และ patient status ก่อนจบ queue.',
    ],
    screens: [
      { label: 'OP Cashier Worklist', href: '/entities/op-cashier-worklist/' },
      { label: 'Generate Bill Screen', href: '/entities/generate-bill-screen/' },
      { label: 'Billing Settlement Screen', href: '/entities/billing-settlement-screen/' },
      { label: 'Queue Dashboard', href: '/entities/queue-dashboard/' },
    ],
    workflows: [
      { label: 'OP Billing Workflow', href: '/workflows/op-billing-workflow/' },
      { label: 'Queue Registration to Pharmacy Cashier Workflow', href: '/workflows/queue-registration-to-pharmacy-cashier-workflow/' },
    ],
    concepts: [
      { label: 'Payment Modes', href: '/concepts/payment-modes/' },
      { label: 'OPD Patient Status', href: '/concepts/opd-patient-status/' },
      { label: 'MEDHIS Server-Side Gates', href: '/concepts/medhis-server-side-gates/' },
    ],
    commonMistakes: [
      {
        symptom: 'ผู้ป่วยไม่ขึ้นใน cashier worklist.',
        fix: 'ตรวจว่าแพทย์ทำ Medical Discharge แล้ว เพราะ cashier intake อิง OPD status จาก upstream.',
        href: '/concepts/opd-patient-status/',
      },
      {
        symptom: 'ไม่แน่ใจว่าค่า 150 บาทมาจากไหน.',
        fix: 'ดู OP Billing Workflow สำหรับพฤติกรรม auto service charge ที่ UAT ยืนยันแล้ว.',
        href: '/workflows/op-billing-workflow/',
      },
      {
        symptom: 'Generate Bill แล้ว receipt ยังไม่ออก.',
        fix: 'สำหรับ OP self-pay ให้ตรวจว่า execute Settle Bill แล้ว; Generate Bill อย่างเดียวไม่เท่ากับ settlement ในทุก billing mode.',
        href: '/entities/generate-bill-screen/',
      },
    ],
    handoffs: [
      { to: 'จบ visit / ผู้ป่วยกลับบ้าน', when: 'Financial Discharge ออกแล้ว และตรวจ receipt เรียบร้อย.', href: '/concepts/opd-patient-status/' },
      { to: 'Pharmacy', when: 'ชำระเงินแล้ว แต่ยังมีการจ่ายยา.', href: '/modules/pharmacy/' },
      { to: 'Odoo Finance', when: 'ต้อง reconcile revenue/interface.', href: '/workflows/medhis-odoo-revenue-interface-workflow/' },
    ],
    searchTerms: [
      'cashier billing',
      'op cashier',
      'การเงินผู้ป่วยนอก',
      'generate bill',
      'settle bill',
      'receipt',
      'financial discharge',
    ],
  },
  {
    slug: 'lab-specimen-collection',
    title: 'Lab Specimen Collection',
    titleTh: 'เก็บสิ่งส่งตรวจ Lab',
    department: 'LAB',
    accent: '#0369A1',
    status: 'source-backed',
    summary:
      'การ์ดปฏิบัติงานสำหรับพยาบาล/เจ้าหน้าที่: ค้นหารายการ Ordered, พิมพ์ Lab Label, Collect Specimen และส่งต่อให้ Lab Worklist รับสิ่งส่งตรวจ.',
    staff: ['พยาบาล OPD/IPD', 'เจ้าหน้าที่เก็บสิ่งส่งตรวจ'],
    startHere: [
      'เปิด Laboratory → Specimen Collection; ระบบเปิด Tab NEW เป็นค่าเริ่มต้น.',
      'ค้นหารายการด้วย Department, Ward, Careprovider, Patient, Encounter Type, Order No., Date From–To หรือ Status.',
      'เลือกรายการทีละรายการ หรือใช้ Select All/checkbox สำหรับ batch mode.',
      'กด Print Sticker เพื่อพิมพ์ Lab Label / Barcode Sticker ก่อนเก็บสิ่งส่งตรวจ.',
      'กด Collect Specimen → ตรวจรายการใน confirmation popup → Confirm เพื่อเปลี่ยน status เป็น Specimen Collected.',
    ],
    screens: [
      { label: 'Lab Specimen Collection Screen', href: '/entities/lab-specimen-collection-screen/' },
      { label: 'OPD Screening Screen', href: '/entities/opd-screening-screen/', note: 'ใช้เมื่อเก็บ specimen ใน OPD flow' },
      { label: 'Order Entry Screen', href: '/entities/order-entry-screen/', note: 'ต้นทาง order จากแพทย์' },
    ],
    workflows: [
      { label: 'Lab Order to Result Workflow', href: '/workflows/lab-order-to-result/' },
      { label: 'OPD Doctor EMR Workflow', href: '/workflows/opd-doctor-emr-workflow/' },
    ],
    concepts: [
      { label: 'Lab and Radiology Order Status', href: '/concepts/lab-and-radiology-order-status/' },
      { label: 'Order Types', href: '/concepts/order-types/' },
    ],
    commonMistakes: [
      {
        symptom: 'หา order ใน Tab NEW ไม่เจอ.',
        fix: 'ตรวจ filter ให้ถูก โดยเฉพาะ Department, Ward, Patient, Order No. และช่วงวันที่; รายการที่เก็บแล้วจะไป Tab COLLECTED.',
        href: '/entities/lab-specimen-collection-screen/',
      },
      {
        symptom: 'เก็บหลายรายการแล้วหลงว่าพิมพ์ label ครบหรือยัง.',
        fix: 'ใน batch mode ให้เลือก checkbox ให้ครบก่อน แล้วพิมพ์ Print Sticker ทุก label ก่อน Collect Specimen.',
        href: '/workflows/lab-order-to-result/',
      },
      {
        symptom: 'รายการถูก Reject แล้วกลับมาเก็บใหม่อย่างไร.',
        fix: 'Specimen Rejected จะแสดงใน Specimen Collection Tab NEW เพื่อให้เก็บสิ่งส่งตรวจใหม่ แล้วกด Collect Specimen อีกครั้ง.',
        href: '/concepts/lab-and-radiology-order-status/',
      },
    ],
    handoffs: [
      { to: 'Lab Worklist / รับสิ่งส่งตรวจ', when: 'หลัง Confirm Collect Specimen แล้ว status เป็น Specimen Collected.', href: '/rooms/lab-result-entry/' },
      { to: 'ผู้สั่งตรวจ/แพทย์', when: 'ถ้า specimen ถูก Reject และต้องอธิบายเหตุผลการเก็บใหม่.', href: '/rooms/doctor-room/' },
    ],
    searchTerms: [
      'เก็บสิ่งส่งตรวจ',
      'specimen collection',
      'print sticker',
      'lab label',
      'barcode sticker',
      'specimen collected',
      'tab new',
      'tab collected',
    ],
  },
  {
    slug: 'lab-result-entry',
    title: 'Lab Worklist / Result Entry',
    titleTh: 'รับสิ่งส่งตรวจและลงผล Lab',
    department: 'LAB',
    accent: '#0E7490',
    status: 'source-backed',
    summary:
      'การ์ดปฏิบัติงานสำหรับเจ้าหน้าที่ Lab: Accept/Reject specimen, ลงผล Manual Result, ตรวจ H/L indicator, Authorise รายงาน และ Reset Result เมื่อจำเป็น.',
    staff: ['เจ้าหน้าที่ Lab', 'LabTech'],
    startHere: [
      'เปิด Laboratory → Lab Worklist และเลือกรายการที่ status เป็น Specimen Collected.',
      'ถ้าสิ่งส่งตรวจใช้ได้ กด Accept Specimen → Yes เพื่อเปลี่ยน status เป็น Specimen Accepted และย้ายไป Tab INPROGRESS.',
      'ถ้าสิ่งส่งตรวจใช้ไม่ได้ กด Reject Specimen → เลือกเหตุผล → Save; รายการจะกลับไปให้เก็บใหม่.',
      'สำหรับรายการที่ไม่เชื่อม LIS ให้กด Manual Result กรอก Value และดู Normal Range/H/L indicator.',
      'กด Save เพื่อเปลี่ยน status เป็น Report Entered แล้วค่อยกด Report Authorised เมื่อพร้อมส่งผลเข้า EMR.',
    ],
    screens: [
      { label: 'Lab Result Entry Screen', href: '/entities/lab-result-entry-screen/' },
      { label: 'Lab Specimen Collection Screen', href: '/entities/lab-specimen-collection-screen/' },
      { label: 'LAB Module', href: '/modules/lab/' },
    ],
    workflows: [
      { label: 'Lab Order to Result Workflow', href: '/workflows/lab-order-to-result/' },
    ],
    concepts: [
      { label: 'Lab and Radiology Order Status', href: '/concepts/lab-and-radiology-order-status/' },
    ],
    commonMistakes: [
      {
        symptom: 'Manual Result กด Save ไม่ได้.',
        fix: 'ช่อง Value เป็น required; ถ้าเป็นการแก้ไขผลเดิมก่อน Authorize ต้องเลือก Modify Reason ก่อน Save.',
        href: '/entities/lab-result-entry-screen/',
      },
      {
        symptom: 'ลงผลแล้วแต่แพทย์ยังไม่เห็นใน EMR.',
        fix: 'Save จะทำให้ status เป็น Report Entered; ต้องกด Report Authorised ก่อน ผลจึงส่งไป EMR และย้ายไป COMPLETE.',
        href: '/workflows/lab-order-to-result/',
      },
      {
        symptom: 'ผล Authorize แล้วแต่ต้องแก้ไข.',
        fix: 'ใช้ Reset Result ให้ status กลับเป็น Test Executed แล้วลงผลใหม่ด้วย Manual Result.',
        href: '/concepts/lab-and-radiology-order-status/',
      },
      {
        symptom: 'ค่าออกสีแดงพร้อม H หรือ L.',
        fix: 'ระบบเทียบ Normal Range อัตโนมัติ: H คือสูงกว่าช่วงปกติ, L คือต่ำกว่าช่วงปกติ.',
        href: '/entities/lab-result-entry-screen/',
      },
    ],
    handoffs: [
      { to: 'EMR ของผู้ป่วย', when: 'หลัง Report Authorised แล้วผลส่งเข้า EMR.', href: '/workflows/lab-order-to-result/' },
      { to: 'เก็บสิ่งส่งตรวจใหม่', when: 'เมื่อ Reject Specimen และระบุเหตุผลแล้ว.', href: '/rooms/lab-specimen-collection/' },
      { to: 'Billing', when: 'เมื่อ downstream billing ต้องตรวจ order/result status ก่อนออกบิล.', href: '/rooms/cashier-billing/' },
    ],
    searchTerms: [
      'รับสิ่งส่งตรวจ',
      'ลงผล lab',
      'lab worklist',
      'accept specimen',
      'reject specimen',
      'manual result',
      'report entered',
      'report authorised',
      'modify reason',
      'reset result',
      'ค่า H L',
    ],
  },
];

export const ROOMS_BY_SLUG: Record<string, RoomMode> = Object.fromEntries(
  ROOMS.map((room) => [room.slug, room]),
);
