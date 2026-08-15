export type MilestoneStatus = 'completed' | 'in-progress' | 'not-started' | 'not-applicable'

export type Milestone = {
  id: string
  label: string
  category: string
}

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
  { id: 'confirmation', label: 'Confirmation', category: 'Church Membership' },
  { id: 'membership-months', label: 'Months of Church Membership', category: 'Church Membership' },
  { id: 'temple-recommend', label: 'Temple Recommend for Proxy Baptisms and Confirmation', category: 'Temple' },
  { id: 'ancestor-ordinances', label: 'Help Ancestors Receive Sacred Ordinances', category: 'Temple' },
  { id: 'temple-prep', label: 'Temple Preparation Class', category: 'Temple' },
  { id: 'endowment', label: 'Receive Your Endowment', category: 'Temple' },
  { id: 'sealing', label: 'Be Sealed to Your Family', category: 'Temple' },
  { id: 'aaronic', label: 'Aaronic Priesthood Ordination', category: 'Priesthood' },
  { id: 'melchizedek-learn', label: 'Learn about the Melchizedek Priesthood', category: 'Priesthood' },
  { id: 'melchizedek', label: 'Melchizedek Priesthood Ordination', category: 'Priesthood' },
  { id: 'patriarchal', label: 'Receive a Patriarchal Blessing', category: 'Gospel Growth' },
  { id: 'gospel-study', label: 'Improve Gospel Study', category: 'Gospel Growth' },
  { id: 'home-evening', label: 'Participate in a Home Evening', category: 'Gospel Growth' },
  { id: 'discouragement', label: 'Overcome Discouragement and Setbacks', category: 'Gospel Growth' },
  { id: 'self-reliant', label: 'Be Self-Reliant', category: 'Gospel Growth' },
  { id: 'ward-friends', label: 'Make Friends with Members of Your Ward', category: 'Church Participation' },
  { id: 'serve', label: 'Serve Others', category: 'Church Participation' },
  { id: 'share-gospel', label: 'Share the Gospel', category: 'Church Participation' },
  { id: 'sabbath', label: 'Keep the Sabbath Day Holy', category: 'Church Participation' },
  { id: 'prophet', label: 'Follow the Prophet', category: 'Church Participation' },
  { id: 'commandments', label: 'Obey the Commandments', category: 'Church Participation' },
  { id: 'young-men', label: 'Young Men', category: 'Organization Participation' },
  { id: 'young-women', label: 'Young Women', category: 'Organization Participation' },
  { id: 'relief-society', label: 'Relief Society', category: 'Organization Participation' },
  { id: 'primary', label: 'Primary', category: 'Organization Participation' },
  { id: 'daily-scripture-study', label: 'Daily Scripture Study', category: 'Gospel Growth' },
  { id: 'daily-prayer', label: 'Daily Prayer', category: 'Gospel Growth' },
  { id: 'seminary-institute', label: 'Seminary/Institute', category: 'Gospel Growth' },
  { id: 'mission-preparation', label: 'Mission Preparation Class', category: 'Gospel Growth' },
  { id: 'self-reliance', label: 'Self Reliance Class', category: 'Gospel Growth' },
  { id: 'emotional-resiliency', label: 'Emotional Resiliency Class', category: 'Gospel Growth' },
  { id: 'receive-calling', label: 'Receive a calling', category: 'Gospel Growth' },
  { id: 'word-of-wisdom', label: 'Word of Wisdom', category: 'Church Participation' },
  { id: 'law-of-chastity', label: 'Law of Chastity', category: 'Church Participation' },
  { id: 'tithing-fast-offering', label: 'Law of Tithing and Fast Offering', category: 'Church Participation' },
  { id: 'attend-ward-activity', label: 'Attend Ward Activity', category: 'Organization Participation' },
  { id: 'stake-activity', label: 'Stake Activity', category: 'Organization Participation' },
  { id: 'family-history-activity', label: 'Family History Activity', category: 'Organization Participation' },
  { id: 'temple-activity', label: 'Temple Activity', category: 'Organization Participation' },
  { id: 'missionary-work-activity', label: 'Missionary Work Activity', category: 'Organization Participation' },
  { id: 'community-service', label: 'Community Service Project', category: 'Organization Participation' },
  { id: 'family-home-evening', label: 'Participate in Family Home Evening', category: 'Gospel Growth' },
]

