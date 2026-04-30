import { useEffect, useId, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { SERVICE_NAV } from '@/data/service-pages'
import { cn } from '@/lib/cn'

const CLOSE_DELAY = 180

export function NavDropdown() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const reduced = useReducedMotion()
  const panelId = useId()

  const isActive = pathname === '/services' || pathname.startsWith('/services/')

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return

    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    function handleClickOutside(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    globalThis.addEventListener('keydown', handleKey)
    globalThis.addEventListener('mousedown', handleClickOutside)
    return () => {
      globalThis.removeEventListener('keydown', handleKey)
      globalThis.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  function scheduleClose() {
    if (closeTimer.current) {
      globalThis.clearTimeout(closeTimer.current)
    }
    closeTimer.current = globalThis.setTimeout(() => setOpen(false), CLOSE_DELAY)
  }

  function cancelClose() {
    if (closeTimer.current) {
      globalThis.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  function openNow() {
    cancelClose()
    setOpen(true)
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={scheduleClose}
      onFocus={openNow}
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) {
          scheduleClose()
        }
      }}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all',
          isActive
            ? 'text-[color:var(--color-text)] bg-white/10'
            : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-text)] hover:bg-white/5',
        )}
      >
        Services
        <ChevronDown
          className={cn(
            'size-4 transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={panelId}
            role="menu"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute left-1/2 top-full z-50 mt-3 w-[min(96vw,640px)] -translate-x-1/2"
          >
            <div className="ring-gradient overflow-hidden rounded-3xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-surface)] p-3 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.75)]">
              <div className="grid grid-cols-1 gap-1">
                {SERVICE_NAV.map((service) => {
                  const Icon = service.icon
                  const itemActive = pathname === service.to
                  return (
                    <Link
                      key={service.slug}
                      to={service.to}
                      role="menuitem"
                      className={cn(
                        'group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-all',
                        itemActive
                          ? 'border-white/15 bg-white/[0.06]'
                          : 'hover:border-white/10 hover:bg-white/[0.04]',
                      )}
                    >
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand">
                        <span className="size-[40px] rounded-[10px] bg-[color:var(--color-bg)]/85 flex items-center justify-center">
                          <Icon className="size-5 text-[color:var(--color-brand-300)]" />
                        </span>
                      </span>
                      <div className="flex flex-1 flex-col gap-0.5">
                        <span className="text-sm font-semibold text-[color:var(--color-text)]">
                          {service.title}
                        </span>
                        <span className="text-xs text-[color:var(--color-muted)] leading-snug">
                          {service.description}
                        </span>
                      </div>
                      <ArrowRight className="size-4 shrink-0 text-[color:var(--color-muted)] transition-all group-hover:translate-x-0.5 group-hover:text-[color:var(--color-text)]" />
                    </Link>
                  )
                })}
              </div>

              <div className="mt-2 border-t border-white/5 px-1 pt-3">
                <Link
                  to="/services"
                  role="menuitem"
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-[color:var(--color-brand-300)] transition-all hover:gap-3 hover:bg-white/5"
                >
                  Voir tous les services
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
