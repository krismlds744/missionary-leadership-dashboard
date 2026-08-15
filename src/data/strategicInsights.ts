export type IndicatorKey =
  | 'sacramentAttendance'
  | 'templeRecommend'
  | 'reliefSociety'
  | 'melchizedekPriesthood'
  | 'youngMen'
  | 'youngWomen'
  | 'familyHistory'
  | 'templeOrdinances'
  | 'converts'
  | 'totalMembers'

export type HistoricalQuarter = {
  label: string
  year: number
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4'
  totalMembers: number
  activeMembers: number
  sacramentAttendance: number
  templeRecommend: number
  reliefSociety: number
  melchizedekPriesthood: number
  youngMen: number
  youngWomen: number
  familyHistory: number
  templeOrdinances: number
  converts: number
}

export const indicatorMeta: Record<IndicatorKey, { label: string; category: string; unit: string }> = {
  sacramentAttendance: { label: 'Sacrament Attendance', category: 'Attendance', unit: 'members' },
  templeRecommend: { label: 'Temple Recommend', category: 'Temple', unit: 'holders' },
  reliefSociety: { label: 'Relief Society', category: 'Auxiliary', unit: 'participants' },
  melchizedekPriesthood: { label: 'Melchizedek Priesthood', category: 'Priesthood', unit: 'participants' },
  youngMen: { label: 'Young Men', category: 'Youth', unit: 'participants' },
  youngWomen: { label: 'Young Women', category: 'Youth', unit: 'participants' },
  familyHistory: { label: 'Family History', category: 'Temple', unit: 'participants' },
  templeOrdinances: { label: 'Convert Temple Ordinance Participation', category: 'Temple', unit: 'converts' },
  converts: { label: 'Converts', category: 'Growth', unit: 'members' },
  totalMembers: { label: 'Total Members', category: 'Membership', unit: 'members' },
}

export const historicalQuarterlyData: HistoricalQuarter[] = [
  { label: '2023 Q1', year: 2023, quarter: 'Q1', totalMembers: 2729, activeMembers: 794, sacramentAttendance: 794, templeRecommend: 324, reliefSociety: 289, melchizedekPriesthood: 209, youngMen: 91, youngWomen: 112, familyHistory: 187, templeOrdinances: 1, converts: 68 },
  { label: '2023 Q2', year: 2023, quarter: 'Q2', totalMembers: 2762, activeMembers: 805, sacramentAttendance: 805, templeRecommend: 345, reliefSociety: 394, melchizedekPriesthood: 196, youngMen: 97, youngWomen: 108, familyHistory: 191, templeOrdinances: 0, converts: 54 },
  { label: '2023 Q3', year: 2023, quarter: 'Q3', totalMembers: 2819, activeMembers: 793, sacramentAttendance: 793, templeRecommend: 351, reliefSociety: 340, melchizedekPriesthood: 188, youngMen: 79, youngWomen: 111, familyHistory: 216, templeOrdinances: 2, converts: 67 },
  { label: '2023 Q4', year: 2023, quarter: 'Q4', totalMembers: 2818, activeMembers: 810, sacramentAttendance: 810, templeRecommend: 351, reliefSociety: 281, melchizedekPriesthood: 188, youngMen: 96, youngWomen: 108, familyHistory: 223, templeOrdinances: 2, converts: 72 },
  { label: '2024 Q1', year: 2024, quarter: 'Q1', totalMembers: 2850, activeMembers: 873, sacramentAttendance: 873, templeRecommend: 358, reliefSociety: 371, melchizedekPriesthood: 221, youngMen: 109, youngWomen: 112, familyHistory: 230, templeOrdinances: 4, converts: 73 },
  { label: '2024 Q2', year: 2024, quarter: 'Q2', totalMembers: 2890, activeMembers: 862, sacramentAttendance: 862, templeRecommend: 374, reliefSociety: 416, melchizedekPriesthood: 241, youngMen: 99, youngWomen: 91, familyHistory: 243, templeOrdinances: 0, converts: 88 },
  { label: '2024 Q3', year: 2024, quarter: 'Q3', totalMembers: 2918, activeMembers: 888, sacramentAttendance: 888, templeRecommend: 375, reliefSociety: 422, melchizedekPriesthood: 252, youngMen: 103, youngWomen: 111, familyHistory: 246, templeOrdinances: 2, converts: 78 },
  { label: '2024 Q4', year: 2024, quarter: 'Q4', totalMembers: 2941, activeMembers: 846, sacramentAttendance: 846, templeRecommend: 377, reliefSociety: 428, melchizedekPriesthood: 241, youngMen: 96, youngWomen: 108, familyHistory: 246, templeOrdinances: 2, converts: 134 },
  { label: '2025 Q1', year: 2025, quarter: 'Q1', totalMembers: 2945, activeMembers: 907, sacramentAttendance: 907, templeRecommend: 379, reliefSociety: 413, melchizedekPriesthood: 252, youngMen: 73, youngWomen: 112, familyHistory: 262, templeOrdinances: 4, converts: 131 },
  { label: '2025 Q2', year: 2025, quarter: 'Q2', totalMembers: 2984, activeMembers: 898, sacramentAttendance: 898, templeRecommend: 374, reliefSociety: 440, melchizedekPriesthood: 239, youngMen: 104, youngWomen: 123, familyHistory: 264, templeOrdinances: 2, converts: 90 },
  { label: '2025 Q3', year: 2025, quarter: 'Q3', totalMembers: 3038, activeMembers: 916, sacramentAttendance: 916, templeRecommend: 409, reliefSociety: 422, melchizedekPriesthood: 252, youngMen: 105, youngWomen: 123, familyHistory: 261, templeOrdinances: 6, converts: 102 },
  { label: '2025 Q4', year: 2025, quarter: 'Q4', totalMembers: 2990, activeMembers: 891, sacramentAttendance: 891, templeRecommend: 411, reliefSociety: 428, melchizedekPriesthood: 241, youngMen: 96, youngWomen: 108, familyHistory: 273, templeOrdinances: 15, converts: 134 },
  { label: '2026 Q1', year: 2026, quarter: 'Q1', totalMembers: 2988, activeMembers: 914, sacramentAttendance: 914, templeRecommend: 418, reliefSociety: 437, melchizedekPriesthood: 232, youngMen: 104, youngWomen: 123, familyHistory: 273, templeOrdinances: 19, converts: 131 },
  { label: '2026 Q2', year: 2026, quarter: 'Q2', totalMembers: 2991, activeMembers: 966, sacramentAttendance: 966, templeRecommend: 421, reliefSociety: 441, melchizedekPriesthood: 259, youngMen: 105, youngWomen: 123, familyHistory: 259, templeOrdinances: 16, converts: 114 },
]

