import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'
import { fetchProperties } from '../features/properties/propertySlice'
import PropertyGrid from '../components/organisms/PropertyGrid'

function PropertyListPage() {
  const dispatch = useDispatch<AppDispatch>()
  const items = useSelector((state: RootState) => state.properties.items)
  const loading = useSelector((state: RootState) => state.properties.loading)
  const error = useSelector((state: RootState) => state.properties.error)

  useEffect(() => {
    dispatch(fetchProperties())
  }, [])

  if (loading) {
    return <div>Đang tải...</div>
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => dispatch(fetchProperties())}>Retry</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Property List Page</h1>
      <PropertyGrid properties={items} />
    </div>
  )
}

export default PropertyListPage