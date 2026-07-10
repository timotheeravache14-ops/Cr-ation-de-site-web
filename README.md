# Portfolio — Timothée Ravache · Création de sites web

Portfolio de démonstration : quatre sites vitrines fictifs, chacun avec sa
propre direction artistique, plus la page d'accueil qui les réunit en
démos live.

## Structure

| Chemin | Projet | Univers |
|---|---|---|
| `/` | **Portfolio** | Hub studio — cartes avec prévisualisations live (iframes) |
| `/restaurant/` | **Maison Noir** | Gastronomique nocturne — noir & or, scroll-telling 3 actes |
| `/gite/` | **Mas des Oliviers** | Maison d'hôtes Provence — pierre & terracotta, sélecteur de chambres |
| `/saas/` | **Nova** | SaaS analytics IA — galaxie 3D Three.js, GSAP, Lenis |
| `/plaquiste/` | **Laurent Udol** | Artisan plaquiste — plâtre & sauge, slider avant/après |

## Stack

Sites statiques autonomes : HTML + Tailwind (CDN) + CSS/JS vanilla.
Le site SaaS charge en plus GSAP + ScrollTrigger, Lenis et Three.js par CDN.
Aucune étape de build. Toutes les animations respectent `prefers-reduced-motion`.

## Déploiement

N'importe quel hébergeur statique. Le plus simple :
[Netlify Drop](https://app.netlify.com/drop) — glisser le dossier (ou le zip)
du dépôt ; chaque site est servi sur son chemin (`/restaurant/`, etc.).

## Outils d'atelier

Design systems générés avec le skill **UI/UX Pro Max** (`.claude/skills/`),
MCP **Magic** (21st.dev) configuré dans `.mcp.json` (clé via `MAGIC_API_KEY`).

Tous les contenus (marques, personnes, avis) sont fictifs — démonstrations
de création.
