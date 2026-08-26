import type { Property } from '../types/property'
import PropertyGrid from '../components/organisms/PropertyGrid'

const mockProperties: Property[] = [
  { id: 1, image: '', price: 300000, address: '1963 S Crescent Heights Blvd', region: 'Hills, CA 90210', beds: 4, baths: 3, status: 'For Sale' },
  { id: 2, image: '', price: 450000, address: '742 Evergreen Terrace', region: 'Springfield, IL', beds: 3, baths: 2, status: 'For Rent' },
  { id: 3, image: '', price: 520000, address: '350 Fifth Avenue', region: 'New York, NY', beds: 5, baths: 4, status: 'For Sale' },
  { id: 4, image: '', price: 180000, address: '221B Baker Street', region: 'London, UK', beds: 2, baths: 1, status: 'For Rent' },
  { id: 5, image: '', price: 670000, address: '12 Grimmauld Place', region: 'London, UK', beds: 6, baths: 3, status: 'For Sale' },
  { id: 6, image: '', price: 230000, address: '4 Privet Drive', region: 'Surrey, UK', beds: 3, baths: 2, status: 'For Sale' },
  { id: 7, image: '', price: 390000, address: '10 Downing Street', region: 'London, UK', beds: 4, baths: 3, status: 'For Rent' },
  { id: 8, image: '', price: 510000, address: '1600 Pennsylvania Ave', region: 'Washington, DC', beds: 5, baths: 4, status: 'For Sale' },
]

function PropertyListPage() {
  return (
    <div>
      <h1>Property List Page</h1>
      <PropertyGrid properties={mockProperties} />
    </div>
  )
}

export default PropertyListPage