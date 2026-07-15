---
name: deploy
description: Deploy the website to a hosting provider (Vercel, Netlify, GitHub Pages, or other static host). Use when the user asks to deploy, publish, put the site online, or go live.
---

# Deploy

Ship the site to a live host. Deployment is not fully reversible and affects a shared/public system — always confirm with the user before deploying, even if they said "deploy" casually, unless they've already named the target and clearly want it done now.

## Workflow

### 1. Determine the target
Ask the user which host they want if it's not already configured in the repo (look for `vercel.json`, `netlify.toml`, a `.github/workflows/*.yml` deploying to Pages, or existing hosting config first — don't ask if it's already obvious from the repo).

Common options for this kind of project:
- **Vercel** — best for Next.js/React/frontend frameworks, zero-config for most JS frameworks
- **Netlify** — similar to Vercel, good for static sites + forms/functions
- **GitHub Pages** — free, good for pure static HTML/CSS/JS sites with no server-side needs
- **Cloudflare Pages** — similar to Netlify/Vercel

### 2. Build locally first
Run the project's build command (`npm run build` or equivalent) and confirm it succeeds with no errors before attempting any deploy. Never deploy a build that doesn't pass locally.

### 3. Check for secrets/env vars
If the project needs environment variables (API keys, etc.), confirm they're configured on the hosting provider's dashboard — never commit secrets to the repo to make a deploy work.

### 4. Deploy
- **Vercel**: `npx vercel --prod` (requires the user to be logged in / have a token; if not authenticated, tell the user to run this themselves or provide a `VERCEL_TOKEN`)
- **Netlify**: `npx netlify deploy --prod`
- **GitHub Pages**: push the built output to a `gh-pages` branch (or configure a GitHub Actions workflow that builds and deploys on push to main) — this repo's GitHub MCP tools can create/update the workflow file directly
- **Cloudflare Pages**: `npx wrangler pages deploy <build-dir>`

Do not invent credentials or silently create accounts on the user's behalf — if a login/token is required and isn't already configured, stop and ask the user to provide it or run the interactive login step themselves.

### 5. Verify the live site
After deploying, fetch the live URL and spot-check that the homepage renders and a couple of key pages load correctly (use Playwright or a simple `curl` status check).

### 6. Report
Give the user the live URL and confirm what was deployed (commit hash/branch). If this created or modified CI/CD config, say so explicitly — that's a higher-blast-radius change worth flagging.
