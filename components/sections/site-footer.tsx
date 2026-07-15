import { contact } from "@/lib/menu"

const links = [
  { href: "#ambiance", label: "Ambiance" },
  { href: "#menu", label: "La carte" },
  { href: "#avis", label: "Avis" },
  { href: "#infos", label: "Infos pratiques" },
]

export function SiteFooter() {
  return (
    <footer className="bg-sage-deep text-cream/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl font-semibold text-cream">
            La Pergola
          </p>
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-cream/60">
            {contact.tagline}
          </p>
          <p className="mt-5 max-w-xs text-sm text-cream/70">
            Bar à tapas et cave au cœur d&apos;Hermanville-sur-Mer. Cuisine
            maison, cocktails et cour privée avec pétanque.
          </p>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-cream/70">
            Naviguer
          </h3>
          <ul className="mt-4 space-y-2.5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cream/75 transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-cream/70">
            Nous contacter
          </h3>
          <address className="mt-4 space-y-2.5 text-sm not-italic text-cream/75">
            <p>{contact.address}</p>
            <p>
              <a
                href={contact.phoneHref}
                className="transition-colors hover:text-cream"
              >
                {contact.phone}
              </a>
            </p>
            <p className="pt-2 text-cream/60">
              Ouvert du lundi au samedi · Fermé le dimanche
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-cream/60 sm:flex-row">
          <p>© {new Date().getFullYear()} La Pergola — Tous droits réservés.</p>
          <p>Hermanville-sur-Mer · Normandie</p>
        </div>
      </div>
    </footer>
  )
}
