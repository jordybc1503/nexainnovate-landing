import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import Link from "next/link";

export default function DesarrolloPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="mb-6 font-display text-4xl md:text-5xl">
          Desarrollo de Software y{" "}
          <span className="text-brand-500">Aplicaciones</span>
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl text-textMuted">
          Creamos soluciones de software personalizadas que impulsan tu negocio.
          Desde aplicaciones web y móviles hasta sistemas empresariales
          complejos.
        </p>
        <Link href="/cotizar">
          <Button className="bg-brand-600 hover:bg-brand-700">
            Cotizar Proyecto
          </Button>
        </Link>
      </Section>

      <Section>
        <h2 className="mb-10 text-center font-display text-3xl">
          Nuestros Servicios
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">Aplicaciones Web</h3>
            <p className="mb-4 text-textMuted">
              Plataformas web modernas y escalables con tecnologías de
              vanguardia como React, Next.js y Node.js.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• SPA y Progressive Web Apps</li>
              <li>• E-commerce y portales</li>
              <li>• Dashboards y paneles admin</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">Aplicaciones Móviles</h3>
            <p className="mb-4 text-textMuted">
              Apps nativas y cross-platform para iOS y Android que ofrecen
              experiencias excepcionales.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• React Native y Flutter</li>
              <li>• Apps empresariales</li>
              <li>• Integración con APIs</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Sistemas Empresariales
            </h3>
            <p className="mb-4 text-textMuted">
              Soluciones robustas para la gestión y automatización de procesos
              empresariales.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• CRM y ERP personalizados</li>
              <li>• Sistemas de inventario</li>
              <li>• APIs y microservicios</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section className="rounded-3xl bg-bgSoft">
        <div className="text-center">
          <h2 className="mb-6 font-display text-3xl">¿Listo para comenzar?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-textMuted">
            Cuéntanos sobre tu proyecto y te ayudaremos a convertir tu idea en
            realidad con la mejor tecnología y metodologías ágiles.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
  );
}
