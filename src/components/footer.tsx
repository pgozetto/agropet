import Image from "next/image";
import { InstagramLogo } from "@phosphor-icons/react/ssr";
import { fullAddress, site } from "@/lib/site";

// Ano calculado no build e cacheado (Cache Components não aceita new Date() direto).
async function Year() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 pt-12 pb-24 text-center md:px-6">
        <div className="flex flex-col items-center gap-3">
          <Image src="/logo-agropet-ipe.webp" alt="" width={44} height={44} className="rounded-lg" />
          <div>
            <p className="font-semibold">{site.name}</p>
            <p className="text-sm text-muted">Espaço acolhedor para a comunidade LGBTQ+</p>
          </div>
        </div>
        <div className="text-sm text-muted">
          <p>{fullAddress}</p>
          <p className="mt-1">
            <a href={`tel:${site.phoneE164}`} className="hover:text-ink">{site.phoneDisplay}</a>
            {site.instagram && (
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da AgroPet Ipê"
                className="ml-4 inline-flex align-middle hover:text-ink"
              >
                <InstagramLogo size={20} />
              </a>
            )}
          </p>
          <p className="mt-3">© <Year /> {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
