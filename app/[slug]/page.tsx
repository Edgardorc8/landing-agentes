// ============================================================================
// Archivo: app/[slug]/page.tsx
// Entorno: Server Component
// Dependencias: next/navigation (notFound), next/link, lib/constants,
//               components/sections/*, components/ui/Button, components/ui/Badge
// ============================================================================

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MessageCircle, ShieldCheck, MapPin } from "lucide-react";
import { agentPages, heroContent } from "@/lib/constants";
import Navbar from "@/components/sections/Navbar";
import TrustBar from "@/components/sections/TrustBar";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Benefits from "@/components/sections/Benefits";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Guarantee from "@/components/sections/Guarantee";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// OBLIGATORIO: Generación estática previa para builds de producción en Vercel
export async function generateStaticParams() {
  return agentPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = agentPages.find((p) => p.slug === slug);

  if (!page) {
    return {
      title: "Página no encontrada",
    };
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
    },
  };
}

export default async function AgentPage({ params }: PageProps) {
  const { slug } = await params;
  const page = agentPages.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-neutral-50 text-neutral-950">
      <Navbar />

      <main>
        {/* Hero Personalizado por Zona / Servicio Dinámico */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-neutral-200/80 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <AnimatedSection>
              <Badge variant="primary">
                <MapPin className="w-3.5 h-3.5 mr-1" />
                Zona Exclusiva: {page.zone}
              </Badge>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 leading-tight">
                {page.heroHeadline}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                {page.heroSubheadline}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  variant="whatsapp"
                  size="lg"
                  href={`https://wa.me/584120000000?text=Hola,%20me%20comunico%20desde%20la%20página%20de%20${encodeURIComponent(
                    page.zone
                  )}%20para%20vender%20mi%20inmueble.`}
                  external
                  className="font-semibold shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Consultar con el Especialista de {page.zone}</span>
                </Button>

                <Button variant="outline" size="lg" href="#contacto">
                  <span>Solicitar Avalúo de Zona</span>
                </Button>
              </div>

              <div className="pt-6 flex items-center justify-center gap-2 text-xs text-neutral-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Gestión registral garantizada en la jurisdicción local</span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Secciones de Soporte y Conversión */}
        <TrustBar />
        <Problem />
        <Solution />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
