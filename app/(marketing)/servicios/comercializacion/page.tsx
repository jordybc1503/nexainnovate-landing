import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import Link from "next/link";

export default function ComercializacionPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="mb-6 font-display text-4xl md:text-5xl">
          Comercialización y{" "}
          <span className="text-brand-500">Distribución de Software</span>
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl text-textMuted">
          Llevamos tu software al mercado con estrategias de comercialización
          efectivas y canales de distribución optimizados.
        </p>
        <Link href="/cotizar">
          <Button className="bg-brand-600 hover:bg-brand-700">
            Explorar Opciones
          </Button>
        </Link>
      </Section>

      <Section>
        <h2 className="mb-10 text-center font-display text-3xl">
          Nuestros Servicios
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Estrategia de Go-to-Market
            </h3>
            <p className="mb-4 text-textMuted">
              Desarrollamos estrategias completas para lanzar tu software
              exitosamente al mercado.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• Análisis de mercado y competencia</li>
              <li>• Definición de pricing strategy</li>
              <li>• Roadmap de lanzamiento</li>
              <li>• Identificación de early adopters</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">Distribución Digital</h3>
            <p className="mb-4 text-textMuted">
              Configuramos y optimizamos canales de distribución digital para
              maximizar alcance.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• App stores (iOS, Android, Windows)</li>
              <li>• Plataformas SaaS y marketplaces</li>
              <li>• Partner channel programs</li>
              <li>• White-label solutions</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Licenciamiento y Monetización
            </h3>
            <p className="mb-4 text-textMuted">
              Estructuramos modelos de negocio y licenciamiento que optimizan
              tus ingresos.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• Modelos SaaS y subscription</li>
              <li>• Licencias empresariales</li>
              <li>• Freemium y trial strategies</li>
              <li>• Revenue optimization</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Marketing de Producto
            </h3>
            <p className="mb-4 text-textMuted">
              Posicionamos tu software con mensajes claros y campañas dirigidas
              a tu audiencia.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• Product positioning</li>
              <li>• Content marketing técnico</li>
              <li>• Developer relations</li>
              <li>• Case studies y testimonios</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Partnerships y Alianzas
            </h3>
            <p className="mb-4 text-textMuted">
              Establecemos alianzas estratégicas para ampliar tu red de
              distribución.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• Partner enablement programs</li>
              <li>• Channel partner recruitment</li>
              <li>• Integration partnerships</li>
              <li>• Reseller programs</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">Soporte y Success</h3>
            <p className="mb-4 text-textMuted">
              Aseguramos el éxito de tus clientes con programas de onboarding y
              soporte.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• Customer success programs</li>
              <li>• Technical documentation</li>
              <li>• Training y certification</li>
              <li>• Community building</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section className="rounded-3xl bg-bgSoft">
        <div className="text-center">
          <h2 className="mb-6 font-display text-3xl">
            Lleva tu software al siguiente nivel
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-textMuted">
            Nuestro equipo especializado en comercialización de software te
            ayudará a maximizar el potencial de mercado de tu producto.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
  );
}
