---
name: component-scaffold
description: Generate a new page, section, or component that matches the project's existing conventions (file structure, naming, styling approach). Use when the user asks to add a new page, create a new component/section, or scaffold a new part of the site.
---

# Component Scaffold

Add new pages/components/sections that fit seamlessly into what already exists, instead of inventing a new pattern each time.

## Workflow

### 1. Learn the existing conventions first
Before writing anything, inspect at least 2-3 existing pages/components (if any exist yet) to determine:
- File/folder naming convention (`PascalCase`, `kebab-case`, `camelCase`)
- Where pages/components live (`src/pages`, `src/components`, `app/`, flat HTML files, etc.)
- Styling approach in use (CSS modules, Tailwind, styled-components, plain CSS files, inline) — match it, don't introduce a second styling system
- Whether there's a shared layout/header/footer component to reuse rather than duplicate
- Import/export style (default vs named exports)
- Any design tokens (colors, spacing, fonts) defined centrally (CSS variables, a theme file, Tailwind config) — use those instead of hardcoding new values

If this is the very first page/component in the project, ask the user for their stack preference (plain HTML/CSS/JS vs a framework) before scaffolding, rather than assuming one.

### 2. Scaffold
Create the new file(s) following the discovered convention exactly — same folder depth, same naming pattern, same styling method. Wire it into the existing routing/navigation (add the link to the nav/menu component, add the route if the framework requires explicit route registration) so it's actually reachable, not orphaned.

### 3. Reuse, don't duplicate
Pull in existing shared components (header, footer, button, card, etc.) rather than re-implementing them. If a needed shared piece doesn't exist yet and will clearly be reused (e.g. this is the second page needing a hero section), extract it — but don't preemptively abstract for a single use.

### 4. Match content tone/structure if applicable
If scaffolding a content page (About, Contact, etc.), mirror the heading hierarchy and content structure of similar existing pages.

### 5. Verify
Start the dev server and visually confirm the new page/component renders correctly and is reachable via navigation (use Playwright screenshot or the `run` skill). Check it doesn't break responsive layout (pairs with `responsive-check`) or introduce accessibility gaps (pairs with `accessibility-check`) if the change is substantial.

### 6. Report
State what was added and where, and link it to the relevant file paths.
