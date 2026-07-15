---
name: responsive-check
description: Verify the website layout works correctly across screen sizes (mobile, tablet, desktop) by taking screenshots at multiple breakpoints and spotting layout breaks. Use when the user asks to check responsiveness, mobile view, or "does it work on phone/tablet".
---

# Responsive Check

Catch layout breakage across screen sizes using real rendered screenshots, not just reading CSS.

## Workflow

### 1. Get the site running
Start the dev server or static server and note the base URL. Reuse an already-running server if one exists rather than starting a duplicate.

### 2. Define breakpoints
Use these unless the project's CSS defines its own breakpoints (check for custom media queries first and use those instead):
- Mobile: 375×667 (iPhone SE-ish) and 390×844 (modern iPhone)
- Tablet: 768×1024
- Desktop: 1280×800
- Wide: 1920×1080

### 3. Screenshot each page at each breakpoint
Use Playwright with the pre-installed Chromium (`/opt/pw-browsers/chromium`, do not run `playwright install`):

```js
import { chromium } from 'playwright';

const sizes = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 800 },
];

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
for (const size of sizes) {
  const page = await browser.newPage({ viewport: { width: size.width, height: size.height } });
  await page.goto(process.argv[2]);
  await page.screenshot({ path: `${SCRATCHPAD_DIR}/${size.name}.png`, fullPage: true });
  await page.close();
}
await browser.close();
```

Save screenshots to the session's scratchpad directory (given in your system prompt), not the repo. Replace `SCRATCHPAD_DIR` above with that path.

### 4. Inspect each screenshot for
- Horizontal overflow / unwanted scrollbars
- Overlapping or clipped text and elements
- Touch targets too small on mobile (buttons/links under ~44×44px)
- Navigation that doesn't collapse to a mobile menu when needed
- Images that don't scale down (fixed pixel widths instead of `max-width: 100%`)
- Text that becomes unreadably small or huge
- Fixed-position elements covering content on small viewports

### 5. Fix and re-verify
Apply fixes (usually CSS: flexbox/grid, `max-width`, media queries, relative units) directly if the user asked for a fix, then re-screenshot the affected breakpoint to confirm the fix worked before reporting done.

### 6. Report
Send the before/after screenshots to the user via SendUserFile when reporting layout issues — screenshots are the evidence, not just a text description.
