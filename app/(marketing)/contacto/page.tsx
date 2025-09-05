import ContactForm from "@/components/ContactForm";

export const runtime = "nodejs";

export const metadata = {
  title: "Contacto | Nexa Innovate",
  description: "Contacta con nosotros para impulsar la transformación digital de tu empresa"
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-bgBase text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
          <div className="text-center">
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
              Hablemos
            </h1>
            <p className="mt-6 text-lg md:text-xl text-textMuted max-w-3xl mx-auto">
              Cuéntanos tu proyecto y te contactaremos para iniciar tu transformación digital.
              Estamos aquí para hacer realidad tus ideas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <ContactForm />
      </section>

      {/* Additional Contact Info */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-bgSoft border border-white/5">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-500/20 flex items-center justify-center">
              <span className="text-2xl">📧</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-textMuted">contacto@nexainnovate.com</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-bgSoft border border-white/5">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-500/20 flex items-center justify-center">
              <span className="text-2xl">⏱️</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Tiempo de respuesta</h3>
            <p className="text-textMuted">1-2 días hábiles</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-bgSoft border border-white/5">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-500/20 flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Proceso</h3>
            <p className="text-textMuted">Análisis gratuito de necesidades</p>
          </div>
        </div>
      </section>
    </div>
  );
}
