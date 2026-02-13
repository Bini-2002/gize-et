## Project Overview
- Vite + React 19 + TypeScript app with Tailwind CSS v4 via the Vite plugin.
- Client-side routing uses `HashRouter` in `src/App.tsx` with routes under `src/pages`.
- Shared layout (nav + footer) lives in `src/components/Layout.tsx` and wraps all routes.
- Reusable UI pieces like `Hero` are in `src/components`.
- Static content and data live in `src/constants.tsx` (colors, services, FAQ).
- Icons use `lucide-react` (see `Layout.tsx`).

## Key Files
- `src/index.tsx` boots React and renders `App` into `#root`.
- `src/App.tsx` is the routing map and includes the `ScrollToTop` helper.
- `src/pages/*` contains route-level pages (`Home`, `About`, `Services`, etc.).
- `src/components/Layout.tsx` controls global nav/footer and responsive menu state.
- `src/constants.tsx` is the main content config for services and FAQ.
- `vite.config.ts` enables React and Tailwind v4 via `@tailwindcss/vite`.

## Dev Workflows
- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build` (runs `tsc -b` then `vite build`)
- Preview: `npm run preview`
- Lint: `npm run lint`

## Conventions
- Prefer adding/adjusting page routes in `App.tsx` and link targets in `Layout.tsx`.
- Keep static text/links/images in `constants.tsx` when used across pages.
- Components are written as typed React function components (`React.FC`).
- Tailwind utility classes are used directly in JSX; keep layout/visual changes there.

## Tailwind v4 Notes
- This project uses the Vite integration (`@tailwindcss/vite`).
- Do not run `tailwindcss init -p`; it is not supported in v4.
