import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function ConsultoriaPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-display mb-6">
          Consultoría y <span className="text-brand-500">Transformación Digital</span>
        </h1>
        <p className="text-xl text-textMuted max-w-3xl mx-auto mb-8">
          Acompañamos a tu empresa en su proceso de transformación digital con estrategias 
          personalizadas y metodologías probadas.
        </p>
        <Link href="/cotizar">
          <Button className="bg-brand-600 hover:bg-brand-700">
            Solicitar Consultoría
          </Button>
        </Link>
      </Section>

      <Section>
        <h2 className="text-3xl font-display text-center mb-10">Áreas de Especialización</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Estrategia Digital</h3>
            <p className="text-textMuted mb-4">
              Definimos la hoja de ruta digital de tu empresa alineada con tus objetivos de negocio.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• Auditoría digital completa</li>
              <li>• Roadmap de transformación</li>
              <li>• KPIs y métricas de éxito</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Optimización de Procesos</h3>
            <p className="text-textMuted mb-4">
              Automatizamos y digitalizamos procesos para mejorar la eficiencia operacional.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• Análisis de procesos actuales</li>
              <li>• Automatización con RPA</li>
              <li>• Integración de sistemas</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Arquitectura Tecnológica</h3>
            <p className="text-textMuted mb-4">
              Diseñamos arquitecturas escalables y seguras para tu infraestructura digital.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• Cloud computing y migración</li>
              <li>• Microservicios y APIs</li>
              <li>• Seguridad y compliance</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Change Management</h3>
            <p className="text-textMuted mb-4">
              Gestionamos el cambio organizacional para garantizar adopción exitosa.
            </p>
            <ul className="text-sm text-textMuted space-y-1">
              <li>• Capacitación de equipos</li>
              <li>• Comunicación del cambio</li>
              <li>• Monitoreo de adopción</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section className="bg-bgSoft rounded-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-display mb-6">Transforma tu negocio</h2>
          <p className="text-textMuted mb-8 max-w-2xl mx-auto">
            Nuestros consultores expertos te guiarán en cada paso de tu transformación digital 
            para asegurar resultados exitosos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button className="bg-brand-600 hover:bg-brand-700">
                Agendar Consulta
              </Button>
            </Link>
            <Link href="/cotizar">
              <Button className="bg-white/10 hover:bg-white/20">
                Solicitar Propuesta
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
