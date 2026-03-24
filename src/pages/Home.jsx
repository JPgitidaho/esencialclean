import { Link } from 'react-router-dom'

const services = [
  'Limpieza de sillones',
  'Limpieza de alfombras',
  'Limpieza de colchones',
  'Limpieza de sillas',
  'Limpieza de tapices',
  'Desodorización y sanitización',
]

const benefits = [
  'Atención a domicilio',
  'Limpieza profunda',
  'Cuidado profesional de las telas',
  'Resultados visibles',
]

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-br from-cyan-50 via-white to-sky-100">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Limpieza textil profesional
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Renueva tus espacios con limpieza profesional
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              En EsencialClean dejamos sillones, alfombras, colchones y tapices más limpios, frescos y renovados.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contacto"
                className="rounded-full bg-sky-600 px-6 py-3 font-semibold text-white"
              >
                Solicitar cotización
              </Link>
              <Link
                to="/servicios"
                className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700"
              >
                Ver servicios
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-5">
                  <p className="font-semibold text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Servicios
          </p>
          <h2 className="mt-3 text-3xl font-bold">Soluciones para cada espacio</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{service}</h3>
              <p className="mt-3 text-slate-600">
                Servicio profesional con enfoque en limpieza profunda, cuidado y buena presentación.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Cómo trabajamos
            </p>
            <h2 className="mt-3 text-3xl font-bold">Proceso simple y claro</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {['Nos escribes', 'Evaluamos', 'Agendamos', 'Limpiamos'].map((step, index) => (
              <div key={step} className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-sky-700">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] bg-sky-700 px-8 py-14 text-white md:px-14">
          <h2 className="text-3xl font-bold">¿Quieres una cotización para tu limpieza?</h2>
          <p className="mt-4 max-w-2xl text-sky-100">
            Escríbenos y revisamos tu caso para ayudarte con una atención clara y profesional.
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-sky-700"
          >
            Ir a contacto
          </Link>
        </div>
      </section>
    </main>
  )
}