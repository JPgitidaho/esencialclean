import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-sky-700">
          EsencialClean
        </Link>

        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/nosotros">Nosotros</Link>
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