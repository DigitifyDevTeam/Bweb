import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { NAV_LINKS } from '@/data/navigation'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { NavDropdown } from '@/components/layout/NavDropdown'
import { cn } from '@/lib/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const media = globalThis.matchMedia('(prefers-color-scheme: light)')
    const stored = localStorage.getItem('bweb-theme')
    let initialTheme: 'light' | 'dark'
    if (stored === 'light' || stored === 'dark') {
      initialTheme = stored
    } else {
      initialTheme = media.matches ? 'light' : 'dark'
    }

    setTheme(initialTheme)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('bweb-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-300',
          scrolled ? 'pt-2' : 'pt-4',
        )}
      >
        <div className="container-page">
          <div
            className={cn(
              'flex items-center justify-between gap-6 rounded-full border border-white/10 px-4 py-2.5 transition-all duration-300',
              scrolled
                ? 'bg-[color:var(--color-bg)]/70 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]'
                : 'bg-white/[0.03] backdrop-blur-md',
            )}
          >
            <Logo />

            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                if (link.to === '/services') {
                  return <NavDropdown key="services-dropdown" />
                }
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      cn(
                        'rounded-full px-4 py-2 text-sm font-medium transition-all',
                        isActive
                          ? 'text-white bg-white/10'
                          : 'text-[color:var(--color-muted)] hover:text-white hover:bg-white/5',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              })}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
                onClick={toggleTheme}
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                {theme === 'dark' ? <Sun className="size-4.5" /> : <Moon className="size-4.5" />}
              </button>
              <Button
                as="router"
                to="/contact"
                size="sm"
                className="hidden md:inline-flex"
              >
                Réserver un diagnostic
              </Button>
              <button
                type="button"
                aria-label="Ouvrir le menu"
                onClick={() => setMenuOpen(true)}
                className="lg:hidden inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <Menu className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
