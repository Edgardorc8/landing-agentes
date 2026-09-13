// ============================================================================
// Archivo: lib/constants.ts
// Entorno: Servidor / Cliente (Constantes compartidas)
// ============================================================================

export const siteConfig = {
  name: "Valery & Asociados | Gestión Inmobiliaria High-End",
  tagline: "Venta estratégica de propiedades residenciales y comerciales en Venezuela",
  url: "https://valeryinmuebles.com",
  logo: "/logo.svg",
  whatsappNumber: "584120000000",
  whatsappDefaultMessage: "Hola, quiero solicitar una evaluación estratégica para vender mi propiedad.",
  email: "contacto@valeryinmuebles.com",
  phone: "+58 412 000 0000",
  address: "Av. Francisco de Miranda, Torre Cavendes, Chacao, Caracas, Venezuela",
};

// 1. HERO SECTION
export const heroContent = {
  badge: "Ventas Inmobiliarias Certificadas · Caracas & Ciudades Clave",
  headline: "Vende tu propiedad en Venezuela en menos de 90 días al valor real de mercado",
  subheadline:
    "Filtramos compradores con capital verificado en divisas, blindamos cada trámite legal ante registro y evitamos que tu patrimonio se devalúe por mala fijación de precio.",
  ctaPrimary: {
    label: "Conversar por WhatsApp con un Especialista",
    actionType: "whatsapp",
    href: "https://wa.me/584120000000?text=Hola,%20quiero%20vender%20mi%20propiedad%20al%20valor%20real%20de%20mercado.",
  },
  ctaSecondary: {
    label: "Solicitar Avalúo Comparativo Gratuito",
    actionType: "scroll",
    href: "#contacto",
  },
  microcopy: "Respuesta en menos de 15 minutos vía WhatsApp · Sin compromiso de exclusividad inicial",
  image: {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    alt: "Propiedad de lujo vendida en Caracas por Valery & Asociados",
  },
};

// 2. TRUST BAR
export const trustBarContent = {
  stats: [
    { value: "+$14.8M", label: "Volumen transaccionado cerrado" },
    { value: "68 días", label: "Tiempo promedio de venta efectiva" },
    { value: "96.4%", label: "Precio de cierre vs. avalúo inicial" },
    { value: "100%", label: "Operaciones con blindaje registral y legal" },
  ],
  accreditations: [
    "Cámara Inmobiliaria de Venezuela",
    "Colegio de Abogados del Dto. Capital",
    "Red Inmobiliaria Premium Nacional",
  ],
};

// 3. PROBLEM SECTION
export const problemContent = {
  badge: "El Riesgo de Vender Sin Estrategia",
  headline: "3 errores costosos que estancan la venta de un inmueble en Venezuela",
  pains: [
    {
      icon: "TrendingDown",
      title: "Publicar con sobreprecio y 'quemar' la propiedad",
      description:
        "Fijar el precio por 'lo que me costó construir' aleja a inversionistas reales. Tras 6 meses estancado en portales, el mercado asume que el inmueble tiene vicios ocultos y terminas rematándolo con 30% de descuento.",
    },
    {
      icon: "ShieldAlert",
      title: "Trámites paralizados por desactualización catastral",
      description:
        "Ficha catastral vencida, solvencias pendientes o sucesiones mal declaradas tumban el 42% de las negociaciones en fase de firma. Un comprador con efectivo no espera 4 meses por un documento.",
    },
    {
      icon: "Users",
      title: "Visitas de curiosos sin solvencia económica real",
      description:
        "Abrir tu hogar a extraños sin calificación financiera previa expone tu seguridad y te hace perder meses en 'ofertas de palabra' de compradores que luego no tienen fondos líquidos disponibles.",
    },
  ],
};

