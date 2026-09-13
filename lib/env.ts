import { z } from "zod";

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY es obligatoria"),
  RESEND_FROM_EMAIL: z.string().email("RESEND_FROM_EMAIL debe ser un email válido"),
  RESEND_TO_EMAIL: z.string().email("RESEND_TO_EMAIL debe ser un email válido"),
  NEXT_PUBLIC_SITE_URL: z.string().url("NEXT_PUBLIC_SITE_URL debe ser una URL válida"),
  NEXT_PUBLIC_WHATSAPP_NUMBER: z.string().optional(),
});

export const env = envSchema.parse({
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
  RESEND_TO_EMAIL: process.env.RESEND_TO_EMAIL,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
});
