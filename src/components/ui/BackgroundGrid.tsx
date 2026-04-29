import { cn } from '@/lib/cn'

interface BackgroundGridProps {
  className?: string
  variant?: 'default' | 'soft'
}

export function BackgroundGrid({ className, variant = 'default' }: BackgroundGridProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className,
      )}
    >
      <div className="absolute inset-0 grid-pattern" />
      {variant === 'default' ? (
        <>
          <div
            className="absolute -top-32 -left-24 size-[420px] rounded-full opacity-60 blur-3xl"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgba(91,141,239,0.45), transparent 70%)',
              animation: 'var(--animate-blob-slow)',
            }}
          />
          <div
            className="absolute top-20 right-[-60px] size-[480px] rounded-full opacity-50 blur-3xl"
            style={{
              background:
                'radial-gradient(circle at 70% 30%, rgba(155,108,255,0.45), transparent 70%)',
              animation: 'var(--animate-blob-fast)',
            }}
          />
          <div
            className="absolute bottom-[-120px] left-1/3 size-[520px] rounded-full opacity-40 blur-3xl"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(34,211,238,0.35), transparent 70%)',
              animation: 'var(--animate-blob-slow)',
              animationDelay: '4s',
            }}
          />
        </>
      ) : null}
    </div>
  )
}
