export type WardOverviewItem = {
  ward: string
  engagement: number
  activeFamilies: number
  growth: string
}

export type ConversionTrend = {
  month: string
  converts: number
}

export type ConversionSource = {
  source: string
  count: number
  percentage: string
}

export type RetentionSegment = {
  name: string
  retention: number
}

export type TempleProgressSummary = {
  label: string
  value: string
  delta: string
}

export type MinisteringUpdate = {
  title: string
  ward: string
  status: string
}

export type ActionItem = {
  title: string
  status: string
  due: string
}

export type WardPerformanceStatus = 'Strong' | 'Stable' | 'Watch' | 'Concern'

export type WardPerformanceRow = {
  ward: string
  attendance: string
  converts: number
  templeReady: number
  missionaryCandidates: number
  ministering: number
  inactiveMembers: number
  status: WardPerformanceStatus
}

export type GrowthMetricKey = 'converts' | 'attendance' | 'templeGrowth'

export type GrowthPoint = {
  month: string
  converts: number
  attendance: number
  templeGrowth: number
}

export type StakeOverviewInsight = {
  title: string
  description: string
}

export type StakeOverviewTimelineItem = {
  title: string
  time: string
  type: string
}

export type StakeOverviewDistribution = {
  label: string
  value: number
}

export type StakeOverviewData = {
  summary: {
    totalWards: number
    totalMembers: number
    activeMembers: number
    inactiveMembers: number
    averageSacramentAttendance: string
    totalPriesthoodHolders: number
    totalYouth: number
    youngMenTotal: number
    youngMenAttending: number
    youngWomenTotal: number
    youngWomenAttending: number
  }
  wardPerformance: WardPerformanceRow[]
  monthlyGrowth: GrowthPoint[]
  insights: StakeOverviewInsight[]
  executiveSummary: string
  timeline: StakeOverviewTimelineItem[]
  distribution: StakeOverviewDistribution[]
}

export type ConvertFunnelStage = {
  name: string
  count: number
  percent: number
  detail?: string
  wardBreakdown?: Array<{ ward: string; count: number }>
}

export type ConvertTrendMetricKey = 'baptisms' | 'confirmations' | 'templeReadiness'

export type ConvertTrendPoint = {
  month: string
  baptisms: number
  confirmations: number
  templeReadiness: number
}

export type WardComparisonRow = {
  ward: string
  investigators: number
  baptisms: number
  confirmations: number
  templeReady: number
  calling: number
  retention: number
  status: 'Strong' | 'Stable' | 'Watch' | 'Risk'
}

export type ConvertJourneyItem = {
  name: string
  status: string
  lastUpdated: string
  stages: string[]
}

export type ConvertRiskItem = {
  name: string
  ward: string
  daysSinceAttendance: number
  ministeringAssigned: boolean
  lessonsCompleted: number
  lessonsTotal: number
  riskLevel: 'High' | 'Medium' | 'Low'
  status: string
}

export type ConvertFilters = {
  ward: string[]
  dateRange: string[]
  missionaries: string[]
  ageGroup: string[]
  status: string[]
}

export type ConvertsData = {
  summary: {
    totalConverts: number
    baptismsThisMonth: number
    activeConverts: number
    lessActiveConverts: number
    templeRecommendInterviews: number
    templeReadyConverts: number
    callingAssignmentRate: number
  }
  funnel: ConvertFunnelStage[]
  monthlyTrend: ConvertTrendPoint[]
  wardComparison: WardComparisonRow[]
  journey: ConvertJourneyItem[]
  riskItems: ConvertRiskItem[]
  insights: Array<{ title: string; description: string }>
  filters: ConvertFilters
}

export type RetentionMetricKey = 'attendance' | 'retention' | 'reactivations' | 'lessActive'

export type RetentionTrendPoint = {
  month: string
  attendance: number
  retention: number
  reactivations: number
  lessActive: number
}

export type RiskLevel = 'Low' | 'Medium' | 'High' | 'Critical'

export type RiskSummaryItem = {
  level: 'Low Risk' | 'Medium Risk' | 'High Risk' | 'Critical Risk'
  count: number
  percentage: number
  trend: string
}

export type WardRetentionRow = {
  ward: string
  retention: number
  attendance: number
  lessActive: number
  reactivated: number
  ministeringCoverage: number
  risk: RiskLevel
}

export type MemberTimelineEvent = {
  title: string
  time: string
  detail: string
  type: string
}

export type InterventionItem = {
  member: string
  assignedLeader: string
  ministering: string
  recentContact: string
  nextFollowUp: string
  status: string
  priority: 'High' | 'Medium' | 'Low'
}

export type PredictiveRiskItem = {
  member: string
  ward: string
  score: number
  indicators: string[]
}

export type HeatMapRow = {
  ward: string
  values: number[]
}

export type RetentionFilters = {
  ward: string[]
  dateRange: string[]
  ageGroup: string[]
  organization: string[]
  activityLevel: string[]
  riskLevel: string[]
}

export type RetentionData = {
  summary: {
    overallRetentionRate: number
    activeMembers: number
    lessActiveMembers: number
    returningMembers: number
    newReactivations: number
    membersRequiringFollowUp: number
  }
  trend: RetentionTrendPoint[]
  riskSummary: RiskSummaryItem[]
  wardComparison: WardRetentionRow[]
  timeline: MemberTimelineEvent[]
  intervention: InterventionItem[]
  predictiveRisk: PredictiveRiskItem[]
  insights: Array<{ title: string; description: string }>
  heatmap: HeatMapRow[]
  filters: RetentionFilters
}

