# Project Brief

## Madden Franchise Command Center

External Madden Franchise companion app for Rolland G, a franchise-focused Madden player who is not online-focused.

## Purpose

Create a broadcast-style franchise command center for Franchise mode. This is not an in-game mod and does not alter Madden, EA, NFL, league, team, or platform files.

## Branding Guardrails

Use original broadcast-inspired styling only. Do not copy or imply licensed affiliation with NFL, EA, Madden, teams, leagues, broadcasts, logos, marks, uniforms, or protected assets.

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

Recommended stack: Vite, React, and TypeScript. Use npm unless explicitly changed later.

First planned app structure: `src/main.tsx`, `src/App.tsx`, `src/styles.css`, `src/data/mockFranchise.ts`, `src/types/franchise.ts`, `src/components/`, and `src/screens/`.

First vertical slice: Dashboard shell with static mock data only. No API/backend, no real Madden file parsing, and no external media ingestion in the initial scaffold.
