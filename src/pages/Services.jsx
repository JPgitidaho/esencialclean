import { Link } from 'react-router-dom'
import {
  sofaImageVariants,
  carpetImageVariants,
  mattressImageVariants,
  chairsImageVariants,
} from '../assets/images'

const services = [
  {
    title: 'Limpieza de sillones',
    description: 'Recuperamos frescura, limpieza y mejor apariencia en sillones de uso diario con tratamientos especializados.',
    image: sofaImageVariants,
    link: '/limpieza-de-sillones'
  },
  {
    title: 'Limpieza de alfombras',
    description: 'Eliminamos suciedad acumulada, olores y manchas para renovar cada espacio del hogar.',
    image: carpetImageVariants,
    link: '/limpieza-de-alfombras'
  },
  {
    title: 'Limpieza de colchones',
    description: 'Mejoramos higiene y sensación de limpieza con un tratamiento profundo y cuidadoso.',
    image: mattressImageVariants,
    link: '/limpieza-de-colchones'
  },
  {
    title: 'Limpieza de sillas y tapices',
    description: 'Devolvemos limpieza y presentación a sillas de tela y superficies tapizadas.',
    image: chairsImageVariants,
    link: '/limpieza-de-sillas-y-tapices'
  },
]

export default function Services() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900">Nuestros Servicios de Limpieza Textil</h1>
          <p className="mt-4 max-w-2xl text-slate-600 text-lg">
            Ofrecemos limpieza profesional especializada para sillones, alfombras, colchones, sillas y tapices con enfoque en higiene, cuidado y resultados visibles.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[2rem] border border-slate-200 bg-white overflow-hidden shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="overflow-hidden h-48 bg-slate-100">
                <picture>
                  <source type="image/webp" srcSet={service.image.webp800} />
                  <img src={service.image.webp800} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
                </picture>
              </div>
              
              <div className="p-7">
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 text-sm">{service.description}</p>
                <Link
                  to={service.link}
                  className="mt-4 inline-block text-sky-600 font-semibold hover:text-sky-700"
                >
                  Ver más detalles →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white mt-16">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">¿Necesitas un servicio personalizado?</h2>
            <p className="max-w-2xl mx-auto leading-8 text-slate-300 mb-8">
              Contáctanos para cotizar limpieza de otros textiles o servicios especializados.
            </p>
            <Link
              to="/contacto"
              className="inline-block rounded-full bg-sky-600 px-8 py-3 font-semibold text-white hover:bg-sky-700 transition"
            >
              Solicitar cotización
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}