export const wardComparisonData = [
  { ward: 'Kalayaan', base: 48, current: 88, growth: 83.3, trend: 'Strong', status: 'Excellent' },
  { ward: 'Don Antonio', base: 52, current: 90, growth: 73.1, trend: 'Strong', status: 'Excellent' },
  { ward: 'Fairview', base: 46, current: 78, growth: 69.6, trend: 'Healthy', status: 'Good' },
  { ward: 'Mapayapa', base: 43, current: 70, growth: 62.8, trend: 'Healthy', status: 'Good' },
  { ward: 'Batasan 1st', base: 41, current: 66, growth: 60.9, trend: 'Steady', status: 'Stable' },
  { ward: 'Batasan 2nd', base: 39, current: 64, growth: 64.1, trend: 'Steady', status: 'Stable' },
  { ward: 'Bagong Silangan', base: 40, current: 62, growth: 55.0, trend: 'Stable', status: 'Watch' },
] as const

export const allYears = Array.from(new Set(historicalQuarterlyData.map((entry) => entry.year))).sort((a, b) => a - b)
export const allQuarters = ['Q1', 'Q2', 'Q3', 'Q4'] as const

export function getGrowthPct(current: number, baseline: number) {
  if (baseline === 0) return 0
  return Number((((current - baseline) / baseline) * 100).toFixed(1))
}

export function getLatestValue(key: IndicatorKey) {
  return historicalQuarterlyData[historicalQuarterlyData.length - 1][key]
}

export function getBaselineValue(key: IndicatorKey) {
  return historicalQuarterlyData[0][key]
}

export function getIndicatorGrowth(key: IndicatorKey) {
  return getGrowthPct(getLatestValue(key), getBaselineValue(key))
}

export function getIndicatorStatus(growth: number) {
  if (growth >= 15) return 'Excellent'
  if (growth >= 8) return 'Healthy'
  if (growth >= 2) return 'Stable'
  if (growth > -5) return 'Watch'
  return 'Needs Attention'
}

