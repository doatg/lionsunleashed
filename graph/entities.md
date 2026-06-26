# Entities

## User

- Rolland G: Franchise-focused Madden player, not online-focused.

## Product

- Companion App: External command center for Franchise mode.

## Phase 1 MVP Pages

- Franchise Dashboard
- Team Roster / Depth Chart
- Weekly Game Prep
- Injury / Transaction Tracker
- Contract / Cap Notes
- Scouting / Draft Board
- Weekly AI Report
- Broadcast Recap Page
- Video Board
- Info Board

## Phase 2 Data Objects

- Franchise
  - Purpose: Active franchise context.
  - Key fields: `id`, `name`, `season`, `week`, `user_team`, `status`.
  - Connects to: TeamProfile, WeeklyGamePrep, WeeklyAIReport, BroadcastRecap, VideoBoardItem, InfoBoardItem.
  - Owned by agent: Franchise Director.
- TeamProfile
  - Purpose: Team identity, record, scheme, and needs summary.
  - Key fields: `id`, `franchise_id`, `team_name`, `record`, `scheme_notes`, `needs`.
  - Connects to: Franchise, Player, DepthChart, WeeklyGamePrep, Power Rankings.
  - Owned by agent: GM Advisor.
- Player
  - Purpose: Roster member tracking.
  - Key fields: `id`, `team_profile_id`, `name`, `position`, `overall`, `traits`, `status`.
  - Connects to: TeamProfile, DepthChart, Injury, Transaction, ContractNote, Player Personality.
  - Owned by agent: GM Advisor.
- DepthChart
  - Purpose: Positional ordering and role clarity.
  - Key fields: `id`, `team_profile_id`, `position_group`, `starter_ids`, `backup_ids`, `notes`.
  - Connects to: TeamProfile, Player, Injury, WeeklyGamePrep.
  - Owned by agent: GM Advisor.
- WeeklyGamePrep
  - Purpose: Weekly matchup plan and risk notes.
  - Key fields: `id`, `franchise_id`, `week`, `opponent_team_profile_id`, `focus_points`, `risk_notes`.
  - Connects to: Franchise, TeamProfile, DepthChart, Injury, WeeklyAIReport, BroadcastRecap.
  - Owned by agent: Weekly Opponent Prep.
- WeeklyAIReport
  - Purpose: Weekly AI-generated recommendations and summary.
  - Key fields: `id`, `franchise_id`, `week`, `summary`, `recommendations`, `confidence_notes`.
  - Connects to: Franchise, WeeklyGamePrep, Injury, Transaction, ContractNote, DraftProspect.
  - Owned by agent: Franchise Director.
- Injury
  - Purpose: Availability and roster-impact tracking.
  - Key fields: `id`, `player_id`, `injury_type`, `status`, `return_estimate`, `impact_note`.
  - Connects to: Player, DepthChart, WeeklyGamePrep, WeeklyAIReport.
  - Owned by agent: Injury Tracker.
- Transaction
  - Purpose: Signings, releases, trades, and roster movement log.
  - Key fields: `id`, `franchise_id`, `player_id`, `type`, `date`, `details`, `impact_note`.
  - Connects to: Franchise, Player, ContractNote, WeeklyAIReport.
  - Owned by agent: Transaction.
- ContractNote
  - Purpose: Cap, extension, and contract-risk context.
  - Key fields: `id`, `player_id`, `season`, `cap_note`, `extension_priority`, `risk_note`.
  - Connects to: Player, Transaction, WeeklyAIReport, TeamProfile.
  - Owned by agent: Contract.
- DraftProspect
  - Purpose: Scouting target and draft fit tracking.
  - Key fields: `id`, `name`, `position`, `school_label`, `grade`, `traits`, `fit_note`.
  - Connects to: TeamProfile, WeeklyAIReport, Scouting, Draft Board.
  - Owned by agent: Scouting.
- BroadcastRecap
  - Purpose: Broadcast-style game-story summary.
  - Key fields: `id`, `franchise_id`, `week`, `game_result`, `headline`, `key_moments`, `storyline_notes`.
  - Connects to: Franchise, WeeklyGamePrep, VideoBoardItem, InfoBoardItem.
  - Owned by agent: Broadcast Recap.
- VideoBoardItem
  - Purpose: Clip, highlight, and media-note organization.
  - Key fields: `id`, `franchise_id`, `title`, `category`, `source_note`, `related_week`, `tags`.
  - Connects to: Franchise, BroadcastRecap, Player, WeeklyGamePrep.
  - Owned by agent: Video Board.
- InfoBoardItem
  - Purpose: Quick-reference franchise facts and display items.
  - Key fields: `id`, `franchise_id`, `label`, `value`, `category`, `priority`, `last_updated`.
  - Connects to: Franchise, TeamProfile, BroadcastRecap, WeeklyAIReport.
  - Owned by agent: Info Board.

## Agent Types

- Franchise Director
- GM Advisor
- Contract
- Scouting
- Draft Board
- Injury Tracker
- Transaction
- Weekly Opponent Prep
- Broadcast Recap
- League Newsroom
- Video Board
- Info Board
- Power Rankings
- Player Personality
- Handoff
