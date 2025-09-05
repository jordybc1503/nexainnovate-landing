import Section from "@/components/ui/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Nexa Innovate",
  description:
    "Términos y condiciones de uso de los servicios de Nexa Innovate",
};

export default function TerminosPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="mb-6 font-display text-4xl md:text-5xl">
          Términos y <span className="text-brand-500">Condiciones</span>
        </h1>
        <p className="mx-auto mb-4 max-w-3xl text-xl text-textMuted">
          Estos términos rigen el uso de nuestros servicios. Al utilizar Nexa
          Innovate, aceptas estos términos.
        </p>
        <p className="text-sm text-textMuted">
          Última actualización: {new Date().toLocaleDateString("es-ES")}
        </p>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="rounded-2xl bg-bgSoft p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              1. Aceptación de Términos
            </h2>
            <div className="space-y-4 text-textMuted">
              <p>
                Al acceder y utilizar los servicios de Nexa Innovate, aceptas
                estar legalmente obligado por estos términos y condiciones. Si
                no aceptas estos términos, no debes utilizar nuestros servicios.
              </p>
              <p>
                Nos reservamos el derecho de modificar estos términos en
                cualquier momento. Las modificaciones entrarán en vigor
                inmediatamente después de su publicación en nuestro sitio web.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-bgSoft p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              2. Descripción de Servicios
            </h2>
            <div className="space-y-4 text-textMuted">
              <p>Nexa Innovate ofrece servicios de:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-white">
                    Desarrollo de Software:
                  </strong>{" "}
                  Aplicaciones web, móviles y sistemas personalizados
                </li>
                <li>
                  <strong className="text-white">Consultoría Digital:</strong>{" "}
                  Transformación digital y optimización de procesos
                </li>
                <li>
                  <strong className="text-white">Marketing Digital:</strong>{" "}
                  Estrategias de marketing online y presencia digital
                </li>
                <li>
                  <strong className="text-white">Comercialización:</strong>{" "}
                  Distribución y comercialización de software
                </li>
              </ul>
              <p className="mt-4">
                Los servicios específicos, alcance, cronograma y precios se
                definirán en acuerdos separados para cada proyecto.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-bgSoft p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              3. Obligaciones del Cliente
            </h2>
            <div className="space-y-4 text-textMuted">
              <p>Como cliente, te comprometes a:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Proporcionar información precisa y completa</li>
                <li>
                  Cooperar en el desarrollo del proyecto según lo acordado
                </li>
                <li>
                  Realizar pagos de acuerdo con las condiciones establecidas
                </li>
                <li>Respetar los derechos de propiedad intelectual</li>
                <li>
                  No utilizar nuestros servicios para actividades ilegales
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-bgSoft p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              4. Propiedad Intelectual
            </h2>
            <div className="space-y-4 text-textMuted">
              <p>
                La propiedad intelectual se regirá por los siguientes
                principios:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-white">Trabajo personalizado:</strong>{" "}
                  El cliente obtendrá derechos sobre el código desarrollado
                  específicamente para su proyecto
                </li>
                <li>
                  <strong className="text-white">
                    Herramientas y metodologías:
                  </strong>{" "}
                  Nexa Innovate retiene derechos sobre sus herramientas,
                  metodologías y conocimientos previos
                </li>
                <li>
                  <strong className="text-white">Código de terceros:</strong>{" "}
                  Las licencias de software de terceros se respetarán según sus
                  términos originales
                </li>
                <li>
                  <strong className="text-white">Mejoras generales:</strong> Las
                  mejoras a nuestras metodologías derivadas del proyecto
                  permanecen con Nexa Innovate
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-bgSoft p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              5. Pagos y Facturación
            </h2>
            <div className="space-y-4 text-textMuted">
              <p>Las condiciones de pago incluyen:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-white">Cotizaciones:</strong> Válidas
                  por 30 días desde su emisión
                </li>
                <li>
                  <strong className="text-white">Pagos:</strong> Según
                  calendario acordado en cada proyecto
                </li>
                <li>
                  <strong className="text-white">Retrasos:</strong> Pueden
                  resultar en la suspensión temporal del trabajo
                </li>
                <li>
                  <strong className="text-white">Reembolsos:</strong> Sujetos a
                  evaluación caso por caso
                </li>
                <li>
                  <strong className="text-white">Impuestos:</strong> El cliente
                  es responsable de impuestos aplicables
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-bgSoft p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              6. Limitación de Responsabilidad
            </h2>
            <div className="space-y-4 text-textMuted">
              <p>Nexa Innovate no será responsable por:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Daños indirectos, incidentales o consecuenciales</li>
                <li>Pérdida de beneficios, datos o oportunidades de negocio</li>
                <li>Problemas causados por software de terceros</li>
                <li>
                  Interrupciones del servicio por causas fuera de nuestro
                  control
                </li>
                <li>Uso inadecuado de los productos entregados</li>
              </ul>
              <p className="mt-4">
                Nuestra responsabilidad máxima estará limitada al monto pagado
                por el cliente por el servicio específico.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-bgSoft p-6">
            <h2 className="mb-4 text-2xl font-semibold">7. Confidencialidad</h2>
            <div className="space-y-4 text-textMuted">
              <p>Ambas partes se comprometen a:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Mantener confidencial la información del proyecto</li>
                <li>No divulgar información sensible a terceros</li>
                <li>Usar la información solo para los fines acordados</li>
                <li>
                  Devolver o destruir información confidencial al finalizar
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-bgSoft p-6">
            <h2 className="mb-4 text-2xl font-semibold">8. Terminación</h2>
            <div className="space-y-4 text-textMuted">
              <p>El acuerdo puede terminarse:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Por cualquiera de las partes con notificación previa</li>
                <li>Inmediatamente en caso de incumplimiento material</li>
                <li>Por imposibilidad de continuar el proyecto</li>
              </ul>
              <p className="mt-4">
                La terminación no afecta las obligaciones de pago por servicios
                ya prestados.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-500/20 bg-brand-600/10 p-6">
            <h2 className="mb-4 text-2xl font-semibold text-brand-400">
              9. Contacto Legal
            </h2>
            <div className="space-y-4 text-textMuted">
              <p>Para asuntos legales o preguntas sobre estos términos:</p>
              <div className="mt-4 space-y-2 rounded-xl bg-bgBase p-4">
                <p>
                  <strong className="text-white">Email:</strong>{" "}
                  legal@nexainnovate.com
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
