import type { RetentionData } from '../types/pageData'

export const retentionData: RetentionData = {
  summary: {
    overallRetentionRate: 0,
    activeMembers: 0,
    lessActiveMembers: 0,
    returningMembers: 0,
    newReactivations: 0,
    membersRequiringFollowUp: 0,
  },
  trend: [
    { month: 'Q2 2026', attendance: 966, retention: 0, reactivations: 0, lessActive: 0 },
  ],
  riskSummary: [
    { level: 'Low Risk', count: 0, percentage: 0, trend: 'N/A' },
    { level: 'Medium Risk', count: 0, percentage: 0, trend: 'N/A' },
    { level: 'High Risk', count: 0, percentage: 0, trend: 'N/A' },
    { level: 'Critical Risk', count: 0, percentage: 0, trend: 'N/A' },
  ],
  wardComparison: [
    { ward: 'Batasan 1st', retention: 0, attendance: 107, lessActive: 0, reactivated: 0, ministeringCoverage: 0, risk: 'Low' },
    { ward: 'Batasan 2nd', retention: 0, attendance: 127, lessActive: 0, reactivated: 0, ministeringCoverage: 0, risk: 'Low' },
    { ward: 'Bagong Silangan', retention: 0, attendance: 98, lessActive: 0, reactivated: 0, ministeringCoverage: 0, risk: 'Low' },
    { ward: 'Don Antonio', retention: 0, attendance: 155, lessActive: 0, reactivated: 0, ministeringCoverage: 0, risk: 'Low' },
    { ward: 'Fairview', retention: 0, attendance: 144, lessActive: 0, reactivated: 0, ministeringCoverage: 0, risk: 'Low' },
    { ward: 'Kalayaan', retention: 0, attendance: 205, lessActive: 0, reactivated: 0, ministeringCoverage: 0, risk: 'Low' },
    { ward: 'Mapayapa', retention: 0, attendance: 130, lessActive: 0, reactivated: 0, ministeringCoverage: 0, risk: 'Low' },
  ],
  timeline: [
    { title: 'Stake report verified', time: 'Aug 12, 2026', detail: 'Quarter 2 report matched the official PDF totals and ward attendances.', type: 'Report' },
  ],
  intervention: [
    { member: 'N/A', assignedLeader: 'N/A', ministering: 'N/A', recentContact: 'N/A', nextFollowUp: 'N/A', status: 'N/A', priority: 'Low' },
  ],
  predictiveRisk: [
    { member: 'N/A', score: 0, indicators: ['Not reported in PDF'], ward: 'N/A' },
  ],
  insights: [
    { title: 'Official source', description: 'The official PDF for Quarter 2 2026 is the sole source for stake totals and ward attendance values in this dashboard.' },
    { title: 'Member totals', description: 'The report lists 2,991 total members and 966 average sacrament attendance across the stake.' },
    { title: 'Telemetry gap', description: 'Detailed retention-risk segments, reactivation values, and ward-level retention rates were not included in the PDF and therefore appear as N/A.' },
  ],
  heatmap: [
    { ward: 'Batasan 1st', values: [107, 0, 0, 0, 0] },
    { ward: 'Batasan 2nd', values: [127, 0, 0, 0, 0] },
    { ward: 'Bagong Silangan', values: [98, 0, 0, 0, 0] },
    { ward: 'Don Antonio', values: [155, 0, 0, 0, 0] },
    { ward: 'Fairview', values: [144, 0, 0, 0, 0] },
    { ward: 'Kalayaan', values: [205, 0, 0, 0, 0] },
    { ward: 'Mapayapa', values: [130, 0, 0, 0, 0] },
  ],
  filters: {
    ward: ['All Wards', 'Batasan 1st', 'Batasan 2nd', 'Bagong Silangan', 'Don Antonio', 'Fairview', 'Kalayaan', 'Mapayapa'],
    dateRange: ['Quarter 2 2026'],
    ageGroup: ['N/A'],
    organization: ['N/A'],
    activityLevel: ['N/A'],
    riskLevel: ['N/A'],
  },
}

export type RetentionSummary = typeof retentionData.summary
