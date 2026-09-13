// ============================================================================
// Archivo: components/ui/Card.tsx
// Entorno: Server Component
// Dependencias: react
// ============================================================================

import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "muted" | "elevated" | "highlighted";
}

const variantStyles = {
  default: "bg-white border border-neutral-200/80 shadow-xs",
  muted: "bg-neutral-100/70 border border-neutral-200/60",
  elevated: "bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-200",
  highlighted: "bg-neutral-900 text-neutral-50 border border-neutral-800 shadow-lg shadow-neutral-950/20",
};

export function Card({
  children,
  className = "",
  variant = "default",
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-200 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 sm:p-8 pb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`text-xl font-semibold tracking-tight text-neutral-950 ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={`mt-2 text-sm leading-relaxed text-neutral-600 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 sm:p-8 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`p-6 sm:p-8 pt-4 border-t border-neutral-100 flex items-center ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