// 4. SOLUTION SECTION
export const solutionContent = {
  badge: "El Método Valery",
  headline: "Un protocolo estructurado para maximizar el retorno de tu patrimonio",
  subheadline:
    "No ponemos un cartel y esperamos sentados. Implementamos una estrategia activa de marketing de precisión, análisis comparativo de mercado (ACM) y due diligence legal preventivo.",
  image: {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Estrategia inmobiliaria profesional en Venezuela",
  },
  points: [
    {
      title: "ACM Científico basado en cierres notariales reales",
      description:
        "No nos basamos en precios de oferta inflados en internet, sino en el precio real por metro cuadrado pagado en las últimas escrituras de tu zona.",
    },
    {
      title: "Auditoría legal previa a la primera publicación",
      description:
        "Revisamos tradición legal de 20 años, gravámenes, ficha catastral y solvencias municipales para que el expediente esté 100% listo para firma.",
    },
    {
      title: "Filtro riguroso de solvencia (KYC Inmobiliario)",
      description:
        "Cada interesado debe certificar liquidez antes de agendar visita presencial. Solo recibes compradores con capacidad inmediata de pago en divisas.",
    },
  ],
};

// 5. BENEFITS SECTION
export const benefits = [
  {
    icon: "Clock4",
    title: "Venta en tiempo récord sin malbaratar",
    description:
      "La combinación de precio quirúrgico y producción audiovisual cinematográfica atrae múltiples ofertas en las primeras 4 semanas.",
    metric: "Promedio 68 días de cierre",
  },
  {
    icon: "FileCheck",
    title: "Tranquilidad jurídica absoluta",
    description:
      "Abogados especialistas en derecho inmobiliario y registral redactan las opciones de compra-venta y acompañan la firma en registro.",
    metric: "0 litigios o ventas revertidas",
  },
  {
    icon: "Camera",
    title: "Producción visual de nivel internacional",
    description:
      "Fotografía de arquitectura en hora azul, video en 4K con dron y recorrido virtual 360° para compradores en el exterior.",
    metric: "+340% interacciones calificadas",
  },
  {
    icon: "Globe2",
    title: "Alcance a la diáspora e inversionistas foráneos",
    description:
      "Campañas hipersegmentadas en España, Estados Unidos y Panamá para compradores que buscan oportunidades residenciales y comerciales.",
    metric: "35% compras cerradas desde el exterior",
  },
];

// 6. HOW IT WORKS
export const howItWorks = {
  badge: "Proceso Transparente",
  headline: "De la evaluación a la firma en registro en 3 simples etapas",
  steps: [
    {
      number: "01",
      title: "Diagnóstico y Avalúo Estratégico",
      description:
        "Escríbenos por WhatsApp. Evaluamos ubicación, metraje y estatus legal de tu inmueble en 24 horas para entregarte una estimación de precio con datos reales.",
    },
    {
      number: "02",
      title: "Producción y Lanzamiento Privado",
      description:
        "Realizamos sesión fotográfica profesional y presentamos la propiedad primero a nuestra base de datos de inversionistas pre-calificados antes de la campaña pública.",
    },
    {
      number: "03",
      title: "Negociación y Firma en Registro",
      description:
        "Gestionamos las ofertas, cerramos el acuerdo económico más conveniente y coordinamos el protocolo registral garantizando la liquidación segura de los fondos.",
    },
  ],
};

// 7. TESTIMONIALS
export const testimonials = [
  {
    id: "test-1",
    name: "Dr. Carlos Mendoza",
    role: "Propietario · Apto. 240 m² en Los Palos Grandes, Caracas",
    company: "Médico Cirujano",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    result: "Vendido en 45 días al 98% del precio solicitado",
    quote:
      "Tenía el apartamento con otra inmobiliaria durante 14 meses sin una sola oferta formal. Con Valery hicieron un video impecable, filtraron a dos compradores serios y en mes y medio estábamos firmando en registro.",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Elena de Cárdenas",
    role: "Propietaria · Casa en El Parral, Valencia",
    company: "Empresaria Textil (Residente en Miami)",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    result: "Venta gestionada 100% a distancia mediante poder consular",
    quote:
      "Vivir fuera de Venezuela me generaba pánico al pensar en vender mi casa familiar. El equipo se encargó de la actualización catastral, las llaves y las visitas. Solo firmé mediante poder y los fondos se recibieron sin contratiempos.",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Ing. Roberto Villegas",
    role: "Inversionista · Local Comercial en Las Mercedes, Caracas",
    company: "Grupo Gastronómico",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    result: "Cierre en $320,000 con liquidación directa verificada",
    quote:
      "Su filtro de solvencia es real. No me hicieron perder el tiempo con intermediarios de pasillo. Me presentaron un comprador institucional directo con el dinero listo.",
    rating: 5,
  },
];

