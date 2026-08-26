type PriceTagProps = {
  price: number
}

function PriceTag({ price }: PriceTagProps) {
  return (
    <span className="property-card-price">
      {typeof price === 'number' ? `$${price.toLocaleString('en-US')}` : 'Liên hệ'}
    </span>
  )
}

export default PriceTag
