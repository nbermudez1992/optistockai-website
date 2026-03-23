import { motion } from "motion/react";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { SEO } from "./SEO";
import { APP_SIGNUP_URL } from "../config";
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Zap,
  Crown,
  BarChart3,
  MessageSquareText,
  ScanLine,
  Users,
  Shield,
  Headphones
} from "lucide-react";

export function Pricing() {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "OptiStockAi Platform",
    "description": "Plataforma SaaS de planeación de demanda y FP&A con IA para PYMEs en México y Colombia. Integración nativa con Alegra ERP.",
    "brand": {
      "@type": "Brand",
      "name": "OptiStockAi"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Plan Básico",
        "price": "50",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "50",
          "priceCurrency": "USD",
          "billingDuration": "P1M"
        },
        "description": "Dashboard completo, hasta 300 SKUs, pronóstico de ventas con ML, recomendaciones de reabastecimiento y transferencias, equipo ilimitado."
      },
      {
        "@type": "Offer",
        "name": "Plan Pro",
        "price": "100",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "100",
          "priceCurrency": "USD",
          "billingDuration": "P1M"
        },
        "description": "Todo del Plan Básico con SKUs ilimitados, asistente financiero IA, carga contable inteligente y soporte prioritario."
      }
    ]
  };

  const pricingFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Puedo cambiar de plan en cualquier momento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, puedes escalar de Básico a Pro inmediatamente desde tu panel de facturación gestionado por Stripe. El cambio se prorratea automáticamente."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué sucede al terminar la prueba gratuita?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tu acceso se pausa hasta que selections un plan. No se cobra automáticamente ninguna tarjeta. Tus datos se conservan durante 30 días."
        }
      },
      {
        "@type": "Question",
        "name": "¿Necesito tener Alegra ERP para usar OptiStockAi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Actualmente, la integración principal de datos es con Alegra ERP. Estamos trabajando para soportar otros ERPs populares en LatAm próximamente."
        }
      },
      {
        "@type": "Question",
        "name": "¿Mis datos están seguros?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutamente. Usamos Row Level Security (RLS) a nivel de PostgreSQL para aislar completamente los datos de cada organización. Toda la comunicación se cifra con TLS y la autenticación es gestionada por Supabase GoTrue."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuántos usuarios de equipo puedo agregar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ambos planes incluyen miembros de equipo ilimitados. Los Admins pueden invitar y asignar roles (Admin, Manager, Viewer) desde la configuración de la organización."
        }
      }
    ]
  };

  const plans = [
    {
      name: "Plan Básico",
      price: "$50",
      period: "/mes USD",
      icon: <Zap className="h-6 w-6" />,
      description: "Ideal para PYMEs que inician su transformación digital con IA.",
      highlight: false,
      features: [
        { text: "Dashboard de Plan de Demanda completo", included: true },
        { text: "Hasta 300 SKUs activos", included: true },
        { text: "Pronóstico de ventas a 12 meses (ML)", included: true },
        { text: "Recomendaciones de reabastecimiento IA", included: true },
        { text: "Transferencias entre sucursales", included: true },
        { text: "Reporte de ventas por producto y bodega", included: true },
        { text: "KPIs en tiempo real (ingresos, stock, rotación)", included: true },
        { text: "Integración nativa con Alegra ERP", included: true },
        { text: "Miembros de equipo ilimitados", included: true },
        { text: "Roles: Admin, Manager, Viewer", included: true },
        { text: "Asistente Financiero IA (Chat)", included: false },
        { text: "Carga Contable Inteligente", included: false },
        { text: "Soporte prioritario", included: false },
      ]
    },
    {
      name: "Plan Pro",
      price: "$100",
      period: "/mes USD",
      icon: <Crown className="h-6 w-6" />,
      description: "Para empresas en crecimiento que requieren el máximo poder de IA.",
      highlight: true,
      features: [
        { text: "Todo del Plan Básico incluido", included: true },
        { text: "SKUs ilimitados", included: true },
        { text: "Pronóstico de ventas a 12 meses (ML)", included: true },
        { text: "Recomendaciones de reabastecimiento IA", included: true },
        { text: "Transferencias entre sucursales", included: true },
        { text: "Resultados financieros y P&L completo", included: true },
        { text: "Asistente Financiero IA (Chat con LLM)", included: true },
        { text: "Carga Contable Inteligente (OCR + IA)", included: true },
        { text: "Análisis de clientes top (RFM)", included: true },
        { text: "Integración nativa con Alegra ERP", included: true },
        { text: "Miembros de equipo ilimitados", included: true },
        { text: "Roles: Admin, Manager, Viewer", included: true },
        { text: "Soporte prioritario dedicado", included: true },
      ]
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      period: "",
      icon: <Sparkles className="h-6 w-6" />,
      description: "Soluciones a medida para cadenas de retail y distribuidores mayoristas.",
      highlight: false,
      features: [
        { text: "Todo del Plan Pro incluido", included: true },
        { text: "Volúmenes de SKU personalizados", included: true },
        { text: "Integraciones ERP adicionales", included: true },
        { text: "Modelos de ML personalizados", included: true },
        { text: "API dedicada para tu stack", included: true },
        { text: "Onboarding y capacitación personalizada", included: true },
        { text: "SLA garantizado", included: true },
        { text: "Account Manager dedicado", included: true },
      ]
    }
  ];

  return (
    <div className="bg-white pb-24">
      <SEO
        title="Precios | Planes Básico, Pro y Enterprise"
        description="Conoce los planes de OptiStockAi: desde $50 USD/mes para PYMEs. Incluye pronóstico de ventas con ML, recomendaciones de reabastecimiento IA, integración Alegra ERP y equipo ilimitado."
        keywords="precios optistockai, plan basico, plan pro, software inventario precio, planeacion demanda costo, ia para pymes precio, alegra erp integracion"
        canonical="/pricing"
        schemaMarkup={pricingSchema}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(pricingFAQSchema)}
        </script>
      </Helmet>

      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Planes diseñados para <span className="text-blue-600">cada etapa de tu PYME</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Sin contratos anuales. Sin costos ocultos. Cancela cuando quieras. Todos los planes incluyen integración completa con Alegra ERP y equipo ilimitado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-blue-600 text-white shadow-2xl shadow-blue-600/30 ring-4 ring-blue-600/20 scale-[1.02]"
                  : "bg-white border border-slate-200 shadow-lg"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${plan.highlight ? "bg-blue-500" : "bg-blue-50"}`}>
                  <div className={plan.highlight ? "text-white" : "text-blue-600"}>
                    {plan.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
              </div>

              {plan.highlight && (
                <div className="inline-flex self-start items-center gap-1 px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-semibold mb-4">
                  <Sparkles className="h-3 w-3" /> Más Popular
                </div>
              )}

              <div className="mb-4">
                <span className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-1 ${plan.highlight ? "text-blue-200" : "text-slate-500"}`}>
                  {plan.period}
                </span>
              </div>

              <p className={`text-sm mb-8 ${plan.highlight ? "text-blue-100" : "text-slate-600"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    <Check className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                      feature.included
                        ? plan.highlight ? "text-blue-200" : "text-blue-600"
                        : "text-slate-300"
                    }`} />
                    <span className={
                      feature.included
                        ? plan.highlight ? "text-white" : "text-slate-700"
                        : "text-slate-400 line-through"
                    }>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.name === "Enterprise" ? (
                <Link
                  to="/contact"
                  className={`w-full text-center py-3.5 rounded-xl font-semibold transition-all ${
                    "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  Contactar Ventas
                </Link>
              ) : (
                <a
                  href={APP_SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-3.5 rounded-xl font-semibold transition-all ${
                    plan.highlight
                      ? "bg-white text-blue-600 hover:bg-slate-50 shadow-lg"
                      : "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                  }`}
                >
                  Comenzar Ahora <ArrowRight className="inline h-4 w-4 ml-1" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          Comparación detallada de planes
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-4 px-4 font-semibold text-slate-900">Característica</th>
                <th className="text-center py-4 px-4 font-semibold text-slate-900">Básico</th>
                <th className="text-center py-4 px-4 font-semibold text-blue-600">Pro</th>
                <th className="text-center py-4 px-4 font-semibold text-slate-900">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Límite de SKUs", "300", "Ilimitado", "Personalizado"],
                ["Dashboard de Plan de Demanda", "✅", "✅", "✅"],
                ["Pronóstico de ventas (12 meses ML)", "✅", "✅", "✅"],
                ["Recomendaciones de reabastecimiento", "✅", "✅", "✅"],
                ["Transferencias entre sucursales", "✅", "✅", "✅"],
                ["Reporte de ventas", "✅", "✅", "✅"],
                ["KPIs en tiempo real", "✅", "✅", "✅"],
                ["Integración Alegra ERP", "✅", "✅", "✅"],
                ["Equipo ilimitado", "✅", "✅", "✅"],
                ["Resultados financieros", "—", "✅", "✅"],
                ["Asistente Financiero IA (Chat)", "—", "✅", "✅"],
                ["Carga Contable Inteligente", "—", "✅", "✅"],
                ["Análisis de clientes top", "—", "✅", "✅"],
                ["Soporte prioritario", "—", "✅", "✅"],
                ["Modelos ML personalizados", "—", "—", "✅"],
                ["API dedicada", "—", "—", "✅"],
                ["SLA garantizado", "—", "—", "✅"],
              ].map(([feature, basic, pro, enterprise], i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 text-slate-700 font-medium">{feature}</td>
                  <td className="py-3 px-4 text-center text-slate-600">{basic}</td>
                  <td className="py-3 px-4 text-center text-slate-900 font-medium bg-blue-50/50">{pro}</td>
                  <td className="py-3 px-4 text-center text-slate-600">{enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Preguntas Frecuentes</h2>
        <div className="space-y-6">
          {[
            {
              q: "¿Puedo cambiar de plan en cualquier momento?",
              a: "Sí, puedes escalar de Básico a Pro inmediatamente desde tu panel de facturación gestionado por Stripe. El cambio se prorratea automáticamente."
            },
            {
              q: "¿Qué sucede al terminar la prueba gratuita?",
              a: "Tu acceso se pausa hasta que selecciones un plan. No se cobra automáticamente ninguna tarjeta. Tus datos se conservan durante 30 días."
            },
            {
              q: "¿Necesito tener Alegra ERP para usar OptiStockAi?",
              a: "Actualmente, la integración principal de datos es con Alegra ERP. Estamos trabajando para soportar otros ERPs populares en LatAm próximamente."
            },
            {
              q: "¿Mis datos están seguros?",
              a: "Absolutamente. Usamos Row Level Security (RLS) a nivel de PostgreSQL para aislar completamente los datos de cada organización. Toda la comunicación se cifra con TLS y la autenticación es gestionada por Supabase GoTrue."
            },
            {
              q: "¿Cuántos usuarios de equipo puedo agregar?",
              a: "Ambos planes incluyen miembros de equipo ilimitados. Los Admins pueden invitar y asignar roles (Admin, Manager, Viewer) desde la configuración de la organización."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
