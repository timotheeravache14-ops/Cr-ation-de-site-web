import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function Ambiance() {
  return (
    <section
      id="ambiance"
      className="relative overflow-hidden bg-cream-deep py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-rose/25 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">Ambiance</p>
            <h2 className="mt-4 text-4xl leading-tight text-ink md:text-5xl">
              Le bar à cocktails
            </h2>
            <div className="mt-6 space-y-4 text-ink-soft">
              <p>
                Le soir venu, La Pergola se transforme en repaire à cocktails.
                On trinque autour de recettes maison, on picore quelques tapas
                et on refait le monde jusqu&apos;au bout de la nuit.
              </p>
              <p>
                Rhums d&apos;exception, whiskies tourbés, spiritueux et créations
                fruitées : de quoi accompagner chaque moment, de l&apos;apéro
                aux digestifs.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Cocktails signature", "Cave à vin", "Apéro entre amis", "Terrasse & pétanque"].map(
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

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_35px_70px_-25px_rgba(50,35,20,0.55)]">
            <Image
              src="/images/ambiance-cocktails.jpg"
              alt="Amis trinquant avec des cocktails autour d'une table de tapas à partager à La Pergola"
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
