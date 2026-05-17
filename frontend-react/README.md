# Smart Box Cricket Operating System - Frontend

Vite + React + Tailwind + shadcn/ui-ready architecture for realtime box cricket operations.

## Architecture
- `src/pages`: feature screens (landing, booking, live center, scoring, dashboards)
- `src/components`: reusable UI blocks (landing/live/scoring/dashboard)
- `src/store`: Zustand UI and match stores
- `src/services`: API and realtime (Laravel Echo + Reverb)
- `src/hooks`: realtime subscription hooks

## Realtime Events
- `score.updated`
- `wicket.fallen`
- `innings.changed`
- `match.finished`

## Notes
Frontend only handles presentation, API calls, and realtime listeners. Match/scoring business logic remains in Laravel backend.
