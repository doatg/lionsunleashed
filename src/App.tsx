import { useMemo, useState } from 'react';
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
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'team-profile', label: 'Team Profile' },
  { id: 'roster-depth-chart', label: 'Roster / Depth Chart' },
  { id: 'weekly-game-prep', label: 'Weekly Game Prep' },
  { id: 'weekly-ai-report', label: 'Weekly AI Report' },
  { id: 'injury-transaction-tracker', label: 'Injury / Transaction Tracker' },
  { id: 'contract-cap-notes', label: 'Contract / Cap Notes' },
  { id: 'scouting-draft-board', label: 'Scouting / Draft Board' },
  { id: 'broadcast-recap', label: 'Broadcast Recap' },
  { id: 'video-board', label: 'Video Board' },
  { id: 'info-board', label: 'Info Board' },
];

export default function App() {
  const [selectedScreen, setSelectedScreen] = useState('dashboard');
  const activeScreenLabel = useMemo(
    () => screens.find((screen) => screen.id === selectedScreen)?.label ?? 'Dashboard',
    [selectedScreen],
  );

  return (
    <main className="app-shell">
      <header className="hero-panel">
        <div>
          <p className="kicker">Franchise Operations Desk</p>
          <h1>Madden Franchise Command Center</h1>
          <p className="hero-copy">external franchise command center</p>
        </div>
        <div className="scorebug" aria-label="Current franchise context">
          <span>Season {mockFranchise.franchise.seasonYear}</span>
          <strong>Week {mockFranchise.franchise.currentWeek}</strong>
          <span>{mockFranchise.franchise.userName}</span>
        </div>
      </header>

      <nav className="screen-nav" aria-label="Command center screens">
        {screens.map((screen) => (
          <button
            className={screen.id === selectedScreen ? 'active' : ''}
            key={screen.id}
            type="button"
            onClick={() => setSelectedScreen(screen.id)}
          >
            {screen.label}
          </button>
        ))}
      </nav>

      <div className="active-screen-label" aria-live="polite">
        <span>Now Viewing</span>
        <strong>{activeScreenLabel}</strong>
      </div>

      {renderScreen(selectedScreen, setSelectedScreen)}
    </main>
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
