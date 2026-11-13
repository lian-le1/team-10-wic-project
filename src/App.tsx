import { Route, Routes } from 'react-router'
import Layout from './components/Layout.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import WelcomePage from './pages/WelcomePage.tsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
