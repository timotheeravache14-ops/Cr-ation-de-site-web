import { menu } from "@/lib/menu"
import { Reveal } from "@/components/reveal"

export function MenuSection() {
  return (
    <section id="menu" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">À table</p>
          <h2 className="mt-4 text-4xl text-ink md:text-5xl">La carte</h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-soft">
            Une cuisine de partage, faite maison, qui suit les saisons et
            l&apos;humeur du chef.
          </p>
        </Reveal>

        <div className="mt-16 gap-x-14 md:columns-2">
          {menu.map((category) => (
            <div key={category.id} className="mb-12 break-inside-avoid">
              <Reveal>
                <div className="mb-6 text-center">
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-sage-deep">
                    {category.title}
                  </h3>
                  <span className="mx-auto mt-3 block h-px w-12 bg-terracotta/50" />
                </div>

                <ul className="space-y-5">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="font-sans text-[0.95rem] font-medium text-ink">
                          {item.name}
                        </span>
                        <span className="shrink-0 font-sans text-sm font-semibold text-sage-deep">
                          {item.price}
                        </span>
                      </div>
                      {item.description && (
                        <p className="mt-1 max-w-prose font-serif text-[1.05rem] italic leading-snug text-ink-soft">
                          {item.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-ink-soft/70">
            Prix nets · service compris
          </p>
        </Reveal>
      </div>
    </section>
  )
}
