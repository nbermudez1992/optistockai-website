import { motion } from "motion/react";
import { SEO } from "./SEO";
import { MapPin, Users, Target, Globe2 } from "lucide-react";

export function About() {
  return (
    <div className="bg-white pb-24">
      <SEO 
        title="Nuestra Historia y Misión | OptiStockAi"
        description="Conoce la historia detrás de OptiStockAi y cómo estamos democratizando la planeación de demanda y el análisis financiero (FP&A) para las PYMEs en México y Colombia."
        keywords="sobre nosotros, historia optistockai, misión empresarial, startup latam, innovación pymes colombia méxico"
        canonical="/about"
      />

      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Nuestra Historia
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Tenemos la firme misión de democratizar la planeación de demanda de nivel empresarial para pequeñas y medianas empresas en toda América Latina.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Nacidos de la frustración, construidos para el crecimiento.</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  OptiStockAi comenzó cuando nuestros fundadores, trabajando de cerca con PYMEs minoristas y mayoristas en México y Colombia, notaron un patrón logístico y financiero recurrente.
                </p>
                <p>
                  Estos negocios generaban ventas increíbles y dependían en gran medida de fantásticos ERPs locales, como Alegra, para su contabilidad y facturación. Sin embargo, cuando se trataba de responder preguntas críticas para el crecimiento como <em>"¿Cuánto inventario exactamente debemos comprar el próximo mes?"</em> o <em>"¿Estamos inmovilizando demasiado capital en productos de baja rotación?"</em>, estaban atascados usando hojas de cálculo desordenadas y desconectadas.
                </p>
                <p>
                  Nos dimos cuenta de que la verdadera Planeación y Análisis Financiero (FP&A) y el pronóstico de la cadena de suministro se trataban como un lujo accesible únicamente para grandes corporativos con gigantescos presupuestos y equipos dedicados de Data Science.
                </p>
                <p className="font-semibold text-slate-900 text-xl text-blue-600">
                  Decidimos cambiar esa realidad para siempre.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 transform translate-x-4 translate-y-4 rounded-2xl z-0 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1739298061766-e2751d92e9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NzM5MzkzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="El equipo diverso detrás de OptiStockAi trabajando en estrategias de datos" 
                className="relative z-10 rounded-2xl shadow-lg border border-slate-100 object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values/Mission Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <article className="text-center">
            <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Nuestra Misión Central</h3>
            <p className="text-slate-600">
              Permitir que cada PYME en LatAm tome decisiones basadas en datos estructurados que optimicen su capital de trabajo y aceleren exponencialmente su rentabilidad a través de IA fácil de usar.
            </p>
          </article>
          <article className="text-center">
            <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe2 className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Un Enfoque 100% LatAm</h3>
            <p className="text-slate-600">
              Construimos nuestro software específicamente pensando en los matices, la economía y las regulaciones del mercado latinoamericano, integrándonos profundamente con campeones regionales como Alegra.
            </p>
          </article>
          <article className="text-center">
            <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Empoderando a las Personas</h3>
            <p className="text-slate-600">
              Al 'agentificar' y delegar a la IA las tareas tediosas de proyección y conciliación de inventarios, liberamos el talento de tu equipo para que se enfoque en crear relaciones y diseñar estrategias.
            </p>
          </article>
        </div>
      </section>

      {/* Offices Location */}
      <section className="mt-32 border-t border-slate-200 pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Dónde operamos y construimos el futuro</h2>
        <div className="flex flex-col md:flex-row justify-center gap-16">
          <div className="flex flex-col items-center">
            <MapPin className="h-8 w-8 text-blue-600 mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Sede en Ciudad de México</h4>
            <p className="text-slate-600">Paseo de la Reforma<br/>CDMX, 06600, México</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="h-8 w-8 text-blue-600 mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Sede en Bogotá</h4>
            <p className="text-slate-600">Chapinero Central<br/>Bogotá, D.C., Colombia</p>
          </div>
        </div>
      </section>
    </div>
  );
}
