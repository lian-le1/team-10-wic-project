import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'outline' | 'inverse'
type Size = 'sm' | 'md' | 'lg' | 'xl'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary font-bold text-white hover:brightness-95 focus-visible:outline-primary',
  outline:
    'border border-primary bg-white font-bold text-primary hover:bg-mint-50 focus-visible:outline-primary',
  // White pill used on the teal gradient band
  inverse: 'bg-white font-extrabold text-primary hover:bg-mint-50 focus-visible:outline-white',
}

const sizeClasses: Record<Size, string> = {
  sm: 'h-10 px-4 text-label',
  md: 'h-11.5 px-5 text-label',
  lg: 'h-13 px-5.5 text-body',
  xl: 'h-13.5 px-6 text-body',
}

type StyleProps = {
  variant?: Variant
  size?: Size
  /** Icon shown before the label */
  icon?: ReactNode
  className?: string
  children: ReactNode
}

function buttonClasses(variant: Variant, size: Size, className?: string) {
  return cn(
    'inline-flex items-center justify-center gap-2.25 rounded-full whitespace-nowrap transition',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )
}

export function Button({
  variant = 'primary',
  size = 'lg',
  icon,
  className,
  children,
  type = 'button',
  ...rest
}: StyleProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={buttonClasses(variant, size, className)} {...rest}>
      {icon}
      {children}
    </button>
  )
}

/** A link styled as a button. Paths starting with "/" use the router; anything else (e.g. "#section") is a plain link. */
export function ButtonLink({
  variant = 'primary',
  size = 'lg',
  icon,
  className,
  children,
  href,
  ...rest
}: StyleProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const classes = buttonClasses(variant, size, className)
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={classes} {...rest}>
        {icon}
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={classes} {...rest}>
      {icon}
      {children}
    </a>
  )
}
