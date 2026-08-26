import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectPropertyItems, fetchPropertyById } from '../features/properties/propertySlice'
import type { AppDispatch } from '../store/store'

function PropertyDetailPage() {
  const { id } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const items = useSelector(selectPropertyItems)
  const property = items.find((item) => String(item.id) === id)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!property) {
      setIsLoading(true)
      dispatch(fetchPropertyById(id!))
        .unwrap()
        .catch((err) => setError(err.message ?? 'Có lỗi xảy ra'))
        .finally(() => setIsLoading(false))
    }
  }, [id])

  if (isLoading) {
    return <div>Đang tải...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!property) {
    return <div>Listing not found</div>
  }

return (
  <div>
    <img src={property.image} alt={property.address} />
    <div>
      <p>{property.price}</p>
      <p>{property.status}</p>
      <p>{property.address}, {property.region}</p>
      <div>
        <span>{property.beds} bedrooms</span>
        <span>{property.baths} bathrooms</span>
      </div>
      <div>
        <p>{property.description}</p>
      </div>
      <div>
        <h2>Location</h2>
        <div style={{ width: '100%', height: '300px', background: '#e0e0e0' }}>
          <p>Map placeholder</p>
        </div>
      </div>
    </div>
  </div>
)
}

export default PropertyDetailPage