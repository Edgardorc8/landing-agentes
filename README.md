# Valery & Asociados | Landing Page Inmobiliaria High-Ticket

Plataforma web de captación y venta inmobiliaria de alto rendimiento para el mercado venezolano, desarrollada bajo estándares Awwwards, CRO de alta conversión y arquitectura moderna con **Next.js 15 (App Router)**, **React 19**, **TailwindCSS 4** (@theme con paleta `oklch`), **Framer Motion**, **React Hook Form**, **Zod**, **Resend** y **Vercel Analytics**.

---

## 🚀 Requisitos Previos

- **Node.js**: Versión `20.x` o superior (LTS recomendado).
- **NPM**: Versión `10.x` o superior.
- **Cuenta en Resend**: [resend.com](https://resend.com) con API Key activa.
- **Dominio Verificado**: Registros DNS (SPF, DKIM, DMARC) configurados en Resend para el envío de notificaciones de leads.
- **Cuenta en Vercel**: [vercel.com](https://vercel.com) para despliegue automatizado en producción.

---

## 🛠️ Setup Local Paso a Paso

1. **Clonar e ingresar al proyecto**:
   ```bash
   cd landing-agentes
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   Copia el archivo de ejemplo:
   ```bash
   cp .env.local.example .env.local
   ```
   Edita `.env.local` con tus credenciales:
   ```env
   RESEND_API_KEY="re_tu_api_key_aqui"
   RESEND_FROM_EMAIL="contacto@valeryinmuebles.com"
   RESEND_TO_EMAIL="tu-email@gmail.com"
   NEXT_PUBLIC_SITE_URL="http://localhost:3000"
   NEXT_PUBLIC_WHATSAPP_NUMBER="584120000000"
   ```

4. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

5. **Verificar compilación para producción**:
   ```bash
   npm run build
   ```

---

## 📦 Variables de Entorno

| Variable | Tipo | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- |
| `RESEND_API_KEY` | Privada (Server) | Llave de API emitida por Resend | `re_123456789...` |
| `RESEND_FROM_EMAIL` | Privada (Server) | Remitente verificado en Resend | `onboarding@resend.dev` o `ventas@tudominio.com` |
| `RESEND_TO_EMAIL` | Privada (Server) | Buzón donde recibes los datos del lead | `gerencia@tudominio.com` |
| `NEXT_PUBLIC_SITE_URL` | Pública (Client/Server) | URL base absoluta para metadata, OG y Sitemap | `https://valeryinmuebles.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Pública (Client/Server) | Número de WhatsApp internacional | `584120000000` |

> ⚠️ **Failfast con Zod**: El archivo `lib/env.ts` valida todas las variables al iniciar. Si falta alguna variable obligatoria, el build se detendrá con un mensaje claro antes de subir a producción.

---

## 🌐 Deploy en Vercel Paso a Paso

1. **Subir a GitHub**:
   Asegúrate de que tu rama `main` contenga todos los cambios confirmados.
2. **Importar en Vercel Dashboard**:
   - Ingresa a [vercel.com/new](https://vercel.com/new).
   - Conecta tu repositorio Git y selecciona la carpeta `landing-agentes`.
   - Framework preset: **Next.js**.
3. **Cargar Variables de Entorno en Vercel**:
   En la sección **Environment Variables**, añade:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `RESEND_TO_EMAIL`
   - `NEXT_PUBLIC_SITE_URL` (tu dominio de producción, ej. `https://valeryinmuebles.com`)
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
4. **Desplegar**:
   Haz clic en **Deploy**. Vercel compilará la aplicación, generará las rutas estáticas y activará Vercel Analytics automáticamente.

---

## 📑 Cómo Duplicar / Crear Nuevas Landings Dinámicas

La arquitectura soporta rutas dinámicas optimizadas estáticamente en `app/[slug]/page.tsx`:

1. Abre `lib/constants.ts`.
2. Dirígete al array `agentPages`.
3. Añade un nuevo objeto con el slug y los textos deseados:
   ```typescript
   export const agentPages = [
     // ... landings existentes
     {
       slug: "venta-apartamentos-baruta",
       title: "Venta de Apartamentos en Baruta y Las Mercedes | Valery & Asociados",
       description: "Comercialización exclusiva de propiedades residenciales en el Municipio Baruta.",
       zone: "Municipio Baruta",
       heroHeadline: "Vende tu apartamento en Baruta al valor real de mercado",
       heroSubheadline: "Filtro de compradores calificados en divisas y asesoría jurídica local.",
     },
   ];
   ```
4. Al compilar con `npm run build`, `generateStaticParams()` creará la página estática `/venta-apartamentos-baruta` y la incluirá automáticamente en `sitemap.xml`.

---

## 🔍 Troubleshooting Común

### 1. `react-email` + Turbopack falla durante el build
- **Causa**: Next.js intenta empaquetar librerías internas de email pensadas para Node.
- **Solución implementada**: `next.config.ts` incluye la propiedad `serverExternalPackages`:
  ```typescript
  serverExternalPackages: ['react-email', '@react-email/render', '@react-email/components']
  ```

### 2. Las imágenes externas de Unsplash/Pexels no cargan
- **Causa**: Restricción de seguridad contra SSRF.
- **Solución implementada**: `next.config.ts` utiliza `remotePatterns` exactos sin wildcards inseguros:
  ```typescript
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com' },
    { protocol: 'https', hostname: 'images.pexels.com' },
  ]
  ```

### 3. El formulario no envía correos
- **Verificación 1**: Confirma que `RESEND_API_KEY` sea válida.
- **Verificación 2**: Si estás en modo de prueba con Resend, solo puedes enviar desde `onboarding@resend.dev` hacia el email registrado en tu cuenta de Resend.
- **Verificación 3**: Para enviar desde tu propio dominio, completa la verificación de DNS (SPF, DKIM, DMARC) en el panel de Resend.

### 4. Build falla en Vercel
- **Causa**: Alguna variable de entorno de `lib/env.ts` no fue ingresada en Vercel Dashboard.
- **Solución**: Ve a **Project Settings → Environment Variables** en Vercel y añade las 5 variables listadas arriba.

---

## 📋 Checklist Pre-Publicación (16 Ítems Obligatorios)

- [x] **1. Copy revisado y aprobado**: Sin clichés vacíos, con resultados específicos y beneficios claros.
- [x] **2. Imágenes configuradas**: URLs de Unsplash cargadas con `priority={true}` en Hero y lazy load en el resto.
- [x] **3. RESEND_API_KEY configurada**: Variable presente en `.env.local` y lista para producción.
- [ ] **4. Dominio Resend verificado**: Registros SPF/DKIM/DMARC listos para envíos a escala.
- [x] **5. remotePatterns con dominios exactos**: Prevención absoluta de SSRF en `next.config.ts`.
- [x] **6. generateStaticParams presente**: Implementado en `app/[slug]/page.tsx` para todas las rutas dinámicas.
- [x] **7. lib/env.ts validando con Zod**: Validación failfast antes de que cualquier módulo intente ejecutarse.
- [x] **8. serverExternalPackages configurado**: React Email y subpaquetes aislados en `next.config.ts`.
- [x] **9. SubmitButton renderizado DENTRO del form**: Cumplimiento del contrato de `useFormStatus`.
- [x] **10. useActionState de React 19**: Errores del servidor y cliente surfaceados al usuario de forma amigable.
- [x] **11. Enlaces de WhatsApp actualizados**: Número telefónico y mensajes predeterminados parametrizados en `constants.ts`.
- [x] **12. Analytics conectado**: Componente `<Analytics />` de `@vercel/analytics` montado en `app/layout.tsx`.
- [x] **13. Formulario probado**: Server Action con tipado estricto `ActionState`.
- [x] **14. OG Image generada en Edge**: `app/opengraph-image.tsx` dinámico de 1200×630.
- [x] **15. Performance y Core Web Vitals**: Fuentes de Google auto-hospedadas con `swap`, imágenes dimensionadas, cero CLS.
- [x] **16. Accesibilidad y WCAG 2.2**: `prefers-reduced-motion` integrado en `AnimatedSection` y acordeones con `aria-expanded` y `role="region"`.
