// ============================================================================
// Archivo: components/forms/ContactForm.tsx
// Entorno: Client Component ('use client')
// Dependencias: react (useActionState), react-hook-form, @hookform/resolvers/zod,
//               lib/schema, lib/actions, components/ui/SubmitButton, lucide-react
// ============================================================================

"use client";

import React, { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/schema";
import { submitContact, type ActionState } from "@/lib/actions";
import SubmitButton from "@/components/ui/SubmitButton";

const initialState: ActionState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  const {
    register,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  return (
    <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-sm">
      {state.success ? (
        <div className="py-8 text-center space-y-3" role="status" aria-live="polite">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-neutral-900">
            ¡Solicitud Enviada con Éxito!
          </h3>
          <p className="text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
            {state.message}
          </p>
        </div>
      ) : (
        <form action={formAction} className="space-y-4">
          
          {/* Campo: Nombre Completo */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5"
            >
              Nombre y Apellido <span className="text-amber-700">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Ej: Lic. Roberto Villegas"
              {...register("name")}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                errors.name || state.errors?.name
                  ? "border-red-400 focus:ring-red-300 bg-red-50/20"
                  : "border-neutral-300 focus:ring-primary-700 bg-white"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {errors.name.message}
              </p>
            )}
            {state.errors?.name && !errors.name && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {state.errors.name[0]}
              </p>
            )}
          </div>

          {/* Campo: Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5"
            >
              Correo Electrónico <span className="text-amber-700">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="ejemplo@correo.com"
              {...register("email")}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                errors.email || state.errors?.email
                  ? "border-red-400 focus:ring-red-300 bg-red-50/20"
                  : "border-neutral-300 focus:ring-primary-700 bg-white"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {errors.email.message}
              </p>
            )}
            {state.errors?.email && !errors.email && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {state.errors.email[0]}
              </p>
            )}
          </div>

          {/* Campo: Teléfono / WhatsApp */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5"
            >
              Teléfono / WhatsApp <span className="text-neutral-400 font-normal">(Opcional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+58 412 1234567"
              {...register("phone")}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                errors.phone || state.errors?.phone
                  ? "border-red-400 focus:ring-red-300 bg-red-50/20"
                  : "border-neutral-300 focus:ring-primary-700 bg-white"
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {errors.phone.message}
              </p>
            )}
            {state.errors?.phone && !errors.phone && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {state.errors.phone[0]}
              </p>
            )}
          </div>

          {/* Campo: Mensaje / Detalles del Inmueble */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5"
            >
              Detalles del Inmueble a Vender <span className="text-amber-700">*</span>
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder="Ubicación (ej: Caracas, Chacao), tipo de inmueble (apartamento/casa), metraje aproximado..."
              {...register("message")}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all resize-none ${
                errors.message || state.errors?.message
                  ? "border-red-400 focus:ring-red-300 bg-red-50/20"
                  : "border-neutral-300 focus:ring-primary-700 bg-white"
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {errors.message.message}
              </p>
            )}
            {state.errors?.message && !errors.message && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {state.errors.message[0]}
              </p>
            )}
          </div>

          {/* Alerta de Error Global de Envío */}
          {state.message && !state.success && (
            <div
              className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2"
              role="status"
              aria-live="polite"
            >
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>{state.message}</span>
            </div>
          )}

          {/* ⚠️ CRÍTICO: SubmitButton DEBE estar DENTRO del <form> */}
          <div className="pt-2">
            <SubmitButton label="Solicitar Evaluación Gratuita" />
          </div>

          <p className="text-[11px] text-neutral-400 text-center pt-1">
            Garantizamos 100% de confidencialidad en tus datos de contacto.
          </p>
        </form>
      )}
    </div>
  );
}
