import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { SEO } from "./SEO";

export function Blog() {
  const articles = [
    {
      id: "pymes-latam-ia-inventario",
      slug: "pymes-latam-ia-inventario",
      title: "Cómo las PYMEs en LatAm pueden aprovechar la IA para el control de inventario",
      excerpt: "Descubre los pasos prácticos que las pequeñas y medianas empresas pueden tomar para pasar de hojas de cálculo manuales a pronósticos de inventario inteligentes y automatizados mediante Large Language Models y Machine Learning, mejorando su planeación de demanda.",
      image: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBtb2Rlcm58ZW58MXx8fHwxNzczOTA2NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Inteligencia Artificial",
      date: "Oct 12, 2024",
      author: "Carlos Mendoza"
    },
    {
      id: "guia-conectar-alegra-planeacion",
      slug: "guia-conectar-alegra-planeacion",
      title: "La Guía Definitiva para Conectar Alegra ERP con Herramientas de IA y Planeación",
      excerpt: "Un desglose técnico sobre cómo conectar la API de Alegra ERP con el motor de inteligencia artificial de OptiStockAi para obtener proyecciones predictivas de flujo de caja y demanda de productos.",
      image: "https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMGRhdGElMjBhbmFseXRpY3MlMjBibHVlfGVufDF8fHx8MTc3Mzk4NTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Integraciones API",
      date: "Sep 28, 2024",
      author: "Ana Silva"
    },
    {
      id: "fpa-101-negocio-minorista",
      slug: "fpa-101-negocio-minorista",
      title: "FP&A 101: Por qué tu negocio minorista necesita Análisis Predictivo",
      excerpt: "La Planeación y Análisis Financiero (FP&A) modernizada con IA predictiva. Aprende cómo la aplicación de estos algoritmos previene crisis de flujo de caja y excesos de stock en almacén.",
      image: "https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMG1lZXRpbmd8ZW58MXx8fHwxNzczOTgyOTA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Finanzas y FP&A",
      date: "Sep 15, 2024",
      author: "Luis Herrera"
    },
    {
      id: "agentificar-operaciones-ia",
      slug: "agentificar-operaciones-ia",
      title: "Agentificar tus operaciones: Qué significa integrar Agentes de IA en la Logística",
      excerpt: "Desglosamos la palabra de moda 'agentificar'. Explicamos cómo los Agentes de IA autónomos de OptiStockAi manejan el reabastecimiento, dialogan con Alegra y detectan anomalías en las ventas.",
      image: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMHNvZnR3YXJlfGVufDF8fHx8MTc3Mzk4NTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Agentes Autónomos",
      date: "Aug 30, 2024",
      author: "Elena Rios"
    }
  ];

  // Schema for the Blog Listing page
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Técnico de OptiStockAi",
    "description": "Artículos sobre Inteligencia artificial, Machine Learning, integración con Alegra ERP y FP&A para logística y cadenas de suministro en LatAm.",
    "publisher": {
      "@type": "Organization",
      "name": "OptiStockAi"
    },
    "blogPost": articles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "abstract": article.excerpt,
      "datePublished": "2024-01-01", // Ideally parsed dynamically
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "url": `https://optistockai.site/articles/${article.slug}`
    }))
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <SEO 
        title="Blog Técnico: IA, Agentes Autónomos y FP&A para Inventarios"
        description="Aprende sobre la aplicación de Inteligencia Artificial (IA), modelos de lenguaje y análisis predictivo para la optimización de inventarios y FP&A en nuestro blog oficial."
        keywords="blog inteligencia artificial, machine learning logistica, agentes autonomos pymes, integracion alegra api, OptiStockAi blog, conocimiento IA generativa"
        canonical="/articles"
        schemaMarkup={blogSchema}
      />

      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Recursos Técnicos sobre IA e Inventarios
            </h1>
            <p className="text-xl text-slate-600">
              Exploramos el impacto real del <strong>Machine Learning</strong>, la <strong>IA Generativa</strong> y la automatización financiera en la cadena de suministro para las PYMEs de México y Colombia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to={`/articles/${articles[0].slug}`} className="block" aria-label={`Leer artículo destacado: ${articles[0].title}`}>
          <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto relative overflow-hidden">
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm mb-4">
                  <Tag className="h-4 w-4" aria-hidden="true" />
                  {articles[0].category}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {articles[0].title}
                </h2>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" aria-hidden="true" />
                      {articles[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      {articles[0].date}
                    </div>
                  </div>
                  <div className="text-blue-600 bg-blue-50 p-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors" aria-hidden="true">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Link>

        {/* Article Grid */}
        <h3 className="text-2xl font-bold text-slate-900 mb-8">Base de Conocimiento de IA</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <Link key={article.id} to={`/articles/${article.slug}`} aria-label={`Leer artículo: ${article.title}`}>
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl h-full shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group flex flex-col cursor-pointer"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={`Imagen ilustrativa de IA para el artículo: ${article.title}`}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-blue-600 font-semibold text-xs uppercase tracking-wider mb-3">
                    {article.category}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <span className="text-xs font-medium text-slate-500">{article.date}</span>
                    <span className="text-sm font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Leer informe <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
