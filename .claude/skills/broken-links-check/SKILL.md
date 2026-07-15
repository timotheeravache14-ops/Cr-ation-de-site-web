---
name: broken-links-check
description: Crawl the website to find broken internal/external links and missing images (404s). Use when the user asks to check for broken links, dead links, or missing images.
---

# Broken Links Check

Crawl the site and verify every link and image actually resolves.

## Workflow

### 1. Get the site running
Start the dev/static server and note the base URL.

### 2. Crawl and collect links
Use Playwright to visit each known page (start from the homepage, follow internal links breadth-first, stay within the site's own domain for the crawl but still validate external links found):

```js
import { chromium } from 'playwright';

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage();
const visited = new Set();
const toVisit = [baseUrl];
const allLinks = new Set();
const allImages = new Set();

while (toVisit.length) {
  const url = toVisit.pop();
  if (visited.has(url)) continue;
  visited.add(url);
  await page.goto(url);
  const hrefs = await page.$$eval('a[href]', as => as.map(a => a.href));
  const srcs = await page.$$eval('img[src]', imgs => imgs.map(i => i.src));
  hrefs.forEach(h => { allLinks.add(h); if (h.startsWith(baseUrl) && !visited.has(h)) toVisit.push(h); });
  srcs.forEach(s => allImages.add(s));
}
```

### 3. Validate every collected URL
For each link and image URL, issue a HEAD (fall back to GET if HEAD isn't supported) request and record the status code:

```bash
curl -s -o /dev/null -w "%{http_code}" -I "<url>"
```

Flag anything that isn't a 2xx or a reasonable 3xx redirect. Treat 404/410/500+ as broken. Also flag `href="#"` placeholders and `javascript:void(0)` only if the user cares about that (note them separately, they're not technically broken).

### 4. Check images render, not just resolve
A 200 response with an empty or non-image body is still broken — spot-check a few image responses' `content-type` header.

### 5. Report
List every broken link/image with:
- The page it was found on
- The broken URL
- The status code / error

Group internal vs external so the user can prioritize (internal broken links are their bug; external ones may be out of their control). Fix internal broken links directly if asked to fix rather than just audit.
