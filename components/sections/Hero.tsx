// ============================================================================
// Archivo: components/sections/Hero.tsx
// Entorno: Server Component
// Dependencias: next/image, lib/constants, components/ui/Button,
//               components/ui/Badge, components/ui/AnimatedSection, lucide-react
// ============================================================================

import React from "react";
import Image from "next/image";
import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { heroContent } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden border-b border-neutral-200/70">
      {/* Luz ambiental sutil en el fondo */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-primary-100/40 via-transparent to-transparent pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Copy y CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <AnimatedSection delay={0.1}>
              <Badge variant="primary" className="mb-2">
                <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                {heroContent.badge}
              </Badge>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 leading-[1.12]">
                {heroContent.headline}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl">
                {heroContent.subheadline}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                <Button
                  variant="whatsapp"
                  size="lg"
                  href={heroContent.ctaPrimary.href}
                  external
                  className="font-semibold shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>{heroContent.ctaPrimary.label}</span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  href={heroContent.ctaSecondary.href}
                  className="group"
                >
                  <span>{heroContent.ctaSecondary.label}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              <p className="text-xs text-neutral-500 pt-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {heroContent.microcopy}
              </p>
            </AnimatedSection>
          </div>

          {/* Columna Imagen Hero con Priority */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.35} className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200/80 shadow-2xl shadow-neutral-900/10 bg-neutral-100">
                <div className="aspect-[4/3] sm:aspect-[16/11] relative">
                  <Image
                    src={heroContent.image.src}
                    alt={heroContent.image.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
                  
                  {/* Tarjeta flotante con resultado real */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg">
                    <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
                      <span>Último cierre verificado</span>
                      <span className="font-semibold text-emerald-600">45 días</span>
                    </div>
                    <p className="text-sm font-bold text-neutral-900">
                      Los Palos Grandes · Cerrado al 98% del avalúo
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
