import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { asset } from "@/lib/asset"

const points = [
  { title: "Fait maison", text: "Bouillons mijotés, nems roulés à la main, sauces et desserts préparés sur place, chaque jour." },
  { title: "Authentique", text: "Les vraies recettes du Vietnam, transmises et cuisinées avec des herbes et des épices fraîches." },
  { title: "Proche des clients", text: "Un accueil chaleureux, le sourire de Tuyet et des conseils pour composer votre repas." },
]

export function Chef() {
  return (
    <section id="apropos" className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <Reveal className="order-2 md:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-25px_rgba(40,40,20,0.5)]">
            <Image
              src={asset("/images/chef.jpg")}
              alt="Tuyet, la cheffe, devant la devanture de son restaurant Chez Tuyet à Caen"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal>
            <p className="eyebrow">La maison</p>
            <h2 className="mt-4 text-4xl leading-tight text-ink md:text-5xl">
              La cuisine de <span className="script text-red">Tuyet</span>
            </h2>
            <div className="mt-6 space-y-4 text-ink-soft">
              <p>
                Derrière les fourneaux, Tuyet cuisine le Vietnam comme à la maison. Ici, tout est
                fait maison, avec des produits frais et beaucoup de générosité.
              </p>
              <p>
                Dans un décor lumineux — nón lá au mur, affiches de la baie d&apos;Hạ Long et
                grande terrasse — on se sent tout de suite comme invité chez elle. Options
                végétaliennes disponibles sur la plupart des plats.
              </p>
            </div>
          </Reveal>

          <div className="mt-9 space-y-5">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={0.1 * i}>
                <div className="flex gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-jade/15 text-sm font-extrabold text-jade-deep">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
