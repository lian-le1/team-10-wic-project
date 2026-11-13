import { Outlet } from 'react-router'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
