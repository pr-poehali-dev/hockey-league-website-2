import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Team {
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

interface Match {
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

const teams: Team[] = [
  { id: 1, name: 'РЯЗАНЬ-ВДВ', logo: '🪂', games: 2, wins: 2, overtime: 0, losses: 0, goalsFor: 10, goalsAgainst: 2, diff: 8, points: 6 },
  { id: 2, name: 'ДИНАМО М', logo: '⚡', games: 2, wins: 2, overtime: 0, losses: 0, goalsFor: 14, goalsAgainst: 7, diff: 7, points: 6 },
  { id: 3, name: 'БУРАН', logo: '🌪️', games: 2, wins: 2, overtime: 1, losses: 0, goalsFor: 9, goalsAgainst: 5, diff: 4, points: 5 },
  { id: 4, name: 'ДРАКОНЫ', logo: '🐉', games: 2, wins: 2, overtime: 1, losses: 0, goalsFor: 6, goalsAgainst: 3, diff: 3, points: 5 },
  { id: 5, name: 'ЧЕЛНЫ', logo: '🚢', games: 2, wins: 1, overtime: 1, losses: 1, goalsFor: 7, goalsAgainst: 5, diff: 2, points: 4 },
  { id: 6, name: 'ГОРНЯК', logo: '⛏️', games: 2, wins: 1, overtime: 0, losses: 1, goalsFor: 7, goalsAgainst: 4, diff: 3, points: 3 },
  { id: 7, name: 'НЕФТЕХИМИК', logo: '🐺', games: 2, wins: 1, overtime: 0, losses: 1, goalsFor: 7, goalsAgainst: 6, diff: 1, points: 3 },
  { id: 8, name: 'ВИТЯЗЬ', logo: '⚔️', games: 2, wins: 1, overtime: 0, losses: 1, goalsFor: 9, goalsAgainst: 9, diff: 0, points: 3 },
  { id: 9, name: 'ХИМИК', logo: '🧪', games: 2, wins: 1, overtime: 0, losses: 1, goalsFor: 4, goalsAgainst: 4, diff: 0, points: 3 },
  { id: 10, name: 'ЦСК ВВС', logo: '✈️', games: 2, wins: 1, overtime: 0, losses: 1, goalsFor: 5, goalsAgainst: 7, diff: -2, points: 3 },
  { id: 11, name: 'ИЖСТАЛЬ', logo: '🔥', games: 2, wins: 1, overtime: 1, losses: 1, goalsFor: 3, goalsAgainst: 5, diff: -2, points: 2 },
  { id: 12, name: 'СПАРТАК', logo: '🔴', games: 2, wins: 1, overtime: 1, losses: 1, goalsFor: 7, goalsAgainst: 11, diff: -4, points: 2 },
  { id: 13, name: 'БАРЫС', logo: '🐆', games: 2, wins: 0, overtime: 1, losses: 2, goalsFor: 5, goalsAgainst: 8, diff: -3, points: 1 },
  { id: 14, name: 'АКМ', logo: '🎯', games: 2, wins: 0, overtime: 1, losses: 2, goalsFor: 7, goalsAgainst: 13, diff: -6, points: 1 },
  { id: 15, name: 'ДИЗЕЛЬ', logo: '⚙️', games: 2, wins: 0, overtime: 1, losses: 2, goalsFor: 4, goalsAgainst: 9, diff: -5, points: 1 },
  { id: 16, name: 'ЮГРА', logo: '🐯', games: 2, wins: 0, overtime: 0, losses: 2, goalsFor: 2, goalsAgainst: 8, diff: -6, points: 0 }
];

const matches: Match[] = [
  {
    id: 1,
    date: '2 ноября',
    time: '15:00',
    homeTeam: 'ХИМИК',
    awayTeam: 'БАРЫС',
    homeLogo: '🧪',
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

export default function Index() {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [activeTab, setActiveTab] = useState('schedule');

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🏒</div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-accent">THL</h1>
                <p className="text-xs text-muted-foreground">Террористская Хоккейная Лига</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <button
                onClick={() => setActiveTab('schedule')}
                className={`font-semibold transition-colors ${
                  activeTab === 'schedule' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Расписание
              </button>
              <button
                onClick={() => setActiveTab('table')}
                className={`font-semibold transition-colors ${
                  activeTab === 'table' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Таблица
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full md:hidden mb-6">
            <TabsTrigger value="schedule" className="flex-1">Расписание</TabsTrigger>
            <TabsTrigger value="table" className="flex-1">Таблица</TabsTrigger>
          </TabsList>

          <TabsContent value="schedule" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-black text-accent">РАСПИСАНИЕ</h2>
              <Badge variant="secondary" className="text-sm font-bold">ТХЛ • 3 ТУР</Badge>
            </div>

            {['2 ноября', '3 ноября', '1 ноября'].map((date) => (
              <div key={date} className="space-y-3">
                <h3 className="text-xl font-bold text-primary uppercase tracking-wide">{date}</h3>
                <div className="grid gap-3">
                  {matches
                    .filter((match) => match.date === date)
                    .map((match) => (
                      <Card
                        key={match.id}
                        className="hover:bg-accent/5 transition-all cursor-pointer border-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                        onClick={() => setSelectedMatch(match)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3 flex-1">
                              <div className="text-2xl md:text-3xl">{match.homeLogo}</div>
                              <div className="font-bold text-sm md:text-base">{match.homeTeam}</div>
                            </div>

                            {match.status === 'finished' ? (
                              <div className="flex items-center gap-2 px-4 py-2 bg-card/80 rounded-lg">
                                <div className="scoreboard-digit px-3 py-1 rounded font-black text-2xl text-accent">
                                  {match.homeScore}
                                </div>
                                <div className="text-muted-foreground">:</div>
                                <div className="scoreboard-digit px-3 py-1 rounded font-black text-2xl text-accent">
                                  {match.awayScore}
                                </div>
                              </div>
                            ) : (
                              <div className="text-center px-4">
                                <div className="text-lg md:text-xl font-bold text-accent">{match.time}</div>
                                {match.status === 'live' && (
                                  <Badge variant="destructive" className="text-xs">
                                    LIVE
                                  </Badge>
                                )}
                              </div>
                            )}

                            <div className="flex items-center gap-3 flex-1 justify-end">
                              <div className="font-bold text-sm md:text-base text-right">{match.awayTeam}</div>
                              <div className="text-2xl md:text-3xl">{match.awayLogo}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="table">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-black text-accent">ТУРНИРНАЯ ТАБЛИЦА</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 text-xs md:text-sm font-bold text-muted-foreground">№</th>
                    <th className="text-left p-3 text-xs md:text-sm font-bold text-muted-foreground">КЛУБ</th>
                    <th className="text-center p-3 text-xs md:text-sm font-bold text-muted-foreground">И</th>
                    <th className="text-center p-3 text-xs md:text-sm font-bold text-muted-foreground">В</th>
                    <th className="text-center p-3 text-xs md:text-sm font-bold text-muted-foreground">О/Б</th>
                    <th className="text-center p-3 text-xs md:text-sm font-bold text-muted-foreground">П</th>
                    <th className="text-center p-3 text-xs md:text-sm font-bold text-muted-foreground">РАЗ</th>
                    <th className="text-center p-3 text-xs md:text-sm font-bold text-muted-foreground">+/-</th>
                    <th className="text-center p-3 text-xs md:text-sm font-bold text-muted-foreground">ОЧ</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((team, index) => (
                    <tr
                      key={team.id}
                      className={`border-b border-border/50 hover:bg-accent/5 transition-colors ${
                        index < 4 ? 'bg-primary/5' : ''
                      }`}
                    >
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-muted-foreground">{index + 1}</span>
                          {index < 5 && <Icon name="TrendingUp" size={14} className="text-green-500" />}
                          {index >= 13 && <Icon name="TrendingDown" size={14} className="text-red-500" />}
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{team.logo}</div>
                          <span className="font-bold text-sm md:text-base">{team.name}</span>
                        </div>
                      </td>
                      <td className="text-center p-3 text-sm">{team.games}</td>
                      <td className="text-center p-3 text-sm">{team.wins}</td>
                      <td className="text-center p-3 text-sm">{team.overtime}</td>
                      <td className="text-center p-3 text-sm">{team.losses}</td>
                      <td className="text-center p-3 text-sm">
                        {team.goalsFor}-{team.goalsAgainst}
                      </td>
                      <td className="text-center p-3 text-sm">
                        <span className={team.diff > 0 ? 'text-green-500' : team.diff < 0 ? 'text-red-500' : ''}>
                          [{team.diff > 0 ? '+' : ''}
                          {team.diff}]
                        </span>
                      </td>
                      <td className="text-center p-3">
                        <span className="font-black text-lg text-accent">{team.points}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Dialog open={!!selectedMatch} onOpenChange={() => setSelectedMatch(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedMatch && (
            <>
              <DialogHeader>
                <DialogTitle className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">{selectedMatch.arena}</div>
                  <Badge variant="secondary" className="text-xs">
                    {selectedMatch.period || 'Расписание'}
                  </Badge>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div className="bg-card/50 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1">
                      <div className="text-5xl mb-3">{selectedMatch.homeLogo}</div>
                      <div className="font-bold text-lg">{selectedMatch.homeTeam}</div>
                      <div className="text-sm text-muted-foreground">Латвия 🇱🇻</div>
                    </div>

                    {selectedMatch.status === 'finished' ? (
                      <div className="flex items-center gap-3 mx-8">
                        <div className="scoreboard-digit px-6 py-4 rounded-lg">
                          <div className="text-5xl font-black text-accent">{selectedMatch.homeScore}</div>
                        </div>
                        <div className="text-3xl text-muted-foreground">:</div>
                        <div className="scoreboard-digit px-6 py-4 rounded-lg">
                          <div className="text-5xl font-black text-accent">{selectedMatch.awayScore}</div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center mx-8">
                        <div className="text-3xl font-black text-accent mb-1">{selectedMatch.time}</div>
                        <div className="text-sm text-muted-foreground">{selectedMatch.date}</div>
                      </div>
                    )}

                    <div className="text-center flex-1">
                      <div className="text-5xl mb-3">{selectedMatch.awayLogo}</div>
                      <div className="font-bold text-lg">{selectedMatch.awayTeam}</div>
                      <div className="text-sm text-muted-foreground">Латвия 🇱🇻</div>
                    </div>
                  </div>
                </div>

                {selectedMatch.timeline && (
                  <div className="bg-card/50 rounded-xl p-6">
                    <h3 className="font-bold mb-4 text-center">СЧЕТ ПО ПЕРИОДАМ</h3>
                    <div className="relative">
                      <div className="flex justify-between items-center mb-2">
                        {selectedMatch.timeline.map((period, idx) => (
                          <div key={idx} className="flex-1 text-center">
                            <div className="text-xs text-muted-foreground mb-1">{period.period} период</div>
                            <div className="flex items-center justify-center gap-2">
                              <span className="font-bold">{period.homeGoals}</span>
                              <span className="text-muted-foreground">:</span>
                              <span className="font-bold">{period.awayGoals}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden flex">
                        {selectedMatch.timeline.map((period, idx) => (
                          <div
                            key={idx}
                            className="flex-1"
                            style={{
                              background: `linear-gradient(to right, ${
                                period.homeGoals > period.awayGoals
                                  ? 'hsl(var(--primary))'
                                  : period.homeGoals < period.awayGoals
                                  ? 'hsl(var(--accent))'
                                  : 'hsl(var(--muted))'
                              } 0%, ${
                                period.homeGoals > period.awayGoals
                                  ? 'hsl(var(--primary))'
                                  : period.homeGoals < period.awayGoals
                                  ? 'hsl(var(--accent))'
                                  : 'hsl(var(--muted))'
                              } 100%)`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {selectedMatch.status === 'finished' && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedMatch.homeScorers && selectedMatch.homeScorers.length > 0 && (
                      <div className="bg-card/50 rounded-xl p-4">
                        <h4 className="font-bold mb-3 flex items-center gap-2">
                          <span className="text-2xl">{selectedMatch.homeLogo}</span>
                          Голы
                        </h4>
                        <div className="space-y-2">
                          {selectedMatch.homeScorers.map((scorer, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <Badge variant="outline" className="text-xs">
                                {scorer.time}'
                              </Badge>
                              <span>{scorer.player}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedMatch.awayScorers && selectedMatch.awayScorers.length > 0 && (
                      <div className="bg-card/50 rounded-xl p-4">
                        <h4 className="font-bold mb-3 flex items-center gap-2">
                          <span className="text-2xl">{selectedMatch.awayLogo}</span>
                          Голы
                        </h4>
                        <div className="space-y-2">
                          {selectedMatch.awayScorers.map((scorer, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <Badge variant="outline" className="text-xs">
                                {scorer.time}'
                              </Badge>
                              <span>{scorer.player}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
