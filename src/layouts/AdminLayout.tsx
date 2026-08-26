import { NavLink, Outlet } from 'react-router-dom'
import useUI from '../hooks/useUI'

function AdminLayout() {
  const { state } = useUI()

  return (
    <div className="admin-layout">
      {state.isSidebarOpen && (
        <aside className="admin-sidebar">
          <NavLink to="/admin">Dashboard</NavLink>
          <NavLink to="/admin/properties">Properties</NavLink>
          <NavLink to="/admin/properties/new">Add Property</NavLink>
        </aside>
      )}
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
