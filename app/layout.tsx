// ============================================================================
// Archivo: app/layout.tsx
// Entorno: Server Component
// Dependencias: next/font/google, @vercel/analytics/react, lib/constants,
//               app/globals.css
// ============================================================================

import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig, faqs } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f1715",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Vende tu Inmueble en Venezuela en 90 Días | Valery & Asociados",
    template: "%s | Valery & Asociados",
  },
  description:
    "Agente inmobiliario en Venezuela. Venta estratégica de propiedades residenciales y comerciales con avalúo real, filtro de divisas y blindaje legal garantizado.",
  keywords: [
    "agente inmobiliario venezuela",
    "vender apartamento caracas",
    "venta inmuebles venezuela",
    "inmobiliaria caracas chacao",
    "asesor inmobiliario divisas venezuela",
    "avaluo inmobiliario caracas",
  ],
  authors: [{ name: "Valery & Asociados", url: siteConfig.url }],
  creator: "Valery & Asociados",
  publisher: "Valery & Asociados",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Vende tu Inmueble en Venezuela en 90 Días al Valor Real de Mercado",
    description:
      "Filtramos compradores calificados con capital en divisas y blindamos la documentación legal de tu propiedad.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Valery & Asociados - Gestión Inmobiliaria High-End en Venezuela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vende tu Inmueble en Venezuela en 90 Días | Valery & Asociados",
    description:
      "Venta estratégica de propiedades residenciales y comerciales. Avalúo real y compradores calificados en divisas.",
    images: ["/opengraph-image"],
    creator: "@valeryinmuebles",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "$$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Francisco de Miranda, Torre Cavendes, Chacao",
          addressLocality: "Caracas",
          addressRegion: "Distrito Capital",
          addressCountry: "VE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 10.4912,
          longitude: -66.8523,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Caracas" },
          { "@type": "AdministrativeArea", name: "Valencia" },
          { "@type": "AdministrativeArea", name: "Lechería" },
        ],
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#founder`,
        name: "Lic. Andrea Valery",
        jobTitle: "Directora Principal de Operaciones Inmobiliarias",
        worksFor: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary-200 selection:text-primary-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
