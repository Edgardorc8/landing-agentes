// ============================================================================
// Archivo: emails/ContactNotification.tsx
// Entorno: React Email Template (Server)
// Dependencias: @react-email/components
// ============================================================================

import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Preview,
} from "@react-email/components";

interface ContactNotificationProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export default function ContactNotification({
  name,
  email,
  phone,
  message,
}: ContactNotificationProps) {
  return (
    <Html lang="es">
      <Head />
      <Preview>Nuevo prospecto interesado en vender propiedad: {name}</Preview>
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          <Section style={headerStyle}>
            <Heading style={headingStyle}>
              Nuevo Contacto de Captación Inmobiliaria
            </Heading>
            <Text style={subheadingStyle}>
              Valery & Asociados · Solicitud de Avalúo / Venta
            </Text>
          </Section>

          <Section style={contentStyle}>
            <Text style={itemLabelStyle}>Nombre del propietario / interesado:</Text>
            <Text style={itemValueStyle}>{name}</Text>

            <Hr style={hrStyle} />

            <Text style={itemLabelStyle}>Correo Electrónico:</Text>
            <Text style={itemValueStyle}>
              <a href={`mailto:${email}`} style={linkStyle}>
                {email}
              </a>
            </Text>

            {phone && (
              <>
                <Hr style={hrStyle} />
                <Text style={itemLabelStyle}>Teléfono / WhatsApp:</Text>
                <Text style={itemValueStyle}>
                  <a href={`https://wa.me/${phone.replace(/[^0-9]/g, "")}`} style={linkStyle}>
                    {phone}
                  </a>
                </Text>
              </>
            )}

            <Hr style={hrStyle} />

            <Text style={itemLabelStyle}>Detalles del inmueble / Mensaje:</Text>
            <Text style={messageBoxStyle}>{message}</Text>
          </Section>

          <Section style={footerStyle}>
            <Text style={footerTextStyle}>
              Este correo fue enviado automáticamente desde el formulario web de Valery & Asociados.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const mainStyle = {
  backgroundColor: "#f4f4f5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  padding: "24px 0",
};

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "32px",
  borderRadius: "12px",
  maxWidth: "580px",
  border: "1px solid #e4e4e7",
};

const headerStyle = {
  borderBottom: "1px solid #e4e4e7",
  paddingBottom: "16px",
  marginBottom: "24px",
};

const headingStyle = {
  color: "#18181b",
  fontSize: "20px",
  fontWeight: "700",
  lineHeight: "1.3",
  margin: "0 0 6px",
};

const subheadingStyle = {
  color: "#71717a",
  fontSize: "13px",
  margin: 0,
};

const contentStyle = {
  padding: "8px 0",
};

const itemLabelStyle = {
  color: "#71717a",
  fontSize: "12px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  fontWeight: "600",
  margin: "0 0 4px",
};

const itemValueStyle = {
  color: "#18181b",
  fontSize: "15px",
  fontWeight: "500",
  margin: "0 0 12px",
};

const linkStyle = {
  color: "#047857",
  textDecoration: "underline",
};

const messageBoxStyle = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  padding: "16px",
  color: "#334155",
  fontSize: "14px",
  lineHeight: "1.5",
  whiteSpace: "pre-wrap" as const,
  margin: "4px 0 16px",
};

const hrStyle = {
  borderColor: "#f4f4f5",
  margin: "16px 0",
};

const footerStyle = {
  borderTop: "1px solid #f4f4f5",
  paddingTop: "16px",
  marginTop: "24px",
};

const footerTextStyle = {
  color: "#a1a1aa",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: 0,
};
