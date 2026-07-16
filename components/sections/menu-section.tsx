import { menu, contact } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function MenuSection() {
  return (
    <section id="carte" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Chén đĩa tự chế</p>
          <h2 className="mt-4 text-4xl text-ink md:text-5xl">La carte</h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-soft">
            Recettes traditionnelles, faites maison. Deux formules à{" "}
            <span className="font-extrabold text-red">15 €</span> le midi comme le soir.
          </p>
        </Reveal>

        <div className="mt-14 gap-x-14 md:columns-2">
          {menu.map((cat) => (
            <div key={cat.id} className="mb-11 break-inside-avoid">
              <Reveal>
                <div className="mb-5">
                  <h3 className="font-display text-2xl font-extrabold text-red">{cat.title}</h3>
                  {cat.subtitle && (
                    <p className="script text-lg text-jade-deep">{cat.subtitle}</p>
                  )}
                  <span className="mt-2 block h-0.5 w-12 rounded bg-orange/60" />
                </div>

                <ul className="space-y-4">
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-ink">{item.name}</span>
                        {item.tags?.map((t) => (
                          <span key={t} className="rounded-full bg-jade/15 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-jade-deep">
                            {t}
                          </span>
                        ))}
                        <span className="mx-1 flex-1 border-b border-dotted border-line" />
                        <span className="shrink-0 font-extrabold text-jade-deep">{item.price}</span>
                      </div>
                      {item.description && (
                        <p className="mt-0.5 text-sm text-ink-soft">{item.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="script text-2xl text-red">Chúc ăn ngon miệng !</p>
          <p className="mt-1 text-sm text-ink-soft">
            Bon appétit · Retrouvez-nous sur{" "}
            <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-jade-deep hover:underline">
              Instagram {contact.instagram}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
