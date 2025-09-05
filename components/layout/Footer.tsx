import Link from 'next/link'
import { Facebook, Instagram, Linkedin, MessageCircle, Music } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-display text-lg"><span className="text-white">Nexa</span> <span className="text-brand-500">Innovate</span></div>
          <p className="text-sm text-textMuted mt-2">Construimos soluciones tecnológicas innovadoras que impulsan tu transformación digital.</p>
          
          {/* Redes Sociales */}
          <div className="mt-4">
            <div className="font-medium text-white text-sm mb-3">Síguenos</div>
            <div className="flex gap-3">
              <Link 
                href="https://linkedin.com/company/nexainnovate" 
                target="_blank"
                className="p-2 rounded-lg bg-white/5 hover:bg-brand-500/20 hover:text-brand-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link 
                href="https://instagram.com/nexainnovate" 
                target="_blank"
                className="p-2 rounded-lg bg-white/5 hover:bg-brand-500/20 hover:text-brand-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link 
                href="https://facebook.com/nexainnovate" 
                target="_blank"
                className="p-2 rounded-lg bg-white/5 hover:bg-brand-500/20 hover:text-brand-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link 
                href="https://tiktok.com/@nexainnovate" 
                target="_blank"
                className="p-2 rounded-lg bg-white/5 hover:bg-brand-500/20 hover:text-brand-400 transition-colors"
                aria-label="TikTok"
              >
                <Music className="w-4 h-4" />
              </Link>
              <Link 
                href="https://wa.me/1234567890?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios" 
                target="_blank"
                className="p-2 rounded-lg bg-white/5 hover:bg-green-500/20 hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-textMuted">
          <div className="font-medium text-white mb-2">Servicios</div>
          <ul className="space-y-1">
            <li><Link href="/servicios/desarrollo" className="hover:text-white">Desarrollo de Software</Link></li>
            <li><Link href="/servicios/consultoria" className="hover:text-white">Consultoría Digital</Link></li>
            <li><Link href="/servicios/marketing-digital" className="hover:text-white">Marketing Digital</Link></li>
            <li><Link href="/servicios/comercializacion" className="hover:text-white">Comercialización</Link></li>
          </ul>
        </div>
        
        <div className="text-sm text-textMuted">
          <div className="font-medium text-white mb-2">Enlaces</div>
          <ul className="space-y-1">
            <li><Link href="/sobre-nosotros" className="hover:text-white">Sobre nosotros</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
            <li><Link href="/cotizar" className="hover:text-white">Cotizar Proyecto</Link></li>
          </ul>
        </div>
        
        <div className="text-sm text-textMuted">
          <div className="font-medium text-white mb-2">Contacto</div>
          <div className="space-y-2">
            <p>contacto@nexa.dev</p>
            <p>+1 (555) 123-4567</p>
            <p className="text-xs">Lun - Vie: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-textMuted">
          <p>© {new Date().getFullYear()} Nexa Innovate. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/privacidad" className="hover:text-white" as="/privacidad">Privacidad</Link>
            <Link href="/terminos" className="hover:text-white" as="/terminos">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

