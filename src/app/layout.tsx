import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "AgroPet Ipê | Pet shop, banho e tosa e agropecuária em Piracicaba",
    template: "%s | AgroPet Ipê",
  },
  description: site.description,
  keywords: [
    "pet shop Piracicaba",
    "banho e tosa Piracicaba",
    "pet shop Santa Rosa Piracicaba",
    "agropecuária Piracicaba",
    "ração Piracicaba",
    "vacinação pet Piracicaba",
    "jardinagem",
    "produtos para piscina",
    "pesca",
    "granja",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.name,
    title: "AgroPet Ipê | Pet shop e agropecuária em Piracicaba",
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1622" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} antialiased`}>
      <body className="min-h-[100dvh] font-sans">{children}</body>
    </html>
  );
}
