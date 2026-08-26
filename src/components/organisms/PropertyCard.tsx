import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../store/store'
import type { Property } from '../../types/property'
import { favoriteToggled } from '../../features/properties/favoritesSlice'
import { getPropertyImage } from '../../assets/figma'
import PriceTag from '../atoms/PriceTag'
import Text from '../atoms/Text'
import PropertyLocation from '../molecules/PropertyLocation'
import PropertyMeta from '../molecules/PropertyMeta'
import PropertyStatusBadge from '../molecules/PropertyStatusBadge'

type PropertyCardProps = {
  property: Property
}

function PropertyCard({ property }: PropertyCardProps) {
  const dispatch = useDispatch<AppDispatch>()
  const imageSource = property.image || getPropertyImage(property.id)

  return (
    <div className="property-card">
      <div className="property-card-media">
        {imageSource ? (
          <img src={imageSource} alt={property.address} />
        ) : (
          <div className="property-card-placeholder">PropertyFinder</div>
        )}
        <PropertyStatusBadge status={property.status} />
      </div>
      <div className="property-card-body">
        <PriceTag price={property.price} />
        <Text variant="heading">{property.address}</Text>
        <PropertyLocation region={property.region} />
        <PropertyMeta beds={property.beds} baths={property.baths} />
        <div className="property-card-actions">
          <Link to={`/properties/${property.id}`} className="btn-details">
            View details
          </Link>
          <button
            className="btn-favorite"
            onClick={() => dispatch(favoriteToggled(String(property.id)))}
          >
            ♥ Favorite
          </button>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
