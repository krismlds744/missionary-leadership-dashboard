import type { TempleProgressData } from '../types/pageData'

export const templeProgressData: TempleProgressData = {
  summary: {
    templeReadyMembers: 421,
    membersPreparing: 0,
    recommendInterviewsScheduled: 0,
    recommendHolders: 421,
    endowmentsThisYear: 0,
    sealingsThisYear: 0,
  },
  funnel: [
    { stage: 'Endowed members with current temple recommend', count: 421, percent: 68 },
    { stage: 'Adult males holding Melchizedek Priesthood', count: 383, percent: 36 },
    { stage: 'Youth with current proxy baptisms and confirmations temple recommend', count: 172, percent: 43 },
    { stage: 'Individuals sealed to a spouse in the temple', count: 358, percent: 54 },
    { stage: 'N/A', count: 0, percent: 0 },
    { stage: 'N/A', count: 0, percent: 0 },
    { stage: 'N/A', count: 0, percent: 0 },
    { stage: 'N/A', count: 0, percent: 0 },
  ],
  trend: [
    { month: 'Q2 2026', templeReady: 421, recommendInterviews: 0, recommendHolders: 421, endowments: 0, sealings: 0 },
  ],
  wardTable: [
    { ward: 'Batasan 1st', templeReady: 47, recommendHolders: 47, interviewsScheduled: 0, endowments: 0, sealings: 0, readiness: 0, status: 'Stable' },
    { ward: 'Batasan 2nd', templeReady: 58, recommendHolders: 58, interviewsScheduled: 0, endowments: 0, sealings: 0, readiness: 0, status: 'Stable' },
    { ward: 'Bagong Silangan', templeReady: 44, recommendHolders: 44, interviewsScheduled: 0, endowments: 0, sealings: 0, readiness: 0, status: 'Stable' },
    { ward: 'Don Antonio', templeReady: 63, recommendHolders: 63, interviewsScheduled: 0, endowments: 0, sealings: 0, readiness: 0, status: 'Strong' },
    { ward: 'Fairview', templeReady: 64, recommendHolders: 64, interviewsScheduled: 0, endowments: 0, sealings: 0, readiness: 0, status: 'Stable' },
    { ward: 'Kalayaan', templeReady: 88, recommendHolders: 88, interviewsScheduled: 0, endowments: 0, sealings: 0, readiness: 0, status: 'Strong' },
    { ward: 'Mapayapa', templeReady: 57, recommendHolders: 57, interviewsScheduled: 0, endowments: 0, sealings: 0, readiness: 0, status: 'Stable' },
  ],
  timeline: [
    { title: 'Quarter 2 PDF verified', date: 'Aug 12, 2026', ward: 'Stake', detail: 'Temple recommendation totals were checked against the official report and recorded as the source of truth.' },
  ],
  pipeline: [
    { member: 'N/A', currentStage: 'Not reported in PDF', assignedLeader: 'N/A', nextMilestone: 'N/A', estimatedCompletion: 'N/A', priority: 'Low' },
  ],
  heatmap: [
    { ward: 'Batasan 1st', values: [47, 0, 0, 0, 0] },
    { ward: 'Batasan 2nd', values: [58, 0, 0, 0, 0] },
    { ward: 'Bagong Silangan', values: [44, 0, 0, 0, 0] },
    { ward: 'Don Antonio', values: [63, 0, 0, 0, 0] },
    { ward: 'Fairview', values: [64, 0, 0, 0, 0] },
    { ward: 'Kalayaan', values: [88, 0, 0, 0, 0] },
    { ward: 'Mapayapa', values: [57, 0, 0, 0, 0] },
  ],
  insights: [
    { title: 'Temple recommend holders', description: 'The report lists 421 endowed members with a current temple recommend, which is 68% of the total 622 potential.' },
    { title: 'Highest ward value', description: 'Kalayaan Ward has the highest temple recommend count at 88, followed by Fairview at 64 and Don Antonio at 63.' },
    { title: 'Data availability note', description: 'Detailed temple preparation stages, interview schedules, and ordinance totals by ward were not included in the official PDF and are shown as N/A.' },
  ],
  filters: {
    ward: ['All Wards', 'Batasan 1st', 'Batasan 2nd', 'Bagong Silangan', 'Don Antonio', 'Fairview', 'Kalayaan', 'Mapayapa'],
    dateRange: ['Quarter 2 2026'],
    ageGroup: ['All Ages'],
    memberStatus: ['Official PDF only'],
    preparationStage: ['N/A'],
  },
}
