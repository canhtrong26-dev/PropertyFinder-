import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'
import { fetchProperties } from '../features/properties/propertySlice'
import { selectFavoriteProperties } from '../features/properties/favoritesSlice'
import PropertyGrid from '../components/organisms/PropertyGrid'

function FavoritesPage() {
  const dispatch = useDispatch<AppDispatch>()
  const items = useSelector((state: RootState) => state.properties.items)
  const favoriteProperties = useSelector(selectFavoriteProperties)

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchProperties())
    }
  }, [])

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
