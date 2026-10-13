import {
  Barn,
  Bird,
  FishSimple,
  Plant,
  Scissors,
  Storefront,
  SwimmingPool,
  Syringe,
} from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "./reveal";

type Service = {
  title: string;
  text: string;
  icon: Icon;
  className: string;
  tone: "brand" | "ipe" | "plain";
};

// 12 células no desktop: Banho e Tosa 2x2 + Pet Shop 2x1 + 6 simples (4 colunas x 3 linhas).
const services: Service[] = [
  {
    title: "Banho e Tosa",
    text: "Banho, tosa higiênica e na tesoura, com atenção ao pet ansioso.",
    icon: Scissors,
    className: "sm:col-span-2 lg:row-span-2",
    tone: "brand",
  },
  {
    title: "Pet Shop",
    text: "Rações, petiscos, brinquedos e acessórios para cães e gatos.",
    icon: Storefront,
    className: "sm:col-span-2",
    tone: "ipe",
  },
  { title: "Aves", text: "Rações, sementes e gaiolas.", icon: Bird, className: "", tone: "plain" },
  { title: "Vacinação", text: "Vacinas e orientação no balcão.", icon: Syringe, className: "", tone: "plain" },
  { title: "Jardinagem", text: "Sementes, adubos e ferramentas.", icon: Plant, className: "", tone: "plain" },
  { title: "Piscina", text: "Produtos para água limpa.", icon: SwimmingPool, className: "", tone: "plain" },
  { title: "Pesca", text: "Iscas, linhas e acessórios.", icon: FishSimple, className: "", tone: "plain" },
  { title: "Granja", text: "Ração e cuidados para criação.", icon: Barn, className: "", tone: "plain" },
];

const tones = {
  brand: "bg-brand-deep text-white",
  ipe: "bg-ipe text-ipe-ink",
  plain: "bg-surface text-ink border border-line",
};

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Do pet ao quintal, num só lugar.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Atendimento de quem conhece cada produto e ajuda você a escolher.
        </p>
      </Reveal>

      <ul className="mt-12 grid auto-rows-[minmax(9.5rem,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const big = s.tone === "brand";
          return (
            <li key={s.title} className={s.className}>
              <Reveal delay={i * 0.04} className="h-full">
                <article
                  className={`flex h-full flex-col items-center justify-center gap-5 rounded-2xl p-6 text-center ${tones[s.tone]} ${big ? "lg:p-8" : ""}`}
                >
                  <s.icon size={big ? 44 : 30} weight="duotone" aria-hidden />
                  <div>
                    <h3 className={`font-semibold tracking-tight ${big ? "text-2xl lg:text-3xl" : "text-lg"}`}>
                      {s.title}
                    </h3>
                    <p
                      className={`mt-1.5 leading-snug ${
                        s.tone === "plain" ? "text-muted" : "opacity-90"
                      } ${big ? "mx-auto max-w-[30ch] text-base lg:text-lg" : "text-[15px]"}`}
                    >
                      {s.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
