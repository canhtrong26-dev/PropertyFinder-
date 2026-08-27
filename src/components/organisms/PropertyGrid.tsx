import type { Property } from '../../types/property'
import PropertyCard from './PropertyCard'

type PropertyGridProps = {
  properties: Property[]
}

function PropertyGrid({ properties }: PropertyGridProps) {
  return (
    <div className="property-grid">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}
//sfsd
export default PropertyGrid