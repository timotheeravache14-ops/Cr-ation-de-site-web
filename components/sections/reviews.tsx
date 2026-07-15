import { reviews, contact } from "@/lib/menu"
import { Reveal } from "@/components/reveal"

export function Reviews() {
  return (
    <section id="avis" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Ils en parlent</p>
          <h2 className="mt-4 text-4xl text-ink md:text-5xl">
            Vos avis nous font chaud au cœur
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-line bg-surface px-5 py-2.5">
            <span className="text-2xl font-semibold text-ink">
              {contact.rating}
            </span>
            <span className="flex items-center gap-0.5 text-terracotta">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </span>
            <span className="text-sm text-ink-soft">
              {contact.reviewCount} avis&nbsp;Google
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={0.1 * i}>
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7 shadow-[0_20px_45px_-30px_rgba(60,45,30,0.5)]">
                <span className="flex items-center gap-0.5 text-terracotta">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarIcon key={j} />
                  ))}
                </span>
                <blockquote className="mt-4 flex-1 font-serif text-lg italic leading-relaxed text-ink">
                  « {review.text} »
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="font-sans text-sm font-semibold text-ink">
                    {review.name}
                  </p>
                  <p className="text-xs text-ink-soft">{review.date}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Voir tous les avis
          </a>
        </Reveal>
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
