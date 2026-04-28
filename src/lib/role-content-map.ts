export interface RoleContent {
  daily_flows: string[];       // workflow slugs
  reference_screens: string[]; // entity slugs
  concepts: string[];          // concept slugs
}

/**
 * Static curated map: role slug -> wiki page slugs the role uses.
 * Derived from the Obsidian vault role pages' "Daily flows" / "Reference screens" /
 * "Concepts to know" sections. Future v2.2 will derive automatically from
 * `roles:` frontmatter on each page once the bulk frontmatter migration ships.
 */
export const ROLE_CONTENT: Record<string, RoleContent> = {
  doctor: {
    daily_flows: [
      'opd-doctor-emr-workflow',
      'ipd-doctor-emr-workflow',
      'lab-order-to-result',
      'xray-order-to-report-workflow',
      'pharmacy-dispensing-workflow',
    ],
    reference_screens: [
      'doctor-worklist-screen',
      'emr-form-screen',
      'order-entry-screen',
      'drug-alert-popup',
      'patient-banner',
    ],
    concepts: [
      'visit-types',
      'order-types',
      'drug-alert-types',
      'lab-and-radiology-order-status',
    ],
  },
  'nurse-ipd': {
    daily_flows: [
      'ipd-discharge-process',
      'ipd-transfer-between-wards-workflow',
      'pharmacy-dispensing-workflow',
    ],
    reference_screens: [
      'ward-board',
      'nursing-worklist-screen',
      'ipd-transfer-screen',
      'admission-detail-screen',
      'patient-banner',
    ],
    concepts: ['bed-status', 'order-types', 'visit-types'],
  },
  'nurse-opd': {
    daily_flows: ['opd-patient-flow', 'lab-order-to-result', 'appointment-registration'],
    reference_screens: [
      'opd-worklist-screen',
      'opd-screening-screen',
      'patient-banner',
      'lab-specimen-collection-screen',
    ],
    concepts: ['opd-patient-status', 'visit-types', 'appointment-system'],
  },
  'nurse-or': {
    daily_flows: ['or-surgery-request-to-record-workflow'],
    reference_screens: ['or-schedule-screen', 'or-record-screen', 'patient-banner'],
    concepts: ['visit-types', 'order-types'],
  },
  pharmacist: {
    daily_flows: ['pharmacy-dispensing-workflow', 'pharmacy-med-reject-return-workflow'],
    reference_screens: [
      'pharmacy-dispensing-screen',
      'drug-alert-popup',
      'patient-banner',
      'order-entry-screen',
    ],
    concepts: ['drug-alert-types', 'order-types'],
  },
  'xray-tech': {
    daily_flows: ['xray-order-to-report-workflow'],
    reference_screens: ['xray-register-screen', 'patient-banner'],
    concepts: ['lab-and-radiology-order-status'],
  },
  'admin-system': {
    daily_flows: [
      'new-patient-registration',
      'mrd-folder-issue-return-workflow',
      'op-billing-workflow',
      'billing-ip-settlement-workflow',
      'inventory-receive-workflow',
      'inventory-transfer-request-workflow',
      'diet-order-to-kitchen-workflow',
      'cssd-request-to-sterilize-workflow',
    ],
    reference_screens: [
      'patient-search-screen',
      'patient-demographics-screen',
      'mrd-worklist-screen',
      'billing-settlement-screen',
      'inventory-receive-screen',
      'inventory-transfer-screen',
      'diet-order-entry-screen',
      'cssd-request-screen',
    ],
    concepts: ['payor-and-treatment-rights', 'patient-types', 'payment-modes'],
  },
  'it-support': {
    daily_flows: [],
    reference_screens: [],
    concepts: [],
  },
};
