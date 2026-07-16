import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { asset } from "@/lib/asset"

const photos = [
  { src: "/images/devanture.jpg", alt: "La devanture verte de Chez Tuyet, rue Gémare à Caen" },
  { src: "/images/interieur-1.jpg", alt: "Salle lumineuse avec tables vertes, chaises en bois et chapeau conique" },
  { src: "/images/terrasse.jpg", alt: "Terrasse colorée de Chez Tuyet en soirée" },
  { src: "/images/interieur-2.jpg", alt: "Intérieur avec affiche de la baie d'Hạ Long" },
  { src: "/images/brand-bowl.jpg", alt: "Bol de bún servi sur un tabouret rouge" },
  { src: "/images/menu-photo.jpg", alt: "Le menu illustré de Chez Tuyet" },
]

export function Gallery() {
  return (
    <section id="galerie" className="bg-cream-deep py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Bienvenue · Chào mừng</p>
          <h2 className="mt-4 text-4xl text-ink md:text-5xl">Le lieu en images</h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-soft">
            Une salle chaleureuse, une terrasse ensoleillée et une ambiance qui sent bon le Vietnam.
          </p>
        </Reveal>

        <div className="mt-14 gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3">
          {photos.map((p, i) => (
            <Reveal key={p.src} delay={0.05 * i} className="mb-4 block break-inside-avoid">
              <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_45px_-30px_rgba(40,40,20,0.5)]">
                <Image
                  src={asset(p.src)}
                  alt={p.alt}
                  width={800}
                  height={1000}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
