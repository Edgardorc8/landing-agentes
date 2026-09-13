// ============================================================================
// Archivo: components/sections/Testimonials.tsx
// Entorno: Server Component
// Dependencias: next/image, lib/constants, components/ui/Badge,
//               components/ui/AnimatedSection, lucide-react
// ============================================================================

import React from "react";
import Image from "next/image";
import { Star, MessageSquareQuote, CheckCircle } from "lucide-react";
import { testimonials } from "@/lib/constants";
import Badge from "@/components/ui/Badge";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-28 bg-neutral-100/50 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <AnimatedSection>
            <Badge variant="primary">
              <MessageSquareQuote className="w-3.5 h-3.5 mr-1" />
              Casos de Éxito Reales
            </Badge>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
              Propietarios que vendieron su patrimonio con respaldo y rapidez
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-600">
              Resultados certificados por familias, inversionistas y venezolanos en el exterior.
            </p>
          </AnimatedSection>
        </div>

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <AnimatedSection key={item.id} delay={0.15 * (index + 1)}>
              <div className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-xs h-full flex flex-col justify-between">
                
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Resultado Medible Destacado */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item.result}</span>
                  </div>

                  {/* Cita */}
                  <p className="text-sm text-neutral-700 leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Perfil del Cliente */}
                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-neutral-200">
                    <Image
                      src={item.photo}
                      alt={item.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-neutral-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-neutral-500 truncate">
                      {item.company}
                    </p>
                    <p className="text-[11px] text-neutral-400 truncate">
                      {item.role}
                    </p>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
