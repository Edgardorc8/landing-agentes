// ============================================================================
// Archivo: lib/schema.ts
// Entorno: Compartido Cliente / Servidor
// Dependencias: zod
// ============================================================================

import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string({ required_error: "El nombre es obligatorio" })
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "Nombre demasiado largo"),
  email: z
    .string({ required_error: "El correo es obligatorio" })
    .email("Por favor ingresa un correo electrónico válido"),
  phone: z
    .string()
    .regex(/^\+?[\d\s\-]{7,15}$/, "Ingresa un número telefónico válido (ej: +58 412 1234567)")
    .optional()
    .or(z.literal("")),
  message: z
    .string({ required_error: "El mensaje es obligatorio" })
    .min(10, "Por favor cuéntanos detalles sobre tu propiedad (al menos 10 caracteres)")
    .max(1000, "El mensaje no puede exceder los 1000 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
