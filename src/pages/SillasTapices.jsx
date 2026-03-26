import { Link } from 'react-router-dom'
import { chairsImageVariants, beforeAfterImageVariants } from '../assets/images'

export default function SillasTapices() {
  const includes = [
    'Limpieza selectiva de cojines y respaldos',
    'Tratamiento de manchas en telas',
    'Cuidado de cremalleras y costuras',
    'Protección de materiales delicados',
    'Secado rápido y uniforme'
  ]

  const benefits = [
    'Recuperación de la presentación original',
    'Mejora de la higiene en áreas de comedor',
    'Prevención de desgaste prematuro',
    'Ambiente más elegante y limpio',
    'Mayor durabilidad de los tapices'
  ]

  const steps = [
    { number: '01', title: 'Evaluación', description: 'Inspeccionamos el estado de sillas y tipo de tapiz.' },
    { number: '02', title: 'Preparación', description: 'Protegemos áreas sensibles y preparamos equipos.' },
    { number: '03', title: 'Limpieza', description: 'Aplicamos tratamientos específicos según el material.' },
    { number: '04', title: 'Acabado', description: 'Secado y protección final para mantener el resultado.' }
  ]

  const faqs = [
    {
      question: '¿Trabajan con sillas de comedor?',
      answer: 'Sí, limpiamos sillas de tela, cuero y materiales mixtos de comedores y salas.'
    },
    {
      question: '¿Cuánto tiempo toma por silla?',
      answer: 'Aproximadamente 30-45 minutos por silla, dependiendo del estado.'
    },
    {
      question: '¿Pueden limpiar juegos completos?',
      answer: 'Sí, ofrecemos descuentos para limpieza de juegos completos de comedor.'
    }
  ]

  return (
    <main>
      <section className="relative overflow-hidden min-h-[520px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[700px] bg-gradient-to-r from-sky-600 to-cyan-500 flex items-center justify-center">
        <picture className="absolute inset-0 w-full h-full block">
          <source type="image/webp" srcSet={chairsImageVariants.webp1600} />
          <img src={chairsImageVariants.webp1600} alt="Limpieza profesional de sillas y tapices" className="absolute inset-0 w-full h-full object-cover" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Limpieza de Sillas y Tapices</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">Recupera la elegancia y limpieza de tus sillas y tapices con cuidado profesional.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Servicio especializado para sillas y tapices</h2>
          <p className="text-lg leading-8 text-slate-600 mb-6">
            Las sillas de comedor y tapices decorativos requieren atención especializada para mantener su apariencia elegante.
            Nuestro servicio de limpieza selectiva elimina manchas y suciedad sin dañar los materiales delicados.
          </p>
          <p className="text-lg leading-8 text-slate-600">
            Trabajamos con técnicas suaves pero efectivas, adaptadas a cada tipo de tapiz para garantizar resultados impecables.
          </p>
        </div>
      </section>

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

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Beneficios para tu mobiliario</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <p className="font-semibold text-slate-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Proceso de limpieza cuidadoso</h2>
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

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Resultados visibles</h2>
          <div className="rounded-[2rem] overflow-hidden shadow-lg">
            <picture>
              <source type="image/webp" srcSet={beforeAfterImageVariants.webp1600} />
              <img src={beforeAfterImageVariants.webp1600} alt="Antes y después de limpieza de sillas y tapices" className="responsive-image" />
            </picture>
          </div>
        </div>
      </section>

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

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-sky-700 to-cyan-500 px-8 py-14 text-white shadow-xl md:px-14">
            <h2 className="text-3xl font-bold mb-4">¿Listo para renovar tus sillas?</h2>
            <p className="max-w-2xl mx-auto leading-8 text-cyan-50 mb-8">
              Solicita una cotización y recupera la elegancia de tus tapices.
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