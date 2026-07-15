import Image from "next/image"
import { Reveal } from "@/components/reveal"

const photos = [
  {
    src: "/images/ambiance-cocktails.jpg",
    alt: "Amis trinquant avec des cocktails autour d'une table de tapas à partager",
  },
  {
    src: "/images/interieur-bar.jpg",
    alt: "Comptoir du bar de La Pergola avec ses ampoules à filament et sa verrerie",
  },
  {
    src: "/images/convivial-fenetre.jpg",
    alt: "Deux amies discutent autour d'un verre près de la fenêtre baignée de lumière",
  },
  {
    src: "/images/plats-maison.jpg",
    alt: "Assiettes de tapas maison : röstis dorés, salade de chèvre et charcuterie",
  },
]

export function Gallery() {
  return (
    <section id="galerie" className="bg-cream-deep py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">En images</p>
          <h2 className="mt-4 text-4xl text-ink md:text-5xl">La galerie</h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-soft">
            Un avant-goût de l&apos;ambiance, entre le comptoir, les tablées et
            les assiettes.
          </p>
        </Reveal>

        <div className="mt-14 gap-5 [column-fill:_balance] sm:columns-2">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={0.06 * i} className="mb-5 block break-inside-avoid">
              <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_45px_-30px_rgba(60,45,30,0.5)]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={800}
                  sizes="(max-width: 640px) 100vw, 45vw"
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
