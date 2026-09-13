// ============================================================================
// Archivo: components/ui/AnimatedSection.tsx
// Entorno: Client Component ('use client')
// Dependencias: react, framer-motion (motion, useReducedMotion)
// ============================================================================

"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
}: AnimatedSectionProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      id={id}
      className={className}
      initial={prefersReduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: prefersReduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
