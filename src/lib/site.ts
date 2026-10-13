// Dados do negócio em um único lugar. Ajuste aqui e o site inteiro (SEO incluído) acompanha.

export const site = {
  name: "AgroPet Ipê",
  description:
    "Pet shop, banho e tosa e agropecuária em Santa Rosa, Piracicaba. Rações, aves, vacinação, jardinagem, piscina, pesca e granja.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://agropetipe.com.br",
  phoneDisplay: "(19) 99667-7042",
  phoneE164: "+5519996677042",
  whatsapp: "5519996677042",
  // TODO: informar o @ do Instagram (ex.: "https://instagram.com/agropetipe")
  instagram: "",
  address: {
    street: "Av. Adiel Paes Zamith, 883",
    district: "Santa Rosa",
    city: "Piracicaba",
    state: "SP",
    zip: "13414-100",
  },
  opensAt: "08:00",
  rating: { value: 4.9, count: 46 },
} as const;

export const fullAddress = `${site.address.street} - ${site.address.district}, ${site.address.city} - ${site.address.state}, ${site.address.zip}`;

export const mapsQuery = encodeURIComponent(`${site.name}, ${fullAddress}`);
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

// Street View da fachada (panorama indicado pelo cliente). Formato de embed sem chave de API.
const sv = { pano: "kC8ehQtaG-HGhuSONNHccw", lat: -22.6856359, lng: -47.6333214, heading: 235.34, pitch: -4.08 };
export const streetViewEmbedUrl = `https://www.google.com/maps/embed?pb=!4v1760000000000!6m8!1m7!1s${sv.pano}!2m2!1d${sv.lat}!2d${sv.lng}!3f${sv.heading}!4f${sv.pitch}!5f0.7820865974627469`;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
