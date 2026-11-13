import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

/**
 * Centers content at the 1440px design width with phone/tablet side padding.
 * Pass the desktop padding with className, e.g. "lg:px-gutter" or "lg:px-30".
 */
export default function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-360 px-5 md:px-10', className)}>{children}</div>
}
