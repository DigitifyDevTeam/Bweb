import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  glow?: boolean
  ring?: boolean
  interactive?: boolean
}

export function Card({
  children,
  glow,
  ring,
  interactive,
  className,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        'glass relative rounded-3xl p-6 md:p-8 transition-all duration-300',
        ring && 'ring-gradient',
        interactive &&
          'hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05]',
        glow &&
          'hover:shadow-[0_30px_80px_-30px_rgba(91,141,239,0.55)]',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
