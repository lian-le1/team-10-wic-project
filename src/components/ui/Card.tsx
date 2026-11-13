import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Tone = 'default' | 'cornflower' | 'cobalt'
type Size = 'sm' | 'md'
type Shadow = 'none' | 'card' | 'float'

const toneClasses: Record<Tone, string> = {
  default: 'border-primary bg-white',
  cornflower: 'border-cornflower-300 bg-cornflower-50',
  cobalt: 'border-cobalt bg-white',
}

const sizeClasses: Record<Size, string> = {
  sm: 'rounded-popover p-5',
  md: 'rounded-card p-6 sm:p-8',
}

const shadowClasses: Record<Shadow, string> = {
  none: '',
  card: 'shadow-card',
  float: 'shadow-float',
}

/** A bordered surface. Children are stacked vertically; set the gap with className. */
export default function Card({
  tone = 'default',
  size = 'md',
  shadow = 'none',
  className,
  children,
  ...rest
}: {
  tone?: Tone
  size?: Size
  shadow?: Shadow
  className?: string
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col border',
        toneClasses[tone],
        sizeClasses[size],
        shadowClasses[shadow],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
