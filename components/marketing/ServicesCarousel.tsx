"use client"
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { useRef } from 'react'

const items = [
  { icon: 'Code2', title: 'Desarrollo de Software y Aplicaciones', desc: 'Web, mobile y plataformas a medida.' },
  { icon: 'Workflow', title: 'Consultoría y Transformación Digital', desc: 'Estrategia, roadmap y adopción tecnológica.' },
  { icon: 'ShoppingCart', title: 'Marketing Digital y Comercio Electrónico', desc: 'Performance, contenido y tiendas online.' },
  { icon: 'Boxes', title: 'Comercialización y Distribución de Software', desc: 'Alianzas y canales para escalar.' }
]

export default function ServicesCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = (dx: number) => ref.current?.scrollBy({ left: dx, behavior: 'smooth' })
  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-display">Nuestros servicios</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll(-320)} className="px-3 py-1 rounded-full bg-white/5">◀</button>
          <button onClick={() => scroll(320)} className="px-3 py-1 rounded-full bg-white/5">▶</button>
        </div>
      </div>
      <div ref={ref} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
        {items.map((it) => (
          <Card key={it.title} className="min-w-[280px] max-w-[320px] p-5 snap-start">
            <Icon name={it.icon as any} className="w-6 h-6 text-brand-400" />
            <div className="mt-3 font-medium">{it.title}</div>
            <p className="text-sm text-textMuted mt-1">{it.desc}</p>
            <div className="mt-4"><Button className="bg-brand-600 hover:bg-brand-700">Escríbenos</Button></div>
          </Card>
        ))}
      </div>
    </div>
  )
}

