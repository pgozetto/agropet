import Image from "next/image";
import { WhatsappLogo } from "@phosphor-icons/react/ssr";
import { whatsappLink } from "@/lib/site";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#agendar", label: "Agendar" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#onde-estamos", label: "Onde estamos" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 md:px-6">
        <a href="#inicio" className="flex items-center gap-3" aria-label="AgroPet Ipê, início">
          <Image
            src="/logo-agropet-ipe.webp"
            alt=""
            width={40}
            height={40}
            className="rounded-lg"
            priority
          />
          <span className="text-lg font-semibold tracking-tight">AgroPet Ipê</span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={whatsappLink("Olá! Vim pelo site da AgroPet Ipê.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-cta px-4 py-2 text-sm font-semibold whitespace-nowrap text-cta-fg transition-transform active:scale-[0.98]"
        >
          <WhatsappLogo size={18} weight="bold" aria-hidden />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
