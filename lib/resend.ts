// ============================================================================
// Archivo: lib/resend.ts
// Entorno: Server
// Dependencias: resend, lib/env
// ============================================================================

import { Resend } from "resend";
import { env } from "./env";

export const resend = new Resend(env.RESEND_API_KEY);
