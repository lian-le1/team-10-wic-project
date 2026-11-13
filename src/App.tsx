import { Route, Routes } from 'react-router'
import Layout from './components/Layout.tsx'
import JoinPage from './pages/JoinPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import WelcomePage from './pages/WelcomePage.tsx'

export default function App() {
  return (
    <Routes>
      {/* Full-screen sign-up flow with its own branding, so it skips the site header/footer */}
      <Route path="join" element={<JoinPage />} />
      <Route element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
