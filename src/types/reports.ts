import type { LucideIcon } from 'lucide-react'

export type ReportCategoryType = 'Stake' | 'Ward' | 'Missionary' | 'Temple' | 'Ministering' | 'Leadership'
export type ReportStatus = 'Ready' | 'Generating' | 'Scheduled' | 'Failed' | 'Shared'
export type ReportFrequency = 'Monthly' | 'Quarterly' | 'Annual' | 'Weekly' | 'Custom'
export type ReportOutputFormat = 'PDF' | 'Excel' | 'CSV' | 'PowerPoint' | 'Printable View'

export type ReportCategory = {
  id: string
  name: string
  category: ReportCategoryType
  description: string
  lastGenerated: string
  estimatedTime: string
  icon: LucideIcon
}

export type RecentReportRow = {
  id: string
  name: string
  type: string
  generatedBy: string
  date: string
  status: ReportStatus
  fileSize: string
  category: ReportCategoryType
}

export type ReportBuilderSettings = {
  reportType: string
  wards: string[]
  organizations: string[]
  dateRange: string
  metrics: string[]
  outputFormat: string
}

export type ScheduledReport = {
  id: string
  name: string
  frequency: ReportFrequency
  nextRun: string
  recipients: string[]
  status: 'Active' | 'Paused' | 'Pending'
}

export type ExportFormat = {
  id: string
  name: ReportOutputFormat
  description: string
  icon: LucideIcon
}

export type ExecutivePreviewSection = {
  label: string
  value: string
}

export type ExecutivePreviewItem = {
  keyMetrics: ExecutivePreviewSection[]
  highlights: string[]
  risks: string[]
  recommendations: string[]
}

export type RecommendationItem = {
  id: string
  title: string
  detail: string
  tone: 'positive' | 'warning' | 'neutral'
}

export type ActivityLogItem = {
  id: string
  title: string
  detail: string
  timestamp: string
  type: 'Info' | 'Success' | 'Warning'
}

export type ReportFilterOptions = {
  ward: string[]
  organization: string[]
  dateRange: string[]
  reportType: string[]
  status: string[]
}
