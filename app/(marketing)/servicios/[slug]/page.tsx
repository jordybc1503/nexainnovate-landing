import Section from '@/components/ui/Section'
import { notFound } from 'next/navigation'

const details: Record<string, { title: string, bullets: string[] }> = {
  desarrollo: { title: 'Desarrollo de Software y Aplicaciones', bullets: ['Web apps (Next.js, React)', 'APIs (Node.js)', 'Mobile (React Native)', 'DevOps & CI/CD'] },
  consultoria: { title: 'Consultoría y Transformación Digital', bullets: ['Discovery & Roadmaps', 'Modernización de sistemas', 'Cloud & seguridad', 'Gobierno de datos'] },
  'marketing-digital': { title: 'Marketing Digital y E‑commerce', bullets: ['SEO y Contenido', 'Ads y Performance', 'E‑commerce (Headless)', 'CRM & Automatización'] },
  comercializacion: { title: 'Comercialización y Distribución de Software', bullets: ['Alianzas y partnerships', 'Canales y distribución', 'Enablement', 'Go‑to‑Market'] }
}

export const revalidate = 3600

export default function Page({ params }: { params: { slug: string } }) {
  const data = details[params.slug]
  if (!data) return notFound()
  return (
    <Section>
      <h1 className="text-3xl font-display mb-4">{data.title}</h1>
      <h2 className="text-lg text-textMuted mb-2">¿Qué incluye?</h2>
      <ul className="list-disc pl-6 space-y-1">
        {data.bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
      <div className="mt-8 text-sm text-textMuted">FAQ disponible próximamente.</div>
    </Section>
  )
}

