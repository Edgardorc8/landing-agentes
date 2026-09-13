// ============================================================================
// Archivo: components/sections/Problem.tsx
// Entorno: Server Component
// Dependencias: lib/constants, components/ui/Card, components/ui/Badge,
//               components/ui/AnimatedSection, lucide-react
// ============================================================================

import React from "react";
import { TrendingDown, ShieldAlert, Users, AlertTriangle } from "lucide-react";
import { problemContent } from "@/lib/constants";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import AnimatedSection from "@/components/ui/AnimatedSection";

const iconMap: Record<string, React.ReactNode> = {
  TrendingDown: <TrendingDown className="w-6 h-6 text-amber-600" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-amber-600" />,
  Users: <Users className="w-6 h-6 text-amber-600" />,
};

export default function Problem() {
  return (
    <section id="problema" className="py-20 md:py-28 bg-neutral-100/50 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de Sección */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <AnimatedSection>
            <Badge variant="warning">
              <AlertTriangle className="w-3.5 h-3.5 mr-1" />
              {problemContent.badge}
            </Badge>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
              {problemContent.headline}
            </h2>
          </AnimatedSection>
        </div>

        {/* Grid de Dolores Específicos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemContent.pains.map((pain, index) => (
            <AnimatedSection key={index} delay={0.15 * (index + 1)}>
              <Card variant="default" className="h-full border-neutral-200/90 hover:border-amber-400/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-amber-100/80 flex items-center justify-center mb-4 border border-amber-200/50">
                    {iconMap[pain.icon] || <AlertTriangle className="w-6 h-6 text-amber-600" />}
                  </div>
                  <CardTitle className="text-lg leading-snug">
                    {pain.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {pain.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