export function getScorecardRows() {
  return (Object.keys(indicatorMeta) as IndicatorKey[])
    .map((key) => ({
      indicator: indicatorMeta[key].label,
      growth: getIndicatorGrowth(key),
      status: getIndicatorStatus(getIndicatorGrowth(key)),
      category: indicatorMeta[key].category,
    }))
    .sort((a, b) => b.growth - a.growth)
}

export function getExecutiveKpis() {
  const first = historicalQuarterlyData[0]
  const latest = historicalQuarterlyData[historicalQuarterlyData.length - 1]

  return [
    {
      label: 'Overall Stake Growth',
      value: `${getGrowthPct(latest.totalMembers, first.totalMembers)}%`,
      context: 'Since Q1 2023',
      tone: 'positive',
    },
    {
      label: 'Average Sacrament Attendance',
      value: `${getGrowthPct(latest.sacramentAttendance, first.sacramentAttendance)}%`,
      context: 'vs Q1 2023',
      tone: 'positive',
    },
    {
      label: 'Temple Recommend Growth',
      value: `${getGrowthPct(latest.templeRecommend, first.templeRecommend)}%`,
      context: 'vs Q1 2023',
      tone: 'positive',
    },
    {
      label: 'Convert Retention',
      value: `${getGrowthPct(latest.converts, first.converts)}%`,
      context: 'vs Q1 2023',
      tone: 'neutral',
    },
    {
      label: 'Youth Engagement',
      value: `${getGrowthPct(latest.youngMen + latest.youngWomen, first.youngMen + first.youngWomen)}%`,
      context: 'vs Q1 2023',
      tone: 'positive',
    },
  ]
}

export function getNarrativeObservations() {
  const first = historicalQuarterlyData[0]
  const latest = historicalQuarterlyData[historicalQuarterlyData.length - 1]

  const templeGrowth = getGrowthPct(latest.templeRecommend, first.templeRecommend)
  const attendanceGrowth = getGrowthPct(latest.sacramentAttendance, first.sacramentAttendance)
  const youthGrowth = getGrowthPct(latest.youngMen + latest.youngWomen, first.youngMen + first.youngWomen)
  const familyHistoryGrowth = getGrowthPct(latest.familyHistory, first.familyHistory)
  const priesthoodGrowth = getGrowthPct(latest.melchizedekPriesthood, first.melchizedekPriesthood)

  const observations = [
    templeGrowth > 0
      ? `Temple recommend holders increased by ${templeGrowth}% from Q1 2023 to Q2 2026; the reports show growth across the full period, not a claim of uninterrupted quarterly improvement.`
      : 'Temple readiness has not improved materially across the historical period.',
    attendanceGrowth > 0
      ? `Reported sacrament attendance increased by ${attendanceGrowth}% from Q1 2023 to Q2 2026.`
      : 'Sacrament attendance has remained relatively flat across the same period.',
    youthGrowth > 0
      ? `Combined Young Men and Young Women attendance changed by ${youthGrowth}% from Q1 2023 to Q2 2026.`
      : 'Youth participation shows limited improvement over the historical period.',
    familyHistoryGrowth <= 5
      ? `Ancestor-name submissions increased by ${familyHistoryGrowth}% from Q1 2023 to Q2 2026.`
      : 'Family History participation has shown meaningful growth over the historical period.',
    priesthoodGrowth <= 8
      ? `Melchizedek Priesthood participation has shown only modest improvement and should remain a leadership focus area.`
      : 'Melchizedek Priesthood participation has improved materially and is trending in a healthy direction.',
  ]

  return observations
}

export function getBiggestImprovements() {
  return getScorecardRows()
    .filter((item) => item.growth > 0)
    .sort((a, b) => b.growth - a.growth)
    .slice(0, 5)
}

export function getLeadershipAttention() {
  return getScorecardRows()
    .filter((item) => item.growth <= 5)
    .sort((a, b) => a.growth - b.growth)
    .slice(0, 5)
    .map((item) => ({
      ...item,
      narrative:
        item.growth <= 0
          ? 'No meaningful growth in the historical period.'
          : 'Growth has plateaued and requires intervention.',
    }))
}

