import { motion } from "motion/react";
import { Link } from "react-router";
import { SEO } from "./SEO";
import { APP_SIGNUP_URL } from "../config";
import { 
  ArrowRight, 
  LineChart, 
  Zap, 
  Database, 
  Bot, 
  CheckCircle2,
  TrendingUp,
  PackageCheck,
  MessageSquareText,
  ScanLine,
  FileSpreadsheet,
  Users,
  BarChart3,
  Shield,
  Sparkles,
  Globe2,
  Clock
} from "lucide-react";

export function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "OptiStockAi Platform",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, SaaS",
    "description": "Multi-tenant AI-powered demand planning and FP&A SaaS platform for SMEs in Mexico and Colombia. Features include: 12-month sales forecasting with ML, AI-driven restock recommendations, inter-warehouse transfer optimization, AI financial chat assistant powered by LLMs, document upload with OCR extraction, Alegra ERP native API integration, and Stripe-based subscription billing.",
    "offers": [
      {
        "@type": "Offer",
        "name": "Basic",
        "price": "50",
        "priceCurrency": "USD",
        "description": "Dashboard, 300 SKU limit, sales forecasting, restock & transfer recommendations."
      },
      {
        "@type": "Offer",
        "name": "Pro",
        "price": "100",
        "priceCurrency": "USD",
        "description": "Unlimited SKUs, all Basic features plus priority support and AI financial analyst."
      }
    ],
    "featureList": [
      "12-month AI-powered sales forecasting",
      "Automated restock recommendations with lead-time optimization",
      "Inter-warehouse transfer optimization",
      "AI Financial Chat Assistant (LLM-powered)",
      "Financial Statements & P&L Analysis",
      "Document Upload with automated data extraction",
      "Native Alegra ERP API integration",
      "Real-time KPI dashboard (revenue, stock levels, sales velocity, forecast accuracy)",
      "Multi-tenant architecture with RLS data isolation",
      "Role-based access control (Admin, Manager, Viewer)",
      "Stripe subscription billing"
    ]
  };

  // App modules directly from the OptistockAI sidebar
  const appModules = [
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
      title: "Panel de Plan de Demanda",
      desc: "Dashboard central con KPIs en tiempo real: ingresos totales, valor del inventario, rotación de stock y precisión del pronóstico. Visualiza predicciones de ventas a 12 meses filtradas por producto, color, talla y bodega."
    },
    {
      icon: <LineChart className="h-6 w-6 text-blue-600" />,
      title: "Pronóstico de Ventas con Machine Learning",
      desc: "Modelos de series temporales (AutoGluon) que analizan tu historial de ventas en Alegra para generar predicciones semanales a 12 meses con más del 90% de precisión. Filtra por SKU, producto, bodega o categoría."
    },
    {
      icon: <PackageCheck className="h-6 w-6 text-blue-600" />,
      title: "Recomendaciones de Reabastecimiento",
      desc: "Agentes de IA calculan la cantidad óptima de reorden para cada SKU, considerando demanda proyectada a 4, 8 y 12 semanas, Lead Time de proveedores, stock actual y semanas de inventario restante."
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Transferencias entre Sucursales",
      desc: "Algoritmos de optimización detectan desbalances de inventario entre tus bodegas y sugieren transferencias automáticas para balancear el stock según la demanda regional proyectada."
    },
    {
      icon: <MessageSquareText className="h-6 w-6 text-blue-600" />,
      title: "Asistente Financiero con IA (Chat)",
      desc: "Consulta tus métricas financieras en lenguaje natural. Pregunta sobre gastos, flujo de caja, márgenes brutos y proyecciones de ventas. Respuestas generadas por LLMs con contexto de tu negocio."
    },
    {
      icon: <ScanLine className="h-6 w-6 text-blue-600" />,
      title: "Carga Contable Inteligente",
      desc: "Sube facturas, recibos de nómina, cuentas de cobro y recibos de caja. La IA extrae automáticamente fecha, descripción, categoría, subtotal, impuesto, proveedor y NIT para alimentar tu análisis financiero."
    },
  ];

  const stats = [
    { value: "+94.2%", label: "Precisión del Pronóstico IA", icon: <TrendingUp className="h-5 w-5" /> },
    { value: "12 meses", label: "Horizonte de Predicción ML", icon: <Clock className="h-5 w-5" /> },
    { value: "24/7", label: "Agentes Autónomos Activos", icon: <Bot className="h-5 w-5" /> },
    { value: "$50/mes", label: "Desde — Plan Básico", icon: <Sparkles className="h-5 w-5" /> },
  ];

  return (
    <div className="flex flex-col">
      <SEO 
        title="Software de Planeación de Demanda y FP&A con IA para PYMEs"
        description="OptiStockAi es el software líder en México y Colombia que usa Inteligencia Artificial para automatizar tu control de inventario, pronóstico de ventas con ML, agentes de IA para reabastecimiento y análisis financiero automatizado. Integración nativa con Alegra ERP."
        keywords="software planeacion demanda, ia para pymes, inteligencia artificial inventarios, integracion alegra erp, fp&a software, OptiStockAi, agentes de IA logistica, pronóstico ventas machine learning, asistente financiero IA"
        canonical="/"
        schemaMarkup={softwareSchema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-white opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                Ahora con Asistente Financiero IA y Carga Contable Inteligente
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Convierte tu inventario en <span className="text-blue-600">inteligencia comercial.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                <strong>OptiStockAi</strong> es la plataforma definitiva de planeación de demanda y FP&A construida para PYMEs en México y Colombia. Conecta tu cuenta de Alegra, <em>agentifica</em> tus flujos de trabajo con IA, y nunca vuelvas a perder una oportunidad de venta por quiebre de stock. Incluye pronóstico de ventas a 12 meses, reabastecimiento inteligente, chat financiero y carga contable automatizada. Especializado para tiendas retail en Bogotá, Medellín, CDMX y Guadalajara.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={APP_SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-signup"
                  className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
                >
                  Comenzar Prueba Gratuita
                  <ArrowRight className="h-5 w-5" />
                </a>
                <Link 
                  to="/product"
                  className="inline-flex justify-center items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold text-lg transition-all"
                >
                  Explorar la Plataforma IA
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform translate-x-4 translate-y-4 filter blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMGRhdGElMjBhbmFseXRpY3MlMjBibHVlfGVufDF8fHx8MTc3Mzk4NTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Dashboard de OptiStockAi mostrando pronóstico de ventas con IA, KPIs de inventario y recomendaciones de reabastecimiento" 
                className="relative rounded-3xl shadow-2xl border border-slate-100 object-cover w-full h-[500px]"
              />
              
              {/* Floating elements */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Precisión del Pronóstico IA</p>
                    <p className="text-xl font-bold text-slate-900">+94.2%</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block" style={{ animation: 'bounce 4s infinite' }}>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <MessageSquareText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Chat Financiero IA</p>
                    <p className="text-sm font-bold text-slate-900">Activo 24/7</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 text-white"
              >
                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-slate-400 text-xs">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-xs mt-4">
            Recomendado para tiendas retail en Bogotá, Medellín, Cali, Ciudad de México, Guadalajara y Monterrey
          </p>
        </div>
      </section>

      {/* Cansado de Alegra Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden" id="cansado-de-alegra">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Cansado de Alegra? Hay una alternativa inteligente
            </h2>
            <p className="text-lg text-slate-300">
              Alegra es un excelente sistema contable. Pero para planificación de demanda, forecasting y optimización de inventario, necesita algo más inteligente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                problem: "Alegra no fue diseñado para esto",
                desc: "Es un sistema de facturación y contabilidad. La planificación de demanda requiere motores de ML, análisis de series temporales y agentes autónomos que Alegra simplemente no tiene."
              },
              {
                problem: "Tus decisiones las tomas con reportes del pasado",
                desc: "Alegra te muestra qué vendiste ayer. OptiStockAI te dice qué vas a vender mañana — conectado directo a tu cuenta de Alegra."
              },
              {
                problem: "Inventario parado = capital muerto",
                desc: "Sin forecast preciso, terminas pidiendo de más o de menos. El resultado: ventas perdidas o efectivo atrapado en producto que no se mueve."
              },
              {
                problem: "Soporte lento, cambios difíciles",
                desc: "Si necesitas una funcionalidad extra en Alegra,dependes del roadmap del producto. OptiStockAI evoluciona contigo."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{item.problem}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <a
              href={APP_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-blue-600/30"
            >
              Prueba OptiStockAI conectado a tu Alegra — Gratis
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="text-slate-500 text-sm mt-3">Sin cambiar tu sistema. Sin consultoría. Sin compromiso.</p>
          </div>
        </div>
      </section>

      {/* App Modules Section — directly from the app */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              7 Módulos de IA, Una Sola Plataforma
            </h2>
            <p className="text-lg text-slate-600">
              Cada módulo de OptiStockAi está diseñado para reemplazar horas de trabajo manual con inteligencia artificial que opera 24/7 sobre tus datos reales de Alegra ERP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appModules.map((module, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all group"
              >
                <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{module.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {module.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Alegra Integration Section */}
      <section className="py-24 bg-white overflow-hidden" id="integracion-alegra">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-20"></div>
                <div className="relative bg-slate-900 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                      <Database className="h-8 w-8 text-blue-400" />
                      <span className="text-white font-semibold text-xl">Alegra ERP API</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-slate-400 text-sm">Sincronizando en Vivo</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {["Facturas e historial de ventas", "Niveles de inventario por bodega", "Catálogo de productos y SKUs"].map((item, i) => (
                      <div key={i} className="bg-slate-800 rounded-xl p-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <CheckCircle2 className="h-5 w-5 text-blue-400" />
                        </div>
                        <span className="text-slate-300 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Overlay Agent Card */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block z-20">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Bot className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm mb-1">Alerta de Agente IA</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Se proyecta que el SKU "Widget-A" se agotará en 14 días según el historial de Alegra. Sugerimos ordenar 500 unidades considerando Lead Time de 7 días.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Agentes de IA conectados a tu cuenta de Alegra ERP.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                No te limites a mirar reportes pasados. <strong>OptiStockAi</strong> se integra mediante API segura a tu cuenta de Alegra y despliega agentes autónomos para vigilar tus niveles de stock, velocidad de ventas y flujos financieros 24/7. Todo con arquitectura multi-tenant y RLS para garantizar aislamiento total de datos. Empresas en Bogotá, Medellín, Cali, CDMX, Guadalajara y Monterrey ya usan OptiStockAi para optimizar su inventario.
              </p>
              
              <ul className="space-y-5 mb-8">
                {[
                  "Integración certificada y segura mediante API con Alegra ERP",
                  "Pronóstico de ventas a 12 meses con AutoGluon (series temporales)",
                  "Recomendaciones de reorden con demanda a 4, 8 y 12 semanas",
                  "Asistente financiero IA: pregunta sobre gastos, márgenes y flujo de caja",
                  "Carga contable automática: sube facturas y la IA extrae los datos",
                  "Roles de acceso: Admin, Manager y Viewer con permisos granulares"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/product" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                Descubre nuestra tecnología <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust / Architecture Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Arquitectura de Nivel Empresarial para PYMEs
            </h2>
            <p className="text-lg text-slate-600">
              Tu información contable está resguardada con las mismas tecnologías que usan las empresas Fortune 500.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "Row Level Security (RLS)",
                desc: "Aislamiento total de datos por organización directamente a nivel de PostgreSQL. Ningún tenant puede acceder a datos de otro."
              },
              {
                icon: <Globe2 className="h-8 w-8 text-blue-600" />,
                title: "Supabase + Vercel",
                desc: "Backend serverless con Edge Functions en Deno, base de datos PostgreSQL administrada, autenticación GoTrue y hosting en CDN global."
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Multi-Tenant + Roles",
                desc: "Organizaciones con equipos ilimitados. Roles de Admin, Manager y Viewer con permisos diferenciados para gestionar acceso."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMHNvZnR3YXJlfGVufDF8fHx8MTc3Mzk4NTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para llevar la planeación de tu PYME al futuro de la IA?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Únete a las empresas innovadoras en México y Colombia que reducen costos y aumentan ventas con pronóstico ML, agentes de IA y análisis financiero automatizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={APP_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-signup"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Inicia tu prueba gratuita
            </a>
            <Link 
              to="/contact"
              className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Hablar con un Especialista
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
