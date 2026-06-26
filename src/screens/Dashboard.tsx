import { DashboardCard } from '../components/DashboardCard';
import { mockFranchise } from '../data/mockFranchise';

const playerName = (playerId: string) =>
  mockFranchise.players.find((player) => player.id === playerId)?.name ?? 'Unassigned';

export function Dashboard() {
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
  } = mockFranchise;

  return (
    <main className="dashboard-shell">
      <header className="hero-panel">
        <div>
          <p className="kicker">Franchise Operations Desk</p>
          <h1>{franchise.name}</h1>
          <p className="hero-copy">{franchise.status}</p>
        </div>
        <div className="scorebug" aria-label="Current franchise context">
          <span>Season {franchise.seasonYear}</span>
          <strong>Week {franchise.currentWeek}</strong>
          <span>{franchise.userName}</span>
        </div>
      </header>

      <section className="ticker-strip" aria-label="Franchise goals">
        {franchise.goals.map((goal) => (
          <span key={goal}>{goal}</span>
        ))}
      </section>

      <div className="dashboard-grid">
        <DashboardCard title="Team Profile" eyebrow="Identity">
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
            {depthChart.map((group) => (
              <div className="mini-row" key={group.id}>
                <span>{group.positionGroup}</span>
                <strong>{playerName(group.starterPlayerId)}</strong>
                <em>{group.needLevel} need</em>
              </div>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard title="Weekly Game Prep" eyebrow={`Week ${weeklyGamePrep.week}`}>
          <p className="stat-line">Opponent: {weeklyGamePrep.opponent}</p>
          <p>{weeklyGamePrep.matchupNotes}</p>
          <ul>
            {weeklyGamePrep.focusAreas.map((focus) => (
              <li key={focus}>{focus}</li>
            ))}
          </ul>
        </DashboardCard>

        <DashboardCard title="Weekly AI Report" eyebrow="Command readout">
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
              <strong>{playerName(injury.playerId)}</strong>: {injury.status}, {injury.bodyPart} ·{' '}
              {injury.returnEstimate}
            </p>
          ))}
          {transactions.map((transaction) => (
            <p key={transaction.id}>{transaction.details}</p>
          ))}
        </DashboardCard>

        <DashboardCard title="Contract / Cap Notes" eyebrow="Front office">
          {contractNotes.map((note) => (
            <p key={note.id}>
              <strong>{playerName(note.playerId)}</strong>: {note.capStatus} · {note.priority} priority.{' '}
              {note.note}
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

        <DashboardCard title="Broadcast Recap" eyebrow="Last game">
          <p className="stat-line">
            {broadcastRecap.result} vs {broadcastRecap.opponent}
          </p>
          <h3>{broadcastRecap.headline}</h3>
          <p>{broadcastRecap.summary}</p>
        </DashboardCard>

        <DashboardCard title="Video Board" eyebrow="Clip desk">
          {videoBoard.map((item) => (
            <p key={item.id}>
              <strong>{item.title}</strong> · {item.status}. {item.description}
            </p>
          ))}
        </DashboardCard>

        <DashboardCard title="Info Board" eyebrow="Quick facts">
          {infoBoard.map((item) => (
            <p key={item.id}>
              <strong>{item.value}</strong> — {item.context}
            </p>
          ))}
        </DashboardCard>
      </div>
    </main>
  );
}
