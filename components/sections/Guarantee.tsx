// ============================================================================
// Archivo: components/sections/Guarantee.tsx
// Entorno: Server Component
// Dependencias: lib/constants, components/ui/Badge, components/ui/AnimatedSection,
//               lucide-react
// ============================================================================

import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { guarantee } from "@/lib/constants";
import Badge from "@/components/ui/Badge";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Guarantee() {
  return (
    <section className="py-20 md:py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection>
          <div className="relative rounded-3xl bg-neutral-900 text-neutral-50 p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl border border-neutral-800">
            {/* Fondo con gradiente geométrico sutil */}
            <div
              className="absolute top-0 right-0 w-96 h-96 bg-primary-800/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
              
              {/* Icono de Seguridad */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-10 h-10 text-emerald-400" />
              </div>

              {/* Contenido de la Garantía */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <Badge variant="success" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/40">
                    {guarantee.badge}
                  </Badge>
                  <span className="text-xs text-neutral-400 font-medium">
                    {guarantee.duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white leading-snug">
                  {guarantee.headline}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl">
                  {guarantee.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs text-emerald-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Sin anticipos
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Sin cobros por fotografía o marketing
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Honorarios liquidados únicamente contra firma en registro
                  </span>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
