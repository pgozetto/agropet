import { Clock, MapPin, NavigationArrow, Phone } from "@phosphor-icons/react/ssr";
import { directionsUrl, mapsEmbedUrl, site } from "@/lib/site";
import { Reveal } from "./reveal";

export function Location() {
  return (
    <section id="onde-estamos" className="mx-auto max-w-6xl px-4 pb-20 md:px-6 md:pb-28">
      <Reveal className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Passe na loja.</h2>
        <dl className="mt-8 flex flex-col items-center gap-x-10 gap-y-4 text-lg md:flex-row">
          <div className="flex items-center gap-3">
            <dt><MapPin size={24} weight="duotone" className="text-brand" aria-label="Endereço" /></dt>
            <dd>
              {site.address.street}, {site.address.district}
            </dd>
          </div>
          <div className="flex items-center gap-3">
            <dt><Clock size={24} weight="duotone" className="text-brand" aria-label="Horário" /></dt>
            <dd>Abrimos às {parseInt(site.opensAt)}h</dd>
          </div>
          <div className="flex items-center gap-3">
            <dt><Phone size={24} weight="duotone" className="text-brand" aria-label="Telefone" /></dt>
            <dd>
              <a href={`tel:${site.phoneE164}`} className="hover:underline">
                {site.phoneDisplay}
              </a>
            </dd>
          </div>
        </dl>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 font-semibold transition-colors hover:border-brand active:scale-[0.98]"
        >
          <NavigationArrow size={18} weight="bold" aria-hidden />
          Como chegar
        </a>
      </Reveal>
      <Reveal delay={0.08} className="mt-10 overflow-hidden rounded-3xl shadow-soft">
        <iframe
          title="Mapa da AgroPet Ipê no Google Maps"
          src={mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-80 w-full border-0 md:h-[26rem]"
        />
      </Reveal>
    </section>
  );
}
