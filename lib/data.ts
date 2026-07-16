export type MenuItem = { name: string; description?: string; price: string; tags?: string[] }
export type MenuCategory = { id: string; title: string; subtitle?: string; items: MenuItem[] }

export const menu: MenuCategory[] = [
  {
    id: "entrees",
    title: "Entrées à partager",
    subtitle: "Khai vị",
    items: [
      { name: "Nems ×3", description: "Porc, poulet, légumes", price: "4 €" },
      { name: "Samoussas ×2", description: "Légumes", price: "3 €", tags: ["végé"] },
      { name: "Raviolis ×2", description: "Crevettes", price: "3 €" },
      { name: "Spring roll", description: "Crevettes", price: "3,50 €" },
    ],
  },
  {
    id: "plats",
    title: "Les recettes de Tuyet",
    subtitle: "Món chính",
    items: [
      {
        name: "Phở",
        description: "Soupe de nouilles de riz — Gà (poulet) · Bò (bœuf) · Chay (végé)",
        price: "12 €",
      },
      {
        name: "Bún",
        description: "Vermicelles & crudités — Gà (poulet) · Bò (bœuf) · Chay (végé)",
        price: "12 €",
      },
    ],
  },
  {
    id: "formules",
    title: "Nos formules",
    subtitle: "Le midi comme le soir",
    items: [
      { name: "Menu 1", description: "Entrée + plat", price: "15 €" },
      { name: "Menu 2", description: "Plat + dessert", price: "15 €" },
    ],
  },
  {
    id: "boissons",
    title: "Boissons",
    subtitle: "Đồ uống",
    items: [
      { name: "Sodas", description: "Coca, Fanta, Ice Tea…", price: "3 €" },
      { name: "Jus", description: "Mangue, litchi, coco…", price: "3 €" },
      { name: "Bière", description: "Bia Saigon, Tsing Tao, Singha", price: "3,50 €" },
      { name: "Thé", description: "Thé vert jasmin", price: "2,50 €" },
      { name: "Café", description: "Café court", price: "2 €" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "Món tráng miệng",
    items: [
      { name: "Boules coco ×2", price: "3,50 €" },
      { name: "Mochis ×2", price: "3,50 €" },
      { name: "Glaces", description: "Coco, mangue, citron…", price: "5 €" },
    ],
  },
]

export const specialties = [
  {
    name: "Phở",
    tagline: "La soupe emblématique",
    text: "Bouillon mijoté longuement, nouilles de riz, herbes fraîches et bœuf, poulet ou version végé.",
    image: "/images/plat-pho.jpg",
    color: "terracotta" as const,
  },
  {
    name: "Bún — Bò bún",
    tagline: "Le grand classique",
    text: "Vermicelles de riz, viande sautée, crudités croquantes, cacahuètes, nems et sauce maison.",
    image: "/images/plat-bobun.jpg",
    color: "jade" as const,
  },
  {
    name: "Nems & fritures",
    tagline: "À partager",
    text: "Nems, raviolis et spring rolls croustillants, roulés maison et servis avec leur sauce.",
    image: "/images/plat-nems.jpg",
    color: "orange" as const,
  },
]

export const openingHours: { day: string; hours: string; closed?: boolean }[] = [
  { day: "Lundi", hours: "11h30–14h30 · 18h30–21h30" },
  { day: "Mardi", hours: "11h30–14h30 · 18h30–21h30" },
  { day: "Mercredi", hours: "11h30–14h30 · 18h30–21h30" },
  { day: "Jeudi", hours: "11h30–14h30 · 18h30–21h30" },
  { day: "Vendredi", hours: "11h30–14h30 · 18h30–21h30" },
  { day: "Samedi", hours: "11h30–14h30 · 18h30–21h30" },
  { day: "Dimanche", hours: "Fermé", closed: true },
]

export const reviews = [
  {
    name: "Océane Marie",
    date: "il y a un mois",
    text: "Très bon repas ! Pour cette première, j'ai opté pour le bún au poulet et il m'a donné envie de revenir très vite.",
  },
  {
    name: "J-A de Rugeriis",
    date: "il y a un mois",
    text: "Rất ngon ! Une cuisine délicieuse et authentique, exactement comme au Vietnam. Un régal du début à la fin.",
  },
  {
    name: "Ayako Imanari",
    date: "il y a 4 mois",
    text: "5 étoiles bien méritées pour ce petit bijou ! Une cuisine vietnamienne authentique, pleine de saveurs, avec des plats de grande qualité.",
  },
]

export const contact = {
  name: "Chez Tuyet",
  tagline: "Restaurant vietnamien",
  address: "23 Rue Gémare, 14000 Caen",
  phone: "02 50 10 65 54",
  phoneHref: "tel:+33250106554",
  rating: "5,0",
  reviewCount: "337",
  priceRange: "10–20 €",
  instagram: "@chez_tuyet",
  instagramUrl: "https://www.instagram.com/chez_tuyet/",
  services: ["Terrasse", "Plats végétaliens", "Sur place & à emporter"],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Chez+Tuyet+23+Rue+G%C3%A9mare+14000+Caen",
}
