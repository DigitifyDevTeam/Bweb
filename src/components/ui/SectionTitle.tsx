import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionTitleProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
          <span className="size-1.5 rounded-full bg-gradient-brand" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] max-w-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-[color:var(--color-muted)] text-base md:text-lg leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  )
}
