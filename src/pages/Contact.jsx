import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Nueva solicitud de contacto - ${form.service || 'Consulta general'}`)
    const body = encodeURIComponent(
      `Nombre: ${form.name}
Correo: ${form.email}
Teléfono: ${form.phone}
Servicio: ${form.service}

Mensaje:
${form.message}`
    )

    window.location.href = `mailto:esencialcleanpro@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-900">Contacto</h1>
        <p className="mt-4 mx-auto max-w-2xl text-slate-600">
          Escríbenos por WhatsApp o completa el formulario para solicitar tu cotización.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl bg-slate-50 p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">Información de contacto</h2>
          <p className="mt-3 text-slate-600">
            Estamos listos para ayudarte con la limpieza de sillones, colchones, alfombras y tapices.
          </p>

          <div className="mt-8 space-y-5">
            <div className="rounded-2xl bg-white p-5 border border-slate-200">
              <p className="text-sm font-semibold text-sky-600">Correo</p>
              <a
                href="mailto:esencialcleanpro@gmail.com"
                className="mt-1 block text-lg font-medium text-slate-900 hover:text-sky-600 transition"
              >
                esencialcleanpro@gmail.com
              </a>
            </div>

            <div className="rounded-2xl bg-white p-5 border border-slate-200">
              <p className="text-sm font-semibold text-sky-600">Teléfono</p>
              <a
                href="tel:56936274715"
                className="mt-1 block text-lg font-medium text-slate-900 hover:text-sky-600 transition"
              >
                +56 9 3627 4715
              </a>
            </div>

            <div className="rounded-2xl bg-white p-5 border border-slate-200">
              <p className="text-sm font-semibold text-sky-600">WhatsApp</p>
              <a
                href="https://wa.me/56936274715"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center rounded-xl bg-green-500 px-5 py-3 font-semibold text-white transition hover:bg-green-600"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200"
        >
          <h2 className="text-2xl font-bold text-slate-900">Envíanos un mensaje</h2>
          <p className="mt-3 text-slate-600">
            Completa este formulario y se abrirá tu correo con el mensaje listo para enviar.
          </p>

          <div className="mt-8 grid gap-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Correo
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500"
                placeholder="tucorreo@gmail.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Teléfono
              </label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500"
                placeholder="Tu número"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Servicio
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500"
              >
                <option value="">Selecciona un servicio</option>
                <option value="Limpieza de sillones">Limpieza de sillones</option>
                <option value="Limpieza de colchones">Limpieza de colchones</option>
                <option value="Limpieza de alfombras">Limpieza de alfombras</option>
                <option value="Sillas y tapices">Sillas y tapices</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Mensaje
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500"
                placeholder="Cuéntanos qué necesitas"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}