// ============================================================================
// Archivo: components/sections/TrustBar.tsx
// Entorno: Server Component
// Dependencias: lib/constants, components/ui/AnimatedSection, lucide-react
// ============================================================================

import React from "react";
import { Award, CheckCircle } from "lucide-react";
import { trustBarContent } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function TrustBar() {
  return (
    <section className="py-12 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Estadísticas de Conversión y Solvencia */}
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pb-10 border-b border-neutral-100">
            {trustBarContent.stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left space-y-1">
                <p className="text-3xl sm:text-4xl font-bold tracking-tight text-primary-900">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-medium text-neutral-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Avales y Acreditaciones Profesionales */}
        <AnimatedSection delay={0.15}>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              <Award className="w-4 h-4 text-primary-700" />
              <span>Respaldo Institucional & Operativa Legal</span>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
              {trustBarContent.accreditations.map((item, index) => (
                <div key={index} className="flex items-center gap-1.5 text-xs text-neutral-700 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
