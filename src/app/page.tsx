import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { Reviews } from "@/components/reviews";
import { Services } from "@/components/services";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { site } from "@/lib/site";

// Dados estruturados para o Google (negócio local).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PetStore",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/logo-agropet-ipe.webp`,
  telephone: site.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
  },
  makesOffer: [
    "Pet Shop",
    "Banho e Tosa",
    "Aves",
    "Vacinação",
    "Jardinagem",
    "Piscina",
    "Pesca",
    "Granja",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  ...(site.instagram ? { sameAs: [site.instagram] } : {}),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Booking />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
