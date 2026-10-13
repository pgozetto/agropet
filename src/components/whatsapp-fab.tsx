import { WhatsappLogo } from "@phosphor-icons/react/ssr";
import { whatsappLink } from "@/lib/site";

export function WhatsappFab() {
  return (
    <a
      href={whatsappLink("Olá! Quero agendar banho e tosa para meu pet.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-4 bottom-4 z-30 grid size-14 place-items-center rounded-full bg-[#1f8f4e] text-white shadow-soft transition-transform hover:scale-105 active:scale-95 md:right-6 md:bottom-6"
    >
      <WhatsappLogo size={30} weight="fill" aria-hidden />
    </a>
  );
}
