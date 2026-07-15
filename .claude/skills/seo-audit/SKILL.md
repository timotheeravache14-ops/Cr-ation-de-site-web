---
name: seo-audit
description: Audit the website for SEO fundamentals - meta tags, titles, sitemap, robots.txt, structured data, canonical URLs, Open Graph. Use when the user asks to check SEO, referencement, meta tags, or search engine visibility.
---

# SEO Audit

Check the site's on-page and technical SEO fundamentals, and report/fix concrete gaps.

## Workflow

### 1. Inventory pages/routes
List every page/route the site produces (check the router config, `pages/`/`app/` directory, or static HTML files).

### 2. Per-page checklist
For each page, verify:
- `<title>` exists, is unique per page, and is roughly 50-60 characters
- `<meta name="description">` exists, is unique, and is roughly 120-160 characters
- Exactly one `<h1>` that reflects the page's topic
- `<link rel="canonical">` points to the correct URL
- Open Graph tags present: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- Twitter card tags if relevant (`twitter:card`, `twitter:title`, etc.)
- Images have descriptive `alt` text (also an accessibility win)
- Internal links use descriptive anchor text, not "click here"
- URL structure is clean and human-readable (no query-string-only routes for content pages)

### 3. Site-wide checks
- `robots.txt` exists at the root and doesn't accidentally block indexing (`Disallow: /` on a live site is a red flag)
- `sitemap.xml` exists, is referenced in `robots.txt`, and lists all public pages with valid URLs
- Structured data (JSON-LD) present where relevant — e.g. `Organization`, `WebSite`, `BreadcrumbList`, `Article`/`Product` schema depending on the site's purpose. Validate the JSON-LD is syntactically valid.
- Site is mobile-responsive (pairs with the `responsive-check` skill) — mobile-friendliness is a ranking factor
- Page load performance (pairs with the `lighthouse-audit` skill) — Core Web Vitals affect ranking
- HTTPS is used (check deployment config, not applicable to local dev)
- No duplicate content across pages without canonical tags

### 4. Verify against rendered HTML
Don't just read source files — for JS-rendered sites (React/Next/etc.), fetch the actually rendered HTML (via Playwright, headless Chromium at `/opt/pw-browsers/chromium`) to confirm meta tags are present in what crawlers would see, not only in component source.

### 5. Report
List gaps per page/site-wide, each with the concrete fix. Apply straightforward fixes (missing meta description, missing alt text, missing sitemap) directly if the user asked for a fix rather than just an audit.
