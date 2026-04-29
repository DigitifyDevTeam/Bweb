import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.92 3.78-3.92 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.43-4.92 8.43-9.94z" />
    </svg>
  )
}

const PRODUCT_LINKS = [
  { label: 'Agents IA & Fine-Tuning', to: '/services/agents-ia' },
  { label: 'Automatisation Intelligente', to: '/services/automatisation' },
  { label: 'IA sur Mesure', to: '/services/ia-sur-mesure' },
  { label: 'Tous les services', to: '/services' },
] as const

const NAV_LINKS = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Tarifs', to: '/tarifs' },
  { label: 'Contact', to: '/contact' },
] as const

const RESOURCE_LINKS = [
  { label: 'Blog', to: '/blog' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Support', to: '/contact' },
] as const

const INTEGRATIONS = [
  'ChatGPT',
  'Claude',
  'n8n',
  'Slack',
  'Airtable',
  'HubSpot',
] as const

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 pt-16 pb-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Logo />
            <p className="text-sm leading-relaxed text-[color:var(--color-muted)] max-w-xs">
              BWEB est une agence d'Intelligence Artificielle qui conçoit, déploie et opère
              des agents, chatbots et automatisations sur mesure pour les entreprises ambitieuses.
            </p>
            <div className="flex flex-col gap-2 text-sm text-[color:var(--color-muted)]">
              <a
                href="tel:+21620096110"
                className="inline-flex items-center gap-2 hover:text-white transition"
              >
                <Phone className="size-4" /> +216 20 096 110
              </a>
              <a
                href="mailto:rebhi.walid@gmail.com
"
                className="inline-flex items-center gap-2 hover:text-white transition"
              >
                <Mail className="size-4" /> rebhi.walid@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 pt-2">
              {[
                { Icon: LinkedinIcon, label: 'LinkedIn' },
                { Icon: InstagramIcon, label: 'Instagram' },
                { Icon: FacebookIcon, label: 'Facebook' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Produit" links={PRODUCT_LINKS} />
          <FooterColumn title="Navigation" links={NAV_LINKS} />
          <FooterColumn title="Ressources" links={RESOURCE_LINKS} />

          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              Intégrations
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[color:var(--color-muted)]">
              {INTEGRATIONS.map((label) => (
                <li key={label} className="hover:text-white transition cursor-default">
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-[color:var(--color-muted)] md:flex-row">
          <p>© {new Date().getFullYear()} BWEB · Tous droits réservés.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition">Mentions légales</a>
            <a href="#" className="hover:text-white transition">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

interface FooterColumnProps {
  title: string
  links: readonly { label: string; to: string }[]
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="lg:col-span-2 flex flex-col gap-3">
      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
        {title}
      </h4>
      <ul className="flex flex-col gap-2 text-sm text-[color:var(--color-muted)]">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="hover:text-white transition">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
