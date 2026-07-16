import { SiteHeader } from "@/components/sections/site-header"
import { Hero } from "@/components/sections/hero"
import { Chef } from "@/components/sections/chef"
import { Specialties } from "@/components/sections/specialties"
import { MenuSection } from "@/components/sections/menu-section"
import { Gallery } from "@/components/sections/gallery"
import { Reviews } from "@/components/sections/reviews"
import { Info } from "@/components/sections/info"
import { SiteFooter } from "@/components/sections/site-footer"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Chez Tuyet",
  description:
    "Restaurant vietnamien à Caen : phở, bún (bò bún), nems et raviolis faits maison. Terrasse et options végétaliennes.",
  servesCuisine: ["Vietnamienne", "Asiatique"],
  priceRange: "€€",
  telephone: "+33250106554",
  url: "https://chez-tuyet.fr",
  image: "https://chez-tuyet.fr/images/plat-bobun.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "23 Rue Gémare",
    addressLocality: "Caen",
    postalCode: "14000",
    addressCountry: "FR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "337",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:30",
      closes: "14:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "18:30",
      closes: "21:30",
    },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main>
        <Hero />
        <Chef />
        <Specialties />
        <MenuSection />
        <Gallery />
        <Reviews />
        <Info />
      </main>
      <SiteFooter />
    </>
  )
}
