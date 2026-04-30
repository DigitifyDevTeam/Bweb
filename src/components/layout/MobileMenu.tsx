import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, ChevronDown, X } from 'lucide-react'
import { NAV_LINKS } from '@/data/navigation'
import { SERVICE_NAV } from '@/data/service-pages'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { useScrollLock } from '@/hooks/useScrollLock'
import { cn } from '@/lib/cn'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: Readonly<MobileMenuProps>) {
  const { pathname } = useLocation()
  useScrollLock(open)
  const [servicesOpen, setServicesOpen] = useState(
    pathname === '/services' || pathname.startsWith('/services/'),
  )

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 lg:hidden"
        >
          <div
            aria-hidden
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto border-l border-white/10 bg-[color:var(--color-bg-soft)] p-6"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer le menu"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="mt-10 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                if (link.to === '/services') {
                  const sectionActive =
                    pathname === '/services' || pathname.startsWith('/services/')
                  return (
                    <div key="services-acc" className="flex flex-col">
                      <button
                        type="button"
                        aria-expanded={servicesOpen}
                        onClick={() => setServicesOpen((v) => !v)}
                        className={cn(
                          'flex items-center justify-between rounded-2xl px-4 py-3 text-lg font-medium transition',
                          sectionActive
                            ? 'bg-white/10 text-[color:var(--color-text)]'
                            : 'text-[color:var(--color-muted)] hover:bg-white/5 hover:text-[color:var(--color-text)]',
                        )}
                      >
                        <span>Services</span>
                        <ChevronDown
                          className={cn(
                            'size-5 transition-transform duration-200',
                            servicesOpen && 'rotate-180',
                          )}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {servicesOpen ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className="overflow-hidden"
                          >
                            <div className="mt-1 flex flex-col gap-1 border-l border-white/10 pl-3">
                              {SERVICE_NAV.map((service) => {
                                const Icon = service.icon
                                const active = pathname === service.to
                                return (
                                  <Link
                                    key={service.slug}
                                    to={service.to}
                                    onClick={onClose}
                                    className={cn(
                                      'flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition',
                                      active
                                        ? 'bg-white/10 text-[color:var(--color-text)]'
                                        : 'text-[color:var(--color-muted)] hover:bg-white/5 hover:text-[color:var(--color-text)]',
                                    )}
                                  >
                                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                                      <Icon className="size-4 text-[color:var(--color-brand-300)]" />
                                    </span>
                                    <span className="flex-1 leading-tight">{service.title}</span>
                                  </Link>
                                )
                              })}
                              <Link
                                to="/services"
                                onClick={onClose}
                                className="mt-1 inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-[color:var(--color-brand-300)]"
                              >
                                Voir tous les services
                                <ArrowRight className="size-4" />
                              </Link>
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  )
                }

                const active = pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={onClose}
                    className={cn(
                      'rounded-2xl px-4 py-3 text-lg font-medium transition',
                      active
                        ? 'bg-white/10 text-[color:var(--color-text)]'
                        : 'text-[color:var(--color-muted)] hover:bg-white/5 hover:text-[color:var(--color-text)]',
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
            <div className="mt-10 flex flex-col gap-3">
              <Button as="router" to="/contact" onClick={onClose} size="lg">
                Réserver un diagnostic
              </Button>
              <p className="text-center text-sm text-[color:var(--color-muted)]">
                Premier mois gratuit
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
