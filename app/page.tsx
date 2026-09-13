// ============================================================================
// Archivo: app/page.tsx
// Entorno: Server Component
// Dependencias: components/sections/*
// ============================================================================

import React from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Benefits from "@/components/sections/Benefits";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Guarantee from "@/components/sections/Guarantee";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-neutral-50 text-neutral-950 selection:bg-primary-200 selection:text-primary-900">
      {/* Navegación Fija con Blur */}
      <Navbar />

      <main>
        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. TRUST BAR */}
        <TrustBar />

        {/* 3. PROBLEM SECTION */}
        <Problem />

        {/* 4. SOLUTION SECTION */}
        <Solution />

        {/* 5. BENEFITS SECTION */}
        <Benefits />

        {/* 6. HOW IT WORKS */}
        <HowItWorks />

        {/* 7. TESTIMONIALS */}
        <Testimonials />

        {/* 8. PRICING & HONORARIOS */}
        <Pricing />

        {/* 9. GUARANTEE */}
        <Guarantee />

        {/* 10. FAQS */}
        <FAQ />

        {/* 11. FINAL CTA & CONTACT FORM */}
        <FinalCTA />
      </main>

      {/* 12. FOOTER */}
      <Footer />
    </div>
  );
}
