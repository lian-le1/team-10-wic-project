import { ButtonLink } from '../components/ui/Button'
import Container from '../components/ui/Container'

export default function NotFoundPage() {
  return (
    <Container className="flex flex-col items-start gap-6 py-section lg:px-gutter">
      <h1 className="text-headline-sm font-extrabold text-ink">Page not found</h1>
      <p className="text-body-lg text-ink-muted">We couldn't find the page you were looking for.</p>
      <ButtonLink href="/">Back to home</ButtonLink>
    </Container>
  )
}
