"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Desarrollo de Software y Aplicaciones",
    href: "/servicios/desarrollo",
    description: "Apps web, móviles y sistemas empresariales",
  },
  {
    title: "Consultoría y Transformación Digital",
    href: "/servicios/consultoria",
    description: "Estrategia digital y procesos optimizados",
  },
  {
    title: "Marketing Digital y E‑commerce",
    href: "/servicios/marketing-digital",
    description: "Posicionamiento digital y ventas online",
  },
  {
    title: "Comercialización y Distribución de Software",
    href: "/servicios/comercializacion",
    description: "Estrategias de distribución y licenciamiento",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bgBase/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-display text-xl">
          <span className="text-white">Nexa</span>{" "}
          <span className="text-brand-500">Innovate</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <div className="relative">
            <button
              onClick={() => setOpen(v => !v)}
              onBlur={() => setTimeout(() => setOpen(false), 150)}
              className="flex items-center gap-1 text-sm text-textMuted transition-colors hover:text-white focus:outline-none"
              aria-haspopup="true"
              aria-expanded={open}
            >
              Nuestros Servicios{" "}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && (
              <div className="absolute left-0 mt-3 grid w-[720px] grid-cols-1 gap-2 rounded-2xl border border-white/10 bg-bgSoft/95 p-4 shadow-xl backdrop-blur lg:grid-cols-2">
                {services.map(s => (
                  <Link
                    key={s.href}
                    href={s.href as any}
                    className="group rounded-xl p-4 text-sm transition-colors hover:bg-white/5"
                    onClick={() => setOpen(false)}
                  >
                    <div className="font-medium text-textPrimary transition-colors group-hover:text-white">
                      {s.title}
                    </div>
                    <div className="mt-1 text-xs text-textMuted">
                      {s.description}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/#como-trabajamos"
            className="text-sm text-textMuted transition-colors hover:text-white"
          >
            Cómo trabajamos
          </Link>
          <Link
            href="/#proyectos"
            className="text-sm text-textMuted transition-colors hover:text-white"
          >
            Proyectos
          </Link>
          <Link
            href="/sobre-nosotros"
            className="text-sm text-textMuted transition-colors hover:text-white"
          >
            Sobre nosotros
          </Link>
          <Link
            href="/blog"
            className="text-sm text-textMuted transition-colors hover:text-white"
          >
            Blog
          </Link>
          <Link
            href="/contacto"
            className="text-sm text-textMuted transition-colors hover:text-brand-400"
          >
            Contacto
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-full px-4 py-2 text-sm text-textMuted transition-colors hover:text-white"
          >
            Iniciar Sesión
          </Link>
          <Link
            href="/cotizar"
            className="rounded-full bg-brand-600 px-4 py-2 text-sm text-white transition-colors hover:bg-brand-700"
          >
            Cotizar Proyecto
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 transition-colors hover:bg-white/5 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-bgBase/95 backdrop-blur md:hidden">
          <div className="space-y-4 px-4 py-4">
            {/* Services Section */}
            <div>
              <div className="mb-3 text-sm font-medium text-white">
                Servicios
              </div>
              <div className="space-y-2 pl-4">
                {services.map(s => (
                  <Link
                    key={s.href}
                    href={s.href as any}
                    className="block py-2 text-sm text-textMuted transition-colors hover:text-white"
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
                className="block py-2 text-sm text-textMuted transition-colors hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                Cómo trabajamos
              </Link>
              <Link
                href="/#proyectos"
                className="block py-2 text-sm text-textMuted transition-colors hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="/sobre-nosotros"
                className="block py-2 text-sm text-textMuted transition-colors hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                Sobre nosotros
              </Link>
              <Link
                href="/blog"
                className="block py-2 text-sm text-textMuted transition-colors hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contacto"
                className="block py-2 text-sm text-textMuted transition-colors hover:text-brand-400"
                onClick={() => setMobileOpen(false)}
              >
                Contacto
              </Link>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="space-y-2 border-t border-white/5 pt-4">
              <Link
                href="/login"
                className="block w-full rounded-xl border border-white/10 px-4 py-3 text-center text-sm text-textMuted transition-colors hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/cotizar"
                className="block w-full rounded-xl bg-brand-600 px-4 py-3 text-center text-sm text-white transition-colors hover:bg-brand-700"
                onClick={() => setMobileOpen(false)}
              >
                Cotizar Proyecto
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
