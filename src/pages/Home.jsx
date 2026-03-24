import { Link } from 'react-router-dom'
import {
  heroImageVariants,
  sofaImageVariants,
  carpetImageVariants,
  beforeAfterImageVariants,
} from '../assets/images'

const services = [
  {
    title: 'Limpieza de sillones',
    description: 'Recuperamos frescura, limpieza y mejor apariencia en sillones de uso diario.',
  },
  {
    title: 'Limpieza de alfombras',
    description: 'Eliminamos suciedad acumulada, olores y manchas para renovar cada espacio.',
  },
  {
    title: 'Limpieza de colchones',
    description: 'Mejoramos higiene y sensación de limpieza con un tratamiento profundo y cuidadoso.',
  },
  {
    title: 'Limpieza de sillas y comedores',
    description: 'Devolvemos limpieza y presentación a sillas de tela y superficies tapizadas.',
  },
  {
    title: 'Limpieza de tapices',
    description: 'Trabajamos distintos textiles con enfoque en cuidado, resultado y buena terminación.',
  },
  {
    title: 'Sanitización y desodorización',
    description: 'Ayudamos a dejar tus espacios con mejor aroma, frescura y sensación de higiene.',
  },
]

const reasons = [
  'Atención a domicilio',
  'Resultados visibles',
  'Cuidado profesional de las telas',
  'Proceso claro y ordenado',
]

const steps = [
  {
    number: '01',
    title: 'Nos escribes',
    description: 'Cuéntanos qué necesitas y envíanos fotos si quieres una evaluación más rápida.',
  },
  {
    number: '02',
    title: 'Evaluamos',
    description: 'Revisamos el servicio ideal según el tipo de textil, estado y nivel de suciedad.',
  },
  {
    number: '03',
    title: 'Agendamos',
    description: 'Coordinamos una visita según disponibilidad y zona de atención.',
  },
  {
    number: '04',
    title: 'Limpiamos',
    description: 'Realizamos una limpieza profesional enfocada en buen resultado y cuidado del material.',
  },
]

export default function Home() {
  return (
    <main>
      <section 
        className="relative overflow-hidden h-[600px] bg-gradient-to-r from-sky-600 to-cyan-500 flex items-center justify-center"
      >
        {/* Imagen de fondo: <picture> con WebP first */}
        <picture className="absolute inset-0 w-full h-full block">
          <source type="image/webp" srcSet={heroImageVariants.webp1600} />
          <source type="image/jpeg" srcSet={heroImageVariants.jpg1600} />
          <img src={heroImageVariants.jpg1600} alt="Limpieza profesional de sillones, alfombras y colchones" className="absolute inset-0 w-full h-full object-cover" />
        </picture>

        {/* Overlay con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
          <div className="max-w-2xl">
            <p className="mb-4 inline-block rounded-full bg-sky-600/90 backdrop-blur-sm px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-lg">
              ✓ Limpieza textil profesional
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg mb-4">
              Renueva tus espacios con limpieza profesional
            </h1>

            <p className="text-base md:text-lg leading-7 text-white/90 drop-shadow mb-8 max-w-lg">
              Recuperamos sillones, alfombras, colchones y tapices con resultados visibles y atención a domicilio.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contacto"
                className="inline-block rounded-lg bg-sky-600 hover:bg-sky-700 px-6 md:px-8 py-3 md:py-4 font-semibold text-white shadow-lg transition transform hover:scale-105 text-sm md:text-base"
              >
                Solicitar cotización
              </Link>

              <Link
                to="/servicios"
                className="inline-block rounded-lg border-2 border-white bg-transparent hover:bg-white/10 px-6 md:px-8 py-3 md:py-4 font-semibold text-white transition text-sm md:text-base"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </div>

        {/* Razones en el lado inferior derecho */}
        <div className="absolute bottom-6 right-6 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-sm">
          {reasons.slice(0, 4).map((item) => (
            <div key={item} className="rounded-lg bg-white/95 backdrop-blur-sm p-3 md:p-4 shadow-lg">
              <p className="text-xs md:text-sm font-semibold text-slate-800 flex items-center gap-2">
                <span className="text-sky-600 text-lg">✓</span> {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Servicios
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Soluciones pensadas para tus espacios
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Servicios de limpieza textil para mejorar higiene, presentación y frescura en distintos tipos de superficies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const serviceImages = [sofaImageVariants, carpetImageVariants, null, null, null, null]
            return (
              <article
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-white overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {serviceImages[index] ? (
                  <picture>
                    <source type="image/webp" srcSet={serviceImages[index].webp800} />
                    <source type="image/jpeg" srcSet={serviceImages[index].jpg800} />
                    <img
                      src={serviceImages[index].jpg800}
                      alt={service.title}
                      className="w-full h-48 object-cover bg-gradient-to-br from-cyan-100 to-sky-100"
                      loading="lazy"
                    />
                  </picture>
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-100 to-sky-100" />
                )}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div className="rounded-[2rem] overflow-hidden shadow-lg">
            <picture>
              <source type="image/webp" srcSet={beforeAfterImageVariants.webp1600} />
              <source type="image/jpeg" srcSet={beforeAfterImageVariants.jpg1600} />
              <img src={beforeAfterImageVariants.jpg1600} alt="Antes y después de limpieza" className="w-full h-auto" />
            </picture>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Por qué elegirnos
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Una atención enfocada en confianza, orden y buena presentación
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              Queremos que cada servicio transmita profesionalismo desde el primer contacto hasta el resultado final, con una experiencia clara y una imagen cuidada.
            </p>

            <div className="mt-8 grid gap-5">
              {[
                'Atención clara y cercana',
                'Servicio profesional a domicilio',
                'Enfoque en limpieza profunda',
                'Buena imagen y resultados visibles',
              ].map((item) => (
                <div key={item} className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <p className="font-semibold text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Cómo trabajamos
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Un proceso simple y profesional
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-100">
              <p className="text-sm font-bold tracking-[0.2em] text-sky-700">{step.number}</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-[2.5rem] bg-gradient-to-r from-sky-700 to-cyan-500 px-8 py-14 text-white shadow-xl md:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
            Contacto
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold md:text-4xl">
            Haz que tus espacios se vean más limpios, frescos y renovados
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-cyan-50">
            Escríbenos para solicitar una cotización y conocer el servicio ideal para tu sillón, alfombra, colchón o tapiz.
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-semibold text-sky-700 transition hover:bg-slate-100"
          >
            Quiero cotizar
          </Link>
        </div>
      </section>
    </main>
  )
}