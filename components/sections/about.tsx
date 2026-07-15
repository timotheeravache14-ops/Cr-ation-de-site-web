import Image from "next/image"
import { Reveal } from "@/components/reveal"

const features = [
  {
    title: "Fait maison",
    text: "Tapas, croquettes, samoussas et desserts préparés chaque jour dans notre cuisine.",
    icon: (
      <path d="M6 3v6a3 3 0 0 0 3 3v9M6 3v6M4 3v6M8 3v6M18 3c-1.5 0-3 1.8-3 5s1.5 4 3 4v9" />
    ),
  },
  {
    title: "Cour privée & pétanque",
    text: "Un jardin abrité avec sa pergola et son terrain de pétanque, à deux pas de la mer.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="9" cy="10" r="1.4" />
        <circle cx="15" cy="14" r="1.4" />
      </>
    ),
  },
  {
    title: "Cave & cocktails",
    text: "Une belle sélection de vins, de digestifs et des cocktails signature à partager.",
    icon: (
      <>
        <path d="M8 22h8M12 15v7" />
        <path d="M5 3h14l-6 9-6-9z" />
      </>
    ),
  },
]

export function About() {
  return (
    <section id="apropos" className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <Reveal className="order-2 md:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-25px_rgba(60,45,30,0.45)]">
            <Image
              src="/images/burrata.jpg"
              alt="Burrata de saison au pesto, chips de coppa et tomates cerises servie à La Pergola"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal>
            <p className="eyebrow">La maison</p>
            <h2 className="mt-4 text-4xl leading-tight text-ink md:text-5xl">
              Une parenthèse conviviale, au cœur du village
            </h2>
            <div className="mt-6 space-y-4 text-ink-soft">
              <p>
                Niché au centre d&apos;Hermanville-sur-Mer, à une centaine de
                mètres de la place de la Liberté, La Pergola est un bar à tapas
                et une cave où l&apos;on aime prendre son temps.
              </p>
              <p>
                On y partage des planches de fromages et de charcuterie, des
                tapas généreuses et des plats gourmands, autour d&apos;un verre
                de vin ou d&apos;un cocktail. Dès les beaux jours, la cour
                privée et son terrain de pétanque deviennent le rendez-vous des
                apéros qui s&apos;étirent.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 space-y-6">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={0.1 * i}>
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage/10 text-sage-deep">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {feature.icon}
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">{feature.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
