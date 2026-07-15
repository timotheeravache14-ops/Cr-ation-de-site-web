---
name: accessibility-check
description: Audit the website for accessibility (a11y) issues - contrast, alt text, ARIA, keyboard navigation, heading structure. Use when the user asks to check accessibility, a11y, WCAG compliance, or "is the site accessible".
---

# Accessibility Check

Audit rendered pages for accessibility problems and report concrete fixes (not just findings).

## Workflow

### 1. Get the site running
- If there's a dev server (`npm run dev`, `npm start`, etc.), start it in the background.
- If the site is static HTML with no build step, serve it directly (e.g. `npx serve .` or open the file with Playwright's `file://`).
- Determine the base URL/port before continuing.

### 2. Run an automated scan
Prefer axe-core via Playwright (Chromium is pre-installed at `/opt/pw-browsers/chromium`, don't run `playwright install`):

```js
// scratchpad script, e.g. a11y-scan.mjs
import { chromium } from 'playwright';

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage();
await page.goto(process.argv[2]);
await page.addScriptTag({ url: 'https://unpkg.com/axe-core@4/axe.min.js' });
const results = await page.evaluate(() => axe.run());
console.log(JSON.stringify(results.violations, null, 2));
await browser.close();
```

If `axe-core` can't be fetched (no network to that CDN), fall back to a manual checklist pass using Playwright's accessibility tree (`page.accessibility.snapshot()`) plus the checklist below.

### 3. Manual checklist (always do this, even with axe-core)
- Every `<img>` has meaningful `alt` (or `alt=""` if purely decorative)
- Heading order is logical (`h1` → `h2` → `h3`, no skipped levels, exactly one `h1` per page)
- Interactive elements (buttons, links) are reachable and operable via keyboard (Tab/Enter) — verify with `page.keyboard.press('Tab')` traversal
- Visible focus indicator exists on interactive elements (don't rely on `outline: none` without a replacement)
- Color contrast meets WCAG AA (4.5:1 text, 3:1 large text/UI) — check via computed styles or axe
- Form inputs have associated `<label>`
- Links have descriptive text (avoid bare "click here")
- Page has a `lang` attribute on `<html>`

### 4. Test each page/route
Run the scan across every distinct page/template in the site, not just the homepage.

### 5. Report
List violations grouped by severity (critical/serious/moderate/minor per axe, or blocker/major/minor if manual), each with:
- File/component and line if known
- What's wrong
- The concrete fix

Fix straightforward issues directly if the user asked for a fix, not just an audit.
