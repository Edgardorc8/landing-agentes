// ============================================================================
// Archivo: components/sections/FAQ.tsx
// Entorno: Client Component ('use client')
// Dependencias: react (useState), lib/constants, components/ui/Badge,
//               components/ui/AnimatedSection, lucide-react
// ============================================================================

"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/lib/constants";
import Badge from "@/components/ui/Badge";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-neutral-100/40 border-b border-neutral-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center space-y-4 mb-16">
          <AnimatedSection>
            <Badge variant="primary">
              <HelpCircle className="w-3.5 h-3.5 mr-1" />
              Respuestas Claras
            </Badge>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
              Preguntas Frecuentes sobre la Venta Inmobiliaria
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-600">
              Transparencia total sobre nuestro método, avalúo, trámites registrales y honorarios.
            </p>
          </AnimatedSection>
        </div>

        {/* Acordeón Accesible WCAG 2.2 */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const headerId = `faq-header-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <AnimatedSection key={faq.id} delay={0.08 * (index + 1)}>
                <div className="rounded-2xl bg-white border border-neutral-200/80 overflow-hidden shadow-xs transition-all duration-200">
                  <h3>
                    <button
                      type="button"
                      id={headerId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 font-semibold text-neutral-900 hover:text-primary-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700"
                    >
                      <span className="text-base sm:text-lg leading-snug">
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 bg-primary-100 text-primary-900" : "text-neutral-500"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    hidden={!isOpen}
                    className={`px-6 sm:px-7 pb-6 pt-0 text-sm sm:text-base text-neutral-600 leading-relaxed ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    <p className="border-t border-neutral-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}
