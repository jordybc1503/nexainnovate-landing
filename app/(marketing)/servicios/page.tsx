import Section from '@/components/ui/Section'
import Link from 'next/link'

const services = [
  { slug: 'desarrollo', title: 'Desarrollo de Software y Aplicaciones' },
  { slug: 'consultoria', title: 'Consultoría y Transformación Digital' },
  { slug: 'marketing-digital', title: 'Marketing Digital y E‑commerce' },
  { slug: 'comercializacion', title: 'Comercialización y Distribución de Software' }
]

export const revalidate = 3600

export default function Page() {
  return (
    <Section>
      <h1 className="text-3xl font-display mb-6">Nuestros Servicios</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(s => (
          <Link key={s.slug} href={`/servicios/${s.slug}`} className="p-5 rounded-2xl bg-bgSoft border border-white/10 hover:border-white/20">
            <div className="font-medium">{s.title}</div>
            <p className="text-sm text-textMuted">Conoce nuestro desglose de capacidades.</p>
          </Link>
        ))}
      </div>
    </Section>
  )
}

