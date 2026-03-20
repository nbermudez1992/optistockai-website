import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, BarChart3, LogIn, UserPlus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { APP_LOGIN_URL, APP_SIGNUP_URL } from "../config";

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Plataforma", href: "/product" },
    { name: "Precios", href: "/pricing" },
    { name: "Artículos", href: "/articles" },
    { name: "Nuestra Historia", href: "/about" },
    { name: "Contacto", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-2xl tracking-tight text-slate-900">
                  OptiStock<span className="text-blue-600">Ai</span>
                </span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 ml-4 pl-4 border-l border-slate-200">
                <a
                  href={APP_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="nav-login"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-full border border-slate-200 hover:border-blue-200 hover:bg-blue-50"
                >
                  <LogIn className="h-4 w-4" />
                  Iniciar Sesión
                </a>
                <a
                  href={APP_SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="nav-signup"
                  className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-medium transition-colors text-sm shadow-md hover:shadow-lg"
                >
                  <UserPlus className="h-4 w-4" />
                  Crear Cuenta Gratis
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-blue-600 focus:outline-none p-2"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-slate-200"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-3 rounded-md text-base font-medium ${
                      isActive(item.href)
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-6 px-3 space-y-3">
                  <a
                    href={APP_LOGIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full text-slate-700 border border-slate-200 px-4 py-3 rounded-xl font-medium"
                  >
                    <LogIn className="h-4 w-4" />
                    Iniciar Sesión
                  </a>
                  <a
                    href={APP_SIGNUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-4 py-3 rounded-xl font-medium shadow-sm"
                  >
                    <UserPlus className="h-4 w-4" />
                    Crear Cuenta Gratis
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 p-1.5 rounded-md">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tight">
                  OptiStock<span className="text-blue-400">Ai</span>
                </span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Empoderando a las PYMEs en México y Colombia con planeación de demanda, pronóstico de ventas con ML, y FP&A impulsada por IA, integrada directamente con Alegra.
              </p>
              <a
                href={APP_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded-full font-medium transition-colors"
              >
                Comenzar Gratis
              </a>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Plataforma</h3>
              <ul className="space-y-3">
                <li><Link to="/product" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Características</Link></li>
                <li><Link to="/product" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Integración con Alegra</Link></li>
                <li><Link to="/product" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Agentes de IA</Link></li>
                <li><Link to="/pricing" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Precios</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Compañía</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Nuestra Historia</Link></li>
                <li><Link to="/articles" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Blog y Recursos</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Contacto</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Acceso</h3>
              <ul className="space-y-3">
                <li>
                  <a href={APP_LOGIN_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-1.5">
                    <LogIn className="h-3.5 w-3.5" /> Iniciar Sesión
                  </a>
                </li>
                <li>
                  <a href={APP_SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-1.5">
                    <UserPlus className="h-3.5 w-3.5" /> Crear Cuenta
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-4 text-white">Legal</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Política de Privacidad</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Términos de Servicio</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} OptiStockAi. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors cursor-pointer flex items-center justify-center">
                <span className="text-xs font-bold">in</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors cursor-pointer flex items-center justify-center">
                <span className="text-xs font-bold">𝕏</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
