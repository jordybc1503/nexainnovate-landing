"use server";

import { ContactSchema } from "@/lib/validations/contact";
// import { db } from "@/lib/db";
import { sendContactEmail } from "@/lib/email";

export type ContactActionResult = {
  ok: boolean;
  errors?: Record<string, string[]>;
  message?: string;
};

export async function submitContact(formData: FormData): Promise<ContactActionResult> {
  const payload = {
    nombre: formData.get("nombre"),
    email: formData.get("email"),
    empresa: formData.get("empresa") || undefined,
    servicio: formData.get("servicio"),
    mensaje: formData.get("mensaje"),
  };

  const parsed = ContactSchema.safeParse(payload);
  if (!parsed.success) {
    return { ok: false, errors: parsed.error.flatten().fieldErrors };
  }

  const data = parsed.data;

  try {
    // TODO: Descomentar cuando la DB esté lista
    // await db.contactMessage.create({
    //   data: {
    //     nombre: data.nombre,
    //     email: data.email,
    //     empresa: data.empresa || null,
    //     servicio: data.servicio,
    //     mensaje: data.mensaje,
    //   }
    // });

    // Enviar correo (por ahora stub/simulación)
    await sendContactEmail(data);

    console.log("✅ Nuevo mensaje de contacto recibido:", {
      nombre: data.nombre,
      email: data.email,
      empresa: data.empresa,
      servicio: data.servicio,
      mensaje: data.mensaje.substring(0, 100) + "...",
      timestamp: new Date().toISOString()
    });

    return {
      ok: true,
      message: "¡Mensaje enviado con éxito! Te contactaremos pronto."
    };
  } catch (error) {
    console.error("❌ Error al procesar contacto:", error);
    return {
      ok: false,
      errors: { general: ["Ocurrió un error al enviar el mensaje. Inténtalo nuevamente."] }
    };
  }
}
