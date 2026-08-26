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
      <h1>Admin Property List</h1>
      <button onClick={() => navigate('/admin/properties/new')}>+ Add Property</button>
      <table>
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
              <td>{property.price}</td>
              <td>{property.status}</td>
              <td>
                <button onClick={() => navigate(`/admin/properties/${property.id}/edit`)}>Edit</button>
                <button onClick={() => handleDelete(property.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminPropertyListPage