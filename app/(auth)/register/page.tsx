"use client"
import Section from '@/components/ui/Section'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { useState } from 'react'

export default function Page() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/register', { method: 'POST', body: JSON.stringify({ name, email, password }) })
    if (res.ok) alert('Cuenta creada. Ahora puedes iniciar sesión.')
    else alert('No se pudo crear la cuenta')
  }

  return (
    <Section className="max-w-md">
      <h1 className="text-2xl font-display mb-4">Regístrate</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <Input placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button type="submit">Crear cuenta</Button>
      </form>
    </Section>
  )
}

