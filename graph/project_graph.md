# Project Graph

## Core Project

Madden Franchise Command Center is an external Franchise mode command center for Rolland G.

## Primary Nodes

- User: Rolland G
- Product: External Madden Franchise companion app
- Experience: Broadcast-style franchise command center
- MVP: Dashboard, Team Profile, Roster / Depth Chart, Weekly Game Prep, Weekly AI Report, Injury / Transaction Tracker, Contract / Cap Notes, Scouting / Draft Board, Broadcast Recap, Video Board, Info Board
- Agents: Franchise Director, GM Advisor, Contract, Scouting, Draft Board, Injury Tracker, Transaction, Weekly Opponent Prep, Broadcast Recap, League Newsroom, Video Board, Info Board, Power Rankings, Player Personality, Handoff
- Brand Safety: Original broadcast-inspired identity only

## Boundaries

- Not an in-game mod
- No copied logos, marks, or protected assets
- No licensed affiliation implied

## Canonical MVP Screens/Pages

1. Dashboard
2. Team Profile
3. Roster / Depth Chart
4. Weekly Game Prep
5. Weekly AI Report
6. Injury / Transaction Tracker
7. Contract / Cap Notes
8. Scouting / Draft Board
9. Broadcast Recap
10. Video Board
11. Info Board

## Phase 1 MVP Priorities

### Dashboard

- Purpose: Present the franchise command center overview with the most important weekly status, roster, report, and board signals.
- Depends on: TeamProfile, DepthChart, WeeklyGamePrep, WeeklyAIReport, Injury, Transaction, ContractNote, DraftProspect, BroadcastRecap, VideoBoardItem, InfoBoardItem.
- Owned by agent: Franchise Director.
- Future app area: Home overview and executive summary.

### Team Profile

- Purpose: Capture franchise identity, team context, user goals, and season direction.
- Depends on: Franchise and TeamProfile.
- Owned by agent: Franchise Director.
- Future app area: Franchise settings and identity profile.

### Roster / Depth Chart

- Purpose: Track players, roles, starter order, backups, needs, and roster construction notes.
- Depends on: TeamProfile, Player, DepthChart, Injury, Transaction, ContractNote.
- Owned by agent: GM Advisor.
- Future app area: Roster management and lineup planning.

### Weekly Game Prep

- Purpose: Organize opponent notes, matchup priorities, game-plan focus, and weekly objectives.
- Depends on: TeamProfile, Player, DepthChart, Injury, WeeklyGamePrep.
- Owned by agent: Weekly Opponent Prep.
- Future app area: Weekly matchup planning.

### Weekly AI Report

- Purpose: Summarize AI-generated franchise insights, risks, opportunities, and recommended actions.
- Depends on: WeeklyAIReport, WeeklyGamePrep, DepthChart, Injury, Transaction, ContractNote, DraftProspect.
- Owned by agent: Franchise Director.
- Future app area: AI insights and weekly recommendations.

### Injury / Transaction Tracker

- Purpose: Track player availability, injuries, signings, releases, trades, and roster movement impact.
- Depends on: Player, Injury, Transaction, DepthChart.
- Owned by agent: Injury Tracker and Transaction.
- Future app area: Availability and movement log.

### Contract / Cap Notes

- Purpose: Record cap concerns, extension candidates, contract priorities, and team-building constraints.
- Depends on: Player, ContractNote, TeamProfile.
- Owned by agent: Contract.
- Future app area: Contract planning and cap notebook.

### Scouting / Draft Board

- Purpose: Maintain draft prospects, scouting notes, needs, rankings, and pick strategy.
- Depends on: DraftProspect, TeamProfile, DepthChart, ContractNote.
- Owned by agent: Scouting and Draft Board.
- Future app area: Draft planning and prospect board.

### Broadcast Recap

- Purpose: Produce broadcast-style postgame summaries, storylines, standout performances, and franchise narrative.
- Depends on: BroadcastRecap, Player, TeamProfile, WeeklyGamePrep.
- Owned by agent: Broadcast Recap.
- Future app area: Game recap and story archive.

### Video Board

- Purpose: Organize clips, highlight ideas, film notes, and visual story prompts.
- Depends on: VideoBoardItem, Player, BroadcastRecap, WeeklyGamePrep.
- Owned by agent: Video Board.
- Future app area: Media board and clip organizer.

### Info Board

- Purpose: Display quick-reference facts, reminders, records, standings notes, and franchise context.
- Depends on: InfoBoardItem, TeamProfile, Player, BroadcastRecap.
- Owned by agent: Info Board.
- Future app area: Quick facts and display cards.

## Phase 2 Data Model Planning

### Franchise

