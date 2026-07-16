import { Wordmark } from "@/components/wordmark"
import { contact } from "@/lib/data"

const links = [
  { href: "#specialites", label: "Spécialités" },
  { href: "#carte", label: "La carte" },
  { href: "#galerie", label: "Galerie" },
  { href: "#infos", label: "Infos pratiques" },
]

export function SiteFooter() {
  return (
    <footer className="bg-jade-deep text-white/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <Wordmark className="text-[2.4rem]" variant="light" />
          <p className="mt-5 max-w-xs text-sm text-white/70">
            Cuisine vietnamienne faite maison, à Caen. Sur place, en terrasse ou à emporter.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-white/70">Naviguer</h3>
          <ul className="mt-4 space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-white/75 transition-colors hover:text-white">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-white/70">Nous contacter</h3>
          <address className="mt-4 space-y-2.5 text-sm not-italic text-white/75">
            <p>{contact.address}</p>
            <p><a href={contact.phoneHref} className="transition-colors hover:text-white">{contact.phone}</a></p>
            <p>
              <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                Instagram {contact.instagram}
              </a>
            </p>
            <p className="pt-2 text-white/60">Ouvert du lundi au samedi · Fermé le dimanche</p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Chez Tuyet — Tous droits réservés.</p>
          <p>Caen · Normandie</p>
        </div>
      </div>
    </footer>
  )
}
