import { cn } from '../../lib/cn'

type Tone = 'mint' | 'mint-strong' | 'mist'

const toneClasses: Record<Tone, string> = {
  mint: 'bg-mint-100 text-primary',
  'mint-strong': 'bg-mint-200 text-primary',
  mist: 'bg-mist-100 text-mist-500',
}

/** A round avatar showing a family member's initials. */
export default function Avatar({
  initials,
  tone = 'mint',
  className,
}: {
  initials: string
  tone?: Tone
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex size-10 shrink-0 items-center justify-center rounded-full text-caption font-extrabold',
        toneClasses[tone],
        className,
      )}
    >
      {initials}
    </span>
  )
}
