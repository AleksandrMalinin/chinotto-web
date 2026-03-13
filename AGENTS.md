# AGENTS.md

## Project

Chinotto Site is the marketing website for Chinotto — a minimal local-first desktop thinking tool.

This repo is for the website only.

It is not:
- the desktop app
- a web app version of the product
- a dashboard
- a CMS-driven content platform
- a backend service

## Core goal

Build and maintain a fast, minimal, elegant static landing page that explains the product clearly and supports app download.

## Tech stack

- **Vite** — build tool and dev server
- **React 18** — UI
- **React Router** — client-side routes for landing and content pages
- **Tailwind CSS v4** — styling (`@tailwindcss/vite`)
- **Static build** — `pnpm build` → static output, deployable anywhere
- **Vercel-friendly** — static export + `vercel.json` rewrites for SPA routes
- **Minimal JavaScript** — landing and content pages are mostly static; no app shell required
- **No backend** — no API routes, no server
- **No CMS** — no content API or admin
- **No database**

We do **not** use Astro or another meta-framework. The current stack (Vite + React + React Router) is sufficient for the site.

The repo contains many Radix/shadcn-style UI components; the landing and content pages deliberately use almost none of them. Prefer simple markup and Tailwind for the site.

### Routes

- `/` — landing
- `/showcase` — logo showcase (dev/design)
- `/privacy` — privacy policy (content page)
- `/manifesto` — manifesto (content page)

Content pages use `ContentPageLayout` (shared header/footer, main content area). Footer links point to these paths; production needs rewrites so these URLs serve `index.html` (see `vercel.json`).

## Product framing

Chinotto is a desktop-first thinking tool for quickly capturing thoughts and recovering context later.

The product philosophy:
- Capture first
- Structure later
- Local-first
- No workspace overhead

It is not a generic note-taking SaaS.
It is not a task manager.
It is not a collaborative workspace.
It is not "organize your life" software.

## Design principles

- Minimal
- Calm
- Geometric
- Strong typography
- Spacious layout
- Premium but restrained
- Personal, not corporate
- Desktop-native feeling
- No loud startup aesthetics
- No generic SaaS gradients unless explicitly requested

## Engineering principles

- Prefer static pages and static content
- Prefer simple React components and clear JSX over heavy abstraction
- Add client-side JavaScript only when clearly necessary
- Keep dependencies minimal for the landing (do not pull in unused libs for the site)
- Avoid overengineering
- Favor readability over cleverness
- Keep component boundaries simple
- Build reusable sections only when they are actually reused
- Avoid premature abstraction

## What to optimize for

- fast load
- simple structure
- clean semantic HTML
- maintainable code
- restrained copy
- polished visual hierarchy
- responsive layout
- easy expansion; static content pages already in place:
  - /privacy, /manifesto (see **Routes** in Tech stack)

## What to avoid

- unnecessary React islands or client-side hydration for static content
- animation-heavy UI
- complex state management
- design system overkill
- fake testimonials
- pricing section
- newsletter forms by default
- SEO cargo cult
- generic startup buzzwords
- excessive copy
- unnecessary package additions

## Copy style

Write copy that is:
- short
- intelligent
- understated
- clear
- non-hype
- non-corporate

Avoid phrases like:
- supercharge your productivity
- revolutionize your workflow
- seamless collaboration
- all-in-one workspace
- organize your life
- unlock your potential

## Expected behavior from coding agents

When making changes:
1. preserve minimalism
2. do not introduce complexity without reason
3. explain tradeoffs briefly
4. prefer editing existing simple structure over inventing abstractions
5. keep the site coherent with the Chinotto brand
6. if a feature feels like marketing fluff, challenge it
7. if a dependency is avoidable, avoid it

## Output expectations

When proposing implementation:
- start with the simplest viable approach
- keep explanations concise
- mention any tradeoff or risk directly
- do not produce giant speculative architectures
