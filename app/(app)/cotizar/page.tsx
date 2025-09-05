"use client"
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Section from '@/components/ui/Section'
import Textarea from '@/components/ui/Textarea'
import { useState } from 'react'
import { createQuote } from './actions'

export const runtime = "nodejs";

type Step = 1 | 2 | 3

export default function Page() {
  const [step, setStep] = useState<Step>(1)
  const [contact, setContact] = useState({ name: '', email: '', company: '', phone: '' })
  const [reqs, setReqs] = useState({ service: '', scope: '', budget: '', targetDate: '', notes: '' })
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    setLoading(true)
    try {
      const res = await createQuote({
        title: `${reqs.service || 'Cotización'} - ${contact.company || contact.name}`,
        details: { ...contact, ...reqs }
      })
      alert('Cotización enviada: ' + res.id)
    } catch (e: any) {
      alert('Error: ' + e.message)
    } finally { setLoading(false) }
  }

  return (
    <Section className="max-w-2xl">
      <h1 className="text-3xl font-display mb-6">Solicitar Cotización</h1>
      {step === 1 && (
        <div className="space-y-3">
          <Input placeholder="Nombre" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} />
          <Input placeholder="Email" type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
          <Input placeholder="Empresa" value={contact.company} onChange={(e) => setContact({ ...contact, company: e.target.value })} />
          <Input placeholder="Teléfono (opcional)" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
          <div className="flex justify-end"><Button onClick={() => setStep(2)}>Siguiente</Button></div>
        </div>
      )}
      {step === 2 && (
        <div className="space-y-3">
          <Input placeholder="Servicio" value={reqs.service} onChange={(e) => setReqs({ ...reqs, service: e.target.value })} />
          <Input placeholder="Alcance" value={reqs.scope} onChange={(e) => setReqs({ ...reqs, scope: e.target.value })} />
          <Input placeholder="Presupuesto estimado" value={reqs.budget} onChange={(e) => setReqs({ ...reqs, budget: e.target.value })} />
          <Input placeholder="Fecha objetivo" value={reqs.targetDate} onChange={(e) => setReqs({ ...reqs, targetDate: e.target.value })} />
          <Textarea placeholder="Notas" value={reqs.notes} onChange={(e) => setReqs({ ...reqs, notes: e.target.value })} />
          <div className="flex justify-between"><Button className="bg-white/10 hover:bg-white/20" onClick={() => setStep(1)}>Atrás</Button><Button onClick={() => setStep(3)}>Siguiente</Button></div>
        </div>
      )}
      {step === 3 && (
        <div className="space-y-3">
          <div className="text-sm text-textMuted">Confirma la información y envía.</div>
          <pre className="bg-bgSoft rounded-xl p-4 text-xs overflow-auto">{JSON.stringify({ contact, reqs }, null, 2)}</pre>
          <div className="flex justify-between"><Button className="bg-white/10 hover:bg-white/20" onClick={() => setStep(2)}>Atrás</Button><Button disabled={loading} onClick={submit}>Enviar</Button></div>
        </div>
      )}
    </Section>
  )
}
