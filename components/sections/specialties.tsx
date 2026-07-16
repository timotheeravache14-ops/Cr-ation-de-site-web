import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { asset } from "@/lib/asset"
import { specialties } from "@/lib/data"

const accent: Record<string, string> = {
  jade: "text-jade-deep",
  orange: "text-orange",
  terracotta: "text-terracotta",
}

export function Specialties() {
  return (
    <section id="specialites" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">À déguster</p>
          <h2 className="mt-4 text-4xl text-ink md:text-5xl">Nos spécialités</h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-soft">
            Trois incontournables de la cuisine vietnamienne, revisités chaque jour dans notre cuisine.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {specialties.map((s, i) => (
            <Reveal key={s.name} delay={0.1 * i}>
              <article className="group h-full overflow-hidden rounded-3xl border border-line bg-cream shadow-[0_20px_45px_-30px_rgba(40,40,20,0.5)]">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={asset(s.image)}
                    alt={`${s.name} — Chez Tuyet`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className={`text-xs font-extrabold uppercase tracking-[0.15em] ${accent[s.color]}`}>
                    {s.tagline}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-ink">{s.name}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{s.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
