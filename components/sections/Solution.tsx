// ============================================================================
// Archivo: components/sections/Solution.tsx
// Entorno: Server Component
// Dependencias: next/image, lib/constants, components/ui/Badge,
//               components/ui/AnimatedSection, lucide-react
// ============================================================================

import React from "react";
import Image from "next/image";
import { CheckCircle2, Sparkles, FileCheck2, UserCheck, Calculator } from "lucide-react";
import { solutionContent } from "@/lib/constants";
import Badge from "@/components/ui/Badge";
import AnimatedSection from "@/components/ui/AnimatedSection";

const pointIcons = [
  <Calculator key="0" className="w-5 h-5 text-primary-700 mt-0.5 shrink-0" />,
  <FileCheck2 key="1" className="w-5 h-5 text-primary-700 mt-0.5 shrink-0" />,
  <UserCheck key="2" className="w-5 h-5 text-primary-700 mt-0.5 shrink-0" />,
];

export default function Solution() {
  return (
    <section id="metodo" className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna Visual / Imagen de Arquitectura */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <AnimatedSection delay={0.2} className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-100">
                <div className="aspect-[4/3] sm:aspect-[4/5] relative">
                  <Image
                    src={solutionContent.image.src}
                    alt={solutionContent.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Eficacia Comprobada</span>
                    </div>
                    <p className="text-base font-semibold leading-snug">
                      Seguridad registral antes de publicar y compradores verificados con liquidez.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Columna Explicativa del Método */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <AnimatedSection>
              <Badge variant="primary">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                {solutionContent.badge}
              </Badge>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950 leading-tight">
                {solutionContent.headline}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                {solutionContent.subheadline}
              </p>
            </AnimatedSection>

            {/* Puntos Clave de la Solución */}
            <div className="space-y-5 pt-4">
              {solutionContent.points.map((point, index) => (
                <AnimatedSection key={index} delay={0.25 + index * 0.1}>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200/70">
                    {pointIcons[index]}
                    <div>
                      <h3 className="text-base font-semibold text-neutral-900 mb-1">
                        {point.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
