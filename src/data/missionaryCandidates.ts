export type CandidateStatus = 'Completing Forms' | 'Ready for Stake President Action' | 'Mission Call Accepted'

export type CandidateRecord = {
  id: string
  fullName: string
  ward: string
  gender: 'Female' | 'Male' | 'Not reported'
  age: number | null
  missionType: 'Proselyting' | 'Service' | 'Not reported'
  status: CandidateStatus
  stage: string
  recommendationStarted: string | null
  daysInStage: number | null
  mission: string | null
  missionStart: string | null
  expectedRelease: string | null
  futureReadiness: {
    passportStatus: string | null
    medicalClearance: string | null
    dentalClearance: string | null
    templeRecommendStatus: string | null
    endowmentCompleted: string | null
    visaStatus: string | null
    mtcDate: string | null
    departureDate: string | null
    requiredDocuments: string | null
    trainingCompleted: string | null
    languagePreparation: string | null
    checklistCompletion: number | null
  }
}

export const missionaryCandidatesData = {
  kpis: [
    { title: 'Missionary Candidates Completing Forms', value: 22, description: 'Currently preparing missionary recommendation.' },
    { title: 'Ready for Stake President Action', value: 6, description: 'Recommendation is waiting for Stake President interview or approval.' },
    { title: 'Mission Assignments Received', value: 1, description: 'Mission call has been assigned.' },
    { title: 'Currently Serving in Mission Field', value: 22, description: 'Missionaries currently serving.' },
    { title: 'Returned Missionaries', value: 45, description: 'Honorably released missionaries.' },
    { title: 'Canceled Recommendations', value: 2, description: 'Missionary recommendation canceled.' },
  ],
  pipeline: [
    { label: 'Completing Forms', value: 22, tone: 'sky' },
    { label: 'Stake President Action', value: 6, tone: 'amber' },
    { label: 'Mission Assignment', value: 1, tone: 'violet' },
    { label: 'Entered MTC', value: 1, tone: 'cyan' },
    { label: 'Serving in Mission Field', value: 22, tone: 'emerald' },
  ],
  candidatesByWard: [
    { ward: 'Batasan Hills 2nd', value: 8 },
    { ward: 'Fairview', value: 6 },
    { ward: 'Kalayaan', value: 4 },
    { ward: 'Mapayapa', value: 2 },
    { ward: 'Bagong Silangan', value: 1 },
    { ward: 'Don Antonio', value: 1 },
    { ward: 'Batasan Hills 1st', value: 0 },
  ],
  candidateRecords: [
    {
      id: 'ashlyn-dongito', fullName: 'Ashlyn Blair Macalam Dongito', ward: 'Fairview Ward', gender: 'Not reported', age: null,
      missionType: 'Not reported', status: 'Mission Call Accepted', stage: 'Mission Assignment', recommendationStarted: null,
      daysInStage: null, mission: 'England Bristol Mission', missionStart: 'September 17, 2026', expectedRelease: null,
      futureReadiness: { passportStatus: null, medicalClearance: null, dentalClearance: null, templeRecommendStatus: null, endowmentCompleted: null, visaStatus: null, mtcDate: null, departureDate: null, requiredDocuments: null, trainingCompleted: null, languagePreparation: null, checklistCompletion: null },
    },
  ] as CandidateRecord[],
  enteredMissionField: {
    id: 'xyanne-abat', fullName: 'Xyanne Mejia Abat', ward: 'Don Antonio Ward', gender: 'Not reported', age: null,
    missionType: 'Not reported', status: 'Mission Call Accepted' as CandidateStatus, stage: 'Serving in Mission Field', recommendationStarted: null,
    daysInStage: null, mission: 'Madagascar Antananarivo North Mission', missionStart: 'August 6, 2026', expectedRelease: 'February 2, 2028',
    futureReadiness: { passportStatus: null, medicalClearance: null, dentalClearance: null, templeRecommendStatus: null, endowmentCompleted: null, visaStatus: null, mtcDate: null, departureDate: null, requiredDocuments: null, trainingCompleted: null, languagePreparation: null, checklistCompletion: null },
  } as CandidateRecord,
  returnedMissionaries: [] as Array<{ id: string; name: string; ward: string; mission: string; missionStart: string; missionEnd: string; missionLength: string }>,
  insights: [
    'Batasan Hills 2nd currently has the highest number of missionary candidates (8).',
    'Fairview has six candidates preparing for missionary service.',
    'Twenty-two missionaries are currently serving.',
    'Six recommendations are awaiting Stake President approval.',
    'One missionary has already received a mission assignment.',
    'Only two missionary recommendations have been canceled, indicating a strong completion rate.',
  ],
} as const
