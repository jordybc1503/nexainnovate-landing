"use client";

import { useState } from "react";
import { submitContact, type ContactActionResult } from "../app/(marketing)/contacto/actions";

export default function ContactForm() {
  const [state, setState] = useState<ContactActionResult | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setState(null); // Reset state

    const formData = new FormData(e.currentTarget);
    const result = await submitContact(formData);
    setState(result);
    setIsPending(false);

    if (result.ok) {
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-bgSoft p-8 rounded-2xl shadow-card">
      {state?.ok && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          ✅ {state.message || "¡Mensaje enviado con éxito! Te contactaremos pronto."}
        </div>
      )}

      {state?.errors?.general && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
          ❌ {state.errors.general[0]}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nombre" className="block text-sm mb-2 text-textPrimary">
            Nombre *
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            placeholder="Tu nombre completo"
          />
          {state?.errors?.nombre && (
            <p className="mt-1 text-sm text-red-400">{state.errors.nombre[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-2 text-textPrimary">
            Correo electrónico *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            placeholder="tu@email.com"
          />
          {state?.errors?.email && (
            <p className="mt-1 text-sm text-red-400">{state.errors.email[0]}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="empresa" className="block text-sm mb-2 text-textPrimary">
            Empresa <span className="text-textMuted">(opcional)</span>
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            placeholder="Nombre de tu empresa"
          />
        </div>

        <div>
          <label htmlFor="servicio" className="block text-sm mb-2 text-textPrimary">
            Servicio de interés *
          </label>
          <select
            id="servicio"
            name="servicio"
            required
            className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
          >
            <option value="">Selecciona un servicio...</option>
            <option value="Desarrollo de Software">Desarrollo de Software</option>
            <option value="Consultoría y Transformación Digital">Consultoría y Transformación Digital</option>
            <option value="Marketing Digital">Marketing Digital</option>
            <option value="Comercialización de Software">Comercialización de Software</option>
          </select>
          {state?.errors?.servicio && (
            <p className="mt-1 text-sm text-red-400">{state.errors.servicio[0]}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm mb-2 text-textPrimary">
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={6}
          required
          className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
          placeholder="Cuéntanos sobre tu proyecto o necesidad..."
        />
        {state?.errors?.mensaje && (
          <p className="mt-1 text-sm text-red-400">{state.errors.mensaje[0]}</p>
        )}
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-textMuted">
          📞 Respondemos normalmente en 1–2 días hábiles.
        </p>
        <button
          type="submit"
          disabled={isPending}
          className="rounded-full px-8 py-3 bg-brand-500 hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium transition-all transform hover:scale-105 active:scale-95"
        >
          {isPending ? "Enviando..." : "Enviar mensaje"}
        </button>
      </div>
    </form>
  );
}
