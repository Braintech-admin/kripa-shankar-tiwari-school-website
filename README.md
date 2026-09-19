# Kripa Shankar Tiwari School Website — Next.js + TypeScript

A professional, responsive school website based on the supplied visual reference.

## Stack
- Next.js 16
- React 19
- TypeScript
- Lucide React icons
- App Router

## Run
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Replace images
Put the real school photos in:
- `public/images/logo.svg`
- `public/images/school-building.svg`
- `public/images/principal.svg`
- `public/images/manager.svg`
- `public/images/hero/hero-1.svg` through `hero-3.svg`
- `public/images/gallery/gallery-1.svg` through `gallery-12.svg`

The current files are placeholders so the site can run immediately.

## Dynamic content
Hero slides and gallery cards are data-driven in `src/data/site.ts`.
Later, this same structure can be moved to an API/database/admin panel without redesigning the UI.
