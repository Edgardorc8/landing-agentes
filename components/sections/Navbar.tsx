// ============================================================================
// Archivo: components/sections/Navbar.tsx
// Entorno: Client Component ('use client')
// Dependencias: react (useState, useEffect), lib/constants, components/ui/Button,
//               lucide-react
// ============================================================================

"use client";

import React, { useState, useEffect } from "react";
import { Building2, MessageCircle, Menu, X } from "lucide-react";
import { heroContent } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-xs py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logotipo */}
          <a href="/" className="flex items-center gap-2 text-neutral-950 font-bold tracking-tight text-lg">
            <div className="w-8 h-8 rounded-lg bg-primary-900 text-white flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
            <span>Valery & Asociados</span>
          </a>

          {/* Enlaces Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-600">
            <a href="#problema" className="hover:text-neutral-950 transition-colors">
              El Mercado
            </a>
            <a href="#metodo" className="hover:text-neutral-950 transition-colors">
              Método
            </a>
            <a href="#beneficios" className="hover:text-neutral-950 transition-colors">
              Beneficios
            </a>
            <a href="#testimonios" className="hover:text-neutral-950 transition-colors">
              Testimonios
            </a>
            <a href="#planes" className="hover:text-neutral-950 transition-colors">
              Honorarios
            </a>
            <a href="#faq" className="hover:text-neutral-950 transition-colors">
              Preguntas
            </a>
          </nav>

          {/* CTA Header */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="whatsapp"
              size="sm"
              href={heroContent.ctaPrimary.href}
              external
              className="font-medium"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Directo</span>
            </Button>
          </div>

          {/* Botón Menú Móvil */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-neutral-950"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú Móvil desplegable */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 border-t border-neutral-200 mt-3 space-y-3 bg-white px-2 rounded-xl shadow-lg">
            <nav className="flex flex-col space-y-2.5 text-sm font-medium text-neutral-700">
              <a
                href="#problema"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-3 hover:bg-neutral-100 rounded-lg"
              >
                El Mercado
              </a>
              <a
                href="#metodo"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-3 hover:bg-neutral-100 rounded-lg"
              >
                Método
              </a>
              <a
                href="#beneficios"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-3 hover:bg-neutral-100 rounded-lg"
              >
                Beneficios
              </a>
              <a
                href="#testimonios"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-3 hover:bg-neutral-100 rounded-lg"
              >
                Testimonios
              </a>
              <a
                href="#planes"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-3 hover:bg-neutral-100 rounded-lg"
              >
                Honorarios
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-3 hover:bg-neutral-100 rounded-lg"
              >
                Preguntas
              </a>
            </nav>
            <div className="pt-2 px-2">
              <Button
                variant="whatsapp"
                size="md"
                href={heroContent.ctaPrimary.href}
                external
                className="w-full"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Directo</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
