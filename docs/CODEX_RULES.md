# Codex Rules

1. Read `graph/project_graph.md` first.
2. Read `graph/codex_task_map.md` second.
3. Read `docs/HANDOFF.md` third.
4. Do not scan the whole repo unless necessary.
5. Work one scoped task at a time.
6. Update `docs/HANDOFF.md` after every completed task.
7. Keep the app external to Madden Franchise mode; do not build an in-game mod.
8. Use only original broadcast-inspired styling and naming.
9. Do not use copied FOX, NFL, EA, Madden, team, league, broadcast logos, marks, or assets.
10. Do not imply official affiliation.

## Canonical Section Rule

When a task says to replace, clean, canonicalize, remove duplicates, remove stale names, or remove legacy sections, do not append a new section below the old one. Replace the target section completely. Delete stale, duplicate, legacy, or conflicting sections. The canonical version is the only version that should remain.

## Verification Rule

When a task includes a search command such as `rg` or `grep`, inspect the command output before committing. If forbidden text still appears, fix the files before committing. Do not summarize success if the diff still shows forbidden stale text.
