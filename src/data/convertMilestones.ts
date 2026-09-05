export type MilestoneStatus = 'completed' | 'in-progress' | 'not-started' | 'not-applicable'

export type Milestone = { id: string; label: string; category: string }

export type MilestoneProgress = Milestone & {
  status: MilestoneStatus
  completionDate: string
  notes: string
  assignedLeader: string
  nextFollowUpDate: string
}

export type ConvertRecord = {
  id: string
  name: string
  gender: 'M' | 'F'
  age: number
  ward: string
  confirmationDate: string
  monthsMembership: number | null
}

export const milestoneTemplate: Milestone[] = [
  { id: 'confirmation', label: 'Confirmation', category: 'Church Membership' }, { id: 'membership-months', label: 'Months of Church Membership', category: 'Church Membership' }, { id: 'temple-recommend', label: 'Temple Recommend for Proxy Baptisms and Confirmation', category: 'Temple' }, { id: 'ancestor-ordinances', label: 'Help Ancestors Receive Sacred Ordinances', category: 'Temple' }, { id: 'temple-prep', label: 'Temple Preparation Class', category: 'Temple' }, { id: 'endowment', label: 'Receive Your Endowment', category: 'Temple' }, { id: 'sealing', label: 'Be Sealed to Your Family', category: 'Temple' }, { id: 'aaronic', label: 'Aaronic Priesthood Ordination', category: 'Priesthood' }, { id: 'melchizedek-learn', label: 'Learn about the Melchizedek Priesthood', category: 'Priesthood' }, { id: 'melchizedek', label: 'Melchizedek Priesthood Ordination', category: 'Priesthood' }, { id: 'patriarchal', label: 'Receive a Patriarchal Blessing', category: 'Gospel Growth' }, { id: 'gospel-study', label: 'Improve Gospel Study', category: 'Gospel Growth' }, { id: 'home-evening', label: 'Participate in a Home Evening', category: 'Gospel Growth' }, { id: 'discouragement', label: 'Overcome Discouragement and Setbacks', category: 'Gospel Growth' }, { id: 'self-reliant', label: 'Be Self-Reliant', category: 'Gospel Growth' }, { id: 'ward-friends', label: 'Make Friends with Members of Your Ward', category: 'Church Participation' }, { id: 'serve', label: 'Serve Others', category: 'Church Participation' }, { id: 'share-gospel', label: 'Share the Gospel', category: 'Church Participation' }, { id: 'sabbath', label: 'Keep the Sabbath Day Holy', category: 'Church Participation' }, { id: 'prophet', label: 'Follow the Prophet', category: 'Church Participation' }, { id: 'commandments', label: 'Obey the Commandments', category: 'Church Participation' }, { id: 'young-men', label: 'Young Men', category: 'Organization Participation' }, { id: 'young-women', label: 'Young Women', category: 'Organization Participation' }, { id: 'relief-society', label: 'Relief Society', category: 'Organization Participation' }, { id: 'primary', label: 'Primary', category: 'Organization Participation' }, { id: 'daily-scripture-study', label: 'Daily Scripture Study', category: 'Gospel Growth' }, { id: 'daily-prayer', label: 'Daily Prayer', category: 'Gospel Growth' }, { id: 'seminary-institute', label: 'Seminary/Institute', category: 'Gospel Growth' }, { id: 'mission-preparation', label: 'Mission Preparation Class', category: 'Gospel Growth' }, { id: 'self-reliance', label: 'Self Reliance Class', category: 'Gospel Growth' }, { id: 'emotional-resiliency', label: 'Emotional Resiliency Class', category: 'Gospel Growth' }, { id: 'receive-calling', label: 'Receive a calling', category: 'Gospel Growth' }, { id: 'word-of-wisdom', label: 'Word of Wisdom', category: 'Church Participation' }, { id: 'law-of-chastity', label: 'Law of Chastity', category: 'Church Participation' }, { id: 'tithing-fast-offering', label: 'Law of Tithing and Fast Offering', category: 'Church Participation' }, { id: 'attend-ward-activity', label: 'Attend Ward Activity', category: 'Organization Participation' }, { id: 'stake-activity', label: 'Stake Activity', category: 'Organization Participation' }, { id: 'family-history-activity', label: 'Family History Activity', category: 'Organization Participation' }, { id: 'temple-activity', label: 'Temple Activity', category: 'Organization Participation' }, { id: 'missionary-work-activity', label: 'Missionary Work Activity', category: 'Organization Participation' }, { id: 'community-service', label: 'Community Service Project', category: 'Organization Participation' }, { id: 'family-home-evening', label: 'Participate in Family Home Evening', category: 'Gospel Growth' },
]

export function createDefaultProgress(): MilestoneProgress[] {
  return milestoneTemplate.map((milestone) => ({ ...milestone, status: 'not-started', completionDate: '', notes: '', assignedLeader: '', nextFollowUpDate: '' }))
}