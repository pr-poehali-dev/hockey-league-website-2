import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Match } from '@/types/hockey';

interface MatchDialogProps {
  match: Match | null;
  onClose: () => void;
}

export default function MatchDialog({ match, onClose }: MatchDialogProps) {
  if (!match) return null;

  return (
    <Dialog open={!!match} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center">
            <div className="text-sm text-muted-foreground mb-2">{match.arena}</div>
            <Badge variant="secondary" className="text-xs">
              {match.period || 'Расписание'}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-card/50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                {match.homeLogo.startsWith('http') ? (
                  <img src={match.homeLogo} alt={match.homeTeam} className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto mb-3" />
                ) : (
                  <div className="text-5xl mb-3">{match.homeLogo}</div>
                )}
                <div className="font-bold text-lg">{match.homeTeam}</div>
                <div className="text-sm text-muted-foreground">Латвия 🇱🇻</div>
              </div>

              {match.status === 'finished' ? (
                <div className="flex items-center gap-3 mx-8">
                  <div className="scoreboard-digit px-6 py-4 rounded-lg">
                    <div className="text-5xl font-black text-accent">{match.homeScore}</div>
                  </div>
                  <div className="text-3xl text-muted-foreground">:</div>
                  <div className="scoreboard-digit px-6 py-4 rounded-lg">
                    <div className="text-5xl font-black text-accent">{match.awayScore}</div>
                  </div>
                </div>
              ) : (
                <div className="text-center mx-8">
                  <div className="text-3xl font-black text-accent mb-1">{match.time}</div>
                  <div className="text-sm text-muted-foreground">{match.date}</div>
                </div>
              )}

              <div className="text-center flex-1">
                {match.awayLogo.startsWith('http') ? (
                  <img src={match.awayLogo} alt={match.awayTeam} className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto mb-3" />
                ) : (
                  <div className="text-5xl mb-3">{match.awayLogo}</div>
                )}
                <div className="font-bold text-lg">{match.awayTeam}</div>
                <div className="text-sm text-muted-foreground">Латвия 🇱🇻</div>
              </div>
            </div>
          </div>

          {match.timeline && (
            <div className="bg-card/50 rounded-xl p-6">
              <h3 className="font-bold mb-4 text-center">СЧЕТ ПО ПЕРИОДАМ</h3>
              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  {match.timeline.map((period, idx) => (
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
                  {match.timeline.map((period, idx) => (
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

          {match.status === 'finished' && (
            <div className="grid md:grid-cols-2 gap-4">
              {match.homeScorers && match.homeScorers.length > 0 && (
                <div className="bg-card/50 rounded-xl p-4">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <span className="text-2xl">{match.homeLogo}</span>
                    Голы
                  </h4>
                  <div className="space-y-2">
                    {match.homeScorers.map((scorer, idx) => (
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

              {match.awayScorers && match.awayScorers.length > 0 && (
                <div className="bg-card/50 rounded-xl p-4">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <span className="text-2xl">{match.awayLogo}</span>
                    Голы
                  </h4>
                  <div className="space-y-2">
                    {match.awayScorers.map((scorer, idx) => (
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
      </DialogContent>
    </Dialog>
  );
}
