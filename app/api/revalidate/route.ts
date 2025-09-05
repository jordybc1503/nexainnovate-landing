import { revalidateTag } from 'next/cache'

export async function POST() {
  revalidateTag('blog')
  return new Response('ok')
}

