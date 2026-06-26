import type { ReactNode } from 'react';
import type { FranchiseDashboardData, Priority } from '../types/franchise';

interface ScreenShellProps {
  title: string;
  eyebrow: string;
  summary: string;
  priority?: Priority;
  children: ReactNode;
}

export function ScreenShell({ title, eyebrow, summary, priority, children }: ScreenShellProps) {
  return (
    <section className="screen-shell">
      <div className="screen-heading">
        <div>
          <p className="kicker">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{summary}</p>
        </div>
        {priority ? <span className={`priority-pill priority-${priority.toLowerCase()}`}>{priority}</span> : null}
      </div>
      <div className="screen-panel-grid">{children}</div>
    </section>
  );
}

export function TeamProfileScreen({ data }: { data: FranchiseDashboardData }) {
  return (
    <ScreenShell title="Team Profile" eyebrow="Identity desk" summary={data.teamProfile.schemeNotes} priority="High">
      <InfoPanel title="Strengths" items={data.teamProfile.strengths} />
      <InfoPanel title="Weaknesses" items={data.teamProfile.weaknesses} />
      <InfoPanel title="Season Priorities" items={data.teamProfile.priorities} />
    </ScreenShell>
  );
}

export function RosterDepthChartScreen({ data }: { data: FranchiseDashboardData }) {
  return (
    <ScreenShell title="Roster / Depth Chart" eyebrow="Personnel board" summary="Starter groups, need levels, and player notes for roster planning." priority="High">
      <div className="panel wide-panel">
        {data.depthChart.map((group) => (
          <div className="board-row" key={group.id}>
            <span>{group.positionGroup}</span>
            <strong>{nameFor(data, group.starterPlayerId)}</strong>
            <em>{group.needLevel} need · {group.notes}</em>
          </div>
        ))}
      </div>
      <InfoPanel title="Roster Notes" items={data.players.map((player) => `${player.position} ${player.name}: ${player.notes}`)} />
    </ScreenShell>
  );
}

export function WeeklyGamePrepScreen({ data }: { data: FranchiseDashboardData }) {
  return (
    <ScreenShell title="Weekly Game Prep" eyebrow={`Week ${data.weeklyGamePrep.week}`} summary={data.weeklyGamePrep.matchupNotes} priority="Critical">
      <InfoPanel title="Focus Areas" items={data.weeklyGamePrep.focusAreas} />
      <InfoPanel title="Key Risks" items={data.weeklyGamePrep.keyRisks} />
      <InfoPanel title="Game Goals" items={data.weeklyGamePrep.goals} />
    </ScreenShell>
  );
}

export function WeeklyAIReportScreen({ data }: { data: FranchiseDashboardData }) {
  return (
    <ScreenShell title="Weekly AI Report" eyebrow="Command readout" summary={data.weeklyAIReport.summary} priority="High">
      <InfoPanel title="Recommendations" items={data.weeklyAIReport.recommendations} />
      <InfoPanel title="Risks" items={data.weeklyAIReport.risks} />
      <InfoPanel title="Opportunities" items={data.weeklyAIReport.opportunities} />
      <InfoPanel title="Action Items" items={data.weeklyAIReport.actionItems} />
    </ScreenShell>
  );
}

export function InjuryTransactionScreen({ data }: { data: FranchiseDashboardData }) {
  return (
    <ScreenShell title="Injury / Transaction Tracker" eyebrow="Availability log" summary="Static injury and roster movement tracker for weekly decisions." priority="Medium">
      <div className="panel">
        <h3>Injuries</h3>
        {data.injuries.map((injury) => (
          <p key={injury.id}><strong>{nameFor(data, injury.playerId)}</strong>: {injury.status} · {injury.bodyPart} · {injury.impactNotes}</p>
        ))}
      </div>
      <div className="panel">
        <h3>Transactions</h3>
        {data.transactions.map((transaction) => (
          <p key={transaction.id}><strong>{transaction.transactionType}</strong>: {transaction.details} {transaction.rosterImpact}</p>
        ))}
      </div>
    </ScreenShell>
  );
}

export function ContractCapScreen({ data }: { data: FranchiseDashboardData }) {
  return (
    <ScreenShell title="Contract / Cap Notes" eyebrow="Front office notebook" summary="Extension, cap, and veteran bridge notes for team-building decisions." priority="Medium">
      {data.contractNotes.map((note) => (
        <div className="panel" key={note.id}>
          <h3>{nameFor(data, note.playerId)}</h3>
          <p><strong>{note.capStatus}</strong> · {note.contractYear} · {note.priority} priority</p>
          <p>{note.note}</p>
          <p className="muted-copy">Decision window: {note.decisionWindow}</p>
        </div>
      ))}
    </ScreenShell>
  );
}

export function ScoutingDraftBoardScreen({ data }: { data: FranchiseDashboardData }) {
  return (
    <ScreenShell title="Scouting / Draft Board" eyebrow="War room" summary="Ranked static prospect board tied to current roster needs." priority="High">
      {data.draftProspects.map((prospect) => (
        <div className="panel" key={prospect.id}>
          <h3>#{prospect.rank} {prospect.name} · {prospect.position}</h3>
          <p>{prospect.school} · Round {prospect.projectedRound} · Grade {prospect.grade}</p>
          <p>{prospect.fitNotes}</p>
          <p className="muted-copy">Traits: {prospect.traits.join(', ')}</p>
        </div>
      ))}
    </ScreenShell>
  );
}

export function BroadcastRecapScreen({ data }: { data: FranchiseDashboardData }) {
  return (
    <ScreenShell title="Broadcast Recap" eyebrow="Postgame desk" summary={data.broadcastRecap.summary} priority="Medium">
      <div className="panel wide-panel">
        <h3>{data.broadcastRecap.headline}</h3>
        <p><strong>{data.broadcastRecap.result}</strong> vs {data.broadcastRecap.opponent}</p>
        <p>Key players: {data.broadcastRecap.keyPlayers.join(', ')}</p>
      </div>
      <InfoPanel title="Storyline Notes" items={data.broadcastRecap.storylineNotes} />
    </ScreenShell>
  );
}

export function VideoBoardScreen({ data }: { data: FranchiseDashboardData }) {
  return (
    <ScreenShell title="Video Board" eyebrow="Clip desk" summary="Original clip ideas and film prompts for future media organization." priority="Low">
      {data.videoBoard.map((item) => (
        <div className="panel" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.clipType} · Week {item.week} · {item.status}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </ScreenShell>
  );
}

export function InfoBoardScreen({ data }: { data: FranchiseDashboardData }) {
  return (
    <ScreenShell title="Info Board" eyebrow="Quick facts" summary="Reference facts, reminders, and franchise display cards." priority="Low">
      {data.infoBoard.map((item) => (
        <div className="panel" key={item.id}>
          <h3>{item.title}</h3>
          <p><strong>{item.value}</strong></p>
          <p>{item.context}</p>
          <p className="muted-copy">{item.category} · {item.priority} priority</p>
        </div>
      ))}
    </ScreenShell>
  );
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="panel">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

function nameFor(data: FranchiseDashboardData, playerId: string) {
  return data.players.find((player) => player.id === playerId)?.name ?? 'Unassigned';
}
