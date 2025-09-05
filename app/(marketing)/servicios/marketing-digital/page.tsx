import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function MarketingDigitalPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-display mb-6">
          Marketing Digital y <span className="text-brand-500">E-commerce</span>
        </h1>
        <p className="text-xl text-textMuted max-w-3xl mx-auto mb-8">
          Impulsamos tu presencia digital con estrategias de marketing efectivas 
          y plataformas de e-commerce que convierten.
        </p>
        <Link href="/cotizar">
          <Button className="bg-brand-600 hover:bg-brand-700">
            Comenzar Campaña
          </Button>
        </Link>
      </Section>

      <Section>
        <h2 className="text-3xl font-display text-center mb-10">Servicios de Marketing</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">SEO y SEM</h3>
            <p className="text-textMuted mb-4">
              Posicionamiento orgánico y campañas de pago para aumentar tu visibilidad online.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• Optimización SEO técnica</li>
              <li>• Google Ads y Meta Ads</li>
              <li>• Análisis de keywords</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Redes Sociales</h3>
            <p className="text-textMuted mb-4">
              Gestión profesional de redes sociales para construir comunidades activas.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• Estrategia de contenido</li>
              <li>• Community management</li>
              <li>• Publicidad social</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">E-commerce</h3>
            <p className="text-textMuted mb-4">
              Tiendas online optimizadas para conversión con experiencias de compra excepcionales.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• Shopify y WooCommerce</li>
              <li>• Optimización de conversión</li>
              <li>• Integración con pagos</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Email Marketing</h3>
            <p className="text-textMuted mb-4">
              Campañas automatizadas que nutren leads y fidelizan clientes.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• Automatización de flujos</li>
              <li>• Segmentación avanzada</li>
              <li>• A/B testing</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Analytics</h3>
            <p className="text-textMuted mb-4">
              Medición y análisis de datos para optimizar continuamente tus resultados.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• Google Analytics 4</li>
              <li>• Dashboards personalizados</li>
              <li>• ROI y attribution</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Marketing Automation</h3>
            <p className="text-textMuted mb-4">
              Automatización completa del funnel de marketing para maximizar conversiones.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• Lead scoring</li>
              <li>• Nutrición de prospectos</li>
              <li>• CRM integration</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section className="bg-bgSoft rounded-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-display mb-6">Acelera tu crecimiento digital</h2>
          <p className="text-textMuted mb-8 max-w-2xl mx-auto">
            Nuestro equipo de especialistas en marketing digital te ayudará a alcanzar 
            tus objetivos de crecimiento con estrategias data-driven.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button className="bg-brand-600 hover:bg-brand-700">
                Consulta Gratuita
              </Button>
            </Link>
            <Link href="/cotizar">
              <Button className="bg-white/10 hover:bg-white/20">
                Ver Planes
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
