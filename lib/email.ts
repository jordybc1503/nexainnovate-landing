import { ContactInput } from "@/lib/validations/contact";

/**
 * Función preparada para integrar con Resend u otro proveedor de email
 * Por ahora es un stub que simula el envío
 */
export async function sendContactEmail(data: ContactInput) {
  // TODO: Integrar con Resend
  console.log("📧 Enviando email de contacto:", {
    to: "contacto@nexainnovate.com",
    from: data.email,
    subject: `Nuevo contacto: ${data.servicio}`,
    body: `
      Nombre: ${data.nombre}
      Email: ${data.email}
      Empresa: ${data.empresa || "No especificada"}
      Servicio: ${data.servicio}
      Mensaje: ${data.mensaje}
    `
  });

  // Simular delay de envío
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true };
}
