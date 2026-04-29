import { Quote } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientText } from '@/components/ui/GradientText'

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

const FOUNDERS = [
  {
    name: 'Nabil Rebhi',
    role: 'Co-fondateur · CEO',
    pillar: 'Management',
    bio: 'Management stratégique, vision business, structuration des offres et accompagnement des décideurs.',
    image: '/nabil%20rebhi.jpeg',
    linkedin: '#',
  },
  {
    name: 'Walid Rebhi',
    role: 'Co-fondateur · CTO',
    pillar: 'Technique',
    bio: 'Expertise technique, architecture IA, automatisations avancées et déploiement en production.',
    image: '/walid%20rebhi.jpeg',
    linkedin: '#',
  },
] as const

export function Founder() {
  return (
    <section className="relative py-24">
      <div className="container-page">
        <ScrollReveal>
          <div className="mx-auto max-w-6xl flex flex-col items-center gap-10">
            <div className="text-center flex flex-col items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                L'équipe fondatrice
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">
                Deux fondateurs, une vision :{' '}
                <GradientText>BWEB en mode exécution</GradientText>
              </h2>
              <p className="max-w-2xl text-[color:var(--color-muted)] leading-relaxed">
                Nous combinons expertise business et excellence technique pour déployer
                des systèmes IA concrets, rentables et scalables.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {FOUNDERS.map((founder) => (
                <article
                  key={founder.name}
                  className="ring-gradient rounded-3xl overflow-hidden flex flex-col border border-white/10 bg-[color:var(--color-surface)]"
                >
                  <div className="relative h-72 md:h-80 overflow-hidden">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="size-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-bg)] via-[color:var(--color-bg)]/35 to-transparent" />
                    <a
                      href={founder.linkedin}
                      aria-label={`Profil LinkedIn de ${founder.name}`}
                      className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur hover:bg-black/50 transition"
                    >
                      <LinkedinIcon className="size-4" />
                    </a>
                  </div>

                  <div className="p-6 md:p-7 flex flex-col gap-4">
                    <div className="flex items-end justify-between gap-4">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-xl md:text-2xl font-bold">{founder.name}</h3>
                        <p className="text-sm text-[color:var(--color-brand-300)]">{founder.role}</p>
                      </div>
                      <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-subtle)]">
                        {founder.pillar}
                      </span>
                    </div>

                    <div className="h-px bg-white/10" />

                    <p className="text-[color:var(--color-muted)] leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="max-w-4xl text-center flex flex-col items-center gap-4">
              <Quote className="size-7 text-[color:var(--color-brand-300)]" />
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-semibold leading-tight tracking-tight">
                « Nous ne vendons pas des promesses. Nous livrons des systèmes IA qui
                créent des résultats mesurables. »
              </blockquote>
              <p className="text-sm text-[color:var(--color-muted)]">
                Les fondateurs de BWEB
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
