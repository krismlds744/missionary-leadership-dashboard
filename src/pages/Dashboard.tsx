import {
  Building2,
  HeartHandshake,
  UserCheck,
  Users,
} from 'lucide-react'
import ActivityCard from '../components/dashboard/ActivityCard'
import ChartCard from '../components/dashboard/ChartCard'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import ExecutiveSummaryCard from '../components/dashboard/ExecutiveSummaryCard'
import MetricCard from '../components/dashboard/MetricCard'
import MissionaryPipelineCard from '../components/dashboard/MissionaryPipelineCard'
import WardRankingCard from '../components/dashboard/WardRankingCard'
import { dashboardData } from '../data/dashboard'

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          title="New Converts"
          value={dashboardData.metrics.newConverts.value.toString()}
          change={dashboardData.metrics.newConverts.change}
          icon={Users}
        />

        <MetricCard
          title="Sacrement Attendance"
          value={dashboardData.metrics.sacramentAttendance.value}
          change={dashboardData.metrics.sacramentAttendance.change}
          icon={Building2}
        />

        <MetricCard
          title="Temple Ready"
          value={dashboardData.metrics.templeReady.value.toString()}
          change={dashboardData.metrics.templeReady.change}
          icon={HeartHandshake}
        />

        <MetricCard
          title="New Converts with Calling Rate"
          value={dashboardData.metrics.callingRate.value.toString()}
          change={dashboardData.metrics.callingRate.change}
          icon={UserCheck}
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChartCard />
        </div>
        <WardRankingCard />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <ExecutiveSummaryCard items={dashboardData.highlights} />
        <ActivityCard />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <MissionaryPipelineCard />
      </section>
    </div>
  )
}