const wardRows: Array<[string, string[]]> = [
  ['Batasan Hills 1st', [
    'Baluyot, Elias|M|13', 'Carillo, Arius|M|9', 'Cereño Lapido, Jai Lei|F|9', 'Chin Andria Basilio|F|8', 'Laurel, Rizalina Niagas|F|66', 'Liguan, June Lexian Lorico|F|10', 'Liguan, Lurk Vixen Lorico|F|13', 'Malate, Hezekiah|M|10', 'Malate, Ranel M.|M|33', 'Metran, Franchesca|F|12', 'Metran, Jerain|M|20', 'Metran, Jermagne Sabugar|F|19', 'Sabugar Metran, Flora|F|39', 'Shaya Carillo|F|8', 'Tagalog, Francel Nacionales|F|20', 'Tagalog, Franchesca Marie Nacionales|F|11', 'Tagalog, Franck Nacionales|M|15', 'Tagalog, Franky Marie Nacionales|F|23', 'Tagalog Jr., Francisco Sorita|M|61', 'Toledo, Sophia Kim|F|15', 'Yamson, Rhian Jane|F|19', 'Yanila, Jay-ar Relis|M|25',
  ]],
  ['Batasan Hills 2nd', [
    'Aldaya, Leona Jane|F|9', 'Antonio, Angilica Hofiliña Mendoza|F|37', 'Autor, Jenna|F|12', 'Basada, Conner Cañete|M|11', 'Calbitaza, Andrei|M|9', 'Clores, Prince Harry Iñigo|M|10', 'Dela Cruz, John Philip Motita|M|10', 'Flores, Marlon Jarabejo|M|38', 'Huete, Merian Claire Deldacan|F|18', 'Khan Jr., Michael Angelo Clores|M|12', 'Mañozo, Lido Jr.|M|27', 'Pascua Ramos, Ofelia|F|76', 'Sunajo, Joey Pineda|M|50',
  ]],
  ['Bagong Silangan', [
    'Amor, Genalyn|F|34', 'Aying, Vivian|F|45', 'Briones, Ma. Janna Quilicol|F|22', 'Cabador, Franzhys Justo|M|17', 'Flores, Alexis Almirol|M|18', 'Inoncillo, Terenel|M|12', 'Martinez, Aixen Raile Bantiling|M|9', 'Millapes, Princess Savannah|F|9', 'Pardiñas, Quinn Via|F|10', 'Ped, Arlyn|F|14', 'Porras, April Joy|F|33', 'Quares, Rodesh|M|13', 'Sarahan, Erwin|M|46', 'Torres, Jeremy|M|23',
  ]],
  ['Don Antonio', [
    'Cabigayan, Demetrio Altaque|M|86', 'Estrada, Bryan Anthony Ruiz|M|32', 'Faina, Ram Calvin Ratuita|M|12', 'Montes, Juanito Cabunilas|M|65', 'Paligar, Kris Arjane Yuhan|M|15', 'Perez, Amelia Cail Santos|F|18',
  ]],
  ['Fairview', [
    'Agaid, Renato|M|76', 'Agaid, Rosalinda Gapol|F|55', 'Balanza, Louriese Agapan|F|9', 'Bendanillo, Kristine Baring|F|51', 'Buloran, Fiona Tanael|F|15', 'Cabcaban, Mae Rose|F|48', 'Espineda, Claire Jean Dicen|F|13', 'Fuensalida, Connie|F|39', 'Fuensalida, Darryl Gabe|M|12', 'Goco, Christopher John Guerero|M|46', 'Hermoso, Angel Mae Calledo|F|16', 'Ignas, Rafael Beboso|M|75', 'Jereza, Prince Josh Pestaño|M|10', 'Joban, Merlinda Fresnido|F|58', 'Maglente, Angela Modar|F|11', 'Mercado, Erlin Engo|F|63', 'Navarez, Zeus|M|9', 'Padua, Julie Nisperos|F|38', 'Paloma, Angela|F|13', 'Paloma, Jamaica Lampas|F|17', 'Pestaño, Calvin Baguinbuin|M|10', 'Pestaño, Hanna Eunice|F|13', 'Pontillo, Ma. Allysa Mae Gabuya|F|15', 'Pontillo, Ma. Althea Mae Gabuya|F|13', 'Racan, Jefferson Saturñino|M|29', 'Rocero, Ma. Chona Gadlan|F|54', 'Salas, Ma. Jocelyn Pamanian|F|17', 'Samar, Eduardo Beriña|M|66', 'Santos, Joshua Alquiza|M|10', 'Taconing, Melka|F|19', 'Tapia, Jeric Amodia|M|21',
  ]],
  ['Kalayaan', [
    'Abilar, Brent Cedric Adapon|M|17', 'Baro, Lhyra Cerbito|F|11', 'Calicdan, Kiesha Janella Ruado|F|8', 'Ere, Lea Maine|F|10', 'Erie, Kurtnel Hermosura|M|8', 'Gerundio, Hermogenes Cano Sr|M|65', 'Matuguinas, Yolly|F|41', 'Quetua, Judith Usero|F|66', 'Revilla, Dinah Rose Quinikito|F|11', 'Rivera, Stephen Roy|M|15', 'Sureta, Jerolyn Vibal|F|9', 'Trinidad, Clyde|M|10', 'Trinidad, Czarina Alessandra|F|16',
  ]],
  ['Mapayapa', [
    'Abayon, Thea|F|15', 'Altiche, Reinna Medina|F|9', 'Cruzata, DJ Arci|F|14', 'Demetillo, Edmar Bañaco|M|43', 'Fernandez, Ronielyn Nerbato|F|21', 'Forio, Jezil Castillo|F|23', 'Mengote, Arkyn Zion Baleña|M|10', 'Merced, John Christianeil Madriaga|M|20', 'Merced, Precious Waesha|F|15', 'Morales, Jhenalyn Mhae|F|11', 'Navarro, Fairy Jane Cuartela|F|10', 'Nerbato, Prince RJ|M|9', 'Ong, Letticia Reyes|F|64', 'Ruelo, Callie Brielle Wenceslao|F|13', 'Ruelo, Keith Gabrielle Wenceslao|M|12',
  ]],
]

export const convertRoster: ConvertRecord[] = wardRows.flatMap(([ward, rows]) => rows.map((row, index) => {
  const [name, gender, age] = row.split('|')
  return {
    id: `${ward.toLowerCase().replaceAll(' ', '-')}-${index + 1}`,
    name,
    gender: gender as 'M' | 'F',
    age: Number(age),
    ward,
    confirmationDate: 'Not reported',
    monthsMembership: null,
  }
}))

export function createDefaultProgress(): MilestoneProgress[] {
  return milestoneTemplate.map((milestone) => ({
    ...milestone,
    status: 'not-started',
    completionDate: '',
    notes: '',
    assignedLeader: '',
    nextFollowUpDate: '',
  }))
}
