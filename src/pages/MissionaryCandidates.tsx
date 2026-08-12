import { useMemo, useState } from 'react'
import MetricCard from '../components/dashboard/MetricCard'
import { GraduationCap, HeartPulse, ShieldCheck, Stethoscope, Users, Landmark } from 'lucide-react'
import ExecutiveHeader from '../components/missionary-candidates/ExecutiveHeader'
import FilterToolbar from '../components/missionary-candidates/FilterToolbar'
import CandidateTable from '../components/missionary-candidates/CandidateTable'
import CandidateDrawer from '../components/missionary-candidates/CandidateDrawer'
import CandidateTimeline from '../components/missionary-candidates/CandidateTimeline'
import PreparationChecklist from '../components/missionary-candidates/PreparationChecklist'
import DocumentStatus from '../components/missionary-candidates/DocumentStatus'
import ProgressTracker from '../components/missionary-candidates/ProgressTracker'
import DeadlinePanel from '../components/missionary-candidates/DeadlinePanel'
import ExecutiveInsights from '../components/missionary-candidates/ExecutiveInsights'
import { missionaryCandidatesData } from '../data/missionaryCandidates'
import type { MissionaryCandidate } from '../types/missionaryCandidates'

const iconMap = {
  candidates: Users,
  ready: ShieldCheck,
  interviews: GraduationCap,
  medical: HeartPulse,
  dental: Stethoscope,
  calls: Landmark,
}

export default function MissionaryCandidates() {
  const [selectedCandidate, setSelectedCandidate] = useState<MissionaryCandidate | null>(null)

  const cards = useMemo(
    () =>
      missionaryCandidatesData.metrics.map((metric) => ({
        ...metric,
        icon: iconMap[metric.icon],
      })),
    [],
  )

  const overallProgress = useMemo(() => {
    const { length } = missionaryCandidatesData.candidates

    if (length === 0) {
      return 0
    }

    const average = missionaryCandidatesData.candidates.reduce((total, candidate) => total + candidate.progress, 0)
    return Math.round(average / length)
  }, [])

  return (
    <div className="space-y-8">
      <ExecutiveHeader
        title="Missionary Candidates"
        description="Monitor the full missionary preparation process from first interview through mission call, travel documentation, and departure readiness."
      />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <MetricCard key={card.title} title={card.title} value={card.value} change={card.change} icon={card.icon} />
        ))}
      </section>

      <FilterToolbar filters={missionaryCandidatesData.filters} />

      <CandidateTable candidates={missionaryCandidatesData.candidates} onSelectCandidate={setSelectedCandidate} />

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <CandidateTimeline items={missionaryCandidatesData.timeline} />
        <ProgressTracker value={overallProgress} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <PreparationChecklist items={missionaryCandidatesData.checklist} />
        <DeadlinePanel deadlines={missionaryCandidatesData.deadlines} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <DocumentStatus documents={missionaryCandidatesData.documentStatus} />
        <ExecutiveInsights insights={missionaryCandidatesData.insights} />
      </section>

      {selectedCandidate && <CandidateDrawer candidate={selectedCandidate} onClose={() => setSelectedCandidate(null)} />}
    </div>
  )
}
