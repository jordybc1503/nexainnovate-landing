"use server"
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { db } from '@/lib/db'

const QuoteSchema = z.object({
  title: z.string().min(3),
  details: z.any()
})

export async function createQuote(input: unknown) {
  const session = await auth()
  // @ts-ignore
  const userId = session?.user?.id as string | undefined
  if (!userId) throw new Error('Unauthorized')
  const data = QuoteSchema.parse(input)
  const quote = await db.quote.create({ data: { ...data, userId, status: 'SUBMITTED' } })
  return { id: quote.id }
}

