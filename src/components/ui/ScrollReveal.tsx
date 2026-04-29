import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: ScrollRevealProps) {
  const reduced = useReducedMotion()
  if (reduced) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
