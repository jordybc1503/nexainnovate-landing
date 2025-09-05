import Section from "@/components/ui/Section";

const services = [
  // { slug: 'desarrollo', title: 'Desarrollo de Software y Aplicaciones' },
  // { slug: 'consultoria', title: 'Consultoría y Transformación Digital' },
  // { slug: 'marketing-digital', title: 'Marketing Digital y E‑commerce' },
  // { slug: 'comercializacion', title: 'Comercialización y Distribución de Software' }
];

export const revalidate = 3600;

export default function Page() {
  return (
    <Section>
      <h1 className="mb-6 font-display text-3xl">Nuestros Servicios</h1>
      <div className="text-center">
        <p className="text-lg text-textMuted">
          Ofrecemos soluciones integrales de tecnología y consultoría para
          impulsar tu negocio.
        </p>
        <p className="mt-4 text-sm text-textMuted">
          Páginas de servicios en desarrollo.
        </p>
      </div>
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(s => (
          <Link key={s.slug} href={`/servicios/${s.slug}` as any} className="p-5 rounded-2xl bg-bgSoft border border-white/10 hover:border-white/20">
            <div className="font-medium">{s.title}</div>
            <p className="text-sm text-textMuted">Conoce nuestro desglose de capacidades.</p>
          </Link>
        ))}
      </div> */}
    </Section>
  );
}
