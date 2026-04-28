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
      'anc-visit-workflow',
    ],
    reference_screens: [
      'doctor-worklist-screen',
      'emr-form-screen',
      'order-entry-screen',
      'drug-alert-popup',
      'patient-banner',
      'anc-chart-screen',
      'er-discharge-screen',
      'er-triage-screen',
      'lab-result-entry-screen',
      'whiteboard',
      'xray-report-screen',
    ],
    concepts: [
      'visit-types',
      'order-types',
      'drug-alert-types',
      'lab-and-radiology-order-status',
      'edc-calculation',
      'esi-level',
    ],
  },
  'nurse-ipd': {
    daily_flows: [
      'ipd-discharge-process',
      'ipd-transfer-between-wards-workflow',
      'pharmacy-dispensing-workflow',
      'admission-workflow',
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
    daily_flows: [
      'opd-patient-flow',
      'lab-order-to-result',
      'appointment-registration',
      'anc-visit-workflow',
      'emergency-registration',
      'mass-casualty-registration',
    ],
    reference_screens: [
      'opd-worklist-screen',
      'opd-screening-screen',
      'patient-banner',
      'lab-specimen-collection-screen',
      'anc-chart-screen',
      'er-discharge-screen',
      'er-triage-screen',
      'whiteboard',
    ],
    concepts: [
      'opd-patient-status',
      'visit-types',
      'appointment-system',
      'edc-calculation',
      'esi-level',
    ],
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
    reference_screens: ['xray-register-screen', 'patient-banner', 'xray-report-screen'],
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
      'admission-workflow',
      'emergency-registration',
      'mass-casualty-registration',
      'registration-update-merge-workflow',
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
    concepts: ['payor-and-treatment-rights', 'patient-types', 'payment-modes', 'nhso-authentication'],
  },
  'it-support': {
    daily_flows: [],
    reference_screens: [],
    concepts: [],
  },
  'finance-accounting': {
    daily_flows: [
      'odoo-purchase-to-pay-workflow',
      'odoo-billing-and-receivables-workflow',
      'medhis-odoo-revenue-interface-workflow',
      'his-erp-interface-rerun-and-error-handling-workflow',
      'telemedicine-medication-delivery-workflow',
    ],
    reference_screens: [
      'odoo-customer-invoice-screen',
      'odoo-billing-note-screen',
      'odoo-payment-screen',
      'odoo-vendor-bill-screen',
      'odoo-accounting-forms',
      'his-erp-interface-log-and-error-handling',
    ],
    concepts: [
      'his-erp-interface',
      'his-erp-interface-data-dictionary',
    ],
  },
  procurement: {
    daily_flows: ['odoo-purchase-to-pay-workflow'],
    reference_screens: [
      'odoo-purchase-order-screen',
      'odoo-vendor-bill-screen',
      'odoo-product-master-screen',
      'odoo-payment-screen',
      'odoo-inventory-operation-screen',
    ],
    concepts: ['phase-4-uat-coverage-matrix'],
  },
  'warehouse-staff': {
    daily_flows: [
      'odoo-internal-transfer-workflow',
      'odoo-inventory-adjustment-and-reporting-workflow',
      'medhis-odoo-inventory-interface-workflow',
      'his-erp-interface-rerun-and-error-handling-workflow',
    ],
    reference_screens: [
      'odoo-inventory-operation-screen',
      'odoo-product-master-screen',
      'odoo-internal-transfer-screen',
      'odoo-inventory-adjustment-screen',
      'his-erp-interface-log-and-error-handling',
    ],
    concepts: [
      'his-erp-interface',
      'his-erp-interface-data-dictionary',
      'odoo-inventory-movement-types',
    ],
  },
  'telemedicine-admin': {
    daily_flows: [
      'telemedicine-patient-onboarding-workflow',
      'telemedicine-operations-support-workflow',
    ],
    reference_screens: [
      'telemedicine-admin-portal',
      'telemedicine-doctor-list-and-appointment-screens',
      'telemedicine-consultation-session',
      'telemedicine-it-service-stack',
    ],
    concepts: [
      'telemedicine-appointment-status',
      'phase-4-uat-and-go-live-evidence',
      'phase-4-uat-coverage-matrix',
    ],
  },
  'telemedicine-it-operator': {
    daily_flows: ['telemedicine-operations-support-workflow'],
    reference_screens: [
      'telemedicine-it-service-stack',
      'telemedicine-admin-portal',
      'telemedicine-consultation-session',
    ],
    concepts: [
      'telemedicine-appointment-status',
      'phase-4-uat-and-go-live-evidence',
      'phase-4-uat-coverage-matrix',
    ],
  },
  patient: {
    daily_flows: [
      'telemedicine-patient-onboarding-workflow',
      'telemedicine-visit-workflow',
      'telemedicine-medication-delivery-workflow',
    ],
    reference_screens: [
      'telemedicine-mobile-app',
      'telemedicine-doctor-list-and-appointment-screens',
      'telemedicine-consultation-session',
    ],
    concepts: ['telemedicine-appointment-status'],
  },
};
