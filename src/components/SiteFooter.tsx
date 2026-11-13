import Logo from './Logo'
import Container from './ui/Container'

// Terms and Contact us have no pages yet, so they render as plain text for now.
const footerLinks: { label: string; href?: string }[] = [
  { label: 'Privacy', href: '/#privacy' },
  { label: 'Terms' },
  { label: 'Contact us' },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-mint-200 bg-canvas">
      <Container className="flex flex-col gap-8 py-11 md:flex-row md:items-center md:justify-between lg:px-gutter">
        <div className="flex flex-col gap-3">
          <Logo size="sm" />
          <p className="text-eyebrow font-semibold text-primary">© 2026 CareCapsule. A little care, together.</p>
        </div>

        <ul className="flex flex-wrap gap-8 text-label font-bold text-primary">
          {footerLinks.map((link) => (
            <li key={link.label}>
              {link.href ? (
                <a href={link.href} className="underline-offset-4 hover:underline">
                  {link.label}
                </a>
              ) : (
                link.label
              )}
            </li>
          ))}
        </ul>

        <p className="max-w-65 text-micro leading-[1.6] font-semibold text-primary">
          Design concept with sample information. Not a live medication service.
        </p>
      </Container>
    </footer>
  )
}
