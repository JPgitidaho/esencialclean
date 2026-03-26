import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-sky-700">
          EsencialClean
        </Link>

        <nav className="hidden gap-6 text-sm font-medium md:flex relative">
          <Link to="/">Inicio</Link>
          <div className="relative">
            <button
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="hover:text-sky-600 transition"
            >
              Servicios
            </button>
            {isServicesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-lg shadow-lg py-2"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link to="/limpieza-de-sillones" className="block px-4 py-2 hover:bg-slate-50">Limpieza de sillones</Link>
                <Link to="/limpieza-de-colchones" className="block px-4 py-2 hover:bg-slate-50">Limpieza de colchones</Link>
                <Link to="/limpieza-de-alfombras" className="block px-4 py-2 hover:bg-slate-50">Limpieza de alfombras</Link>
                <Link to="/limpieza-de-sillas-y-tapices" className="block px-4 py-2 hover:bg-slate-50">Limpieza de sillas y tapices</Link>
              </div>
            )}
          </div>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/preguntas-frecuentes">Preguntas frecuentes</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <Link
          to="/contacto"
          className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white"
        >
          Cotizar
        </Link>
      </div>
    </header>
  )
}