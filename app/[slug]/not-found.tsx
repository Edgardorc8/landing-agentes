// ============================================================================
// Archivo: app/[slug]/not-found.tsx
// Entorno: Server Component
// Dependencias: next/link, components/ui/Button, lucide-react
// ============================================================================

import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Building2 } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-neutral-50 flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center mx-auto text-neutral-400">
          <Building2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <p className="text-xs font-bold text-primary-700 uppercase tracking-wider">
            Error 404
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
            Zona Inmobiliaria No Encontrada
          </h1>
          <p className="text-sm text-neutral-600 leading-relaxed">
            La página o zona inmobiliaria que estás buscando no se encuentra disponible o ha sido reubicada en nuestro catálogo principal.
          </p>
        </div>

        <div className="pt-2">
          <Link href="/" className="inline-block w-full">
            <Button variant="primary" size="md" className="w-full">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>Volver a la Página Principal</span>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
