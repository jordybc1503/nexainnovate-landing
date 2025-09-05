import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function DesarrolloPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-display mb-6">
          Desarrollo de Software y <span className="text-brand-500">Aplicaciones</span>
        </h1>
        <p className="text-xl text-textMuted max-w-3xl mx-auto mb-8">
          Creamos soluciones de software personalizadas que impulsan tu negocio. 
          Desde aplicaciones web y móviles hasta sistemas empresariales complejos.
        </p>
        <Link href="/cotizar">
          <Button className="bg-brand-600 hover:bg-brand-700">
            Cotizar Proyecto
          </Button>
        </Link>
      </Section>

      <Section>
        <h2 className="text-3xl font-display text-center mb-10">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Aplicaciones Web</h3>
            <p className="text-textMuted mb-4">
              Plataformas web modernas y escalables con tecnologías de vanguardia como React, Next.js y Node.js.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• SPA y Progressive Web Apps</li>
              <li>• E-commerce y portales</li>
              <li>• Dashboards y paneles admin</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Aplicaciones Móviles</h3>
            <p className="text-textMuted mb-4">
              Apps nativas y cross-platform para iOS y Android que ofrecen experiencias excepcionales.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• React Native y Flutter</li>
              <li>• Apps empresariales</li>
              <li>• Integración con APIs</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Sistemas Empresariales</h3>
            <p className="text-textMuted mb-4">
              Soluciones robustas para la gestión y automatización de procesos empresariales.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• CRM y ERP personalizados</li>
              <li>• Sistemas de inventario</li>
              <li>• APIs y microservicios</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section className="bg-bgSoft rounded-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-display mb-6">¿Listo para comenzar?</h2>
          <p className="text-textMuted mb-8 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te ayudaremos a convertir tu idea en realidad 
            con la mejor tecnología y metodologías ágiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button className="bg-brand-600 hover:bg-brand-700">
                Contactar Especialista
              </Button>
            </Link>
            <Link href="/cotizar">
              <Button className="bg-white/10 hover:bg-white/20">
                Solicitar Cotización
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
