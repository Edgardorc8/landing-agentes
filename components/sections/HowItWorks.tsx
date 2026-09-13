// ============================================================================
// Archivo: components/sections/HowItWorks.tsx
// Entorno: Server Component
// Dependencias: lib/constants, components/ui/Badge, components/ui/AnimatedSection,
//               components/ui/Button, lucide-react
// ============================================================================

import React from "react";
import { ArrowRight, Layers, MessageCircle } from "lucide-react";
import { howItWorks, heroContent } from "@/lib/constants";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <AnimatedSection>
            <Badge variant="primary">
              <Layers className="w-3.5 h-3.5 mr-1" />
              {howItWorks.badge}
            </Badge>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
              {howItWorks.headline}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-600">
              Simplificamos el proceso inmobiliario para que tú solo tengas que presentarte a firmar en el Registro.
            </p>
          </AnimatedSection>
        </div>

        {/* Pasos en 3 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {howItWorks.steps.map((step, index) => (
            <AnimatedSection key={index} delay={0.15 * (index + 1)}>
              <div className="relative p-8 rounded-2xl bg-neutral-50 border border-neutral-200/80 h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl font-extrabold text-primary-200 mb-6 font-display tracking-tight">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-950 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200/60 flex items-center text-xs font-semibold text-primary-800">
                  <span>Etapa {step.number} del Protocolo</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to action de transición */}
        <AnimatedSection delay={0.4} className="mt-14 text-center">
          <Button
            variant="whatsapp"
            size="md"
            href={heroContent.ctaPrimary.href}
            external
            className="font-medium"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Iniciar el Paso 1 vía WhatsApp</span>
          </Button>
        </AnimatedSection>

      </div>
    </section>
  );
}
