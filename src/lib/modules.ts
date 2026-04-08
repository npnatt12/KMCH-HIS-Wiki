export interface ModuleMeta {
  slug: string;
  icon: string;
  color: string;
  bgColor: string;
  nameTh: string;
  nameEn: string;
}

export const MODULE_META: Record<string, ModuleMeta> = {
  'registration': { slug: 'registration', icon: '📋', color: '#1e40af', bgColor: '#dbeafe', nameTh: 'ลงทะเบียน', nameEn: 'Registration' },
  'opd': { slug: 'opd', icon: '🏥', color: '#166534', bgColor: '#dcfce7', nameTh: 'ผู้ป่วยนอก', nameEn: 'OPD' },
  'er': { slug: 'er', icon: '🚑', color: '#9d174d', bgColor: '#fce7f3', nameTh: 'ฉุกเฉิน', nameEn: 'ER' },
  'billing': { slug: 'billing', icon: '💰', color: '#92400e', bgColor: '#fef3c7', nameTh: 'การเงิน', nameEn: 'Billing' },
  'admission': { slug: 'admission', icon: '🛎️', color: '#1e40af', bgColor: '#dbeafe', nameTh: 'รับผู้ป่วยใน', nameEn: 'Admission' },
  'ipd': { slug: 'ipd', icon: '🛏️', color: '#3730a3', bgColor: '#e0e7ff', nameTh: 'ผู้ป่วยใน', nameEn: 'IPD' },
  'anc': { slug: 'anc', icon: '🤰', color: '#be185d', bgColor: '#fce7f3', nameTh: 'ฝากครรภ์', nameEn: 'ANC' },
  'emr-doctor': { slug: 'emr-doctor', icon: '👨‍⚕️', color: '#0f766e', bgColor: '#ccfbf1', nameTh: 'EMR แพทย์', nameEn: 'EMR Doctor' },
  'order-entry': { slug: 'order-entry', icon: '📝', color: '#4338ca', bgColor: '#e0e7ff', nameTh: 'คำสั่งการรักษา', nameEn: 'Order Entry' },
  'lab': { slug: 'lab', icon: '🔬', color: '#0369a1', bgColor: '#e0f2fe', nameTh: 'ห้องปฏิบัติการ', nameEn: 'LAB' },
  'xray': { slug: 'xray', icon: '📡', color: '#4338ca', bgColor: '#e0e7ff', nameTh: 'รังสีวินิจฉัย', nameEn: 'XRAY' },
  'or': { slug: 'or', icon: '🔪', color: '#b91c1c', bgColor: '#fee2e2', nameTh: 'ห้องผ่าตัด', nameEn: 'OR' },
  'labour-and-newborn': { slug: 'labour-and-newborn', icon: '👶', color: '#be185d', bgColor: '#fce7f3', nameTh: 'ห้องคลอด/ทารก', nameEn: 'Labour & Newborn' },
  'pharmacy': { slug: 'pharmacy', icon: '💊', color: '#6b21a8', bgColor: '#f3e8ff', nameTh: 'เภสัชกรรม', nameEn: 'Pharmacy' },
  'inventory': { slug: 'inventory', icon: '📦', color: '#854d0e', bgColor: '#fef9c3', nameTh: 'สินค้าคงคลัง', nameEn: 'Inventory' },
  'diet': { slug: 'diet', icon: '🍽️', color: '#15803d', bgColor: '#dcfce7', nameTh: 'โภชนาการ', nameEn: 'Diet' },
  'cssd': { slug: 'cssd', icon: '🧼', color: '#0e7490', bgColor: '#cffafe', nameTh: 'เวชภัณฑ์ปลอดเชื้อ', nameEn: 'CSSD' },
  'mrd': { slug: 'mrd', icon: '📁', color: '#78350f', bgColor: '#fef3c7', nameTh: 'เวชระเบียน', nameEn: 'MRD' },
};

export function getModuleMeta(fileId: string): ModuleMeta | undefined {
  const slug = fileId.toLowerCase().replace(/\s+/g, '-');
  return MODULE_META[slug];
}

export const MODULE_ORDER: string[] = [
  'registration', 'opd', 'er', 'admission', 'ipd', 'billing',
  'emr-doctor', 'order-entry', 'lab', 'xray', 'or', 'pharmacy',
  'anc', 'labour-and-newborn', 'mrd', 'inventory', 'diet', 'cssd',
];
