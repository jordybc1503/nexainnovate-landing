import Section from '@/components/ui/Section'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const quotes = await db.quote.findMany({ orderBy: { createdAt: 'desc' }, include: { user: true } })
  return (
    <Section>
      <h1 className="text-3xl font-display mb-6">Admin · Cotizaciones</h1>
      <div className="overflow-auto rounded-2xl border border-white/10">
        <table className="min-w-full text-sm">
          <thead className="bg-white/5">
            <tr>
              <th className="text-left p-3">Fecha</th>
              <th className="text-left p-3">Título</th>
              <th className="text-left p-3">Usuario</th>
              <th className="text-left p-3">Estado</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((q) => (
              <tr key={q.id} className="border-t border-white/5">
                <td className="p-3">{new Date(q.createdAt).toLocaleString()}</td>
                <td className="p-3">{q.title}</td>
                <td className="p-3">{q.user.email}</td>
                <td className="p-3">{q.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}

