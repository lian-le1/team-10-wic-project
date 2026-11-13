# CareCapsule

CareCapsule is a family caregiving app that helps families coordinate medications and appointments for a loved one.

## Stack

- React + TypeScript, built with Vite
- Tailwind CSS v4 (via the `@tailwindcss/vite` plugin; imported in `src/index.css`)
- React Router (`react-router`; `BrowserRouter` in `src/main.tsx`, routes in `src/App.tsx`)
- Planned: Supabase for the database and login (auth) — not added yet

## Project structure

- `src/pages/` — page-level components, one per route
- `src/components/` — app-level shared components (`Layout.tsx`, `SiteHeader.tsx`, `SiteFooter.tsx`, `Logo.tsx`)
- `src/components/ui/` — reusable building blocks: `Button`/`ButtonLink`, `Card`, `Chip`, `Avatar`, `IconBadge`, `Icon`, `Container`, `SectionHeading`, `Accordion`
- `src/assets/` — icons and images exported from Figma
- `src/index.css` — design tokens in the Tailwind `@theme` block (colors, Nunito font, type scale, spacing, radius, shadows), taken from the Figma Welcome frame. Use these utilities (`bg-primary`, `text-ink`, `rounded-card`, `text-headline`, …) instead of hard-coded values
- `src/App.tsx` — route definitions (`/` is `WelcomePage`)
- `public/` — static assets served as-is
- `reference/original-index.html` — a teammate's earlier static HTML version, kept for reference only; it is not part of the build

## Commands

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run lint` — lint with oxlint
- `npm run preview` — preview the production build
