export interface RoleMeta {
  slug: string;
  id: string;
  nameTh: string;
  nameEn: string;
  icon: string;
  accent: string;
  description: string;
  tier: 1 | 2;
}

export const ROLES: RoleMeta[] = [
  { slug: 'doctor', id: 'Doctor', nameTh: 'แพทย์', nameEn: 'Doctor',
    icon: 'stethoscope', accent: '#C2362F', tier: 1,
    description: 'EMR write, orders, consult/admit/refer' },
  { slug: 'nurse-ipd', id: 'NurseIPD', nameTh: 'พยาบาลผู้ป่วยใน', nameEn: 'Nurse — IPD',
    icon: 'hospital', accent: '#D9492C', tier: 1,
    description: 'Ward Board, vitals, discharge' },
  { slug: 'nurse-opd', id: 'NurseOPD', nameTh: 'พยาบาลผู้ป่วยนอก', nameEn: 'Nurse — OPD',
    icon: 'clipboard-list', accent: '#E87D2C', tier: 1,
    description: 'Screening, vitals, specimen' },
  { slug: 'nurse-or', id: 'NurseOR', nameTh: 'พยาบาลห้องผ่าตัด', nameEn: 'Nurse — OR',
    icon: 'scissors', accent: '#A8362F', tier: 2,
    description: 'OR schedule, OR record' },
  { slug: 'pharmacist', id: 'Pharmacist', nameTh: 'เภสัชกร', nameEn: 'Pharmacist',
    icon: 'pill', accent: '#A8362F', tier: 1,
    description: 'Dispensing, drug alerts, returns' },
  { slug: 'xray-tech', id: 'XRayTech', nameTh: 'เจ้าหน้าที่รังสี', nameEn: 'XRay Technician',
    icon: 'scan', accent: '#C96442', tier: 2,
    description: 'Register, execute' },
  { slug: 'admin-system', id: 'AdminSystem', nameTh: 'ผู้ดูแลระบบ', nameEn: 'Admin System',
    icon: 'settings', accent: '#6E665C', tier: 2,
    description: 'Cross-functional admin' },
  { slug: 'it-support', id: 'ITSupport', nameTh: 'ฝ่ายไอที', nameEn: 'IT Support',
    icon: 'terminal', accent: '#5A5A57', tier: 2,
    description: 'System config' },
];

export const ROLES_BY_SLUG: Record<string, RoleMeta> = Object.fromEntries(
  ROLES.map((r) => [r.slug, r])
);
