import type { ReactNode } from 'react'
import Chip from './Chip'

/** Centered eyebrow + heading + intro used at the top of a page section. */
export default function SectionHeading({
  eyebrow,
  eyebrowTone = 'mint',
  title,
  description,
  id,
}: {
  eyebrow: string
  eyebrowTone?: 'mint' | 'mint-strong'
  title: ReactNode
  description: ReactNode
  /** id for the heading, so the section can use aria-labelledby */
  id?: string
}) {
  return (
    <div className="flex flex-col items-center gap-3.5 text-center">
      <Chip tone={eyebrowTone}>{eyebrow}</Chip>
      <h2 id={id} className="text-title-lg font-extrabold text-primary sm:text-headline">
        {title}
      </h2>
      <p className="max-w-162.5 text-body-lg font-semibold text-ink-muted">{description}</p>
    </div>
  )
}
