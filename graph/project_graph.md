# Project Graph

## Core Project

Madden FOX Sports Network Companion App is an external Franchise mode command center for Rolland G.

## Primary Nodes

- User: Rolland G
- Product: External Madden Franchise companion app
- Experience: Broadcast-style franchise command center
- MVP: Dashboard, roster, prep, trackers, reports, recaps, boards
- Agents: Franchise, roster, scouting, contract, recap, newsroom, and handoff roles
- Brand Safety: Original broadcast-inspired identity only

## Boundaries

- Not an in-game mod
- No copied logos, marks, or protected assets
- No official affiliation implied

## Phase 2 Data Model Planning

Phase 2 adds planning-only data objects for franchise context, team management, weekly preparation, reports, roster movement, scouting, recaps, and board content.

- Franchise: purpose active franchise context; key fields `id`, `name`, `season`, `week`, `user_team`, `status`; connects to TeamProfile, WeeklyGamePrep, WeeklyAIReport, BroadcastRecap, VideoBoardItem, InfoBoardItem; owned by Franchise Director.
- TeamProfile: purpose team identity and direction; key fields `id`, `franchise_id`, `team_name`, `record`, `scheme_notes`, `needs`; connects to Franchise, Player, DepthChart, WeeklyGamePrep, Power Rankings; owned by GM Advisor.
- Player: purpose roster member tracking; key fields `id`, `team_profile_id`, `name`, `position`, `overall`, `traits`, `status`; connects to TeamProfile, DepthChart, Injury, Transaction, ContractNote, Player Personality; owned by GM Advisor.
- DepthChart: purpose positional ordering; key fields `id`, `team_profile_id`, `position_group`, `starter_ids`, `backup_ids`, `notes`; connects to TeamProfile, Player, Injury, WeeklyGamePrep; owned by GM Advisor.
- WeeklyGamePrep: purpose matchup planning; key fields `id`, `franchise_id`, `week`, `opponent_team_profile_id`, `focus_points`, `risk_notes`; connects to Franchise, TeamProfile, DepthChart, Injury, WeeklyAIReport, BroadcastRecap; owned by Weekly Opponent Prep.
- WeeklyAIReport: purpose weekly recommendations; key fields `id`, `franchise_id`, `week`, `summary`, `recommendations`, `confidence_notes`; connects to Franchise, WeeklyGamePrep, Injury, Transaction, ContractNote, DraftProspect; owned by Franchise Director.
- Injury: purpose availability and roster-impact tracking; key fields `id`, `player_id`, `injury_type`, `status`, `return_estimate`, `impact_note`; connects to Player, DepthChart, WeeklyGamePrep, WeeklyAIReport; owned by Injury Tracker.
- Transaction: purpose roster movement log; key fields `id`, `franchise_id`, `player_id`, `type`, `date`, `details`, `impact_note`; connects to Franchise, Player, ContractNote, WeeklyAIReport; owned by Transaction.
- ContractNote: purpose cap and extension context; key fields `id`, `player_id`, `season`, `cap_note`, `extension_priority`, `risk_note`; connects to Player, Transaction, WeeklyAIReport, TeamProfile; owned by Contract.
- DraftProspect: purpose scouting target tracking; key fields `id`, `name`, `position`, `school_label`, `grade`, `traits`, `fit_note`; connects to TeamProfile, WeeklyAIReport, Scouting, Draft Board; owned by Scouting.
- BroadcastRecap: purpose broadcast-style game-story summary; key fields `id`, `franchise_id`, `week`, `game_result`, `headline`, `key_moments`, `storyline_notes`; connects to Franchise, WeeklyGamePrep, VideoBoardItem, InfoBoardItem; owned by Broadcast Recap.
- VideoBoardItem: purpose clip and highlight reference organization; key fields `id`, `franchise_id`, `title`, `category`, `source_note`, `related_week`, `tags`; connects to Franchise, BroadcastRecap, Player, WeeklyGamePrep; owned by Video Board.
- InfoBoardItem: purpose quick-reference display facts; key fields `id`, `franchise_id`, `label`, `value`, `category`, `priority`, `last_updated`; connects to Franchise, TeamProfile, BroadcastRecap, WeeklyAIReport; owned by Info Board.

