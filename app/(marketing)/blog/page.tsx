import Section from '@/components/ui/Section'
import Link from 'next/link'
import { sanityClient, queries } from '@/lib/cms'

export const revalidate = 3600
export const fetchCache = 'force-cache'
export const tags = ['blog']

export default async function Page() {
  const posts = await sanityClient.fetch(queries.allPosts, {}, { next: { tags } })
  return (
    <Section>
      <h1 className="text-3xl font-display mb-6">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p: any) => (
          <Link key={p._id} href={`/blog/${p.slug}`} className="group rounded-2xl overflow-hidden border border-white/10 hover:border-white/20">
            <div className="p-4">
              <div className="font-medium group-hover:text-white">{p.title}</div>
              <div className="text-xs text-textMuted mt-1">{p.author?.name} · {new Date(p.publishedAt).toLocaleDateString()}</div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}
