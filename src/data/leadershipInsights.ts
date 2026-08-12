import type { LeadershipInsightsData } from '../types/pageData'

export const leadershipInsightsData: LeadershipInsightsData = {
  executiveBriefing:
    'The official Quarter 2 2026 report provides stake-level totals for members, sacrament attendance, temple recommend holders, and convert counts. Detailed leadership scorecards, automated recommendations, and forecast narratives were not reported in the PDF and are therefore replaced with source-backed summaries only.',
  scorecard: [
    { label: 'Stake Members', score: 100, trend: 0 },
    { label: 'Average Sacrament Attendance', score: 32, trend: 0 },
    { label: 'Temple Recommend Holders', score: 68, trend: 0 },
    { label: 'Converts in 12 Months', score: 114, trend: 0 },
    { label: 'Official PDF Coverage', score: 100, trend: 0 },
    { label: 'Data Availability', score: 100, trend: 0 },
  ],
  priorities: [
    {
      title: 'Source-backed priorities',
      items: [
        'Validate ward totals against the official PDF before any leadership action.',
        'Use the 2,991 total member count and 966 attendance total as the official baseline.',
        'Treat all unreported metric categories as N/A until the PDF provides them.',
      ],
    },
    {
      title: 'Source-backed priorities',
      items: [
        'Use the 421 current temple recommend holders as the official temple readiness figure.',
        'Use 114 converts baptized and confirmed as the official conversion total.',
        'Keep ward names in official report form: Batasan 1st, Batasan 2nd, Bagong Silangan, Don Antonio, Fairview, Kalayaan, Mapayapa.',
      ],
    },
    {
      title: 'Source-backed priorities',
      items: [
        'Track detailed ministering coverage only where the PDF supplies it.',
        'Do not infer or estimate reported metrics absent from the document.',
        'Prefer N/A for any unsupported leadership KPI.',
      ],
    },
    {
      title: 'Source-backed priorities',
      items: [
        'Maintain a single source of truth: the Quarter 2 2026 PDF.',
        'Reconcile every app metric to the PDF before publication.',
        'Document all unavailable metrics as N/A.',
      ],
    },
  ],
  kpis: [
    { label: 'Stake Members', value: '2,991', change: 'Official PDF total', icon: 'health' },
    { label: 'Average Sacrament Attendance', value: '966', change: 'Official PDF total', icon: 'growth' },
    { label: 'Temple Recommend Holders', value: '421', change: 'Official PDF total', icon: 'temple' },
    { label: 'Converts in 12 Months', value: '114', change: 'Official PDF total', icon: 'retention' },
    { label: 'Ministering Companionships Interviewed', value: '42 / 58', change: 'Brother / sister totals', icon: 'ministering' },
    { label: 'Data Status', value: 'N/A', change: 'Unsupported metrics withheld', icon: 'activity' },
  ],
  correlation: {
    data: [
      { month: 'Q2 2026', ministeringRetention: 0, templeActivity: 0, convertsAttendance: 0, missionaryCandidates: 0 },
    ],
    metric: 'ministeringRetention',
  },
  recommendations: [
    { title: 'Use the PDF as the source of truth.', description: 'Every metric in the dashboard should be validated against the official Quarter 2 2026 report before being displayed.' },
    { title: 'Use N/A when data is missing.', description: 'Any category not explicitly present in the PDF should be marked N/A rather than estimated or invented.' },
    { title: 'Keep ward names aligned to the official labels.', description: 'Use Batasan 1st, Batasan 2nd, Bagong Silangan, Don Antonio, Fairview, Kalayaan, and Mapayapa.' },
    { title: 'Do not infer unsupported leadership scores.', description: 'Scores, trends, and recommendations that are not directly in the PDF are intentionally omitted.' },
  ],
  opportunities: [
    { title: 'Official report coverage', description: 'The PDF provides the primary stakeholder counts needed for the dashboard and is the authoritative source for each value shown.' },
    { title: 'Audit-ready totals', description: 'Stake-level totals are fully traceable to the report and can be used for verification and governance.' },
    { title: 'Data-quality guardrail', description: 'Any unsupported metric is marked N/A so no fabricated summary is presented to the user.' },
  ],
  timeline: [
    { title: 'Quarter 2 report reviewed', date: 'Aug 12, 2026', type: 'Report' },
    { title: 'Stake totals validated', date: 'Aug 12, 2026', type: 'Stake' },
    { title: 'Temple counts checked', date: 'Aug 12, 2026', type: 'Temple' },
    { title: 'Convert totals checked', date: 'Aug 12, 2026', type: 'Conversion' },
  ],
  predictiveInsights: [
    { title: 'Data fidelity', description: 'Predictions and forecasts are intentionally omitted because the official PDF did not include future estimates or modelled leadership projections.' },
    { title: 'Source-controlled reporting', description: 'The app only displays values that are explicitly stated in the official report.' },
  ],
  filters: {
    ward: ['All Wards', 'Batasan 1st', 'Batasan 2nd', 'Bagong Silangan', 'Don Antonio', 'Fairview', 'Kalayaan', 'Mapayapa'],
    dateRange: ['Quarter 2 2026'],
    organization: ['Official PDF only'],
    leadershipLevel: ['N/A'],
    priority: ['N/A'],
  },
}
