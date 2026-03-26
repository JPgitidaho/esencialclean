import { Link } from 'react-router-dom'
import { mattressImageVariants, beforeAfterImageVariants } from '../assets/images'

export default function Colchones() {
  const includes = [
    'Sanitización profunda contra ácaros',
    'Eliminación de manchas y olores',
    'Desodorización completa',
    'Tratamiento anti-alérgico',
    'Secado controlado'
  ]

  const benefits = [
    'Mejora significativa de la higiene',
    'Reducción de alergias y problemas respiratorios',
    'Eliminación de olores acumulados',
    'Mayor durabilidad del colchón',
    'Sueño más saludable'
  ]

  const steps = [
    { number: '01', title: 'Evaluación', description: 'Revisamos el tipo de colchón y nivel de suciedad.' },
    { number: '02', title: 'Preparación', description: 'Protegemos el área y preparamos equipos especializados.' },
    { number: '03', title: 'Limpieza', description: 'Aplicamos tratamientos sanitizantes y limpiadores.' },
    { number: '04', title: 'Secado', description: 'Secado profesional para evitar humedad.' }
  ]

  const faqs = [
    {
      question: '¿Es seguro limpiar colchones?',
      answer: 'Sí, usamos métodos profesionales que no dañan el colchón y eliminan ácaros de forma segura.'
    },
    {
      question: '¿Cuánto tiempo toma?',
      answer: 'Aproximadamente 2-4 horas, dependiendo del tamaño del colchón.'
    },
    {
      question: '¿Con qué frecuencia se recomienda?',
      answer: 'Cada 6-12 meses, o cuando notes olores o manchas persistentes.'
    }
  ]

  return (
    <main>
      <section className="relative overflow-hidden min-h-[520px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[700px] bg-gradient-to-r from-sky-600 to-cyan-500 flex items-center justify-center">
        <picture className="absolute inset-0 w-full h-full block">
          <source type="image/webp" srcSet={mattressImageVariants.webp1600} />
          <img src={mattressImageVariants.webp1600} alt="Limpieza profesional de colchones" className="absolute inset-0 w-full h-full object-cover" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Limpieza de Colchones</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">Elimina ácaros, manchas y olores con tratamientos sanitizantes profesionales.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Servicio especializado de limpieza de colchones</h2>
          <p className="text-lg leading-8 text-slate-600 mb-6">
            Los colchones acumulan polvo, ácaros, sudor y manchas que afectan la higiene y pueden causar alergias.
            Nuestro servicio de limpieza profunda elimina estos contaminantes y mejora la calidad del sueño.
          </p>
          <p className="text-lg leading-8 text-slate-600">
            Utilizamos equipos de vapor y productos sanitizantes certificados para garantizar un resultado higiénico y duradero.
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
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Beneficios para tu salud</h2>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Proceso de limpieza</h2>
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
              <img src={beforeAfterImageVariants.webp1600} alt="Antes y después de limpieza de colchones" className="responsive-image" />
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
            <h2 className="text-3xl font-bold mb-4">¿Listo para un colchón más saludable?</h2>
            <p className="max-w-2xl mx-auto leading-8 text-cyan-50 mb-8">
              Solicita una cotización y mejora la higiene de tu colchón.
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