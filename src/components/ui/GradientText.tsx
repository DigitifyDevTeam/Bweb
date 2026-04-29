import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface GradientTextProps {
  children: ReactNode
  className?: string
  as?: 'span' | 'strong'
}

export function GradientText({ children, className, as: Tag = 'span' }: GradientTextProps) {
  return <Tag className={cn('text-gradient', className)}>{children}</Tag>
}
