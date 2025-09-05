import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import Link from "next/link";

export default function MarketingDigitalPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="mb-6 font-display text-4xl md:text-5xl">
          Marketing Digital y <span className="text-brand-500">E-commerce</span>
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl text-textMuted">
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
        <h2 className="mb-10 text-center font-display text-3xl">
          Servicios de Marketing
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">SEO y SEM</h3>
            <p className="mb-4 text-textMuted">
              Posicionamiento orgánico y campañas de pago para aumentar tu
              visibilidad online.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• Optimización SEO técnica</li>
              <li>• Google Ads y Meta Ads</li>
              <li>• Análisis de keywords</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">Redes Sociales</h3>
            <p className="mb-4 text-textMuted">
              Gestión profesional de redes sociales para construir comunidades
              activas.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• Estrategia de contenido</li>
              <li>• Community management</li>
              <li>• Publicidad social</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">E-commerce</h3>
            <p className="mb-4 text-textMuted">
              Tiendas online optimizadas para conversión con experiencias de
              compra excepcionales.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• Shopify y WooCommerce</li>
              <li>• Optimización de conversión</li>
              <li>• Integración con pagos</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">Email Marketing</h3>
            <p className="mb-4 text-textMuted">
              Campañas automatizadas que nutren leads y fidelizan clientes.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• Automatización de flujos</li>
              <li>• Segmentación avanzada</li>
              <li>• A/B testing</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">Analytics</h3>
            <p className="mb-4 text-textMuted">
              Medición y análisis de datos para optimizar continuamente tus
              resultados.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• Google Analytics 4</li>
              <li>• Dashboards personalizados</li>
              <li>• ROI y attribution</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">Marketing Automation</h3>
            <p className="mb-4 text-textMuted">
              Automatización completa del funnel de marketing para maximizar
              conversiones.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• Lead scoring</li>
              <li>• Nutrición de prospectos</li>
              <li>• CRM integration</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section className="rounded-3xl bg-bgSoft">
        <div className="text-center">
          <h2 className="mb-6 font-display text-3xl">
            Acelera tu crecimiento digital
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-textMuted">
            Nuestro equipo de especialistas en marketing digital te ayudará a
            alcanzar tus objetivos de crecimiento con estrategias data-driven.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
  );
}
