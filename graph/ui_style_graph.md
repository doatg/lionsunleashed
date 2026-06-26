# UI Style Design Graph

## Purpose

`graph/ui_style_graph.md` is the visual design source of truth for Madden Franchise Command Center. Codex must read this file before any UI-related implementation, styling, layout, component, screen, or design-system task.

## Required UI Read Order

Before any UI task, Codex must read:

1. `graph/project_graph.md`
2. `graph/ui_style_graph.md`
3. `graph/codex_task_map.md`
4. `docs/HANDOFF.md`

## Visual Identity

Madden Franchise Command Center should feel like a premium football franchise companion app: a franchise-game hub, broadcast war room, GM / coach command center, and desktop-first sports operations console. The interface should suggest operational urgency, season planning, roster intelligence, and broadcast-ready franchise storytelling without copying protected designs.

The design must remain original and protected-safe:

- Original broadcast-inspired sports operations identity only.
- No copied Madden, EA, NFL, team, league, broadcaster, or real-player designs, assets, marks, logos, uniforms, graphics, packages, overlays, likenesses, or trade dress.
- No wording, layout, or visual treatment that implies licensed connection with EA, Madden, NFL, FOX, a team, league, broadcaster, or real player.
- Use fictional / mock franchise data unless a future task explicitly introduces safe user-provided data.

## Global App Shell

All dashboard and subpage screens must share the same persistent command-center shell:

- Persistent left command navigation rail for primary screen navigation.
- Persistent top live ticker/status strip for week, record, alerts, and operational status.
- Central screen canvas for the active screen content.
- Optional right-side command board area for alerts, actions, AI recommendations, media notes, or quick facts.
- Dashboard and subpages must feel like different stations in the same franchise command center, not separate landing pages.

The shell should be desktop-first and dense enough to feel like a sports operations console, while remaining readable and responsive when adapted later.

## Screen Layout Standard

Every major screen should use a consistent screen composition:

- Screen eyebrow label for context such as week, department, or franchise station.
- Strong screen title that clearly identifies the active command center area.
- Tactical subtitle that explains the screen's operational purpose.
- Primary feature panel for the most important summary, decision, player, matchup, or storyline.
- Secondary data panels for supporting roster, report, contract, injury, scouting, or media information.
- Side command / alert panels where useful for next actions, warnings, recommendations, or notes.
- Rating / status badges where useful for overall grades, priorities, risk, readiness, health, fit, or urgency.
- Football operations rows / tables where useful for depth charts, player lists, injury rows, contract windows, prospects, or transactions.

## Visual Component System

### AppShell

- Purpose: Provides the persistent command-center frame that holds navigation, ticker, screen canvas, and optional command board zones.
- Use where: Around every primary app screen and major subpage.
- Style notes: Desktop-first, premium sports operations console, layered dark surfaces, confident spacing, strong hierarchy, and consistent shell proportions.
- Must not: Become a one-off landing page, hide primary navigation, imitate protected broadcast packages, or create separate shells for individual pages.

### SidebarNav

- Purpose: Serves as the persistent left command navigation rail for canonical screens and future modules.
- Use where: Global app shell on dashboard and every subpage.
- Style notes: Compact command labels, active-state clarity, franchise operations tone, optional section grouping, and readable rail density.
- Must not: Be replaced by top pill navigation as the primary navigation, use protected logos, or create page-specific nav systems.

### TopTicker

- Purpose: Provides persistent live status, week context, record, alerts, and concise franchise signals.
- Use where: Global app shell above the central canvas.
- Style notes: Broadcast-inspired motion/status-strip feel, concise ticker items, high-contrast alert states, and no copied broadcaster graphics.
- Must not: Use official network styling, imply live official data, or become decorative filler without operational value.

### ScreenHeader

- Purpose: Establishes each screen's station identity with eyebrow, title, tactical subtitle, and optional status badges.
- Use where: At the top of every major screen canvas.
- Style notes: Strong title scale, condensed sports-command language, clear hierarchy, and alignment with the shell grid.
- Must not: Use generic admin headings, omit tactical context, or introduce unrelated page-specific styling.

### FeaturePanel

- Purpose: Highlights the central decision, spotlight player, matchup, storyline, roster concern, or franchise summary.
- Use where: Main content area of dashboard, roster, prep, recap, scouting, contract, and profile screens.
- Style notes: Premium card treatment, strong title, metric strips, badges, and editorial/operations framing.
- Must not: Be a placeholder-only card, a generic flat stat block, or a copied game/broadcast graphic.

### CommandPanel

- Purpose: Presents recommendations, actions, alerts, decisions, or command-board notes.
- Use where: Right-side board areas, weekly AI reports, dashboard action lists, game prep, contracts, injuries, and scouting.
- Style notes: Prioritized lists, urgent-but-controlled visual weight, badge-driven status, and concise action language.
- Must not: Become random text storage, duplicate the feature panel, or use inconsistent alert styling.

### PlayerCard

- Purpose: Shows player identity, position, role, rating, status, traits, and notes in a franchise-safe way.
- Use where: Roster, depth chart, injuries, contracts, recap, video board, and player-focused feature panels.
- Style notes: Rating-forward, role-focused, no real-player likeness requirements, compact data hierarchy, and operations context.
- Must not: Use real-player likenesses/assets, team marks, copied Madden card layouts, or unsupported official ratings presentation.

### RatingBadge

