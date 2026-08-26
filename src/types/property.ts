export type Property = {
  id: number
  image: string
  price: number
  address: string
  region: string
  beds: number
  baths: number
  status: 'For Sale' | 'For Rent'
  description?: string
}