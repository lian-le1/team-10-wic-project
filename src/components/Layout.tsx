import { Link, Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto max-w-5xl px-4 py-4">
          <Link to="/" className="text-xl font-semibold text-teal-700">
            CareCapsule
          </Link>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        <Outlet />
      </main>
      <footer className="py-6 text-center text-sm text-slate-500">
        Made by: WIC &hearts;
      </footer>
    </div>
  )
}
