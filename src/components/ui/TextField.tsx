import { useId, type InputHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

/** A labeled text input with an optional hint below it. */
export default function TextField({
  label,
  hint,
  className,
  ...inputProps
}: {
  label: ReactNode
  hint?: ReactNode
  className?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>) {
  const id = useId()
  const hintId = `${id}-hint`

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={id} className="text-caption font-bold text-ink">
        {label}
      </label>
      <input
        id={id}
        aria-describedby={hint ? hintId : undefined}
        className={cn(
          'h-12.5 w-full rounded-brand-sm border border-mint-line bg-white px-4 text-label font-semibold text-ink',
          'placeholder:text-ink-faint focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-primary/30',
        )}
        {...inputProps}
      />
      {hint && (
        <p id={hintId} className="text-eyebrow leading-normal font-semibold text-primary">
          {hint}
        </p>
      )}
    </div>
  )
}
