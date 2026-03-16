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

## Running in GitHub Codespaces

1. Create a new Codespace for this repository
2. The dev container will automatically install dependencies and prepare the environment
3. Once the container is ready, run the development server:

```bash
npm run dev
```

4. When the server starts, you'll see a notification about port 4028 being available. Click "Open in Browser" or visit http://localhost:4028

## Local Installation

```bash
npm install
npm run dev
```

Open http://localhost:4028

## Production

```bash
npm run build
npm run start
```

Open http://localhost:4028

## Scripts

- `npm run dev` - start dev server (port 4028)
- `npm run build` - build for production
- `npm run start` - start production server
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