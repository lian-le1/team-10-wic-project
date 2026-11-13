import { cn } from '../../lib/cn'

/**
 * A decorative icon from src/assets/icons. The SVGs carry their own size and
 * color from Figma, so this renders them at their natural size.
 */
export default function Icon({ src, className }: { src: string; className?: string }) {
  return <img src={src} alt="" aria-hidden="true" className={cn('block shrink-0', className)} />
}
