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
    return <div className="page">Đang tải...</div>
  }

  if (error) {
    return (
      <div className="page">
        <p>{error}</p>
        <button className="btn-add" onClick={() => dispatch(fetchProperties())}>
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="page">
      <h1 className="page-title">Property Listings</h1>
      <PropertyGrid properties={items} />
    </div>
  )
}

export default PropertyListPage