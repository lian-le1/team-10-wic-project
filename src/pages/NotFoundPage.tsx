import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <Link to="/" className="text-teal-700 underline">
        Back to home
      </Link>
    </section>
  )
}
