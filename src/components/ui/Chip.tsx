import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'eyebrow' | 'status' | 'tag'
type Tone = 'mint' | 'mint-strong'

const variantClasses: Record<Variant, string> = {
  /** Small all-caps label above a section heading */
  eyebrow: 'px-4 py-2 text-eyebrow font-extrabold uppercase',
  /** Friendly highlight line, e.g. above the hero heading */
  status: 'px-3.5 py-2 text-caption font-bold',
  /** Compact label inside a card, e.g. a family name */
  tag: 'px-3 py-1.75 text-eyebrow font-bold',
}

const toneClasses: Record<Tone, string> = {
  mint: 'bg-mint-100',
  'mint-strong': 'bg-mint-200',
}

export default function Chip({
  variant = 'eyebrow',
  tone = 'mint',
  className,
  children,
}: {
  variant?: Variant
  tone?: Tone
  className?: string
  children: ReactNode
}) {
  return (
    <span
      className={cn(
        'inline-flex w-fit items-center rounded-full text-primary',
        variantClasses[variant],
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
