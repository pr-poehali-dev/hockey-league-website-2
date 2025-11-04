import Icon from '@/components/ui/icon';
import { Team } from '@/types/hockey';

interface StandingsTabProps {
  teams: Team[];
}

export default function StandingsTab({ teams }: StandingsTabProps) {
  return (
    <div>
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
                    {team.logo.startsWith('http') ? (
                      <img src={team.logo} alt={team.name} className="w-8 h-8 object-contain" />
                    ) : (
                      <div className="text-2xl">{team.logo}</div>
                    )}
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
    </div>
  );
}
