"use client"
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Section from '@/components/ui/Section'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const router = useRouter()
  const params = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const callbackUrl = params.get('callbackUrl') || '/dashboard'

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await signIn('credentials', { email, password, redirect: false, callbackUrl })
    setLoading(false)
    if (res?.ok) router.push(callbackUrl as any)
    else alert('Error de autenticación')
  }

  return (
    <Section className="max-w-md">
      <h1 className="text-2xl font-display mb-4">Iniciar Sesión</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <div className="flex gap-2">
          <Button disabled={loading} type="submit">Entrar</Button>
          <Button type="button" className="bg-white/10 hover:bg-white/20" onClick={() => signIn('google', { callbackUrl })}>Google</Button>
        </div>
      </form>
    </Section>
  )
}
