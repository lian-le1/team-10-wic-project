import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Tone = 'mint' | 'mint-strong' | 'cornflower' | 'primary'
type Shape = 'round' | 'tile'

const toneClasses: Record<Tone, string> = {
  mint: 'bg-mint-100',
  'mint-strong': 'bg-mint-200',
  cornflower: 'bg-cornflower-500',
  primary: 'bg-primary text-white',
}

/** A colored circle or rounded square that holds an icon or a short label (e.g. "01"). Set the size with className. */
export default function IconBadge({
  tone = 'mint',
  shape = 'round',
  className,
  children,
}: {
  tone?: Tone
  shape?: Shape
  className?: string
  children: ReactNode
}) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center',
        shape === 'round' ? 'rounded-full' : 'rounded-tile',
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
