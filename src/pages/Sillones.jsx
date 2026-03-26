import { Link } from 'react-router-dom'
import { sofaImageVariants, beforeAfterImageVariants } from '../assets/images'

export default function Sillones() {
  const includes = [
    'Extracción profunda de suciedad y manchas',
    'Eliminación de olores acumulados',
    'Protección especializada de telas',
    'Secado rápido y seguro',
    'Cuidado de cremalleras y costuras'
  ]

  const benefits = [
    'Recuperación de frescura y apariencia',
    'Mejora de higiene en áreas de uso diario',
    'Prevención de alergias por ácaros',
    'Aumento de la durabilidad de la tela',
    'Ambiente más saludable en el hogar'
  ]

  const steps = [
    { number: '01', title: 'Evaluación', description: 'Inspeccionamos el estado del sillón y tipo de tela.' },
    { number: '02', title: 'Preparación', description: 'Protegemos áreas sensibles y preparamos equipos.' },
    { number: '03', title: 'Limpieza', description: 'Aplicamos tratamientos especializados según la tela.' },
    { number: '04', title: 'Secado', description: 'Secado controlado para evitar daños.' }
  ]

  const faqs = [
    {
      question: '¿Qué tipos de sillones limpian?',
      answer: 'Trabajamos con sillones de tela, cuero, microfibra y materiales mixtos.'
    },
    {
      question: '¿Cuánto tiempo toma limpiar un sillón?',
      answer: 'Generalmente 2-3 horas, dependiendo del tamaño y estado.'
    },
    {
      question: '¿Es seguro para niños y mascotas?',
      answer: 'Sí, usamos productos biodegradables y seguros.'
    }
  ]

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[520px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[700px] bg-gradient-to-r from-sky-600 to-cyan-500 flex items-center justify-center">
        <picture className="absolute inset-0 w-full h-full block">
          <source type="image/webp" srcSet={sofaImageVariants.webp1600} />
          <img src={sofaImageVariants.webp1600} alt="Limpieza profesional de sillones" className="absolute inset-0 w-full h-full object-cover" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Limpieza de Sillones</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">Recuperamos la frescura y apariencia de tus sillones con tratamientos profesionales especializados.</p>
        </div>
      </section>

      {/* Introducción */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Servicio profesional de limpieza de sillones</h2>
          <p className="text-lg leading-8 text-slate-600 mb-6">
            Nuestros sillones son parte fundamental de la comodidad del hogar, pero acumulan suciedad, olores y desgaste con el tiempo.
            Ofrecemos un servicio de limpieza profunda que recupera su apariencia original y mejora la higiene.
          </p>
          <p className="text-lg leading-8 text-slate-600">
            Utilizamos equipos especializados y productos de alta calidad, adaptados a cada tipo de tela para garantizar resultados duraderos.
          </p>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">¿Qué incluye el servicio?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includes.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-sky-600 text-xl font-bold">✓</span>
                <span className="text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Beneficios de la limpieza profesional</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <p className="font-semibold text-slate-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Cómo realizamos la limpieza</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Antes y Después */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Resultados visibles</h2>
          <div className="rounded-[2rem] overflow-hidden shadow-lg">
            <picture>
              <source type="image/webp" srcSet={beforeAfterImageVariants.webp1600} />
              <img src={beforeAfterImageVariants.webp1600} alt="Antes y después de limpieza de sillones" className="responsive-image" />
            </picture>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-sky-700 to-cyan-500 px-8 py-14 text-white shadow-xl md:px-14">
            <h2 className="text-3xl font-bold mb-4">¿Listo para renovar tu sillón?</h2>
            <p className="max-w-2xl mx-auto leading-8 text-cyan-50 mb-8">
              Solicita una cotización personalizada y recupera la frescura de tu sillón.
            </p>
            <Link
              to="/contacto"
              className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-sky-700 hover:bg-slate-100 transition"
            >
              Solicitar cotización
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}