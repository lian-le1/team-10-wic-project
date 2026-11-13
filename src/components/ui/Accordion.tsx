import type { ReactNode } from 'react'
import minusIcon from '../../assets/icons/minus.svg'
import Icon from './Icon'

/**
 * One expandable question/answer row. Uses native <details>, so it works with
 * the keyboard and screen readers without extra code.
 */
export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: ReactNode
  children: ReactNode
  defaultOpen?: boolean
}) {
  return (
    <details className="group border-b border-primary py-6" open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-body-lg font-bold text-primary [&::-webkit-details-marker]:hidden">
        {title}
        {/* Minus when open; a second, rotated minus makes a plus when closed */}
        <span className="relative mt-0.5 size-4.5 shrink-0">
          <Icon src={minusIcon} className="absolute inset-0" />
          <Icon
            src={minusIcon}
            className="absolute inset-0 rotate-90 transition-opacity group-open:opacity-0"
          />
        </span>
      </summary>
      <div className="pt-3 text-body leading-[1.7] font-semibold text-primary">{children}</div>
    </details>
  )
}

export function Accordion({ children }: { children: ReactNode }) {
  return <div className="flex flex-col">{children}</div>
}
