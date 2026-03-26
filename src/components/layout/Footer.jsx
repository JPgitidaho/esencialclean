import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              EsencialClean
            </h3>
            <p className="text-slate-300 text-sm leading-6 mb-6">
              Limpieza profesional de textiles con atención confiable y resultados visibles que transforman tus espacios.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center hover:bg-sky-500 transition text-sm font-bold">f</a>
              <a href="#" className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center hover:bg-sky-500 transition text-sm font-bold">I</a>
              <a href="#" className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center hover:bg-sky-500 transition text-sm font-bold">W</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li><Link to="/sillones" className="text-slate-300 hover:text-sky-400 transition">Limpieza de Sillones</Link></li>
              <li><Link to="/colchones" className="text-slate-300 hover:text-sky-400 transition">Limpieza de Colchones</Link></li>
              <li><Link to="/alfombras" className="text-slate-300 hover:text-sky-400 transition">Limpieza de Alfombras</Link></li>
              <li><Link to="/sillas-tapices" className="text-slate-300 hover:text-sky-400 transition">Sillas y Tapices</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Información</h4>
            <ul className="space-y-3">
              <li><Link to="/nosotros" className="text-slate-300 hover:text-sky-400 transition">Sobre Nosotros</Link></li>
              <li><Link to="/contacto" className="text-slate-300 hover:text-sky-400 transition">Contacto</Link></li>
              <li><Link to="/preguntas-frecuentes" className="text-slate-300 hover:text-sky-400 transition">Preguntas Frecuentes</Link></li>
              <li><a href="#" className="text-slate-300 hover:text-sky-400 transition">Términos y Condiciones</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contacto</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-sky-400 font-bold">📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-sky-400 font-bold">📧</span>
                <span>info@esencialclean.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-400 font-bold">📍</span>
                <span>Tu Ciudad, País</span>
              </li>
              <li className="mt-4 pt-4 border-t border-slate-700">
                <a href="https://wa.me/5551234567" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition font-semibold text-sm">
                  💬 WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Brands Section */}
        <div className="border-t border-slate-700 pt-12 mb-12">
          <h4 className="text-lg font-bold text-white text-center mb-10">Equipos y Marcas de Confianza</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {/* Kärcher */}
            <div className="group relative h-28 rounded-lg overflow-hidden flex items-center justify-start pl-6 pr-4 hover:scale-105 transition duration-300 cursor-pointer"
                 style={{background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.1) 0%, rgba(251, 146, 60, 0.15) 100%)'}}>
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-white shadow-lg">
                K
              </div>
              <div className="flex flex-col justify-center">
                <h5 className="text-xl font-black text-yellow-300 leading-tight">Kärcher</h5>
                <p className="text-xs text-slate-400 mt-1">Equipos profesionales</p>
              </div>
              <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/50 rounded-lg transition"></div>
            </div>

            {/* Glanz */}
            <div className="group relative h-28 rounded-lg overflow-hidden flex items-center justify-start pl-6 pr-4 hover:scale-105 transition duration-300 cursor-pointer"
                 style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(14, 165, 233, 0.15) 100%)'}}>
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-white shadow-lg">
                G
              </div>
              <div className="flex flex-col justify-center">
                <h5 className="text-xl font-black text-blue-300 leading-tight">Glanz</h5>
                <p className="text-xs text-slate-400 mt-1">Aspiradoras y brillo</p>
              </div>
              <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/50 rounded-lg transition"></div>
            </div>

            {/* Hidros Fasa */}
            <div className="group relative h-28 rounded-lg overflow-hidden flex items-center justify-start pl-6 pr-4 hover:scale-105 transition duration-300 cursor-pointer"
                 style={{background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.15) 100%)'}}>
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-white shadow-lg text-sm">
                HF
              </div>
              <div className="flex flex-col justify-center">
                <h5 className="text-xl font-black text-green-300 leading-tight">Hidros Fasa</h5>
                <p className="text-xs text-slate-400 mt-1">Químicos especializados</p>
              </div>
              <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/50 rounded-lg transition"></div>
            </div>

            {/* Kaiman */}
            <div className="group relative h-28 rounded-lg overflow-hidden flex items-center justify-start pl-6 pr-4 hover:scale-105 transition duration-300 cursor-pointer"
                 style={{background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(244, 63, 94, 0.15) 100%)'}}>
              <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-white shadow-lg">
                K
              </div>
              <div className="flex flex-col justify-center">
                <h5 className="text-xl font-black text-red-300 leading-tight">Kaiman</h5>
                <p className="text-xs text-slate-400 mt-1">Equipos profesionales</p>
              </div>
              <div className="absolute inset-0 border border-red-500/0 group-hover:border-red-500/50 rounded-lg transition"></div>
            </div>

            {/* Itaca */}
            <div className="group relative h-28 rounded-lg overflow-hidden flex items-center justify-start pl-6 pr-4 hover:scale-105 transition duration-300 cursor-pointer"
                 style={{background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(139, 92, 246, 0.15) 100%)'}}>
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-white shadow-lg">
                I
              </div>
              <div className="flex flex-col justify-center">
                <h5 className="text-xl font-black text-purple-300 leading-tight">Itaca</h5>
                <p className="text-xs text-slate-400 mt-1">Limpieza de textiles</p>
              </div>
              <div className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/50 rounded-lg transition"></div>
            </div>

            {/* Columb */}
            <div className="group relative h-28 rounded-lg overflow-hidden flex items-center justify-start pl-6 pr-4 hover:scale-105 transition duration-300 cursor-pointer"
                 style={{background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(250, 204, 21, 0.15) 100%)'}}>
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-white shadow-lg">
                C
              </div>
              <div className="flex flex-col justify-center">
                <h5 className="text-xl font-black text-orange-300 leading-tight">Columb</h5>
                <p className="text-xs text-slate-400 mt-1">Productos especializados</p>
              </div>
              <div className="absolute inset-0 border border-orange-500/0 group-hover:border-orange-500/50 rounded-lg transition"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} EsencialClean. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-sky-400 transition">Privacidad</a>
            <a href="#" className="hover:text-sky-400 transition">Cookies</a>
            <a href="#" className="hover:text-sky-400 transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}