- Purpose: Represents the overall franchise save context and long-term command center identity.
- Key fields: id, name, userName, seasonYear, currentWeek, goals, status.
- Connects to: TeamProfile, WeeklyGamePrep, WeeklyAIReport, BroadcastRecap, InfoBoardItem.
- Owned by agent: Franchise Director.

### TeamProfile

- Purpose: Stores team identity, play style, roster philosophy, and season direction.
- Key fields: id, franchiseId, teamName, schemeNotes, strengths, weaknesses, priorities.
- Connects to: Franchise, Player, DepthChart, ContractNote, DraftProspect.
- Owned by agent: Franchise Director.

### Player

- Purpose: Represents roster members and player-specific notes used across planning areas.
- Key fields: id, teamProfileId, name, position, overall, age, role, devTrait, notes.
- Connects to: TeamProfile, DepthChart, Injury, Transaction, ContractNote, BroadcastRecap, VideoBoardItem.
- Owned by agent: GM Advisor.

### DepthChart

- Purpose: Tracks positional ordering, starters, backups, role battles, and roster needs.
- Key fields: id, teamProfileId, positionGroup, starterPlayerId, backupPlayerIds, needLevel, notes.
- Connects to: TeamProfile, Player, WeeklyGamePrep, WeeklyAIReport, Injury.
- Owned by agent: GM Advisor.

### WeeklyGamePrep

- Purpose: Captures opponent scouting, matchup plans, and weekly objectives.
- Key fields: id, franchiseId, week, opponent, matchupNotes, focusAreas, keyRisks, goals.
- Connects to: Franchise, TeamProfile, DepthChart, Injury, WeeklyAIReport, BroadcastRecap, VideoBoardItem.
- Owned by agent: Weekly Opponent Prep.

### WeeklyAIReport

- Purpose: Stores weekly AI recommendations, alerts, and summary insights.
- Key fields: id, franchiseId, week, summary, recommendations, risks, opportunities, actionItems.
- Connects to: Franchise, WeeklyGamePrep, DepthChart, Injury, Transaction, ContractNote, DraftProspect.
- Owned by agent: Franchise Director.

### Injury

- Purpose: Tracks injuries, availability, recovery expectations, and lineup impact.
- Key fields: id, playerId, status, bodyPart, duration, returnEstimate, impactNotes.
- Connects to: Player, DepthChart, WeeklyGamePrep, WeeklyAIReport, Transaction.
- Owned by agent: Injury Tracker.

### Transaction

- Purpose: Logs signings, releases, trades, and other roster movement.
- Key fields: id, playerId, transactionType, date, week, details, rosterImpact.
- Connects to: Player, Injury, DepthChart, WeeklyAIReport, ContractNote.
- Owned by agent: Transaction.

### ContractNote

- Purpose: Records contract, cap, extension, restructure, and team-building notes.
- Key fields: id, playerId, capStatus, contractYear, priority, note, decisionWindow.
- Connects to: Player, TeamProfile, Transaction, WeeklyAIReport, DraftProspect.
- Owned by agent: Contract.

### DraftProspect

- Purpose: Represents scouting targets and draft board evaluations.
- Key fields: id, name, position, school, projectedRound, grade, traits, fitNotes, rank.
- Connects to: TeamProfile, DepthChart, ContractNote, WeeklyAIReport.
- Owned by agent: Scouting and Draft Board.

### BroadcastRecap

- Purpose: Stores postgame recap content, narrative beats, and key performance notes.
- Key fields: id, franchiseId, week, opponent, result, headline, summary, keyPlayers, storylineNotes.
- Connects to: Franchise, TeamProfile, Player, WeeklyGamePrep, VideoBoardItem, InfoBoardItem.
- Owned by agent: Broadcast Recap.

### VideoBoardItem

- Purpose: Organizes clip ideas, highlight references, and visual media notes.
- Key fields: id, title, week, relatedPlayerId, relatedRecapId, clipType, description, status.
- Connects to: Player, WeeklyGamePrep, BroadcastRecap, InfoBoardItem.
- Owned by agent: Video Board.

### InfoBoardItem

- Purpose: Stores quick-reference facts, reminders, records, milestones, and display notes.
- Key fields: id, title, category, value, context, priority, relatedEntityType, relatedEntityId.
- Connects to: Franchise, TeamProfile, Player, BroadcastRecap, VideoBoardItem.
- Owned by agent: Info Board.

## Phase 3 Screen Map Planning

### Dashboard

- Purpose: Give Rolland G one place to scan franchise status and choose the next action.
- Primary data objects: Franchise, TeamProfile, DepthChart, WeeklyGamePrep, WeeklyAIReport, Injury, Transaction, ContractNote, DraftProspect, BroadcastRecap, VideoBoardItem, InfoBoardItem.
- Owned by agent: Franchise Director.
- First version scope: Static overview sections for weekly status, roster alerts, report highlights, and board shortcuts.

