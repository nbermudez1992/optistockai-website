import { useState } from "react";
import { motion } from "motion/react";
import { SEO } from "./SEO";
import { APP_LOGIN_URL } from "../config";
import { 
  Send, 
  Mail, 
  MapPin, 
  Building2,
  User,
  MessageSquare,
  CheckCircle2,
  LogIn,
  ArrowRight,
  AlertCircle
} from "lucide-react";

// Formspree form ID — configure the recipient email at https://formspree.io
// The actual destination email is NEVER exposed in client code.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjgrqwe";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          _subject: `OptiStockAi - ${formData.subject || "Nuevo mensaje de contacto"}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.");
      }
    } catch {
      setError("Error de conexión. Por favor verifica tu internet e intenta de nuevo.");
    } finally {
      setSending(false);
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto | OptiStockAi",
    "description": "Contacta al equipo de OptiStockAi para consultas sobre nuestra plataforma de planeación de demanda con IA.",
    "mainEntity": {
      "@type": "Organization",
      "name": "OptiStockAi",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "availableLanguage": ["Spanish", "English"]
      }
    }
  };

  return (
    <div className="bg-white pb-24">
      <SEO
        title="Contacto | Habla con Nuestro Equipo"
        description="Contacta al equipo de OptiStockAi. Pregunta sobre nuestra plataforma de planeación de demanda con IA, integración con Alegra ERP, precios o soporte técnico."
        keywords="contacto optistockai, soporte, demo personalizada, planeacion demanda contacto, alegra erp consulta"
        canonical="/contact"
        schemaMarkup={contactSchema}
      />

      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Hablemos sobre el <span className="text-blue-600">futuro de tu PYME</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ¿Tienes preguntas sobre nuestra plataforma de IA? ¿Necesitas una demo personalizada? Estamos aquí para ayudarte a tomar la mejor decisión para tu negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  ¡Mensaje Enviado!
                </h2>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  Hemos recibido tu mensaje. Nuestro equipo te responderá dentro de las próximas 24 horas hábiles.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
                  }}
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 mx-auto"
                >
                  Enviar otro mensaje <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Envíanos un Mensaje
                </h2>
                <p className="text-slate-500 text-sm mb-8">
                  Completa el formulario y nuestro equipo se pondrá en contacto contigo.
                </p>

                {error && (
                  <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6 text-sm">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Nombre Completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          required
                          placeholder="Juan Pérez"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Correo Electrónico *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          required
                          placeholder="juan@empresa.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-company" className="block text-sm font-semibold text-slate-700 mb-2">
                        Empresa
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          id="contact-company"
                          name="company"
                          placeholder="Nombre de tu empresa"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-semibold text-slate-700 mb-2">
                        Asunto *
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 bg-white appearance-none"
                      >
                        <option value="">Seleccionar asunto...</option>
                        <option value="Demo Personalizada">Solicitar Demo Personalizada</option>
                        <option value="Precios y Planes">Preguntas sobre Precios y Planes</option>
                        <option value="Integración Alegra ERP">Integración con Alegra ERP</option>
                        <option value="Soporte Técnico">Soporte Técnico</option>
                        <option value="Partnership o Alianza">Partnership o Alianza</option>
                        <option value="Plan Enterprise">Plan Enterprise / Personalizado</option>
                        <option value="Comentarios Generales">Comentarios Generales</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Mensaje *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Cuéntanos sobre tu negocio y cómo podemos ayudarte..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-900 bg-white resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    id="contact-submit"
                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {sending ? (
                      <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>

          {/* Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Already a customer */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <LogIn className="h-5 w-5 text-blue-600" />
                ¿Ya eres cliente?
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Accede a tu panel de control con pronóstico de ventas, recomendaciones de reabastecimiento y chat financiero IA.
              </p>
              <a
                href={APP_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700"
              >
                Iniciar Sesión <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Office Locations */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Nuestras Oficinas</h3>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-2.5 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Ciudad de México</h4>
                  <p className="text-slate-600 text-sm">Paseo de la Reforma<br/>CDMX, 06600, México</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-2.5 rounded-lg">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Bogotá</h4>
                  <p className="text-slate-600 text-sm">Chapinero Central<br/>Bogotá, D.C., Colombia</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Tiempo de Respuesta</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Respondemos todas las consultas dentro de <strong className="text-white">24 horas hábiles</strong>. 
                Clientes del Plan Pro y Enterprise cuentan con acceso a soporte prioritario.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
