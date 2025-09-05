import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Music,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <div className="font-display text-lg">
            <span className="text-white">Nexa</span>{" "}
            <span className="text-brand-500">Innovate</span>
          </div>
          <p className="mt-2 text-sm text-textMuted">
            Construimos soluciones tecnológicas innovadoras que impulsan tu
            transformación digital.
          </p>

          {/* Redes Sociales */}
          <div className="mt-4">
            <div className="mb-3 text-sm font-medium text-white">Síguenos</div>
            <div className="flex gap-3">
              <Link
                href="https://linkedin.com/company/nexainnovate"
                target="_blank"
                className="rounded-lg bg-white/5 p-2 transition-colors hover:bg-brand-500/20 hover:text-brand-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://instagram.com/nexainnovate"
                target="_blank"
                className="rounded-lg bg-white/5 p-2 transition-colors hover:bg-brand-500/20 hover:text-brand-400"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://facebook.com/nexainnovate"
                target="_blank"
                className="rounded-lg bg-white/5 p-2 transition-colors hover:bg-brand-500/20 hover:text-brand-400"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://tiktok.com/@nexainnovate"
                target="_blank"
                className="rounded-lg bg-white/5 p-2 transition-colors hover:bg-brand-500/20 hover:text-brand-400"
                aria-label="TikTok"
              >
                <Music className="h-4 w-4" />
              </Link>
              <Link
                href="https://wa.me/1234567890?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios"
                target="_blank"
                className="rounded-lg bg-white/5 p-2 transition-colors hover:bg-green-500/20 hover:text-green-400"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-sm text-textMuted">
          <div className="mb-2 font-medium text-white">Servicios</div>
          <ul className="space-y-1">
            <li>
              <Link href="/servicios/desarrollo" className="hover:text-white">
                Desarrollo de Software
              </Link>
            </li>
            <li>
              <Link href="/servicios/consultoria" className="hover:text-white">
                Consultoría Digital
              </Link>
            </li>
            <li>
              <Link
                href="/servicios/marketing-digital"
                className="hover:text-white"
              >
                Marketing Digital
              </Link>
            </li>
            <li>
              <Link
                href="/servicios/comercializacion"
                className="hover:text-white"
              >
                Comercialización
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm text-textMuted">
          <div className="mb-2 font-medium text-white">Enlaces</div>
          <ul className="space-y-1">
            <li>
              <Link href="/sobre-nosotros" className="hover:text-white">
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-white">
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/cotizar" className="hover:text-white">
                Cotizar Proyecto
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm text-textMuted">
          <div className="mb-2 font-medium text-white">Contacto</div>
          <div className="space-y-2">
            <p>contacto@nexa.dev</p>
            <p>+1 (555) 123-4567</p>
            <p className="text-xs">Lun - Vie: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-4 text-xs text-textMuted md:flex-row">
          <p>
            © {new Date().getFullYear()} Nexa Innovate. Todos los derechos
            reservados.
          </p>
          <div className="mt-2 flex gap-4 md:mt-0">
            <Link
              href="/privacidad"
              className="hover:text-white"
              as="/privacidad"
            >
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-white" as="/terminos">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
