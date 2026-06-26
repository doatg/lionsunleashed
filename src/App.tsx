import { useMemo, useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { mockFranchise } from './data/mockFranchise';
import { Dashboard } from './screens/Dashboard';
import {
  BroadcastRecapScreen,
  ContractCapScreen,
  InfoBoardScreen,
  InjuryTransactionScreen,
  RosterDepthChartScreen,
  ScoutingDraftBoardScreen,
  TeamProfileScreen,
  VideoBoardScreen,
  WeeklyAIReportScreen,
  WeeklyGamePrepScreen,
} from './screens/ScreenShell';

const screens = [
  { id: 'dashboard', label: 'Dashboard', shortLabel: 'Dash', code: '01' },
  { id: 'team-profile', label: 'Team Profile', shortLabel: 'Profile', code: '02' },
  { id: 'roster-depth-chart', label: 'Roster / Depth Chart', shortLabel: 'Roster', code: '03' },
  { id: 'weekly-game-prep', label: 'Weekly Game Prep', shortLabel: 'Prep', code: '04' },
  { id: 'weekly-ai-report', label: 'Weekly AI Report', shortLabel: 'AI Report', code: '05' },
  { id: 'injury-transaction-tracker', label: 'Injury / Transaction Tracker', shortLabel: 'Injuries', code: '06' },
  { id: 'contract-cap-notes', label: 'Contract / Cap Notes', shortLabel: 'Cap', code: '07' },
  { id: 'scouting-draft-board', label: 'Scouting / Draft Board', shortLabel: 'Scouting', code: '08' },
  { id: 'broadcast-recap', label: 'Broadcast Recap', shortLabel: 'Recap', code: '09' },
  { id: 'video-board', label: 'Video Board', shortLabel: 'Video', code: '10' },
  { id: 'info-board', label: 'Info Board', shortLabel: 'Info', code: '11' },
];

export default function App() {
  const [selectedScreen, setSelectedScreen] = useState('dashboard');
  const activeScreenLabel = useMemo(
    () => screens.find((screen) => screen.id === selectedScreen)?.label ?? 'Dashboard',
    [selectedScreen],
  );

  return (
    <main className="app-shell">
      <TopTicker activeScreenLabel={activeScreenLabel} />

      <div className="command-layout">
        <aside className="command-rail" aria-label="Command navigation rail">
          <div className="rail-brand">
            <span className="rail-mark">MC</span>
            <div>
              <strong>Madden Franchise</strong>
              <span>Command Center</span>
            </div>
          </div>

          <nav className="screen-nav" aria-label="Command center screens">
            {screens.map((screen) => (
              <button
                className={screen.id === selectedScreen ? 'active' : ''}
                key={screen.id}
                type="button"
                onClick={() => setSelectedScreen(screen.id)}
              >
                <span>{screen.code}</span>
                <strong>{screen.shortLabel}</strong>
                <em>{screen.label}</em>
              </button>
            ))}
          </nav>

          <div className="rail-footer">
            <span>Selected Desk</span>
            <strong>{activeScreenLabel}</strong>
          </div>
        </aside>

        <section className="content-stage" aria-label={`${activeScreenLabel} content`}>
          <header className="hero-panel">
            <div>
              <p className="kicker">Franchise Operations Desk</p>
              <h1>Madden Franchise Command Center</h1>
              <p className="hero-copy">Original broadcast-style franchise war room for weekly prep, roster decisions, and story boards.</p>
            </div>
            <div className="scorebug" aria-label="Current franchise context">
              <span>Season {mockFranchise.franchise.seasonYear}</span>
              <strong>Week {mockFranchise.franchise.currentWeek}</strong>
              <span>{mockFranchise.franchise.userName}</span>
            </div>
          </header>

          <div className="active-screen-label" aria-live="polite">
            <span>Now Viewing</span>
            <strong>{activeScreenLabel}</strong>
          </div>

          <ErrorBoundary>
            {renderScreen(selectedScreen, setSelectedScreen)}
          </ErrorBoundary>
        </section>
      </div>
    </main>
  );
}

function TopTicker({ activeScreenLabel }: { activeScreenLabel: string }) {
  const { franchise, weeklyGamePrep, weeklyAIReport, injuries, videoBoard, tickerFeed } = mockFranchise;

  return (
    <section className="top-ticker" aria-label="Broadcast-style franchise status ticker">
      <div className="ticker-live">Command Live</div>
      <div className="ticker-track">
        <span>{franchise.name}</span>
        <span>Season {franchise.seasonYear} · Week {franchise.currentWeek}</span>
        <span>Next opponent: {weeklyGamePrep.opponent}</span>
        <span>{weeklyAIReport.actionItems.length} AI action items</span>
        <span>{injuries.length} availability alerts</span>
        <span>{videoBoard.length} video board clips queued</span>
        {tickerFeed.map((item) => (
          <span key={item}>{item}</span>
        ))}
        <span>Active desk: {activeScreenLabel}</span>
      </div>
    </section>
  );
}

function renderScreen(selectedScreen: string, setSelectedScreen: (screenId: string) => void) {
  switch (selectedScreen) {
    case 'team-profile':
      return <TeamProfileScreen data={mockFranchise} />;
    case 'roster-depth-chart':
      return <RosterDepthChartScreen data={mockFranchise} />;
    case 'weekly-game-prep':
      return <WeeklyGamePrepScreen data={mockFranchise} />;
    case 'weekly-ai-report':
      return <WeeklyAIReportScreen data={mockFranchise} />;
    case 'injury-transaction-tracker':
      return <InjuryTransactionScreen data={mockFranchise} />;
    case 'contract-cap-notes':
      return <ContractCapScreen data={mockFranchise} />;
    case 'scouting-draft-board':
      return <ScoutingDraftBoardScreen data={mockFranchise} />;
    case 'broadcast-recap':
      return <BroadcastRecapScreen data={mockFranchise} />;
    case 'video-board':
      return <VideoBoardScreen data={mockFranchise} />;
    case 'info-board':
      return <InfoBoardScreen data={mockFranchise} />;
    default:
      return <Dashboard data={mockFranchise} onSelectScreen={setSelectedScreen} />;
  }
}
