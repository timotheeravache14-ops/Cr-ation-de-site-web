import { contact } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { OpeningHours } from "@/components/sections/opening-hours"

export function Info() {
  return (
    <section id="infos" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Infos pratiques</p>
          <h2 className="mt-4 text-4xl text-ink md:text-5xl">Nous trouver</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-line bg-surface p-8">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                <ClockIcon /> Horaires
              </h3>
              <div className="mt-5">
                <OpeningHours />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                <PinIcon /> Coordonnées
              </h3>

              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-ink-soft">Adresse</dt>
                  <dd className="mt-1 text-ink">{contact.address}</dd>
                </div>
                <div>
                  <dt className="text-ink-soft">Téléphone</dt>
                  <dd className="mt-1">
                    <a href={contact.phoneHref} className="text-ink transition-colors hover:text-jade-deep">
                      {contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-soft">Bon à savoir</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {contact.services.map((s) => (
                      <span key={s} className="rounded-full border border-jade-deep/25 bg-jade/10 px-3 py-1 text-xs font-semibold text-jade-deep">
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>

              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <a href={contact.phoneHref} className="btn-primary"><PhoneIcon /> Appeler</a>
                <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">Itinéraire</a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 overflow-hidden rounded-3xl border border-line shadow-[0_25px_50px_-30px_rgba(40,40,20,0.5)]">
            <iframe
              title="Carte — Chez Tuyet, 23 Rue Gémare, Caen"
              src="https://maps.google.com/maps?q=Chez%20Tuyet%2023%20Rue%20G%C3%A9mare%2014000%20Caen&t=&z=16&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-jade-deep">
      <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
    </svg>
  )
}
function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-jade-deep">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
