import { useParams } from 'react-router-dom'

function PropertyDetailPage() {
  const { id } = useParams()

  return (
    <div>
      <h1>Property Detail Page</h1>
      <p>ID: {id}</p>
    </div>
  )
}

export default PropertyDetailPage