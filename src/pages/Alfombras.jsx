import { Link } from 'react-router-dom'
import { carpetImageVariants, beforeAfterImageVariants } from '../assets/images'

export default function Alfombras() {
  const includes = [
    'Limpieza profunda de fibras',
    'Remoción de manchas difíciles',
    'Desodorización completa',
    'Secado técnico especializado',
    'Protección anti-manchas'
  ]

  const benefits = [
    'Eliminación de alérgenos y polvo acumulado',
    'Recuperación de colores originales',
    'Mayor durabilidad de la alfombra',
    'Ambiente más fresco y limpio',
    'Prevención de daños por humedad'
  ]

  const steps = [
    { number: '01', title: 'Evaluación', description: 'Analizamos el tipo de fibra y manchas presentes.' },
    { number: '02', title: 'Pre-tratamiento', description: 'Aplicamos tratamientos específicos para manchas.' },
    { number: '03', title: 'Limpieza', description: 'Lavado profundo con equipos especializados.' },
    { number: '04', title: 'Secado', description: 'Secado controlado para evitar daños.' }
  ]

  const faqs = [
    {
      question: '¿Qué tipos de alfombras limpian?',
      answer: 'Trabajamos con alfombras de lana, sintéticas, naturales y de todos los tamaños.'
    },
    {
      question: '¿Pueden quitar manchas difíciles?',
      answer: 'Sí, tenemos tratamientos especializados para vino, café, grasa y otros tipos de manchas.'
    },
    {
      question: '¿Cuánto tiempo de secado?',
      answer: 'Generalmente 4-6 horas con nuestros equipos de secado profesional.'
    }
  ]

  return (
    <main>
      <section className="relative overflow-hidden min-h-[520px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[700px] bg-gradient-to-r from-sky-600 to-cyan-500 flex items-center justify-center">
        <picture className="absolute inset-0 w-full h-full block">
          <source type="image/webp" srcSet={carpetImageVariants.webp1600} />
          <img src={carpetImageVariants.webp1600} alt="Limpieza profesional de alfombras" className="absolute inset-0 w-full h-full object-cover" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Limpieza de Alfombras</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">Elimina suciedad profunda, manchas y olores para renovar tus alfombras.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Servicio profesional de limpieza de alfombras</h2>
          <p className="text-lg leading-8 text-slate-600 mb-6">
            Las alfombras acumulan polvo, suciedad y manchas que se incrustan en las fibras con el tiempo.
            Nuestro servicio de limpieza especializada recupera la belleza y frescura original de tus alfombras.
          </p>
          <p className="text-lg leading-8 text-slate-600">
            Utilizamos técnicas de extracción profunda y productos específicos para cada tipo de fibra, garantizando resultados duraderos.
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

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Proceso de limpieza especializado</h2>
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
              <img src={beforeAfterImageVariants.webp1600} alt="Antes y después de limpieza de alfombras" className="responsive-image" />
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
            <h2 className="text-3xl font-bold mb-4">¿Listo para renovar tus alfombras?</h2>
            <p className="max-w-2xl mx-auto leading-8 text-cyan-50 mb-8">
              Solicita una cotización y recupera la belleza de tus alfombras.
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