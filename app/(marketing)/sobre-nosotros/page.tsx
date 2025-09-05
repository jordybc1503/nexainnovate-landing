import Section from '@/components/ui/Section'
import Image from 'next/image'

export const revalidate = 3600

export default function Page() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-display mb-4">Nuestra historia</h1>
          <p className="text-textMuted">Nexa Innovate nace con la visión de acompañar a empresas en su transformación digital, combinando estrategia, diseño y tecnología para crear productos y experiencias memorables.</p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="p-4 rounded-2xl bg-white/5">
              <div className="font-medium">Visión</div>
              <p className="text-sm text-textMuted">Ser el socio tecnológico preferido en LATAM.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5">
              <div className="font-medium">Misión</div>
              <p className="text-sm text-textMuted">Impulsar negocios con innovación y excelencia técnica.</p>
            </div>
          </div>
        </div>
        <div className="relative h-72 md:h-full rounded-2xl overflow-hidden">
          <Image src="/images/about.jpg" alt="Equipo Nexa" fill className="object-cover" />
        </div>
      </div>
    </Section>
  )
}

