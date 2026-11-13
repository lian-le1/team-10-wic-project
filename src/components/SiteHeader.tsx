import { useState } from 'react'
import Logo from './Logo'
import { Button } from './ui/Button'
import Container from './ui/Container'

const navLinks = [
  { label: 'Why CareCapsule', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Your privacy', href: '#privacy' },
]

const linkClasses =
  'text-label font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm'

// "Sign in" and "Bring your family together" have no pages yet; wire them up once auth exists.
export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header>
      <Container className="flex h-16 items-center justify-between md:h-24 lg:px-gutter">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClasses}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 md:flex">
            <button type="button" className={linkClasses}>
              Sign in
            </button>
            <Button size="md">Bring your family together</Button>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </Button>
        </div>
      </Container>

      {menuOpen && (
        <Container className="pb-6 lg:hidden">
          <nav id="mobile-menu" aria-label="Main" className="flex flex-col gap-6 rounded-card bg-white p-6 shadow-card">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClasses} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-start gap-4 md:hidden">
              <button type="button" className={linkClasses}>
                Sign in
              </button>
              <Button size="md">Bring your family together</Button>
            </div>
          </nav>
        </Container>
      )}
    </header>
  )
}
