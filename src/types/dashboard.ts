export type DashboardMetric = {
  value: number | string
  change: string
}

export type DashboardHighlight = {
  title: string
  value: string
  detail: string
}

export type WardRankingItem = {
  ward: string
  score: number
}

export type BaptismPoint = {
  month: string
  value: number
}

export type DashboardData = {
  metrics: {
    newConverts: DashboardMetric
    sacramentAttendance: DashboardMetric
    templeReady: DashboardMetric
    callingRate: DashboardMetric
  }
  highlights: DashboardHighlight[]
  wardRanking: WardRankingItem[]
  baptisms: BaptismPoint[]
}
