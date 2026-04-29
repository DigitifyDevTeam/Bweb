export interface NavLink {
  label: string
  to: string
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Tarifs', to: '/tarifs' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
] as const
