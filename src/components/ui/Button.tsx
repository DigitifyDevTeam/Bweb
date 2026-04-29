import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'ghost' | 'subtle'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

interface ButtonProps
  extends BaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button'
}

interface LinkProps extends BaseProps {
  as: 'a'
  href: string
  external?: boolean
  children?: ReactNode
  className?: string
  onClick?: () => void
}

interface RouterLinkProps extends BaseProps {
  as: 'router'
  to: string
  children?: ReactNode
  className?: string
  onClick?: () => void
}

type Props = ButtonProps | LinkProps | RouterLinkProps

const baseClass =
  'group relative inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-200 ease-out disabled:cursor-not-allowed disabled:opacity-60 select-none whitespace-nowrap'

const sizeClass: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm rounded-full',
  md: 'h-11 px-5 text-[15px] rounded-full',
  lg: 'h-13 px-7 text-base rounded-full',
}

const variantClass: Record<Variant, string> = {
  primary:
    'text-white bg-gradient-brand shadow-[0_10px_30px_-10px_rgba(91,141,239,0.65)] hover:shadow-[0_18px_50px_-15px_rgba(155,108,255,0.7)] hover:-translate-y-0.5 active:translate-y-0',
  ghost:
    'text-[color:var(--color-text)] border border-white/15 bg-white/[0.03] backdrop-blur hover:bg-white/[0.06] hover:border-white/25',
  subtle:
    'text-[color:var(--color-text)] bg-white/5 hover:bg-white/10 border border-white/10',
}

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  props,
  ref,
) {
  const {
    variant = 'primary',
    size = 'md',
    iconLeft,
    iconRight,
    className,
  } = props

  const classes = cn(baseClass, sizeClass[size], variantClass[variant], className)

  const inner = (
    <>
      {iconLeft ? <span className="-ml-0.5">{iconLeft}</span> : null}
      <span>{props.children}</span>
      {iconRight ? <span className="-mr-0.5">{iconRight}</span> : null}
    </>
  )

  if (props.as === 'a') {
    const { href, external, onClick } = props
    return (
      <a
        href={href}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
        className={classes}
      >
        {inner}
      </a>
    )
  }

  if (props.as === 'router') {
    const { to, onClick } = props
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {inner}
      </Link>
    )
  }

  const { as: _as, variant: _v, size: _s, iconLeft: _il, iconRight: _ir, className: _cn, ...rest } =
    props
  void _as
  void _v
  void _s
  void _il
  void _ir
  void _cn
  return (
    <button ref={ref} className={classes} {...rest}>
      {inner}
    </button>
  )
})
