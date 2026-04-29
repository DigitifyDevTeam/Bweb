import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

interface LogoProps {
  className?: string
  withText?: boolean
}

export function Logo({ className, withText = true }: LogoProps) {
  return (
    <Link to="/" className={cn('flex items-center gap-2.5 group', className)}>
      <span className="relative inline-flex size-9 items-center justify-center rounded-xl bg-gradient-brand shadow-[0_8px_24px_-8px_rgba(91,141,239,0.7)]">
        <span className="absolute inset-0.5 rounded-[10px] bg-[color:var(--color-bg)]/85" />
        <span className="relative font-display font-extrabold text-[15px] tracking-tight text-gradient">
          B
        </span>
      </span>
      {withText ? (
        <span className="font-display text-lg font-bold tracking-tight">
          BWEB
        </span>
      ) : null}
    </Link>
  )
}
