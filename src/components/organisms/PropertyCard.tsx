import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../store/store'
import type { Property } from '../../types/property'
import { favoriteToggled } from '../../features/properties/favoritesSlice'
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

  return (
    <div>
      <PropertyStatusBadge status={property.status} />
      <PriceTag price={property.price} />
      <Text variant="heading">{property.address}</Text>
      <PropertyLocation region={property.region} />
      <PropertyMeta beds={property.beds} baths={property.baths} />
      <Link to={`/properties/${property.id}`}>View details</Link>
      <button onClick={() => dispatch(favoriteToggled(String(property.id)))}>
        ♥ Favorite
      </button>
    </div>
  )
}

export default PropertyCard