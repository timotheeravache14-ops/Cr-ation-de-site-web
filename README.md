# Chez Tuyet — Restaurant vietnamien à Caen

Site vitrine pour **Chez Tuyet**, restaurant vietnamien rue Gémare à Caen.
Next.js, TypeScript, Tailwind CSS, avec une scène 3D interactive d'un **bò bún**
(React Three Fiber) qui tourne et suit la souris.

## Fonctionnalités

- **Bò bún 3D interactif** modelé procéduralement (bol, vermicelles, bœuf,
  crudités, cacahuètes, nems), rotation continue + parallaxe à la souris.
- **Identité Chez Tuyet** : logo recréé (« CHEZ » + « Tuyet » script + point
  orange), palette vert jade / orange / rouge / crème, typographies Baloo 2,
  Pacifico et Nunito.
- **Sections** : hero, la cheffe Tuyet, spécialités (phở / bún / nems), carte
  complète, galerie, avis (5,0 / 337), infos pratiques (horaires, plan).
- **SEO** : métadonnées Open Graph, données structurées Restaurant, robots.txt,
  sitemap.xml. Accessible et responsive.

## Démarrer

```bash
npm install
npm run dev
```

## Déploiement

Export statique (`output: "export"`) déployé sur GitHub Pages via GitHub Actions
(`.github/workflows/deploy.yml`). Le `PAGES_BASE_PATH` est injecté par le
workflow pour gérer le chemin du projet.

## Structure

- `app/` — routes, layout, métadonnées, robots, sitemap
- `components/bobun/` — scène 3D du bò bún (React Three Fiber)
- `components/sections/` — sections de la page
- `components/wordmark.tsx` — logo typographique Chez Tuyet
- `lib/data.ts` — carte, horaires, avis, coordonnées
- `public/images/` — photographies du restaurant
