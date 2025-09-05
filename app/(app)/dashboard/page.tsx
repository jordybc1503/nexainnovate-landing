import Section from '@/components/ui/Section';
import { auth } from '@/lib/auth';
import { listUserQuotes } from '@/lib/services/quotes';

export const runtime = "nodejs";
export const dynamic = 'force-dynamic'

export default async function Page() {
  const session = await auth()
  // @ts-ignore
  const userId = session?.user?.id as string | undefined
  const data = userId ? await listUserQuotes(userId) : { items: [] }
  return (
    <Section>
      <h1 className="text-3xl font-display mb-6">Mis Cotizaciones</h1>
      <div className="space-y-3">
        {data.items.length === 0 && <div className="text-textMuted">No hay cotizaciones.</div>}
        {data.items.map((q) => (
          <div key={q.id} className="p-4 rounded-2xl bg-bgSoft border border-white/10">
            <div className="font-medium">{q.title}</div>
            <div className="text-xs text-textMuted">{q.status} · {new Date(q.createdAt).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
