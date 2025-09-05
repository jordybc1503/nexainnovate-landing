"use client"
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const services = [
  { title: 'Desarrollo de Software y Aplicaciones', href: '/servicios/desarrollo' },
  { title: 'Consultoría y Transformación Digital', href: '/servicios/consultoria' },
  { title: 'Marketing Digital y E‑commerce', href: '/servicios/marketing-digital' },
  { title: 'Comercialización y Distribución de Software', href: '/servicios/comercializacion' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-bgBase/70 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-xl">
          <span className="text-white">Nexa</span> <span className="text-brand-500">Innovate</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              onBlur={() => setOpen(false)}
              className="flex items-center gap-1 text-sm text-textMuted hover:text-white focus:outline-none"
              aria-haspopup="true"
              aria-expanded={open}
            >
              Nuestros Servicios <ChevronDown className="w-4 h-4" />
            </button>
            {open && (
              <div className="absolute left-0 mt-3 w-[720px] grid grid-cols-2 lg:grid-cols-4 gap-3 p-4 rounded-2xl bg-bgSoft shadow-card border border-white/5">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="p-3 rounded-xl hover:bg-white/5 text-sm text-textPrimary">
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="#como-trabajamos" className="text-sm text-textMuted hover:text-white">Cómo trabajamos</Link>
          <Link href="#proyectos" className="text-sm text-textMuted hover:text-white">Proyectos</Link>
          <Link href="#portafolio" className="text-sm text-textMuted hover:text-white">Portafolio</Link>
          <Link href="/sobre-nosotros" className="text-sm text-textMuted hover:text-white">Sobre nosotros</Link>
          <Link href="/blog" className="text-sm text-textMuted hover:text-white">Blog</Link>
          <Link href="/contacto" className="text-sm text-textMuted hover:text-brand-400">Contacto</Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="px-4 py-2 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-sm">Iniciar Sesión</Link>
          <Link href="/register" className="px-4 py-2 rounded-full bg-brand-500 hover:bg-brand-600 text-white text-sm">Regístrate</Link>
        </div>
      </div>
    </header>
  )
}
