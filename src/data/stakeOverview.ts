import type { StakeOverviewData } from '../types/pageData'

export const stakeOverviewData: StakeOverviewData = {
  summary: {
    totalWards: 7,
    totalMembers: 2991,
    activeMembers: 966,
    inactiveMembers: 2025,
    averageSacramentAttendance: '32%',
    totalPriesthoodHolders: 383,
    totalYouth: 228,
    youngMenTotal: 212,
    youngMenAttending: 105,
    youngWomenTotal: 192,
    youngWomenAttending: 123,
  },
  wardPerformance: [
    { ward: 'Batasan 1st', attendance: '107/478', converts: 22, templeReady: 47, missionaryCandidates: 0, ministering: 0, inactiveMembers: 285, status: 'Stable' },
    { ward: 'Batasan 2nd', attendance: '127/383', converts: 13, templeReady: 58, missionaryCandidates: 0, ministering: 0, inactiveMembers: 291, status: 'Stable' },
    { ward: 'Bagong Silangan', attendance: '98/409', converts: 14, templeReady: 44, missionaryCandidates: 0, ministering: 0, inactiveMembers: 278, status: 'Stable' },
    { ward: 'Don Antonio', attendance: '155/402', converts: 6, templeReady: 63, missionaryCandidates: 0, ministering: 0, inactiveMembers: 259, status: 'Strong' },
    { ward: 'Fairview', attendance: '144/521', converts: 31, templeReady: 64, missionaryCandidates: 0, ministering: 0, inactiveMembers: 336, status: 'Stable' },
    { ward: 'Kalayaan', attendance: '205/418', converts: 13, templeReady: 88, missionaryCandidates: 0, ministering: 0, inactiveMembers: 221, status: 'Strong' },
    { ward: 'Mapayapa', attendance: '130/423', converts: 15, templeReady: 57, missionaryCandidates: 0, ministering: 0, inactiveMembers: 355, status: 'Stable' },
  ],
  monthlyGrowth: [
    { month: 'Q2 2026', converts: 114, attendance: 966, templeGrowth: 421 },
  ],
  insights: [
    { title: 'Stake total members', description: 'The official report lists 2,991 total members across seven wards.' },
    { title: 'Average sacrament attendance', description: 'Average sacrament meeting attendance is 966, or 32% of the 3,034 potential total shown in the report.' },
    { title: 'Temple recommend holders', description: 'There are 421 endowed members with a current temple recommend in the official PDF.' },
    { title: 'Highest individual ward attendance', description: 'Kalayaan Ward recorded the highest sacrament meeting attendance at 205, followed by Don Antonio at 155.' },
  ],
  executiveSummary:
    'The official report for Quarter 2, 2026 lists 7 wards, 2,991 total members, and 421 endowed members with a current temple recommend. Average sacrament attendance was 966 against a potential of 3,034, and the stake recorded 114 converts baptized and confirmed in the last 12 months.',
  timeline: [
    { title: 'Quarter 2 report finalized', time: 'Aug 12, 2026', type: 'Report' },
    { title: 'Stake totals reviewed', time: 'Aug 12, 2026', type: 'Stake' },
    { title: 'Convert counts audited', time: 'Aug 12, 2026', type: 'Conversion' },
    { title: 'Temple recommendation totals verified', time: 'Aug 12, 2026', type: 'Temple' },
    { title: 'Ward attendance validated', time: 'Aug 12, 2026', type: 'Attendance' },
  ],
  distribution: [
    { label: 'Batasan 1st', value: 14 },
    { label: 'Batasan 2nd', value: 11 },
    { label: 'Bagong Silangan', value: 12 },
    { label: 'Don Antonio', value: 13 },
    { label: 'Fairview', value: 17 },
    { label: 'Kalayaan', value: 18 },
    { label: 'Mapayapa', value: 14 },
  ],
}
