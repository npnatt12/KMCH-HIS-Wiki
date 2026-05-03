export const HOSPITAL = {
  acronym: 'KMCH',
  nameEn: 'King Mongkut Chaokhunthahan Hospital',
  nameTh: 'โรงพยาบาลพระจอมเกล้าเจ้าคุณทหาร',
  website: 'https://kmch.kmitl.ac.th',
  facebook: 'https://www.facebook.com/KMCHbyKMITL',
} as const;

export const SITE = {
  name: 'KMCH HIS Wiki',
  printName: 'KMCH HIS Print',
  cheatSheetName: 'KMCH Cheat Sheet',
  description:
    'Thai-first MEDHIS reference wiki for King Mongkut Chaokhunthahan Hospital staff.',
} as const;

export const HOSPITAL_LOCKUP = `${HOSPITAL.nameEn} / ${HOSPITAL.nameTh}`;
