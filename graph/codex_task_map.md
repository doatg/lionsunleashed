# Codex Task Map

## Required Read Order

1. `graph/project_graph.md`
2. `graph/codex_task_map.md`
3. `docs/HANDOFF.md`

## Task Routing

- Project scope or MVP decisions: Franchise Director
- Team profile and franchise direction: Franchise Director
- Roster, depth chart, team direction: GM Advisor
- Contracts and cap notes: Contract
- Prospects and scouting notes: Scouting
- Draft rankings and pick strategy: Draft Board
- Injuries and availability: Injury Tracker
- Signings, cuts, trades: Transaction
- Weekly opponent plan: Weekly Opponent Prep
- Weekly AI insights and recommendations: Franchise Director
- Game recap: Broadcast Recap
- League stories: League Newsroom
- Clips and media notes: Video Board
- Quick facts and displays: Info Board
- Rankings: Power Rankings
- Player flavor and storylines: Player Personality
- Status updates: Handoff

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


## Phase 4 App Scaffold Planning

- Recommended stack: Vite, React, TypeScript.
- Package manager: npm unless explicitly changed later.
- First app structure: `src/main.tsx`, `src/App.tsx`, `src/styles.css`, `src/data/mockFranchise.ts`, `src/types/franchise.ts`, `src/components/`, and `src/screens/`.
- First vertical slice: Dashboard shell with static mock data only.
- First scaffold task after Phase 4: Create Vite React TypeScript app scaffold and Dashboard shell only.
- Guardrails: no copied protected branding, logos, marks, uniforms, broadcast graphics, or assets; original broadcast-inspired UI only; no API/backend; no real Madden file parsing; no external media ingestion; no licensed affiliation implied.

## Execution Rule

Work one scoped task at a time and update `docs/HANDOFF.md` when complete.

## Canonical Section Rule

When a task says to replace, clean, canonicalize, remove duplicates, remove stale names, or remove legacy sections, do not append a new section below the old one. Replace the target section completely. Delete stale, duplicate, legacy, or conflicting sections. The canonical version is the only version that should remain.

## Verification Rule

When a task includes a search command such as `rg` or `grep`, inspect the command output before committing. If forbidden text still appears, fix the files before committing. Do not summarize success if the diff still shows forbidden stale text.
