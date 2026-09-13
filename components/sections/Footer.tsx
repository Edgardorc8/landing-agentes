// ============================================================================
// Archivo: components/sections/Footer.tsx
// Entorno: Server Component
// Dependencias: lib/constants, lucide-react
// ============================================================================

import React from "react";
import { Building2, Mail, Phone, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import { siteConfig, footerContent } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
          
          {/* Columna Marca & Autoridad (2 cols en LG) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-9 h-9 rounded-xl bg-primary-800/80 border border-primary-700/60 flex items-center justify-center text-primary-200">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight">Valery & Asociados</span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              {footerContent.description}
            </p>

            <div className="pt-2 text-xs text-neutral-500 space-y-1">
              <p>Razón Social: {footerContent.legalName}</p>
              <p>RIF: {footerContent.rif}</p>
            </div>
          </div>

          {/* Columna Navegación Rápida */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              {footerContent.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Redes & Canales */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Canales Directos
            </h4>
            <ul className="space-y-2 text-xs">
              {footerContent.social.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white transition-colors"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                Operaciones 100% Notariadas
              </span>
            </div>
          </div>

          {/* Columna Contacto Físico y Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Oficina Principal
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span>{footerContent.contact.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <a href={`tel:${footerContent.contact.phone.replace(/\s+/g, "")}`} className="hover:text-white">
                  {footerContent.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <a href={`mailto:${footerContent.contact.email}`} className="hover:text-white">
                  {footerContent.contact.email}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Barra Inferior Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} Valery & Asociados. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            {footerContent.legal.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="hover:text-neutral-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
