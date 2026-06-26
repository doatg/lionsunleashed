import { DashboardCard } from '../components/DashboardCard';
import type { FranchiseDashboardData } from '../types/franchise';

interface DashboardProps {
  data: FranchiseDashboardData;
  onSelectScreen: (screenId: string) => void;
}

const playerName = (data: FranchiseDashboardData, playerId: string) =>
  data.players.find((player) => player.id === playerId)?.name ?? 'Unassigned';

export function Dashboard({ data, onSelectScreen }: DashboardProps) {
  const {
    franchise,
    teamProfile,
    depthChart,
    weeklyGamePrep,
    weeklyAIReport,
    injuries,
    contractNotes,
    draftProspects,
    broadcastRecap,
    videoBoard,
    infoBoard,
    screenStatuses,
  } = data;

  return (
    <>
      <section className="ticker-strip" aria-label="Franchise goals">
        {franchise.goals.map((goal) => (
          <span key={goal}>{goal}</span>
        ))}
      </section>

      <section className="overview-grid" aria-label="Command-center overview">
        <div className="overview-card">
          <span>Current Week</span>
          <strong>Week {franchise.currentWeek}</strong>
          <p>{weeklyGamePrep.opponent} prep is active.</p>
        </div>
        <div className="overview-card">
          <span>Roster Alert</span>
          <strong>{depthChart.filter((group) => group.needLevel === 'High').length} High Needs</strong>
          <p>Line and defensive back depth are the headline watch points.</p>
        </div>
        <div className="overview-card">
          <span>Action Queue</span>
          <strong>{weeklyAIReport.actionItems.length} Items</strong>
          <p>AI report actions feed prep, scouting, and cap notes.</p>
        </div>
        <div className="overview-card">
          <span>Board Status</span>
          <strong>{videoBoard.length + infoBoard.length} Cards</strong>
          <p>Media and quick-reference boards are seeded with static mock items.</p>
        </div>
      </section>

      <section className="screen-status-grid" aria-label="Canonical screen status cards">
        {screenStatuses.map((screen) => (
          <button className="status-card" key={screen.id} type="button" onClick={() => onSelectScreen(screen.id)}>
            <span className={`priority-pill priority-${screen.priority.toLowerCase()}`}>{screen.priority}</span>
            <strong>{screen.title}</strong>
            <em>{screen.status}</em>
            <p>{screen.summary}</p>
          </button>
        ))}
      </section>

      <div className="dashboard-grid">
        <DashboardCard title="Team Profile" eyebrow="Identity" className="wide-card">
          <p className="stat-line">
            {teamProfile.city} · {teamProfile.teamName}
          </p>
          <p>{teamProfile.schemeNotes}</p>
          <ul>
            {teamProfile.priorities.map((priority) => (
              <li key={priority}>{priority}</li>
            ))}
          </ul>
        </DashboardCard>

        <DashboardCard title="Roster / Depth Chart" eyebrow="Personnel">
          <div className="mini-table">
            {depthChart.slice(0, 4).map((group) => (
              <div className="mini-row" key={group.id}>
                <span>{group.positionGroup}</span>
                <strong>{playerName(data, group.starterPlayerId)}</strong>
                <em>{group.needLevel} need</em>
              </div>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard title="Weekly Game Prep" eyebrow={`Week ${weeklyGamePrep.week}`}>
          <p className="stat-line">Opponent: {weeklyGamePrep.opponent}</p>
          <p>{weeklyGamePrep.matchupNotes}</p>
          <ul>
            {weeklyGamePrep.focusAreas.slice(0, 3).map((focus) => (
              <li key={focus}>{focus}</li>
            ))}
          </ul>
        </DashboardCard>

        <DashboardCard title="Weekly AI Report" eyebrow="Command readout" className="wide-card">
          <p>{weeklyAIReport.summary}</p>
          <ul>
            {weeklyAIReport.actionItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DashboardCard>

        <DashboardCard title="Injury / Transaction Tracker" eyebrow="Availability">
          {injuries.map((injury) => (
            <p key={injury.id}>
              <strong>{playerName(data, injury.playerId)}</strong>: {injury.status}, {injury.bodyPart} ·{' '}
              {injury.returnEstimate}
            </p>
          ))}
        </DashboardCard>

        <DashboardCard title="Contract / Cap Notes" eyebrow="Front office">
          {contractNotes.slice(0, 2).map((note) => (
            <p key={note.id}>
              <strong>{playerName(data, note.playerId)}</strong>: {note.capStatus} · {note.priority} priority.
            </p>
          ))}
        </DashboardCard>

        <DashboardCard title="Scouting / Draft Board" eyebrow="War room">
          <div className="mini-table">
            {draftProspects.map((prospect) => (
              <div className="mini-row" key={prospect.id}>
                <span>#{prospect.rank}</span>
                <strong>
                  {prospect.name}, {prospect.position}
                </strong>
                <em>Round {prospect.projectedRound}</em>
              </div>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard title="Broadcast Recap" eyebrow="Last game" className="wide-card">
          <p className="stat-line">
            {broadcastRecap.result} vs {broadcastRecap.opponent}
          </p>
          <h3>{broadcastRecap.headline}</h3>
          <p>{broadcastRecap.summary}</p>
        </DashboardCard>
      </div>
    </>
  );
}
