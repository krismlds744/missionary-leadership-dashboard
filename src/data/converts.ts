import type { ConvertsData } from '../types/pageData'

export const convertsData: ConvertsData = {
  summary: {
    totalConverts: 114,
    baptismsThisMonth: 0,
    activeConverts: 0,
    lessActiveConverts: 0,
    templeRecommendInterviews: 0,
    templeReadyConverts: 0,
    callingAssignmentRate: 23,
  },
  funnel: [
    { name: 'Baptized and confirmed', count: 114, percent: 100 },
    { name: 'Attended sacrament last month', count: 83, percent: 73 },
    { name: 'Ordained to priesthood', count: 20, percent: 57 },
    { name: 'Ancestor names submitted', count: 16, percent: 19 },
    { name: 'Stake-level temple recommend holders', count: 421, percent: 100 },
    { name: 'Not reported in PDF', count: 0, percent: 0 },
    { name: 'Not reported in PDF', count: 0, percent: 0 },
  ],
  monthlyTrend: [
    { month: 'Q2 2026', baptisms: 114, confirmations: 114, templeReadiness: 421 },
  ],
  wardComparison: [
    { ward: 'Batasan 1st', investigators: 0, baptisms: 22, confirmations: 0, templeReady: 47, retention: 0, status: 'Stable' },
    { ward: 'Batasan 2nd', investigators: 0, baptisms: 13, confirmations: 0, templeReady: 58, retention: 0, status: 'Stable' },
    { ward: 'Bagong Silangan', investigators: 0, baptisms: 14, confirmations: 0, templeReady: 44, retention: 0, status: 'Stable' },
    { ward: 'Don Antonio', investigators: 0, baptisms: 6, confirmations: 0, templeReady: 63, retention: 0, status: 'Strong' },
    { ward: 'Fairview', investigators: 0, baptisms: 31, confirmations: 0, templeReady: 64, retention: 0, status: 'Stable' },
    { ward: 'Kalayaan', investigators: 0, baptisms: 13, confirmations: 0, templeReady: 88, retention: 0, status: 'Strong' },
    { ward: 'Mapayapa', investigators: 0, baptisms: 15, confirmations: 0, templeReady: 57, retention: 0, status: 'Stable' },
  ],
  journey: [
    {
      name: 'Official report dataset',
      status: 'PDF source only',
      lastUpdated: 'Q2 2026',
      stages: ['Convert list', 'Sacrament attendance', 'Temple recommend status'],
    },
  ],
  riskItems: [
    {
      name: 'N/A',
      ward: 'N/A',
      daysSinceAttendance: 0,
      ministeringAssigned: false,
      lessonsCompleted: 0,
      lessonsTotal: 0,
      riskLevel: 'Low',
      status: 'Not reported in PDF',
    },
  ],
  insights: [
    { title: 'Stake convert total', description: 'The PDF records 114 converts baptized and confirmed in the last 12 months.' },
    { title: 'Ward conversion totals', description: 'The report lists convert totals by ward: Batasan 1st 22, Batasan 2nd 13, Bagong Silangan 14, Don Antonio 6, Fairview 31, Kalayaan 13, and Mapayapa 15.' },
    { title: 'Sacrament attendance gap', description: 'Of the 114 converts, 83 are reported attending sacrament last month, leaving a 27% participation gap for immediate follow-up.' },
    { title: 'Calling gap', description: 'Only 23% of converts have a ward calling, highlighting a large responsibility gap despite strong attendance.' },
    { title: 'Leadership responsibility', description: 'Ward councils should review missionary support, ministering interviews, and sacrament participation for convert retention.' },
    { title: 'Temple progression note', description: 'Temple recommend holder counts are stake-level and not tied directly to convert-specific readiness in the PDF.' },
    { title: 'Fairview and Don Antonio', description: 'Fairview and Don Antonio are important focus wards based on their reported convert totals and the overall retention context.' },
  ],
  filters: {
    ward: ['All Wards', 'Batasan 1st', 'Batasan 2nd', 'Bagong Silangan', 'Don Antonio', 'Fairview', 'Kalayaan', 'Mapayapa'],
    dateRange: ['Quarter 2 2026', 'Last 12 months'],
    missionaries: ['N/A'],
    ageGroup: ['All Ages'],
    status: ['All Statuses', 'Official PDF only'],
  },
}
