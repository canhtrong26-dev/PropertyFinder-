import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import PropertyListPage from './pages/PropertyListPage'
import PropertyDetailPage from './pages/PropertyDetailPage'
import FavoritesPage from './pages/FavoritesPage'
import AboutPage from './pages/AboutPage'
import AdminDashboardPage from './pages/admin/AdminDashboardPage'
import AdminPropertyListPage from './pages/admin/AdminPropertyListPage'
import AdminPropertyFormPage from './pages/admin/AdminPropertyFormPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="properties" element={<PropertyListPage />} />
        <Route path="properties/:id" element={<PropertyDetailPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="admin">
          <Route index element={<AdminDashboardPage />} />
          <Route path="properties" element={<AdminPropertyListPage />} />
          <Route path="properties/form" element={<AdminPropertyFormPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App