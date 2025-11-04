import { Match } from '@/types/hockey';

export const matches: Match[] = [
  {
    id: 1,
    date: '2 ноября',
    time: '15:00',
    homeTeam: 'ХИМИК',
    awayTeam: 'БАРЫС',
    homeLogo: 'https://cdn.poehali.dev/files/78549bc1-6eff-42f9-9d52-2b0cb4954893.png',
    awayLogo: '🐆',
    status: 'scheduled',
    arena: 'Ледовая арена Резекне (2 020)'
  },
  {
    id: 2,
    date: '2 ноября',
    time: '16:00',
    homeTeam: 'БУРАН',
    awayTeam: 'НЕФТЕХИМИК',
    homeLogo: '🌪️',
    awayLogo: '🐺',
    status: 'scheduled'
  },
  {
    id: 3,
    date: '2 ноября',
    time: '17:00',
    homeTeam: 'РЯЗАНЬ',
    awayTeam: 'АКМ',
    homeLogo: '🪂',
    awayLogo: '🎯',
    status: 'scheduled'
  },
  {
    id: 4,
    date: '3 ноября',
    time: '16:00',
    homeTeam: 'СПАРТАК',
    awayTeam: 'ЮГРА',
    homeLogo: '🔴',
    awayLogo: '🐯',
    status: 'scheduled'
  },
  {
    id: 5,
    date: '3 ноября',
    time: '16:45',
    homeTeam: 'ДИНАМО М',
    awayTeam: 'ЧЕЛНЫ',
    homeLogo: '⚡',
    awayLogo: '🚢',
    status: 'scheduled'
  },
  {
    id: 6,
    date: '3 ноября',
    time: '17:30',
    homeTeam: 'ВИТЯЗЬ',
    awayTeam: 'ДРАКОНЫ',
    homeLogo: '⚔️',
    awayLogo: '🐉',
    status: 'scheduled'
  },
  {
    id: 7,
    date: '3 ноября',
    time: '18:15',
    homeTeam: 'ГОРНЯК',
    awayTeam: 'ДИЗЕЛЬ',
    homeLogo: '⛏️',
    awayLogo: '⚙️',
    status: 'scheduled'
  },
  {
    id: 8,
    date: '3 ноября',
    time: '19:00',
    homeTeam: 'ЦСК ВВС',
    awayTeam: 'ИЖСТАЛЬ',
    homeLogo: '✈️',
    awayLogo: '🔥',
    status: 'scheduled'
  },
  {
    id: 9,
    date: '1 ноября',
    time: '12:00',
    homeTeam: 'Резекне',
    awayTeam: 'Юрмала',
    homeLogo: '🏒',
    awayLogo: '🏒',
    homeScore: 0,
    awayScore: 5,
    status: 'finished',
    arena: 'г. Резекне, арена Ледовая арена Резекне (2 020)',
    period: 'Генератор 3 🥅',
    timeline: [
      { period: 1, homeGoals: 0, awayGoals: 1 },
      { period: 2, homeGoals: 0, awayGoals: 2 },
      { period: 3, homeGoals: 0, awayGoals: 2 }
    ],
    homeScorers: [],
    awayScorers: [
      { time: '6', player: 'Мединс' },
      { time: '17', player: 'Лукашевич' },
      { time: '31', player: 'Попель' },
      { time: '28', player: 'Лукашевич' },
      { time: '57', player: 'Незнамов' }
    ]
  }
];