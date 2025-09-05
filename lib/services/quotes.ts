import { db } from '@/lib/db'
import { QuoteStatus } from '@prisma/client'

export async function listUserQuotes(userId: string, page = 1, pageSize = 10) {
  const [items, total] = await Promise.all([
    db.quote.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * pageSize,
      take: pageSize
    }),
    db.quote.count({ where: { userId } })
  ])
  return { items, total, page, pageSize }
}

export async function changeQuoteStatus(id: string, status: QuoteStatus) {
  return db.quote.update({ where: { id }, data: { status } })
}

export function pageBounds(page: number, pageSize: number) {
  const safePage = Math.max(1, Math.floor(page))
  const safeSize = Math.min(100, Math.max(1, Math.floor(pageSize)))
  const skip = (safePage - 1) * safeSize
  return { skip, take: safeSize }
}
