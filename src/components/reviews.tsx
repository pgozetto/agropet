import { Star } from "@phosphor-icons/react/ssr";
import { mapsUrl, site } from "@/lib/site";
import { Reveal } from "./reveal";

// Trechos reais de avaliações públicas no Google.
const reviews = [
  { quote: "Atendimento rápido e eficiente! O cuidado precioso com minha pet!", name: "Edna Andrade" },
  { quote: "Muito bem atendido. Atendente muito atenciosa e prestativa!", name: "Junior Boscolo" },
  { quote: "Ótimo atendimento. Atendente conhece bem os produtos.", name: "Ariana Silva" },
];

export function Reviews() {
  return (
    <section id="avaliacoes" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <Reveal className="flex flex-col items-center text-center">
        <p className="text-7xl font-semibold tracking-tight md:text-8xl">
          {site.rating.value.toLocaleString("pt-BR")}
        </p>
        <div className="mt-3 flex gap-1 text-accent" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={24} weight="fill" />
          ))}
        </div>
        <p className="mt-4 text-lg text-muted">
          Nota média em {site.rating.count} avaliações no Google.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-4 md:grid-cols-3">
        {reviews.map((r, i) => (
          <li key={r.name}>
            <Reveal delay={i * 0.06} className="h-full">
              <figure className="flex h-full flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-surface p-7 text-center">
                <blockquote className="text-lg leading-snug">“{r.quote}”</blockquote>
                <figcaption className="text-sm text-muted">
                  <span className="font-semibold text-ink">{r.name}</span>
                  <br />
                  Cliente, avaliação no Google
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mt-10 text-center">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-ink underline underline-offset-4"
        >
          Ler avaliações no Google
        </a>
      </div>
    </section>
  );
}
