// ============================================================================
// Archivo: components/sections/Pricing.tsx
// Entorno: Client Component ('use client')
// Dependencias: react (useState), lib/constants, components/ui/Badge,
//               components/ui/Button, components/ui/AnimatedSection, lucide-react
// ============================================================================

"use client";

import React, { useState } from "react";
import { Check, MessageCircle, Sparkles, Tag } from "lucide-react";
import { pricingContent } from "@/lib/constants";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Pricing() {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1); // 1 = Exclusivo por defecto

  return (
    <section id="planes" className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <AnimatedSection>
            <Badge variant="primary">
              <Tag className="w-3.5 h-3.5 mr-1" />
              {pricingContent.badge}
            </Badge>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
              {pricingContent.headline}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-600">
              {pricingContent.subheadline}
            </p>
          </AnimatedSection>

          {/* Selector interactivo de pestañas para móvil */}
          <div className="pt-4 flex justify-center md:hidden">
            <div className="inline-flex p-1 rounded-xl bg-neutral-100 border border-neutral-200">
              {pricingContent.plans.map((plan, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedPlanIndex(index)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    selectedPlanIndex === index
                      ? "bg-white text-neutral-950 shadow-sm"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de Planes de Comercialización */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {pricingContent.plans.map((plan, index) => {
            const isVisibleOnMobile = selectedPlanIndex === index;
            const isHighlighted = plan.highlighted;

            return (
              <div
                key={index}
                className={`${isVisibleOnMobile ? "block" : "hidden md:block"} h-full`}
              >
                <AnimatedSection delay={0.15 * (index + 1)} className="h-full">
                  <div
                    className={`relative rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-between transition-all duration-300 ${
                      isHighlighted
                        ? "bg-neutral-950 text-neutral-50 shadow-2xl border-2 border-primary-500/40 ring-1 ring-primary-500/20"
                        : "bg-neutral-50 text-neutral-950 border border-neutral-200/80 shadow-xs"
                    }`}
                  >
                    {isHighlighted && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-600 text-white shadow-md">
                          <Sparkles className="w-3 h-3" />
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    <div>
                      <div className="flex items-baseline justify-between gap-4">
                        <h3
                          className={`text-xl font-bold ${
                            isHighlighted ? "text-white" : "text-neutral-950"
                          }`}
                        >
                          {plan.name}
                        </h3>
                      </div>

                      <p
                        className={`mt-2 text-xs leading-relaxed ${
                          isHighlighted ? "text-neutral-300" : "text-neutral-600"
                        }`}
                      >
                        {plan.description}
                      </p>

                      <div className="mt-6 pb-6 border-b border-neutral-200/20">
                        <div className="flex items-baseline gap-2">
                          <span
                            className={`text-4xl sm:text-5xl font-extrabold font-display ${
                              isHighlighted ? "text-white" : "text-primary-950"
                            }`}
                          >
                            {plan.price}
                          </span>
                          <span
                            className={`text-xs ${
                              isHighlighted ? "text-neutral-400" : "text-neutral-500"
                            }`}
                          >
                            {plan.period}
                          </span>
                        </div>
                      </div>

                      {/* Lista de Servicios Incluidos */}
                      <ul className="mt-6 space-y-3.5 text-xs sm:text-sm">
                        {plan.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-3">
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                isHighlighted
                                  ? "bg-primary-500/20 text-primary-300"
                                  : "bg-primary-100 text-primary-800"
                              }`}
                            >
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span
                              className={
                                isHighlighted ? "text-neutral-200" : "text-neutral-700"
                              }
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-200/20">
                      <Button
                        variant={isHighlighted ? "whatsapp" : "outline"}
                        size="lg"
                        href={plan.cta.href}
                        external
                        className="w-full font-semibold"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>{plan.cta.label}</span>
                      </Button>
                    </div>

                  </div>
                </AnimatedSection>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
