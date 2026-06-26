# Relationships

- Rolland G uses the companion app to manage Franchise mode.
- Franchise Dashboard summarizes roster, weekly prep, injuries, transactions, cap, scouting, and reports.
- Team Roster / Depth Chart informs GM Advisor, Contract, Injury Tracker, and Weekly Opponent Prep.
- Scouting and Draft Board support long-term roster planning.
- Broadcast Recap and League Newsroom create franchise storytelling.
- Video Board and Info Board present media and quick-reference content.
- Handoff records completed work and next steps after each task.
- Brand Safety constrains all naming, visuals, assets, and copy.

## Phase 2 Data Model Relationships

- Franchise anchors TeamProfile, WeeklyGamePrep, WeeklyAIReport, BroadcastRecap, VideoBoardItem, and InfoBoardItem; owned by Franchise Director.
- TeamProfile groups Player and DepthChart records while feeding WeeklyGamePrep and Power Rankings; owned by GM Advisor.
- Player connects roster status to DepthChart, Injury, Transaction, ContractNote, and Player Personality context; owned by GM Advisor.
- DepthChart turns Player availability into matchup and roster planning for WeeklyGamePrep; owned by GM Advisor.
- WeeklyGamePrep connects the current Franchise week, opponent TeamProfile, DepthChart, Injury notes, WeeklyAIReport recommendations, and BroadcastRecap storylines; owned by Weekly Opponent Prep.
- WeeklyAIReport summarizes signals from WeeklyGamePrep, Injury, Transaction, ContractNote, and DraftProspect for franchise decisions; owned by Franchise Director.
- Injury updates Player availability and affects DepthChart, WeeklyGamePrep, and WeeklyAIReport; owned by Injury Tracker.
- Transaction records roster movement for Franchise and Player records and can trigger ContractNote and WeeklyAIReport updates; owned by Transaction.
- ContractNote attaches cap and extension context to Player, Transaction, WeeklyAIReport, and TeamProfile planning; owned by Contract.
- DraftProspect links scouting observations to TeamProfile needs, WeeklyAIReport priorities, Scouting notes, and Draft Board strategy; owned by Scouting.
- BroadcastRecap converts WeeklyGamePrep outcomes into recap storylines and board items; owned by Broadcast Recap.
- VideoBoardItem links Franchise media notes to BroadcastRecap, Player, and WeeklyGamePrep context; owned by Video Board.
- InfoBoardItem links Franchise quick facts to TeamProfile, BroadcastRecap, and WeeklyAIReport context; owned by Info Board.
