import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Header from '@/components/Header';
import ScheduleTab from '@/components/ScheduleTab';
import StandingsTab from '@/components/StandingsTab';
import MatchDialog from '@/components/MatchDialog';
import { teams } from '@/data/teams';
import { matches } from '@/data/matches';
import { Match } from '@/types/hockey';

export default function Index() {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [activeTab, setActiveTab] = useState('schedule');

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full md:hidden mb-6">
            <TabsTrigger value="schedule" className="flex-1">Расписание</TabsTrigger>
            <TabsTrigger value="table" className="flex-1">Таблица</TabsTrigger>
          </TabsList>

          <TabsContent value="schedule">
            <ScheduleTab matches={matches} onMatchClick={setSelectedMatch} />
          </TabsContent>

          <TabsContent value="table">
            <StandingsTab teams={teams} />
          </TabsContent>
        </Tabs>
      </main>

      <MatchDialog match={selectedMatch} onClose={() => setSelectedMatch(null)} />
    </div>
  );
}
