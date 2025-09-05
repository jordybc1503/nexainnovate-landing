import Section from "@/components/ui/Section";
import Link from "next/link";

const services = [
  {
    slug: "desarrollo",
    title: "Desarrollo de Software y Aplicaciones",
    description: "Soluciones tecnológicas personalizadas y escalables.",
  },
  // { slug: 'consultoria', title: 'Consultoría y Transformación Digital' },
  // { slug: 'marketing-digital', title: 'Marketing Digital y E‑commerce' },
  // { slug: 'comercializacion', title: 'Comercialización y Distribución de Software' }
];

export const revalidate = 3600;

export default function Page() {
  return (
    <Section>
      <h1 className="mb-6 font-display text-3xl">Nuestros Servicios</h1>
      <p className="mb-8 max-w-3xl text-lg text-textMuted">
        Ofrecemos soluciones integrales de tecnología y consultoría para
        impulsar tu negocio.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(s => (
          <Link
            key={s.slug}
            href={`/servicios/${s.slug}` as any}
            className="group rounded-2xl border border-white/10 bg-bgSoft p-6 transition-colors hover:border-white/20"
          >
            <div className="mb-3 text-xl font-medium transition-colors group-hover:text-brand-500">
              {s.title}
            </div>
            <p className="text-sm text-textMuted">{s.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-textMuted">
          Más servicios en desarrollo. Contáctanos para consultas específicas.
        </p>
      </div>
    </Section>
  );
}
