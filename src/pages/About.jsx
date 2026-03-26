import { Link } from 'react-router-dom'
import { equipmentImageVariants } from '../assets/images'

export default function About() {
  const values = [
    {
      title: 'Profesionalismo',
      description: 'Un equipo capacitado en diferentes textiles y técnicas de limpieza especializada.'
    },
    {
      title: 'Confianza',
      description: 'Atención clara, honesta y enfocada en dar seguridad desde el primer contacto.'
    },
    {
      title: 'Resultados',
      description: 'Transformaciones visibles en cada servicio con limpieza profunda y cuidadosa.'
    },
    {
      title: 'Cuidado',
      description: 'Tratamientos especializados adaptados a cada tipo de material y estado.'
    },
  ]

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <h1 className="text-5xl font-bold text-slate-900">Sobre EsencialClean</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            EsencialClean nace para entregar una limpieza textil profesional, confiable y orientada a resultados visibles. Creemos que cada textil merece atención especializada y que la limpieza debe transformar no solo la apariencia, sino también la sensación de frescura en tus espacios.
          </p>
        </div>

        <div className="rounded-[2rem] overflow-hidden shadow-lg mb-16">
          <picture>
            <source type="image/webp" srcSet={equipmentImageVariants.webp1600} />
            <img src={equipmentImageVariants.webp1600} alt="Equipos profesionales" className="responsive-image responsive-image-max" />
          </picture>
        </div>

        <div className="grid md:grid-cols-2 gap-12 py-12 border-y border-slate-200">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Nuestra misión</h2>
            <p className="text-lg leading-8 text-slate-600">
              Facilitar el cuidado de tus textiles con un servicio profesional a domicilio que ofrezca resultados visibles, transmita confianza y devuelva la frescura a tus espacios. Queremos ser tu aliado en mantener tus muebles limpios, al cuidado de especialistas.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Nuestros valores</h2>
            <p className="text-lg leading-8 text-slate-600">
              Trabajamos con profesionalismo en cada servicio, desde la evaluación inicial hasta el resultado final. Cada cliente merece atención personalizada, procesos claros y un equipo comprometido con la excelencia en la limpieza textil.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Lo que nos define</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[1.5rem] bg-white p-8 shadow-sm ring-1 ring-slate-100"
              >
                <div className="w-12 h-12 rounded-full bg-sky-100 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2.5rem] bg-gradient-to-r from-sky-700 to-cyan-500 px-12 py-14 text-white text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">¿Listo para renovar tus textiles?</h2>
          <p className="max-w-2xl mx-auto leading-8 text-cyan-50 mb-8">
            Contáctanos para una cotización personalizada. Te ayudaremos a recuperar la frescura de tus sillones, alfombras, colchones y más.
          </p>
          <Link
            to="/contacto"
            className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-sky-700 transition hover:bg-slate-100"
          >
            Solicitar cotización
          </Link>
        </div>
      </section>
    </main>
  )
}