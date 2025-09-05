import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import Link from "next/link";

export default function ConsultoriaPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="mb-6 font-display text-4xl md:text-5xl">
          Consultoría y{" "}
          <span className="text-brand-500">Transformación Digital</span>
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl text-textMuted">
          Acompañamos a tu empresa en su proceso de transformación digital con
          estrategias personalizadas y metodologías probadas.
        </p>
        <Link href="/cotizar">
          <Button className="bg-brand-600 hover:bg-brand-700">
            Solicitar Consultoría
          </Button>
        </Link>
      </Section>

      <Section>
        <h2 className="mb-10 text-center font-display text-3xl">
          Áreas de Especialización
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">Estrategia Digital</h3>
            <p className="mb-4 text-textMuted">
              Definimos la hoja de ruta digital de tu empresa alineada con tus
              objetivos de negocio.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• Auditoría digital completa</li>
              <li>• Roadmap de transformación</li>
              <li>• KPIs y métricas de éxito</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Optimización de Procesos
            </h3>
            <p className="mb-4 text-textMuted">
              Automatizamos y digitalizamos procesos para mejorar la eficiencia
              operacional.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• Análisis de procesos actuales</li>
              <li>• Automatización con RPA</li>
              <li>• Integración de sistemas</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Arquitectura Tecnológica
            </h3>
            <p className="mb-4 text-textMuted">
              Diseñamos arquitecturas escalables y seguras para tu
              infraestructura digital.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• Cloud computing y migración</li>
              <li>• Microservicios y APIs</li>
              <li>• Seguridad y compliance</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-xl font-semibold">Change Management</h3>
            <p className="mb-4 text-textMuted">
              Gestionamos el cambio organizacional para garantizar adopción
              exitosa.
            </p>
            <ul className="space-y-1 text-sm text-textMuted">
              <li>• Capacitación de equipos</li>
              <li>• Comunicación del cambio</li>
              <li>• Monitoreo de adopción</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section className="rounded-3xl bg-bgSoft">
        <div className="text-center">
          <h2 className="mb-6 font-display text-3xl">Transforma tu negocio</h2>
          <p className="mx-auto mb-8 max-w-2xl text-textMuted">
            Nuestros consultores expertos te guiarán en cada paso de tu
            transformación digital para asegurar resultados exitosos.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
  );
}
