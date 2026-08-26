import { useSelector } from 'react-redux'
import { selectFavoriteProperties } from '../features/properties/favoritesSlice'
import PropertyGrid from '../components/organisms/PropertyGrid'

function FavoritesPage() {
  const favoriteProperties = useSelector(selectFavoriteProperties)

  return (
    <div>
      <h1>Favorites Page</h1>
      <PropertyGrid properties={favoriteProperties} />
    </div>
  )
}

export default FavoritesPage