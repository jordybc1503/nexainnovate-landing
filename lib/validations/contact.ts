import { z } from "zod";

export const ContactSchema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre"),
  email: z.string().email("Correo inválido"),
  empresa: z.string().optional(),
  servicio: z.enum([
    "Desarrollo de Software",
    "Consultoría y Transformación Digital",
    "Marketing Digital",
    "Comercialización de Software",
  ], { required_error: "Selecciona un servicio" }),
  mensaje: z.string().min(20, "Cuéntanos un poco más (mín. 20 caracteres)"),
});

export type ContactInput = z.infer<typeof ContactSchema>;
