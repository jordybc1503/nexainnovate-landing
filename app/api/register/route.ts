import { db } from '@/lib/db';
import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()
    if (!email || !password) return NextResponse.json({ error: 'Invalid' }, { status: 400 })
    const exists = await db.user.findUnique({ where: { email } })
    if (exists) return NextResponse.json({ error: 'Exists' }, { status: 409 })
    const hashed = await hash(password, 10)
    await db.user.create({ data: { name, email, password: hashed } })
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