### Team Profile

- Purpose: Show franchise identity, team context, season priorities, and philosophy notes.
- Primary data objects: Franchise, TeamProfile.
- Owned by agent: Franchise Director.
- First version scope: Profile summary with editable planning notes documented for later implementation.

### Roster / Depth Chart

- Purpose: Show roster structure, position groups, starters, backups, and needs.
- Primary data objects: TeamProfile, Player, DepthChart, Injury, Transaction, ContractNote.
- Owned by agent: GM Advisor.
- First version scope: Position-group depth view and player notes planning.

### Weekly Game Prep

- Purpose: Show opponent plan, matchup notes, priorities, risks, and weekly goals.
- Primary data objects: WeeklyGamePrep, TeamProfile, Player, DepthChart, Injury.
- Owned by agent: Weekly Opponent Prep.
- First version scope: Weekly prep summary with matchup focus and key action items.

### Weekly AI Report

- Purpose: Show generated weekly insights and recommended franchise decisions.
- Primary data objects: WeeklyAIReport, WeeklyGamePrep, DepthChart, Injury, Transaction, ContractNote, DraftProspect.
- Owned by agent: Franchise Director.
- First version scope: Report summary, risks, opportunities, and recommendation list.

### Injury / Transaction Tracker

- Purpose: Show availability and roster movement in a single operational tracker.
- Primary data objects: Player, Injury, Transaction, DepthChart.
- Owned by agent: Injury Tracker and Transaction.
- First version scope: Injury list, transaction log, and roster impact notes.

### Contract / Cap Notes

- Purpose: Show contract priorities, cap concerns, extension ideas, and decision windows.
- Primary data objects: Player, ContractNote, TeamProfile, Transaction.
- Owned by agent: Contract.
- First version scope: Contract note cards grouped by priority and player.

### Scouting / Draft Board

- Purpose: Show draft prospects, rankings, roster fits, and pick strategy.
- Primary data objects: DraftProspect, TeamProfile, DepthChart, ContractNote.
- Owned by agent: Scouting and Draft Board.
- First version scope: Prospect board with ranks, positions, grades, and fit notes.

### Broadcast Recap

- Purpose: Show postgame recap content and franchise storylines.
- Primary data objects: BroadcastRecap, Player, TeamProfile, WeeklyGamePrep, VideoBoardItem, InfoBoardItem.
- Owned by agent: Broadcast Recap.
- First version scope: Recap headline, summary, key players, and storyline notes.

### Video Board

- Purpose: Show clip ideas, highlight references, and media planning notes.
- Primary data objects: VideoBoardItem, Player, BroadcastRecap, WeeklyGamePrep.
- Owned by agent: Video Board.
- First version scope: Media item list with status and related franchise context.

### Info Board

- Purpose: Show quick-reference facts, reminders, milestones, and display-ready context.
- Primary data objects: InfoBoardItem, Franchise, TeamProfile, Player, BroadcastRecap.
- Owned by agent: Info Board.
- First version scope: Categorized fact cards and reminders.

## Phase 4 App Scaffold Planning

### Recommended Stack

- App framework/build tool: Vite.
- UI library: React.
- Language: TypeScript.
- Package manager: npm unless explicitly changed later.

### First App Structure

- `src/main.tsx`
- `src/App.tsx`
- `src/styles.css`
- `src/data/mockFranchise.ts`
- `src/types/franchise.ts`
- `src/components/`
- `src/screens/`

### First Vertical Slice

- Dashboard shell with static mock data only.
- The shell should establish the initial command-center layout, high-level status regions, and navigation placeholders for the canonical screens/pages.
- Static mock data should represent franchise, team, roster alert, weekly prep, report, recap, video board, and info board summaries without connecting to live services.

### Implementation Guardrails

- No copied protected branding, logos, marks, uniforms, broadcast graphics, or assets.
- Original broadcast-inspired UI only.
- No API/backend yet.
- No real Madden file parsing yet.
- No external media ingestion yet.
- No licensed affiliation implied.

### First Scaffold Task After Phase 4

- Create Vite React TypeScript app scaffold and Dashboard shell only.
- Preserve final project name: Madden Franchise Command Center.
- Preserve canonical screen/page names:
  1. Dashboard
  2. Team Profile
  3. Roster / Depth Chart
  4. Weekly Game Prep
  5. Weekly AI Report
  6. Injury / Transaction Tracker
  7. Contract / Cap Notes
  8. Scouting / Draft Board
  9. Broadcast Recap
  10. Video Board
  11. Info Board
