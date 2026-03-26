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
    description: 'Recuperamos frescura y apariencia en sillones de uso diario.',
    link: '/limpieza-de-sillones',
    image: sofaImageVariants,
  },
  {
    title: 'Limpieza de colchones',
    description: 'Mejoramos higiene con tratamiento profundo y cuidadoso.',
    link: '/limpieza-de-colchones',
    image: mattressImageVariants,
  },
  {
    title: 'Limpieza de alfombras',
    description: 'Eliminamos suciedad, olores y manchas para renovar espacios.',
    link: '/limpieza-de-alfombras',
    image: carpetImageVariants,
  },
  {
    title: 'Limpieza de sillas y tapices',
    description: 'Devolvemos limpieza a sillas de tela y superficies tapizadas.',
    link: '/limpieza-de-sillas-y-tapices',
    image: chairsImageVariants,
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
    description: 'Cuéntanos qué necesitas y envíanos fotos si quieres.',
  },
  {
    number: '02',
    title: 'Evaluamos',
    description: 'Revisamos el servicio ideal según tipo y estado.',
  },
  {
    number: '03',
    title: 'Agendamos',
    description: 'Coordinamos visita según disponibilidad.',
  },
  {
    number: '04',
    title: 'Limpiamos',
    description: 'Realizamos limpieza profesional enfocada en buen resultado.',
  },
]

const testimonials = [
  {
    name: 'María González',
    text: 'Excelente servicio, mi sillón quedó como nuevo. Muy profesionales y puntuales.',
  },
  {
    name: 'Carlos Rodríguez',
    text: 'La limpieza de alfombra superó mis expectativas. Recomiendo totalmente.',
  },
  {
    name: 'Ana López',
    text: 'Servicio rápido y de calidad. Mi colchón ahora se siente fresco y limpio.',
  },
]

const faqs = [
  {
    question: '¿Trabajan a domicilio?',
    answer: 'Sí, todos nuestros servicios se realizan a domicilio.',
  },
  {
    question: '¿Cuánto tiempo toma?',
    answer: 'Entre 2-4 horas por pieza, dependiendo del tamaño.',
  },
  {
    question: '¿Ofrecen garantía?',
    answer: 'Sí, garantizamos la satisfacción con nuestros trabajos.',
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          Limpieza Profesional de Textiles
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Recuperamos la frescura y apariencia de tus muebles tapizados con técnicas profesionales y productos especializados.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contacto"
            className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition"
          >
            Solicitar Cotización
          </Link>
          <Link
            to="/servicios"
            className="border border-sky-600 text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition"
          >
            Ver Servicios
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="service-card group">
                <div className="service-card-image">
                  <picture>
                    <source type="image/webp" srcSet={service.image.webp800} />
                    <img
                      src={service.image.webp800}
                      alt={service.title}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link
                    to={service.link}
                    className="service-card-link"
                  >
                    Más información
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">¿Por qué elegirnos?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sky-600 font-bold">{index + 1}</span>
                </div>
                <p className="font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestro Proceso</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-slate-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-slate-200 pb-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/preguntas-frecuentes"
              className="text-sky-600 font-medium hover:text-sky-700 transition"
            >
              Ver todas las preguntas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para renovar tus muebles?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contáctanos hoy y recibe una cotización personalizada
          </p>
          <Link
            to="/contacto"
            className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition"
          >
            Solicitar Cotización
          </Link>
        </div>
      </section>
    </div>
  )
}