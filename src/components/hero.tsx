import { Fragment } from "react";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { streetViewEmbedUrl } from "@/lib/site";

const words = ["Cuidado", "para", "o", "seu", "pet,", "a", "casa", "e", "o", "campo."];
// Palavras que ganham o traço amarelo do ipê embaixo.
const marked = new Set(["pet,", "campo."]);

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-14 text-center md:px-6 md:pt-20">
        <h1 className="max-w-5xl text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
          {words.map((w, i) => (
            <Fragment key={i}>
              <span className="word" style={{ "--i": i } as React.CSSProperties}>
                {marked.has(w) ? (
                  <span className="relative isolate inline-block pb-1">
                    {w}
                    <span aria-hidden className="mark" style={{ "--i": i } as React.CSSProperties} />
                  </span>
                ) : (
                  w
                )}
              </span>{" "}
            </Fragment>
          ))}
        </h1>
        <p className="enter mt-7 max-w-[46ch] text-lg leading-relaxed text-muted md:text-xl" style={{ "--delay": "0.55s" } as React.CSSProperties}>
          Banho e tosa, rações e tudo para aves, jardim e piscina, no bairro Santa Rosa.
        </p>
        <div className="enter mt-9 flex flex-wrap justify-center gap-3" style={{ "--delay": "0.7s" } as React.CSSProperties}>
          <a
            href="#agendar"
            className="group inline-flex items-center gap-2 rounded-full bg-cta px-7 py-4 text-lg font-semibold text-cta-fg shadow-soft transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Agendar banho e tosa
            <ArrowRight size={20} weight="bold" aria-hidden className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center rounded-full border border-line bg-surface px-7 py-4 text-lg font-semibold text-ink transition-colors hover:border-brand active:scale-[0.98]"
          >
            Ver serviços
          </a>
        </div>
      </div>

      {/* Street View da fachada, com as bordas dissolvendo no fundo da página. */}
      <div className="enter relative mx-auto mt-12 max-w-7xl md:mt-16" style={{ "--delay": "0.85s" } as React.CSSProperties}>
        <div className="fade-edges h-[22rem] sm:h-[28rem] lg:h-[34rem]">
          <iframe
            title="Fachada da AgroPet Ipê no Google Street View"
            src={streetViewEmbedUrl}
            className="h-full w-full border-0"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
