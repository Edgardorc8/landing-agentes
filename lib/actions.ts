// ============================================================================
// Archivo: lib/actions.ts
// Entorno: Server Actions ('use server')
// Dependencias: @react-email/render, lib/schema, lib/resend, lib/env,
//               emails/ContactNotification
// ============================================================================

"use server";

import React from "react";
import { render } from "@react-email/render";
import { contactSchema, type ContactFormData } from "./schema";
import { resend } from "./resend";
import { env } from "./env";
import ContactNotification from "@/emails/ContactNotification";

export type ActionState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormData, string[]>>;
};

export async function submitContact(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const raw = Object.fromEntries(formData);
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "Por favor corrige los campos marcados en rojo.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    // render() es asíncrono desde @react-email/render v2.0.0
    const html = await render(
      React.createElement(ContactNotification, {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        message: parsed.data.message,
      })
    );

    await resend.emails.send({
      from: env.RESEND_FROM_EMAIL,
      to: env.RESEND_TO_EMAIL,
      subject: `Nueva solicitud de avalúo/venta: ${parsed.data.name}`,
      html,
    });

    return {
      success: true,
      message: "¡Solicitud recibida! Un especialista de nuestro equipo te contactará en menos de 24 horas.",
    };
  } catch (error) {
    console.error("[submitContact Error]", error);
    // Mensaje amigable y seguro sin exponer stack trace
    return {
      success: false,
      message:
        "Ocurrió un inconveniente temporal enviando el correo. Por favor escríbenos directamente por WhatsApp para atenderte de inmediato.",
    };
  }
}
