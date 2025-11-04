import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Match } from '@/types/hockey';

interface MatchCardProps {
  match: Match;
  onClick: (match: Match) => void;
}

export default function MatchCard({ match, onClick }: MatchCardProps) {
  return (
    <Card
      className="hover:bg-accent/5 transition-all cursor-pointer border-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
      onClick={() => onClick(match)}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            {match.homeLogo.startsWith('http') ? (
              <img src={match.homeLogo} alt={match.homeTeam} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            ) : (
              <div className="text-2xl md:text-3xl">{match.homeLogo}</div>
            )}
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
            {match.awayLogo.startsWith('http') ? (
              <img src={match.awayLogo} alt={match.awayTeam} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            ) : (
              <div className="text-2xl md:text-3xl">{match.awayLogo}</div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
