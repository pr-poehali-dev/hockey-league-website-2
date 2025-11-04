import { Badge } from '@/components/ui/badge';
import { Match } from '@/types/hockey';
import MatchCard from './MatchCard';

interface ScheduleTabProps {
  matches: Match[];
  onMatchClick: (match: Match) => void;
}

export default function ScheduleTab({ matches, onMatchClick }: ScheduleTabProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-black text-accent">РАСПИСАНИЕ</h2>
        <Badge variant="secondary" className="text-sm font-bold">ТХЛ • 3 ТУР</Badge>
      </div>

      {['2 ноября', '3 ноября'].map((date) => (
        <div key={date} className="space-y-3">
          <h3 className="text-xl font-bold text-primary uppercase tracking-wide">{date}</h3>
          <div className="grid gap-3">
            {matches
              .filter((match) => match.date === date)
              .map((match) => (
                <MatchCard key={match.id} match={match} onClick={onMatchClick} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
