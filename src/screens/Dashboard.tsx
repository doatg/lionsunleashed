import type { ReactNode } from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { FeaturePanel, RatingBadge, ScreenHeader } from '../components/CommandComponents';
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
    transactions,
    contractNotes,
    draftProspects,
    broadcastRecap,
    videoBoard,
    infoBoard,
    screenStatuses,
  } = data;
  const highNeeds = depthChart.filter((group) => group.needLevel === 'High');

  return (
    <>
      <ScreenHeader
        eyebrow="Franchise hub // live operations"
        title="Dashboard / Franchise Hub"
        subtitle="Front command hub for roster, game prep, AI report, injuries, contracts, scouting, recap, video, and info board signals."
        priority="Critical"
        badges={[`Week ${franchise.currentWeek}`, `${franchise.seasonYear} season`, activeHubStatus(screenStatuses)]}
      />
      <section className="ticker-strip" aria-label="Franchise goals">
        {franchise.goals.map((goal) => (
          <span key={goal}>{goal}</span>
        ))}
      </section>

      <section className="command-canvas" aria-label="Dashboard command-center canvas">
        <div className="canvas-main">
          <section className="overview-grid" aria-label="Command-center overview">
            <div className="overview-card field-status">
              <span>Current Week / Season</span>
              <strong>Week {franchise.currentWeek}</strong>
              <p>{franchise.seasonYear} season · {franchise.status}</p>
            </div>
            <div className="overview-card">
              <span>Next Opponent</span>
              <strong>{weeklyGamePrep.opponent}</strong>
              <p>{weeklyGamePrep.goals[0]} · {weeklyGamePrep.goals[1]}</p>
            </div>
            <div className="overview-card">
              <span>Roster Needs</span>
              <strong>{highNeeds.length} High Alerts</strong>
              <p>{highNeeds.map((group) => group.positionGroup).join(' + ')}</p>
            </div>
            <div className="overview-card">
              <span>Command Queue</span>
              <strong>{weeklyAIReport.actionItems.length} AI Calls</strong>
              <p>{transactions.length} movement notes · {injuries.length} availability alerts</p>
            </div>
          </section>

          <div className="dashboard-grid">
            <FeaturePanel eyebrow="Primary franchise panel" title="Weekly command posture" className="wide-panel">
              <p className="stat-line">{franchise.status}</p>
              <p>{weeklyAIReport.summary}</p>
              <div className="metric-strip">
                <RatingBadge label="Roster" value={`${highNeeds.length} needs`} />
                <RatingBadge label="Prep" value={weeklyGamePrep.opponent} />
                <RatingBadge label="Media" value={`${videoBoard.length} clips`} />
              </div>
            </FeaturePanel>
            <DashboardCard title="Weekly Game Prep" eyebrow={`Week ${weeklyGamePrep.week}`} className="wide-card feature-card">
              <p className="stat-line">Opponent: {weeklyGamePrep.opponent}</p>
              <p>{weeklyGamePrep.matchupNotes}</p>
              <div className="callout-grid">
                {weeklyGamePrep.focusAreas.slice(0, 4).map((focus) => (
                  <span key={focus}>{focus}</span>
                ))}
              </div>
            </DashboardCard>

            <DashboardCard title="Roster Needs" eyebrow="Personnel heat map">
              <div className="mini-table">
                {depthChart.map((group) => (
                  <div className="mini-row" key={group.id}>
                    <span>{group.positionGroup}</span>
                    <strong>{playerName(data, group.starterPlayerId)}</strong>
                    <em>{group.needLevel}</em>
                  </div>
                ))}
              </div>
            </DashboardCard>

            <DashboardCard title="Injury + Transaction Alerts" eyebrow="Availability desk">
              {injuries.map((injury) => (
                <p key={injury.id}>
                  <strong>{playerName(data, injury.playerId)}</strong>: {injury.status}, {injury.bodyPart} ·{' '}
                  {injury.returnEstimate}
                </p>
              ))}
              <p className="muted-copy">Latest movement: {transactions[0]?.details}</p>
            </DashboardCard>

            <DashboardCard title="Contract + Cap Priorities" eyebrow="Front office clock">
              {contractNotes.map((note) => (
                <p key={note.id}>
                  <strong>{playerName(data, note.playerId)}</strong>: {note.capStatus} · {note.priority} · {note.decisionWindow}
                </p>
              ))}
            </DashboardCard>

            <DashboardCard title="Scouting Watchlist" eyebrow="War room board">
              <div className="mini-table">
                {draftProspects.map((prospect) => (
                  <div className="mini-row" key={prospect.id}>
                    <span>#{prospect.rank}</span>
                    <strong>
                      {prospect.name}, {prospect.position}
                    </strong>
                    <em>Rd {prospect.projectedRound}</em>
                  </div>
                ))}
              </div>
            </DashboardCard>

            <DashboardCard title="Broadcast Recap Headline" eyebrow="Last game" className="wide-card">
              <p className="stat-line">
                {broadcastRecap.result} vs {broadcastRecap.opponent}
              </p>
              <h3>{broadcastRecap.headline}</h3>
              <p>{broadcastRecap.summary}</p>
            </DashboardCard>

            <DashboardCard title="Team Identity" eyebrow="GM / coach room">
              <p className="stat-line">
                {teamProfile.city} · {teamProfile.teamName}
              </p>
              <p>{teamProfile.schemeNotes}</p>
            </DashboardCard>
          </div>

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
        </div>

        <aside className="right-board-stack" aria-label="Weekly report, video board, and info board stack">
          <BoardPanel title="Weekly AI Report" eyebrow="Command recommendations">
            <p>{weeklyAIReport.summary}</p>
            <ul>
              {weeklyAIReport.recommendations.slice(0, 4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </BoardPanel>

          <BoardPanel title="Video Board" eyebrow={`${videoBoard.length} clips staged`}>
            {videoBoard.map((item) => (
              <div className="board-row compact-board-row" key={item.id}>
                <span>W{item.week}</span>
                <strong>{item.title}</strong>
                <em>{item.status}</em>
              </div>
            ))}
          </BoardPanel>

          <BoardPanel title="Info Board" eyebrow="Quick facts">
            {infoBoard.map((item) => (
              <div className="info-chip" key={item.id}>
                <span>{item.category}</span>
                <strong>{item.value}</strong>
                <p>{item.context}</p>
              </div>
            ))}
          </BoardPanel>
        </aside>
      </section>
    </>
  );
}

function BoardPanel({ title, eyebrow, children }: { title: string; eyebrow: string; children: ReactNode }) {
  return (
    <section className="board-panel">
      <p className="card-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <div className="card-content">{children}</div>
    </section>
  );
}

function activeHubStatus(statuses: FranchiseDashboardData['screenStatuses']) {
  return `${statuses.filter((screen) => screen.priority === 'Critical' || screen.priority === 'High').length} priority desks`;
}