export function getHeatmapMatrix() {
  const years = allYears
  const indicators = Object.keys(indicatorMeta) as IndicatorKey[]

  return indicators.map((indicator) => ({
    indicator: indicatorMeta[indicator].label,
    values: years.map((year) => {
      const yearData = historicalQuarterlyData.filter((entry) => entry.year === year)
      const value = yearData.reduce((sum, entry) => sum + entry[indicator], 0) / yearData.length
      const firstYearValue = historicalQuarterlyData.filter((entry) => entry.year === years[0]).reduce((sum, entry) => sum + entry[indicator], 0) / Math.max(1, historicalQuarterlyData.filter((entry) => entry.year === years[0]).length)
      const delta = getGrowthPct(value, firstYearValue)

      return {
        year,
        delta,
        state: delta >= 15 ? 'green' : delta >= 5 ? 'yellow' : 'red',
      }
    }),
  }))
}

export function getTrendChartData() {
  return historicalQuarterlyData.map((item) => ({
    label: item.label,
    year: item.year,
    sacramentAttendance: item.sacramentAttendance,
    templeRecommend: item.templeRecommend,
    reliefSociety: item.reliefSociety,
    melchizedekPriesthood: item.melchizedekPriesthood,
    youngMen: item.youngMen,
    youngWomen: item.youngWomen,
    familyHistory: item.familyHistory,
    templeOrdinances: item.templeOrdinances,
    converts: item.converts,
  }))
}

export function getForecasts() {
  const indicatorKeys = ['sacramentAttendance', 'templeRecommend', 'youngMen', 'youngWomen', 'familyHistory'] as const

  return indicatorKeys.map((key) => {
    const values = historicalQuarterlyData.map((entry) => entry[key])
    const earliest = values[0]
    const latest = values[values.length - 1]
    const slope = (latest - earliest) / Math.max(1, values.length - 1)
    const projected = Math.round(latest + slope)
    const confidence = Math.min(95, Math.max(50, 60 + Math.abs(getGrowthPct(latest, earliest)) * 1.5))

    return {
      indicator: indicatorMeta[key].label,
      projected,
      confidence: `${Math.round(confidence)}%`,
      change: `${slope >= 0 ? '+' : ''}${slope.toFixed(1)}`,
    }
  })
}

export function getTimelineMilestones() {
  return [
    { year: 2020, headline: 'Pandemic attendance decline', detail: 'Church attendance and participation dropped notably across the stake.' },
    { year: 2021, headline: 'Attendance recovery begins', detail: 'Sacrament attendance stabilized and resumed an upward trend.' },
    { year: 2022, headline: 'Temple readiness increases', detail: 'Temple recommend counts accelerated through the early 2020s.' },
    { year: 2023, headline: 'Youth participation improves', detail: 'Young Men and Young Women participation grew steadily.' },
    { year: 2024, headline: 'Highest sacrament attendance', detail: 'Attendance reached a sustained multi-year high.' },
    { year: 2025, headline: 'Temple recommend reaches highest level', detail: 'Temple recommend holder totals strengthened across the stake.' },
    { year: 2026, headline: 'Stake achieves strongest overall performance', detail: 'The stake reached a new high-water mark in overall member engagement and readiness.' },
  ]
}

export function getRecommendations() {
  const lowest = getLeadershipAttention()
  const strongest = getBiggestImprovements()

  return [
    `Continue emphasizing temple preparation because it has produced consistent long-term growth, with ${strongest[0]?.indicator ?? 'Temple Recommend'} leading the trend.` ,
    lowest.length > 0
      ? `Increase focus on ${lowest[0]?.indicator ?? 'Family History'} because growth has remained flat or limited over the historical period.`
      : 'Maintain current leadership focus because major indicators remain healthy.',
    strongest.length > 1
      ? `Strengthen youth engagement programs because ${strongest[1]?.indicator ?? 'Young Women'} has shown substantial recent momentum.`
      : 'Keep youth engagement programs at the center of the ward strategy.',
    lowest.some((item) => item.indicator.includes('Priesthood'))
      ? 'Prioritize Melchizedek Priesthood participation to accelerate improvement in the next cycle.'
      : 'Continue the current priesthood emphasis while measuring retention trends over the next quarter.',
    'Maintain successful sacrament attendance initiatives while monitoring family history and priesthood growth for compounding gains.',
  ]
}

export function getFilteredHistory(options: {
  year?: string | number | 'All'
  quarter?: 'All' | 'Q1' | 'Q2' | 'Q3' | 'Q4'
}) {
  const { year, quarter } = options

  return historicalQuarterlyData.filter((entry) => {
    const yearMatch = year === 'All' || year === undefined || String(entry.year) === String(year)
    const quarterMatch = quarter === 'All' || quarter === undefined || entry.quarter === quarter
    return yearMatch && quarterMatch
  })
}
