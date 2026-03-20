import { motion } from "motion/react";
import { Link } from "react-router";
import { SEO } from "./SEO";
import { APP_SIGNUP_URL } from "../config";
import { 
  BarChart3, 
  Workflow, 
  RefreshCw, 
  TrendingDown,
  LineChart,
  ShieldCheck,
  Zap,
  MessageSquareText,
  ScanLine,
  Users,
  ArrowRight,
  FileSpreadsheet,
  Bot,
  Database
} from "lucide-react";

export function Product() {
  const features = [
    {
      icon: <RefreshCw className="h-8 w-8 text-blue-600" />,
      title: "Sincronización Nativa con Alegra ERP",
      description: "OptiStockAi se sincroniza en tiempo real con tu ERP Alegra mediante API segura. Facturas, histórico de ventas, catálogo de productos y niveles de almacén por bodega se actualizan al instante, eliminando errores de captura manual."
    },
    {
      icon: <LineChart className="h-8 w-8 text-blue-600" />,
      title: "Pronóstico de Ventas a 12 Meses (AutoGluon)",
      description: "Modelos de series temporales con AutoGluon analizan tu historial de ventas para generar predicciones semanales. Filtra por producto, color, talla y bodega. Visualiza inventario actual vs. proyectado con +94% de precisión."
    },
    {
      icon: <Workflow className="h-8 w-8 text-blue-600" />,
      title: "Agentes de Reabastecimiento con IA",
      description: "Los agentes calculan la cantidad óptima de reorden para cada SKU: demanda proyectada a 4, 8 y 12 semanas, Lead Time de proveedores, stock actual, costo de impacto financiero y semanas de inventario restante."
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-blue-600" />,
      title: "Transferencias Inteligentes entre Sucursales",
      description: "Algoritmos detectan desbalances de inventario entre bodegas. Cada recomendación muestra: SKU, bodega origen, bodega destino, cantidad a transferir, stock disponible y demanda proyectada a 12 semanas."
    },
    {
      icon: <MessageSquareText className="h-8 w-8 text-blue-600" />,
      title: "Asistente Financiero IA (Chat LLM)",
      description: "Consulta tus métricas en lenguaje natural: '¿Cuáles son mis gastos más altos este mes?', '¿Cómo está mi flujo de caja?', '¿Qué productos tienen riesgo de quiebre?'. Historial de sesiones persistente para cada conversación."
    },
    {
      icon: <ScanLine className="h-8 w-8 text-blue-600" />,
      title: "Carga Contable Inteligente (OCR + IA)",
      description: "Sube facturas, recibos de nómina, cuentas de cobro y recibos de caja. El motor de IA extrae automáticamente: fecha, descripción, categoría, subtotal, impuesto, total, proveedor, NIT y método de pago."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Dashboard KPI en Tiempo Real",
      description: "Panel con 5 métricas clave: Total de Ventas, Valor del Inventario, Ratio de Rotación, Precisión del Pronóstico IA y Ventas Adicionales Capturadas por las recomendaciones. Todo actualizado desde Alegra."
    },
    {
      icon: <FileSpreadsheet className="h-8 w-8 text-blue-600" />,
      title: "Reportes Financieros y P&L",
      description: "Resultados financieros completos con estado de resultados (P&L), análisis de ingresos vs gastos, y reporte detallado de ventas por producto y bodega con comparado semanal y mensual."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      title: "Seguridad Multi-Tenant (RLS)",
      description: "Row Level Security a nivel de PostgreSQL aísla completamente los datos de cada organización. Autenticación GoTrue, cifrado TLS, y roles de acceso (Admin, Manager, Viewer) con permisos granulares."
    }
  ];

  return (
    <div className="bg-white pb-24">
      <SEO 
        title="Características de la Plataforma | 9 Módulos de IA para tu PYME"
        description="Descubre los 9 módulos de OptiStockAi: pronóstico de ventas ML a 12 meses, recomendaciones de reabastecimiento IA, transferencias entre bodegas, asistente financiero chat, carga contable OCR, dashboard KPI y más. Todo integrado con Alegra ERP."
        keywords="características plataforma, pronóstico de ventas machine learning, agentes ia reabastecimiento, chat financiero llm, carga contable ocr, dashboard kpi, transferencias bodegas, integración alegra api, OptiStockAi"
        canonical="/product"
      />

      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Una Plataforma Construida para <span className="text-blue-600">Escalar tu PYME</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            9 módulos especializados de IA que trabajan 24/7 sobre tus datos reales de Alegra ERP. Desde pronóstico de ventas con ML hasta asistente financiero con LLM.
          </motion.p>
        </div>
      </section>

      {/* Main Dashboard Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="rounded-2xl shadow-2xl border border-slate-200 bg-white overflow-hidden p-2"
        >
          <img 
            src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMHNvZnR3YXJlfGVufDF8fHx8MTc3Mzk4NTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Interfaz del Dashboard de OptiStockAi con KPIs, pronóstico de ventas ML y recomendaciones de reabastecimiento IA" 
            className="w-full h-auto rounded-xl border border-slate-100"
          />
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Cada módulo resuelve un problema real</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Abandona las hojas de cálculo. Cada módulo está diseñado a partir del feedback de PYMEs reales en México y Colombia que usan Alegra ERP.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all bg-white group"
            >
              <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Data Flow Architecture */}
      <section className="mt-32 bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Cómo fluyen tus datos de Alegra a decisiones inteligentes</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                La arquitectura de OptiStockAi conecta tu ERP con un pipeline de Machine Learning que transforma datos contables pasivos en inteligencia de negocio activa.
              </p>
              <ul className="space-y-5 mb-8">
                {[
                  { icon: <Database className="h-5 w-5 text-blue-400" />, text: "API Alegra → Sincronización de facturas, productos y stock por bodega" },
                  { icon: <Bot className="h-5 w-5 text-blue-400" />, text: "AutoGluon → Pipeline de series temporales para pronóstico a 12 meses" },
                  { icon: <BarChart3 className="h-5 w-5 text-blue-400" />, text: "Dashboard → KPIs, recomendaciones de reorden y transferencias" },
                  { icon: <MessageSquareText className="h-5 w-5 text-blue-400" />, text: "Chat IA → LLM con contexto financiero para consultas en lenguaje natural" },
                  { icon: <Users className="h-5 w-5 text-blue-400" />, text: "Multi-tenant → RLS + Roles de acceso para tu equipo completo" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <a
                  href={APP_SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition-colors"
                >
                  Probar Gratis
                </a>
                <Link
                  to="/pricing"
                  className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2"
                >
                  Ver Precios <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMG1lZXRpbmd8ZW58MXx8fHwxNzczOTgyOTA5fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Equipo de PYMEs usando OptiStockAi para planeación financiera e inventarios" 
                className="relative rounded-2xl border border-slate-700 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
