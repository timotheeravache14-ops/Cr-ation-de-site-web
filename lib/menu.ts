export type MenuItem = {
  name: string
  description?: string
  price: string
}

export type MenuCategory = {
  id: string
  title: string
  note?: string
  items: MenuItem[]
}

export const menu: MenuCategory[] = [
  {
    id: "tapas",
    title: "Nos Tapas",
    items: [
      {
        name: "Saucissons",
        description: "Nature / Herbes / Poivre / Beaufort / Noisettes",
        price: "6,60 €",
      },
      {
        name: "Apéro mixte",
        description:
          "Fromages & charcuterie — Tomme d'Auvergne, chèvre cendré, camembert, coppa, spianata, jambon blanc",
        price: "15,00 €",
      },
      {
        name: "Houmous maison",
        description: "Servi avec des nachos, portion de 150 g",
        price: "7,00 €",
      },
      {
        name: "Burrata de saison",
        description: "Burrata, chips de coppa, pesto, tomates cerises et salade",
        price: "9,00 €",
      },
      {
        name: "Rillettes de saumon maison",
        description: "Portion de 150 g",
        price: "9,00 €",
      },
      {
        name: "Poulets croustillants",
        description: "Filets de poulet croustillants, sauce maison",
        price: "9,00 €",
      },
      {
        name: "Pommes de terre sautées maison",
        description: "Servies avec une sauce maison",
        price: "5,20 €",
      },
      {
        name: "Samoussas maison",
        description: "Thon, feta, courgettes, curry",
        price: "9,00 €",
      },
      {
        name: "Croque-monsieur maison",
        description: "Jambon blanc, béchamel, gruyère, paprika",
        price: "9,00 €",
      },
      {
        name: "Croquettes rustiques maison",
        description:
          "Écrasé de pommes de terre, moutarde à l'ancienne, lardons, gruyère — servies avec une sauce maison",
        price: "9,00 €",
      },
    ],
  },
  {
    id: "plats",
    title: "Nos Plats",
    items: [
      {
        name: "Burger au poulet",
        description:
          "Filet de poulet, mimolette, confit d'oignons, tomates, salade, cornichons, sauce burger — servi avec des pommes de terre sautées",
        price: "14,50 €",
      },
      {
        name: "Burger végétarien",
        description:
          "Galette de légumes, mimolette, confit d'oignons, tomates, salade, cornichons, sauce blanche — servi avec des pommes de terre sautées",
        price: "14,50 €",
      },
      {
        name: "Hot-dog pulled pork",
        description:
          "Effiloché de porc, coleslaw, oignons confits et frits, mimolette fondue, sauce barbecue — servi avec des pommes de terre sautées",
        price: "14,50 €",
      },
      {
        name: "Croq'patate",
        description: "Croque-monsieur maison, pommes de terre sautées",
        price: "14,00 €",
      },
      {
        name: "Camembert rôti au miel",
        description: "Servi avec des pommes de terre sautées et charcuterie",
        price: "16,00 €",
      },
      {
        name: "Pinsa chèvre miel",
        description: "Chèvre, miel, coppa, noix, tomates cerises — servie avec une salade",
        price: "15,50 €",
      },
      {
        name: "Salade de saison",
        description:
          "Chèvre, maïs, poires, noix, tomates cerises, salade, poulets croustillants",
        price: "14,50 €",
      },
    ],
  },
  {
    id: "desserts",
    title: "Nos Desserts",
    items: [
      { name: "Crème brûlée", description: "Saveur vanille", price: "6,00 €" },
      {
        name: "Fondant au chocolat",
        description: "Servi avec chantilly et éclats de caramel",
        price: "6,00 €",
      },
      {
        name: "Tarte aux pommes",
        description: "Servie avec boule de glace vanille et coulis de caramel",
        price: "7,50 €",
      },
      {
        name: "Sunny Mix",
        description: "1 boule framboise, 1 boule citron, chantilly, coulis de fruits rouges",
        price: "6,50 €",
      },
      {
        name: "Vanilla Forever",
        description: "2 boules vanille, chantilly, coulis de chocolat, éclats de caramel",
        price: "6,50 €",
      },
      {
        name: "Coupe de glace",
        description: "Chocolat, vanille, framboise, citron",
        price: "2,50 € / boule",
      },
    ],
  },
  {
    id: "digestifs",
    title: "Nos Digestifs",
    items: [
      { name: "Rhum", description: "Botran ou Bumbu", price: "7,00 €" },
      { name: "Whisky", description: "Talisker ou Cardhu", price: "7,50 €" },
      { name: "Calvados", description: "Maison Préaux Montarcy", price: "7,00 €" },
      { name: "Liqueur", description: "Get 27, Get 31, Bailey's", price: "6,00 €" },
    ],
  },
]

export const openingHours: { day: string; hours: string; closed?: boolean }[] = [
  { day: "Lundi", hours: "12h00 – 14h00 · 18h00 – 23h00" },
  { day: "Mardi", hours: "12h00 – 14h00 · 18h00 – 23h00" },
  { day: "Mercredi", hours: "12h00 – 14h00 · 18h00 – 23h00" },
  { day: "Jeudi", hours: "12h00 – 14h00 · 18h00 – 23h00" },
  { day: "Vendredi", hours: "12h00 – 14h00 · 18h00 – 23h00" },
  { day: "Samedi", hours: "17h00 – 23h45" },
  { day: "Dimanche", hours: "Fermé", closed: true },
]

export const reviews = [
  {
    name: "Nicolas Bizet",
    date: "il y a 2 semaines",
    text: "Nous nous sommes arrêtés manger un midi avec ma femme et ma fille, le repas était juste excellent ! Nous avons pris deux plats et deux desserts différents et tout était parfait.",
  },
  {
    name: "Camille Forlini",
    date: "il y a un mois",
    text: "Très belle surprise. De passage à proximité dans le cadre de festivités, nous avons passé un excellent moment. Accueil chaleureux et cuisine soignée.",
  },
  {
    name: "Lola Laronche",
    date: "il y a une semaine",
    text: "J'ai passé un excellent moment avec mon ami dans ce bar très agréable. Un service impeccable, aimable, avec le sourire jusqu'aux oreilles ! Je reviendrai pour sûr.",
  },
]

export const contact = {
  name: "La Pergola",
  tagline: "Bar à tapas & Cave",
  address: "370 Grande Rue, 14880 Hermanville-sur-Mer",
  phone: "02 31 25 60 13",
  phoneHref: "tel:+33231256013",
  rating: "4,9",
  reviewCount: "151",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=La+Pergola+370+Grande+Rue+14880+Hermanville-sur-Mer",
}
