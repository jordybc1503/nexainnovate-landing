import { z } from 'zod'

export const QuoteSchema = z.object({
  title: z.string().min(3, 'Título muy corto'),
  details: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    company: z.string().min(2),
    phone: z.string().optional(),
    service: z.string().min(2),
    scope: z.string().min(3),
    budget: z.string().optional(),
    targetDate: z.string().optional(),
    notes: z.string().optional()
  })
})

export type QuoteInput = z.infer<typeof QuoteSchema>

