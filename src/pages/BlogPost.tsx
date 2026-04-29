import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Clock } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientText } from '@/components/ui/GradientText'
import { BackgroundGrid } from '@/components/ui/BackgroundGrid'
import { Newsletter } from '@/components/sections/Newsletter'
import { BLOG_POSTS } from '@/data/blog'
import { useSeo } from '@/lib/seo'

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  useSeo({
    title: post ? post.title : 'Article introuvable',
    description: post?.excerpt,
  })

  if (!post) {
    return (
      <section className="container-page py-32 text-center">
        <h1 className="text-3xl font-bold">Article introuvable</h1>
        <p className="mt-3 text-[color:var(--color-muted)]">
          Cet article n'existe pas ou a été déplacé.
        </p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 text-[color:var(--color-brand-300)]"
        >
          <ArrowLeft className="size-4" /> Retour au blog
        </Link>
      </section>
    )
  }

  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <section className="relative overflow-hidden py-16">
        <BackgroundGrid />
        <div className="container-page relative">
          <ScrollReveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-[color:var(--color-muted)] hover:text-white transition"
            >
              <ArrowLeft className="size-4" /> Retour au blog
            </Link>
            <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
              <span>{post.category}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3" /> {post.readTime}
              </span>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl md:text-5xl font-bold leading-[1.05]">
              <GradientText>{post.title}</GradientText>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-[color:var(--color-muted)] leading-relaxed">
              {post.excerpt}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-12">
        <div className="container-page max-w-3xl">
          <ScrollReveal>
            <article className="prose-custom flex flex-col gap-5 text-lg leading-relaxed text-[color:var(--color-muted)]">
              <p>{post.content}</p>
              <p>
                Chez BWEB, nous combinons stratégie, conception et exécution pour livrer
                des solutions IA mesurables. Notre approche : commencer petit, valider
                vite, puis industrialiser ce qui fonctionne.
              </p>
              <p>
                Si vous voulez aller plus loin sur ce sujet, réservez un{' '}
                <Link to="/contact" className="text-[color:var(--color-brand-300)] underline">
                  diagnostic offert de 30 minutes
                </Link>
                . Nous vous montrons concrètement comment l'IA peut s'appliquer à votre
                contexte, sans jargon, sans bullshit.
              </p>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-20">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">À lire ensuite</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                to={`/blog/${other.slug}`}
                className="glass group flex h-full flex-col gap-3 rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-white/15"
              >
                <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-brand-300)]">
                  {other.category}
                </span>
                <h3 className="text-lg font-bold leading-tight">{other.title}</h3>
                <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
                  {other.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
