import { SiteHeader } from "@/components/sections/site-header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Terrasse } from "@/components/sections/terrasse"
import { Ambiance } from "@/components/sections/ambiance"
import { MenuSection } from "@/components/sections/menu-section"
import { Gallery } from "@/components/sections/gallery"
import { Reviews } from "@/components/sections/reviews"
import { Info } from "@/components/sections/info"
import { SiteFooter } from "@/components/sections/site-footer"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "La Pergola",
  description:
    "Bar à tapas et cave au cœur d'Hermanville-sur-Mer. Tapas maison, planches, cocktails et cour privée avec terrain de pétanque.",
  servesCuisine: ["Tapas", "Française", "Cocktails"],
  priceRange: "€€",
  telephone: "+33231256013",
  url: "https://lapergola-hermanville.fr",
  image: "https://lapergola-hermanville.fr/images/ambiance-cocktails.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "370 Grande Rue",
    addressLocality: "Hermanville-sur-Mer",
    postalCode: "14880",
    addressCountry: "FR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "151",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "12:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "18:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "17:00",
      closes: "23:45",
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Terrasse />
        <Ambiance />
        <MenuSection />
        <Gallery />
        <Reviews />
        <Info />
      </main>
      <SiteFooter />
    </>
  )
}
