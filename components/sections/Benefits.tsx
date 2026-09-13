// ============================================================================
// Archivo: components/sections/Benefits.tsx
// Entorno: Server Component
// Dependencias: lib/constants, components/ui/Card, components/ui/Badge,
//               components/ui/AnimatedSection, lucide-react
// ============================================================================

import React from "react";
import { Clock4, FileCheck, Camera, Globe2, Sparkles } from "lucide-react";
import { benefits } from "@/lib/constants";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import AnimatedSection from "@/components/ui/AnimatedSection";

const benefitIcons: Record<string, React.ReactNode> = {
  Clock4: <Clock4 className="w-6 h-6 text-primary-800" />,
  FileCheck: <FileCheck className="w-6 h-6 text-primary-800" />,
  Camera: <Camera className="w-6 h-6 text-primary-800" />,
  Globe2: <Globe2 className="w-6 h-6 text-primary-800" />,
};

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-neutral-100/40 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <AnimatedSection>
            <Badge variant="primary">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              Ventajas Competitivas
            </Badge>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
              ¿Por qué confiar la venta de tu inmueble a nuestro equipo?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-600">
              Cada acción está orientada a proteger tu patrimonio y acelerar el cierre con clientes solventes.
            </p>
          </AnimatedSection>
        </div>

        {/* Grid de Beneficios con Métricas Clave */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} delay={0.1 * (index + 1)}>
              <Card variant="default" className="h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary-100/60 flex items-center justify-center mb-4 border border-primary-200/50">
                    {benefitIcons[benefit.icon] || <Sparkles className="w-6 h-6 text-primary-800" />}
                  </div>
                  <CardTitle className="text-lg font-semibold leading-snug">
                    {benefit.title}
                  </CardTitle>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-4 border-t border-neutral-100 mt-auto">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-primary-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                    <span>{benefit.metric}</span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
