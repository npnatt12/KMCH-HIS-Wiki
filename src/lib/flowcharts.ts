export const FLOWCHARTS: Record<string, string> = {
  'opd-patient-flow': `graph LR
  A[Registered] --> B[Arrived]
  B --> C[Screening<br/>Completed]
  C --> D[Consultation<br/>Started]
  D --> E[Consultation<br/>Completed]
  E --> F[Medical<br/>Discharge]
  F --> G[Billing<br/>In Progress]
  G --> H[Financial<br/>Discharge]
  style A fill:#dbeafe,stroke:#1e40af
  style B fill:#dbeafe,stroke:#1e40af
  style C fill:#dbeafe,stroke:#1e40af
  style D fill:#dcfce7,stroke:#166534
  style E fill:#fef9c3,stroke:#854d0e
  style F fill:#dbeafe,stroke:#1e40af
  style G fill:#fef3c7,stroke:#92400e
  style H fill:#dcfce7,stroke:#166534`,

  'op-billing-workflow': `graph LR
  A[Medical<br/>Discharge] --> B[Lock 🔒]
  B --> C[Allocate Bill]
  C --> D[Modify Payor]
  D --> E[Allocate All]
  E --> F[Generate Bill]
  F --> G[Settle ✅]
  G --> H[Financial<br/>Discharge]
  style A fill:#fef3c7,stroke:#92400e
  style B fill:#fee2e2,stroke:#b91c1c
  style G fill:#dcfce7,stroke:#166534
  style H fill:#dcfce7,stroke:#166534`,

  'ipd-discharge-process': `graph TB
  subgraph Doctor
    A[1. Discharge<br/>Advice] --> B[2. Discharge<br/>Order]
  end
  subgraph Nurse
    C[3. Medical<br/>Discharge] --> D{Billing<br/>Complete?}
    D -->|Yes| E[4. Final<br/>Discharge]
    D -->|No| F[Wait]
    F --> D
  end
  B --> C
  style A fill:#e0e7ff,stroke:#3730a3
  style B fill:#e0e7ff,stroke:#3730a3
  style C fill:#dcfce7,stroke:#166534
  style E fill:#dcfce7,stroke:#166534
  style F fill:#fef3c7,stroke:#92400e`,

  'lab-order-to-result': `graph TB
  A[Ordered] --> B[Specimen<br/>Collected]
  B --> C{Accept?}
  C -->|Yes| D[Specimen<br/>Accepted]
  C -->|Reject| E[Specimen<br/>Rejected]
  E -->|Re-collect| B
  D --> F[Report<br/>Entered]
  F --> G[Report<br/>Authorized]
  G --> H[EMR ✅]
  style A fill:#dbeafe,stroke:#1e40af
  style D fill:#dcfce7,stroke:#166534
  style E fill:#fee2e2,stroke:#b91c1c
  style G fill:#dcfce7,stroke:#166534`,

  'admission-workflow': `graph TB
  subgraph From_OPD_ER[From OPD/ER]
    A1[EMR Request] --> A2[Admission List]
    A2 --> A3[Admit]
  end
  subgraph Direct[Direct Admission]
    B1[Search Patient] --> B2[Select]
  end
  A3 --> C[Admission Detail]
  B2 --> C
  C --> D[Save]
  D --> E[Arrive ✅]
  style E fill:#dcfce7,stroke:#166534`,

  'new-patient-registration': `graph LR
  A[Registration] --> B[Patient Search]
  B -->|Not found| C[New Patient]
  C --> D[Demographics]
  D --> E[SAVE ✅]
  style E fill:#dcfce7,stroke:#166534`,

  'emergency-registration': `graph LR
  A[Emergency Menu] --> B[Registration]
  B --> C{New?}
  C -->|New| D[Basic + Visit]
  C -->|Existing| E[Search]
  E --> D
  D --> F[Save ✅]
  style F fill:#dcfce7,stroke:#166534`,

  'mass-casualty-registration': `graph LR
  A[Emergency] --> B[Mass Casualty]
  B --> C[Incident Details]
  C --> D[Save]
  D --> E[Auto-create Visits]
  E --> F[Whiteboard ✅]
  style F fill:#dcfce7,stroke:#166534`,

  'appointment-registration': `graph TB
  subgraph Method_1[Registration Menu]
    A1[OP Registration] --> A2[Search + Select]
    A2 --> A3[Auto-fill Appt]
  end
  subgraph Method_2[OPD Worklist]
    B1[APPOINTMENTS tab] --> B2[Select Patient]
  end
  A3 --> C[SAVE ✅]
  B2 --> C
  style C fill:#dcfce7,stroke:#166534`,

  'anc-visit-workflow': `graph TB
  A[EMR → ANC] --> B[ANC Chart]
  B --> C[Pregnancy Detail]
  C --> D[Delivery History]
  D --> E[Obstetric Summary]
  E --> F[Examination]
  F --> G[Medical History]
  G --> H[Outside Lab]
  H --> I[SAVE]
  I --> J{Complete?}
  J -->|Yes| K[Completed ✅]
  J -->|No| L[Next visit]
  style I fill:#dcfce7,stroke:#166534
  style K fill:#f3e8ff,stroke:#6b21a8`,
};
