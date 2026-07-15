import { CocktailHero } from "@/components/cocktail/cocktail-hero"
import { contact } from "@/lib/menu"

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-gradient-to-b from-cream to-cream-deep pt-28 pb-16 md:pt-32 md:pb-20"
    >
      {/* Soft ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 h-[38rem] w-[38rem] rounded-full bg-rose-soft/60 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-sage/15 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-2 md:gap-4">
        {/* Left — copy */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="eyebrow flex items-center justify-center gap-2 md:justify-start">
            <span className="h-px w-6 bg-sage-deep/50" />
            Hermanville-sur-Mer
          </p>

          <h1 className="mt-5 font-serif text-6xl font-semibold leading-[0.95] text-ink sm:text-7xl md:text-8xl">
            La Pergola
          </h1>

          <p className="mt-4 font-serif text-2xl italic text-sage-deep md:text-3xl">
            Bar à tapas &amp; cave
          </p>

          <p className="mx-auto mt-6 max-w-md text-ink-soft md:mx-0">
            Des tapas faites maison, de belles planches et des cocktails,
            à partager dans une cour privée baignée de soleil — avec son
            terrain de pétanque, au cœur du village.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a href="#menu" className="btn-primary">
              Découvrir la carte
            </a>
            <a href={contact.phoneHref} className="btn-ghost">
              Réserver une table
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
            <div className="flex items-center gap-1 text-terracotta">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="text-sm text-ink-soft">
              <span className="font-semibold text-ink">{contact.rating}/5</span>{" "}
              · {contact.reviewCount} avis Google
            </p>
          </div>
        </div>

        {/* Right — interactive 3D cocktail */}
        <div className="order-1 md:order-2">
          <div className="relative mx-auto h-[340px] w-full max-w-md sm:h-[420px] md:h-[560px]">
            <CocktailHero className="h-full w-full" />
            <p className="pointer-events-none absolute inset-x-0 bottom-0 text-center text-xs text-ink-soft/70">
              Glissez votre souris — le cocktail vous suit du regard
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z" />
    </svg>
  )
}
