import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative">
      <div className="w-full h-[520px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-700/30 via-bgSoft to-bgBase" />
      <div className="absolute inset-0 hero-overlay" />
      <Section className="absolute inset-0 flex items-center">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            Diseñamos el futuro digital de tu empresa con innovación y tecnología inteligente
          </h1>
          <div className="mt-6 flex gap-3">
            <Link href="/cotizar"><Button>Hablemos</Button></Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
