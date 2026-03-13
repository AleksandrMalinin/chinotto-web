# Chinotto Site

Marketing website for Chinotto — a minimal local-first desktop thinking tool. This repo is the **website only** (landing, privacy, manifesto). Not the desktop app, not a web app, not a backend.

## Run

```bash
pnpm install
pnpm dev
```

Open http://localhost:5173 (or the port Vite prints).

## Build

```bash
pnpm build
```

Static output in `dist/`. Deploy to Vercel, Netlify, or any static host. For client-side routes (`/privacy`, `/manifesto`, `/showcase`) to work on direct load or refresh, the host must serve `index.html` for those paths (see `vercel.json` for Vercel).

## Stack

Vite, React 18, React Router, Tailwind CSS v4. Static build, no backend, no CMS.

See [AGENTS.md](AGENTS.md) for project goals, tech stack details, design and engineering principles, and guidance for coding agents.
