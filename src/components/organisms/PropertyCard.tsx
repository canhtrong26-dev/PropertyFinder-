import { Link } from 'react-router-dom'
import PriceTag from '../atoms/PriceTag'
import Text from '../atoms/Text'
import PropertyLocation from '../molecules/PropertyLocation'
import PropertyMeta from '../molecules/PropertyMeta'
import PropertyStatusBadge from '../molecules/PropertyStatusBadge'

function PropertyCard() {
  return (
    <div>
      <PropertyStatusBadge />
      <PriceTag price={0} />
      <Text variant="heading">title</Text>
      <PropertyLocation />
      <PropertyMeta />
      <Link to="/properties/1">View details</Link>
    </div>
  )
}

export default PropertyCard