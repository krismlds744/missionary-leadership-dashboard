import type { MinisteringData } from '../types/pageData'

export const ministeringData: MinisteringData = {
  summary: {
    ministeringCoverage: 0,
    activeCompanionships: 0,
    membersAssigned: 0,
    monthlyInterviewsCompleted: 0,
    membersWithoutAssignments: 0,
    immediateAttentionMembers: 0,
  },
  trend: [
    { month: 'Q2 2026', coverage: 0, interviews: 0, companionships: 0, visits: 0 },
  ],
  wardTable: [
    { ward: 'Batasan 1st', coverage: 0, assignedMembers: 0, interviewsCompleted: 0, activeCompanionships: 0, membersWithoutAssignments: 0, healthStatus: 'Stable' },
    { ward: 'Batasan 2nd', coverage: 0, assignedMembers: 0, interviewsCompleted: 0, activeCompanionships: 0, membersWithoutAssignments: 0, healthStatus: 'Stable' },
    { ward: 'Bagong Silangan', coverage: 0, assignedMembers: 0, interviewsCompleted: 0, activeCompanionships: 0, membersWithoutAssignments: 0, healthStatus: 'Stable' },
    { ward: 'Don Antonio', coverage: 0, assignedMembers: 0, interviewsCompleted: 0, activeCompanionships: 0, membersWithoutAssignments: 0, healthStatus: 'Stable' },
    { ward: 'Fairview', coverage: 0, assignedMembers: 0, interviewsCompleted: 0, activeCompanionships: 0, membersWithoutAssignments: 0, healthStatus: 'Stable' },
    { ward: 'Kalayaan', coverage: 0, assignedMembers: 0, interviewsCompleted: 0, activeCompanionships: 0, membersWithoutAssignments: 0, healthStatus: 'Stable' },
    { ward: 'Mapayapa', coverage: 0, assignedMembers: 0, interviewsCompleted: 0, activeCompanionships: 0, membersWithoutAssignments: 0, healthStatus: 'Stable' },
  ],
  companionships: [
    { companionship: 'N/A', ward: 'N/A', assignedFamilies: 0, lastVisit: 'N/A', nextVisit: 'N/A', interviewStatus: 'N/A', activityStatus: 'Review' },
  ],
  timeline: [
    { title: 'Official PDF source review', date: 'Aug 12, 2026', ward: 'Stake', detail: 'The report includes ward totals for mission preparation and related indicators, but not detailed ministering companionship coverage metrics.' },
  ],
  membersNeedingAttention: [
    { member: 'N/A', ward: 'N/A', lastContact: 'N/A', assignment: 'N/A', riskLevel: 'Low', suggestedAction: 'Not reported in PDF' },
  ],
  heatmap: [
    { ward: 'Batasan 1st', values: [0, 0, 0, 0, 0] },
    { ward: 'Batasan 2nd', values: [0, 0, 0, 0, 0] },
    { ward: 'Bagong Silangan', values: [0, 0, 0, 0, 0] },
    { ward: 'Don Antonio', values: [0, 0, 0, 0, 0] },
    { ward: 'Fairview', values: [0, 0, 0, 0, 0] },
    { ward: 'Kalayaan', values: [0, 0, 0, 0, 0] },
    { ward: 'Mapayapa', values: [0, 0, 0, 0, 0] },
  ],
  insights: [
    { title: 'Official data note', description: 'The official PDF includes ministering companionship totals at the stake level (42 brother and 58 sister companionships interviewed), but not ward-by-ward ministering coverage percentages.' },
    { title: 'Stake totals', description: 'The report lists 42 ministering brother companionships interviewed and 58 ministering sister companionships interviewed.' },
    { title: 'Gap', description: 'Detailed ministering coverage, assignment counts, and district risk profiles were not available in the PDF and therefore appear as N/A.' },
  ],
  filters: {
    ward: ['All Wards', 'Batasan 1st', 'Batasan 2nd', 'Bagong Silangan', 'Don Antonio', 'Fairview', 'Kalayaan', 'Mapayapa'],
    organization: ['Official PDF only'],
    dateRange: ['Quarter 2 2026'],
    assignmentStatus: ['N/A'],
    interviewStatus: ['N/A'],
    riskLevel: ['N/A'],
  },
}
