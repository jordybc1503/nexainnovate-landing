import Section from '@/components/ui/Section'
import { queries, sanityClient } from '@/lib/cms'
import Link from 'next/link'

export const revalidate = 3600
export const fetchCache = 'force-cache'

export default async function Page() {
  // Skip Sanity fetch during build if no project ID
  if (!process.env.SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID === 'placeholder') {
    return (
      <Section>
        <h1 className="text-3xl font-display mb-6">Blog</h1>
        <p className="text-textMuted">Configure Sanity CMS to display blog posts.</p>
      </Section>
    )
  }
  
  const posts = await sanityClient.fetch(queries.allPosts, {}, { next: { tags: ['blog'] } })
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
