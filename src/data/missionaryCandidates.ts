import type { MissionaryCandidateData } from '../types/missionaryCandidates'

export const missionaryCandidatesData: MissionaryCandidateData = {
  metrics: [
    { title: 'Missionary Candidates', value: 'N/A', change: 'Not reported in PDF', icon: 'candidates' },
    { title: 'Ready for Submission', value: 'N/A', change: 'Not reported in PDF', icon: 'ready' },
    { title: 'Awaiting Interviews', value: 'N/A', change: 'Not reported in PDF', icon: 'interviews' },
    { title: 'Medical Pending', value: 'N/A', change: 'Not reported in PDF', icon: 'medical' },
    { title: 'Dental Pending', value: 'N/A', change: 'Not reported in PDF', icon: 'dental' },
    { title: 'Mission Calls Received', value: 'N/A', change: 'Not reported in PDF', icon: 'calls' },
  ],
  candidates: [],
  timeline: [],
  checklist: [],
  documentStatus: [],
  deadlines: [],
  insights: [
    { title: 'Data not included in report', description: 'The official Quarter 2 2026 PDF does not include missionary candidate counts or preparation pipeline details. These fields are shown as N/A.' },
  ],
  filters: {
    ward: ['All Wards'],
    status: ['All Statuses'],
    gender: ['All Genders'],
    age: ['All Ages'],
    submissionMonth: ['All Months'],
    missionType: ['All Types'],
  },
}
