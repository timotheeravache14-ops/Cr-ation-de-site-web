import { BobunHero } from "@/components/bobun/bobun-hero"
import { Wordmark } from "@/components/wordmark"
import { contact } from "@/lib/data"

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-cream pt-24 pb-14 md:pt-28 md:pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-16 h-[34rem] w-[34rem] rounded-full bg-jade/15 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-orange/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-6 md:grid-cols-2">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="eyebrow flex items-center justify-center gap-2 md:justify-start">
            <span className="h-px w-6 bg-jade-deep/50" />
            Restaurant vietnamien · Caen
          </p>

          <div className="mt-5 flex justify-center md:justify-start">
            <Wordmark className="text-[3.6rem] sm:text-[4.4rem] md:text-[5rem]" />
          </div>

          <p className="mx-auto mt-5 max-w-md text-lg text-ink-soft md:mx-0">
            La cuisine vietnamienne <strong className="font-extrabold text-ink">faite maison</strong> de
            Tuyet : phở mijoté, bò bún généreux et nems croustillants, servis avec le sourire.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a href="#carte" className="btn-primary">Voir la carte</a>
            <a href={contact.phoneHref} className="btn-ghost">Réserver une table</a>
          </div>

          <div className="mt-7 flex items-center justify-center gap-3 md:justify-start">
            <span className="flex items-center gap-0.5 text-orange">
              {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            </span>
            <p className="text-sm text-ink-soft">
              <span className="font-extrabold text-ink">{contact.rating}/5</span> · {contact.reviewCount} avis Google
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto h-[320px] w-full max-w-md sm:h-[420px] md:h-[540px]">
            <BobunHero className="h-full w-full" />
            <p className="pointer-events-none absolute inset-x-0 bottom-0 text-center text-xs font-semibold text-ink-soft/70">
              Bougez la souris — le bol vous suit 🥢
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
