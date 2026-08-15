export interface StakeGoalRecord {
  ward: string
  // Come Unto Christ
  sacramentAttendance: number
  convertBaptismGoal: number
  // Make and Keep Temple Covenants
  totalEndowed: number
  endowedWithTempleRecommend: number
  templeRecommendPercent: number
  // Strengthening the Rising Generation
  currentMissionaryCandidates: number
  goal: number
  toGo: number
  // 2026 Focus Goals
  reactivation: number
  newConvertCalling: number
  templeFamilyHistory: number
  priesthoodOrdination: number
  ministeringRS: number
  ministeringEQ: number
}

export const editableFields: Array<keyof StakeGoalRecord> = [
  'convertBaptismGoal',
  'currentMissionaryCandidates',
  'goal',
  'toGo',
  'reactivation',
  'newConvertCalling',
  'templeFamilyHistory',
  'priesthoodOrdination',
  'ministeringRS',
  'ministeringEQ',
]

export const stakeGoalsData: StakeGoalRecord[] = [
  { ward: 'Bagong Silangan Ward', sacramentAttendance: 98, convertBaptismGoal: 0, totalEndowed: 71, endowedWithTempleRecommend: 44, templeRecommendPercent: 0.62, currentMissionaryCandidates: 1, goal: 0, toGo: 0, reactivation: 0, newConvertCalling: 0, templeFamilyHistory: 0, priesthoodOrdination: 0, ministeringRS: 0, ministeringEQ: 0 },
  { ward: 'Batasan Hills 1st Ward', sacramentAttendance: 107, convertBaptismGoal: 0, totalEndowed: 73, endowedWithTempleRecommend: 47, templeRecommendPercent: 0.64, currentMissionaryCandidates: 0, goal: 0, toGo: 0, reactivation: 0, newConvertCalling: 0, templeFamilyHistory: 0, priesthoodOrdination: 0, ministeringRS: 0, ministeringEQ: 0 },
  { ward: 'Batasan Hills 2nd Ward', sacramentAttendance: 127, convertBaptismGoal: 0, totalEndowed: 78, endowedWithTempleRecommend: 58, templeRecommendPercent: 0.74, currentMissionaryCandidates: 8, goal: 0, toGo: 0, reactivation: 0, newConvertCalling: 0, templeFamilyHistory: 0, priesthoodOrdination: 0, ministeringRS: 0, ministeringEQ: 0 },
  { ward: 'Don Antonio Ward', sacramentAttendance: 155, convertBaptismGoal: 0, totalEndowed: 99, endowedWithTempleRecommend: 63, templeRecommendPercent: 0.64, currentMissionaryCandidates: 1, goal: 0, toGo: 0, reactivation: 0, newConvertCalling: 0, templeFamilyHistory: 0, priesthoodOrdination: 0, ministeringRS: 0, ministeringEQ: 0 },
  { ward: 'Fairview Ward', sacramentAttendance: 144, convertBaptismGoal: 0, totalEndowed: 104, endowedWithTempleRecommend: 64, templeRecommendPercent: 0.62, currentMissionaryCandidates: 6, goal: 0, toGo: 0, reactivation: 0, newConvertCalling: 0, templeFamilyHistory: 0, priesthoodOrdination: 0, ministeringRS: 0, ministeringEQ: 0 },
  { ward: 'Kalayaan Ward', sacramentAttendance: 205, convertBaptismGoal: 0, totalEndowed: 124, endowedWithTempleRecommend: 88, templeRecommendPercent: 0.71, currentMissionaryCandidates: 4, goal: 0, toGo: 0, reactivation: 0, newConvertCalling: 0, templeFamilyHistory: 0, priesthoodOrdination: 0, ministeringRS: 0, ministeringEQ: 0 },
  { ward: 'Mapayapa Ward', sacramentAttendance: 130, convertBaptismGoal: 0, totalEndowed: 73, endowedWithTempleRecommend: 57, templeRecommendPercent: 0.78, currentMissionaryCandidates: 2, goal: 0, toGo: 0, reactivation: 0, newConvertCalling: 0, templeFamilyHistory: 0, priesthoodOrdination: 0, ministeringRS: 0, ministeringEQ: 0 },
]

// Fixed totals for read-only columns (sourced from LCR reports, not user-editable)
export const readOnlyTotals = {
  sacramentAttendance: 966,
  totalEndowed: 622,
  endowedWithTempleRecommend: 421,
  templeRecommendPercent: 0.68,
}