export type TempleMetricKey = 'templeReady' | 'recommendInterviews' | 'recommendHolders' | 'endowments' | 'sealings'

export type TempleTrendPoint = {
  month: string
  templeReady: number
  recommendInterviews: number
  recommendHolders: number
  endowments: number
  sealings: number
}

export type TempleFunnelStage = {
  stage: string
  count: number
  percent: number
}

export type TempleStatus = 'Strong' | 'Stable' | 'Watch' | 'Attention'

export type WardTempleRow = {
  ward: string
  templeReady: number
  recommendHolders: number
  interviewsScheduled: number
  endowments: number
  sealings: number
  readiness: number
  status: TempleStatus
}

export type OrdinanceEvent = {
  title: string
  date: string
  ward: string
  detail: string
}

export type PreparationMember = {
  member: string
  currentStage: string
  assignedLeader: string
  nextMilestone: string
  estimatedCompletion: string
  priority: 'High' | 'Medium' | 'Low'
}

export type TempleFilters = {
  ward: string[]
  dateRange: string[]
  ageGroup: string[]
  memberStatus: string[]
  preparationStage: string[]
}

export type TempleProgressData = {
  summary: {
    templeReadyMembers: number
    membersPreparing: number
    recommendInterviewsScheduled: number
    recommendHolders: number
    endowmentsThisYear: number
    sealingsThisYear: number
  }
  funnel: TempleFunnelStage[]
  trend: TempleTrendPoint[]
  wardTable: WardTempleRow[]
  timeline: OrdinanceEvent[]
  pipeline: PreparationMember[]
  heatmap: Array<{ ward: string; values: number[] }>
  insights: Array<{ title: string; description: string }>
  filters: TempleFilters
}

export type MinisteringMetricKey = 'coverage' | 'interviews' | 'companionships' | 'visits'

export type MinisteringTrendPoint = {
  month: string
  coverage: number
  interviews: number
  companionships: number
  visits: number
}

export type MinisteringHealthStatus = 'Strong' | 'Stable' | 'Watch' | 'Attention'

export type WardMinisteringRow = {
  ward: string
  coverage: number
  assignedMembers: number
  interviewsCompleted: string
  brotherInterviews: string
  sisterInterviews: string
  activeCompanionships: number
  membersWithoutAssignments: number
  healthStatus: MinisteringHealthStatus
}

export type CompanionshipCard = {
  companionship: string
  ward: string
  assignedFamilies: number
  lastVisit: string
  nextVisit: string
  interviewStatus: string
  activityStatus: 'Active' | 'Needs Follow-up' | 'Review'
}

export type MinisteringTimelineEvent = {
  title: string
  date: string
  ward: string
  detail: string
}

export type AttentionMember = {
  member: string
  ward: string
  lastContact: string
  assignment: string
  riskLevel: 'High' | 'Medium' | 'Low'
  suggestedAction: string
}

export type MinisteringFilters = {
  ward: string[]
  organization: string[]
  dateRange: string[]
  assignmentStatus: string[]
  interviewStatus: string[]
  riskLevel: string[]
}

export type MinisteringData = {
  summary: {
    ministeringCoverage: number
    activeCompanionships: number
    membersAssigned: number
    monthlyInterviewsCompleted: number
    interviewsNotCompleted: number
    membersWithoutAssignments: number
    immediateAttentionMembers: number
  }
  trend: MinisteringTrendPoint[]
  wardTable: WardMinisteringRow[]
  companionships: CompanionshipCard[]
  timeline: MinisteringTimelineEvent[]
  membersNeedingAttention: AttentionMember[]
  heatmap: Array<{ ward: string; values: number[] }>
  insights: Array<{ title: string; description: string }>
  filters: MinisteringFilters
}

export type LeadershipScore = {
  label: string
  score: number
  trend: number
}

export type PriorityQuadrant = {
  title: string
  items: string[]
}

export type LeadershipKpi = {
  label: string
  value: string
  change: string
  icon: 'health' | 'growth' | 'temple' | 'retention' | 'ministering' | 'activity'
}

export type LeadershipCorrelationMetric = 'ministeringRetention' | 'templeActivity' | 'convertsAttendance' | 'missionaryCandidates'

export type LeadershipCorrelationPoint = {
  month: string
  ministeringRetention: number
  templeActivity: number
  convertsAttendance: number
  missionaryCandidates: number
}

export type LeadershipRecommendation = {
  title: string
  description: string
}

export type LeadershipOpportunity = {
  title: string
  description: string
}

export type LeadershipTimelineItem = {
  title: string
  date: string
  type: string
}

export type PredictiveInsight = {
  title: string
  description: string
}

export type LeadershipFilters = {
  ward: string[]
  dateRange: string[]
  organization: string[]
  leadershipLevel: string[]
  priority: string[]
}

export type LeadershipInsightsData = {
  executiveBriefing: string
  scorecard: LeadershipScore[]
  priorities: PriorityQuadrant[]
  kpis: LeadershipKpi[]
  correlation: {
    data: LeadershipCorrelationPoint[]
    metric: LeadershipCorrelationMetric
  }
  recommendations: LeadershipRecommendation[]
  opportunities: LeadershipOpportunity[]
  timeline: LeadershipTimelineItem[]
  predictiveInsights: PredictiveInsight[]
  filters: LeadershipFilters
}
