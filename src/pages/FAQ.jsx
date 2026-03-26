export default function FAQ() {
  const faqs = [
    {
      question: '¿Cómo solicito una cotización?',
      answer: 'Puedes contactarnos por WhatsApp o a través de nuestro formulario de contacto. Te pediremos fotos del textil y detalles para darte una cotización precisa.'
    },
    {
      question: '¿Trabajan a domicilio?',
      answer: 'Sí, todos nuestros servicios se realizan a domicilio en la zona de atención. Coordinamos la visita según tu disponibilidad.'
    },
    {
      question: '¿Qué tipos de telas limpian?',
      answer: 'Trabajamos con una amplia variedad de telas: cuero, tela, microfibra, algodón, lana, entre otros. Evaluamos cada material para usar el tratamiento adecuado.'
    },
    {
      question: '¿Cuánto tiempo toma el servicio?',
      answer: 'El tiempo varía según el tamaño y tipo de textil, pero generalmente entre 2-4 horas por pieza. Te informamos el tiempo estimado al cotizar.'
    },
    {
      question: '¿Ofrecen garantía en los servicios?',
      answer: 'Sí, ofrecemos garantía en nuestros trabajos. Si no estás satisfecho con el resultado, realizamos correcciones sin costo adicional.'
    },
    {
      question: '¿Qué productos utilizan?',
      answer: 'Utilizamos productos profesionales de alta calidad, biodegradables y seguros para telas. No dañan los materiales ni la salud.'
    }
  ]

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-900">Preguntas frecuentes</h1>
        <p className="mt-4 text-lg text-slate-600">
          Resolvemos tus dudas sobre nuestros servicios de limpieza textil.
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
            <p className="text-slate-600 leading-7">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-slate-600 mb-6">¿Tienes otra pregunta? Contáctanos directamente.</p>
        <a
          href="https://wa.me/1234567890"
          className="inline-block rounded-full bg-sky-600 px-8 py-3 font-semibold text-white hover:bg-sky-700 transition"
        >
          Escribir por WhatsApp
        </a>
      </div>
    </main>
  )
}