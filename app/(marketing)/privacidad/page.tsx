import Section from "@/components/ui/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Nexa Innovate",
  description: "Política de privacidad y protección de datos de Nexa Innovate",
};

export default function PrivacidadPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="mb-6 font-display text-4xl md:text-5xl">
          Política de <span className="text-brand-500">Privacidad</span>
        </h1>
        <p className="mx-auto mb-4 max-w-3xl text-xl text-textMuted">
          En Nexa Innovate valoramos y respetamos tu privacidad. Esta política
          describe cómo recopilamos, usamos y protegemos tu información.
        </p>
        <p className="text-sm text-textMuted">
          Última actualización: {new Date().toLocaleDateString("es-ES")}
        </p>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="rounded-2xl bg-bgSoft p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              1. Información que Recopilamos
            </h2>
            <div className="space-y-4 text-textMuted">
              <p>
                Recopilamos información que nos proporcionas directamente,
                incluyendo:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-white">
                    Información de contacto:
                  </strong>{" "}
                  nombre, email, teléfono, empresa
                </li>
                <li>
                  <strong className="text-white">
                    Información de servicios:
                  </strong>{" "}
                  detalles sobre proyectos y cotizaciones
                </li>
                <li>
                  <strong className="text-white">
                    Información de comunicación:
                  </strong>{" "}
                  mensajes y consultas que nos envías
                </li>
                <li>
                  <strong className="text-white">Información técnica:</strong>{" "}
                  dirección IP, navegador, dispositivo usado
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-bgSoft p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              2. Cómo Usamos tu Información
            </h2>
            <div className="space-y-4 text-textMuted">
              <p>Utilizamos la información recopilada para:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Responder a tus consultas y proporcionar nuestros servicios
                </li>
                <li>Procesar cotizaciones y gestionar proyectos</li>
                <li>Mejorar nuestros servicios y experiencia de usuario</li>
                <li>
                  Enviarte información relevante sobre nuestros servicios (con
                  tu consentimiento)
                </li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-bgSoft p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              3. Compartir Información
            </h2>
            <div className="space-y-4 text-textMuted">
              <p>
                No vendemos, alquilamos ni compartimos tu información personal
                con terceros, excepto:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Con tu consentimiento explícito</li>
                <li>Para cumplir con obligaciones legales</li>
                <li>
                  Con proveedores de servicios que nos ayudan a operar (bajo
                  acuerdos de confidencialidad)
                </li>
                <li>
                  En caso de fusión, adquisición o venta de activos (previa
                  notificación)
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-bgSoft p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              4. Protección de Datos
            </h2>
            <div className="space-y-4 text-textMuted">
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para
                proteger tu información:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Cifrado de datos en tránsito y en reposo</li>
                <li>Acceso restringido a información personal</li>
                <li>Auditorías regulares de seguridad</li>
                <li>Capacitación del personal en protección de datos</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-bgSoft p-6">
            <h2 className="mb-4 text-2xl font-semibold">5. Tus Derechos</h2>
            <div className="space-y-4 text-textMuted">
              <p>Tienes derecho a:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-white">Acceso:</strong> conocer qué
                  información tenemos sobre ti
                </li>
                <li>
                  <strong className="text-white">Rectificación:</strong>{" "}
                  corregir información inexacta
                </li>
                <li>
                  <strong className="text-white">Eliminación:</strong> solicitar
                  que eliminemos tu información
                </li>
                <li>
                  <strong className="text-white">Portabilidad:</strong> recibir
                  tus datos en formato estructurado
                </li>
                <li>
                  <strong className="text-white">Oposición:</strong> oponerte al
                  procesamiento de tus datos
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-bgSoft p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              6. Cookies y Tecnologías Similares
            </h2>
            <div className="space-y-4 text-textMuted">
              <p>Utilizamos cookies y tecnologías similares para:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Mejorar la funcionalidad del sitio web</li>
                <li>Analizar el uso del sitio para mejoras</li>
                <li>Personalizar tu experiencia</li>
                <li>Recordar tus preferencias</li>
              </ul>
              <p className="mt-4">
                Puedes controlar las cookies a través de la configuración de tu
                navegador.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-500/20 bg-brand-600/10 p-6">
            <h2 className="mb-4 text-2xl font-semibold text-brand-400">
              7. Contacto
            </h2>
            <div className="space-y-4 text-textMuted">
              <p>
                Si tienes preguntas sobre esta política de privacidad o quieres
                ejercer tus derechos, contáctanos:
              </p>
              <div className="mt-4 space-y-2 rounded-xl bg-bgBase p-4">
                <p>
                  <strong className="text-white">Email:</strong>{" "}
                  privacidad@nexainnovate.com
                </p>
                <p>
                  <strong className="text-white">Teléfono:</strong> +1 (555)
                  123-4567
                </p>
                <p>
                  <strong className="text-white">Dirección:</strong> 123
                  Innovation Street, Tech City, TC 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
