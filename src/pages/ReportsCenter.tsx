import { useMemo } from 'react'
import { BarChart3, Building2, Landmark, ShieldCheck, Sparkles, Users } from 'lucide-react'
import ActivityLog from '../components/reports/ActivityLog'
import ExecutivePreview from '../components/reports/ExecutivePreview'
import ExportFormats from '../components/reports/ExportFormats'
import FilterToolbar from '../components/reports/FilterToolbar'
import RecentReportsTable from '../components/reports/RecentReportsTable'
import RecommendationPanel from '../components/reports/RecommendationPanel'
import ReportBuilder from '../components/reports/ReportBuilder'
import ReportCard from '../components/reports/ReportCard'
import ReportsHeader from '../components/reports/ReportsHeader'
import ScheduledReports from '../components/reports/ScheduledReports'
import {
  activityLog,
  aiRecommendations,
  executivePreview,
  exportFormats,
  recentReports,
  reportCategories,
  reportFilters,
  scheduledReports,
} from '../data/reports'
import type { ReportBuilderSettings } from '../types/reports'

const builderSettings: ReportBuilderSettings = {
  reportType: 'Quarter 2 2026 Stake Report',
  wards: ['All Wards', 'Don Antonio', 'Batasan 1st', 'Batasan 2nd', 'Bagong Silangan', 'Fairview', 'Kalayaan', 'Mapayapa'],
  organizations: ['All Organizations', 'Relief Society', 'Elders Quorum', 'Young Women', 'Young Men'],
  dateRange: 'Quarter 2 2026',
  metrics: ['Attendance', 'Retention', 'Temple readiness', 'Missionary pipeline'],
  outputFormat: 'PDF',
}

const sectionIcons = [
  Building2,
  Users,
  ShieldCheck,
  Landmark,
  Sparkles,
  BarChart3,
] as const

export default function ReportsCenter() {
  const reportCards = useMemo(
    () =>
      reportCategories.map((report, index) => ({
        ...report,
        icon: sectionIcons[index % sectionIcons.length],
      })),
    [],
  )

  return (
    <div className="space-y-8">
      <ReportsHeader
        title="Reports Center"
        description="Generate executive intelligence across every stakeholder area and prepare polished leadership summaries for council, planning, and reporting cycles."
      />

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">Categories</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reportCards.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </section>

      <FilterToolbar filters={reportFilters} />

      <RecentReportsTable rows={recentReports} />

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <ReportBuilder settings={builderSettings} />
        <ExecutivePreview preview={executivePreview} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <ScheduledReports reports={scheduledReports} />
        <ExportFormats formats={exportFormats} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <RecommendationPanel recommendations={aiRecommendations} />
        <ActivityLog items={activityLog} />
      </section>
    </div>
  )
}
