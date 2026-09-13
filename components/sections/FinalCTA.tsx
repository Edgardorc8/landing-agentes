// ============================================================================
// Archivo: components/sections/FinalCTA.tsx
// Entorno: Client Component ('use client')
// Dependencias: lib/constants, components/ui/Badge, components/ui/Button,
//               components/ui/AnimatedSection, components/forms/ContactForm,
//               lucide-react
// ============================================================================

"use client";

import React from "react";
import { MessageCircle, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { finalCTA } from "@/lib/constants";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/forms/ContactForm";

export default function FinalCTA() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-neutral-900 text-white relative overflow-hidden">
      {/* Luz ambiental sutil en el fondo */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-900/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-950/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Copy de Conversión & Botón WhatsApp Directo */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatedSection>
              <Badge variant="accent" className="bg-amber-400/20 text-amber-300 border-amber-400/40">
                <Clock className="w-3.5 h-3.5 mr-1" />
                {finalCTA.badge}
              </Badge>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                {finalCTA.headline}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                {finalCTA.subheadline}
              </p>
            </AnimatedSection>

            {/* Canal WhatsApp Inmediato */}
            <AnimatedSection delay={0.3} className="pt-4 space-y-4">
              <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 shadow-md">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Canal Prioritario Inmediato</span>
                </div>
                <p className="text-sm text-neutral-200 mb-4">
                  Habla directamente con nuestro socio director sin intermediarios para evaluar tu propiedad hoy mismo:
                </p>
                <Button
                  variant="whatsapp"
                  size="lg"
                  href={finalCTA.whatsappHref}
                  external
                  className="w-full font-bold shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>{finalCTA.whatsappButtonText}</span>
                </Button>
              </div>

              <div className="flex items-center gap-4 text-xs text-neutral-400 pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Atención confidencial
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Diagnóstico 100% gratuito
                </span>
              </div>
            </AnimatedSection>
          </div>

          {/* Columna Derecha: Formulario de Contacto Validado */}
          <div className="lg:col-span-6">
            <AnimatedSection delay={0.25}>
              <div className="space-y-3 mb-4">
                <h3 className="text-lg font-semibold text-white">
                  {finalCTA.formTitle}
                </h3>
                <p className="text-xs text-neutral-400">
                  O si prefieres, déjanos los datos de tu inmueble y te contactaremos por WhatsApp o correo:
                </p>
              </div>
              <ContactForm />
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
