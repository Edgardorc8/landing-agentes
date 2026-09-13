// ============================================================================
// Archivo: app/opengraph-image.tsx
// Entorno: Edge Runtime (ImageResponse desde 'next/og')
// Dependencias: next/og
// ============================================================================

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          backgroundColor: "#0d1311",
          color: "#ffffff",
          padding: "64px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow sutil esmeralda */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            backgroundColor: "#064e3b",
            opacity: 0.35,
            filter: "blur(90px)",
          }}
        />

        {/* Cabecera / Marca */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#059669",
              color: "#ffffff",
              fontSize: "24px",
              fontWeight: 800,
            }}
          >
            V
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.5px" }}>
              Valery & Asociados
            </span>
            <span style={{ fontSize: "14px", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "1px" }}>
              Gestión Inmobiliaria High-End · Venezuela
            </span>
          </div>
        </div>

        {/* Headline Principal */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "950px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
              padding: "6px 16px",
              borderRadius: "999px",
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              color: "#6ee7b7",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            VENTA ESTRATÉGICA · CARACAS & CIUDADES CLAVE
          </div>

          <h1
            style={{
              fontSize: "52px",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              margin: 0,
              color: "#ffffff",
            }}
          >
            Vende tu propiedad en Venezuela en menos de 90 días al valor real.
          </h1>

          <p style={{ fontSize: "22px", color: "#9ca3af", lineHeight: 1.4, margin: 0 }}>
            Compradores calificados en divisas y blindaje legal integral ante registro.
          </p>
        </div>

        {/* Barra de Estadísticas Inferior */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #27272a",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 800, color: "#34d399" }}>
                +$14.8M
              </span>
              <span style={{ fontSize: "13px", color: "#71717a" }}>Volumen Cerrado</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 800, color: "#34d399" }}>
                68 Días
              </span>
              <span style={{ fontSize: "13px", color: "#71717a" }}>Promedio de Venta</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 800, color: "#34d399" }}>
                100%
              </span>
              <span style={{ fontSize: "13px", color: "#71717a" }}>Blindaje Registral</span>
            </div>
          </div>

          <div style={{ fontSize: "16px", fontWeight: 600, color: "#e4e4e7" }}>
            valeryinmuebles.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
