import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'

const highlights = [
  { icon: 'Sparkles', title: 'Innovación', desc: 'Soluciones modernas basadas en mejores prácticas.' },
  { icon: 'Cpu', title: 'Tecnología', desc: 'Stack robusto y escalable para tu negocio.' },
  { icon: 'Users', title: 'Resultados', desc: 'Enfoque en impacto y métricas de negocio.' }
]

export default function ValueBlock() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-display">Construimos soluciones tecnológicas innovadoras que impulsan tu transformación digital</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {highlights.map(h => (
          <Card key={h.title} className="p-5">
            <Icon name={h.icon as any} className="w-6 h-6 text-brand-400" />
            <div className="mt-3 font-medium">{h.title}</div>
            <p className="text-sm text-textMuted mt-1">{h.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  )}