// 8. PRICING / PLANES DE SERVICIO
export const pricingContent = {
  badge: "Honorarios Basados en Éxito",
  headline: "Solo cobramos si vendemos. Sin costos ocultos por adelantado.",
  subheadline:
    "Nuestros honorarios estándar corresponden al 5% sobre el precio de venta final acordado, alineando nuestro incentivo con el valor más alto posible para ti.",
  plans: [
    {
      name: "Gestión Estándar",
      price: "5%",
      period: "al momento de la firma en registro",
      highlighted: false,
      description: "Ideal para propiedades listas para habitar con documentación al día.",
      features: [
        "Avalúo comparativo de mercado (ACM)",
        "Fotografía profesional HDR",
        "Publicación en portales y red de corredores",
        "Filtro básico de compradores",
        "Redacción de opción de compra-venta",
      ],
      cta: {
        label: "Consultar por WhatsApp",
        href: "https://wa.me/584120000000?text=Hola,%20me%20interesa%20la%20Gestión%20Estándar%20del%205%25.",
      },
    },
    {
      name: "Plan Exclusivo High-End",
      price: "5%",
      period: "con exclusividad de comercialización 90 días",
      highlighted: true,
      badge: "Recomendado para Inmuebles > $100K",
      description: "Despliegue integral de marketing, video 4K con dron y blindaje legal prioritario.",
      features: [
        "Todo lo del Plan Estándar",
        "Video cinematográfico 4K + Dron + Tour Virtual 360°",
        "Pauta digital segmentada (Caracas, Miami, Madrid)",
        "Due diligence registral y gestión de solvencias municipales",
        "Acceso preferente a red de inversionistas privados VIP",
        "Atención personalizada directa por socio principal",
      ],
      cta: {
        label: "Solicitar Plan Exclusivo vía WhatsApp",
        href: "https://wa.me/584120000000?text=Hola,%20deseo%20activar%20el%20Plan%20Exclusivo%20High-End%20para%20mi%20inmueble.",
      },
    },
  ],
};

// 9. GUARANTEE
export const guarantee = {
  badge: "Compromiso Cero Riesgo",
  headline: "Garantía de Cero Costo si no logramos una oferta formal en 90 días",
  description:
    "Si en 90 días de comercialización exclusiva no presentamos al menos una oferta formal alineada al valor de mercado acordado, puedes rescindir el acuerdo sin pagar un solo centavo por la sesión fotográfica, videos ni pauta publicitaria invertida.",
  duration: "90 Días de Garantía de Desempeño",
  icon: "ShieldCheck",
};

// 10. FAQ
export const faqs = [
  {
    id: "faq-1",
    question: "¿Cómo determinan el precio de venta sugerido para mi propiedad?",
    answer:
      "Utilizamos un Análisis Comparativo de Mercado (ACM) riguroso. No nos guiamos por los precios publicados en portales (que suelen estar sobrevalorados en un 20-30%), sino por los valores de cierre efectivo y escrituración reciente en tu mismo edificio, urbanización o sector.",
  },
  {
    id: "faq-2",
    question: "¿Qué pasa si mis documentos legales o ficha catastral no están al día?",
    answer:
      "Contamos con un equipo de gestoría y abogados inmobiliarios aliados que auditan tu expediente en la primera semana. Tramitamos actualizaciones catastrales, cédulas catastrales, solvencias municipales y declaraciones sucesorales para que cuando llegue el comprador, el expediente esté impecable.",
  },
  {
    id: "faq-3",
    question: "Vivo en el exterior, ¿puedo vender mi propiedad sin viajar a Venezuela?",
    answer:
      "Absolutamente. Más del 35% de nuestras ventas se realizan con propietarios residentes en Estados Unidos, España, Colombia u otros países. Te asesoramos en la redacción exacta del Poder Notariado o Consular y coordinamos todo de manera remota con reportes semanales por videollamada.",
  },
  {
    id: "faq-4",
    question: "¿Cómo garantizan la seguridad de mi inmueble durante las visitas?",
    answer:
      "Nunca publicamos la dirección exacta en portales abiertos. Además, cada interesado debe presentar identificación oficial y demostrar capacidad de compra antes de coordinar cualquier visita. Un asesor del equipo siempre acompaña el recorrido.",
  },
  {
    id: "faq-5",
    question: "¿Cobran algo por adelantado para iniciar la promoción?",
    answer:
      "No cobramos anticipos. Toda la inversión en fotografía profesional, video con dron, levantamiento de planos y pauta publicitaria en redes corre por nuestra cuenta. Solo percibimos nuestros honorarios del 5% el día que firmas el documento definitivo en el Registro Inmobiliario.",
  },
];

