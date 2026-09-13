// ============================================================================
// Archivo: components/ui/SubmitButton.tsx
// Entorno: Client Component ('use client')
// Dependencias: react-dom (useFormStatus)
// ============================================================================

"use client";

import React from "react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  label?: string;
  loadingLabel?: string;
  className?: string;
}

export default function SubmitButton({
  label = "Enviar mensaje",
  loadingLabel = "Enviando solicitud...",
  className = "",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      aria-busy={pending}
      className={`
        w-full inline-flex items-center justify-center gap-2 px-6 py-3.5
        bg-primary-900 text-neutral-50 rounded-lg font-medium text-sm tracking-wide
        hover:bg-primary-800 transition-all duration-200 ease-out
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2
        disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer shadow-sm
        ${className}
      `.trim()}
    >
      {pending ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-neutral-50"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
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
          <span>{loadingLabel}</span>
        </>
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
}
