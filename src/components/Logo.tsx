import { Link } from 'react-router'
import pillIcon from '../assets/icons/pill-brand.svg'
import { cn } from '../lib/cn'
import Icon from './ui/Icon'

/** The CareCapsule mark and two-color wordmark, linking home. */
export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' }) {
  return (
    <Link
      to="/"
      aria-label="CareCapsule home"
      className="inline-flex items-center gap-2.25 rounded-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <span
        className={cn(
          'flex shrink-0 items-center justify-center bg-mint-100',
          size === 'md' ? 'size-9 rounded-brand' : 'size-8.5 rounded-brand-sm',
        )}
      >
        <Icon src={pillIcon} />
      </span>
      <span className={cn('font-extrabold', size === 'md' ? 'text-lead leading-normal' : 'text-title')}>
        <span className="text-brand-care">Care</span>
        <span className="text-brand-capsule">Capsule</span>
      </span>
    </Link>
  )
}
