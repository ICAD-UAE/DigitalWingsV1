# DigitalWings

DigitalWings is a Next.js 14 application built with TypeScript and Tailwind CSS.

## Features

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## Routes

- `/` shows an “Under Construction” landing page
- `/home` shows the main site content
- Navigation links use `href="#"` and do not navigate

## Prerequisites

- Node.js and npm

## Installation

```bash
npm install
npm run dev
```

Open http://localhost:4028

## Production

```bash
npm run build
npm run serve -- -p 4028
```

Open http://localhost:4028

## Scripts

- `npm run dev` - start dev server (port 4028)
- `npm run build` - build for production
- `npm run serve` - start production server
- `npm run type-check` - run TypeScript type checking
- `npm run format` - format `src/` with Prettier

## Project Structure

```text
public/              static assets (images, favicon, etc.)
src/
  app/               Next.js App Router routes
  components/        reusable UI and common components
  styles/            Tailwind setup and global styles
next.config.mjs      Next.js configuration
tailwind.config.js   Tailwind configuration
postcss.config.js    PostCSS configuration
package.json         scripts and dependencies
```

## Notes

- Global background image is configured in `src/app/layout.tsx`.
