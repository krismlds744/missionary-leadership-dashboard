export type CandidateStatus =
  | 'Ready for Submission'
  | 'Awaiting Interview'
  | 'Medical Pending'
  | 'Dental Pending'
  | 'Mission Call Received'
  | 'On Hold'
  | 'Preparing'

export type DocumentStatus = 'Completed' | 'Pending' | 'Expired' | 'Needs Review'
export type Gender = 'Male' | 'Female'
export type MissionType = 'Proselyting' | 'Service' | 'Temple' | 'Family History'

export type MissionaryCandidate = {
  id: string
  fullName: string
  firstName: string
  lastName: string
  ward: string
  age: number
  gender: Gender
  status: CandidateStatus
  progress: number
  expectedSubmission: string
  assignedBishop: string
  missionType: MissionType
  phone: string
  email: string
  interviewDate: string
  missionCallDate?: string
  photo: string
  personalNotes: string
  timeline: Array<{
    label: string
    date: string
    complete: boolean
  }>
  checklist: Array<{
    item: string
    complete: boolean
  }>
  documents: Array<{
    name: string
    status: DocumentStatus
    lastUpdated: string
  }>
  progressBreakdown: Array<{
    label: string
    value: number
    color: string
  }>
}

export type MissionaryMetric = {
  title: string
  value: string
  change: string
  icon: 'candidates' | 'ready' | 'interviews' | 'medical' | 'dental' | 'calls'
}

export type MissionaryTimelineMilestone = {
  label: string
  date: string
  complete: boolean
}

export type MissionaryChecklistItem = {
  item: string
  complete: boolean
}

export type MissionaryDocumentCard = {
  name: string
  status: DocumentStatus
  lastUpdated: string
}

export type MissionaryDeadline = {
  label: string
  date: string
  priority: 'High' | 'Medium' | 'Low'
}

export type MissionaryInsight = {
  title: string
  description: string
}

export type MissionaryCandidateFilters = {
  ward: string[]
  status: string[]
  gender: string[]
  age: string[]
  submissionMonth: string[]
  missionType: string[]
}

export type MissionaryCandidateData = {
  metrics: MissionaryMetric[]
  candidates: MissionaryCandidate[]
  timeline: MissionaryTimelineMilestone[]
  checklist: MissionaryChecklistItem[]
  documentStatus: MissionaryDocumentCard[]
  deadlines: MissionaryDeadline[]
  insights: MissionaryInsight[]
  filters: MissionaryCandidateFilters
}
