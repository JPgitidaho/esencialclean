import {
  sofaCleaningImage,
  sofaImageVariants,
  carpetCleaningImage,
  carpetImageVariants,
  mattressCleaningImage,
  mattressImageVariants,
  chairsCleaningImage,
  chairsImageVariants,
  tapestryCleaningImage,
  tapestryImageVariants,
  sanitizationImage,
  sanitizationImageVariants,
} from '../assets/images'

const services = [
  {
    title: 'Limpieza de sillones',
    description: 'Recuperamos frescura, limpieza y mejor apariencia en sillones de uso diario con tratamientos especializados.',
    image: sofaImageVariants,
    details: ['Extracción de suciedad profunda', 'Eliminación de olores', 'Protección de telas', 'Secado rápido']
  },
  {
    title: 'Limpieza de alfombras',
    description: 'Eliminamos suciedad acumulada, olores y manchas para renovar cada espacio del hogar.',
    image: carpetImageVariants,
    details: ['Limpieza profunda', 'Remoción de manchas', 'Desodorización', 'Secado técnico']
  },
  {
    title: 'Limpieza de colchones',
    description: 'Mejoramos higiene y sensación de limpieza con un tratamiento profundo y cuidadoso.',
    image: mattressImageVariants,
    details: ['Sanitización', 'Eliminación de ácaros', 'Desodorización', 'Cuidado del material']
  },
  {
    title: 'Limpieza de sillas y comedores',
    description: 'Devolvemos limpieza y presentación a sillas de tela y superficies tapizadas.',
    image: chairsImageVariants,
    details: ['Limpieza selectiva', 'Protección de telas', 'Cuidado de railes', 'Acabado perfecto']
  },
  {
    title: 'Limpieza de tapices',
    description: 'Trabajamos distintos textiles con enfoque en cuidado, resultado y buena terminación.',
    image: tapestryImageVariants,
    details: ['Tratamiento especializado', 'Conservación de color', 'Eliminación de polvo', 'Acabado profesional']
  },
  {
    title: 'Sanitización y desodorización',
    description: 'Ayudamos a dejar tus espacios con mejor aroma, frescura y sensación de higiene.',
    image: sanitizationImageVariants,
    details: ['Desinfección completa', 'Eliminación de olores', 'Ambiente fresco', 'Seguridad garantizada']
  },
]

export default function Services() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900">Servicios de limpieza textil</h1>
          <p className="mt-4 max-w-2xl text-slate-600 text-lg">
            Ofrecemos limpieza profesional de sillones, alfombras, colchones, sillas y tapices con enfoque en higiene, cuidado y presentación de alta calidad.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[2rem] border border-slate-200 bg-white overflow-hidden shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="overflow-hidden h-48 bg-slate-100">
                <picture>
                  <source type="image/webp" srcSet={service.image.webp800} />
                  <source type="image/jpeg" srcSet={service.image.jpg800} />
                  <img src={service.image.jpg800} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
                </picture>
              </div>
              
              <div className="p-7">
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 text-sm">{service.description}</p>
                
                <div className="mt-5 space-y-2">
                  {service.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3">
                      <span className="text-sky-600 font-bold">✓</span>
                      <span className="text-sm text-slate-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white mt-16">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">¿Por qué nuestro servicio?</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-sky-400 font-bold text-xl">✓</span>
                  <p><strong>Profesionalismo</strong> - Equipo capacitado en diferentes tipos de textiles</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400 font-bold text-xl">✓</span>
                  <p><strong>Resultados visibles</strong> - Transformación notoria en cada servicio</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400 font-bold text-xl">✓</span>
                  <p><strong>Atención a domicilio</strong> - Comodidad total sin trasladar tus muebles</p>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400 font-bold text-xl">✓</span>
                  <p><strong>Cuidado extremo</strong> - Tratamientos adaptados a cada material</p>
                </li>
              </ul>
            </div>
            
            <div className="rounded-[2rem] overflow-hidden">
              <picture>
                <source type="image/webp" srcSet={sanitizationImageVariants.webp1600} />
                <source type="image/jpeg" srcSet={sanitizationImageVariants.jpg1600} />
                <img src={sanitizationImageVariants.jpg1600} alt="Equipo profesional" className="w-full h-auto" />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}