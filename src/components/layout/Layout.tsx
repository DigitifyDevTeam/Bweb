import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export function Layout() {
  const location = useLocation()
  const reduced = useReducedMotion()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname, location.hash])

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
