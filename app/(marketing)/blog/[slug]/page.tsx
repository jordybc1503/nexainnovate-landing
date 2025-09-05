import Section from '@/components/ui/Section'
import { queries, sanityClient } from '@/lib/cms'
import { PortableText } from '@portabletext/react'

export const revalidate = 3600
export const fetchCache = 'force-cache'

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await sanityClient.fetch(queries.postBySlug, { slug: params.slug }, { next: { tags: ['blog'] } })
  if (!post) return <Section><div>Post no encontrado</div></Section>
  return (
    <Section>
      <h1 className="text-3xl font-display mb-2">{post.title}</h1>
      <div className="text-sm text-textMuted mb-6">{post.author?.name} · {new Date(post.publishedAt).toLocaleDateString()}</div>
      <article className="prose prose-invert max-w-none">
        {/* @ts-ignore */}
        <PortableText value={post.body} />
      </article>
    </Section>
  )
}
