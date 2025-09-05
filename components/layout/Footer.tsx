import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-display text-lg"><span className="text-white">Nexa</span> <span className="text-brand-500">Innovate</span></div>
          <p className="text-sm text-textMuted mt-2">Construimos soluciones tecnológicas innovadoras que impulsan tu transformación digital.</p>
        </div>
        <div className="text-sm text-textMuted">
          <div className="font-medium text-white mb-2">Links</div>
          <ul className="space-y-1">
            <li><Link href="/servicios" className="hover:text-white">Servicios</Link></li>
            <li><Link href="/sobre-nosotros" className="hover:text-white">Sobre nosotros</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>
        <div className="text-sm text-textMuted">
          <div className="font-medium text-white mb-2">Contacto</div>
          <p>contacto@nexa.dev</p>
        </div>
      </div>
      <div className="text-center text-xs text-textMuted pb-8">© {new Date().getFullYear()} Nexa Innovate</div>
    </footer>
  )
}

