"use client"
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

const services = [
  { title: 'Desarrollo de Software y Aplicaciones', href: '/servicios/desarrollo', description: 'Apps web, móviles y sistemas empresariales' },
  { title: 'Consultoría y Transformación Digital', href: '/servicios/consultoria', description: 'Estrategia digital y procesos optimizados' },
  { title: 'Marketing Digital y E‑commerce', href: '/servicios/marketing-digital', description: 'Posicionamiento digital y ventas online' },
  { title: 'Comercialización y Distribución de Software', href: '/servicios/comercializacion', description: 'Estrategias de distribución y licenciamiento' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-bgBase/70 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-xl">
          <span className="text-white">Nexa</span> <span className="text-brand-500">Innovate</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              onBlur={() => setTimeout(() => setOpen(false), 150)}
              className="flex items-center gap-1 text-sm text-textMuted hover:text-white focus:outline-none transition-colors"
              aria-haspopup="true"
              aria-expanded={open}
            >
              Nuestros Servicios <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && (
              <div className="absolute left-0 mt-3 w-[720px] grid grid-cols-1 lg:grid-cols-2 gap-2 p-4 rounded-2xl bg-bgSoft/95 backdrop-blur shadow-xl border border-white/10">
                {services.map((s) => (
                  <Link 
                    key={s.href} 
                    href={s.href as any} 
                    className="p-4 rounded-xl hover:bg-white/5 text-sm transition-colors group"
                    onClick={() => setOpen(false)}
                  >
                    <div className="font-medium text-textPrimary group-hover:text-white transition-colors">{s.title}</div>
                    <div className="text-xs text-textMuted mt-1">{s.description}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/#como-trabajamos" className="text-sm text-textMuted hover:text-white transition-colors">Cómo trabajamos</Link>
          <Link href="/#proyectos" className="text-sm text-textMuted hover:text-white transition-colors">Proyectos</Link>
          <Link href="/sobre-nosotros" className="text-sm text-textMuted hover:text-white transition-colors">Sobre nosotros</Link>
          <Link href="/blog" className="text-sm text-textMuted hover:text-white transition-colors">Blog</Link>
          <Link href="/contacto" className="text-sm text-textMuted hover:text-brand-400 transition-colors">Contacto</Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="px-4 py-2 rounded-full text-sm text-textMuted hover:text-white transition-colors">Iniciar Sesión</Link>
          <Link href="/cotizar" className="px-4 py-2 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-sm transition-colors">Cotizar Proyecto</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-bgBase/95 backdrop-blur">
          <div className="px-4 py-4 space-y-4">
            {/* Services Section */}
            <div>
              <div className="text-sm font-medium text-white mb-3">Servicios</div>
              <div className="space-y-2 pl-4">
                {services.map((s) => (
                  <Link 
                    key={s.href} 
                    href={s.href as any} 
                    className="block py-2 text-sm text-textMuted hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Links */}
            <div className="space-y-2">
              <Link 
                href="/#como-trabajamos" 
                className="block py-2 text-sm text-textMuted hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Cómo trabajamos
              </Link>
              <Link 
                href="/#proyectos" 
                className="block py-2 text-sm text-textMuted hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Proyectos
              </Link>
              <Link 
                href="/sobre-nosotros" 
                className="block py-2 text-sm text-textMuted hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Sobre nosotros
              </Link>
              <Link 
                href="/blog" 
                className="block py-2 text-sm text-textMuted hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contacto" 
                className="block py-2 text-sm text-textMuted hover:text-brand-400 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Contacto
              </Link>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-white/5 space-y-2">
              <Link 
                href="/login" 
                className="block w-full py-3 px-4 text-center rounded-xl border border-white/10 text-sm text-textMuted hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Iniciar Sesión
              </Link>
              <Link 
                href="/cotizar" 
                className="block w-full py-3 px-4 text-center rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Cotizar Proyecto
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
