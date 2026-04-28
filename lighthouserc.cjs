module.exports = {
  ci: {
    collect: {
      url: [
        'https://kmch-wiki.vercel.app/',
        'https://kmch-wiki.vercel.app/roles/doctor/',
        'https://kmch-wiki.vercel.app/workflows/opd-patient-flow/',
      ],
      numberOfRuns: 3,
      settings: {
        preset: 'desktop',
        formFactor: 'mobile',
        throttling: {
          rttMs: 150,
          throughputKbps: 1638.4,
          cpuSlowdownMultiplier: 4,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0,
        },
        screenEmulation: {
          mobile: true,
          width: 360,
          height: 640,
          deviceScaleFactor: 2,
          disabled: false,
        },
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './lighthouse-reports/baseline',
    },
  },
};