- Purpose: Displays concise numeric or categorical evaluation such as overall, risk, fit, health, priority, readiness, or grade.
- Use where: Player cards, roster rows, scouting rows, contract candidates, injuries, and dashboard summaries.
- Style notes: High-contrast badge shapes, consistent label/value pairing, and color used for status meaning.
- Must not: Overuse colors randomly, imply official Madden ratings, or conflict with PriorityBadge meanings.

### AttributeBar

- Purpose: Visualizes a single strength, weakness, trait, readiness level, risk level, or roster grade.
- Use where: Team profile, roster detail, player detail, scouting, game prep, and AI report screens.
- Style notes: Compact bars with labels and values, tactical color scale, and clear comparison value.
- Must not: Mimic protected game UI bars or appear without explanatory labels.

### DataRow

- Purpose: Structures football operations records such as players, injuries, transactions, prospects, contracts, clips, or facts.
- Use where: Tables, lists, boards, and tracker sections across subpages.
- Style notes: Dense but readable rows, position/status chips, right-aligned metrics, and clear hover/active affordances when implemented.
- Must not: Degrade into plain admin table rows without sports context or create inconsistent row layouts per page.

### DepthChartGroup

- Purpose: Groups players by position or unit with starter/back-up ordering, role notes, and roster needs.
- Use where: Roster / Depth Chart and related dashboard or game prep summaries.
- Style notes: Position headers, starter emphasis, backup rows, need labels, injury/contract indicators, and compact rating cues.
- Must not: Flatten depth charts into unstructured lists or copy official team/game roster presentation.

### BoardPanel

- Purpose: Creates a board-style surface for draft rooms, video boards, info boards, matchup boards, and franchise notes.
- Use where: Scouting / Draft Board, Video Board, Info Board, Weekly Game Prep, dashboard command zones, and recap story desks.
- Style notes: Board-like organization, grouped cards/rows, priority and status markers, and editorial/operations tone.
- Must not: Become an unrelated kanban clone, generic admin grid, or page-specific visual island.

### PriorityBadge

- Purpose: Marks urgency, priority, decision window, roster need, risk, or action level.
- Use where: Command panels, contracts, scouting, injuries, roster needs, AI reports, and dashboard alerts.
- Style notes: Small, consistent, semantically colored, and always paired with meaningful context.
- Must not: Conflict with RatingBadge, use arbitrary labels, or create alarm fatigue.

### TickerItem

- Purpose: Represents one concise status update inside the top ticker/status strip.
- Use where: TopTicker and limited inline ticker-like strips on feature panels when useful.
- Style notes: Short status copy, optional category label, subtle separators, and timely franchise context.
- Must not: Use official live-data claims, copied network phrasing, or long paragraph content.

### AlertStack

- Purpose: Stacks urgent roster, injury, contract, scouting, game prep, or AI alerts in priority order.
- Use where: Dashboard side board, weekly AI report, injury tracker, contract board, and game prep pages.
- Style notes: Vertical priority hierarchy, severity labels, concise action copy, and scannable spacing.
- Must not: Mix unrelated visual patterns, bury critical items, or replace full page content with alerts only.

## Page Archetypes

### Dashboard / Franchise Hub

The dashboard should feel like the front franchise hub, not a flat admin dashboard. It should summarize roster, game prep, AI report, injuries, contracts, scouting, recap, video board, and info board content through featured panels, stat / rating strips, and command boards.

### Team Profile

The team profile should feel like a franchise identity page covering team identity, season status, scheme, strengths, weaknesses, and franchise goals.

### Roster / Depth Chart

The roster area should establish the detailed player / page visual standard. It should include a featured player panel, roster / depth chart groups, rating-style numbers, position groups, starter / backup rows, roster needs, injury watch, and contract watch.

### Weekly Game Prep

Weekly game prep should feel like an opponent matchup board with offensive plan, defensive plan, key matchup, risks, and win condition.

### Weekly AI Report

Weekly AI report should feel like a coach / GM recommendation board with risks, opportunities, and action items.

### Injury / Transaction Tracker

The injury and transaction tracker should include an availability board, injury rows, recent movement rows, and roster impact tags.

### Contract / Cap Notes

Contract and cap notes should feel like a front-office board with extension candidates, cap risks, decision windows, and priority tags.

### Scouting / Draft Board

Scouting and draft board should feel like a draft room board with ranked prospects, grades, projected rounds, and team need fits.

### Broadcast Recap

Broadcast recap should feel like a story desk with headline, key players, story beats, and next-week storyline.

### Video Board

Video board should feel like a media wall with clip ideas, production status, and related player / week context.

### Info Board

Info board should feel like a quick-reference wall with facts, reminders, milestones, and franchise notes.

## Forbidden UI Drift

Codex must avoid:

- Generic flat admin dashboards.
- Random one-off page styles.
- Placeholder-only pages.
- Top pill navigation as the primary app navigation.
- Isolated landing page style that does not carry across screens.
- Copied Madden, EA, NFL, team, league, broadcaster, or real-player styles, marks, uniforms, graphics, logos, likenesses, or assets.
- Any design language that implies licensed connection with a protected brand, team, league, broadcaster, or game publisher.

## Implementation Rule

Before any UI task, Codex must read:

1. `graph/project_graph.md`
2. `graph/ui_style_graph.md`
3. `graph/codex_task_map.md`
4. `docs/HANDOFF.md`
