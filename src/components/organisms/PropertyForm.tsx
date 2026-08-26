import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import type { AppDispatch, RootState } from '../../store/store'
import { propertyAdded, propertyUpdated } from '../../features/properties/propertySlice'

function PropertyForm() {
  const dispatch = useDispatch<AppDispatch>()
  const { id } = useParams()
  const navigate = useNavigate()
  const items = useSelector((state: RootState) => state.properties.items)
  const existingProperty = id ? items.find((item) => String(item.id) === id) : undefined

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [type, setType] = useState('apartment')
  const [status, setStatus] = useState('For Sale')
  const [bedrooms, setBedrooms] = useState(1)
  const [bathrooms, setBathrooms] = useState(1)
  const [area, setArea] = useState(0)
  const [imageUrl, setImageUrl] = useState('')
  const [isFeatured, setIsFeatured] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (existingProperty) {
      setTitle(existingProperty.address)
      setPrice(existingProperty.price)
      setStatus(existingProperty.status)
    }
  }, [existingProperty])

  const handleSubmit = async () => {
    if (title === '') {
      alert('Title không được trống!')
      return
    }
    if (price <= 0) {
      alert('Price phải lớn hơn 0!')
      return
    }

    const propertyData = {
      title, price, city, address,
      type, status, bedrooms, bathrooms,
      area, imageUrl, isFeatured,
    }

    setIsLoading(true)
    setError(null)

    try {
      if (id) {
        const response = await fetch(`https://crud-property.onschoolbootcamp.edu.vn/properties/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(propertyData),
        })
        const data = await response.json()
        dispatch(propertyUpdated(data))
      } else {
        const response = await fetch('https://crud-property.onschoolbootcamp.edu.vn/properties', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(propertyData),
        })
        const data = await response.json()
        dispatch(propertyAdded(data))
      }
      navigate('/admin/properties')
    } catch (err) {
      setError('Có lỗi xảy ra, vui lòng thử lại!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <h2>{id ? 'Edit Property' : 'Add New Property'}</h2>
      {error && <p>{error}</p>}
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      </div>
      <div>
        <label>City</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </div>
      <div>
        <label>Address</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label>Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
        </select>
      </div>
      <div>
        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="For Sale">For Sale</option>
          <option value="For Rent">For Rent</option>
        </select>
      </div>
      <div>
        <label>Bedrooms</label>
        <input type="number" value={bedrooms} onChange={(e) => setBedrooms(Number(e.target.value))} />
      </div>
      <div>
        <label>Bathrooms</label>
        <input type="number" value={bathrooms} onChange={(e) => setBathrooms(Number(e.target.value))} />
      </div>
      <div>
        <label>Area</label>
        <input type="number" value={area} onChange={(e) => setArea(Number(e.target.value))} />
      </div>
      <div>
        <label>Image URL</label>
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isFeatured} onChange={(e) => setIsFeatured(e.target.checked)} />
          Featured
        </label>
      </div>
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Đang lưu...' : 'Save'}
      </button>
    </div>
  )
}

export default PropertyForm