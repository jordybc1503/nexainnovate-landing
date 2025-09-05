import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const steps = [
  { n: 1, title: 'Contacto', desc: 'Conversemos sobre tu necesidad y contexto.' },
  { n: 2, title: 'Análisis', desc: 'Definimos alcance, riesgos y plan de acción.' },
  { n: 3, title: 'Presupuesto', desc: 'Te enviamos una propuesta clara y honesta.' }
]

export default function Steps() {
  return (
    <Section id="como-trabajamos">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-display">3 Pasos</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {steps.map(s => (
          <Card key={s.n} className="p-6">
            <div className="text-brand-400 font-display text-sm">Paso {s.n}</div>
            <div className="mt-2 font-medium">{s.title}</div>
            <p className="text-sm text-textMuted mt-1">{s.desc}</p>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/cotizar"><Button>Hablemos</Button></Link>
      </div>
    </Section>
  )
}

