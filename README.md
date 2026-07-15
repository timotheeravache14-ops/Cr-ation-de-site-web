# La Pergola — Bar à tapas & Cave

Site vitrine pour **La Pergola**, bar à tapas et cave à Hermanville-sur-Mer.
Construit avec Next.js, TypeScript et Tailwind CSS, avec une scène 3D
interactive (cocktail qui tourne et suit la souris) réalisée avec React
Three Fiber.

## Fonctionnalités

- **Cocktail 3D interactif** (React Three Fiber / three.js) : verre à martini
  qui tourne en continu, s'incline vers le curseur et flotte doucement.
- **Charte douce** : crème, beige, vert kaki, terracotta et rose pâle,
  typographies Cormorant Garamond + Poppins.
- **Sections** : hero, présentation, ambiance / bar à cocktails, carte
  complète (tapas, plats, desserts, digestifs), avis, horaires et plan.
- **SEO** : métadonnées Open Graph, données structurées Restaurant
  (schema.org), `robots.txt` et `sitemap.xml`.
- **Accessible & responsive** : HTML sémantique, textes alternatifs,
  navigation clavier, mise en page mobile / tablette / desktop.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — serveur de développement
- `npm run build` — build de production
- `npm run start` — serveur de production
- `npm run lint` — ESLint

## Structure

- `app/` — routes, layout, métadonnées, `robots.ts`, `sitemap.ts`
- `components/cocktail/` — scène 3D (React Three Fiber) et son chargeur client
- `components/sections/` — sections de la page (header, hero, carte, avis…)
- `lib/menu.ts` — données de la carte, horaires, avis et coordonnées
- `public/images/` — photographies du restaurant
