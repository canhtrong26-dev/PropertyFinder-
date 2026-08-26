import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from './store/store'
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
  const favoriteIds = useSelector((state: RootState) => state.favorites.ids)

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteIds))
  }, [favoriteIds])

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
          <Route path="properties/new" element={<AdminPropertyFormPage />} />
          <Route path="properties/:id/edit" element={<AdminPropertyFormPage />} />
          <Route path="properties/form" element={<AdminPropertyFormPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App