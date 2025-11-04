interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
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
              onClick={() => onTabChange('schedule')}
              className={`font-semibold transition-colors ${
                activeTab === 'schedule' ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Расписание
            </button>
            <button
              onClick={() => onTabChange('table')}
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
  );
}
