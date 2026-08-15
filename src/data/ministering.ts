import type { MinisteringData } from '../types/pageData'

export const ministeringData: MinisteringData = {
  summary: {
    ministeringCoverage: 0,
    activeCompanionships: 0,
    membersAssigned: 0,
    monthlyInterviewsCompleted: 100,
    interviewsNotCompleted: 86,
    membersWithoutAssignments: 0,
    immediateAttentionMembers: 0,
  },
  trend: [
    { month: 'Q1 2026', coverage: 48, interviews: 40, companionships: 80, visits: 8 },
    { month: 'Q2 2026', coverage: 50, interviews: 42, companionships: 84, visits: 12 },
  ],
  wardTable: [
    { ward: 'Batasan 1st', coverage: 0, assignedMembers: 0, interviewsCompleted: '13/31', brotherInterviews: '9/13', sisterInterviews: '4/18', activeCompanionships: 0, membersWithoutAssignments: 0, healthStatus: 'Stable' },
    { ward: 'Batasan 2nd', coverage: 0, assignedMembers: 0, interviewsCompleted: '20/32', brotherInterviews: '8/18', sisterInterviews: '12/14', activeCompanionships: 0, membersWithoutAssignments: 0, healthStatus: 'Stable' },
    { ward: 'Bagong Silangan', coverage: 0, assignedMembers: 0, interviewsCompleted: '14/31', brotherInterviews: '12/12', sisterInterviews: '2/19', activeCompanionships: 0, membersWithoutAssignments: 0, healthStatus: 'Stable' },
    { ward: 'Don Antonio', coverage: 0, assignedMembers: 0, interviewsCompleted: '24/27', brotherInterviews: '11/14', sisterInterviews: '13/13', activeCompanionships: 0, membersWithoutAssignments: 0, healthStatus: 'Stable' },
    { ward: 'Fairview', coverage: 0, assignedMembers: 0, interviewsCompleted: '15/29', brotherInterviews: '1/12', sisterInterviews: '14/17', activeCompanionships: 0, membersWithoutAssignments: 0, healthStatus: 'Stable' },
    { ward: 'Kalayaan', coverage: 0, assignedMembers: 0, interviewsCompleted: '0/0', brotherInterviews: '0/0', sisterInterviews: '0/0', activeCompanionships: 0, membersWithoutAssignments: 0, healthStatus: 'Stable' },
    { ward: 'Mapayapa', coverage: 0, assignedMembers: 0, interviewsCompleted: '14/36', brotherInterviews: '1/15', sisterInterviews: '13/21', activeCompanionships: 0, membersWithoutAssignments: 0, healthStatus: 'Stable' },
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
    { title: 'Stake totals', description: '42 ministering brother companionships and 58 ministering sister companionships were interviewed, for 100 total companionship interviews.' },
    { title: 'Brother interviews', description: 'Across the entire stake, 42 ministering brother companionship interviews were completed.' },
    { title: 'Sister interviews', description: 'Across the entire stake, 58 ministering sister companionship interviews were completed.' },
    { title: 'Total interviews', description: 'The stake completed 100 ministering companionship interviews in total.' },
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