// 11. FINAL CTA
export const finalCTA = {
  badge: "Cupos de Comercialización Limitados por Mes",
  headline: "¿Listo para conocer el valor real de mercado de tu propiedad?",
  subheadline:
    "Gestionamos un máximo de 10 propiedades exclusivas por mes para garantizar atención directa y cierres rápidos. Inicia una conversación por WhatsApp o déjanos tus datos para recibir un análisis preliminar sin costo.",
  formTitle: "Solicitar Diagnóstico y Avalúo Gratuito",
  whatsappButtonText: "Conversar de inmediato por WhatsApp",
  whatsappHref: "https://wa.me/584120000000?text=Hola,%20quiero%20agendar%20un%20diagnóstico%20gratuito%20de%20mi%20propiedad.",
};

// 12. FOOTER CONTENT
export const footerContent = {
  legalName: "Valery & Asociados Servicios Inmobiliarios C.A.",
  rif: "J-50123456-7",
  description:
    "Firma especializada en comercialización estratégica de inmuebles de alto valor en Caracas, Valencia y Lechería. Enfoque analítico, seguridad registral y máxima confidencialidad.",
  links: [
    { label: "Servicios", href: "#servicios" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Cómo Funciona", href: "#como-funciona" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Planes", href: "#planes" },
    { label: "Preguntas Frecuentes", href: "#faq" },
  ],
  social: [
    { name: "WhatsApp", href: "https://wa.me/584120000000" },
    { name: "Instagram", href: "https://instagram.com/valeryinmuebles" },
    { name: "LinkedIn", href: "https://linkedin.com/company/valeryinmuebles" },
  ],
  legal: [
    { label: "Aviso Legal y Privacidad", href: "/legal/privacidad" },
    { label: "Términos de Intermediación", href: "/legal/terminos" },
  ],
  contact: {
    phone: "+58 412 000 0000",
    email: "contacto@valeryinmuebles.com",
    address: "Torre Cavendes, Piso 8, Av. Francisco de Miranda, Chacao, Caracas",
  },
};

// Rutas dinámicas secundarias ([slug])
export const agentPages = [
  {
    slug: "venta-propiedades-caracas",
    title: "Venta de Apartamentos y Casas en Caracas | Valery & Asociados",
    description: "Vende tu propiedad en Chacao, Baruta o El Hatillo con avalúo real y compradores calificados en divisas.",
    zone: "Caracas (Este y Sureste)",
    heroHeadline: "Vende tu propiedad en Caracas en tiempo récord y con compradores calificados",
    heroSubheadline: "Especialistas en Chacao, Baruta, El Hatillo y Sucre. Gestión legal completa y clientes en divisas.",
  },
  {
    slug: "venta-inmuebles-lecheria",
    title: "Venta de Casas de Playa y Canales en Lechería | Valery & Asociados",
    description: "Comercialización exclusiva de propiedades náuticas y residenciales en Anzoátegui.",
    zone: "Lechería & El Morro",
    heroHeadline: "Comercialización exclusiva de inmuebles en Lechería y Canales del Morro",
    heroSubheadline: "Máxima exposición internacional para villas con muelle, apartamentos con vista y locales comerciales.",
  },
];
