# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sierra Environmental and Social Services Inc. (SESS) corporate website built with React 18 and Vite.

## Development Commands

```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Production build (outputs to dist/)
npm run preview  # Preview production build locally
npm start        # Production server (Railway deployment)
```

No test framework or linter is currently configured.

## Architecture

**Stack:** React 18 + React Router 6 + Vite 5 + Framer Motion

**Routing Structure (App.jsx):**
- `/` - HomePage (Hero + Mission sections)
- `/about` - About page
- `/services` - Services page
- `/contact` - Contact page

All pages share a common layout: Navbar → Page Content → Footer

**Entry Point Flow:**
1. `index.html` → `src/main.jsx` (React + BrowserRouter init) → `src/App.jsx` (routing)

## Styling

Global CSS variables defined in `src/index.css`:
- `--primary`, `--primary-dark`, `--primary-light` (blue palette)
- `--accent` (green), `--accent-secondary` (red)
- `--text-dark`, `--text-light`, `--text-muted`
- `--bg-light`, `--bg-gradient`, `--card-shadow`, `--transition`

Use these CSS custom properties for consistent theming across components.

## Deployment

Deployed to Railway.app via `railway.json`. Build uses NIXPACKS with `npm run build && npm run start`.
