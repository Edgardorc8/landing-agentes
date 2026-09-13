// ============================================================================
// Archivo: components/ui/Badge.tsx
// Entorno: Server Component
// Dependencias: react
// ============================================================================

import React from "react";

type BadgeVariant = "default" | "primary" | "accent" | "outline" | "success" | "warning";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-neutral-100 text-neutral-800 border-neutral-200/80",
  primary: "bg-primary-100 text-primary-900 border-primary-300/60",
  accent: "bg-accent-500/15 text-accent-700 border-accent-500/30",
  outline: "bg-transparent text-neutral-700 border-neutral-300",
  success: "bg-emerald-50 text-emerald-800 border-emerald-200",
  warning: "bg-amber-50 text-amber-800 border-amber-200",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide border uppercase ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
