---
name: lighthouse-audit
description: Measure website performance, Core Web Vitals, best practices and SEO score using Lighthouse. Use when the user asks about site speed, performance score, Core Web Vitals, or "run lighthouse".
---

# Lighthouse Audit

Measure real performance/quality scores instead of guessing, and turn findings into concrete fixes.

## Workflow

### 1. Get the site running
Start the dev server (or a production build if one exists — prefer auditing a production build, since dev builds are often unoptimized and will show misleadingly bad performance scores) and note the URL/port.

### 2. Run Lighthouse via CLI
```bash
npx --yes lighthouse <url> \
  --chrome-path=/opt/pw-browsers/chromium \
  --output=json --output-path=<scratchpad>/lighthouse-report.json \
  --chrome-flags="--headless --no-sandbox"
```
Do not run `playwright install` — Chromium is already at `/opt/pw-browsers/chromium`.

If `npx lighthouse` isn't available offline, fall back to Playwright + manual metrics (see step 4).

### 3. Read the scores
Parse the JSON report for the four category scores (Performance, Accessibility, Best Practices, SEO) and the Core Web Vitals:
- LCP (Largest Contentful Paint) — target < 2.5s
- CLS (Cumulative Layout Shift) — target < 0.1
- TBT (Total Blocking Time) — target < 200ms
- FCP (First Contentful Paint) — target < 1.8s

### 4. Fallback without Lighthouse
If Lighthouse CLI isn't usable, use Playwright to at least capture:
```js
const [metrics] = await page.evaluate(() => JSON.stringify(performance.getEntriesByType('navigation')));
```
and manually check for common perf issues (see step 5).

### 5. Common issues to check regardless of tooling
- Unoptimized images (large file sizes, no `width`/`height` attributes causing layout shift, no lazy loading below the fold)
- Render-blocking CSS/JS in `<head>` without `defer`/`async`
- No font-display strategy (causes invisible text / layout shift on web font load)
- Large unused JS bundles (check bundle size if there's a build step)
- Missing caching headers (check deployment config)
- Too many third-party scripts

### 6. Fix and re-measure
Apply straightforward fixes (image dimensions, lazy loading, `defer`/`async`, font-display: swap) directly if asked for a fix, then re-run the audit to confirm improvement before reporting done.

### 7. Report
Give before/after scores when a fix was applied, not just a list of issues.
