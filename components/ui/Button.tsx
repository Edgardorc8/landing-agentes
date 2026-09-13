// ============================================================================
// Archivo: components/ui/Button.tsx
// Entorno: Client Component ('use client')
// Dependencias: react, lucide-react (opcional para iconos hijos)
// ============================================================================

"use client";

import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-900 text-neutral-50 hover:bg-primary-800 shadow-sm shadow-neutral-900/10 border border-primary-800 active:scale-[0.99]",
  secondary:
    "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-300 active:scale-[0.99]",
  outline:
    "bg-transparent text-neutral-900 border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-100/50 active:scale-[0.99]",
  ghost:
    "bg-transparent text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 active:scale-[0.99]",
  whatsapp:
    "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-700/20 active:scale-[0.99]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3.5 py-1.5 text-xs font-medium tracking-wide",
  md: "px-5 py-2.5 text-sm font-medium tracking-wide",
  lg: "px-7 py-3.5 text-base font-medium tracking-wide",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  isLoading = false,
  className = "",
  disabled,
  children,
  ...props
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2.5 rounded-lg
    transition-all duration-200 ease-out focus-visible:outline-none 
    focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:pointer-events-none cursor-pointer
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.trim();

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Cargando...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
