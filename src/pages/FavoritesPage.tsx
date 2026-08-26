import { useSelector } from 'react-redux'
import { selectFavoriteProperties } from '../features/properties/favoritesSlice'
import PropertyGrid from '../components/organisms/PropertyGrid'

function FavoritesPage() {
  const favoriteProperties = useSelector(selectFavoriteProperties)

  return (
    <div className="page">
      <h1 className="page-title">My Favorites</h1>
      {favoriteProperties.length === 0 ? (
        <p className="empty-state">No favorites yet</p>
      ) : (
        <PropertyGrid properties={favoriteProperties} />
      )}
    </div>
  )
}

export default FavoritesPage
