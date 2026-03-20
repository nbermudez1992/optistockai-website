import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react";
import { SEO } from "./SEO";

export function BlogPost() {
  const { slug } = useParams();

  const article = {
    title: slug === "pymes-latam-ia-inventario" 
      ? "Cómo las PYMEs en LatAm pueden aprovechar la IA para el control de inventario" 
      : "Agentificar operaciones logísticas mediante modelos de Machine Learning y Alegra ERP",
    description: "Análisis técnico y estratégico sobre cómo los modelos de IA generativa y agentes autónomos están revolucionando la planeación de demanda (FP&A) para empresas usando software contable en la nube.",
    image: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBtb2Rlcm58ZW58MXx8fHwxNzczOTA2NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Inteligencia Artificial Logística",
    date: "12 de Octubre, 2024",
    author: "Carlos Mendoza"
  };

  // Article Specific JSON-LD for Search Engines and LLM understanding
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "OptiStockAi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://optistockai.site/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://optistockai.site/articles/${slug}`
    },
    "about": [
      { "@type": "Thing", "name": "Artificial Intelligence" },
      { "@type": "Thing", "name": "Inventory Management" },
      { "@type": "Thing", "name": "ERP Integration" }
    ]
  };

  return (
    <article className="bg-white min-h-screen pb-24">
      <SEO 
        title={article.title}
        description={article.description}
        keywords={`IA generativa pymes, agentes autonomos inventario, ${article.category.toLowerCase()}, machine learning logistica, integracion alegra`}
        canonical={`/articles/${slug}`}
        ogImage={article.image}
        schemaMarkup={articleSchema}
      />

      {/* Header del Post */}
      <header className="pt-16 pb-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/articles" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a la Base de Conocimiento
          </Link>
          
          <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm mb-6 uppercase tracking-wide">
            <Tag className="h-4 w-4" />
            {article.category}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
            <div className="flex flex-wrap items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2" rel="author">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  CM
                </div>
                <span className="font-medium text-slate-900">{article.author}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <time dateTime="2024-10-12">{article.date}</time>
              </div>
            </div>
            
            <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm" aria-label="Compartir artículo">
              <Share2 className="h-4 w-4" />
              <span className="text-sm font-medium">Compartir Datos</span>
            </button>
          </div>
        </div>
      </header>

      {/* Imagen Principal */}
      <figure className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 mb-16">
        <img 
          src={article.image} 
          alt={`Visualización de análisis de datos para IA y automatización. Título: ${article.title}`} 
          className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl"
        />
        <figcaption className="sr-only">Gráfico conceptual de inteligencia artificial aplicada a cadena de suministro y ERPs.</figcaption>
      </figure>

      {/* Contenido del Artículo */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue prose-slate">
        <p className="lead text-xl text-slate-600 mb-8 font-medium leading-relaxed">
          {article.description}
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">El desafío computacional de la gestión de inventarios en la región</h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          En los mercados emergentes de México y Colombia, las pequeñas y medianas empresas se enfrentan al problema matemático de optimizar inventarios sujetos a restricciones multivariables. Los enfoques heurísticos tradicionales —las clásicas hojas de cálculo— no poseen la capacidad de computar variables en tiempo real, lo que evidencia la clara necesidad de <strong>Modelos de Machine Learning (ML)</strong> predictivos.
        </p>
        
        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Extracción de datos mediante API: El ecosistema Alegra ERP</h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Para que una inteligencia artificial (IA) funcione correctamente, requiere de un 'Data Lake' limpio. Alegra ERP funciona perfectamente como la base de datos transaccional estructurada (facturas y contabilidad). OptiStockAi extrae esta información mediante su API nativa, normaliza los datos y los inyecta en su motor de <em>Planeación y Análisis Financiero (FP&A)</em> impulsado por IA.
        </p>

        <blockquote className="border-l-4 border-blue-600 pl-6 my-10 italic text-2xl text-slate-800 font-medium">
          "La integración de agentes autónomos (LLMs) que interactúan directamente con los datos del ERP transforma un sistema de registro pasivo en un motor de decisiones activo."
        </blockquote>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Arquitectura de Agentes: Qué significa 'Agentificar'</h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          En el contexto de la inteligencia artificial moderna, 'agentificar' significa desplegar <strong>agentes de software autónomos</strong> que no solo leen información, sino que razonan sobre ella. En OptiStockAi, un Agente de Demanda monitorea el catálogo 24/7, detecta anomalías estadísticas usando desviaciones estándar, y sugiere reórdenes óptimos basándose en el 'Lead Time' histórico.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Métricas de Impacto del ML en Retail</h3>
        <ul className="space-y-4 mb-8 text-slate-600">
          <li className="flex gap-3 items-start">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <span><strong>Aumento del Forecast Accuracy:</strong> Uso de análisis de series temporales para lograr una precisión de más del 90%.</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <span><strong>Reducción del Costo de Mantenimiento de Inventario:</strong> Los algoritmos penalizan matemáticamente el sobrestock inactivo.</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <span><strong>Toma de Decisiones NLP:</strong> Interfaz de Procesamiento de Lenguaje Natural para consultar bases de datos complejas haciendo preguntas simples.</span>
          </li>
        </ul>

        <aside className="bg-blue-50 rounded-2xl p-8 mt-12 mb-8 border border-blue-100 semantic-section">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">¿Deseas implementar esta arquitectura de IA?</h3>
          <p className="text-slate-600 mb-6">
            Conoce cómo nuestra plataforma <strong>OptiStockAi</strong> proporciona esta tecnología de nivel Enterprise empaquetada como SaaS (Software as a Service) directo para tu cuenta Alegra.
          </p>
          <Link to="/product" className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all focus:outline-none focus:ring-4 focus:ring-blue-300">
            Explorar características del software IA
          </Link>
        </aside>
      </div>
    </article>
  );
}
