# CareCapsule

CareCapsule is a family caregiving app that helps families coordinate medications and appointments for a loved one.

## Stack

- React + TypeScript, built with Vite
- Tailwind CSS v4 (via the `@tailwindcss/vite` plugin; imported in `src/index.css`)
- React Router (`react-router`; `BrowserRouter` in `src/main.tsx`, routes in `src/App.tsx`)
- Planned: Supabase for the database and login (auth) — not added yet

## Project structure

- `src/pages/` — page-level components, one per route
- `src/components/` — reusable components (e.g. `Layout.tsx`, the shared header/footer shell)
- `src/App.tsx` — route definitions
- `public/` — static assets served as-is
- `reference/original-index.html` — a teammate's earlier static HTML version, kept for reference only; it is not part of the build

## Commands

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run lint` — lint with oxlint
- `npm run preview` — preview the production build
