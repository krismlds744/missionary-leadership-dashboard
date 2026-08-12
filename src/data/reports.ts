import {
  Activity,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  FileBarChart,
  FileText,
  Landmark,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react'
import type {
  ActivityLogItem,
  ExecutivePreviewItem,
  ExportFormat,
  RecommendationItem,
  RecentReportRow,
  ReportCategory,
  ReportFilterOptions,
  ScheduledReport,
} from '../types/reports'

const iconMap: Record<string, LucideIcon> = {
  stake: Building2,
  ward: Users,
  missionary: ShieldCheck,
  temple: Landmark,
  ministering: Sparkles,
  leadership: BarChart3,
  report: FileBarChart,
  summary: FileText,
  database: BriefcaseBusiness,
  activity: Activity,
}

export const reportCategories: ReportCategory[] = [
  {
    id: 'quarterly-stake',
    name: 'Quarterly Stake Report',
    category: 'Stake',
    description: 'Official Quarter 2 2026 report totals for members, attendance, converts, and temple recommend holders.',
    lastGenerated: 'Aug 12, 2026',
    estimatedTime: '2 mins',
    icon: iconMap.stake,
  },
  {
    id: 'ward-summary',
    name: 'Ward Summary Report',
    category: 'Ward',
    description: 'Ward totals from the official report: Batasan 1st, Batasan 2nd, Bagong Silangan, Don Antonio, Fairview, Kalayaan, and Mapayapa.',
    lastGenerated: 'Aug 12, 2026',
    estimatedTime: '2 mins',
    icon: iconMap.ward,
  },
  {
    id: 'temple-report',
    name: 'Temple Recommendation Report',
    category: 'Temple',
    description: 'Source-backed temple recommend and sealings data from the official PDF, where stated.',
    lastGenerated: 'Aug 12, 2026',
    estimatedTime: '2 mins',
    icon: iconMap.temple,
  },
  {
    id: 'conversion-report',
    name: 'Conversion Summary',
    category: 'Stake',
    description: 'Baptized and confirmed convert totals and sacrament attendance data from the official report.',
    lastGenerated: 'Aug 12, 2026',
    estimatedTime: '2 mins',
    icon: iconMap.summary,
  },
  {
    id: 'n-a-report',
    name: 'N/A Data Category',
    category: 'Missionary',
    description: 'Any category not explicitly present in the official PDF is displayed as N/A instead of being estimated.',
    lastGenerated: 'Aug 12, 2026',
    estimatedTime: '1 min',
    icon: iconMap.missionary,
  },
]

export const recentReports: RecentReportRow[] = [
  {
    id: 'r1',
    name: 'Monthly Stake Summary',
    type: 'Stake',
    generatedBy: 'Stake Clerk',
    date: '2026-08-12',
    status: 'Ready',
    fileSize: '2.4 MB',
    category: 'Stake',
  },
  {
    id: 'r2',
    name: 'Ward Comparison Review',
    type: 'Ward',
    generatedBy: 'Presidency',
    date: '2026-08-11',
    status: 'Generating',
    fileSize: '1.8 MB',
    category: 'Ward',
  },
  {
    id: 'r3',
    name: 'Missionary Candidate Pipeline',
    type: 'Missionary',
    generatedBy: 'Mission Leader',
    date: '2026-08-10',
    status: 'Scheduled',
    fileSize: '3.1 MB',
    category: 'Missionary',
  },
  {
    id: 'r4',
    name: 'Temple Progress Brief',
    type: 'Temple',
    generatedBy: 'Temple Committee',
    date: '2026-08-09',
    status: 'Shared',
    fileSize: '980 KB',
    category: 'Temple',
  },
  {
    id: 'r5',
    name: 'Ministering Coverage Review',
    type: 'Ministering',
    generatedBy: 'Bishopric',
    date: '2026-08-08',
    status: 'Ready',
    fileSize: '1.3 MB',
    category: 'Ministering',
  },
  {
    id: 'r6',
    name: 'Leadership Insights Executive Pack',
    type: 'Leadership',
    generatedBy: 'Stake Presidency',
    date: '2026-08-05',
    status: 'Ready',
    fileSize: '4.8 MB',
    category: 'Leadership',
  },
  {
    id: 'r7',
    name: 'Quarterly Retention Snapshot',
    type: 'Stake',
    generatedBy: 'Retention Council',
    date: '2026-08-01',
    status: 'Failed',
    fileSize: '670 KB',
    category: 'Stake',
  },
  {
    id: 'r8',
    name: 'Sacrament Attendance Trends',
    type: 'Ward',
    generatedBy: 'Stake Clerk',
    date: '2026-07-29',
    status: 'Ready',
    fileSize: '1.1 MB',
    category: 'Ward',
  },
]

export const reportFilters: ReportFilterOptions = {
  ward: ['All Wards', 'Batasan 1st', 'Batasan 2nd', 'Bagong Silangan', 'Don Antonio', 'Fairview', 'Kalayaan', 'Mapayapa'],
  organization: ['All Organizations'],
  dateRange: ['Quarter 2 2026'],
  reportType: ['All Reports', 'Stake', 'Ward', 'Temple'],
  status: ['All Statuses', 'Official PDF'],
}

export const scheduledReports: ScheduledReport[] = [
  {
    id: 's1',
    name: 'Quarter 2 Stake Summary',
    frequency: 'Quarterly',
    nextRun: 'Aug 12, 2026',
    recipients: ['Stake Presidency'],
    status: 'Active',
  },
  {
    id: 's2',
    name: 'Ward Totals Audit',
    frequency: 'Quarterly',
    nextRun: 'Aug 12, 2026',
    recipients: ['Stake Clerk'],
    status: 'Active',
  },
]

export const exportFormats: ExportFormat[] = [
  { id: 'pdf', name: 'PDF', description: 'Share polished, presentation-ready reports with leadership teams.', icon: FileText },
  { id: 'excel', name: 'Excel', description: 'Export details for deeper analysis and custom planning models.', icon: FileBarChart },
  { id: 'csv', name: 'CSV', description: 'Bulk data export for downstream operations and data blending.', icon: BriefcaseBusiness },
  { id: 'powerpoint', name: 'PowerPoint', description: 'Turn leadership summaries into council-ready slides.', icon: BarChart3 },
  { id: 'printable', name: 'Printable View', description: 'Optimized print layout for meeting packets and handouts.', icon: Activity },
]

export const executivePreview: ExecutivePreviewItem = {
  keyMetrics: [
    { label: 'Stake members', value: '2,991' },
    { label: 'Average sacrament attendance', value: '966' },
    { label: 'Temple recommend holders', value: '421' },
    { label: 'Converts in 12 months', value: '114' },
  ],
  highlights: [
    'The official Quarter 2 2026 report lists 2,991 total members across seven wards.',
    'Average sacrament meeting attendance was 966 against a potential of 3,034.',
    'The stake has 421 endowed members with a current temple recommend.',
  ],
  risks: [
    'Detailed metric drilldowns not included in the PDF are marked N/A.',
    'Forecasts and modelled leadership scores are intentionally omitted because they are absent from the PDF.',
  ],
  recommendations: [
    'Use the official PDF as the sole source for reporting and verification.',
    'Treat any metric not explicitly stated in the report as N/A.',
    'Keep all ward names in the official report format.',
  ],
}

export const aiRecommendations: RecommendationItem[] = [
  {
    id: 'rec-1',
    title: 'Source confirmation',
    detail: 'The Quarter 2 2026 PDF is the authoritative source for the values displayed in this dashboard.',
    tone: 'positive',
  },
  {
    id: 'rec-2',
    title: 'Missing data handling',
    detail: 'Any figure not explicitly included in the official report is shown as N/A rather than estimated.',
    tone: 'warning',
  },
  {
    id: 'rec-3',
    title: 'Ward naming',
    detail: 'Ward names are normalized to Batasan 1st, Batasan 2nd, Bagong Silangan, Don Antonio, Fairview, Kalayaan, and Mapayapa.',
    tone: 'neutral',
  },
]

export const activityLog: ActivityLogItem[] = [
  {
    id: 'a1',
    title: 'Report generated',
    detail: 'Monthly Stake Summary generated for the stake presidency.',
    timestamp: '8 minutes ago',
    type: 'Success',
  },
  {
    id: 'a2',
    title: 'Report exported',
    detail: 'Leadership Insights report was exported to PDF.',
    timestamp: '24 minutes ago',
    type: 'Info',
  },
  {
    id: 'a3',
    title: 'Scheduled report created',
    detail: 'Temple Progress Report was scheduled for monthly delivery.',
    timestamp: '1 hour ago',
    type: 'Success',
  },
  {
    id: 'a4',
    title: 'Report shared',
    detail: 'Ward Comparison Review was shared with the bishopric.',
    timestamp: '2 hours ago',
    type: 'Info',
  },
  {
    id: 'a5',
    title: 'Report generated',
    detail: 'Ministering Coverage Review generated for leadership update.',
    timestamp: 'Yesterday',
    type: 'Warning',
  },
]
