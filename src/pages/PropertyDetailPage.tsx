import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectPropertyItems, fetchPropertyById } from '../features/properties/propertySlice'
import type { AppDispatch } from '../store/store'
import { favoriteToggled } from '../features/properties/favoritesSlice'
import { getPropertyImage } from '../assets/figma'
import Badge from '../components/atoms/Badge'

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
    return <div className="page">Đang tải...</div>
  }

  if (error) {
    return <div className="page">{error}</div>
  }

  if (!property) {
    return <div className="page">Listing not found</div>
  }

  const imageSource = property.image || getPropertyImage(property.id)

  return (
    <div className="property-detail">
      {imageSource ? (
        <img className="property-detail-image" src={imageSource} alt={property.address} />
      ) : (
        <div className="property-detail-placeholder">PropertyFinder</div>
      )}
      <div className="property-detail-columns">
        <div>
          <Badge status={property.status} />
          <p className="property-detail-price">
            {typeof property.price === 'number'
              ? `$${property.price.toLocaleString('en-US')}`
              : 'Liên hệ'}
          </p>
          <p className="property-detail-address">
            {property.address}, {property.region}
          </p>
          <div className="property-detail-specs">
            <span>{property.beds} bedrooms</span>
            <span>{property.baths} bathrooms</span>
          </div>
          <p className="property-detail-description">{property.description}</p>
          <button
            className="btn-favorite"
            onClick={() => dispatch(favoriteToggled(String(property.id)))}
          >
            ♥ Favorite
          </button>
        </div>
        <div className="property-detail-aside">
          <h2>Location</h2>
          <div className="map-placeholder">
            <p>Map placeholder</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetailPage
