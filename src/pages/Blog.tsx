import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
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

export function Blog() {
  useSeo({
    title: 'Blog',
    description:
      'Articles, tutoriels et cas clients sur l\'intelligence artificielle, l\'automatisation et les agents IA pour entreprises.',
  })

  const [featured, ...rest] = BLOG_POSTS

  return (
    <>
      <section className="relative overflow-hidden py-12">
        <BackgroundGrid />
        <div className="container-page relative">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Blog · ressources"
              title={
                <>
                  Comprendre, mettre en place et{' '}
                  <GradientText>scaler l'IA</GradientText> dans votre entreprise
                </>
              }
              description="Stratégie, automatisation, technique et cas clients : nos articles pour les dirigeants et opérationnels qui veulent passer à l'action."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative pb-8">
        <div className="container-page">
          <ScrollReveal>
            <Link
              to={`/blog/${featured.slug}`}
              className="group glass ring-gradient grid grid-cols-1 gap-8 rounded-3xl p-6 md:p-10 lg:grid-cols-2 transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={featured.imageUrl}
                  alt={featured.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {featured.category}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                  <span>{featured.category}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3" /> {featured.readTime}
                  </span>
                  <span>·</span>
                  <span>{formatDate(featured.date)}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  {featured.title}
                </h2>
                <p className="text-[color:var(--color-muted)] leading-relaxed">
                  {featured.excerpt}
                </p>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-brand-300)] group-hover:gap-3 transition-all">
                  Lire l'article <ArrowUpRight className="size-4" />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-8">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, idx) => (
              <ScrollReveal key={post.slug} delay={idx * 0.05}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group glass flex h-full flex-col gap-4 rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-white/15"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <img
                      src={post.imageUrl}
                      alt={post.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[color:var(--color-muted)]">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3" /> {post.readTime}
                    </span>
                    <span>·</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-white">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-brand-300)] group-hover:gap-3 transition-all">
                    Lire l'article <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
