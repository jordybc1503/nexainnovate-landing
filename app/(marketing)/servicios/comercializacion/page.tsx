import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function ComercializacionPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-display mb-6">
          Comercialización y <span className="text-brand-500">Distribución de Software</span>
        </h1>
        <p className="text-xl text-textMuted max-w-3xl mx-auto mb-8">
          Llevamos tu software al mercado con estrategias de comercialización efectivas 
          y canales de distribución optimizados.
        </p>
        <Link href="/cotizar">
          <Button className="bg-brand-600 hover:bg-brand-700">
            Explorar Opciones
          </Button>
        </Link>
      </Section>

      <Section>
        <h2 className="text-3xl font-display text-center mb-10">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Estrategia de Go-to-Market</h3>
            <p className="text-textMuted mb-4">
              Desarrollamos estrategias completas para lanzar tu software exitosamente al mercado.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• Análisis de mercado y competencia</li>
              <li>• Definición de pricing strategy</li>
              <li>• Roadmap de lanzamiento</li>
              <li>• Identificación de early adopters</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Distribución Digital</h3>
            <p className="text-textMuted mb-4">
              Configuramos y optimizamos canales de distribución digital para maximizar alcance.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• App stores (iOS, Android, Windows)</li>
              <li>• Plataformas SaaS y marketplaces</li>
              <li>• Partner channel programs</li>
              <li>• White-label solutions</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Licenciamiento y Monetización</h3>
            <p className="text-textMuted mb-4">
              Estructuramos modelos de negocio y licenciamiento que optimizan tus ingresos.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• Modelos SaaS y subscription</li>
              <li>• Licencias empresariales</li>
              <li>• Freemium y trial strategies</li>
              <li>• Revenue optimization</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Marketing de Producto</h3>
            <p className="text-textMuted mb-4">
              Posicionamos tu software con mensajes claros y campañas dirigidas a tu audiencia.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• Product positioning</li>
              <li>• Content marketing técnico</li>
              <li>• Developer relations</li>
              <li>• Case studies y testimonios</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Partnerships y Alianzas</h3>
            <p className="text-textMuted mb-4">
              Establecemos alianzas estratégicas para ampliar tu red de distribución.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• Partner enablement programs</li>
              <li>• Channel partner recruitment</li>
              <li>• Integration partnerships</li>
              <li>• Reseller programs</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Soporte y Success</h3>
            <p className="text-textMuted mb-4">
              Aseguramos el éxito de tus clientes con programas de onboarding y soporte.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• Customer success programs</li>
              <li>• Technical documentation</li>
              <li>• Training y certification</li>
              <li>• Community building</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section className="bg-bgSoft rounded-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-display mb-6">Lleva tu software al siguiente nivel</h2>
          <p className="text-textMuted mb-8 max-w-2xl mx-auto">
            Nuestro equipo especializado en comercialización de software te ayudará 
            a maximizar el potencial de mercado de tu producto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button className="bg-brand-600 hover:bg-brand-700">
                Consultoría Especializada
              </Button>
            </Link>
            <Link href="/cotizar">
              <Button className="bg-white/10 hover:bg-white/20">
                Solicitar Análisis
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
