import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { asset } from "@/lib/asset"

export function Terrasse() {
  return (
    <section
      id="terrasse"
      className="relative overflow-hidden bg-cream-deep py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-[26rem] w-[26rem] rounded-full bg-terracotta/15 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <Reveal>
            <p className="eyebrow">Dehors</p>
            <h2 className="mt-4 text-4xl leading-tight text-ink md:text-5xl">
              La cour, la pergola &amp; la pétanque
            </h2>
            <div className="mt-6 space-y-4 text-ink-soft">
              <p>
                Aux beaux jours, on pousse la porte vers la cour privée : une
                pergola abritée, des transats, de grandes tablées et un terrain
                de pétanque rien que pour vous.
              </p>
              <p>
                L&apos;endroit idéal pour un apéro qui s&apos;étire, un
                anniversaire entre amis ou une partie de boules au soleil, un
                verre à la main.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Cour privée", "Pergola ombragée", "Terrain de pétanque", "Grandes tablées"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-sage-deep/25 bg-surface/60 px-4 py-2 text-sm text-sage-deep"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="order-1 md:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_35px_70px_-25px_rgba(50,35,20,0.5)]">
            <Image
              src={asset("/images/cour-petanque.jpg")}
              alt="Cour privée de La Pergola avec son terrain de pétanque, sa pergola en bois et ses tables"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
