# Project Brief

## Madden FOX Sports Network Companion App

External Madden/NFL Franchise companion app for Rolland G, a franchise-focused Madden player who is not online-focused.

## Purpose

Create a broadcast-style franchise command center for Franchise mode. This is not an in-game mod and does not alter Madden, EA, NFL, league, team, or platform files.

## Branding Guardrails

Use original broadcast-inspired styling only. Do not copy or imply affiliation with FOX, NFL, EA, Madden, teams, leagues, broadcasts, logos, marks, uniforms, or protected assets.

## MVP Features

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

## Phase 2 Data Model Planning

Phase 2 will define planning-only data objects for the franchise command center before implementation.

- Franchise: Stores the active franchise context; key fields include `id`, `name`, `season`, `week`, `user_team`, and `status`; connects to TeamProfile, WeeklyGamePrep, WeeklyAIReport, BroadcastRecap, VideoBoardItem, and InfoBoardItem; owned by Franchise Director.
- TeamProfile: Summarizes a team identity and direction; key fields include `id`, `franchise_id`, `team_name`, `record`, `scheme_notes`, and `needs`; connects to Franchise, Player, DepthChart, WeeklyGamePrep, and Power Rankings; owned by GM Advisor.
- Player: Tracks roster member details; key fields include `id`, `team_profile_id`, `name`, `position`, `overall`, `traits`, and `status`; connects to TeamProfile, DepthChart, Injury, Transaction, ContractNote, and Player Personality; owned by GM Advisor.
- DepthChart: Captures positional ordering; key fields include `id`, `team_profile_id`, `position_group`, `starter_ids`, `backup_ids`, and `notes`; connects to TeamProfile, Player, Injury, and WeeklyGamePrep; owned by GM Advisor.
- WeeklyGamePrep: Holds matchup planning; key fields include `id`, `franchise_id`, `week`, `opponent_team_profile_id`, `focus_points`, and `risk_notes`; connects to Franchise, TeamProfile, DepthChart, Injury, WeeklyAIReport, and BroadcastRecap; owned by Weekly Opponent Prep.
- WeeklyAIReport: Produces weekly recommendations; key fields include `id`, `franchise_id`, `week`, `summary`, `recommendations`, and `confidence_notes`; connects to Franchise, WeeklyGamePrep, Injury, Transaction, ContractNote, and DraftProspect; owned by Franchise Director.
- Injury: Tracks availability and roster impact; key fields include `id`, `player_id`, `injury_type`, `status`, `return_estimate`, and `impact_note`; connects to Player, DepthChart, WeeklyGamePrep, and WeeklyAIReport; owned by Injury Tracker.
- Transaction: Logs roster movement; key fields include `id`, `franchise_id`, `player_id`, `type`, `date`, `details`, and `impact_note`; connects to Franchise, Player, ContractNote, and WeeklyAIReport; owned by Transaction.
- ContractNote: Records cap and extension context; key fields include `id`, `player_id`, `season`, `cap_note`, `extension_priority`, and `risk_note`; connects to Player, Transaction, WeeklyAIReport, and TeamProfile; owned by Contract.
- DraftProspect: Stores scouting targets; key fields include `id`, `name`, `position`, `school_label`, `grade`, `traits`, and `fit_note`; connects to TeamProfile, WeeklyAIReport, Scouting, and Draft Board; owned by Scouting.
- BroadcastRecap: Captures game-story summaries; key fields include `id`, `franchise_id`, `week`, `game_result`, `headline`, `key_moments`, and `storyline_notes`; connects to Franchise, WeeklyGamePrep, VideoBoardItem, and InfoBoardItem; owned by Broadcast Recap.
- VideoBoardItem: Organizes clip and highlight references; key fields include `id`, `franchise_id`, `title`, `category`, `source_note`, `related_week`, and `tags`; connects to Franchise, BroadcastRecap, Player, and WeeklyGamePrep; owned by Video Board.
- InfoBoardItem: Stores quick-reference display facts; key fields include `id`, `franchise_id`, `label`, `value`, `category`, `priority`, and `last_updated`; connects to Franchise, TeamProfile, BroadcastRecap, and WeeklyAIReport; owned by Info Board.
