export interface Team {
  id: number;
  name: string;
  logo: string;
  games: number;
  wins: number;
  overtime: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  diff: number;
  points: number;
}

export interface Match {
  id: number;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  homeScore?: number;
  awayScore?: number;
  status: 'scheduled' | 'live' | 'finished';
  arena?: string;
  period?: string;
  timeline?: {
    period: number;
    homeGoals: number;
    awayGoals: number;
  }[];
  homeScorers?: { time: string; player: string }[];
  awayScorers?: { time: string; player: string }[];
}
