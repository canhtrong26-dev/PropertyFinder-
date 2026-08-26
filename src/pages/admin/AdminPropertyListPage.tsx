import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { RootState, AppDispatch } from '../../store/store'
import { propertyRemoved } from '../../features/properties/propertySlice'

function AdminPropertyListPage() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const properties = useSelector((state: RootState) => state.properties.items)

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm('Bạn có chắc muốn xóa nhà này không?')
    if (!confirmed) return

    await fetch(`https://crud-property.onschoolbootcamp.edu.vn/properties/${id}`, {
      method: 'DELETE',
    })

    dispatch(propertyRemoved(id))
  }

  return (
    <div>
      <div className="admin-header">
        <h1>Admin Property List</h1>
        <button className="btn-add" onClick={() => navigate('/admin/properties/new')}>
          + Add Property
        </button>
      </div>
      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>City</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property.id}>
                <td>{property.address}</td>
                <td>{property.region}</td>
                <td>
                  {typeof property.price === 'number'
                    ? `$${property.price.toLocaleString('en-US')}`
                    : 'Liên hệ'}
                </td>
                <td>{property.status}</td>
                <td>
                  <div className="admin-table-actions">
                    <button
                      className="btn-edit"
                      onClick={() => navigate(`/admin/properties/${property.id}/edit`)}
                    >
                      Edit
                    </button>
                    <button className="btn-delete" onClick={() => handleDelete(property.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminPropertyListPage
